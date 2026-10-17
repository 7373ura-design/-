/** NAMI line icons. */

type IconProps = { className?: string };

export function ArrowRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 12" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
      <path d="M0 6h22M17 1l5 5-5 5" />
    </svg>
  );
}
