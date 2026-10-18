import { Hero } from "@/components/home/Hero";
import { BackgroundSection, MeaningsSection, PromiseSection, RootsSection } from "@/components/home/sections";

/** Home is also the About page: who NAMI is, in the order of the Instagram posts. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <MeaningsSection />
      <BackgroundSection />
      <RootsSection />
      <PromiseSection />
    </>
  );
}
