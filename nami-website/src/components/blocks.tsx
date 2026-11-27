import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import { Art, PostHead, type ArtName } from "@/components/washi";
import { T, type Bi } from "@/lib/i18n";
import { localHref, type Lang } from "@/lib/lang";
import type { Faq } from "@/data/faq";
import { tr } from "@/lib/tr";
import { langTag } from "@/lib/lang";

/*
 * Page sections shared by the top page and the two business pages, set like
 * the NAMI Instagram posts: an optional illustration across the page, then a
 * centred block of serif title, short rule and content.
 */

export function Section({
  id,
  title,
  kicker,
  art,
  intro,
  children,
  wide = false,
}: {
  id: string;
  title: Bi;
  kicker?: string;
  art?: ArtName;
  intro?: Bi;
  children?: React.ReactNode;
  /** Content below the heading spans the page (cards, grids) instead of the text column. */
  wide?: boolean;
}) {
  return (
    <section id={id} className={`relative scroll-mt-36 md:scroll-mt-40 ${art ? "" : "section-rule"}`} aria-labelledby={`${id}-h`}>
      {art && <Art name={art} position="50% 100%" className="h-[clamp(200px,34vw,460px)]" />}
      <Container className="pb-24 pt-14 md:pb-32 md:pt-20">
        <PostHead kicker={kicker} title={title} id={`${id}-h`}>
          {intro && <T ja={intro.ja} en={intro.en} />}
          {!wide && children}
        </PostHead>
        {wide && <div className="mt-14">{children}</div>}
      </Container>
    </section>
  );
}

/** A plain list, ruled like a page of notes. */
export function Notes({ items }: { items: { title: Bi; line: Bi }[] }) {
  return (
    <dl className="mt-8 border-b border-navy/15">
      {items.map((b) => (
        <div key={b.title.en} className="grid gap-1 border-t border-navy/15 py-4 sm:grid-cols-[11.5rem_1fr] sm:gap-6">
          <dt className="title text-[1.2rem] !leading-snug">
            <T ja={b.title.ja} en={b.title.en} />
          </dt>
          <dd className="text-[1rem] leading-relaxed text-navy/75">
            <T ja={b.line.ja} en={b.line.en} />
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** Numbered steps, in order. */
export function Steps({ items }: { items: { title: Bi; line: Bi }[] }) {
  return (
    <ol className="mt-8 border-b border-navy/15">
      {items.map((s, i) => (
        <li key={s.title.en} className="grid grid-cols-[2.5rem_1fr] gap-x-3 border-t border-navy/15 py-4">
          <span className="title text-[1.5rem] !leading-none text-vermilion">{i + 1}</span>
          <div>
            <p className="title text-[1.2rem] !leading-snug">
              <T ja={s.title.ja} en={s.title.en} />
            </p>
            <p className="mt-1 text-[1rem] leading-relaxed text-navy/75">
              <T ja={s.line.ja} en={s.line.en} />
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Japanese design words: the word, its kanji, what it is and how we use it. */
export function Glossary({ items }: { items: { term: string; kana: string; what: Bi; use: Bi }[] }) {
  return (
    <dl className="grid gap-px overflow-hidden border border-navy/15 bg-navy/15 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((g) => (
        <div key={g.term} className="bg-cream p-6">
          <dt className="flex items-baseline gap-3">
            <span className="title text-[1.5rem]">{g.term}</span>
            <span className="text-[1rem] text-vermilion" lang="ja">
              {g.kana}
            </span>
          </dt>
          <dd className="mt-3 text-[1rem] leading-relaxed text-navy/80">
            <T ja={g.what.ja} en={g.what.en} />
          </dd>
          <dd className="mt-3 text-[0.9375rem] leading-relaxed text-deep">
            <T ja={`NAMIでは: ${g.use.ja}`} en={`How we use it: ${g.use.en}`} />
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** An answer: paragraphs split by blank lines; "- " lines a list, "1. " lines a numbered list. */
function Answer({ text }: { text: string }) {
  return (
    <>
      {text.split("\n\n").map((block, b) => {
        const lines = block.split("\n");
        const bullets = lines.filter((l) => l.startsWith("- "));
        const steps = lines.filter((l) => /^\d+\. /.test(l));
        const intro = lines.filter((l) => !l.startsWith("- ") && !/^\d+\. /.test(l)).join(" ");
        return (
          <div key={b} className={b ? "mt-3" : ""}>
            {intro && <p>{intro}</p>}
            {bullets.length > 0 && (
              <ul className="mt-1 list-disc pl-5">
                {bullets.map((l) => (
                  <li key={l}>{l.slice(2)}</li>
                ))}
              </ul>
            )}
            {steps.length > 0 && (
              <ol className="mt-1 list-decimal pl-5">
                {steps.map((l) => (
                  <li key={l}>{l.replace(/^\d+\. /, "")}</li>
                ))}
              </ol>
            )}
          </div>
        );
      })}
    </>
  );
}

/** Questions that open to show their answer (answers stay in the page for search engines). */
export function FaqList({ lang, groups }: { lang: Lang; groups: { title?: Bi; items: Required<Faq>[] }[] }) {
  return (
    <div className="mx-auto max-w-3xl">
      {groups.map((g, gi) => (
        <div key={g.title?.en ?? gi} className="mt-12 first:mt-0">
          {g.title && <h3 className="title text-[1.4rem]">{tr(g.title, lang)}</h3>}
          <div className="mt-4 border-b border-navy/15">
            {g.items.map((i) => (
              <details key={i.q.en} className="group border-t border-navy/15">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                  <h4 className="title text-[1.2rem] !leading-snug">{tr(i.q, lang)}</h4>
                  <span aria-hidden className="mt-1 text-[1.25rem] leading-none text-vermilion transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="jp-body pb-6 text-[1.0625rem] leading-relaxed text-navy/80">
                  <Answer text={tr(i.a, lang)} />
                </div>
              </details>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/** FAQPage structured data for a set of answered questions. */
export function faqLd(lang: Lang, items: Required<Faq>[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: langTag(lang),
    mainEntity: items.map((i) => ({ "@type": "Question", name: tr(i.q, lang), acceptedAnswer: { "@type": "Answer", text: tr(i.a, lang) } })),
  };
}

/** The two businesses as story cards. */
export function ChoiceCards({
  lang,
  items,
}: {
  lang: Lang;
  items: readonly { key: string; href: string; title: Bi; line: Bi; meta: Bi; image: string; alt: string; strip: readonly string[] }[];
}) {
  return (
    <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
      {items.map((b, i) => (
        <StoryCard
          key={b.key}
          href={localHref(lang, b.href)}
          no={String(i + 1).padStart(2, "0")}
          title={b.title}
          copy={b.line}
          meta={b.meta}
          cover={{ src: b.image, alt: b.alt }}
          strip={[...b.strip]}
        />
      ))}
    </div>
  );
}

/** A short line of strengths, two or four across. */
export function Strengths({ items }: { items: { title: Bi; line: Bi }[] }) {
  return (
    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((s) => (
        <li key={s.title.en} className="border-t border-vermilion/60 pt-5">
          <p className="title text-[1.3rem] !leading-snug">
            <T ja={s.title.ja} en={s.title.en} />
          </p>
          <p className="mt-2 text-[1rem] leading-relaxed text-navy/75">
            <T ja={s.line.ja} en={s.line.en} />
          </p>
        </li>
      ))}
    </ul>
  );
}

/** A call to get in touch, closing each business page. */
export function CtaBand({ lang, title, line }: { lang: Lang; title: Bi; line: Bi }) {
  return (
    <section className="bg-navy text-paper">
      <Container className="py-16 text-center md:py-20">
        <h2 className="title !text-paper text-[2rem] md:text-[2.4rem]">{tr(title, lang)}</h2>
        <p className="jp-body mx-auto mt-4 max-w-2xl text-[1.0625rem] text-paper/80">{tr(line, lang)}</p>
        <Link
          href={localHref(lang, "/book")}
          className="label mt-8 inline-flex items-center gap-2 border border-paper/70 px-7 py-4 transition-colors hover:bg-paper hover:text-navy"
        >
          {tr({ ja: "無料相談を予約する", en: "Book a free consultation" }, lang)} <span aria-hidden>→</span>
        </Link>
      </Container>
    </section>
  );
}

/**
 * Top of a page: a large picture with the headline over it (eyebrow, h1, a
 * short line and links), like a magazine cover.
 */
export function OverlayHero({
  id,
  eyebrow,
  title,
  body,
  image,
  links = [],
  choices,
  caption,
  flush = false,
}: {
  id: string;
  eyebrow: Bi;
  title: Bi;
  body?: Bi;
  image: { src: string; alt: string; position?: string };
  links?: { href: string; label: Bi }[];
  /** Large buttons to choose where to go next (the top page's two businesses). */
  choices?: { href: string; title: Bi; line: Bi }[];
  caption?: string;
  /** Directly under the section bar (no room left for the fixed header). */
  flush?: boolean;
}) {
  return (
    <section className={`relative ${flush ? "" : "pt-20 md:pt-24"}`} aria-labelledby={id}>
      <div className={`relative w-full overflow-hidden bg-navy ${choices ? "min-h-[640px] md:h-[min(90svh,900px)]" : "h-[min(70svh,720px)] min-h-[480px]"}`}>
        <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="object-cover" style={{ objectPosition: image.position ?? "center" }} />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/55 to-navy/30" />
        <Container className={`${choices ? "relative pt-24 md:absolute md:inset-x-0 md:bottom-0 md:pt-0" : "absolute inset-x-0 bottom-0"} pb-10 md:pb-14`}>
          <p className="kicker !text-paper/85">
            <T ja={eyebrow.ja} en={eyebrow.en} />
          </p>
          <h1 id={id} className="title mt-4 max-w-4xl !text-paper text-[clamp(2.3rem,5.4vw,4.75rem)] !leading-[1.08]">
            <T ja={title.ja} en={title.en} />
          </h1>
          {body && (
            <p className="jp-body mt-5 max-w-2xl text-[1.0625rem] text-paper/85">
              <T ja={body.ja} en={body.en} />
            </p>
          )}
          {links.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
              {links.map((l) => (
                <HeroLink key={l.href} href={l.href} label={l.label} />
              ))}
            </div>
          )}
          {choices && (
            <div className={`mt-8 grid gap-4 ${choices.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
              {choices.map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="group flex items-center justify-between gap-6 border border-paper/40 bg-cream px-6 py-5 text-navy shadow-lg transition-colors hover:bg-paper md:px-8 md:py-6"
                >
                  <span>
                    <span className="title block text-[1.75rem] md:text-[2rem]">
                      <T ja={c.title.ja} en={c.title.en} />
                    </span>
                    <span className="mt-1 block text-[0.9375rem] leading-snug text-navy/70">
                      <T ja={c.line.ja} en={c.line.en} />
                    </span>
                  </span>
                  <span aria-hidden className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-[1.25rem] text-paper transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              ))}
            </div>
          )}
        </Container>
        {caption && <p className="label absolute bottom-5 right-5 hidden text-paper/70 md:block">{caption}</p>}
      </div>
    </section>
  );
}

function HeroLink({ href, label }: { href: string; label: Bi }) {
  return (
    <Link href={href} className="label group inline-flex items-center gap-3 border-b border-paper/50 pb-1 text-paper transition-colors hover:border-paper">
      <T ja={label.ja} en={label.en} />
      <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
    </Link>
  );
}

/** A large picture card with a strip of three more photos, a line of copy and where it leads. */
export function StoryCard({
  href,
  no,
  title,
  copy,
  meta,
  cover,
  strip,
}: {
  href: string;
  no: string;
  title: Bi;
  copy: Bi;
  meta: Bi;
  cover: { src: string; alt: string };
  strip: string[];
}) {
  return (
    <Link href={href} className="group block">
      <div className="relative aspect-[16/10] overflow-hidden bg-beige">
        <Image src={cover.src} alt={cover.alt} fill sizes="(min-width:768px) 45vw, 90vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
        <span className="label absolute left-4 top-4 bg-cream/90 px-2 py-1 text-navy">{no}</span>
        <span aria-hidden className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-cream/90 text-navy transition-transform group-hover:translate-x-1">
          →
        </span>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2" aria-hidden>
        {strip.slice(0, 3).map((src) => (
          <div key={src} className="relative aspect-[4/3] overflow-hidden bg-beige">
            <Image src={src} alt="" fill sizes="(min-width:768px) 15vw, 30vw" className="object-cover" />
          </div>
        ))}
      </div>
      <h3 className="title mt-5 text-[1.75rem] transition-colors group-hover:text-deep">
        <T ja={title.ja} en={title.en} />
      </h3>
      <p className="mt-2 text-[1.0625rem] leading-relaxed text-navy/75">
        <T ja={copy.ja} en={copy.en} />
      </p>
      <p className="label mt-4 text-vermilion">
        <T ja={meta.ja} en={meta.en} /> <span aria-hidden>→</span>
      </p>
    </Link>
  );
}

/**
 * The bar under the header on a business page: back to the top page, a switch
 * between the two businesses (the one you are on is filled), and links to the
 * sections of the page. It stays in view while scrolling.
 */
export function SubNav({
  lang,
  back,
  links,
}: {
  lang: Lang;
  current?: string;
  back?: { href: string; label: Bi };
  links: { href: string; label: Bi }[];
}) {
  const backTo = back ?? { href: "/", label: { en: "NAMI top", ja: "NAMIトップ" } };
  return (
    <nav aria-label={tr({ ja: "このページ", en: "This page" }, lang)} className="sticky top-20 z-40 mt-20 border-b border-navy/15 bg-paper/95 backdrop-blur md:top-24 md:mt-24">
      <Container className="flex flex-wrap items-center gap-x-5 gap-y-2 py-3">
        <Link href={localHref(lang, backTo.href)} className="shrink-0 text-[0.9375rem] text-navy/75 transition-colors hover:text-vermilion">
          ← {tr(backTo.label, lang)}
        </Link>
        {links.length > 0 && (
          <ul className="-mx-1 flex w-full gap-1 overflow-x-auto whitespace-nowrap lg:ml-auto lg:w-auto">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="block px-2 py-1 text-[0.9375rem] text-navy/70 transition-colors hover:text-vermilion">
                  {tr(l.label, lang)}
                </a>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </nav>
  );
}

/** Service categories: title, what it is, and example ideas. */
export function Categories({ items }: { items: { key: string; title: Bi; line: Bi; ideas: Bi }[] }) {
  return (
    <ul className="grid gap-px overflow-hidden border border-navy/15 bg-navy/15 md:grid-cols-2 lg:grid-cols-3">
      {items.map((c) => (
        <li key={c.key} id={c.key} className="scroll-mt-40 bg-cream p-6 md:p-7">
          <p className="title text-[1.5rem] !leading-snug">
            <T ja={c.title.ja} en={c.title.en} />
          </p>
          <p className="mt-3 text-[1.0625rem] leading-relaxed text-navy/80">
            <T ja={c.line.ja} en={c.line.en} />
          </p>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-deep">
            <T ja={c.ideas.ja} en={c.ideas.en} />
          </p>
        </li>
      ))}
    </ul>
  );
}

/** A compact grid of short items (styles, everyday design). */
export function Pills({ items }: { items: { title: Bi; line: Bi }[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((s) => (
        <li key={s.title.en} className="border-t border-vermilion/60 pt-4">
          <p className="title text-[1.3rem] !leading-snug">
            <T ja={s.title.ja} en={s.title.en} />
          </p>
          <p className="mt-1.5 text-[1rem] leading-relaxed text-navy/75">
            <T ja={s.line.ja} en={s.line.en} />
          </p>
        </li>
      ))}
    </ul>
  );
}

/**
 * "If this is your worry, look here": one row per worry, each a link to the
 * page that answers it. Used on the NAMI top page and on every brand site.
 */
export function Finder({ lang, items }: { lang: Lang; items: { worry: Bi; to: string; label: Bi }[] }) {
  return (
    <ul className="mt-8 border-b border-navy/15">
      {items.map((f) => (
        <li key={f.worry.en} className="border-t border-navy/15">
          <Link
            href={localHref(lang, f.to)}
            className="group grid gap-1 py-4 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
          >
            <span className="text-[1.0625rem] leading-relaxed text-navy">{tr(f.worry, lang)}</span>
            <span className="label whitespace-nowrap text-vermilion transition-transform group-hover:translate-x-1">
              {tr(f.label, lang)} →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Before and after, side by side (stacked on phones). Works without JavaScript. */
export function BeforeAfter({
  lang,
  items,
}: {
  lang: Lang;
  items: { slug: string; title: Bi; note: Bi; concept?: boolean; before: string; after: string }[];
}) {
  return (
    <div className="space-y-16">
      {items.map((p) => (
        <figure key={p.slug}>
          <div className="grid gap-3 sm:grid-cols-2">
            {([
              ["before", p.before, { en: "BEFORE", ja: "BEFORE · 前" }],
              ["after", p.after, p.concept ? { en: "AFTER · CONCEPT", ja: "AFTER · コンセプト" } : { en: "AFTER", ja: "AFTER · 後" }],
            ] as const).map(([k, src, label]) => (
              <div key={k} className="relative aspect-[4/3] overflow-hidden bg-beige">
                <Image src={src} alt={`${tr(p.title, lang)}: ${k}`} fill sizes="(min-width:640px) 45vw, 90vw" className="object-cover" />
                <span className={`label absolute left-3 top-3 px-2 py-1 ${k === "after" ? "bg-vermilion text-paper" : "bg-cream/90 text-navy"}`}>{tr(label, lang)}</span>
              </div>
            ))}
          </div>
          <figcaption className="mt-4 max-w-3xl">
            <span className="title block text-[1.25rem]">{tr(p.title, lang)}</span>
            <span className="mt-1 block text-[1rem] leading-relaxed text-navy/75">{tr(p.note, lang)}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/**
 * A row of background pictures that are not NAMI's work. Each carries a small
 * "image" label so no one takes it for a project.
 */
export function ImageStrip({ lang, items }: { lang: Lang; items: { src: string; alt: string }[] }) {
  return (
    <div className={`mt-10 grid gap-3 ${items.length >= 3 ? "sm:grid-cols-3" : items.length === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((p) => (
        <div key={p.src} className={`relative overflow-hidden bg-beige ${items.length === 1 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
          <Image src={p.src} alt={p.alt} fill sizes={items.length === 1 ? "(min-width:768px) 60vw, 90vw" : "(min-width:640px) 30vw, 90vw"} className="object-cover" />
          <span className="label absolute bottom-2 right-2 bg-cream/85 px-2 py-0.5 text-[0.6875rem] text-navy/70">{tr({ en: "IMAGE", ja: "イメージ" }, lang)}</span>
        </div>
      ))}
    </div>
  );
}
