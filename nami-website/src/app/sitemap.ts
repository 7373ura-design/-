import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { getWorks } from "@/data/works";
import { concepts } from "@/data/concepts";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { guides } from "@/data/guides";
import { brands } from "@/data/brands";
import { localHref } from "@/lib/lang";

/** Every page in English (main) with its Japanese twin linked as an alternate. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = ["/", ...getWorks().map((w) => `/homes/projects/${w.slug}`), ...concepts.map((c) => `/commercial/concepts/${c.slug}`), ...brands.map((b) => `/${b.slug}`), "/about", "/how-we-work", "/book", "/areas", "/guides", ...services.map((x) => `/services/${x.slug}`), ...areas.map((a) => `/areas/${a.slug}`), ...guides.map((g) => `/guides/${g.slug}`)];
  const abs = (p: string) => new URL(p, site.url).toString();
  return paths.flatMap((path) => {
    const languages = { "en-AU": abs(path), ja: abs(localHref("ja", path)), "zh-Hans": abs(localHref("zh", path)) };
    const priority = path === "/" ? 1 : path.split("/").length === 2 ? 0.9 : 0.7;
    return [
      { url: abs(path), lastModified: now, changeFrequency: "monthly" as const, priority, alternates: { languages } },
      { url: abs(localHref("ja", path)), lastModified: now, changeFrequency: "monthly" as const, priority: priority * 0.8, alternates: { languages } },
      { url: abs(localHref("zh", path)), lastModified: now, changeFrequency: "monthly" as const, priority: priority * 0.8, alternates: { languages } },
    ];
  });
}
