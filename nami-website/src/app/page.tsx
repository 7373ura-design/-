import { Hero } from "@/components/home/Hero";
import { MeaningsSection, RootsSection, ServicesPreview, WorksSection } from "@/components/home/sections";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WorksSection />
      <MeaningsSection />
      <ServicesPreview />
      <RootsSection />
      <CTASection />
    </>
  );
}
