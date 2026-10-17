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
      <Container className="relative z-10">
        <div className="md:ml-[4%]">
          <p className="kicker" data-reveal>
            JAPANESE × AUSTRALIAN INTERIOR DESIGN
          </p>
          <h1
            id="hero-heading"
            className="title mt-6 text-[2.75rem] md:text-[clamp(3.2rem,6.4vw,6rem)] [html:not([data-lang=en])_&]:md:text-[clamp(2.6rem,4.8vw,4.6rem)]"
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
      </Container>
      <div className="mt-10 md:mt-8">
        <Art name="hills" priority className="h-[clamp(300px,52vw,820px)]" position="50% 100%" />
      </div>
    </section>
  );
}
