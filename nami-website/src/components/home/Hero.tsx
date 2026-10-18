import Image from "next/image";
import { hero } from "@/data/brand";
import { Rule } from "@/components/washi";
import { Container } from "@/components/ui";
import { T } from "@/lib/i18n";

/**
 * Hero — the cover of the NAMI posts: a large serif title and blue subline on
 * the paper, beside the NAMI surfer. On phones the surfer comes first.
 */
export function Hero() {
  return (
    <section className="relative pb-20 pt-24 md:flex md:min-h-[100svh] md:items-center md:pb-24 md:pt-28" aria-labelledby="hero-heading">
      <Container className="relative z-10 grid items-center gap-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-6 md:ml-[8%]">
          <p className="kicker" data-reveal>
            {hero.kicker}
          </p>
          <h1
            id="hero-heading"
            className="title mt-6 text-[2.75rem] md:text-[clamp(2.8rem,5vw,4.8rem)] [html:not([data-lang=en])_&]:md:text-[clamp(2.6rem,4.8vw,4.6rem)]"
            data-reveal
            style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
          >
            <T ja={hero.heading.ja} en={hero.heading.en} />
          </h1>
          <p className="subline mt-4 md:text-[0.78rem]" data-reveal style={{ "--reveal-delay": "180ms" } as React.CSSProperties}>
            NEST AND MEMORIES INSIDE
          </p>
          <Rule className="mt-6" />
          <p
            className="jp-body mt-6 max-w-[30em] text-[0.9375rem] text-navy/80"
            data-reveal
            style={{ "--reveal-delay": "260ms" } as React.CSSProperties}
          >
            <T ja={hero.body.ja} en={hero.body.en} />
          </p>
        </div>
        <div className="-order-1 mx-auto w-[88%] md:order-none md:col-span-6 md:w-full">
          <Image
            src="/images/washi/surfer.jpg"
            alt="The NAMI surfer: a girl with a basket of tools on her back rides a red surfboard over a big wave, a turtle beside her, pointing towards an island and a red sun"
            width={928}
            height={612}
            priority
            sizes="(min-width: 768px) 50vw, 90vw"
            className="w-full"
          />
        </div>
      </Container>
    </section>
  );
}
