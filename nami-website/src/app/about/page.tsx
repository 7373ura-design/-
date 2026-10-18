import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { MeaningsSection, NameCareSection, PromiseSection, RootsSection } from "@/components/home/sections";
import { hero } from "@/data/brand";

export const metadata: Metadata = {
  title: "About NAMI",
  description: "NAMI — 波・並・Nest And Memories Inside. One name, three meanings.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="MEET NAMI"
        heading={{ ja: "NAMIとは", en: "What is NAMI?" }}
        sub="ONE NAME. THREE MEANINGS."
        intro={hero.body}
        art="great-wave"
        artPosition="50% 80%"
      />
      <MeaningsSection />
      <NameCareSection />
      <RootsSection />
      <PromiseSection />
    </>
  );
}
