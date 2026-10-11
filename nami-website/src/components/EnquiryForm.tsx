"use client";

import { useRef, useState, type FormEvent } from "react";
import {
  ACCEPTED_FILE_TYPES,
  budgetRanges,
  projectTypes,
  propertyTypes,
  timelines,
  validateEnquiry,
  type EnquiryErrors,
  type EnquiryFields,
} from "@/lib/enquiry";
import { site } from "@/data/site";
import { ArrowRight } from "@/components/illustrations/Icons";
import Image from "next/image";

type Status = "idle" | "submitting" | "success" | "error";

const inputBase =
  "mt-2 block w-full border-0 border-b border-navy/30 bg-transparent px-0 py-3 text-[0.9375rem] text-navy placeholder:text-navy/35 transition-colors focus:border-vermilion focus:outline-none focus:ring-0";

function Field({
  id,
  label,
  required,
  error,
  children,
  className = "",
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="label text-navy/80">
        {label}
        {required && <span className="ml-1 text-vermilion">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-xs text-vermilion">
          {error}
        </p>
      )}
    </div>
  );
}

function Select({
  id,
  options,
  defaultValue,
  invalid,
}: {
  id: keyof EnquiryFields;
  options: readonly string[];
  defaultValue?: string;
  invalid?: boolean;
}) {
  return (
    <div className="relative">
      <select
        id={id}
        name={id}
        defaultValue={defaultValue ?? ""}
        aria-invalid={invalid || undefined}
        aria-describedby={invalid ? `${id}-error` : undefined}
        className={`${inputBase} appearance-none pr-8`}
      >
        <option value="">Select</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <span aria-hidden className="pointer-events-none absolute right-1 top-1/2 text-navy/50">
        ⌄
      </span>
    </div>
  );
}

export function EnquiryForm({ defaultProjectType }: { defaultProjectType?: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [files, setFiles] = useState<File[]>([]);
  const [delivered, setDelivered] = useState(true);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.delete("files");
    files.forEach((f) => data.append("files", f));

    const fields = Object.fromEntries(
      ["name", "email", "phone", "location", "projectType", "propertyType", "budget", "timeline", "message"].map((k) => [
        k,
        String(data.get(k) ?? ""),
      ]),
    ) as EnquiryFields;
    const clientErrors = validateEnquiry(fields, files);
    setErrors(clientErrors);
    if (Object.keys(clientErrors).length) {
      const first = Object.keys(clientErrors)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/enquiry", { method: "POST", body: data });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.ok) {
        setDelivered(json.delivered !== false);
        setStatus("success");
        form.reset();
        setFiles([]);
        window.scrollTo({ top: (formRef.current?.offsetTop ?? 0) - 120, behavior: "smooth" });
      } else {
        if (json.errors) setErrors(json.errors);
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="relative overflow-hidden bg-paper px-6 py-16 text-center sm:px-12" role="status" aria-live="polite">
        <Image src="/images/logo/nami-emblem.png" alt="" width={341} height={336} className="mx-auto w-24" />
        <p className="mt-8 font-display text-5xl text-navy">Thank you.</p>
        <p className="mt-4 font-display text-2xl text-deep">We will be in touch soon.</p>
        <p className="jp-body mt-6 text-sm leading-[2] text-navy/75">
          お問い合わせありがとうございます。
          <br />
          内容を確認のうえ、ご連絡いたします。
        </p>
        {!delivered && (
          <p className="mx-auto mt-6 max-w-md border border-dashed border-vermilion/60 p-3 text-xs text-vermilion">
            Development mode: no email provider is configured, so this enquiry was logged on the server but not sent.
          </p>
        )}
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="label link-underline mt-10 pb-1 text-navy hover:text-vermilion"
        >
          SEND ANOTHER ENQUIRY
        </button>
      </div>
    );
  }

  const err = (k: keyof EnquiryErrors) => errors[k];
  const aria = (k: keyof EnquiryFields) => ({
    "aria-invalid": err(k) ? true : undefined,
    "aria-describedby": err(k) ? `${k}-error` : undefined,
  });

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="bg-paper p-6 sm:p-10 lg:p-14" aria-label="Enquiry form">
      {/* honeypot */}
      <div aria-hidden className="absolute left-[-9999px]">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-x-10 gap-y-9 md:grid-cols-2">
        <Field id="name" label="NAME" required error={err("name")}>
          <input id="name" name="name" type="text" autoComplete="name" className={inputBase} {...aria("name")} />
        </Field>
        <Field id="email" label="EMAIL" required error={err("email")}>
          <input id="email" name="email" type="email" autoComplete="email" className={inputBase} {...aria("email")} />
        </Field>
        <Field id="phone" label="PHONE">
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputBase} />
        </Field>
        <Field id="location" label="LOCATION">
          <input
            id="location"
            name="location"
            type="text"
            placeholder="e.g. Bondi, Sydney"
            autoComplete="address-level2"
            className={inputBase}
          />
        </Field>
        <Field id="projectType" label="PROJECT TYPE" required error={err("projectType")}>
          <Select id="projectType" options={projectTypes} defaultValue={defaultProjectType} invalid={!!err("projectType")} />
        </Field>
        <Field id="propertyType" label="PROPERTY TYPE">
          <Select id="propertyType" options={propertyTypes} />
        </Field>
        <Field id="budget" label="BUDGET RANGE">
          <Select id="budget" options={budgetRanges} />
        </Field>
        <Field id="timeline" label="TIMELINE">
          <Select id="timeline" options={timelines} />
        </Field>
        <Field id="message" label="WHAT ARE YOU LOOKING FOR?" required error={err("message")} className="md:col-span-2">
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="お部屋のこと、暮らしのこと、気になっていることを自由にお書きください。"
            className={`${inputBase} resize-y`}
            {...aria("message")}
          />
        </Field>

        <div className="md:col-span-2">
          <p className="label text-navy/80" id="files-label">
            UPLOAD IMAGES / FLOOR PLAN
          </p>
          <label
            htmlFor="files"
            className="mt-3 flex cursor-pointer flex-col items-center justify-center gap-2 border border-dashed border-navy/35 px-6 py-8 text-center transition-colors hover:border-vermilion focus-within:border-vermilion"
          >
            <span className="font-display text-xl text-navy">Drop files or click to browse</span>
            <span className="text-xs text-navy/60">JPG, PNG, WebP, HEIC, PDF · up to 5 files · 10 MB total</span>
            <input
              id="files"
              name="files"
              type="file"
              multiple
              accept={ACCEPTED_FILE_TYPES.join(",")}
              aria-labelledby="files-label"
              aria-describedby={err("files") ? "files-error" : undefined}
              className="sr-only"
              onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
            />
          </label>
          {files.length > 0 && (
            <ul className="mt-3 space-y-1 text-xs text-navy/75">
              {files.map((f) => (
                <li key={f.name + f.size}>
                  {f.name} <span className="text-navy/45">({Math.round(f.size / 1024)} KB)</span>
                </li>
              ))}
            </ul>
          )}
          {err("files") && (
            <p id="files-error" role="alert" className="mt-2 text-xs text-vermilion">
              {err("files")}
            </p>
          )}
        </div>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-8 border border-vermilion/50 bg-vermilion/5 p-4 text-sm text-navy">
          送信できませんでした。時間をおいて再度お試しいただくか、
          <a href={`mailto:${site.email}`} className="underline">
            {site.email}
          </a>
          までご連絡ください。
        </p>
      )}

      <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-navy/60">* Required</p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group label inline-flex items-center justify-center gap-3 bg-vermilion px-8 py-4 text-paper transition-colors duration-500 hover:bg-navy disabled:opacity-60"
        >
          {status === "submitting" ? "SENDING…" : "SEND ENQUIRY"}
          <ArrowRight className="h-3 w-6 transition-transform duration-500 group-hover:translate-x-1.5" />
        </button>
      </div>
    </form>
  );
}
