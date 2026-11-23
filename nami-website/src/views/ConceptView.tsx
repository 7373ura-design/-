import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui";
import { CtaBand, OverlayHero, Section, Steps, SubNav } from "@/components/blocks";
import { JsonLd, breadcrumbLd } from "@/components/JsonLd";
import { site } from "@/data/site";
import { concepts, getConcept } from "@/data/concepts";
import { T } from "@/lib/i18n";
import { alternates } from "@/lib/meta";
import { localHref, type Lang } from "@/lib/lang";

export type ConceptProps = { params: Promise<{ slug: string }> };

export function conceptParams() {
  return concepts.map((c) => ({ slug: c.slug }));
}

export async function conceptMetadata(lang: Lang, { params }: ConceptProps): Promise<Metadata> {
  const c = getConcept((await params).slug);
  if (!c) return {};
  return {
    title: `${c.title} | ${c.kind[lang]}`,
    description: `${c.lead[lang]} ${lang === "ja" ? "シドニー拠点のNAMIによるジャパンディのデザイン。" : "Japandi design by NAMI, based in Sydney."}`,
    alternates: alternates(lang, `/commercial/concepts/${c.slug}`),
    openGraph: { images: [{ url: c.cover.src }] },
  };
}

/** One concept project: brief, why this theme, the meaning in the space, room by room, Japanese words. */
export async function ConceptView({ lang, params }: ConceptProps & { lang: Lang }) {
  const c = getConcept((await params).slug);
  if (!c) notFound();
  const others = concepts.filter((o) => o.slug !== c.slug);
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: c.title,
            headline: c.lead[lang],
            genre: "Japandi commercial interior design concept",
            inLanguage: lang === "ja" ? "ja" : "en-AU",
            image: c.rooms.filter((r) => r.src).map((r) => new URL(r.src!, site.url).toString()),
            creator: { "@id": new URL("/#organization", site.url).toString() },
          },
          breadcrumbLd(lang, [
            { name: lang === "ja" ? "お店・オフィス" : "Shops and Offices", path: "/commercial" },
            { name: c.title, path: `/commercial/concepts/${c.slug}` },
          ]),
        ]}
      />
      <SubNav lang={lang} current="commercial" back={{ href: "/commercial#concepts", label: { en: "All concepts", ja: "デザイン事例一覧" } }} links={[]} />
      <OverlayHero flush id="concept-h" eyebrow={c.kind} title={{ en: c.title, ja: c.title }} body={c.lead} image={c.cover} />

      <Section id="brief" kicker="THE BRIEF" title={c.brief.title} intro={c.brief.body} />

      <Section id="why" kicker="WHY THIS THEME" title={{ en: "Three reasons.", ja: "3つの理由。" }} wide>
        <ol className="grid gap-8 md:grid-cols-3">
          {c.reasons.map((r, i) => (
            <li key={r.title.en} className="border-t border-vermilion/60 pt-5">
              <p className="title text-[2rem] !leading-none text-vermilion">{String(i + 1).padStart(2, "0")}</p>
              <p className="title mt-3 text-[1.35rem] !leading-snug">
                <T ja={r.title.ja} en={r.title.en} />
              </p>
              <p className="mt-2 text-[1.0625rem] leading-relaxed text-navy/75">
                <T ja={r.body.ja} en={r.body.en} />
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="meaning" kicker="FROM MEANING TO SPACE" title={c.values.title} intro={c.values.body} />

      <section id="rooms" className="section-rule scroll-mt-36 md:scroll-mt-40" aria-labelledby="rooms-h">
        <Container className="pb-24 pt-14 md:pb-32 md:pt-20">
          <p className="kicker">ROOM BY ROOM</p>
          <h2 id="rooms-h" className="title mt-3 text-[clamp(2rem,4vw,2.6rem)]">{lang === "ja" ? "空間ごとに。" : "Room by room."}</h2>
          <div className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-3" data-lightbox>
            {c.rooms.map((r, i) => (
              <figure key={r.title.en} className={r.src && i === 0 ? "md:col-span-3" : ""}>
                {r.src && (
                  <div className={`relative overflow-hidden bg-beige ${i === 0 ? "aspect-[16/9]" : "aspect-[4/5]"}`} data-lightbox-item>
                    <Image src={r.src} alt={r.alt ?? ""} fill sizes={i === 0 ? "100vw" : "(min-width:768px) 30vw, 90vw"} className="object-cover" />
                  </div>
                )}
                <figcaption className={r.src ? "mt-3" : "border-t border-navy/15 pt-4"}>
                  <span className="title text-[1.3rem]">
                    <T ja={r.title.ja} en={r.title.en} />
                  </span>
                  <span className="mt-1 block text-[1rem] leading-relaxed text-navy/75">
                    <T ja={r.line.ja} en={r.line.en} />
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-[0.875rem] text-navy/55">
            <T ja={c.note.ja} en={c.note.en} />
          </p>
        </Container>
      </section>

      <Section id="words" kicker="JAPANESE WORDS IN THIS DESIGN" title={{ en: "The words behind it.", ja: "デザインに込めた言葉。" }}>
        <Steps items={c.words.map((w) => ({ title: { en: `${w.term} ${w.kana}`, ja: `${w.kana}(${w.term})` }, line: w.line }))} />
      </Section>

      {others.length > 0 && (
        <Section id="more" kicker="MORE CONCEPTS" title={{ en: "Another concept.", ja: "ほかの事例。" }}>
          <ul className="mt-6 space-y-3">
            {others.map((o) => (
              <li key={o.slug}>
                <a href={localHref(lang, `/commercial/concepts/${o.slug}`)} className="text-[1.0625rem] text-vermilion hover:underline">
                  {o.title}: {o.kind[lang]} →
                </a>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <CtaBand
        lang={lang}
        title={{ en: "Let's find the meaning of your space", ja: "あなたのお店の「意味」を、一緒に" }}
        line={{ en: "The design proposal is free. English or Japanese.", ja: "デザインの提案は無料です。日本語でも英語でも。" }}
      />
    </>
  );
}
