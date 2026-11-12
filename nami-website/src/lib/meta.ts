import type { Metadata } from "next";
import { site } from "@/data/site";
import { localHref, type Lang } from "@/lib/lang";

/** hreflang links for a page that exists in both languages. */
export function alternates(lang: Lang, path: string): Metadata["alternates"] {
  return {
    canonical: localHref(lang, path),
    languages: { "en-AU": path, ja: localHref("ja", path), "x-default": path },
  };
}

/** Site-wide metadata for one language. */
export function siteMetadata(lang: Lang): Metadata {
  return {
    metadataBase: new URL(site.url),
    title: { default: site.title[lang], template: "%s | NAMI" },
    description: site.description[lang],
    applicationName: "NAMI",
    openGraph: {
      type: "website",
      siteName: "NAMI",
      title: site.title[lang],
      description: site.description[lang],
      locale: lang === "ja" ? "ja_JP" : "en_AU",
      alternateLocale: [lang === "ja" ? "en_AU" : "ja_JP"],
      url: localHref(lang, "/"),
    },
    twitter: { card: "summary_large_image", title: site.title[lang], description: site.description[lang] },
    alternates: alternates(lang, "/"),
  };
}
