import Image from "next/image";
import Link from "next/link";
import { letters, meanings, nameCare, promise, roots } from "@/data/brand";
import { services } from "@/data/services";
import { getWorks } from "@/data/works";
import { Container, TextLink } from "@/components/ui";
import { Art, CircleIcon, IconList, PostHead, type ArtName, type IconName } from "@/components/washi";
import { T, type Bi } from "@/lib/i18n";

/*
 * Sections shared by Home and About, set like the NAMI Instagram carousels:
 * an illustration across the page, then a centred block of kicker, serif
 * title, blue subline, a short rule and the post's own words.
 */

function Post({
  id,
  labelledBy,
  art,
  children,
  className = "",
}: {
  id?: string;
  labelledBy: string;
  art?: ArtName;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative scroll-mt-16 ${art ? "" : "section-rule"} ${className}`} aria-labelledby={labelledBy}>
      {art && <Art name={art} position="50% 100%" className="h-[clamp(200px,34vw,460px)]" />}
      <Container className="pb-24 pt-14 md:pb-32 md:pt-20">{children}</Container>
    </section>
  );
}

/** A picture card: photo, number, title and one line. */
export function Card({
  href,
  src,
  alt,
  no,
  title,
  line,
  ratio = "aspect-[4/3]",
  sizes,
}: {
  href: string;
  src: string;
  alt: string;
  no: string;
  title: string | Bi;
  line: Bi;
  ratio?: string;
  sizes: string;
}) {
  return (
    <Link href={href} className="group block text-center" data-reveal>
      <div className={`relative overflow-hidden bg-beige ${ratio}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[1600ms] ease-[var(--ease-wave)] group-hover:scale-[1.03]"
        />
      </div>
      <p className="kicker mt-6 text-vermilion">{no}.</p>
      <h3 className="title mt-2 text-[1.35rem] transition-colors group-hover:text-deep">
        {typeof title === "string" ? title : <T ja={title.ja} en={title.en} />}
      </h3>
      <p className="mt-1.5 text-[0.8125rem] text-navy/65">
        <T ja={line.ja} en={line.en} />
      </p>
    </Link>
  );
}

/* ------------------------------------------------------------------ Works */

/** The completed homes: the heart of the site. */
export function WorksSection() {
  const works = getWorks();
  if (works.length === 0) return null;
  return (
    <Post id="works" labelledBy="works-h">
      <PostHead kicker="SELECTED WORKS" title={{ ja: "手がけた住まい", en: "Homes We Have Worked On" }} id="works-h" />
      <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">
        {works.map((w) => (
          <Card
            key={w.slug}
            href={`/works/${w.slug}`}
            src={w.photos[0].src}
            alt={w.photos[0].alt}
            no={w.number}
            title={w.title}
            line={{ ja: `${w.type.ja} · ${w.location}`, en: `${w.type.en} · ${w.location}` }}
            sizes="(min-width:768px) 45vw, 90vw"
          />
        ))}
      </div>
    </Post>
  );
}

/* --------------------------------------------------------------- Meanings */

/** One Name, Three Meanings. `full` adds each post's longer text and the N.A.M.I letters. */
export function MeaningsSection({ full = false }: { full?: boolean }) {
  return (
    <Post id="meaning" labelledBy="meaning-h" art="scrolls">
      <PostHead kicker="THE STORY BEHIND NAMI" title={{ ja: "ひとつの名前、\n3つの意味", en: "One Name,\nThree Meanings" }} id="meaning-h" />
      <ol className="mx-auto mt-14 grid max-w-5xl gap-12 md:grid-cols-3 md:gap-10">
        {meanings.map((m, i) => (
          <li key={m.number} className="text-center" data-reveal style={{ "--reveal-delay": `${i * 110}ms` } as React.CSSProperties}>
            <p className="kicker text-vermilion">{m.number}.</p>
            <p aria-hidden className={`mt-4 leading-none text-navy ${m.glyph === "N" ? "font-display text-[3.4rem]" : "font-jp text-[3.4rem] font-light"}`}>
              {m.glyph}
            </p>
            <h3 className="title mt-5 text-[1.35rem]">
              <T ja={m.title.ja} en={m.title.en} />
            </h3>
            <p className="subline mt-2">{m.sub}</p>
            <p className="jp-body mx-auto mt-4 max-w-[22em] text-[0.875rem] text-navy/75">
              <T ja={full && m.body.en ? m.body.ja : m.lead.ja} en={full && m.body.en ? m.body.en : m.lead.en} />
            </p>
          </li>
        ))}
      </ol>
      {full ? (
        <ul className="mx-auto mt-16 w-fit space-y-5">
          {letters.map((l) => (
            <li key={l.letter} className="flex items-baseline gap-5" data-reveal>
              <span className="title w-6 text-[1.6rem] text-vermilion">{l.letter}</span>
              <span>
                <span className="title block text-[1.15rem]">{l.word}</span>
                <span className="block text-[0.8125rem] text-navy/70">
                  <T ja={l.line.ja} en={l.line.en} />
                </span>
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-14 text-center">
          <TextLink href="/about">
            <T ja="NAMIについて" en="About NAMI" />
          </TextLink>
        </div>
      )}
    </Post>
  );
}

/* -------------------------------------------------------------- Name care */

export function NameCareSection() {
  return (
    <Post id="name" labelledBy="name-h" art="tea">
      <PostHead kicker="WHY THIS NAME" title={nameCare.heading} sub="AND A PROMISE BEHIND IT" id="name-h">
        <T as="p" ja={nameCare.body.ja} en={nameCare.body.en} />
      </PostHead>
    </Post>
  );
}

/* ------------------------------------------------------------------ Roots */

export function RootsSection() {
  return (
    <Post id="roots" labelledBy="roots-h" art="gum-frame">
      <PostHead kicker="OUR ROOTS" title={roots.heading} sub="TOGETHER WITH JAPAN HOMES" id="roots-h">
        <T as="p" ja={roots.body.ja} en={roots.body.en} />
      </PostHead>
      <p className="mx-auto mt-8 max-w-[30em] text-center text-[0.8125rem] text-navy/60">
        <T ja={roots.note.ja} en={roots.note.en} />
      </p>
    </Post>
  );
}

/* ---------------------------------------------------------------- Promise */

const promiseIcons: IconName[] = ["home", "infinity", "heart"];

export function PromiseSection() {
  return (
    <Post id="promise" labelledBy="promise-h" art="pavilion">
      <PostHead kicker="WHAT WE BELIEVE" title={promise.heading} id="promise-h" />
      <IconList className="mt-12" items={promise.items.map((p, i) => ({ icon: promiseIcons[i], title: p.title, line: p.line }))} />
    </Post>
  );
}

/* --------------------------------------------------------------- Services */

const serviceIcons: IconName[] = ["chat", "pen", "ruler", "chair"];

export function ServicesPreview() {
  return (
    <Post id="services" labelledBy="services-h" art="desk">
      <PostHead kicker="WHAT WE DO" title={{ ja: "サービス", en: "Services" }} sub="FROM ONE ROOM TO A WHOLE HOME" id="services-h" />
      <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Link key={s.slug} href={`/services#${s.slug}`} className="group block text-center" data-reveal>
            <span className="inline-flex transition-colors group-hover:[&>span]:border-vermilion group-hover:[&>span]:text-vermilion">
              <CircleIcon name={serviceIcons[i]} size="lg" />
            </span>
            <p className="kicker mt-6 text-vermilion">{s.number}.</p>
            <h3 className="title mt-2 text-[1.35rem] transition-colors group-hover:text-deep">{s.title}</h3>
            <p className="mt-2 text-[0.8125rem] text-navy/65">
              <T ja={s.sub.ja} en={s.sub.en} />
            </p>
          </Link>
        ))}
      </div>
    </Post>
  );
}
