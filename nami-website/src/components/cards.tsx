import Link from "next/link";
import type { JournalArticle, Meaning, Principle, Project, Service } from "@/lib/types";
import { Photo } from "@/components/Photo";
import { ArrowRight, meaningEmblems, principleIcons } from "@/components/illustrations/Icons";
import { Lines } from "@/components/ui";
import { T } from "@/lib/i18n";

export function MeaningCard({ meaning, index, full = false }: { meaning: Meaning; index: number; full?: boolean }) {
  const Emblem = meaningEmblems[index % meaningEmblems.length];
  const isLatin = /^[A-Z]$/.test(meaning.kanji);
  return (
    <article
      className="relative flex flex-col overflow-hidden bg-paper p-7 sm:p-9 md:bg-transparent md:p-0"
      data-reveal
      style={{ "--reveal-delay": `${index * 140}ms` } as React.CSSProperties}
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute -right-2 -top-6 select-none leading-none text-navy/[0.05] md:-top-10 ${
          isLatin ? "font-display text-[11rem]" : "font-jp text-[9rem] md:text-[11rem]"
        }`}
      >
        {meaning.kanji}
      </span>
      <div className="flex items-center gap-5">
        <Emblem className="h-16 w-16 shrink-0 md:h-20 md:w-20" />
        <span className="font-display text-4xl text-vermilion">{meaning.number}</span>
      </div>
      <h3 className="mt-8 font-display text-[1.75rem] tracking-[0.14em] text-navy md:text-3xl">
        {meaning.title.includes("—") && !isLatin ? (
          <>
            <span className="font-jp tracking-normal">{meaning.title.split(" — ")[0]}</span>
            <span className="mx-3 text-navy/40">—</span>
            {meaning.title.split(" — ")[1]}
          </>
        ) : (
          meaning.title
        )}
      </h3>
      <p className={`mt-3 text-deep ${isLatin ? "label !tracking-[0.2em]" : "jp-heading text-base"}`}>
        <T ja={meaning.lead.ja} en={meaning.lead.en} />
      </p>
      <div className="mt-5 h-px w-12 bg-vermilion" aria-hidden />
      <div className="jp-body mt-6 space-y-4 text-sm leading-[2.05] text-navy/80">
        <T
          as="div"
          className="space-y-4"
          ja={(full ? meaning.body.ja : meaning.body.ja.slice(0, 2)).map((p, i) => (
            <p key={i}>
              <Lines text={p} />
            </p>
          ))}
          en={(full ? meaning.body.en : meaning.body.en.slice(0, 2)).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        />
      </div>
    </article>
  );
}

export function PrincipleCard({ principle, index }: { principle: Principle; index: number }) {
  const Icon = principleIcons[principle.key];
  return (
    <li
      className="group flex gap-5 border-t hairline py-7 md:flex-col md:gap-0 md:border-l md:border-t-0 md:px-6 md:py-2 lg:px-7"
      data-reveal
      style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
    >
      <Icon className="h-12 w-12 shrink-0 text-deep transition-colors duration-500 group-hover:text-vermilion md:h-14 md:w-14" />
      <div className="md:mt-8">
        <p className="label text-vermilion">{principle.number}</p>
        <h3 className="mt-2 font-display text-2xl tracking-[0.18em] text-navy">{principle.title}</h3>
        <p className="jp-heading mt-1 text-[0.9375rem] text-navy">
          <T ja={principle.sub.ja} en={principle.sub.en} />
        </p>
        <p className="jp-body mt-4 text-[0.8125rem] leading-[2] text-navy/70">
          <T ja={principle.body.ja} en={principle.body.en} />
        </p>
      </div>
    </li>
  );
}

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <article
      className="group relative w-[78vw] shrink-0 snap-start sm:w-[46vw] md:w-auto"
      data-reveal
      style={{ "--reveal-delay": `${index * 110}ms` } as React.CSSProperties}
    >
      <Link href={`/services#${service.slug}`} className="block">
        <Photo
          image={service.image}
          hoverZoom
          reveal={false}
          sizes="(min-width: 768px) 25vw, 80vw"
          className="aspect-[4/5]"
        />
        <div className="mt-6 flex items-baseline gap-4">
          <span className="font-display text-xl text-vermilion">{service.number}</span>
          <div>
            <h3 className="font-display text-2xl leading-tight text-navy transition-colors group-hover:text-deep">
              {service.title}
            </h3>
            <p className="jp-heading mt-2 text-sm text-navy/75"><T ja={service.sub.ja} en={service.sub.en} /></p>
          </div>
        </div>
      </Link>
    </article>
  );
}

export function ProjectCard({
  project,
  index,
  tone = "light",
  size = "md",
}: {
  project: Project;
  index: number;
  tone?: "light" | "dark";
  size?: "md" | "lg";
}) {
  const dark = tone === "dark";
  return (
    <article
      className="group relative w-[82vw] shrink-0 snap-start sm:w-[60vw] md:w-auto"
      data-reveal
      style={{ "--reveal-delay": `${index * 120}ms` } as React.CSSProperties}
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative">
          <Photo
            image={project.cover}
            hoverZoom
            reveal={false}
            sizes="(min-width: 768px) 40vw, 85vw"
            className={size === "lg" ? "aspect-[4/5] md:aspect-[5/6]" : "aspect-[4/5]"}
          />
          <span className="label absolute left-4 top-4 bg-paper/90 px-3 py-1.5 text-navy">NAMI CONCEPT</span>
        </div>
        <div className={`mt-6 flex items-start justify-between gap-6 border-b pb-5 ${dark ? "border-paper/20" : "hairline"}`}>
          <div>
            <p className={`label ${dark ? "text-aqua" : "text-deep"}`}>{project.number} / {project.type}</p>
            <h3 className={`mt-3 font-display text-3xl ${dark ? "text-paper" : "text-navy"}`}>{project.title}</h3>
            <p className={`mt-1 text-sm ${dark ? "text-paper/75" : "text-navy/70"}`}>{project.subtitle}</p>
          </div>
          <span
            className={`mt-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 group-hover:border-vermilion group-hover:bg-vermilion group-hover:text-paper ${
              dark ? "border-paper/40 text-paper" : "border-navy/40 text-navy"
            }`}
          >
            <ArrowRight className="h-3 w-5" />
            <span className="sr-only">View {project.title}</span>
          </span>
        </div>
      </Link>
    </article>
  );
}

export function JournalCard({ article, index }: { article: JournalArticle; index: number }) {
  return (
    <article
      className="group w-[74vw] shrink-0 snap-start sm:w-[44vw] md:w-auto"
      data-reveal
      style={{ "--reveal-delay": `${index * 110}ms` } as React.CSSProperties}
    >
      <Link href={`/journal/${article.slug}`} className="block">
        <Photo
          image={article.cover}
          hoverZoom
          reveal={false}
          sizes="(min-width: 768px) 30vw, 75vw"
          className="aspect-[4/3]"
        />
        <p className="label mt-5 flex items-center gap-3 text-deep">
          {article.category}
          {!article.published && <span className="text-navy/50">· COMING SOON</span>}
        </p>
        <h3 className="mt-3 font-display text-2xl leading-snug text-navy transition-colors group-hover:text-deep">
          {article.title}
        </h3>
        <p className="jp-heading mt-1 text-sm text-navy/75">
          <T ja={article.titleJa ?? ""} en={article.excerpt.en} />
        </p>
      </Link>
    </article>
  );
}
