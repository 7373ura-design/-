import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/ui";
import { projects } from "@/data/projects";

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
        heading={["暮らしの波を、", "かたちに。"]}
        intro={"NAMIの考え方をもとにした\nコンセプトプロジェクトをご紹介します。"}
        art={
          <div className="border-l-2 border-vermilion pl-6">
            <p className="font-display text-3xl tracking-[0.16em] text-navy">NAMI CONCEPTS</p>
            <p className="jp-body mt-4 text-sm leading-[2] text-navy/75">
              掲載しているプロジェクトは、NAMIの考え方を表現するために制作したコンセプトスタディです。
              実際のクライアント案件ではありません。
            </p>
          </div>
        }
      />
      <section className="bg-cream pb-24 pt-6 md:pb-32" aria-label="Project list">
        <Container>
          <ProjectsGrid projects={projects} />
        </Container>
      </section>
      <CTASection />
    </>
  );
}
