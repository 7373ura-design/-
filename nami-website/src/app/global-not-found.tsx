import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import { NotFoundView } from "@/views/NotFoundView";
import "./globals.css";

export const metadata: Metadata = { title: "Page not found | NAMI" };

/** 404 for addresses that match no page (the site has two root layouts, one per language). */
export default function GlobalNotFound() {
  return (
    <SiteShell lang="en">
      <NotFoundView lang="en" />
    </SiteShell>
  );
}
