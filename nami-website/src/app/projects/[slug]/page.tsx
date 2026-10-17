import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Photo } from "@/components/Photo";
import { ProjectCard } from "@/components/cards";
import { CTASection } from "@/components/CTASection";
import { ArrowLink, Container, SectionLabel } from "@/components/ui";
import { getProject, projects } from "@/data/projects";
import { T } from "@/lib/i18n";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.subtitle}`,
    description: project.overview.en,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: `${project.title} | NAMI`, description: project.overview.en },
  };
}

function Block({ label, title, children }: { label: string; title?: string; children: React.ReactNode }) {
  return (
    <section className="border-t hairline py-16 md:py-20">
      <Container className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-3" data-reveal>
          <p className="kicker">{label}</p>
          <span className="rule mt-4" aria-hidden />
          {title && <h2 className="title mt-4 text-2xl">{title}</h2>}
        </div>
        <div className="lg:col-span-9">{children}</div>
      </Container>
    </section>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <>
      <section className="pt-28 md:pt-40">
        <Container>
          <nav aria-label="Breadcrumb" className="label text-navy/60" data-reveal>
            <Link href="/projects" className="link-underline pb-1 hover:text-vermilion">
              PROJECTS
            </Link>
            <span className="mx-3">/</span>
            <span className="text-vermilion">NAMI CONCEPT</span>
          </nav>
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8" data-reveal>
              <p className="kicker"><span className="mr-3 text-vermilion">{project.number}.</span>NAMI CONCEPT</p>
              <h1 className="title mt-4 text-5xl sm:text-6xl lg:text-7xl">{project.title}</h1>
              <p className="subline mt-4">{project.subtitle}</p>
              <span className="rule mt-6" aria-hidden />
            </div>
            <dl className="grid grid-cols-3 gap-4 border-t hairline pt-6 lg:col-span-4 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0" data-reveal>
              {[
                ["LOCATION", project.location],
                ["TYPE", project.type],
                ["STATUS", "Concept study"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="label text-navy/55">{k}</dt>
                  <dd className="mt-1 text-sm text-navy">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
        <Container className="mt-12">
          <Photo image={project.cover} priority className="aspect-[4/3] md:aspect-[16/9]" sizes="100vw" />
          <p className="mt-4 text-xs text-navy/60">
            <T
              ja="※ このプロジェクトはNAMIのコンセプトスタディです。実在のクライアント案件ではありません。画像はイメージです。デッキ・中庭・軒など建物に関わる部分は、実際には建築士・施工会社と進める内容です。"
              en="This is a NAMI concept study, not a client project. Images are for illustration only. Building elements such as decks, courtyards and eaves would be designed and built with licensed architects and builders."
            />
          </p>
        </Container>
<div className="mt-16" />
      </section>

      <div>
        <Block label="PROJECT OVERVIEW">
          <p className="jp-heading text-xl leading-[2] text-navy md:text-2xl" data-reveal>
            <T ja={project.overview.ja} en={project.overview.en} />
          </p>
        </Block>

        <Block label="CONCEPT">
          <p className="jp-body text-base text-navy/85" data-reveal>
            <T ja={project.concept.ja} en={project.concept.en} />
          </p>
        </Block>

        <Block label="DESIGN APPROACH">
          <ol className="grid gap-8 md:grid-cols-3">
            {project.designDirection.map((d, i) => (
              <li key={d.title} data-reveal style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}>
                <span className="kicker text-vermilion">0{i + 1}.</span>
                <h3 className="title mt-3 text-2xl">{d.title}</h3>
                <p className="jp-body mt-3 text-sm leading-[2] text-navy/80">
                  <T ja={d.body.ja} en={d.body.en} />
                </p>
              </li>
            ))}
          </ol>
        </Block>

        <Block label="MATERIALS">
          <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {project.materials.map((m) => (
              <li key={m.name} data-reveal>
                <span
                  aria-hidden
                  className="block aspect-square w-full rounded-full border hairline"
                  style={{ backgroundColor: m.swatch }}
                />
                <p className="title mt-4 text-xl">{m.name}</p>
                <p className="jp-heading text-sm text-navy/70">
                  <T ja={m.note.ja} en={m.note.en} />
                </p>
              </li>
            ))}
          </ul>
        </Block>

        <Block label="MOODBOARD">
          <div className="grid gap-6 sm:grid-cols-2">
            {project.moodboard.map((img) => (
              <Photo key={img.src} image={img} className="aspect-square" sizes="(min-width: 640px) 40vw, 100vw" />
            ))}
          </div>
        </Block>

        <Block label="FLOOR PLAN">
          <Photo image={project.plan} className="aspect-[16/11] border hairline" sizes="(min-width: 1024px) 70vw, 100vw" />
          <p className="mt-3 text-xs text-navy/60">Indicative concept plan — not for construction.</p>
        </Block>

        <Block label="3D / VISUALS">
          <div className="grid gap-6">
            {project.visuals.map((img) => (
              <Photo key={img.src} image={img} className="aspect-[16/10]" sizes="(min-width: 1024px) 70vw, 100vw" />
            ))}
          </div>
        </Block>

        <Block label="GALLERY">
          <div className="grid gap-6 sm:grid-cols-3">
            {project.gallery.map((img, i) => (
              <Photo
                key={img.src}
                image={img}
                className={`aspect-[4/5] ${i === 1 ? "sm:mt-12" : ""}`}
                sizes="(min-width: 640px) 25vw, 100vw"
              />
            ))}
          </div>
        </Block>
      </div>

      <section className="section-rule py-20 md:py-28" aria-labelledby="more-heading">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 id="more-heading" className="title text-4xl">
              More Concepts
            </h2>
            <ArrowLink href="/projects">ALL PROJECTS</ArrowLink>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 [&_article]:w-auto">
            {others.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
