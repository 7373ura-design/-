import { Hero } from "@/components/home/Hero";
import { StorySection } from "@/components/home/StorySection";
import {
  ApproachSection,
  JapanAustraliaSection,
  JournalPreview,
  MeaningsSection,
  ProjectsPreview,
  ServicesPreview,
} from "@/components/home/sections";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StorySection />
      <MeaningsSection />
      <ApproachSection />
      <JapanAustraliaSection />
      <ServicesPreview />
      <ProjectsPreview />
      <JournalPreview />
      <CTASection />
    </>
  );
}
