import type { Metadata, Viewport } from "next";
import { SiteShell } from "@/components/SiteShell";
import { siteMetadata } from "@/lib/meta";
import "../globals.css";

export const metadata: Metadata = siteMetadata("en");

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#F2E8D9",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteShell lang="en">{children}</SiteShell>;
}
