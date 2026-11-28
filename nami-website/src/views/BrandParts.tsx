import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BeforeAfter, CtaBand, FaqList, Finder, ImageStrip, Notes, OverlayHero, Section, Steps, faqLd } from "@/components/blocks";
import { getBeforeAfter } from "@/data/beforeAfter";
import { KindWords, LinkList, ServiceCards } from "@/components/more";
import { JsonLd, breadcrumbLd, serviceLd } from "@/components/JsonLd";
import { brands, getBrand } from "@/data/brands";
import { guides } from "@/data/guides";
import { valueIntro, valueNote, valuePoints } from "@/data/homes";
import { afterCare, kindWords } from "@/data/nami";
import { services } from "@/data/services";
import { brandSites, getBrandSite } from "@/data/sites";
import { alternates } from "@/lib/meta";
import { localHref, type Lang } from "@/lib/lang";
import { tr } from "@/lib/tr";

/** The other NAMI businesses, at the foot of every brand site. */
export function OtherBusinesses({ lang, current }: { lang: Lang; current: string }) {
  const others = brandSites.filter((s) => s.slug !== current);
  return (
    <Section
      id="other-businesses"
      kicker="NAMI GROUP"
      title={{ en: "Looking for\nsomething else?", ja: "ほかのことで\nお困りなら。" }}
      intro={{ en: "NAMI has four businesses. Each one has its own site.", ja: "NAMIには4つの事業があり、それぞれにサイトがあります。" }}
      wide
    >
      <ul className="grid gap-6 md:grid-cols-2">
        {others.map((s) => {
          const b = brands.find((x) => x.slug === s.slug)!;
          return (
            <li key={s.slug}>
              <Link href={localHref(lang, `/${s.slug}`)} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden bg-beige">
                  <Image src={b.photo.src} alt={b.photo.alt} fill sizes="(min-width:768px) 30vw, 90vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <p className="title mt-4 text-[1.35rem] transition-colors group-hover:text-deep">{b.name} →</p>
                <p className="mt-1 text-[0.9375rem] leading-relaxed text-navy/70">{tr(s.forWho, lang)}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

export function brandSiteMetadata(lang: Lang, slug: string): Metadata {
  const b = getBrand(slug)!;
  const s = getBrandSite(slug)!;
  return {
    title: `${b.name} | ${tr(b.tagline, lang)}`,
    description: `${tr(s.forWho, lang)} ${tr(b.lead, lang)}`.slice(0, 300),
    alternates: alternates(lang, `/${slug}`),
    openGraph: { images: [{ url: b.photo.src }] },
  };
}

/** NAMI Japan: what it offers now, and what comes later. */
const japanNow = [
  { title: { en: "Free first consultation", ja: "無料のご相談" }, line: { en: "Free. Why Japan, when, who is moving and what you are unsure about. We sort out together what to do first.", ja: "無料です。日本で暮らしたい理由、時期、ご家族、気になっていることをうかがい、何から始めるかを一緒に整理します。" } },
  { title: { en: "Visa options explained", ja: "ビザの種類のご説明" }, line: { en: "The visas that may suit you and the general steps. For the application, we introduce a licensed specialist in Japan.", ja: "使えそうなビザの種類と、大まかな流れをご説明します。申請の書類は、日本の専門家（行政書士）におつなぎします。" } },
  { title: { en: "Area report", ja: "地域の調査レポート" }, line: { en: "Daily life, climate, transport, schools and home prices in the areas you are considering, in one report.", ja: "気になる地域の暮らし、気候、交通、学校、家の相場を調べて、1つのレポートにまとめます。" } },
];
const japanLater = [
  { title: { en: "Home search", ja: "家探しのお手伝い" }, line: { en: "Finding a home in Japan, together with a real estate agent there.", ja: "日本の不動産会社と一緒に、日本での家探しをお手伝いします。" } },
  { title: { en: "Moving and settling in", ja: "引っ越しと暮らしの準備" }, line: { en: "Getting ready to move, and the first weeks in Japan.", ja: "引っ越しの準備から、日本での暮らしの立ち上げまで。" } },
  { title: { en: "Interiors and renovation", ja: "住まいの内装・リノベーション" }, line: { en: "If you would like, with NAMI Home.", ja: "ご希望があれば、NAMI Homeと一緒に。" } },
];

/** A brand's own top page (NAMI Value, NAMI Japan). */
export function BrandSiteView({ lang, slug }: { lang: Lang; slug: string }) {
  const b = getBrand(slug);
  const site = getBrandSite(slug);
  if (!b || !site) notFound();
  const items = services.filter((s) => b.services.includes(s.slug));
  const rel = guides.filter((g) => b.guides.includes(g.slug));
  return (
    <>
      <JsonLd
        data={[
          serviceLd(lang, { path: `/${slug}`, name: b.name, serviceType: tr(b.tagline, lang), description: tr(b.lead, lang), offers: items.map((s) => tr(s.title, lang)) }),
          faqLd(lang, site.faq),
          breadcrumbLd(lang, [{ name: b.name, path: `/${slug}` }]),
        ]}
      />
      <OverlayHero
        id="brand-h"
        eyebrow={b.word ?? { en: `${b.name} · Sydney`, ja: `${b.name} · シドニー` }}
        title={b.tagline}
        body={b.lead}
        image={b.photo}
        links={[
          { href: "#find", label: { en: "Find what you need", ja: "お悩みから探す" } },
          { href: localHref(lang, "/book"), label: { en: "Book a free consultation", ja: "無料相談を予約する" } },
        ]}
      />

      <Section id="find" kicker="START HERE" title={{ en: "What's on\nyour mind?", ja: "どんなことで\nお困りですか?" }} intro={{ en: "Choose the one closest to you. Each link goes to the page that answers it.", ja: "近いものを選んでください。それぞれ、答えが書いてあるページにつながっています。" }}>
        <Finder lang={lang} items={site.finder} />
      </Section>

      <Section id="services" kicker="SERVICES" title={{ en: "What we do.", ja: "できること。" }} intro={site.forWho} wide>
        {items.length > 0 ? <ServiceCards lang={lang} items={items} /> : slug === "nami-japan" && <Notes items={japanNow} />}
      </Section>

      {slug === "nami-japan" && (
        <Section id="later" kicker="COMING LATER" title={{ en: "What comes next.", ja: "これから始めること。" }} intro={{ en: "We will add these step by step, once the first consultations are running well.", ja: "最初のご相談が軌道に乗ってから、少しずつ始めます。" }}>
          <Notes items={japanLater} />
        </Section>
      )}


      {slug === "nami-value" && getBeforeAfter().length > 0 && (
        <Section id="before-after" kicker="BEFORE / AFTER" title={{ en: "Before\nand after.", ja: "ビフォー・\nアフター。" }} wide>
          <BeforeAfter lang={lang} items={getBeforeAfter()} />
        </Section>
      )}

      {slug === "nami-value" && (
        <Section id="value" kicker="WHAT ADDS VALUE" title={{ en: "Where it\nreally counts.", ja: "本当に効く場所に、\nお金をかける。" }} intro={valueIntro}>
          <Notes items={valuePoints} />
          <p className="mt-6 text-[0.9375rem] leading-relaxed text-navy/60">{tr(valueNote, lang)}</p>
        </Section>
      )}

      <Section id="process" kicker="HOW IT WORKS" title={{ en: "How it works.", ja: "進め方。" }}>
        {slug !== "nami-japan" && <ImageStrip lang={lang} items={[{ src: "/images/stock/materials.jpg", alt: "Image: timber, washi, stone and fabric samples laid out with a floor plan" }]} />}
        <Steps items={site.steps} />
      </Section>


      {slug !== "nami-japan" && (
      <Section id="kind-words" kicker="KIND WORDS" title={{ en: "Kind words for NAMI.", ja: "NAMIへの、お客様の声。" }} wide>
        <KindWords items={kindWords.filter((k) => k.group === "homes").slice(0, 4)} />
      </Section>
      )}

      <Section id="faq" kicker="FAQ" title={{ en: "Questions,\nanswered.", ja: "よくあるご質問。" }} wide>
        <FaqList lang={lang} groups={[{ items: site.faq }]} />
      </Section>

      {rel.length > 0 && (
        <Section id="guides" kicker="GUIDES" title={{ en: "Helpful guides.", ja: "お役立ちガイド。" }}>
          <div className="mt-8">
            <LinkList items={rel.map((g) => ({ href: localHref(lang, `/guides/${g.slug}`), label: tr(g.title, lang) }))} />
          </div>
        </Section>
      )}

      <OtherBusinesses lang={lang} current={slug} />

      <CtaBand
        lang={lang}
        title={{ en: "It all starts with a chat.", ja: "すべては、気軽なおしゃべりから。" }}
        line={
          slug === "nami-japan"
            ? { en: "Tell us about your plans, in English or Japanese. The first consultation is free.", ja: "日本での暮らしのこと、日本語・英語でお聞かせください。最初のご相談は無料です。" }
            : { en: "Tell us anything, in English, Japanese or Chinese. The first consultation is free.", ja: "何でもご相談ください。日本語・英語・中国語で。最初のご相談は無料です。" }
        }
      />
    </>
  );
}

/** The four businesses on the NAMI top page: one row each, with its services and a link to its site. */
export function BusinessRows({ lang }: { lang: Lang }) {
  return (
    <ul className="space-y-16 md:space-y-20">
      {brandSites.map((s, i) => {
        const b = brands.find((x) => x.slug === s.slug)!;
        const list = services.filter((x) => b.services.includes(x.slug));
        return (
          <li key={s.slug} className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
            <Link href={localHref(lang, `/${s.slug}`)} className={`group relative block aspect-[4/3] overflow-hidden bg-beige ${i % 2 ? "md:order-2" : ""}`}>
              <Image src={b.photo.src} alt={b.photo.alt} fill sizes="(min-width:768px) 45vw, 90vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            </Link>
            <div>
              <p className="label text-vermilion">0{i + 1}</p>
              <h3 className="title mt-2 text-[clamp(1.9rem,3.4vw,2.6rem)] !leading-tight">{b.name}</h3>
              <p className="mt-3 text-[1.0625rem] text-navy">{tr(s.forWho, lang)}</p>
              <p className="mt-2 text-[1rem] leading-relaxed text-navy/70">{tr(b.lead, lang)}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {list.map((x) => (
                  <li key={x.slug}>
                    <Link href={localHref(lang, `/services/${x.slug}`)} className="inline-block border border-navy/25 px-3 py-1.5 text-[0.875rem] text-navy/80 transition-colors hover:border-navy hover:text-navy">
                      {tr(x.title, lang)}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={localHref(lang, `/${s.slug}`)} className="label mt-7 inline-flex items-center gap-2 bg-navy px-6 py-3.5 text-paper transition-colors hover:bg-deep">
                {tr({ en: `Visit ${b.name}`, ja: `${b.name}のサイトへ` }, lang)} →
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
