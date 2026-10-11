import { approach, japanAustralia, meanings, principles } from "@/data/brand";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { getArticles } from "@/data/journal";
import { JournalCard, MeaningCard, PrincipleCard, ProjectCard, ServiceCard } from "@/components/cards";
import { WaveDivider } from "@/components/WaveDivider";
import { ArrowLink, Container, Lines, SectionHeader } from "@/components/ui";
import Link from "next/link";

export function MeaningsSection({ full = false }: { full?: boolean }) {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="meanings-heading">
      <Container>
        <div className="text-center" data-reveal>
          <p className="label text-deep">THE MEANING BEHIND NAMI</p>
          <h2 id="meanings-heading" className="jp-heading mt-5 text-[1.75rem] text-navy sm:text-4xl">
            NAMIに込めた<span className="text-vermilion">3</span>つの意味
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-3 md:gap-0 md:divide-x md:divide-navy/15 [&>*]:md:px-8 lg:[&>*]:px-12 md:[&>*:first-child]:pl-0 md:[&>*:last-child]:pr-0">
          {meanings.map((m, i) => (
            <MeaningCard key={m.number} meaning={m} index={i} full={full} />
          ))}
        </div>
        {!full && (
          <div className="mt-14 text-center" data-reveal>
            <ArrowLink href="/about">READ OUR STORY</ArrowLink>
          </div>
        )}
      </Container>
    </section>
  );
}

export function ApproachSection() {
  return (
    <section className="border-y hairline bg-paper py-20 md:py-28" aria-labelledby="approach-heading">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7" id="approach-heading">
            <SectionHeader number="02" label="APPROACH" heading={approach.heading} />
          </div>
          <p className="jp-body text-[0.9375rem] text-navy/80 lg:col-span-5 lg:pb-2" data-reveal>
            <Lines text={approach.body} />
          </p>
        </div>
        <ul className="mt-14 grid md:mt-20 md:grid-cols-5 md:[&>li:first-child]:border-l-0 md:[&>li:first-child]:pl-0">
          {principles.map((p, i) => (
            <PrincipleCard key={p.key} principle={p} index={i} />
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function JapanAustraliaSection() {
  const Side = ({ title, sub, items, align }: { title: string; sub: string; items: string[]; align: "left" | "right" }) => (
    <div className={`text-center ${align === "left" ? "md:text-right" : "md:text-left"}`} data-reveal>
      <p className="font-display text-3xl tracking-[0.3em] text-navy md:text-4xl">{title}</p>
      <p className="label mt-2 text-deep">{sub}</p>
      <ul className={`mt-8 flex flex-wrap justify-center gap-2.5 ${align === "left" ? "md:justify-end" : "md:justify-start"}`}>
        {items.map((item) => (
          <li
            key={item}
            className={`border hairline bg-paper px-4 py-2 text-sm text-navy ${/^[A-Za-z]/.test(item) ? "font-sans tracking-wide" : "font-jp tracking-[0.12em]"}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-beige/45 py-20 md:py-28" aria-labelledby="jxa-heading">
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-jp text-[24rem] leading-none text-navy/[0.035] md:text-[36rem]"
      >
        並
      </span>
      <Container className="relative">
        <div className="text-center" data-reveal>
          <p className="label text-deep">JAPAN × AUSTRALIA</p>
          <h2 id="jxa-heading" className="jp-heading mt-5 text-[1.6rem] text-navy sm:text-3xl">
            異なるものを、並べて生かす。
          </h2>
        </div>
        <div className="mt-14 grid items-center gap-10 md:mt-20 md:grid-cols-[1fr_auto_1fr] md:gap-12 lg:gap-20">
          <Side title="JAPAN" sub="日本の美意識" items={japanAustralia.japan} align="left" />
          <div className="relative mx-auto flex h-40 w-40 items-center justify-center md:h-52 md:w-52" data-reveal>
            <div className="absolute inset-0 rounded-full bg-vermilion" />
            <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden>
              <path d="M10 128c30-14 50-14 90 0s60 14 90 0" fill="none" stroke="#FFFDF8" strokeWidth="1.5" opacity=".7" />
              <path d="M18 146c26-10 46-10 82 0s56 10 82 0" fill="none" stroke="#FFFDF8" strokeWidth="1.5" opacity=".5" />
            </svg>
            <div className="relative text-center text-paper">
              <p className="font-display text-4xl tracking-[0.3em] pl-[0.3em] md:text-5xl">NAMI</p>
              <p className="label mt-1 !text-[0.6rem] text-paper/85">波 · 並</p>
            </div>
          </div>
          <Side title="AUSTRALIA" sub="オーストラリアの自然" items={japanAustralia.australia} align="right" />
        </div>
      </Container>
    </section>
  );
}

export function ServicesPreview() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="services-heading">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7" id="services-heading">
            <SectionHeader number="03" label="SERVICES" heading={["暮らしを整える、", "4つのサービス。"]} />
          </div>
          <div className="lg:col-span-5" data-reveal>
            <p className="jp-body text-[0.9375rem] text-navy/80">
              住まいのご相談から、コンセプトづくり、
              <br className="hidden sm:block" />
              空間プランニング、スタイリングまで。
              <br />
              その人のライフスタイルに合わせた
              <br className="hidden sm:block" />
              空間づくりをサポートします。
            </p>
          </div>
        </div>
      </Container>
      <div className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 md:mx-auto md:grid md:max-w-[1360px] md:grid-cols-4 md:gap-6 md:overflow-visible md:px-10 lg:px-16">
        {services.map((s, i) => (
          <ServiceCard key={s.slug} service={s} index={i} />
        ))}
      </div>
      <Container className="mt-12">
        <ArrowLink href="/services" variant="outline">
          VIEW ALL SERVICES
        </ArrowLink>
      </Container>
    </section>
  );
}

export function ProjectsPreview() {
  return (
    <section className="relative bg-navy text-paper" aria-labelledby="projects-heading">
      <WaveDivider fill="#073B5C" accent="#008FB5" className="bg-cream" />
      <div className="py-16 md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7" id="projects-heading">
              <SectionHeader number="04" label="PROJECTS" heading={["暮らしの波を、", "かたちに。"]} tone="light" />
            </div>
            <div className="lg:col-span-5" data-reveal>
              <p className="jp-body text-[0.9375rem] text-paper/80">
                NAMIの考え方をもとにした
                <br />
                コンセプトプロジェクトをご紹介します。
              </p>
            </div>
          </div>
        </Container>
        <div className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 md:mx-auto md:grid md:max-w-[1360px] md:grid-cols-3 md:gap-8 md:overflow-visible md:px-10 lg:px-16">
          {projects.slice(0, 3).map((p, i) => (
            <div key={p.slug} className={`contents md:block ${i === 1 ? "md:mt-16" : ""}`}>
              <ProjectCard project={p} index={i} tone="dark" />
            </div>
          ))}
        </div>
        <Container className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs leading-relaxed text-paper/60">
            ※ 掲載プロジェクトは、NAMIの考え方を表現したコンセプトスタディです。実際のクライアント案件ではありません。
          </p>
          <ArrowLink href="/projects" variant="light" className="shrink-0 self-start">
            VIEW ALL PROJECTS
          </ArrowLink>
        </Container>
      </div>
      <WaveDivider fill="#F7F1E5" accent="#75C9D5" className="bg-navy" flip={false} />
    </section>
  );
}

export function JournalPreview() {
  const articles = getArticles();
  const featured = articles.slice(0, 3);
  const rest = articles.slice(3);
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="journal-heading">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div id="journal-heading">
            <SectionHeader number="05" label="JOURNAL" heading={["暮らしを考える、", "ヒントを届ける。"]} />
          </div>
          <ArrowLink href="/journal" className="self-start md:self-end">
            VIEW JOURNAL
          </ArrowLink>
        </div>
      </Container>
      <div className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 md:mx-auto md:grid md:max-w-[1360px] md:grid-cols-3 md:gap-8 md:overflow-visible md:px-10 lg:px-16">
        {featured.map((a, i) => (
          <JournalCard key={a.slug} article={a} index={i} />
        ))}
      </div>
      <Container>
        <ul className="mt-14 border-t hairline">
          {rest.map((a) => (
            <li key={a.slug} className="border-b hairline">
              <Link
                href={`/journal/${a.slug}`}
                className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <span className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                  <span className="label w-32 text-deep">{a.category}</span>
                  <span className="font-display text-xl text-navy transition-colors group-hover:text-deep md:text-2xl">
                    {a.title}
                  </span>
                </span>
                <span className="jp-heading text-sm text-navy/65">{a.titleJa}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
