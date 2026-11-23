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
  links,
  caption,
}: {
  id: string;
  eyebrow: Bi;
  title: Bi;
  body?: Bi;
  image: { src: string; alt: string; position?: string };
  links: { href: string; label: Bi }[];
  caption?: string;
}) {
  return (
    <section className="relative pt-20 md:pt-24" aria-labelledby={id}>
      <div className="relative h-[min(84svh,860px)] min-h-[540px] w-full overflow-hidden bg-navy">
        <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="object-cover" style={{ objectPosition: image.position ?? "center" }} />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/45 to-navy/5" />
        <Container className="absolute inset-x-0 bottom-0 pb-12 md:pb-16">
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
          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
            {links.map((l) => (
              <HeroLink key={l.href} href={l.href} label={l.label} />
            ))}
          </div>
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
