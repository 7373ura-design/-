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
