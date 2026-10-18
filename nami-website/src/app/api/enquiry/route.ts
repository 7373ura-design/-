import { NextResponse } from "next/server";
import { fieldNames, validateEnquiry, type EnquiryFields } from "@/lib/enquiry";

/**
 * Enquiry endpoint.
 *
 * Delivery is pluggable via environment variables — nothing is sent unless a
 * provider is configured:
 *
 *   RESEND_API_KEY + ENQUIRY_TO_EMAIL (+ optional ENQUIRY_FROM_EMAIL)
 *     → sends an email through the Resend REST API.
 *   FORMSPREE_ENDPOINT (e.g. https://formspree.io/f/xxxxxx)
 *     → forwards the submission to Formspree.
 *
 * With no provider: in development the request is logged and accepted (so the
 * UI can be tested); in production the route answers 503 so visitors are never
 * told a message was sent when it was not.
 */

export const runtime = "nodejs";

const field = (form: FormData, key: keyof EnquiryFields) => String(form.get(key) ?? "").slice(0, 5000);

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid form submission." }, { status: 400 });
  }

  // Honeypot — bots fill hidden fields.
  if (String(form.get("company") ?? "").trim()) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  const fields = Object.fromEntries(fieldNames.map((k) => [k, field(form, k)])) as EnquiryFields;

  const errors = validateEnquiry(fields);
  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  try {
    if (process.env.RESEND_API_KEY && process.env.ENQUIRY_TO_EMAIL) {
      await sendWithResend(fields);
      return NextResponse.json({ ok: true, delivered: true });
    }
    if (process.env.FORMSPREE_ENDPOINT) {
      await sendWithFormspree(form);
      return NextResponse.json({ ok: true, delivered: true });
    }
  } catch (error) {
    console.error("[enquiry] delivery failed", error);
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }

  if (process.env.NODE_ENV !== "production") {
    console.info("[enquiry] no provider configured — received (not sent):", fields);
    return NextResponse.json({ ok: true, delivered: false });
  }
  return NextResponse.json({ ok: false, error: "not_configured" }, { status: 503 });
}

async function sendWithResend(fields: EnquiryFields) {
  const rows = Object.entries(fields)
    .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#555">${k}</td><td>${escapeHtml(v) || "—"}</td></tr>`)
    .join("");
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.ENQUIRY_FROM_EMAIL ?? "NAMI Website <onboarding@resend.dev>",
      to: [process.env.ENQUIRY_TO_EMAIL],
      reply_to: fields.email,
      subject: `Enquiry — ${fields.name}${fields.projectType ? ` — ${fields.projectType}` : ""}`,
      html: `<h2>New NAMI enquiry</h2><table>${rows}</table>`,
    }),
  });
  if (!res.ok) throw new Error(`Resend responded ${res.status}: ${await res.text()}`);
}

async function sendWithFormspree(form: FormData) {
  const res = await fetch(process.env.FORMSPREE_ENDPOINT as string, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: form,
  });
  if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}
