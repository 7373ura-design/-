import { Hero } from "@/components/home/Hero";
import { BackgroundSection, ContactSection, WorksSection } from "@/components/home/sections";

/** One page: the work first, then who NAMI is and how to get in touch. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <WorksSection />
      <div id="about" className="scroll-mt-16">
        <BackgroundSection />
      </div>
      <ContactSection />
    </>
  );
}
