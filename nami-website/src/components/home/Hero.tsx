import Image from "next/image";
import { hero } from "@/data/brand";
import { PostHead } from "@/components/washi";
import { Container } from "@/components/ui";
import { T } from "@/lib/i18n";

/**
 * Hero — the NAMI surfer across the full width of the page, like the
 * illustration that opens each post, with the title and text set below.
 */
export function Hero() {
  return (
    <section className="relative pt-20 md:pt-24" aria-labelledby="hero-heading">
      <div className="relative aspect-[3/2] max-h-[86svh] w-full overflow-hidden">
        <Image
          src="/images/washi/surfer-wide.jpg"
          alt="Woodblock-style picture of the NAMI surfer: a girl with a basket of rolled drawings, a ruler and pencils on her back rides a red surfboard over a wave, a sea turtle swimming beside her, pointing towards a green island and the red sun"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_75%]"
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
