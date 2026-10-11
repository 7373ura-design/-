import { japanAustralia, meanings } from "@/data/brand";
import { MeaningCard } from "@/components/cards";
import { ArrowLink, Container } from "@/components/ui";

export function MeaningsFull({ full = true }: { full?: boolean }) {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="meanings-heading">
      <Container>
        <div className="text-center" data-reveal>
          <p className="label text-deep">THE MEANING BEHIND NAMI</p>
          <h2 id="meanings-heading" className="jp-heading mt-5 text-[1.75rem] text-navy sm:text-4xl">
            NAMIに込めた<span className="text-vermilion">3</span>つの意味
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-3 md:gap-0 md:divide-x md:divide-navy/15 [&>*]:md:px-8 lg:[&>*]:px-12 md:[&>*:first-child]:pl-0 md:[&>*:last-child]:pr-0">
          {meanings.map((m, i) => (
            <MeaningCard key={m.number} meaning={m} index={i} full={full} />
          ))}
        </div>
        {!full && (
          <div className="mt-14 text-center" data-reveal>
            <ArrowLink href="/about">READ OUR STORY</ArrowLink>
          </div>
        )}
      </Container>
    </section>
  );
}

export function JapanAustraliaSection() {
  const Side = ({ title, sub, items, align }: { title: string; sub: string; items: string[]; align: "left" | "right" }) => (
    <div className={`text-center ${align === "left" ? "md:text-right" : "md:text-left"}`} data-reveal>
      <p className="font-display text-3xl tracking-[0.3em] text-navy md:text-4xl">{title}</p>
      <p className="label mt-2 text-deep">{sub}</p>
      <ul className={`mt-8 flex flex-wrap justify-center gap-2.5 ${align === "left" ? "md:justify-end" : "md:justify-start"}`}>
        {items.map((item) => (
          <li
            key={item}
            className={`border hairline bg-paper px-4 py-2 text-sm text-navy ${/^[A-Za-z]/.test(item) ? "font-sans tracking-wide" : "font-jp tracking-[0.12em]"}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-beige/45 py-20 md:py-28" aria-labelledby="jxa-heading">
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-jp text-[24rem] leading-none text-navy/[0.035] md:text-[36rem]"
      >
        並
      </span>
      <Container className="relative">
        <div className="text-center" data-reveal>
          <p className="label text-deep">JAPAN × AUSTRALIA</p>
          <h2 id="jxa-heading" className="jp-heading mt-5 text-[1.6rem] text-navy sm:text-3xl">
            異なるものを、並べて生かす。
          </h2>
        </div>
        <div className="mt-14 grid items-center gap-10 md:mt-20 md:grid-cols-[1fr_auto_1fr] md:gap-12 lg:gap-20">
          <Side title="JAPAN" sub="日本の美意識" items={japanAustralia.japan} align="left" />
          <div className="relative mx-auto flex h-40 w-40 items-center justify-center md:h-52 md:w-52" data-reveal>
            <div className="absolute inset-0 rounded-full bg-vermilion" />
            <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full" aria-hidden>
              <path d="M10 128c30-14 50-14 90 0s60 14 90 0" fill="none" stroke="#FFFDF8" strokeWidth="1.5" opacity=".7" />
              <path d="M18 146c26-10 46-10 82 0s56 10 82 0" fill="none" stroke="#FFFDF8" strokeWidth="1.5" opacity=".5" />
            </svg>
            <div className="relative text-center text-paper">
              <p className="font-display text-4xl tracking-[0.3em] pl-[0.3em] md:text-5xl">NAMI</p>
              <p className="label mt-1 !text-[0.6rem] text-paper/85">波 · 並</p>
            </div>
          </div>
          <Side title="AUSTRALIA" sub="オーストラリアの自然" items={japanAustralia.australia} align="right" />
        </div>
      </Container>
    </section>
  );
}

