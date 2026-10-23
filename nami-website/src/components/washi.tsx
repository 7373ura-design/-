import Image from "next/image";
import type { ReactNode } from "react";
import { T, type Bi } from "@/lib/i18n";

/*
 * The vocabulary of the NAMI Instagram posts, used across the site:
 *  - Art      : a woodblock-style illustration across the full width, ending
 *               on a straight line where the paper begins
 *  - PostHead : kicker, serif title, blue subline, short rule, body
 *  - IconList : thin circled line icons beside a serif title and a short line
 */

const ART = {
  "wave-sun": "Japanese-style breaking wave on a calm sea with a red sun on the horizon",
  scrolls: "Three hanging scrolls showing a wave, a pine and a pavilion, with a navy vase",
  "moon-window": "A round moon window looking onto a pine and a small stone garden",
  "maple-window": "Red maple leaves outside a paper window, cushions and an open book on the sill",
  "maple-island": "A red maple and a small tree on a raked-gravel island with a standing stone",
  tea: "A navy tea bowl mended with gold, a whisk and a vase with a red camellia",
  "gum-frame": "Eucalyptus trees and a pine beside the timber frame of a new house",
  pavilion: "A timber pavilion with a stone lantern and a red maple by the water",
  harbour: "Sydney Harbour and the Opera House, painted in the style of a woodblock print",
  hills: "Two timber houses among pines on a hill above rolling blue waves",
  "great-wave": "A great wave rising towards a snow-capped mountain",
  shoji: "A room with shoji screens and a low table opening onto trees and grasses",
  byobu: "A timber lounge chair beside a gold folding screen of pines and a bonsai",
  desk: "A tea cup, rolled-out floor plans and material samples on a desk by a paper window",
  "aus-house": "A low Australian house among gum trees and grass trees",
  washitsu: "A tatami room with a low table, an iron teapot and a hanging scroll of a crane",
  village: "Old Japanese houses and stepping stones through a moss garden",
  fuji: "Mount Fuji and a red sun over a calm bay with pines",
  bridge: "A red arched bridge over a lotus pond, with a stone lantern and eucalyptus",
  "luna-park": "The smiling gate of Luna Park in Sydney between spreading trees",
} as const;

export type ArtName = keyof typeof ART;

export function Art({
  name,
  className = "h-[clamp(220px,42vw,560px)]",
  position = "center",
  priority = false,
  mode = "band",
  decorative = false,
}: {
  name: ArtName;
  className?: string;
  position?: string;
  priority?: boolean;
  /** band: full width, straight edges. paper: art floats on the page, edges dissolve. */
  mode?: "band" | "paper";
  decorative?: boolean;
}) {
  if (mode === "paper") {
    return (
      <Image
        src={`/images/washi/${name}.jpg`}
        alt={decorative ? "" : ART[name]}
        width={1600}
        height={824}
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className={`on-paper h-auto w-full ${className}`}
      />
    );
  }
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <Image
        src={`/images/washi/${name}.jpg`}
        alt={decorative ? "" : ART[name]}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}

export function Rule({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`rule ${className}`} />;
}

export function PostHead({
  no,
  kicker,
  title,
  sub,
  id,
  as: Tag = "h2",
  align = "center",
  size = "md",
  children,
}: {
  no?: string;
  kicker?: string;
  title: Bi;
  sub?: string;
  id?: string;
  as?: "h1" | "h2" | "h3";
  align?: "center" | "left";
  size?: "sm" | "md" | "lg";
  children?: ReactNode;
}) {
  const center = align === "center";
  const sizes = {
    sm: "text-[1.6rem] md:text-[2.1rem]",
    md: "text-[2rem] md:text-[2.6rem]",
    lg: "text-[2.4rem] md:text-[clamp(2.8rem,4.2vw,4rem)]",
  }[size];
  // Two columns from tablet up: in Japanese the title stands vertically on the right,
  // as in a printed book; in English it sits on the left. Phones stack the two.
  return (
    <div className={`post-head ${center ? "md:mx-auto md:w-fit md:max-w-full" : ""}`}>
      <div className="post-head-title">
        {(no || kicker) && (
          <p className="kicker post-head-kicker mb-4">
            {no && <span className="mr-3 text-vermilion">{no}.</span>}
            {kicker}
          </p>
        )}
        <Tag id={id} className={`title tategaki ${sizes}`}>
          <T ja={title.ja} en={title.en} />
        </Tag>
      </div>
      {(sub || children) && (
        <div className="post-head-text">
          {sub && <p className="subline">{sub}</p>}
          <Rule className="mt-4" />
          {children && <div className="jp-body mt-6 max-w-[30em] text-[0.9375rem] text-navy/80">{children}</div>}
        </div>
      )}
      {!sub && !children && <Rule className="mt-5 post-head-rule" />}
    </div>
  );
}

/* Line icons in the posts' style: one weight, drawn on a 24px grid */
const paths: Record<string, ReactNode> = {
  leaf: <path d="M6 18c0-7 5-12 12-12 0 7-5 12-12 12Zm0 0 6-6" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M6 6l1.4 1.4M16.6 16.6 18 18M6 18l1.4-1.4M16.6 7.4 18 6" />
    </>
  ),
  home: <path d="M4.5 11 12 5l7.5 6M6.5 9.5V19h11V9.5M10.5 19v-4.5h3V19" />,
  heart: <path d="M12 18.5s-6.5-3.9-6.5-8.4A3.4 3.4 0 0 1 12 8.3a3.4 3.4 0 0 1 6.5 1.8c0 4.5-6.5 8.4-6.5 8.4Z" />,
  infinity: <path d="M12 12c-1.6-2-2.9-3-4.3-3a3 3 0 0 0 0 6c1.4 0 2.7-1 4.3-3Zm0 0c1.6 2 2.9 3 4.3 3a3 3 0 0 0 0-6c-1.4 0-2.7 1-4.3 3Z" />,
  wave: <path d="M3.5 14c2 0 2.5-2.5 4.25-2.5S10 14 12 14s2.5-2.5 4.25-2.5S18.5 14 20.5 14M3.5 18c2 0 2.5-2.5 4.25-2.5S10 18 12 18s2.5-2.5 4.25-2.5S18.5 18 20.5 18M9 9.5c0-2.5 2-4.5 4.5-4.5" />,
  link: <path d="M10.5 13.5a3.5 3.5 0 0 0 5 0l2.5-2.5a3.5 3.5 0 0 0-5-5l-1 1M13.5 10.5a3.5 3.5 0 0 0-5 0L6 13a3.5 3.5 0 0 0 5 5l1-1" />,
  chat: <path d="M5 6.5h14v9H10l-4 3v-3H5Z" />,
  pen: <path d="m14.5 6.5 3 3L9 18H6v-3l8.5-8.5Z" />,
  ruler: <path d="m4.5 15.5 11-11 4 4-11 11-4-4Zm3-3 1.5 1.5m1-4 1.5 1.5m1-4 1.5 1.5" />,
  chair: <path d="M7 4.5v9h10v-9M6 13.5h12M7.5 13.5V20M16.5 13.5V20M7.5 17h9" />,
  bookmark: <path d="M7 4.5h10V20l-5-3.5L7 20Z" />,
  compass: (
    <>
      <circle cx="12" cy="12" r="7.5" />
      <path d="m14.8 9.2-1.6 4-4 1.6 1.6-4 4-1.6Z" />
    </>
  ),
};

export type IconName = keyof typeof paths;

export function LineIcon({ name, className = "h-4 w-4" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      {paths[name]}
    </svg>
  );
}

export function CircleIcon({ name, size = "md" }: { name: IconName; size?: "md" | "lg" }) {
  return (
    <span
      aria-hidden
      className={`flex shrink-0 items-center justify-center rounded-full border border-navy/35 text-navy ${
        size === "lg" ? "h-14 w-14" : "h-10 w-10"
      }`}
    >
      <LineIcon name={name} className={size === "lg" ? "h-6 w-6" : "h-[18px] w-[18px]"} />
    </span>
  );
}

export function IconList({
  items,
  className = "",
}: {
  items: { icon: IconName; title: Bi; line: Bi }[];
  className?: string;
}) {
  return (
    <ul className={`mx-auto w-fit space-y-6 text-left ${className}`}>
      {items.map((it, i) => (
        <li key={i} className="flex items-center gap-5">
          <CircleIcon name={it.icon} />
          <div>
            <p className="title text-[1.2rem] !leading-snug">
              <T ja={it.title.ja} en={it.title.en} />
            </p>
            <p className="mt-0.5 max-w-[30em] text-[0.8125rem] text-navy/70">
              <T ja={it.line.ja} en={it.line.en} />
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
