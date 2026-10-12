import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { approach, approachIcons, meanings, meaningsIntro, story } from "@/data/brand";
import { services } from "@/data/services";
import { craft } from "@/data/craft";
import { projects } from "@/data/projects";
import { getArticles } from "@/data/journal";
import { Container, Lines, TextLink } from "@/components/ui";
import { T, type Bi } from "@/lib/i18n";

/*
 * Home sections. Each one is composed for its own content rather than poured
 * into a shared template: the grid is 12 columns, but what sits where, how big,
 * and how much air surrounds it changes from section to section.
 *
 * Shared vocabulary, kept deliberately small:
 *  - Margin  : a vertical section name set in the left margin (desktop only)
 *  - Heading : one heading style, used at two sizes
 *  - Body    : one body style with a fixed measure
 */

function Margin({ ja, en }: { ja: string; en: string }) {
  return (
    <p
      aria-hidden
      className="pointer-events-none absolute left-5 top-0 hidden select-none text-[0.6875rem] tracking-[0.32em] text-navy/45 [writing-mode:vertical-rl] xl:left-8 lg:block"
    >
      <span className="font-jp">{ja}</span>
      <span className="mt-3 inline-block uppercase">{en}</span>
    </p>
  );
}

function Heading({ t, id, size = "md", tone = "ink" }: { t: Bi; id?: string; size?: "md" | "lg"; tone?: "ink" | "paper" }) {
  return (
    <h2
      id={id}
      className={`jp-heading font-normal ${tone === "paper" ? "text-paper" : "text-navy"} ${
        size === "lg"
          ? "text-[1.85rem] leading-[1.55] md:text-[clamp(2.1rem,3vw,2.9rem)]"
          : "text-[1.5rem] leading-[1.6] md:text-[clamp(1.6rem,2.1vw,2rem)]"
      }`}
    >
      <T ja={t.ja} en={t.en} />
    </h2>
  );
}

function Body({ children, className = "", tone = "ink" }: { children: ReactNode; className?: string; tone?: "ink" | "paper" }) {
  return (
    <div
      className={`jp-body max-w-[26em] text-[0.875rem] leading-[2.1] ${tone === "paper" ? "text-paper/75" : "text-navy/75"} ${className}`}
    >
      {children}
    </div>
  );
}

/** Paragraphs in both languages. */
export function Paras({ ja, en, gap = "mt-4" }: { ja: string[]; en: string[]; gap?: string }) {
  const render = (list: string[]) =>
    list.map((p, i) => (
      <p key={i} className={i ? gap : ""}>
        <Lines text={p} />
      </p>
    ));
  return <T as="div" ja={render(ja)} en={render(en)} />;
}

/* ------------------------------------------------------------------ Story */

export function StorySection() {
  return (
    <section id="story" className="relative scroll-mt-20 bg-cream pb-28 pt-24 md:pb-40 md:pt-32" aria-labelledby="story-h">
      <Margin ja="物語" en="Story" />
      <Container className="grid gap-14 lg:grid-cols-12 lg:gap-0">
        {/* Text sits low and narrow; the illustration carries the section. */}
        <div className="lg:col-span-4 lg:col-start-1 lg:pt-28 xl:col-start-2">
          <Heading t={story.heading} id="story-h" />
          <Body className="mt-10">
            <Paras ja={story.body.ja} en={story.body.en} gap="mt-5" />
          </Body>
          <TextLink href="/about" className="mt-10">
            <T ja="NAMIについて" en="About NAMI" />
          </TextLink>
        </div>
        <div className="relative lg:col-span-7 lg:col-start-6 lg:-mr-16 xl:-mr-24">
          <Image
            src="/images/illustrations/story-surfer.jpg"
            alt="The NAMI surfer: a girl on a red surfboard riding a big wave with a turtle, pointing towards an island and a red sun"
            width={928}
            height={612}
            sizes="(min-width: 1024px) 62vw, 100vw"
            className="w-full feather"
          />
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------------- Meanings */

export function MeaningsSection() {
  // Three entries set as type, at staggered heights; the glyph is the image.
  const offset = ["lg:col-start-2", "pl-[22%] sm:pl-0 lg:col-start-6 lg:mt-24", "pl-[8%] sm:pl-0 lg:col-start-10 lg:mt-10"];
  return (
    <section id="meaning" className="relative bg-paper py-24 md:py-32" aria-labelledby="meaning-h">
      <Margin ja="名前" en="Name" />
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:col-start-2">
            <Heading t={meaningsIntro.heading} id="meaning-h" />
          </div>
          <Body className="lg:col-span-4 lg:col-start-8 lg:self-end">
            <T as="p" ja={meaningsIntro.body.ja} en={meaningsIntro.body.en} />
          </Body>
        </div>

        <div className="mt-20 grid gap-16 sm:grid-cols-3 sm:gap-8 lg:mt-24 lg:grid-cols-12 lg:gap-0">
          {meanings.map((m, i) => {
            const latin = /^[A-Z]$/.test(m.kanji);
            return (
              <div key={m.number} className={`lg:col-span-3 ${offset[i]}`}>
                <p
                  aria-hidden
                  className={`leading-none text-navy ${latin ? "font-display text-[5.5rem] font-light" : "font-jp text-[5.5rem] font-light"}`}
                >
                  {m.kanji}
                </p>
                <h3 className="mt-6 text-[0.8125rem] tracking-[0.18em] text-navy">{m.title}</h3>
                <p className="jp-heading mt-3 text-[0.9375rem] text-vermilion">
                  <T ja={m.lead.ja} en={m.lead.en} />
                </p>
                <Body className="mt-4 !text-[0.8125rem] !leading-[2]">
                  <T as="p" ja={m.body.ja[0]} en={m.body.en[0]} />
                </Body>
              </div>
            );
          })}
        </div>

        <div className="mt-16 lg:ml-[calc(100%/12)]">
          <TextLink href="/about">
            <T ja="名前の由来をもっと読む" en="Read more about the name" />
          </TextLink>
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------------- Approach */

export function ApproachSection() {
  return (
    <section id="approach" className="relative bg-cream py-28 md:py-36" aria-labelledby="approach-h">
      <Margin ja="視点" en="Approach" />
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6 lg:col-start-2">
            <Heading t={approach.heading} id="approach-h" size="lg" />
          </div>
          <Body className="lg:col-span-4 lg:col-start-8 lg:self-end">
            <T as="p" ja={approach.body.ja} en={approach.body.en} />
          </Body>
        </div>

        {/* A quiet row, pushed to the right so the heading keeps the left. */}
        <ol className="mt-20 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:ml-[calc(100%*3/12)] lg:mt-28">
          {approachIcons.map((a) => (
            <li key={a.icon}>
              <div className="relative h-16 w-16">
                <Image src={a.icon} alt="" fill sizes="64px" className="object-contain" />
              </div>
              <h3 className="jp-heading mt-6 text-[0.9375rem] text-navy">
                <T ja={a.title.ja} en={a.title.en} />
              </h3>
              <p className="jp-body mt-2 text-[0.75rem] leading-[1.9] text-navy/60">
                <T ja={a.body.ja} en={a.body.en} />
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ Craft */

/** The one dense, dark passage on the page: indigo, set like a reference list. */
export function CraftSection() {
  return (
    <section id="craft" className="relative scroll-mt-20 bg-navy py-24 text-paper md:py-28" aria-labelledby="craft-h">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4 lg:col-start-2">
            <p className="text-[0.6875rem] uppercase tracking-[0.3em] text-paper/50">Japanese home craft</p>
            <div className="mt-6">
              <Heading t={{ ja: "日本の家づくりから、\n学ぶこと。", en: "What Japanese homes\nteach us." }} id="craft-h" tone="paper" />
            </div>
            <Body tone="paper" className="mt-8">
              <T
                as="p"
                ja="精度、寸法、揺れへの備え、気候、丁寧さ。日本の家づくりが長い時間をかけて磨いてきた知恵を、オーストラリアの暮らしに合わせて、インテリアの考え方に生かしています。"
                en="Precision, proportion, resilience, climate and care. NAMI draws on what Japanese home building has refined over generations, and adapts it to Australian life through interior design."
              />
            </Body>
          </div>

          <ol className="grid gap-x-12 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {craft.map((c) => (
              <li key={c.title} className="border-t border-paper/15 py-6">
                <p className="flex items-baseline gap-3 text-[0.6875rem] tracking-[0.24em] text-paper/45">
                  <span>{c.number}</span>
                  {c.title}
                </p>
                <h3 className="jp-heading mt-3 text-[1.0625rem] text-paper">
                  <T ja={c.heading.ja} en={c.heading.en} />
                </h3>
                <p className="jp-body mt-2 text-[0.78rem] leading-[1.95] text-paper/65">
                  <T ja={c.body.ja} en={c.body.en} />
                </p>
              </li>
            ))}
          </ol>
        </div>
        <p className="mt-14 text-[0.6875rem] leading-relaxed text-paper/45 lg:ml-[calc(100%/12)]">
          <T
            ja="NAMIはインテリアデザインのブランドです。建築・施工など資格が必要な工事は、有資格の建築会社・専門家が担当します。"
            en="NAMI is an interior design brand. Building work and other regulated services are carried out by licensed builders and professionals."
          />
        </p>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------------- Services */

function Shot({ src, alt, ratio, sizes }: { src: string; alt: string; ratio: string; sizes: string }) {
  return (
    <div className={`relative overflow-hidden bg-beige ${ratio}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-[1600ms] ease-[var(--ease-wave)] group-hover:scale-[1.03]"
      />
    </div>
  );
}

export function ServicesPreview() {
  // Four services at four different sizes: one leads, three answer it.
  const layout = [
    { box: "lg:col-span-5 lg:col-start-1 lg:row-span-2", ratio: "aspect-[4/5]", sizes: "(min-width:1024px) 38vw, 90vw" },
    { box: "ml-auto w-3/4 sm:ml-0 sm:w-auto lg:col-span-3 lg:col-start-7 lg:mt-20", ratio: "aspect-square", sizes: "(min-width:1024px) 22vw, 60vw" },
    { box: "w-2/3 sm:w-auto lg:col-span-3 lg:col-start-10", ratio: "aspect-[4/5]", sizes: "(min-width:1024px) 22vw, 60vw" },
    { box: "ml-auto w-5/6 sm:ml-0 sm:w-auto lg:col-span-4 lg:col-start-8 lg:mt-4", ratio: "aspect-[4/3]", sizes: "(min-width:1024px) 30vw, 70vw" },
  ];
  return (
    <section id="services" className="relative bg-cream py-28 md:py-36" aria-labelledby="services-h">
      <Margin ja="仕事" en="Services" />
      <Container>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:col-start-2">
            <Heading t={{ ja: "暮らしを整える、\n4つのサービス。", en: "Four services\nto shape your home." }} id="services-h" />
          </div>
          <div className="lg:col-span-4 lg:col-start-8 lg:self-end">
            <Body>
              <T
                as="p"
                ja="住まいのご相談から、コンセプトづくり、空間プランニング、スタイリングまで。ライフスタイルに合わせた空間づくりをサポートします。"
                en="From a first conversation to concept, space planning and styling, we help create spaces that suit the way you live."
              />
            </Body>
            <TextLink href="/services" className="mt-6">
              <T ja="サービスの詳細" en="All services" />
            </TextLink>
          </div>
        </div>

        <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-12 lg:gap-y-10">
          {services.map((s, i) => (
            <Link key={s.slug} href={`/services#${s.slug}`} className={`group block ${layout[i].box}`}>
              <Shot src={s.image.src} alt={s.image.alt} ratio={layout[i].ratio} sizes={layout[i].sizes} />
              <div className="mt-4 flex items-baseline gap-4">
                <span className="text-[0.6875rem] tracking-[0.2em] text-navy/40">{s.number}</span>
                <div>
                  <h3 className="font-display text-[1.25rem] leading-tight text-navy transition-colors group-hover:text-vermilion">
                    {s.title}
                  </h3>
                  <p className="jp-heading mt-1 text-[0.75rem] text-navy/60">
                    <T ja={s.sub.ja} en={s.sub.en} />
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------------- Projects */

export function ProjectsPreview() {
  const [lead, ...rest] = projects;
  return (
    <section id="projects" className="relative bg-paper py-28 md:py-36" aria-labelledby="projects-h">
      <Margin ja="作例" en="Projects" />
      <Container>
        {/* The first project is shown large, bleeding to the left edge. */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Link href={`/projects/${lead.slug}`} className="group block lg:col-span-7 lg:-ml-16 xl:-ml-24">
            <Shot src={lead.cover.src} alt={lead.cover.alt} ratio="aspect-[4/3]" sizes="(min-width:1024px) 60vw, 100vw" />
          </Link>
          <div className="lg:col-span-4 lg:col-start-9">
            <Heading t={{ ja: "暮らしの波を、\nかたちに。", en: "Giving shape\nto life’s waves." }} id="projects-h" />
            <Body className="mt-6">
              <T
                as="p"
                ja="NAMIの考え方をもとにしたコンセプトプロジェクトです。（今後は実際のプロジェクトも掲載していきます）"
                en="Concept projects that show how NAMI thinks. Real client projects will be added in future."
              />
            </Body>
            <Link href={`/projects/${lead.slug}`} className="group mt-10 block border-t hairline pt-5">
              <p className="text-[0.6875rem] tracking-[0.2em] text-navy/45">{lead.number}</p>
              <p className="mt-2 font-display text-[1.5rem] text-navy transition-colors group-hover:text-vermilion">{lead.title}</p>
              <p className="mt-1 text-[0.8125rem] text-navy/60">{lead.subtitle}</p>
            </Link>
          </div>
        </div>

        <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:mt-28 lg:grid-cols-12 lg:gap-0">
          {rest.map((p, i) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className={`group block ${i === 0 ? "lg:col-span-4 lg:col-start-2" : "lg:col-span-5 lg:col-start-7 lg:mt-32"}`}
            >
              <Shot
                src={p.cover.src}
                alt={p.cover.alt}
                ratio={i === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}
                sizes="(min-width:1024px) 34vw, 90vw"
              />
              <div className="mt-4 flex items-baseline gap-4">
                <span className="text-[0.6875rem] tracking-[0.2em] text-navy/40">{p.number}</span>
                <div>
                  <p className="font-display text-[1.25rem] text-navy transition-colors group-hover:text-vermilion">{p.title}</p>
                  <p className="mt-1 text-[0.8125rem] text-navy/60">{p.subtitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 lg:ml-[calc(100%/12)]">
          <TextLink href="/projects">
            <T ja="プロジェクト一覧" en="All projects" />
          </TextLink>
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- Journal */

export function JournalPreview() {
  const [first, ...rest] = getArticles();
  return (
    <section id="journal" className="relative bg-cream py-28 md:py-32" aria-labelledby="journal-h">
      <Margin ja="手帖" en="Journal" />
      <Container className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-3 lg:col-start-2">
          <Heading t={{ ja: "暮らしを考える、\nヒントを届ける。", en: "Ideas for\neveryday living." }} id="journal-h" />
          <Body className="mt-6">
            <T
              as="p"
              ja="インテリア、暮らし、旅、文化、素材について、NAMIの視点でお届けします。"
              en="Notes on interiors, living, travel, culture and materials, from NAMI’s point of view."
            />
          </Body>
          <TextLink href="/journal" className="mt-8">
            <T ja="すべての記事" en="All articles" />
          </TextLink>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          {/* One article with a picture, the rest as a plain contents list. */}
          <Link href={`/journal/${first.slug}`} className="group grid gap-6 sm:grid-cols-[1.1fr_1fr] sm:items-end">
            <Shot src={first.cover.src} alt={first.cover.alt} ratio="aspect-[4/3]" sizes="(min-width:1024px) 30vw, 90vw" />
            <div>
              <p className="text-[0.6875rem] uppercase tracking-[0.2em] text-navy/45">{first.category}</p>
              <p className="mt-3 font-display text-[1.5rem] leading-snug text-navy transition-colors group-hover:text-vermilion">
                {first.title}
              </p>
              <p className="jp-heading mt-2 text-[0.8125rem] text-navy/60">
                <T ja={first.titleJa ?? ""} en={first.excerpt.en} />
              </p>
            </div>
          </Link>
          <ul className="mt-12">
            {rest.map((a) => (
              <li key={a.slug} className="border-t hairline last:border-b">
                <Link href={`/journal/${a.slug}`} className="group grid grid-cols-[6.5rem_1fr] items-baseline gap-4 py-4 sm:grid-cols-[6.5rem_1fr_auto]">
                  <span className="text-[0.6875rem] uppercase tracking-[0.18em] text-navy/40">{a.category}</span>
                  <span className="text-[0.9375rem] text-navy transition-colors group-hover:text-vermilion">{a.title}</span>
                  <span className="jp-heading col-start-2 text-[0.75rem] text-navy/50 sm:col-start-auto">
                    <T ja={a.titleJa ?? ""} en="" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
