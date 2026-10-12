import { Hero } from "@/components/home/Hero";
import {
  ApproachSection,
  CraftSection,
  JournalPreview,
  MeaningsSection,
  ProjectsPreview,
  ServicesPreview,
  StorySection,
} from "@/components/home/sections";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StorySection />
      <MeaningsSection />
      <ApproachSection />
      <CraftSection />
      <ServicesPreview />
      <ProjectsPreview />
      <JournalPreview />
      <CTASection />
    </>
  );
}
