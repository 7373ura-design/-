import type { Metadata } from "next";
import { site } from "@/data/site";
import { localHref, ogLocale, type Lang } from "@/lib/lang";
import { tr } from "@/lib/tr";

/** hreflang links for a page that exists in both languages. */
export function alternates(lang: Lang, path: string): Metadata["alternates"] {
  return {
    canonical: localHref(lang, path),
    languages: { "en-AU": path, ja: localHref("ja", path), "zh-Hans": localHref("zh", path), "x-default": path },
  };
}

/** Site-wide metadata for one language. */
export function siteMetadata(lang: Lang): Metadata {
  return {
    metadataBase: new URL(site.url),
    title: { default: tr(site.title, lang), template: "%s | NAMI" },
    description: tr(site.description, lang),
    applicationName: "NAMI",
    openGraph: {
      type: "website",
      siteName: "NAMI",
      title: tr(site.title, lang),
      description: tr(site.description, lang),
      locale: ogLocale(lang),
      alternateLocale: (["en", "ja", "zh"] as const).filter((l) => l !== lang).map(ogLocale),
      url: localHref(lang, "/"),
    },
    twitter: { card: "summary_large_image", title: tr(site.title, lang), description: tr(site.description, lang) },
    alternates: alternates(lang, "/"),
  };
}
