import Image from "next/image";
import { hero } from "@/data/brand";
import { Rule } from "@/components/washi";
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
          alt="Simple woodblock-style picture of the NAMI surfer: a girl with a basket of rolled drawings, a ruler and pencils on her back rides a red surfboard over a wave, a sea turtle swimming beside her, pointing towards a green island and the red sun"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_75%]"
        />
      </div>

      <Container className="grid gap-x-12 pb-20 pt-12 md:grid-cols-12 md:items-end md:pb-28 md:pt-16">
        <div className="md:col-span-7 md:ml-[4%]">
          <p className="kicker">
            {hero.kicker}
          </p>
          <h1
            id="hero-heading"
            className="title mt-6 text-[2.75rem] md:mt-5 md:text-[clamp(2.6rem,4.2vw,4.2rem)] [html:not([data-lang=en])_&]:md:text-[clamp(2.4rem,3.8vw,3.8rem)]"
          >
            <T ja={hero.heading.ja} en={hero.heading.en} />
          </h1>
        </div>
        <div className="md:col-span-5 md:pb-2">
          <p className="subline mt-4 md:mt-0 md:text-[0.78rem]">
            NEST AND MEMORIES INSIDE
          </p>
          <Rule className="mt-6 md:mt-4" />
          <p
            className="jp-body mt-6 max-w-[34em] text-[0.9375rem] text-navy/80 md:mt-4"
          >
            <T ja={hero.body.ja} en={hero.body.en} />
          </p>
        </div>
      </Container>
    </section>
  );
}
