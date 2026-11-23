import { Hero } from "@/components/home/Hero";
import { BackgroundSection, ContactSection } from "@/components/home/sections";
import { ChoiceCards, Section, Strengths } from "@/components/blocks";
import { businesses, strengths } from "@/data/brand";
import type { Lang } from "@/lib/lang";

/**
 * The top page (where the business-card QR code lands): what NAMI is in a few
 * lines, then a choice of the two businesses, what they share, who designs,
 * and how to get in touch.
 */
export function HomeView({ lang }: { lang: Lang }) {
  return (
    <>
      <Hero />
      <Section id="choose" title={{ en: "What We Design", ja: "デザインの分野" }} intro={{ en: "Choose the one that fits you.", ja: "ご希望に近いほうをお選びください。" }} wide>
        <ChoiceCards lang={lang} items={businesses} />
      </Section>
      <Section id="why" title={{ en: "Why NAMI", ja: "NAMIの特長" }} wide>
        <Strengths items={strengths} />
      </Section>
      <div id="about" className="scroll-mt-16">
        <BackgroundSection />
      </div>
      <ContactSection />
    </>
  );
}
