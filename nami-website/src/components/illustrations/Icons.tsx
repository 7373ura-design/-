/** NAMI line icons — single-weight strokes, drawn on a 48px grid. */
import type { Principle } from "@/lib/types";

type IconProps = { className?: string };

const base = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function NatureIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M24 42V18" />
      <path d="M24 26c-6 0-10-4-11-11 7 0 11 4 11 11Z" />
      <path d="M24 22c5 0 9-3 10-9-6 0-10 3-10 9Z" />
      <path d="M8 42c5-3 10-3 16 0s11 3 16 0" />
    </svg>
  );
}

export function BalanceIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="24" cy="24" r="16" />
      <path d="M24 8v32" />
      <circle cx="17" cy="24" r="3" />
      <path d="M30 21h4" />
    </svg>
  );
}

export function MaterialIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="9" y="9" width="30" height="30" rx="1" />
      <path d="M9 17c8-2 14 2 22-1 4-1 6-1 8 0" />
      <path d="M9 26c6-2 12 3 18 0 5-2 9-2 12-1" />
      <path d="M9 34c7-1 11 1 17 0" />
      <ellipse cx="29" cy="31" rx="3" ry="2" />
    </svg>
  );
}

export function SimplicityIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M8 34h32" />
      <circle cx="24" cy="22" r="6" />
    </svg>
  );
}

export function PeopleIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M8 22 24 9l16 13" />
      <path d="M12 19v20h24V19" />
      <circle cx="24" cy="25" r="3" />
      <path d="M19 39c0-5 2-8 5-8s5 3 5 8" />
    </svg>
  );
}

export const principleIcons: Record<Principle["key"], (p: IconProps) => React.JSX.Element> = {
  nature: NatureIcon,
  balance: BalanceIcon,
  material: MaterialIcon,
  simplicity: SimplicityIcon,
  people: PeopleIcon,
};

/* Meaning emblems — circular, a touch of colour */

export function WaveEmblem({ className }: IconProps) {
  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden>
      <circle cx="48" cy="48" r="46" fill="#FFFDF8" stroke="#073B5C" strokeWidth="1.2" />
      <circle cx="64" cy="34" r="10" fill="#F04B32" />
      <path d="M14 60c8-14 18-20 28-18 8 2 10 10 4 12 6 4 16 0 18-6 4 6 10 10 18 10v8H14Z" fill="#075985" />
      <path d="M14 70c10-4 20-4 34 0s24 4 34 0" fill="none" stroke="#75C9D5" strokeWidth="2" />
    </svg>
  );
}

export function AlongsideEmblem({ className }: IconProps) {
  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden>
      <circle cx="48" cy="48" r="46" fill="#FFFDF8" stroke="#073B5C" strokeWidth="1.2" />
      <rect x="26" y="26" width="18" height="44" rx="1" fill="#E9DCC8" stroke="#073B5C" strokeWidth="1.2" />
      <path d="M26 40c6-2 12 2 18 0M26 54c6-2 12 2 18 0" fill="none" stroke="#073B5C" strokeWidth="1" opacity=".5" />
      <path d="M58 70V44" stroke="#075985" strokeWidth="1.6" />
      <path d="M58 52c-5 0-8-3-9-9 6 0 9 3 9 9Zm0-4c4 0 7-2 8-7-5 0-8 2-8 7Z" fill="#75C9D5" stroke="#075985" strokeWidth="1.2" />
      <circle cx="66" cy="30" r="5" fill="#F04B32" />
      <path d="M20 70h56" stroke="#073B5C" strokeWidth="1.2" />
    </svg>
  );
}

export function NestEmblem({ className }: IconProps) {
  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden>
      <circle cx="48" cy="48" r="46" fill="#FFFDF8" stroke="#073B5C" strokeWidth="1.2" />
      <path d="M24 46 48 26l24 20" fill="none" stroke="#073B5C" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M30 42v28h36V42" fill="#E9DCC8" stroke="#073B5C" strokeWidth="1.4" />
      <path d="M36 62c4 4 20 4 24 0" fill="none" stroke="#075985" strokeWidth="1.6" />
      <path d="M34 58c6 6 22 6 28 0" fill="none" stroke="#008FB5" strokeWidth="1.2" />
      <circle cx="48" cy="52" r="4" fill="#F04B32" />
    </svg>
  );
}

export const meaningEmblems = [WaveEmblem, AlongsideEmblem, NestEmblem];

export function ArrowRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 12" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      <path d="M0 6h22M17 1l5 5-5 5" />
    </svg>
  );
}
