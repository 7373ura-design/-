import { Hero } from "@/components/home/Hero";
import { BackgroundSection, ContactSection, ServicesSection, WorksSection } from "@/components/home/sections";
import type { Lang } from "@/lib/lang";

/** One page: the work first, then who NAMI is and how to get in touch. */
export function HomeView({ lang }: { lang: Lang }) {
  return (
    <>
      <Hero />
      <WorksSection lang={lang} />
      <ServicesSection lang={lang} />
      <div id="about" className="scroll-mt-16">
        <BackgroundSection />
      </div>
      <ContactSection />
    </>
  );
}
