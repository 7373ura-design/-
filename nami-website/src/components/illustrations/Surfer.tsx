/**
 * The NAMI surfer — the brand's recurring character.
 *
 * Drawn as inline SVG so it stays crisp and can be gently animated. If a final
 * hand-drawn illustration is commissioned, drop it into
 * /public/images/illustrations/ and swap these components for <Image>.
 */
import type { SVGProps } from "react";

const INK = "#073B5C";
const DEEP = "#075985";
const OCEAN = "#008FB5";
const AQUA = "#75C9D5";
const VERMILION = "#F04B32";
const PAPER = "#FFFDF8";
const SKIN = "#F1CDA8";

/** The figure on the board. Origin = board centre. */
export function SurferFigure({ className }: { className?: string }) {
  return (
    <g className={className}>
      {/* board */}
      <g transform="rotate(-18)">
        <ellipse cx="0" cy="0" rx="66" ry="9" fill={PAPER} stroke={INK} strokeWidth="3" />
        <line x1="-58" y1="0" x2="58" y2="0" stroke={VERMILION} strokeWidth="2.5" />
      </g>
      {/* hachimaki ties trailing behind */}
      <path
        d="M-9 -128 C 6 -134, 14 -124, 30 -132 C 40 -137, 46 -130, 56 -136"
        fill="none"
        stroke={VERMILION}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M-9 -126 C 4 -124, 12 -116, 26 -118 C 36 -120, 40 -114, 50 -116"
        fill="none"
        stroke={VERMILION}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* paper halo keeps the figure legible against the wave */}
      <g fill="none" stroke={PAPER} strokeWidth="18" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-24 2 L -30 -34 L -8 -62" />
        <path d="M18 -12 L 10 -40 L -4 -62" />
        <path d="M-20 -104 C -10 -110, 4 -106, 4 -96 L 2 -64 C -6 -58, -16 -58, -20 -64 Z" strokeWidth="6" />
      </g>
      {/* legs */}
      <path
        d="M-24 2 L -30 -34 L -8 -62"
        fill="none"
        stroke={INK}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 -12 L 10 -40 L -4 -62"
        fill="none"
        stroke={INK}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* back arm */}
      <path
        d="M-8 -98 L 18 -108 L 42 -122"
        fill="none"
        stroke={SKIN}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* torso — indigo happi jacket */}
      <path
        d="M-20 -104 C -10 -110, 4 -106, 4 -96 L 2 -64 C -6 -58, -16 -58, -20 -64 Z"
        fill={DEEP}
        stroke={INK}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M-15 -100 L -3 -70" stroke={PAPER} strokeWidth="2" />
      <path d="M-20 -66 L 3 -68" stroke={VERMILION} strokeWidth="5" />
      <circle cx="-8" cy="-84" r="2" fill={AQUA} />
      <circle cx="-3" cy="-92" r="1.6" fill={AQUA} />
      {/* front arm */}
      <path
        d="M-16 -100 L -42 -94 L -66 -102"
        fill="none"
        stroke={SKIN}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M-18 -101 L -34 -97" stroke={DEEP} strokeWidth="9" strokeLinecap="round" />
      {/* head */}
      <circle cx="-14" cy="-120" r="11" fill={SKIN} stroke={INK} strokeWidth="2" />
      <path d="M-25 -122 C -24 -134, -6 -136, -3 -124 Z" fill={INK} />
      <circle cx="-6" cy="-135" r="5" fill={INK} />
      <path d="M-25 -124 L -3 -126" stroke={VERMILION} strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="-20" cy="-118" r="1.2" fill={INK} />
    </g>
  );
}

/** Foam "claws" along the lip — after the woodblock tradition. */
function Foam({ d }: { d: string }) {
  return <path d={d} fill={PAPER} stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />;
}

type IllustrationProps = SVGProps<SVGSVGElement> & {
  animated?: boolean;
  title?: string;
};

/** Hero composition — big curling wave, sun, surfer on the face. */
export function SurferWave({
  animated = true,
  sun = true,
  title = "NAMIの波乗りの人",
  ...props
}: IllustrationProps & { sun?: boolean }) {
  return (
    <svg viewBox="0 0 640 610" role="img" aria-label={title} {...props}>
      <defs>
        <clipPath id="sw-wave">
          <path d="M30 570 C 100 562, 170 542, 240 494 C 312 444, 352 366, 332 296 C 312 234, 248 208, 196 232 C 156 252, 156 292, 178 312 C 146 324, 110 304, 104 262 C 96 190, 150 126, 240 116 C 330 108, 410 160, 450 240 C 500 330, 556 410, 606 462 C 632 490, 636 548, 600 570 Z" />
        </clipPath>
      </defs>

      {/* sun */}
      {sun && <circle cx="480" cy="150" r="92" fill={VERMILION} />}

      {/* wave body */}
      <g clipPath="url(#sw-wave)">
        <rect x="-20" y="80" width="700" height="560" fill={DEEP} />
        {/* bands following the back of the wave */}
        <g fill="none" strokeLinecap="round">
          <path d="M660 470 C 580 440, 490 360, 440 270 C 400 190, 330 150, 250 156" stroke={OCEAN} strokeWidth="26" />
          <path d="M660 520 C 570 490, 470 400, 420 310 C 384 240, 330 200, 270 196" stroke={OCEAN} strokeWidth="16" />
          <path d="M660 410 C 600 380, 520 320, 470 230 C 430 160, 360 128, 280 130" stroke={AQUA} strokeWidth="8" />
          <path d="M660 560 C 560 540, 460 450, 410 360" stroke={AQUA} strokeWidth="5" />
          <path d="M318 300 C 330 360, 300 430, 230 480" stroke={OCEAN} strokeWidth="18" />
          <path d="M300 310 C 306 360, 280 410, 220 456" stroke={AQUA} strokeWidth="5" />
        </g>
        {/* inner barrel shadow */}
        <path d="M196 232 C 248 208, 312 234, 332 296 L 300 300 C 290 262, 246 246, 206 258 Z" fill={INK} opacity="0.45" />
      </g>

      {/* foam along the lip */}
      <Foam d="M240 116 C 300 112, 360 130, 410 170 C 380 160, 360 168, 346 156 C 330 146, 306 150, 296 140 C 276 132, 260 140, 240 136 C 214 132, 196 146, 176 150 C 196 128, 214 118, 240 116 Z" />
      <Foam d="M176 150 C 140 170, 112 210, 110 254 C 120 236, 132 230, 140 220 C 136 204, 150 190, 162 186 C 160 172, 172 160, 186 156 Z" />
      <Foam d="M110 254 C 112 290, 140 316, 178 312 C 168 300, 156 302, 152 290 C 140 292, 130 280, 134 270 C 122 270, 114 262, 110 254 Z" />
      {/* claw tips */}
      <g fill={PAPER} stroke={INK} strokeWidth="2">
        <path d="M178 312 C 186 300, 196 298, 204 304 C 194 302, 190 308, 192 316 Z" />
        <path d="M166 316 C 168 326, 180 332, 188 328 C 180 328, 174 322, 176 316 Z" />
        <path d="M150 312 C 148 324, 156 336, 168 336 C 160 330, 158 322, 160 316 Z" />
      </g>
      {/* spray */}
      <g fill={PAPER} stroke={INK} strokeWidth="1.5">
        <circle cx="200" cy="96" r="6" />
        <circle cx="176" cy="110" r="4" />
        <circle cx="222" cy="84" r="3.5" />
        <circle cx="150" cy="132" r="3" />
        <circle cx="262" cy="94" r="4" />
        <circle cx="128" cy="160" r="2.5" />
      </g>

      {/* foreground swell */}
      <path
        d="M14 572 C 70 548, 120 540, 180 548 C 240 556, 290 564, 360 552 C 440 538, 540 534, 626 556 C 646 574, 626 594, 596 594 L 44 594 C 14 594, 0 584, 14 572 Z"
        fill={OCEAN}
      />
      <path d="M40 578 C 120 566, 200 568, 280 576 C 360 584, 460 572, 600 572" fill="none" stroke={AQUA} strokeWidth="3" strokeLinecap="round" />
      <path d="M90 588 q 14 -8 28 0 t 28 0 M330 588 q 14 -8 28 0 t 28 0 M500 586 q 14 -8 28 0 t 28 0" fill="none" stroke={PAPER} strokeWidth="2.5" strokeLinecap="round" />

      {/* birds */}
      <g fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round">
        <path d="M560 60 q 8 -8 16 0 q 8 -8 16 0" />
        <path d="M596 92 q 6 -6 12 0 q 6 -6 12 0" />
      </g>

      {/* wake spray off the face */}
      <g fill="none" stroke={PAPER} strokeLinecap="round">
        <path d="M352 432 C 344 470, 322 492, 296 500" strokeWidth="6" />
        <path d="M366 420 C 362 446, 352 462, 340 474" strokeWidth="3" />
      </g>
      <g fill={PAPER}>
        <circle cx="362" cy="400" r="4" />
        <circle cx="374" cy="414" r="3" />
        <circle cx="352" cy="388" r="2.5" />
      </g>

      {/* surfer, riding the barrel */}
      <g transform="translate(300 456)">
        <SurferFigure className={animated ? "origin-center animate-float [transform-box:fill-box]" : undefined} />
      </g>
    </svg>
  );
}

/** Story composition — a calmer, longer swell; the surfer gliding left to right. */
export function SurferSwell({ animated = true, title = "穏やかな波に乗るNAMIの波乗りの人", ...props }: IllustrationProps) {
  return (
    <svg viewBox="0 0 640 420" role="img" aria-label={title} {...props}>
      <circle cx="150" cy="150" r="70" fill={VERMILION} />
      <path
        d="M-20 330 C 60 300, 120 230, 220 214 C 320 198, 390 250, 440 286 C 470 306, 500 300, 510 284 C 494 290, 482 280, 488 266 C 500 244, 540 246, 560 270 C 590 306, 620 320, 660 320 L 660 440 L -20 440 Z"
        fill={DEEP}
      />
      <g fill="none" strokeLinecap="round">
        <path d="M-20 360 C 80 330, 150 268, 230 254 C 320 240, 380 290, 430 320" stroke={OCEAN} strokeWidth="18" />
        <path d="M-20 390 C 90 362, 170 300, 250 292 C 330 284, 400 330, 460 352" stroke={AQUA} strokeWidth="5" />
        <path d="M480 340 C 540 350, 600 352, 660 346" stroke={OCEAN} strokeWidth="14" />
      </g>
      <path
        d="M220 214 C 320 198, 390 250, 440 286 C 470 306, 500 300, 510 284 C 494 290, 482 280, 488 266 C 500 244, 540 246, 560 270 C 540 262, 524 266, 520 278 C 506 296, 470 310, 436 296 C 400 278, 330 216, 220 220 Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M-20 400 C 120 390, 260 410, 400 396 C 500 386, 580 392, 660 388 L 660 440 L -20 440 Z" fill={OCEAN} />
      <path d="M40 414 q 16 -8 32 0 t 32 0 M380 410 q 16 -8 32 0 t 32 0" fill="none" stroke={PAPER} strokeWidth="2.5" />
      <g transform="translate(330 252) scale(-0.82 0.82)">
        <SurferFigure className={animated ? "animate-float [transform-box:fill-box] origin-center" : undefined} />
      </g>
    </svg>
  );
}

/** Mini mark — surfer on a single line of swell. For the CTA and footer. */
export function SurferMini({
  animated = true,
  bare = false,
  title = "NAMIの波乗りの人",
  ...props
}: IllustrationProps & { bare?: boolean }) {
  return (
    <svg viewBox="0 0 260 200" role="img" aria-label={title} {...props}>
      <circle cx="190" cy="70" r="34" fill={VERMILION} />
      {!bare && (
        <>
      <path
        d="M14 172 C 44 160, 74 132, 112 130 C 150 128, 172 150, 202 156 C 222 160, 238 158, 248 162 C 262 170, 256 188, 238 188 L 26 188 C 8 188, 2 178, 14 172 Z"
        fill={DEEP}
      />
      <path d="M30 178 C 80 170, 130 182, 180 176 C 210 172, 228 174, 240 176" fill="none" stroke={AQUA} strokeWidth="3" strokeLinecap="round" />
        </>
      )}
      <g transform="translate(112 132) scale(0.62)">
        <SurferFigure className={animated ? "animate-float [transform-box:fill-box] origin-center" : undefined} />
      </g>
    </svg>
  );
}
