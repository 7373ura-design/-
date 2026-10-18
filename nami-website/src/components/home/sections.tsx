import Image from "next/image";
import Link from "next/link";
import { letters, meanings, nameCare, promise, roots } from "@/data/brand";
import { Container } from "@/components/ui";
import { Art, IconList, PostHead, type ArtName, type IconName } from "@/components/washi";
import { T, type Bi } from "@/lib/i18n";

/*
 * Sections of the About page (and the shared Card), set like the NAMI Instagram carousels:
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
    <Link href={href} className="group block text-center">
      <div className={`relative overflow-hidden bg-beige ${ratio}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
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

/* --------------------------------------------------------------- Meanings */

/** One Name, Three Meanings, with each post's text and the N.A.M.I letters. */
export function MeaningsSection() {
  return (
    <Post id="meaning" labelledBy="meaning-h" art="scrolls">
      <PostHead kicker="THE STORY BEHIND NAMI" title={{ ja: "ひとつの名前、\n3つの意味", en: "One Name,\nThree Meanings" }} id="meaning-h" />
      <ol className="mx-auto mt-14 grid max-w-5xl gap-12 md:grid-cols-3 md:gap-10">
        {meanings.map((m, i) => (
          <li key={m.number} className="text-center">
            <p className="kicker text-vermilion">{m.number}.</p>
            <p aria-hidden className={`mt-4 leading-none text-navy ${m.glyph === "N" ? "font-display text-[3.4rem]" : "font-jp text-[3.4rem] font-light"}`}>
              {m.glyph}
            </p>
            <h3 className="title mt-5 text-[1.35rem]">
              <T ja={m.title.ja} en={m.title.en} />
            </h3>
            <p className="subline mt-2">{m.sub}</p>
            <p className="jp-body mx-auto mt-4 max-w-[22em] text-[0.875rem] text-navy/75">
              <T ja={m.body.en ? m.body.ja : m.lead.ja} en={m.body.en ? m.body.en : m.lead.en} />
            </p>
          </li>
        ))}
      </ol>
        <ul className="mx-auto mt-16 w-fit space-y-5">
          {letters.map((l) => (
            <li key={l.letter} className="flex items-baseline gap-5">
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
