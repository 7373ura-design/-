import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { articles } from "@/data/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["", "/about", "/services", "/projects", "/journal", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  const projectPages = projects.map((p) => ({ url: `${site.url}/projects/${p.slug}`, lastModified: now, priority: 0.6 }));
  const articlePages = articles
    .filter((a) => a.published)
    .map((a) => ({ url: `${site.url}/journal/${a.slug}`, lastModified: new Date(a.date), priority: 0.5 }));
  return [...pages, ...projectPages, ...articlePages];
}
