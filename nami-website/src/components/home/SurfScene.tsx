import Image from "next/image";

/*
 * The sea on Home, drawn in the woodblock palette of the NAMI posts: layers
 * of swell with gold contour lines and a lace of foam, each sliding at its
 * own pace (nearer is faster), the rising sun on the horizon, and the NAMI
 * surfer riding between the swells. Each layer is two identical tiles side
 * by side, so moving it by half its width loops without a seam.
 */

const W = 2400; // two tiles of 1200
const H = 200;

/** White foam breaking over each crest, like the claws of foam in the print. */
function curls(base: number, amp: number, length: number) {
  const out: string[] = [];
  for (let cx = length / 2; cx < W; cx += length) {
    const cy = base - amp;
    out.push(
      `M${cx - 46} ${cy + 14} Q${cx - 6} ${cy - 16} ${cx + 30} ${cy - 2} Q${cx + 40} ${cy + 4} ${cx + 30} ${cy + 9} ` +
        `Q${cx + 22} ${cy + 1} ${cx + 8} ${cy + 3} Q${cx - 16} ${cy + 6} ${cx - 46} ${cy + 14} Z`,
    );
  }
  return out.join(" ");
}

/** A smooth, slightly peaked swell along the top of a layer. */
function crest(base: number, amp: number, length: number, skew = 0.15) {
  let d = `M0 ${base}`;
  for (let x = 0, up = true; x < W; x += length / 2, up = !up) {
    const x1 = x + length / 2;
    const y0 = up ? base : base - amp;
    const y1 = up ? base - amp : base;
    // pull the crest a little forward so the swell leans like the print
    const k = up ? length * (1 / 6 + skew / 2) : length * (1 / 6 - skew / 4);
    d += ` C${x + k} ${y0} ${x1 - length / 6} ${y1} ${x1} ${y1}`;
  }
  return d;
}

type Layer = {
  id: string;
  height: string; // share of the scene, from the bottom
  base: number;
  amp: number;
  length: number;
  from: string;
  to: string;
  seconds: number;
  foam?: boolean;
  curls?: boolean;
};

const layers: Layer[] = [
  { id: "far", height: "60%", base: 46, amp: 14, length: 300, from: "#b9d8d4", to: "#9cc5c4", seconds: 50 },
  { id: "mid", height: "50%", base: 52, amp: 28, length: 400, from: "#6fa6b2", to: "#4d8b9e", seconds: 34, curls: true },
  { id: "near", height: "38%", base: 60, amp: 44, length: 600, from: "#33698a", to: "#24507a", seconds: 22, curls: true },
  { id: "front", height: "22%", base: 56, amp: 46, length: 400, from: "#25486f", to: "#1b3556", seconds: 14, foam: true },
];

function Swell({ layer }: { layer: Layer }) {
  const top = crest(layer.base, layer.amp, layer.length);
  return (
    <svg
      className="swell"
      style={{ height: layer.height, animationDuration: `${layer.seconds}s` } as React.CSSProperties}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id={`g-${layer.id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={layer.from} />
          <stop offset="1" stopColor={layer.to} />
        </linearGradient>
      </defs>
      <path d={`${top} L${W} ${H} L0 ${H} Z`} fill={`url(#g-${layer.id})`} />
      {/* gold contour along the swell, and a fainter one below it */}
      <path d={top} fill="none" stroke="#caa766" strokeWidth="2" vectorEffect="non-scaling-stroke" opacity="0.9" />
      <path d={top} fill="none" stroke="#e9dcc0" strokeWidth="1" vectorEffect="non-scaling-stroke" opacity="0.45" transform="translate(0 22)" />
      {layer.curls && <path d={curls(layer.base, layer.amp, layer.length)} fill="#f6efe3" opacity="0.92" />}
      {layer.foam && (
        <path
          d={top}
          fill="none"
          stroke="#f6efe3"
          strokeOpacity="0.8"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="1 13"
          vectorEffect="non-scaling-stroke"
          transform="translate(0 -6)"
        />
      )}
    </svg>
  );
}

export function SurfScene({ className = "" }: { className?: string }) {
  const [far, mid, near, front] = layers;
  return (
    <div
      className={`surf-scene relative w-full overflow-hidden ${className}`}
      role="img"
      aria-label="The NAMI surfer, a girl with a basket of tools on her back, rides her red board across rolling waves towards the rising sun"
      data-play-in-view
    >
      <span className="surf-sun" aria-hidden />
      <span className="surf-horizon" aria-hidden />
      <Swell layer={far} />
      <Swell layer={mid} />
      <div className="surf-rider" aria-hidden>
        <Image src="/images/washi/surfer-rider.webp" alt="" width={732} height={816} priority sizes="(min-width: 768px) 22vw, 40vw" />
      </div>
      <Swell layer={near} />
      <Swell layer={front} />
    </div>
  );
}
