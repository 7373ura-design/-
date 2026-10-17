import { Hero } from "@/components/home/Hero";
import {
  ApproachSection,
  CraftSection,
  JournalPreview,
  MeaningsSection,
  ProjectsPreview,
  RootsSection,
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
      <RootsSection />
      <ServicesPreview />
      <ProjectsPreview />
      <JournalPreview />
      <CTASection />
    </>
  );
}
