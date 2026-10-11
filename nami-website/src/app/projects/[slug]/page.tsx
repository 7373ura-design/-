import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Photo } from "@/components/Photo";
import { ProjectCard } from "@/components/cards";
import { CTASection } from "@/components/CTASection";
import { ArrowLink, Container, SectionLabel } from "@/components/ui";
import { getProject, projects } from "@/data/projects";

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
    description: project.overview,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: `${project.title} | NAMI`, description: project.overview },
  };
}

function Block({ label, title, children }: { label: string; title?: string; children: React.ReactNode }) {
  return (
    <section className="border-t hairline py-16 md:py-20">
      <Container className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-3" data-reveal>
          <SectionLabel>{label}</SectionLabel>
          {title && <h2 className="jp-heading mt-4 text-2xl text-navy">{title}</h2>}
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
      <section className="bg-cream pt-28 md:pt-40">
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
              <p className="font-display text-xl text-vermilion">{project.number}</p>
              <h1 className="mt-2 font-display text-5xl text-navy sm:text-6xl lg:text-7xl">{project.title}</h1>
              <p className="mt-4 font-display text-2xl text-deep md:text-3xl">{project.subtitle}</p>
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
            ※ このプロジェクトはNAMIのコンセプトスタディです。実在のクライアント案件ではありません。画像はイメージです。
          </p>
        </Container>
<div className="mt-16" />
      </section>

      <div className="bg-paper">
        <Block label="PROJECT OVERVIEW">
          <p className="jp-heading text-xl leading-[2] text-navy md:text-2xl" data-reveal>
            {project.overview}
          </p>
        </Block>

        <Block label="CONCEPT">
          <p className="jp-body text-base text-navy/85" data-reveal>
            {project.concept}
          </p>
        </Block>

        <Block label="DESIGN APPROACH">
          <ol className="grid gap-8 md:grid-cols-3">
            {project.designDirection.map((d, i) => (
              <li key={d.title} data-reveal style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties}>
                <span className="label text-vermilion">0{i + 1}</span>
                <h3 className="mt-3 font-display text-2xl text-navy">{d.title}</h3>
                <p className="jp-body mt-3 text-sm leading-[2] text-navy/80">{d.body}</p>
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
                <p className="mt-4 font-display text-xl text-navy">{m.name}</p>
                <p className="jp-heading text-sm text-navy/70">{m.note}</p>
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

      <section className="border-t hairline bg-cream py-20 md:py-28" aria-labelledby="more-heading">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 id="more-heading" className="font-display text-4xl text-navy">
              More concepts
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
