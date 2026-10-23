import { site } from "@/data/site";

/** The Instagram mark, drawn on a 24px grid. */
export function InstagramIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

/** Link to NAMI on Instagram — the only outside link on the site. */
export function InstagramLink({ className = "", children }: { className?: string; children?: React.ReactNode }) {
  return (
    <a
      href={site.instagram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={children ? undefined : "NAMI on Instagram"}
      className={`inline-flex items-center gap-3 transition-colors ${className}`}
    >
      <InstagramIcon />
      {children}
    </a>
  );
}
