import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { approach, approachIcons, meanings, meaningsIntro, story } from "@/data/brand";
import { services } from "@/data/services";
import { craft } from "@/data/craft";
import { projects } from "@/data/projects";
import { getArticles } from "@/data/journal";
import { meaningEmblems, ArrowRight } from "@/components/illustrations/Icons";
import { ArrowLink, Container, Lines, SectionHeader } from "@/components/ui";
import { T, type Bi } from "@/lib/i18n";

/**
 * The NAMI two-column section: label, headline, copy and a link on the left,
 * the visual content on the right. Every Home section uses it.
 */
function Split({
  id,
  number,
  label,
  heading,
  body,
  link,
  children,
  align = "center",
}: {
  id: string;
  number?: string;
  label: string;
  heading: Bi;
  body?: ReactNode;
  link?: { href: string; label: string };
  children: ReactNode;
  align?: "center" | "start";
}) {
  return (
    <section id={id} className="section-rule scroll-mt-20 bg-cream py-16 md:py-20" aria-labelledby={`${id}-heading`}>
      <Container className={`grid gap-10 lg:grid-cols-12 lg:gap-10 ${align === "center" ? "lg:items-center" : ""}`}>
        <div className="lg:col-span-4">
          <div id={`${id}-heading`}>
            <SectionHeader number={number} label={label} heading={heading} />
          </div>
          {body && (
            <div className="jp-body mt-6 text-sm leading-[2.05] text-navy/85" data-reveal>
              {body}
            </div>
          )}
          {link && (
            <div className="mt-8" data-reveal>
              <ArrowLink href={link.href}>{link.label}</ArrowLink>
            </div>
          )}
        </div>
        <div className="min-w-0 lg:col-span-8">{children}</div>
      </Container>
    </section>
  );
}

/** Horizontal swipe on phones, a grid from tablet up. */
function CardRow({ cols, children }: { cols: 3 | 4; children: ReactNode }) {
  return (
    <div
      className={`no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 md:mx-0 md:grid md:gap-5 md:overflow-visible md:px-0 ${
        cols === 4 ? "md:grid-cols-4" : "md:grid-cols-3"
      }`}
    >
      {children}
    </div>
  );
}

function Card({
  href,
  image,
  alt,
  ratio,
  title,
  sub,
  arrow,
  index,
}: {
  href: string;
  image: string;
  alt: string;
  ratio: string;
  title: ReactNode;
  sub: ReactNode;
  arrow?: boolean;
  index: number;
}) {
  return (
    <article
      className="group w-[68vw] shrink-0 snap-start sm:w-[42vw] md:w-auto"
      data-reveal
      style={{ "--reveal-delay": `${index * 100}ms` } as React.CSSProperties}
    >
      <Link href={href} className="block">
        <div className={`relative overflow-hidden rounded-[4px] bg-beige ${ratio}`}>
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(min-width: 768px) 22vw, 70vw"
            className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-wave)] group-hover:scale-[1.04]"
          />
        </div>
        <div className="mt-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-jp text-[1.05rem] leading-snug text-navy transition-colors group-hover:text-deep">{title}</h3>
            <p className="jp-heading mt-2 text-xs leading-relaxed text-navy/75">{sub}</p>
          </div>
          {arrow && <ArrowRight className="mt-6 h-3 w-5 shrink-0 text-navy transition-transform group-hover:translate-x-1" />}
        </div>
      </Link>
    </article>
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

export function StorySection() {
  return (
    <Split
      id="story"
      number="01"
      label="STORY"
      heading={story.heading}
      body={<Paras ja={story.body.ja} en={story.body.en} />}
      link={{ href: "/about", label: "MORE ABOUT NAMI" }}
    >
      <div className="relative aspect-[928/612] w-full" data-reveal>
        <Image
          src="/images/illustrations/story-surfer.jpg"
          alt="The NAMI surfer: a girl on a red surfboard riding a big wave with a turtle, pointing towards an island and a red sun"
          fill
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-contain feather"
        />
      </div>
    </Split>
  );
}

export function MeaningsSection() {
  return (
    <Split
      id="meaning"
      label="THE MEANING BEHIND NAMI"
      heading={meaningsIntro.heading}
      body={<T as="p" ja={meaningsIntro.body.ja} en={meaningsIntro.body.en} />}
      link={{ href: "/about", label: "READ OUR STORY" }}
    >
      <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
        {meanings.map((m, i) => {
          const Emblem = meaningEmblems[i];
          return (
            <div key={m.number} data-reveal style={{ "--reveal-delay": `${i * 110}ms` } as React.CSSProperties}>
              <Emblem className="h-20 w-20" />
              <p className="label mt-5 text-vermilion">{m.number}</p>
              <h3 className="mt-2 font-jp text-xl tracking-[0.08em] text-navy">{m.title}</h3>
              <p className="jp-heading mt-2 text-sm text-deep">
                <T ja={m.lead.ja} en={m.lead.en} />
              </p>
              <p className="jp-body mt-3 text-xs leading-[2] text-navy/75">
                <T ja={m.body.ja[0]} en={m.body.en[0]} />
              </p>
            </div>
          );
        })}
      </div>
    </Split>
  );
}

export function ApproachSection() {
  return (
    <Split
      id="approach"
      number="02"
      label="APPROACH"
      heading={approach.heading}
      body={<T as="p" ja={approach.body.ja} en={approach.body.en} />}
      link={{ href: "/about", label: "MORE APPROACH" }}
    >
      <ol className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-2">
        {approachIcons.map((a, i) => (
          <li
            key={a.icon}
            className="relative text-center"
            data-reveal
            style={{ "--reveal-delay": `${i * 110}ms` } as React.CSSProperties}
          >
            <div className="relative mx-auto aspect-square w-[62%] max-w-[150px]">
              <Image src={a.icon} alt="" fill sizes="150px" className="object-contain" />
            </div>
            {i < approachIcons.length - 1 && (
              <span aria-hidden className="absolute right-0 top-[22%] hidden translate-x-1/2 text-navy/40 md:block">
                →
              </span>
            )}
            <h3 className="jp-heading mt-5 text-[0.95rem] text-navy">
              <T ja={a.title.ja} en={a.title.en} />
            </h3>
            <p className="jp-body mt-2 text-xs leading-[1.9] text-navy/70">
              <T ja={a.body.ja} en={a.body.en} />
            </p>
          </li>
        ))}
      </ol>
    </Split>
  );
}

export function ServicesPreview() {
  return (
    <Split
      id="services"
      number="03"
      label="SERVICES"
      heading={{ ja: "暮らしを整える、\n4つのサービス。", en: "Four services\nto shape your home." }}
      body={
        <T
          as="p"
          ja={"住まいのご相談から、コンセプトづくり、\n空間プランニング、スタイリングまで。\nライフスタイルに合わせた空間づくりを\nサポートします。"}
          en="From a first conversation to concept, space planning and styling, we help create spaces that suit the way you live."
        />
      }
      link={{ href: "/services", label: "VIEW ALL SERVICES" }}
    >
      <CardRow cols={4}>
        {services.map((s, i) => (
          <Card
            key={s.slug}
            index={i}
            href={`/services#${s.slug}`}
            image={s.image.src}
            alt={s.image.alt}
            ratio="aspect-[128/114]"
            title={s.title.split(" ").map((w, j) => (
              <span key={j} className="block">
                {w}
              </span>
            ))}
            sub={<T ja={s.sub.ja} en={s.sub.en} />}
          />
        ))}
      </CardRow>
    </Split>
  );
}

export function ProjectsPreview() {
  return (
    <Split
      id="projects"
      number="04"
      label="PROJECTS"
      heading={{ ja: "暮らしの波を、\nかたちに。", en: "Giving shape\nto life’s waves." }}
      body={
        <T
          as="p"
          ja={"NAMIの考え方をもとにした\nコンセプトプロジェクトをご紹介します。\n（今後は実際のプロジェクトも掲載していきます）"}
          en="Concept projects that show how NAMI thinks. Real client projects will be added in future."
        />
      }
      link={{ href: "/projects", label: "VIEW ALL PROJECTS" }}
    >
      <CardRow cols={3}>
        {projects.map((p, i) => (
          <Card
            key={p.slug}
            index={i}
            href={`/projects/${p.slug}`}
            image={p.cover.src}
            alt={p.cover.alt}
            ratio="aspect-[180/145]"
            title={p.title}
            sub={p.subtitle}
            arrow
          />
        ))}
      </CardRow>
    </Split>
  );
}

export function JournalPreview() {
  return (
    <Split
      id="journal"
      number="05"
      label="JOURNAL"
      heading={{ ja: "暮らしを考える、\nヒントを届ける。", en: "Ideas for\neveryday living." }}
      body={
        <T
          as="p"
          ja={"インテリア、暮らし、旅、文化、素材について、\nNAMIの視点でお届けします。"}
          en="Notes on interiors, living, travel, culture and materials, from NAMI’s point of view."
        />
      }
      link={{ href: "/journal", label: "VIEW ALL ARTICLES" }}
    >
      <CardRow cols={3}>
        {getArticles()
          .slice(0, 3)
          .map((a, i) => (
            <Card
              key={a.slug}
              index={i}
              href={`/journal/${a.slug}`}
              image={a.cover.src}
              alt={a.cover.alt}
              ratio="aspect-[165/121]"
              title={a.title}
              sub={<T ja={a.titleJa ?? ""} en={a.excerpt.en} />}
            />
          ))}
      </CardRow>
    </Split>
  );
}

export function CraftSection() {
  return (
    <section id="craft" className="section-rule scroll-mt-20 bg-cream py-16 md:py-20" aria-labelledby="craft-heading">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5" id="craft-heading">
            <SectionHeader
              label="JAPANESE HOME CRAFT"
              heading={{ ja: "日本の家づくりから、\n学ぶこと。", en: "What Japanese homes\nteach us." }}
            />
          </div>
          <div className="jp-body text-sm leading-[2.05] text-navy/85 lg:col-span-6 lg:col-start-7" data-reveal>
            <T
              as="p"
              ja="精度、寸法、揺れへの備え、気候、丁寧さ。日本の家づくりが長い時間をかけて磨いてきた知恵を、オーストラリアの暮らしに合わせて、インテリアの考え方に生かしています。"
              en="Precision, proportion, resilience, climate and care. NAMI draws on what Japanese home building has refined over generations, and adapts it to Australian life through interior design."
            />
          </div>
        </div>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-[4px] border hairline bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
          {craft.map((c, i) => (
            <li
              key={c.title}
              className="bg-cream p-6 md:p-8"
              data-reveal
              style={{ "--reveal-delay": `${(i % 3) * 100}ms` } as React.CSSProperties}
            >
              <p className="label flex items-baseline gap-3 text-navy/70">
                <span className="text-vermilion">{c.number}</span>
                {c.title}
              </p>
              <h3 className="jp-heading mt-4 text-xl text-navy">
                <T ja={c.heading.ja} en={c.heading.en} />
              </h3>
              <p className="jp-body mt-3 text-[0.8125rem] leading-[1.95] text-navy/80">
                <T ja={c.body.ja} en={c.body.en} />
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-xs leading-relaxed text-navy/60">
          <T
            ja="※ NAMIはインテリアデザインのブランドです。建築・施工など資格が必要な工事は、有資格の建築会社・専門家が担当します。"
            en="NAMI is an interior design brand. Building work and other regulated services are carried out by licensed builders and professionals."
          />
        </p>
      </Container>
    </section>
  );
}
