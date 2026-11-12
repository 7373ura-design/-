import { site } from "@/data/site";
import { localHref, type Lang } from "@/lib/lang";

/**
 * Structured data (schema.org JSON-LD) so search engines and AI assistants can
 * read who NAMI is, where it works and where to find it. Not shown on the page.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

const abs = (path: string) => new URL(path, site.url).toString();

export function organizationLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": abs("/#organization"),
    name: "NAMI",
    alternateName: ["NAMI Studio", "nami.studio"],
    slogan: site.tagline,
    description: site.description[lang],
    url: abs(localHref(lang, "/")),
    logo: abs("/images/logo/nami-logo.png"),
    image: abs("/opengraph-image"),
    email: site.email,
    address: { "@type": "PostalAddress", addressLocality: "Sydney", addressRegion: "NSW", addressCountry: "AU" },
    areaServed: [
      { "@type": "City", name: "Sydney" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "New Zealand" },
    ],
    knowsLanguage: ["en", "ja"],
    knowsAbout: ["Japandi interior design", "Interior design", "Residential interior design", "Home renovation design", "Japanese design"],
    sameAs: [site.instagram, site.facebook],
  };
}

export function websiteLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NAMI",
    url: abs(localHref(lang, "/")),
    inLanguage: lang === "ja" ? "ja" : "en-AU",
    publisher: { "@id": abs("/#organization") },
  };
}

/** Home > page trail for search results. */
export function breadcrumbLd(lang: Lang, trail: { name: string; path: string }[]) {
  const items = [{ name: "NAMI", path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, item: abs(localHref(lang, t.path)) })),
  };
}

/** A finished project: what it is, its photos and who designed it. */
export function projectLd(lang: Lang, w: { slug: string; title: { en: string; ja: string }; type: { en: string; ja: string }; lead: { en: string; ja: string }; photos: { src: string }[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: w.title[lang],
    headline: w.lead[lang],
    about: lang === "ja" ? `ジャパンディのインテリアデザイン（${w.type.ja}）` : `Japandi interior design for a ${w.type.en.toLowerCase()}`,
    genre: "Japandi interior design",
    inLanguage: lang === "ja" ? "ja" : "en-AU",
    url: abs(localHref(lang, `/works/${w.slug}`)),
    image: w.photos.map((p) => abs(p.src)),
    creator: { "@id": abs("/#organization") },
  };
}
