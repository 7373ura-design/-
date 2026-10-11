/**
 * Flowing wave used between sections. The pattern is drawn twice and drifts
 * horizontally so the motion loops seamlessly (disabled for reduced motion).
 */
type Props = {
  /** Colour of the band below the wave (the next section's background). */
  fill?: string;
  /** Colour of the accent line. */
  accent?: string;
  flip?: boolean;
  animated?: boolean;
  className?: string;
};

const PATH =
  "M0 60 C 120 20, 240 20, 360 50 S 600 90, 720 56 S 960 10, 1080 40 S 1320 80, 1440 60 L 1440 120 L 0 120 Z";
const LINE = "M0 74 C 120 40, 240 40, 360 66 S 600 100, 720 72 S 960 30, 1080 58 S 1320 92, 1440 74";

export function WaveDivider({
  fill = "#075985",
  accent = "#75C9D5",
  flip = false,
  animated = true,
  className = "",
}: Props) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none relative h-14 w-full overflow-hidden md:h-24 ${flip ? "rotate-180" : ""} ${className}`}
    >
      <div className={`absolute inset-y-0 left-0 flex w-[200%] ${animated ? "animate-drift-slow" : ""}`}>
        {[0, 1].map((i) => (
          <svg key={i} viewBox="0 0 1440 120" preserveAspectRatio="none" className="h-full w-1/2">
            <path d={PATH} fill={fill} />
            <path d={LINE} fill="none" stroke={accent} strokeWidth="2" vectorEffect="non-scaling-stroke" />
          </svg>
        ))}
      </div>
    </div>
  );
}

/** Small decorative wave line — used beside labels and in cards. */
export function WaveLine({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 10" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      <path d="M0 5c5-5 10-5 15 0s10 5 15 0 10-5 15 0 10 5 15 0" />
    </svg>
  );
}
