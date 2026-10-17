import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/ui";
import { projects } from "@/data/projects";
import { getWorks } from "@/data/works";
import { Card } from "@/components/home/sections";
import { PostHead } from "@/components/washi";
import { T } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "NAMI CONCEPTS — design studies exploring Japanese sensibility and contemporary Australian living.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const works = getWorks();
  return (
    <>
      <PageHero
        label="PROJECTS"
        heading={{ ja: "暮らしの波を、\nかたちに。", en: "Giving Shape\nto Life’s Waves" }}
        intro={
          works.length > 0
            ? { ja: "これまでに手がけた住まいと、\nNAMIの考え方を表すコンセプトスタディ。", en: "Homes we have worked on, and concept studies that show how NAMI thinks." }
            : { ja: "NAMIの考え方をもとにした\nコンセプトプロジェクトをご紹介します。", en: "Concept projects that show how NAMI thinks about space." }
        }
        sub={works.length > 0 ? "WORKS AND CONCEPTS" : "CONCEPT STUDIES, NOT CLIENT WORK"}
        art="moon-window"
      />
      {works.length > 0 && (
        <section className="pb-24 md:pb-32" aria-labelledby="works-h">
          <Container>
            <PostHead kicker="WORKS" title={{ ja: "手がけた住まい", en: "Homes We Have Worked On" }} sub="COMPLETED PROJECTS" id="works-h" />
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
                  ratio="aspect-[4/3]"
                  sizes="(min-width:768px) 45vw, 90vw"
                />
              ))}
            </div>
          </Container>
        </section>
      )}
      <section className={`pb-24 md:pb-32 ${works.length > 0 ? "section-rule pt-20 md:pt-28" : ""}`} aria-label="Concept projects">
        <Container>
          {works.length > 0 && (
            <div className="mb-14">
              <PostHead kicker="NAMI CONCEPTS" title={{ ja: "コンセプトスタディ", en: "Concept Studies" }} sub="NOT CLIENT WORK">
                <T
                  ja="NAMIの考え方を表現するために制作したコンセプトスタディです。実際のクライアント案件ではありません。"
                  en="Concept studies created to show NAMI’s design thinking. They are not client commissions."
                />
              </PostHead>
            </div>
          )}
          {works.length === 0 && (
            <p className="mx-auto mb-12 max-w-2xl text-center text-[0.8125rem] leading-[1.9] text-navy/65">
              <T
                ja="掲載しているプロジェクトは、NAMIの考え方を表現するために制作したコンセプトスタディです。実際のクライアント案件ではありません。"
                en="These projects are concept studies created to show NAMI’s design thinking. They are not client commissions."
              />
            </p>
          )}
          <ProjectsGrid projects={projects} />
        </Container>
      </section>
      <CTASection />
    </>
  );
}
