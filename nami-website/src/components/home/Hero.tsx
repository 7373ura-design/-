import Image from "next/image";
import { hero } from "@/data/brand";
import { T } from "@/lib/i18n";

/**
 * Hero — the interior photograph and the wave/sun/pine illustration are one
 * composed image (public/images/hero/hero.jpg); the headline sits on the paper
 * area to its left.
 */
export function Hero() {
  return (
    <section className="relative bg-cream pt-20 md:pt-24" aria-labelledby="hero-heading">
      <div className="relative mx-auto max-w-[1600px]">
        {/* Text — in normal flow on mobile, laid over the paper area on desktop */}
        <div className="relative z-10 px-5 pb-8 pt-8 md:absolute md:left-[5.5%] md:top-[9%] md:w-[36%] md:p-0">
          <h1
            id="hero-heading"
            className="jp-heading text-[2.6rem] leading-[1.42] text-navy md:text-[clamp(2.2rem,4.1vw,4.4rem)] [html[data-lang=en]_&]:md:text-[clamp(2rem,3.5vw,3.8rem)]"
            data-reveal
          >
            <T ja={hero.heading.ja} en={hero.heading.en} />
          </h1>
          <p
            className="label mt-4 !text-[0.72rem] !tracking-[0.3em] text-navy md:mt-[1.2vw] md:!text-[clamp(0.62rem,0.9vw,0.85rem)]"
            data-reveal
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            NEST AND MEMORIES INSIDE
          </p>
          <p
            className="jp-body mt-5 text-sm leading-[2] text-navy/85 md:mt-[1.6vw] md:max-w-[28vw] md:text-[clamp(0.78rem,1.05vw,1rem)]"
            data-reveal
            style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
          >
            <T ja={hero.body.ja} en={hero.body.en} />
          </p>
          <a
            href="#story"
            className="group label mt-6 inline-flex items-center gap-4 text-navy md:mt-[2.2vw]"
            data-reveal
            style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
          >
            <span aria-hidden className="h-10 w-px bg-navy/40 transition-colors group-hover:bg-vermilion" />
            SCROLL
          </a>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden md:aspect-[1644/772]">
          <Image
            src="/images/hero/hero.jpg"
            alt="Bright coastal living room with a linen sofa, round timber table and wide glass doors opening to pine trees and the sea, framed by Japanese-style waves, a red sun and a small pine island"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[78%_50%] md:object-center"
          />
        </div>
      </div>
    </section>
  );
}
