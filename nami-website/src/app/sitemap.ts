import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { getWorks } from "@/data/works";
import { concepts } from "@/data/concepts";
import { localHref } from "@/lib/lang";

/** Every page in English (main) with its Japanese twin linked as an alternate. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = ["/", "/homes", "/commercial", ...getWorks().map((w) => `/homes/projects/${w.slug}`), ...concepts.map((c) => `/commercial/concepts/${c.slug}`)];
  const abs = (p: string) => new URL(p, site.url).toString();
  return paths.flatMap((path) => {
    const languages = { "en-AU": abs(path), ja: abs(localHref("ja", path)) };
    const priority = path === "/" ? 1 : path.split("/").length === 2 ? 0.9 : 0.7;
    return [
      { url: abs(path), lastModified: now, changeFrequency: "monthly" as const, priority, alternates: { languages } },
      { url: abs(localHref("ja", path)), lastModified: now, changeFrequency: "monthly" as const, priority: priority * 0.8, alternates: { languages } },
    ];
  });
}
