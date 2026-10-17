import Image from "next/image";
import { hero } from "@/data/brand";
import { Art, Rule } from "@/components/washi";
import { Container } from "@/components/ui";
import { T } from "@/lib/i18n";

/**
 * Hero — the cover of the NAMI posts: a large serif title and blue subline on
 * the paper, with the pines-and-waves illustration rising from the bottom.
 */
export function Hero() {
  return (
    <section className="relative pt-28 md:pt-36" aria-labelledby="hero-heading">
      <Container className="relative z-10 grid items-center gap-10 md:grid-cols-12">
        <div className="md:col-span-6 md:ml-[8%]">
          <p className="kicker" data-reveal>
            JAPANESE × AUSTRALIAN INTERIOR DESIGN
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
        {/* The NAMI surfer, recoloured to sit with the woodblock-style art */}
        <div className="md:col-span-6" data-reveal style={{ "--reveal-delay": "200ms" } as React.CSSProperties}>
          <Image
            src="/images/washi/surfer.jpg"
            alt="The NAMI surfer: a girl with a basket of tools on her back rides a red surfboard over a big wave, a turtle beside her, pointing towards an island and a red sun"
            width={928}
            height={612}
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="w-full"
          />
        </div>
      </Container>
      <div className="mt-10 md:mt-8">
        <Art name="hills" priority className="h-[clamp(300px,52vw,820px)]" position="50% 100%" />
      </div>
    </section>
  );
}
