import Link from "next/link";
import type { JournalArticle, Meaning, Principle, Project } from "@/lib/types";
import { Photo } from "@/components/Photo";
import { meaningEmblems, principleIcons } from "@/components/illustrations/Icons";
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
        <span className="kicker text-vermilion">{meaning.number}.</span>
      </div>
      <h3 className="title mt-8 text-[1.75rem] tracking-[0.06em] md:text-3xl">
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
      <p className={`mt-3 ${isLatin ? "subline" : "subline !normal-case !tracking-[0.04em] text-[0.9375rem]"}`}>
        <T ja={meaning.lead.ja} en={meaning.lead.en} />
      </p>
      <span className="rule mt-5" aria-hidden />
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
        <p className="kicker text-vermilion">{principle.number}.</p>
        <h3 className="title mt-2 text-[1.35rem] tracking-[0.12em]">{principle.title}</h3>
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
            className="aspect-[3/2]"
          />
          <span className="kicker absolute left-4 top-4 bg-cream/90 px-3 py-1.5 !text-[0.625rem]">NAMI CONCEPT</span>
        </div>
        <div className="mt-6 text-center">
          <p className={`kicker ${dark ? "!text-paper/70" : ""}`}>
            <span className="mr-3 text-vermilion">{project.number}.</span>
            {project.type}
          </p>
          <h3 className={`title mt-3 text-[1.6rem] transition-colors group-hover:text-deep ${dark ? "!text-paper" : ""}`}>{project.title}</h3>
          <p className={`mt-1 text-[0.8125rem] ${dark ? "text-paper/75" : "text-navy/65"}`}>{project.subtitle}</p>
        </div>
      </Link>
    </article>
  );
}

export function JournalCard({ article, index }: { article: JournalArticle; index: number }) {
  return (
    <article
      className="group w-[74vw] shrink-0 snap-start text-center sm:w-[44vw] md:w-auto"
      data-reveal
      style={{ "--reveal-delay": `${index * 110}ms` } as React.CSSProperties}
    >
      <Link href={`/journal/${article.slug}`} className="block">
        <Photo
          image={article.cover}
          hoverZoom
          reveal={false}
          sizes="(min-width: 768px) 30vw, 75vw"
          className="aspect-[3/2]"
        />
        <p className="kicker mt-6">
          {article.category}
          {!article.published && <span className="text-navy/50"> · COMING SOON</span>}
        </p>
        <h3 className="title mt-3 text-[1.5rem] !leading-snug transition-colors group-hover:text-deep">{article.title}</h3>
        <p className="subline mt-2 !normal-case !tracking-[0.04em] text-[0.8125rem]">
          <T ja={article.titleJa ?? ""} en={article.excerpt.en} />
        </p>
      </Link>
    </article>
  );
}
