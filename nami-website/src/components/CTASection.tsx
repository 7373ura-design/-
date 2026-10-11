import { SurferMini } from "@/components/illustrations/Surfer";
import { ArrowLink, Container } from "@/components/ui";

/** Closing call-to-action, with a big layered wave running into the footer. */
export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-cream pt-20 md:pt-28" aria-labelledby="cta-heading">
      <Container className="relative z-10 text-center">
        <p className="label text-deep" data-reveal>
          LET&apos;S CREATE A SPACE THAT FEELS LIKE YOURS
        </p>
        <h2
          id="cta-heading"
          className="jp-heading mx-auto mt-8 max-w-3xl text-[1.75rem] leading-[1.7] text-navy sm:text-4xl lg:text-5xl"
          data-reveal
        >
          <span className="block">一緒に、</span>
          <span className="block">心地よい空間を</span>
          <span className="block">つくりませんか？</span>
        </h2>
        <p className="jp-body mt-8 text-[0.9375rem] text-navy/80" data-reveal>
          住まいのこと、
          <br className="sm:hidden" />
          まずはお気軽にご相談ください。
        </p>
        <div className="mt-10" data-reveal>
          <ArrowLink href="/contact" variant="solid">
            ENQUIRE NOW
          </ArrowLink>
        </div>
      </Container>

      <div className="relative mt-16 md:mt-10" aria-hidden>
        <SurferMini bare className="absolute bottom-[50%] right-[18%] z-10 w-28 sm:w-36 md:right-[20%] md:w-44" />
        <svg viewBox="0 0 1440 260" preserveAspectRatio="none" className="relative block h-40 w-full md:h-64">
          <path d="M0 120 C 200 40, 360 40, 520 100 S 860 180, 1040 110 S 1300 40, 1440 80 L 1440 260 L 0 260 Z" fill="#75C9D5" />
          <path d="M0 160 C 180 100, 380 110, 560 150 S 900 200, 1100 140 S 1340 110, 1440 130 L 1440 260 L 0 260 Z" fill="#008FB5" />
          <path d="M0 200 C 220 160, 420 170, 640 196 S 1020 220, 1220 190 S 1380 180, 1440 186 L 1440 260 L 0 260 Z" fill="#075985" />
          <path d="M0 236 C 260 214, 520 222, 760 236 S 1200 246, 1440 228 L 1440 260 L 0 260 Z" fill="#073B5C" />
          <path
            d="M560 150 c 20 -18 50 -18 60 2 c -16 -8 -30 -2 -32 8"
            fill="#FFFDF8"
            stroke="#073B5C"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </section>
  );
}
