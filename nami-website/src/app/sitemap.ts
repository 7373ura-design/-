import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { getWorks } from "@/data/works";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/about", "/services", "/projects", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  const workPages = getWorks().map((w) => ({ url: `${site.url}/works/${w.slug}`, lastModified: now, priority: 0.7 }));
  return [...pages, ...workPages];
}
