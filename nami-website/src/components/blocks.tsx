import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import { Art, PostHead, type ArtName } from "@/components/washi";
import { T, type Bi } from "@/lib/i18n";
import { localHref, type Lang } from "@/lib/lang";
import type { Faq } from "@/data/faq";

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
    <section id={id} className={`relative scroll-mt-16 ${art ? "" : "section-rule"}`} aria-labelledby={`${id}-h`}>
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
          {g.title && <h3 className="title text-[1.4rem]">{g.title[lang]}</h3>}
          <div className="mt-4 border-b border-navy/15">
            {g.items.map((i) => (
              <details key={i.q.en} className="group border-t border-navy/15">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                  <h4 className="title text-[1.2rem] !leading-snug">{i.q[lang]}</h4>
                  <span aria-hidden className="mt-1 text-[1.25rem] leading-none text-vermilion transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="jp-body pb-6 text-[1.0625rem] leading-relaxed text-navy/80">
                  <Answer text={i.a[lang]} />
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
    inLanguage: lang === "ja" ? "ja" : "en-AU",
    mainEntity: items.map((i) => ({ "@type": "Question", name: i.q[lang], acceptedAnswer: { "@type": "Answer", text: i.a[lang] } })),
  };
}

/** The two businesses as large picture cards. */
export function ChoiceCards({
  lang,
  items,
}: {
  lang: Lang;
  items: readonly { key: string; href: string; label: string; title: Bi; line: Bi; image: string; alt: string }[];
}) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {items.map((b) => (
        <Link key={b.key} href={localHref(lang, b.href)} className="group block border border-navy/15 bg-cream/60 transition-colors hover:border-navy/40">
          <div className="relative aspect-[4/3] overflow-hidden bg-beige">
            <Image src={b.image} alt={b.alt} fill sizes="(min-width:768px) 45vw, 90vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
          </div>
          <div className="p-6 md:p-8">
            <p className="kicker text-vermilion">{b.label}</p>
            <h3 className="title mt-2 text-[2rem]">
              <T ja={b.title.ja} en={b.title.en} />
            </h3>
            <p className="mt-3 text-[1.0625rem] leading-relaxed text-navy/75">
              <T ja={b.line.ja} en={b.line.en} />
            </p>
            <p className="label mt-6 inline-flex items-center gap-2 bg-navy px-5 py-3 text-paper transition-colors group-hover:bg-deep">
              <T ja="詳しく見る" en="Learn more" /> <span aria-hidden>→</span>
            </p>
          </div>
        </Link>
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
        <h2 className="title !text-paper text-[2rem] md:text-[2.4rem]">{title[lang]}</h2>
        <p className="jp-body mx-auto mt-4 max-w-2xl text-[1.0625rem] text-paper/80">{line[lang]}</p>
        <Link
          href={localHref(lang, "/#contact")}
          className="label mt-8 inline-flex items-center gap-2 border border-paper/70 px-7 py-4 transition-colors hover:bg-paper hover:text-navy"
        >
          {lang === "ja" ? "お問い合わせ" : "Get in touch"} <span aria-hidden>→</span>
        </Link>
      </Container>
    </section>
  );
}

/** Top of a business page: picture band, then the h1 block. */
export function PageHero({
  id,
  kicker,
  title,
  body,
  art,
  photo,
}: {
  id: string;
  kicker: string;
  title: Bi;
  body: Bi;
  art?: ArtName;
  photo?: { src: string; alt: string };
}) {
  return (
    <section className="relative pt-20 md:pt-24" aria-labelledby={id}>
      {art && <Art name={art} priority className="h-[clamp(220px,38vw,520px)]" />}
      {photo && (
        <div className="relative h-[clamp(220px,38vw,520px)] w-full overflow-hidden bg-beige">
          <Image src={photo.src} alt={photo.alt} fill priority sizes="100vw" className="object-cover" />
        </div>
      )}
      <Container className="pb-20 pt-12 md:pb-24 md:pt-16">
        <PostHead as="h1" id={id} kicker={kicker} title={title} size="lg">
          <T ja={body.ja} en={body.en} />
        </PostHead>
      </Container>
    </section>
  );
}
