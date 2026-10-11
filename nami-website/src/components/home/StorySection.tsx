import { story } from "@/data/brand";
import { SurferSwell } from "@/components/illustrations/Surfer";
import { WaveDivider } from "@/components/WaveDivider";
import { Container, Lines, SectionHeader } from "@/components/ui";

/** Monday heavy, Friday bright, Sunday calm — the week drawn as a wave. */
function WeekWave() {
  const days = [
    { x: 40, y: 92, en: "MON", ja: "重たい朝" },
    { x: 260, y: 26, en: "FRI", ja: "嬉しい夜" },
    { x: 440, y: 62, en: "SUN", ja: "穏やかな時間" },
  ];
  return (
    <figure className="mt-12" data-reveal>
      <svg viewBox="0 0 480 130" className="w-full max-w-md" aria-hidden>
        <path
          d="M0 80 C 30 100, 50 100, 80 80 S 140 40, 180 50 S 230 20, 260 26 S 330 80, 370 70 S 420 60, 480 62"
          fill="none"
          stroke="#75C9D5"
          strokeWidth="1.5"
        />
        {days.map((d) => (
          <g key={d.en}>
            <circle cx={d.x} cy={d.y} r="5" fill={d.en === "FRI" ? "#F04B32" : "#FFFDF8"} />
            <text x={d.x} y={d.y + 26} textAnchor="middle" fill="#FFFDF8" fontSize="10" letterSpacing="2.5" opacity=".75">
              {d.en}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="sr-only">月曜日の重たい朝、金曜日の嬉しい夜、日曜日の穏やかな時間 — 毎日違う波。</figcaption>
    </figure>
  );
}

export function StorySection() {
  return (
    <section id="story" className="relative scroll-mt-20 bg-navy text-paper" aria-labelledby="story-heading">
      <Container className="grid items-center gap-16 pb-12 pt-16 md:pb-16 md:pt-24 lg:grid-cols-12 lg:gap-12">
        <div className="relative lg:col-span-6" data-reveal>
          <div className="relative mx-auto aspect-square w-full max-w-[540px] overflow-hidden rounded-full bg-cream">
            <SurferSwell className="absolute inset-x-0 bottom-0 h-auto w-full" />
          </div>
          <p className="label absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-navy px-4 text-aqua">
            EVERY DAY HAS A DIFFERENT WAVE
          </p>
        </div>

        <div className="lg:col-span-6 lg:pl-6">
          <div id="story-heading">
            <SectionHeader number="01" label="STORY" heading={story.heading} tone="light" />
          </div>
          <div className="jp-body mt-10 space-y-6 text-[0.9375rem] text-paper/85">
            {story.body.map((p, i) => (
              <p key={i} data-reveal style={{ "--reveal-delay": `${i * 80}ms` } as React.CSSProperties}>
                <Lines text={p} />
              </p>
            ))}
          </div>
          <WeekWave />
        </div>
      </Container>
      <WaveDivider fill="#F7F1E5" accent="#75C9D5" className="bg-navy" />
    </section>
  );
}
