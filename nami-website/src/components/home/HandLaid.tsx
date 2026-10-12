import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { nameNotes, story } from "@/data/brand";
import { getArticles } from "@/data/journal";
import { Container, Lines } from "@/components/ui";
import { T, type Bi } from "@/lib/i18n";

/*
 * Home, laid out by hand: pictures of different sizes, overlapping, each with a
 * short caption, rather than rows of identical cards. On phones the pieces
 * stack, alternating left and right so the page still feels placed, not gridded.
 */

type Piece = {
  src: string;
  alt: string;
  /** width / height of the picture */
  ratio: number;
  /** desktop position and width, as % of the board */
  x: number;
  y: number;
  w: number;
  z?: number;
  caption?: { lead: Bi; text: Bi; side?: "left" | "right"; dy?: number };
  /** phone: which side to hang from, and how wide */
  m?: { side: "left" | "right"; w: number };
  contain?: boolean;
  href?: string;
};

function Caption({ lead, text }: { lead: Bi; text: Bi }) {
  return (
    <p className="bg-paper px-4 py-3 text-[0.8125rem] leading-[1.75] text-navy shadow-[0_1px_0_rgba(30,58,92,0.08)]">
      <b className="font-semibold">
        <T ja={lead.ja} en={lead.en} />
      </b>
      <span className="mx-1.5 text-navy/40">—</span>
      <T ja={text.ja} en={text.en} />
    </p>
  );
}

function Board({ pieces, height }: { pieces: Piece[]; height: number }) {
  return (
    <>
      {/* desktop: placed freely */}
      <div className="relative hidden md:block" style={{ paddingBottom: `${height}%` }}>
        {pieces.map((p) => {
          const pic = (
            <div className="relative w-full overflow-hidden bg-beige" style={{ aspectRatio: p.ratio, zIndex: p.z ?? 1 }}>
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes={`${Math.round(p.w)}vw`}
                className={p.contain ? "object-contain" : "object-cover"}
              />
            </div>
          );
          return (
            <figure
              key={p.src + p.x}
              className="absolute"
              style={{ left: `${p.x}%`, top: `${p.y}%`, width: `${p.w}%` } as CSSProperties}
            >
              {p.href ? (
                <Link href={p.href} className="block transition-opacity hover:opacity-90">
                  {pic}
                </Link>
              ) : (
                pic
              )}
              {p.caption && (
                <figcaption
                  className="absolute z-30 w-[min(26rem,120%)]"
                  style={{
                    top: `calc(100% - ${p.caption.dy ?? 2.5}rem)`,
                    [p.caption.side === "left" ? "right" : "left"]: "55%",
                  }}
                >
                  <Caption lead={p.caption.lead} text={p.caption.text} />
                </figcaption>
              )}
            </figure>
          );
        })}
      </div>

      {/* phone: stacked, hanging left or right */}
      <div className="flex flex-col gap-8 md:hidden">
        {pieces.map((p, i) => {
          const side = p.m?.side ?? (i % 2 ? "right" : "left");
          return (
            <figure key={p.src + p.x} className={side === "right" ? "self-end" : "self-start"} style={{ width: `${p.m?.w ?? 82}%` }}>
              <div className="relative w-full overflow-hidden bg-beige" style={{ aspectRatio: p.ratio }}>
                <Image src={p.src} alt={p.alt} fill sizes="85vw" className={p.contain ? "object-contain" : "object-cover"} />
              </div>
              {p.caption && (
                <figcaption className={`-mt-5 relative ${side === "right" ? "-ml-6 mr-4" : "ml-4 -mr-6"}`}>
                  <Caption lead={p.caption.lead} text={p.caption.text} />
                </figcaption>
              )}
            </figure>
          );
        })}
      </div>
    </>
  );
}

/** A plain, small section title: no numbers, no two-line slogan. */
function Title({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2 id={id} className="font-jp text-lg tracking-[0.12em] text-navy">
      {children}
    </h2>
  );
}

export function StoryLaid() {
  return (
    <section id="story" className="scroll-mt-20 bg-cream pb-16 pt-20 md:pb-28 md:pt-28" aria-labelledby="story-title">
      <Container className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5 md:pt-10 lg:col-span-4">
          <h2 id="story-title" className="jp-heading text-[1.9rem] leading-[1.5] text-navy md:text-[2.2rem]">
            <T ja={story.heading.ja} en={story.heading.en} />
          </h2>
          <div className="jp-body mt-8 space-y-5 text-[0.9375rem] leading-[2] text-navy/85">
            <T
              as="div"
              className="space-y-5"
              ja={story.body.ja.map((p, i) => (
                <p key={i}>
                  <Lines text={p} />
                </p>
              ))}
              en={story.body.en.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            />
          </div>
          <p className="mt-8 text-sm text-navy/70">— Nanami</p>
        </div>
        <div className="md:col-span-7 lg:col-span-8">
          <div className="relative">
            <Image
              src="/images/illustrations/story-surfer.jpg"
              alt="The NAMI surfer: a girl on a red surfboard riding a big wave with a turtle"
              width={928}
              height={612}
              className="w-full feather"
            />
            <div className="absolute -bottom-10 left-[4%] w-[38%] md:-bottom-16">
              <div className="relative aspect-[4/3] overflow-hidden bg-beige shadow-[0_10px_30px_-12px_rgba(30,58,92,0.35)]">
                <Image src="/images/journal/j1.jpg" alt="A low table in front of a window looking out to the sea" fill sizes="30vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function NameNotes() {
  // Three notes pinned at different heights and widths.
  const place = ["md:mt-0 md:w-[30%]", "md:mt-24 md:w-[38%]", "md:mt-8 md:w-[26%]"];
  return (
    <section className="bg-beige/50 py-20 md:py-28" aria-labelledby="name-title">
      <Container>
        <Title id="name-title">
          <T ja="NAMI という名前のこと" en="About the name" />
        </Title>
        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-8">
          {nameNotes.map((n, i) => (
            <div
              key={n.mark}
              className={`w-[88%] bg-paper p-6 shadow-[0_1px_0_rgba(30,58,92,0.08)] md:p-8 ${i === 1 ? "self-end" : "self-start"} md:self-auto ${place[i]}`}
            >
              <p className={`leading-none text-vermilion ${n.mark === "N" ? "font-display text-6xl" : "font-jp text-7xl"}`}>{n.mark}</p>
              <p className="jp-body mt-5 text-sm leading-[2] text-navy/85">
                <T ja={n.ja} en={n.en} />
              </p>
            </div>
          ))}
        </div>
        <Link href="/about" className="mt-10 inline-block text-sm text-navy underline decoration-navy/30 underline-offset-4 hover:decoration-vermilion">
          <T ja="名前についてもう少し詳しく" en="More about the name" />
        </Link>
      </Container>
    </section>
  );
}

const workPieces: Piece[] = [
  {
    src: "/images/services/s1.jpg",
    alt: "Hands sketching a floor plan at a timber table beside a cup of tea",
    ratio: 128 / 114,
    x: 0,
    y: 4,
    w: 34,
    z: 2,
    href: "/services#interior-consultation",
    caption: {
      lead: { ja: "相談", en: "Consultation" },
      text: {
        ja: "まず、今の部屋の写真と間取りを見せてください。困っていることを一緒に書き出すところから始めます。",
        en: "Start by sending photos and a floor plan of your room. We begin by listing what isn’t working.",
      },
      side: "right",
      dy: 3,
    },
    m: { side: "left", w: 80 },
  },
  {
    src: "/images/services/s2.jpg",
    alt: "A moodboard of fabric, paper and indigo samples on a table",
    ratio: 128 / 114,
    x: 44,
    y: 0,
    w: 22,
    href: "/services#concept-design",
    caption: {
      lead: { ja: "コンセプト", en: "Concept" },
      text: {
        ja: "好きなもの、捨てられないもの、前に住んでいた家の話。素材と色はそこから決めます。",
        en: "What you love, what you can’t throw away, the homes you’ve lived in. Materials and colours come from there.",
      },
      side: "right",
    },
    m: { side: "right", w: 64 },
  },
  {
    src: "/images/services/s3.jpg",
    alt: "A floor plan on a tablet next to a laptop",
    ratio: 128 / 114,
    x: 72,
    y: 14,
    w: 28,
    href: "/services#space-planning",
    caption: {
      lead: { ja: "配置", en: "Planning" },
      text: {
        ja: "家具を動かす前に、図面の上で何度も動かします。通り道と、朝の光の入り方を見ます。",
        en: "Furniture moves many times on paper before it moves in the room. I watch the paths you walk and where morning light falls.",
      },
      side: "left",
    },
    m: { side: "left", w: 70 },
  },
  {
    src: "/images/services/s4.jpg",
    alt: "Curved timber shelves with plants and ceramics",
    ratio: 128 / 114,
    x: 30,
    y: 56,
    w: 30,
    z: 3,
    href: "/services#styling",
    caption: {
      lead: { ja: "スタイリング", en: "Styling" },
      text: {
        ja: "最後に、器や照明、布を選びます。たくさん足すより、ひとつ選ぶことのほうが多いです。",
        en: "Last come ceramics, lighting and textiles. More often than not I choose one thing rather than adding many.",
      },
      side: "right",
    },
    m: { side: "right", w: 78 },
  },
];

export function WorkLaid() {
  return (
    <section className="bg-cream py-20 md:py-28" aria-labelledby="work-title">
      <Container>
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <Title id="work-title">
            <T ja="仕事のこと" en="How I work" />
          </Title>
          <Link href="/services" className="text-sm text-navy underline decoration-navy/30 underline-offset-4 hover:decoration-vermilion">
            <T ja="サービスの詳細" en="Services in detail" />
          </Link>
        </div>
        <div className="mt-10 md:mt-14">
          <Board pieces={workPieces} height={88} />
        </div>
      </Container>
    </section>
  );
}

const projectPieces: Piece[] = [
  {
    src: "/images/projects/p1.jpg",
    alt: "A coastal living room with a timber ceiling and wide windows to the sea",
    ratio: 180 / 145,
    x: 0,
    y: 0,
    w: 52,
    z: 2,
    href: "/projects/nami-house-01",
    caption: {
      lead: { ja: "NAMI House 01", en: "NAMI House 01" },
      text: {
        ja: "海の近くの家。縁側のようなデッキで、部屋と庭の境目をゆるくしています。",
        en: "A house near the sea, with an engawa-style deck that softens the line between room and garden.",
      },
      side: "right",
      dy: 4,
    },
    m: { side: "left", w: 92 },
  },
  {
    src: "/images/projects/p2.jpg",
    alt: "A small apartment with an arched doorway and a timber dining table",
    ratio: 180 / 145,
    x: 62,
    y: 6,
    w: 30,
    href: "/projects/nami-house-02",
    caption: {
      lead: { ja: "NAMI House 02", en: "NAMI House 02" },
      text: {
        ja: "シドニーの小さなアパート。窓辺のベンチで、食事も読書も仕事もします。",
        en: "A small Sydney flat where one window bench is for eating, reading and work.",
      },
      side: "left",
    },
    m: { side: "right", w: 74 },
  },
  {
    src: "/images/projects/p3.jpg",
    alt: "A living room with timber walls and a large indoor plant",
    ratio: 180 / 145,
    x: 56,
    y: 50,
    w: 40,
    z: 3,
    href: "/projects/nami-house-03",
    caption: {
      lead: { ja: "NAMI House 03", en: "NAMI House 03" },
      text: {
        ja: "中庭のある家。どの部屋からも、同じ木が見えます。",
        en: "A courtyard house where every room looks at the same tree.",
      },
      side: "left",
    },
    m: { side: "left", w: 84 },
  },
];

export function ProjectsLaid() {
  return (
    <section className="bg-cream pb-24 pt-8 md:pb-36" aria-labelledby="projects-title">
      <Container>
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <Title id="projects-title">
            <T ja="コンセプトプロジェクト" en="Concept projects" />
          </Title>
          <Link href="/projects" className="text-sm text-navy underline decoration-navy/30 underline-offset-4 hover:decoration-vermilion">
            <T ja="すべて見る" en="See them all" />
          </Link>
        </div>
        <p className="mt-3 max-w-xl text-xs leading-relaxed text-navy/60">
          <T
            ja="実際のお客さまの家ではなく、NAMIの考え方を試すためにつくった架空の家です。"
            en="These are imagined homes, made to test NAMI’s ideas, not real client projects."
          />
        </p>
        <div className="mt-10 md:mt-14">
          <Board pieces={projectPieces} height={86} />
        </div>
      </Container>
    </section>
  );
}

export function JournalIndex() {
  const articles = getArticles();
  return (
    <section className="border-t hairline bg-cream py-20 md:py-24" aria-labelledby="journal-title">
      <Container className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <Title id="journal-title">Journal</Title>
          <p className="jp-body mt-4 text-sm leading-[1.9] text-navy/75">
            <T
              ja="日本とオーストラリアの家について、調べたことや考えたことのメモ。"
              en="Notes on Japanese and Australian homes: things I’ve looked into and thought about."
            />
          </p>
        </div>
        <ol className="md:col-span-8">
          {articles.map((a) => (
            <li key={a.slug} className="border-b hairline first:border-t">
              <Link href={`/journal/${a.slug}`} className="group flex items-baseline gap-5 py-4">
                <span className="w-24 shrink-0 text-xs uppercase tracking-[0.14em] text-navy/50">{a.category}</span>
                <span className="text-navy transition-colors group-hover:text-vermilion">
                  <T ja={a.titleJa ?? a.title} en={a.title} />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
