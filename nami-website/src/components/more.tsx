import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import { T, type Bi } from "@/lib/i18n";
import { localHref, type Lang } from "@/lib/lang";
import type { Service } from "@/data/services";

/** Top of a plain page: kicker, h1 and a lead, below the fixed header. */
export function PageTop({ id, kicker, title, lead, children }: { id: string; kicker: string; title: Bi; lead?: Bi; children?: React.ReactNode }) {
  return (
    <section className="pt-20 md:pt-24" aria-labelledby={id}>
      <Container className="pb-12 pt-14 md:pb-16 md:pt-20">
        <p className="kicker text-vermilion">{kicker}</p>
        <h1 id={id} className="title mt-3 max-w-4xl text-[clamp(2.2rem,4.6vw,3.6rem)] !leading-[1.12]">
          <T ja={title.ja} en={title.en} />
        </h1>
        {lead && (
          <p className="jp-body mt-5 max-w-3xl text-[1.0625rem] text-navy/80">
            <T ja={lead.ja} en={lead.en} />
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}

/** Cards linking to service pages. */
export function ServiceCards({ lang, items }: { lang: Lang; items: Service[] }) {
  return (
    <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((s) => (
        <li key={s.slug}>
          <Link href={localHref(lang, `/services/${s.slug}`)} className="group block">
            <div className="relative aspect-[4/3] overflow-hidden bg-beige">
              <Image src={s.photos[0].src} alt={s.photos[0].alt} fill sizes="(min-width:1024px) 24vw, (min-width:640px) 45vw, 90vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
            <p className="title mt-4 text-[1.3rem] !leading-snug transition-colors group-hover:text-deep">
              <T ja={s.title.ja} en={s.title.en} />
            </p>
            <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-navy/70">
              <T ja={s.line.ja} en={s.line.en} />
            </p>
            <p className="label mt-3 text-vermilion">
              <T ja="詳しく見る →" en="Learn more →" />
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** "Your worry / How we help" table, as on the Instagram post. */
export function WorryTable({ items }: { items: { worry: Bi; help: Bi }[] }) {
  return (
    <div className="border-b border-navy/15">
      <div className="label grid grid-cols-2 gap-6 border-b border-vermilion/60 pb-2 text-vermilion">
        <span>
          <T ja="お悩み" en="YOUR WORRY" />
        </span>
        <span>
          <T ja="NAMIのお手伝い" en="HOW WE HELP" />
        </span>
      </div>
      {items.map((i) => (
        <div key={i.worry.en} className="grid grid-cols-2 gap-6 border-t border-navy/15 py-4 first:border-t-0">
          <p className="title text-[1.15rem] !leading-snug">
            “<T ja={i.worry.ja} en={i.worry.en} />”
          </p>
          <p className="text-[1rem] leading-relaxed text-navy/80">
            <T ja={i.help.ja} en={i.help.en} />
          </p>
        </div>
      ))}
    </div>
  );
}

/** Kind words from clients. */
export function KindWords({ items }: { items: { quote: Bi; who: string; place: Bi }[] }) {
  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {items.map((k) => (
        <li key={k.who} className="border-t border-navy/20 pt-5">
          <blockquote className="title text-[1.2rem] !leading-relaxed">
            “<T ja={k.quote.ja} en={k.quote.en} />”
          </blockquote>
          <p className="label mt-3 text-vermilion">
            — {k.who}, <T ja={k.place.ja} en={k.place.en} />
          </p>
        </li>
      ))}
    </ul>
  );
}

/** Large figures with a label. */
export function Numbers({ items, note }: { items: { value: string; label: Bi }[]; note?: Bi }) {
  return (
    <div>
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((n) => (
          <li key={n.value + n.label.en} className="border-t border-vermilion/60 pt-4">
            <p className="title text-[2.6rem] !leading-none">{n.value}</p>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-navy/75">
              <T ja={n.label.ja} en={n.label.en} />
            </p>
          </li>
        ))}
      </ul>
      {note && (
        <p className="mt-5 text-[0.8125rem] text-navy/55">
          <T ja={note.ja} en={note.en} />
        </p>
      )}
    </div>
  );
}

/** A row of simple text links (used for "related" lists). */
export function LinkList({ items }: { items: { href: string; label: string }[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((i) => (
        <li key={i.href}>
          <Link href={i.href} className="text-[1.0625rem] text-vermilion hover:underline">
            {i.label} →
          </Link>
        </li>
      ))}
    </ul>
  );
}
