import { SurfScene } from "@/components/home/SurfScene";
import { hero } from "@/data/brand";
import { Rule } from "@/components/washi";
import { Container } from "@/components/ui";
import { T } from "@/lib/i18n";

/**
 * Hero — the cover of the NAMI posts: a large serif title and blue subline on
 * the paper, and below it the sea, where the NAMI surfer rides across towards
 * the sun she is pointing at. On phones the sea comes first.
 */
export function Hero() {
  return (
    <section className="relative flex flex-col pt-20 md:h-[100svh] md:min-h-[700px] md:pt-24" aria-labelledby="hero-heading">
      <Container className="relative z-10 grid gap-x-12 pb-12 pt-10 md:grid-cols-12 md:items-end md:pb-10 md:pt-4">
        <div className="md:col-span-7 md:ml-[4%]">
          <p className="kicker" data-reveal>
            {hero.kicker}
          </p>
          <h1
            id="hero-heading"
            className="title mt-6 text-[2.75rem] md:mt-5 md:text-[clamp(2.6rem,4.2vw,4.2rem)] [html:not([data-lang=en])_&]:md:text-[clamp(2.4rem,3.8vw,3.8rem)]"
            data-reveal
            style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
          >
            <T ja={hero.heading.ja} en={hero.heading.en} />
          </h1>
        </div>
        <div className="md:col-span-5 md:pb-2">
          <p className="subline mt-4 md:mt-0 md:text-[0.78rem]" data-reveal style={{ "--reveal-delay": "180ms" } as React.CSSProperties}>
            NEST AND MEMORIES INSIDE
          </p>
          <Rule className="mt-6 md:mt-4" />
          <p
            className="jp-body mt-6 max-w-[34em] text-[0.9375rem] text-navy/80 md:mt-4 md:text-[0.875rem]"
            data-reveal
            style={{ "--reveal-delay": "260ms" } as React.CSSProperties}
          >
            <T ja={hero.body.ja} en={hero.body.en} />
          </p>
        </div>
      </Container>

      {/* The sea, and the NAMI surfer riding across it */}
      <SurfScene className="-order-1 h-[clamp(240px,62vw,440px)] md:order-none md:h-auto md:min-h-[320px] md:flex-1" />
    </section>
  );
}
