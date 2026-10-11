import { Photo } from "@/components/Photo";
import { Parallax } from "@/components/Motion";
import { SurferWave } from "@/components/illustrations/Surfer";
import { WaveDivider } from "@/components/WaveDivider";
import { ArrowLink, Container } from "@/components/ui";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-28 md:pt-36" aria-labelledby="hero-heading">
      {/* vertical brand note — desktop only */}
      <p
        aria-hidden
        className="label absolute left-6 top-40 hidden text-navy/50 [writing-mode:vertical-rl] xl:block"
      >
        波 — 並 — N.A.M.I.
      </p>

      <Container className="relative grid items-center gap-y-14 lg:grid-cols-12 lg:gap-x-10">
        <div className="relative z-10 lg:col-span-5 lg:pb-24">
          <p className="label text-navy/70" data-reveal>
            Japanese perspective on
            <br className="sm:hidden" /> contemporary Australian living
          </p>
          <h1
            id="hero-heading"
            className="jp-heading mt-8 text-[2.75rem] leading-[1.45] text-navy sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]"
            data-reveal
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            <span className="block">暮らしと</span>
            <span className="block">
              記憶を<span className="text-vermilion">、</span>
            </span>
            <span className="block">空間に。</span>
          </h1>
          <p
            className="mt-8 flex items-center gap-4 font-display text-lg tracking-[0.32em] text-deep md:text-xl"
            data-reveal
            style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
          >
            <span className="h-px w-10 bg-vermilion" aria-hidden />
            NEST AND MEMORIES INSIDE
          </p>
          <p
            className="jp-body mt-8 max-w-md text-[0.9375rem] text-navy/85"
            data-reveal
            style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
          >
            波のように変わる毎日に寄り添い、
            <br />
            その人だけの記憶が積み重なっていく
            <br />
            空間をつくるインテリアデザインブランドです。
          </p>
          <div
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5"
            data-reveal
            style={{ "--reveal-delay": "420ms" } as React.CSSProperties}
          >
            <ArrowLink href="/about" variant="outline">
              ABOUT NAMI
            </ArrowLink>
            <ArrowLink href="/projects">VIEW CONCEPTS</ArrowLink>
          </div>
        </div>

        <div className="relative lg:col-span-7">
          {/* the vermilion sun, peeking from behind the interior */}
          <div
            aria-hidden
            className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-vermilion sm:h-56 sm:w-56 lg:-right-16 lg:-top-14 lg:h-72 lg:w-72"
          />
          <Parallax speed={0.05}>
            <Photo
              priority
              image={{
                src: "/images/hero/hero-coastal-interior.svg",
                alt: "A contemporary Australian coastal living room with timber floors, a low linen sofa and wide windows opening to the ocean",
              }}
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="ml-auto aspect-[4/5] w-[88%] rounded-tl-[120px] sm:w-[80%] lg:aspect-[5/6] lg:w-[86%] lg:rounded-tl-[200px]"
            />
          </Parallax>
          {/* surfer breaking out of the frame */}
          <div className="pointer-events-none absolute -bottom-6 -left-5 w-[78%] sm:-left-6 sm:w-[66%] lg:-bottom-10 lg:-left-24 lg:w-[72%]">
            <SurferWave sun={false} className="h-auto w-full drop-shadow-[0_18px_30px_rgba(7,59,92,0.18)]" />
          </div>
        </div>
      </Container>

      <div className="relative mt-10 md:mt-6">
        <a
          href="#story"
          className="label absolute bottom-full left-5 mb-6 hidden items-center md:flex gap-3 text-navy/70 hover:text-vermilion md:left-10 lg:left-16"
        >
          SCROLL <span aria-hidden className="inline-block animate-bounce">↓</span>
        </a>
        <WaveDivider fill="#073B5C" accent="#008FB5" />
      </div>
    </section>
  );
}
