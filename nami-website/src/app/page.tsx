import { Hero } from "@/components/home/Hero";
import { JournalIndex, NameNotes, ProjectsLaid, StoryLaid, WorkLaid } from "@/components/home/HandLaid";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StoryLaid />
      <NameNotes />
      <WorkLaid />
      <ProjectsLaid />
      <JournalIndex />
      <CTASection />
    </>
  );
}
