import Image from "next/image";
import { hero } from "@/data/brand";
import { PostHead } from "@/components/washi";
import { Container } from "@/components/ui";
import { T } from "@/lib/i18n";

/**
 * Hero — a quiet Japanese room opening onto an Oceania landscape, across the
 * full width of the page, with the title and text set below.
 */
export function Hero() {
  return (
    <section className="relative pt-20 md:pt-24" aria-labelledby="hero-heading">
      <div className="relative aspect-[4/3] max-h-[80svh] w-full overflow-hidden sm:aspect-[2160/1119]">
        <Image
          src="/images/washi/shoji.jpg"
          alt="Woodblock-style picture of a quiet Japanese room: an open shoji screen, a low timber bench with a vase, and a gum-tree landscape beyond"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[35%_50%]"
        />
      </div>

      <Container className="pb-20 pt-12 md:pb-28 md:pt-20">
        <PostHead as="h1" id="hero-heading" kicker={hero.kicker} title={hero.heading} sub="NEST AND MEMORIES INSIDE" size="lg">
          <T ja={hero.body.ja} en={hero.body.en} />
        </PostHead>
      </Container>
    </section>
  );
}
