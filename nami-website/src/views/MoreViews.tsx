import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui";
import { CtaBand, Notes, OverlayHero, Section, SubNav } from "@/components/blocks";
import { KindWords, LinkList, Numbers, PageTop, ServiceCards, WorryTable } from "@/components/more";
import { JsonLd, breadcrumbLd, serviceLd } from "@/components/JsonLd";
import { areas, getArea } from "@/data/areas";
import { brandOfService, brands, getBrand } from "@/data/brands";
import { getGuide, guides } from "@/data/guides";
import { afterCare, afterCareWorks, beliefs, journey, kindWords, numbers, qualifications, story, whyChoose } from "@/data/nami";
import { commercialServicesList, getService, homeServicesList, services } from "@/data/services";
import { site } from "@/data/site";
import { T } from "@/lib/i18n";
import { alternates } from "@/lib/meta";
import { localHref, type Lang } from "@/lib/lang";
import { tr } from "@/lib/tr";
import { langTag } from "@/lib/lang";

type SlugProps = { params: Promise<{ slug: string }> };
export type { SlugProps };

const cta = (lang: Lang) => (
  <CtaBand
    lang={lang}
    title={{ en: "It all starts with a chat.", ja: "すべては、気軽なおしゃべりから。" }}
    line={{
      en: "From a small everyday worry to a full renovation or a new build, tell us anything. The first consultation is free.",
      ja: "毎日のちょっとしたお悩みから、リノベーション、新築まで。何でもご相談ください。最初のご相談は無料です。",
    }}
  />
);

/* ------------------------------------------------------------- Services */

export const serviceParams = () => services.map((s) => ({ slug: s.slug }));

export async function serviceMetadata(lang: Lang, { params }: SlugProps): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return {
    title: lang === "en" ? `${s.title.en} in Sydney` : `${tr(s.title, lang)}｜${lang === "ja" ? "シドニー" : "悉尼"}`,
    description: `${tr(s.line, lang)} ${tr(s.lead, lang)}`.slice(0, 300),
    alternates: alternates(lang, `/services/${s.slug}`),
    openGraph: { images: [{ url: (s.hero ?? s.photos[0]).src }] },
  };
}

export async function ServiceView({ lang, params }: SlugProps & { lang: Lang }) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const ownBrand = brandOfService(s.slug);
  const groupPath = ownBrand ? `/${ownBrand.slug}` : "/";
  const groupName = ownBrand ? { en: ownBrand.name, ja: ownBrand.name } : { en: "NAMI top", ja: "NAMIトップ" };
  const siblings = services.filter((o) => (ownBrand ? ownBrand.services.includes(o.slug) : o.group === s.group) && o.slug !== s.slug);
  const related = guides.filter((g) => s.guides.includes(g.slug));
  return (
    <>
      <JsonLd
        data={[
          serviceLd(lang, { path: `/services/${s.slug}`, name: tr(s.title, lang), serviceType: s.title.en, description: tr(s.lead, lang), offers: s.include.map((i) => tr(i.title, lang)) }),
          breadcrumbLd(lang, [
            { name: tr(groupName, lang), path: groupPath },
            { name: tr(s.title, lang), path: `/services/${s.slug}` },
          ]),
        ]}
      />
      <SubNav lang={lang} back={{ href: groupPath, label: groupName }} links={[]} />
      <OverlayHero
        flush
        id="service-h"
        eyebrow={{ en: `${brandOfService(s.slug)?.name ?? groupName.en} · Sydney`, ja: `${brandOfService(s.slug)?.name ?? groupName.ja} · シドニー` }}
        title={s.title}
        body={s.lead}
        image={s.hero ?? s.photos[0]}
        links={[{ href: localHref(lang, "/book"), label: { en: "Book a free consultation", ja: "無料相談を予約する" } }]}
        caption={s.hero ? [tr({ ja: "イメージ", en: "IMAGE" }, lang), s.hero.credit].filter(Boolean).join(" · ") : s.concept ? tr({ ja: "コンセプトデザイン", en: "CONCEPT DESIGN" }, lang) : undefined}
      />

      <Section id="worries" kicker="YOUR WORRY, HOW WE HELP" title={{ en: "Sound familiar?", ja: "こんなお悩み、ありませんか?" }}>
        <div className="mt-8">
          <WorryTable items={s.worries} />
        </div>
      </Section>

      <Section id="include" kicker="WHAT WE DO" title={{ en: "What's included.", ja: "お手伝いすること。" }} intro={s.ideas}>
        <Notes items={s.include} />
      </Section>

      {(s.hero ? s.photos : s.photos.slice(1)).length > 0 && (
        <section className="section-rule" aria-label={tr({ ja: "NAMIの事例", en: "NAMI's work" }, lang)}>
          <Container className="py-16 md:py-20">
          {s.hero && (
            <p className="kicker mb-6">{tr({ en: s.concept ? "NAMI'S WORK · CONCEPT DESIGN" : "NAMI'S WORK", ja: s.concept ? "NAMIの事例 · コンセプトデザイン" : "NAMIの事例" }, lang)}</p>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            {(s.hero ? s.photos : s.photos.slice(1)).map((p) => (
              <div key={p.src} className="relative aspect-[4/3] overflow-hidden bg-beige">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width:640px) 45vw, 90vw" className="object-cover" />
              </div>
            ))}
          </div>
          </Container>
        </section>
      )}

      {(related.length > 0 || siblings.length > 0) && (
        <Section id="more" kicker="READ MORE" title={{ en: "Helpful guides and more services.", ja: "お役立ちガイドと、ほかのサービス。" }}>
          <div className="mt-8 grid gap-10 sm:grid-cols-2">
            <LinkList items={related.map((g) => ({ href: localHref(lang, `/guides/${g.slug}`), label: tr(g.title, lang) }))} />
            <LinkList items={siblings.map((o) => ({ href: localHref(lang, `/services/${o.slug}`), label: tr(o.title, lang) }))} />
          </div>
        </Section>
      )}
      {cta(lang)}
    </>
  );
}

/* ---------------------------------------------------------------- Areas */

export const areaParams = () => areas.map((a) => ({ slug: a.slug }));

export async function areaMetadata(lang: Lang, { params }: SlugProps): Promise<Metadata> {
  const a = getArea((await params).slug);
  if (!a) return {};
  return {
    title: lang === "ja" ? `${a.name.ja}のインテリアデザイン` : `Interior Design in ${a.name.en}`,
    description: tr(a.lead, lang),
    alternates: alternates(lang, `/areas/${a.slug}`),
  };
}

export async function AreaView({ lang, params }: SlugProps & { lang: Lang }) {
  const a = getArea((await params).slug);
  if (!a) notFound();
  return (
    <>
      <JsonLd data={breadcrumbLd(lang, [{ name: tr({ ja: "対応エリア", en: "Areas" }, lang), path: "/areas" }, { name: tr(a.name, lang), path: `/areas/${a.slug}` }])} />
      <PageTop id="area-h" kicker="WHERE WE WORK" title={{ en: `Interior design in ${a.name.en}.`, ja: `${a.name.ja}のインテリアデザイン。` }} lead={a.lead} />
      <Section id="how" kicker="HOW WE WORK HERE" title={{ en: "How it works.", ja: "進め方。" }}>
        <Notes items={a.how} />
      </Section>
      <Section id="services" kicker="SERVICES" title={{ en: "What we can do.", ja: "できること。" }} wide>
        <ServiceCards lang={lang} items={a.slug === "sydney" || a.slug === "new-zealand" ? services : homeServicesList} />
      </Section>
      {cta(lang)}
    </>
  );
}

export function areasIndexMetadata(lang: Lang): Metadata {
  return {
    title: tr({ ja: "対応エリア", en: "Areas We Work In" }, lang),
    description: tr({ ja: "シドニー拠点。メルボルン、パース、ニュージーランド、日本にも対応しています。", en: "Based in Sydney, with projects in Melbourne, Perth, New Zealand and Japan." }, lang),
    alternates: alternates(lang, "/areas"),
  };
}

export function AreasIndexView({ lang }: { lang: Lang }) {
  return (
    <>
      <PageTop
        id="areas-h"
        kicker="WHERE WE WORK"
        title={{ en: "Based in Sydney.\nProjects across three countries.", ja: "シドニーを拠点に、\n3つの国で。" }}
        lead={{ en: "Australia, New Zealand and Japan, in English or Japanese.", ja: "オーストラリア、ニュージーランド、日本。日本語でも英語でも。" }}
      />
      <Section id="list" kicker="AREAS" title={{ en: "Choose your area.", ja: "エリアを選ぶ。" }}>
        <div className="mt-8">
          <LinkList items={areas.map((a) => ({ href: localHref(lang, `/areas/${a.slug}`), label: tr(a.name, lang) }))} />
        </div>
      </Section>
      {cta(lang)}
    </>
  );
}

/* --------------------------------------------------------------- Guides */

export function guidesIndexMetadata(lang: Lang): Metadata {
  return {
    title: tr({ ja: "お役立ちガイド(費用・リノベーション・住まいの価値)", en: "Guides: Costs, Renovations and Property Value" }, lang),
    description:
      lang === "ja"
        ? "家づくりは高い?どこから始める?住まいの価値は?NAMIが、よくあるお悩みにお答えするガイドです。"
        : "Is design expensive? Where to start? What adds value? Practical guides from NAMI, an interior design studio in Sydney.",
    alternates: alternates(lang, "/guides"),
  };
}

export function GuidesIndexView({ lang }: { lang: Lang }) {
  return (
    <>
      <PageTop
        id="guides-h"
        kicker="GUIDES"
        title={{ en: "Answers to\neveryday worries.", ja: "毎日の悩みに、\n答えるガイド。" }}
        lead={{ en: "Costs, renovations, safety and property value: practical guides before you start.", ja: "費用、リノベーション、安全、住まいの価値。始める前に読んでほしいガイドです。" }}
      />
      <section className="section-rule">
        <Container className="grid gap-x-10 gap-y-10 py-16 md:grid-cols-2 md:py-20">
          {guides.map((g) => (
            <Link key={g.slug} href={localHref(lang, `/guides/${g.slug}`)} className="group block border-t border-navy/20 pt-5">
              <p className="title text-[1.4rem] !leading-snug transition-colors group-hover:text-deep">{tr(g.title, lang)}</p>
              <p className="mt-2 text-[1rem] leading-relaxed text-navy/75">{tr(g.description, lang)}</p>
              <p className="label mt-3 text-vermilion">{tr({ ja: "読む →", en: "Read →" }, lang)}</p>
            </Link>
          ))}
        </Container>
      </section>
      {cta(lang)}
    </>
  );
}

export const guideParams = () => guides.map((g) => ({ slug: g.slug }));

export async function guideMetadata(lang: Lang, { params }: SlugProps): Promise<Metadata> {
  const g = getGuide((await params).slug);
  if (!g) return {};
  return { title: tr(g.title, lang), description: tr(g.description, lang), alternates: alternates(lang, `/guides/${g.slug}`) };
}

export async function GuideView({ lang, params }: SlugProps & { lang: Lang }) {
  const g = getGuide((await params).slug);
  if (!g) notFound();
  const abs = (p: string) => new URL(p, site.url).toString();
  const rel = services.filter((s) => g.services.includes(s.slug));
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: tr(g.title, lang),
            description: tr(g.description, lang),
            datePublished: g.date,
            inLanguage: langTag(lang),
            author: { "@id": abs("/#organization") },
            publisher: { "@id": abs("/#organization") },
            mainEntityOfPage: abs(localHref(lang, `/guides/${g.slug}`)),
          },
          breadcrumbLd(lang, [{ name: tr({ ja: "お役立ちガイド", en: "Guides" }, lang), path: "/guides" }, { name: tr(g.title, lang), path: `/guides/${g.slug}` }]),
        ]}
      />
      <PageTop id="guide-h" kicker="GUIDE" title={g.title} lead={g.description}>
        <p className="mt-4">
          <Link href={localHref(lang, "/guides")} className="text-[0.9375rem] text-navy/70 hover:text-vermilion">
            ← {tr({ ja: "ガイド一覧", en: "All guides" }, lang)}
          </Link>
        </p>
      </PageTop>
      <article className="section-rule">
        <Container className="max-w-3xl py-14 md:py-20">
          {g.sections.map((sec) => (
            <section key={sec.heading.en} className="mt-12 first:mt-0">
              <h2 className="title text-[1.6rem] !leading-snug">{tr(sec.heading, lang)}</h2>
              {sec.body.map((p) => (
                <p key={p.en} className="jp-body mt-4 text-[1.0625rem] text-navy/85">
                  {tr(p, lang)}
                </p>
              ))}
            </section>
          ))}
          {g.sources && (
            <p className="mt-12 text-[0.875rem] text-navy/60">
              {tr({ ja: "参考:", en: "Sources: " }, lang)}
              {g.sources.map((s, i) => (
                <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="mr-3 underline hover:text-vermilion">
                  {s.label}
                </a>
              ))}
            </p>
          )}
          {rel.length > 0 && (
            <div className="mt-12 border-t border-navy/15 pt-8">
              <p className="kicker text-vermilion">{tr({ ja: "関連するサービス", en: "RELATED SERVICES" }, lang)}</p>
              <div className="mt-4">
                <LinkList items={rel.map((s) => ({ href: localHref(lang, `/services/${s.slug}`), label: tr(s.title, lang) }))} />
              </div>
            </div>
          )}
        </Container>
      </article>
      {cta(lang)}
    </>
  );
}

/* ---------------------------------------------------------------- About */

export function aboutMetadata(lang: Lang): Metadata {
  return {
    title: tr({ ja: "NAMIについて(想い・資格・お客様の声)", en: "About NAMI: Our Story, Qualifications and Kind Words" }, lang),
    description:
      lang === "ja"
        ? "日本生まれ、日本育ちのデザイナーが立ち上げた、シドニーのインテリアデザインスタジオ。建築・インテリア・日本庭園・不動産の資格と、ジャパンホームズのバックアップ。"
        : "A Sydney interior design studio founded by a designer born and raised in Japan, qualified in interior design, Japanese gardens, architecture and real estate, and backed by Japan Homes.",
    alternates: alternates(lang, "/about"),
  };
}

export function AboutView({ lang }: { lang: Lang }) {
  return (
    <>
      <JsonLd data={breadcrumbLd(lang, [{ name: tr({ ja: "NAMIについて", en: "About" }, lang), path: "/about" }])} />
      <OverlayHero
        id="about-h"
        eyebrow={{ en: "About NAMI · Interior Design · Sydney", ja: "NAMIについて · インテリアデザイン · シドニー" }}
        title={{ en: "Why choose NAMI?", ja: "NAMIが選ばれる理由。" }}
        body={{ en: "More than design. For the long run. From Japan. Qualified. Backed by Japan Homes.", ja: "デザイン以上のことを。長いお付き合いを。日本から。確かな資格。ジャパンホームズのバックアップ。" }}
        image={{ src: "/images/portfolio/old-meets-new/02.jpg", alt: "Old Meets New by NAMI: an entry with timber slat screens" }}
        links={[
          { href: "#story", label: { en: "Our story", ja: "NAMIの想い" } },
          { href: "#kind-words", label: { en: "Kind words", ja: "お客様の声" } },
        ]}
      />
      <Section id="why" kicker="WHY CHOOSE NAMI" title={{ en: "More than design.", ja: "デザイン以上のことを。" }} wide>
        <ul className="grid gap-x-10 gap-y-10 md:grid-cols-2">
          {whyChoose.map((w) => (
            <li key={w.title.en} className="border-t border-vermilion/60 pt-5">
              <p className="title text-[1.5rem] !leading-snug">{tr(w.title, lang)}</p>
              <p className="jp-body mt-3 text-[1.0625rem] text-navy/80">{tr(w.body, lang)}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="story" kicker="OUR STORY" title={{ en: "Why I started NAMI.", ja: "NAMIを始めた理由。" }} wide>
        <div className="mx-auto max-w-3xl space-y-10">
          {story.map((p) => (
            <div key={p.title.en}>
              <h3 className="title text-[1.4rem]">{tr(p.title, lang)}</h3>
              <p className="jp-body mt-3 text-[1.0625rem] text-navy/85">{tr(p.body, lang)}</p>
            </div>
          ))}
          <p className="text-[0.9375rem] text-navy/60">— {tr({ ja: "NAMI 代表・デザイナー", en: "Founder and designer, NAMI" }, lang)}</p>
        </div>
      </Section>

      <Section id="qualified" kicker="QUALIFIED IN" title={{ en: "Qualified.", ja: "確かな資格。" }}>
        <Notes items={qualifications} />
      </Section>

      <Section id="believe" kicker="WHAT WE BELIEVE" title={{ en: "What we believe.", ja: "大切にしていること。" }} wide>
        <ul className="grid gap-x-10 gap-y-12 md:grid-cols-2">
          {beliefs.map((b) => (
            <li key={b.key} id={b.key} className="scroll-mt-40 border-t border-navy/20 pt-5">
              <p className="title text-[1.45rem] !leading-snug">{tr(b.title, lang)}</p>
              <p className="jp-body mt-3 text-[1.0625rem] text-navy/80">{tr(b.body, lang)}</p>
              {b.points && (
                <ul className="mt-4 space-y-2">
                  {b.points.map((p) => (
                    <li key={p.title.en} className="text-[1rem] text-navy/80">
                      <span className="title text-navy">{tr(p.title, lang)}</span> {tr(p.line, lang)}
                    </li>
                  ))}
                </ul>
              )}
              {b.note && <p className="mt-3 text-[0.8125rem] text-navy/55">{tr(b.note, lang)}</p>}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="numbers" kicker="IN NUMBERS" title={{ en: "Backed by Japan Homes.", ja: "ジャパンホームズのバックアップ。" }} wide>
        <Numbers items={numbers} note={{ en: "Japan Homes figures are our partner's own. NAMI and Japan Homes do not do building work themselves; we arrange licensed builders.", ja: "ジャパンホームズの数字は、パートナーの実績です。NAMIもジャパンホームズも自社で工事はせず、ライセンスを持つ施工会社を手配します。" }} />
      </Section>

      <Section id="kind-words" kicker="KIND WORDS" title={{ en: "Kind words.", ja: "お客様の声。" }} wide>
        <KindWords items={kindWords} />
      </Section>
      {cta(lang)}
    </>
  );
}

/* ---------------------------------------------------- Worries / journey */

export function worriesMetadata(lang: Lang): Metadata {
  return {
    title: tr({ ja: "家づくりのお悩み相談(買う前から住んだあとまで)", en: "How We Work: From Before You Buy to After You Move In" }, lang),
    description:
      lang === "ja"
        ? "家を買う前、買ったばかり、予算、デザイン、工事、住み始めてから。どの段階のお悩みにも、NAMIがお手伝いします。"
        : "Before you buy, just bought, budget, design, build, after you move in: wherever you are, we help with the worries that hold you back.",
    alternates: alternates(lang, "/how-we-work"),
  };
}

export function WorriesView({ lang }: { lang: Lang }) {
  return (
    <>
      <PageTop
        id="worries-h"
        kicker="HOW WE WORK"
        title={{ en: "No worry\nis too small.", ja: "どんな小さな悩みも、\nご相談ください。" }}
        lead={{
          en: "Wherever you are, tell us where you're stuck. We'll solve it with you, one step at a time. Through 20+ years of trusted connections, we can bring in the right people.",
          ja: "今どの段階でも、困っていることを教えてください。一歩ずつ、一緒に解決します。20年以上の信頼のつながりで、ぴったりの人をご紹介できます。",
        }}
      >
        <nav className="mt-8 flex flex-wrap gap-2" aria-label={tr({ ja: "段階", en: "Stages" }, lang)}>
          {journey.map((j, i) => (
            <a key={j.key} href={`#${j.key}`} className="border border-navy/30 px-4 py-2 text-[0.9375rem] text-navy transition-colors hover:bg-navy hover:text-paper">
              {String(i + 1).padStart(2, "0")} {tr(j.title, lang)}
            </a>
          ))}
        </nav>
      </PageTop>
      {journey.map((j) => (
        <Section key={j.key} id={j.key} kicker={j.title.en.toUpperCase()} title={{ en: `${j.title.en}.`, ja: `${j.title.ja}。` }}>
          <div className="mt-8">
            <WorryTable items={j.items} />
          </div>
        </Section>
      ))}
      {cta(lang)}
    </>
  );
}

/* ---------------------------------------------------------------- Book */

export function bookMetadata(lang: Lang): Metadata {
  return {
    title: tr({ ja: "無料相談の予約", en: "Book a Free Consultation" }, lang),
    description:
      lang === "ja"
        ? "最初のご相談は無料です。シドニーで対面、またはオンラインで。日本語でも英語でも。2営業日以内にご返信します。"
        : "The first consultation is free: in person in Sydney or online, in English or Japanese. We reply within 2 business days.",
    alternates: alternates(lang, "/book"),
  };
}

const field = "mt-1.5 w-full border border-navy/25 bg-paper px-3 py-2.5 text-[1rem] text-navy outline-none focus:border-navy";

export function BookView({ lang }: { lang: Lang }) {
  const ja = lang === "ja";
  const promises = [
    { title: { en: "The first consultation is free", ja: "最初のご相談は無料" }, line: { en: "No obligation", ja: "ご契約の義務はありません" } },
    { title: { en: "A reply within 2 business days", ja: "2営業日以内にご返信" }, line: { en: "By email, or by phone if you prefer", ja: "メール、またはご希望ならお電話で" } },
    { title: { en: "Costs up front", ja: "費用は最初に" }, line: { en: "A written quote before any work begins", ja: "始める前に、書面でお見積もり" } },
    { title: { en: "In person or online", ja: "対面でもオンラインでも" }, line: { en: "In Sydney, or by video call from anywhere", ja: "シドニーで、またはビデオ通話でどこからでも" } },
    { title: { en: "English or Japanese", ja: "日本語でも英語でも" }, line: { en: "Whichever is easier for you", ja: "話しやすいほうで" } },
  ];
  return (
    <>
      <PageTop
        id="book-h"
        kicker="BOOK A CONSULTATION"
        title={{ en: "It all starts\nwith a chat.", ja: "すべては、\n気軽なおしゃべりから。" }}
        lead={{
          en: "Still looking, just bought, or ready to renovate. Start wherever you are.",
          ja: "まだ探している方も、買ったばかりの方も、リノベーションを決めた方も。今いるところから始めましょう。",
        }}
      />
      <Section id="promise" kicker="OUR PROMISE" title={{ en: "What you can expect.", ja: "お約束します。" }}>
        <Notes items={promises} />
      </Section>
      <section className="section-rule">
        <Container className="py-16 md:py-20">
          <form id="enquiry" data-enquiry={site.email} className="mx-auto max-w-2xl border border-navy/15 bg-cream p-6 md:p-8">
            <p className="kicker text-vermilion">{tr({ ja: "ご相談の予約", en: "BOOK YOUR FREE CONSULTATION" }, lang)}</p>
            <p className="title mt-2 text-[1.5rem]">{tr({ ja: "空間について、少し教えてください。", en: "Tell us a little about your space." }, lang)}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-[0.9375rem] text-navy/80">
                {tr({ ja: "お名前 *", en: "Name *" }, lang)}
                <input name="name" required className={field} />
              </label>
              <label className="text-[0.9375rem] text-navy/80">
                {tr({ ja: "メールアドレス *", en: "Email *" }, lang)}
                <input name="email" type="email" required className={field} />
              </label>
              <label className="text-[0.9375rem] text-navy/80">
                {tr({ ja: "電話番号", en: "Phone" }, lang)}
                <input name="phone" type="tel" className={field} />
              </label>
              <label className="text-[0.9375rem] text-navy/80">
                {tr({ ja: "ご相談の種類", en: "Project type" }, lang)}
                <select name="type" className={field}>
                  {services.map((s) => (
                    <option key={s.slug}>{tr(s.title, lang)}</option>
                  ))}
                  <option>{tr({ ja: "その他・まだ決めていない", en: "Other / not sure yet" }, lang)}</option>
                </select>
              </label>
              <label className="text-[0.9375rem] text-navy/80">
                {tr({ ja: "相談方法", en: "How to meet" }, lang)}
                <select name="method" className={field}>
                  <option>{tr({ ja: "対面(シドニー)", en: "In person (Sydney)" }, lang)}</option>
                  <option>{tr({ ja: "オンライン", en: "Online" }, lang)}</option>
                  <option>{tr({ ja: "どちらでも", en: "Either" }, lang)}</option>
                </select>
              </label>
              <label className="text-[0.9375rem] text-navy/80">
                {tr({ ja: "ご希望の日時", en: "Preferred day and time" }, lang)}
                <input name="when" className={field} placeholder={tr({ ja: "例:平日の午後", en: "e.g. weekday afternoons" }, lang)} />
              </label>
              <label className="text-[0.9375rem] text-navy/80 sm:col-span-2">
                {tr({ ja: "ご相談内容", en: "Tell us about your project" }, lang)}
                <textarea name="message" rows={5} className={field} />
              </label>
            </div>
            <button type="submit" className="label mt-6 inline-flex items-center gap-2 bg-navy px-7 py-4 text-paper transition-colors hover:bg-deep">
              {tr({ ja: "送信する", en: "Send" }, lang)} <span aria-hidden>→</span>
            </button>
            <p className="mt-3 text-[0.875rem] text-navy/60">
              {tr({ ja: "送信すると、内容が入ったメールが開きます。そのまま送ってください。", en: "Sending opens an email with your details filled in, ready to send." }, lang)}
            </p>
            <p className="mt-6 text-[0.9375rem] text-navy/75">
              {tr({ ja: "お電話やDMでも:", en: "Or call or message us:" }, lang)}{" "}
              <a href={`tel:${site.phoneIntl}`} className="text-vermilion hover:underline">
                {site.phone}
              </a>{" "}
              ·{" "}
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-vermilion hover:underline">
                {site.instagramHandle}
              </a>
            </p>
          </form>
        </Container>
      </section>
    </>
  );
}

export { commercialServicesList, homeServicesList };

/* --------------------------------------------------------------- Brands */


/** The five brands as cards (top page, homes page). */
export function BrandCards({ lang, only }: { lang: Lang; only?: string[] }) {
  const list = only ? brands.filter((b) => only.includes(b.slug)) : brands;
  return (
    <ul className={`grid gap-6 sm:grid-cols-2 ${list.length > 3 ? "lg:grid-cols-5" : "lg:grid-cols-3"}`}>
      {list.map((b) => (
        <li key={b.slug}>
          <Link href={localHref(lang, `/${b.slug}`)} className="group block">
            <div className="relative aspect-[4/5] overflow-hidden bg-beige">
              <Image src={b.photo.src} alt={b.photo.alt} fill sizes="(min-width:1024px) 19vw, 45vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
            <p className="title mt-4 text-[1.35rem] transition-colors group-hover:text-deep">{b.name}</p>
            <p className="mt-1 text-[0.9375rem] leading-relaxed text-navy/70">{tr(b.tagline, lang)}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
