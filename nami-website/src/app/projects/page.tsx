import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/ui";
import { projects } from "@/data/projects";
import { T } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "NAMI CONCEPTS — design studies exploring Japanese sensibility and contemporary Australian living.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="PROJECTS"
        heading={{ ja: "暮らしの波を、\nかたちに。", en: "Giving Shape\nto Life’s Waves" }}
        intro={{
          ja: "NAMIの考え方をもとにした\nコンセプトプロジェクトをご紹介します。",
          en: "Concept projects that show how NAMI thinks about space.",
        }}
        sub="CONCEPT STUDIES, NOT CLIENT WORK"
        art="moon-window"
      >
        <p className="text-center text-[0.8125rem] leading-[1.9] text-navy/65">
          <T
            ja="掲載しているプロジェクトは、NAMIの考え方を表現するために制作したコンセプトスタディです。実際のクライアント案件ではありません。"
            en="These projects are concept studies created to show NAMI’s design thinking. They are not client commissions."
          />
        </p>
      </PageHero>
      <section className="pb-24 md:pb-32" aria-label="Project list">
        <Container>
          <ProjectsGrid projects={projects} />
        </Container>
      </section>
      <CTASection />
    </>
  );
}
