import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { approachIcons, meanings, story } from "@/data/brand";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { getArticles } from "@/data/journal";
import { meaningEmblems, ArrowRight } from "@/components/illustrations/Icons";
import { ArrowLink, Container, Lines, SectionHeader } from "@/components/ui";

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
  heading: string[];
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
  sub: string;
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

export function StorySection() {
  return (
    <Split
      id="story"
      number="01"
      label="STORY"
      heading={story.heading}
      body={story.body.map((p, i) => (
        <p key={i} className={i ? "mt-4" : ""}>
          <Lines text={p} />
        </p>
      ))}
      link={{ href: "/about", label: "MORE ABOUT NAMI" }}
    >
      <div className="relative aspect-[928/612] w-full" data-reveal>
        <Image
          src="/images/illustrations/story-surfer.jpg"
          alt="NAMIの波乗りの女の子 — 赤いサーフボードで大きな波に乗り、亀と一緒に島と赤い太陽の方を指さしている"
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
      heading={["NAMIに込めた", "3つの意味"]}
      body={<p>波、並、そして N — A — M — I。<br />ひとつの名前に、三つの想いを込めています。</p>}
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
              <p className="jp-heading mt-2 text-sm text-deep">{m.lead}</p>
              <p className="jp-body mt-3 text-xs leading-[2] text-navy/75">
                <Lines text={m.body[0]} />
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
      heading={["日本とオーストラリア、", "ふたつの視点から。"]}
      body={
        <p>
          日本の美意識と、オーストラリアの豊かな自然。
          <br />
          それぞれの良さを活かしながら、
          <br />
          人の暮らしに寄り添う、心地よい空間をつくります。
        </p>
      }
      link={{ href: "/about", label: "MORE APPROACH" }}
    >
      <ol className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-2">
        {approachIcons.map((a, i) => (
          <li
            key={a.title}
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
            <h3 className="jp-heading mt-5 text-[0.95rem] text-navy">{a.title}</h3>
            <p className="jp-body mt-2 text-xs leading-[1.9] text-navy/70">
              <Lines text={a.body} />
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
      heading={["暮らしを整える、", "4つのサービス。"]}
      body={
        <p>
          住まいのご相談から、コンセプトづくり、
          <br />
          空間プランニング、スタイリングまで。
          <br />
          ライフスタイルに合わせた空間づくりを
          <br />
          サポートします。
        </p>
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
            sub={s.titleJa}
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
      heading={["暮らしの波を、", "かたちに。"]}
      body={
        <p>
          NAMIの考え方をもとにした
          <br />
          コンセプトプロジェクトをご紹介します。
          <br />
          （今後は実際のプロジェクトも掲載していきます）
        </p>
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
      heading={["暮らしを考える、", "ヒントを届ける。"]}
      body={
        <p>
          インテリア、暮らし、旅、文化、素材について、
          <br />
          NAMIの視点でお届けします。
        </p>
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
              sub={a.titleJa ?? ""}
            />
          ))}
      </CardRow>
    </Split>
  );
}
