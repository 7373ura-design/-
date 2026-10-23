import { site } from "@/data/site";
import { T } from "@/lib/i18n";

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

export function FacebookIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        transform="translate(12 12) scale(0.58) translate(-12 -12.6)"
        fill="currentColor"
        d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1z"
      />
    </svg>
  );
}

export function MailIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 7.5l8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Email as a tap-to-open card: the address and a copy button (copying is wired
 * in nami.js). Works without JavaScript too: the address can be selected.
 */
export function EmailButton({
  className,
  cardClassName = "bottom-full right-0 mb-3",
  children,
}: {
  className: string;
  cardClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <details className="mail-pop relative">
      <summary className={`cursor-pointer list-none [&::-webkit-details-marker]:hidden ${className}`}>{children}</summary>
      <div className={`absolute z-10 w-max rounded-md bg-paper px-4 py-3 text-navy shadow-lg ring-1 ring-navy/10 ${cardClassName}`}>
        <p className="select-all text-[0.9375rem]">{site.email}</p>
        <button type="button" data-copy={site.email} className="mt-2 text-[0.8125rem] text-vermilion underline underline-offset-4">
          <span data-copy-label>
            <T ja="コピーする" en="Copy" />
          </span>
          <span data-copy-done hidden>
            <T ja="コピーしました" en="Copied" />
          </span>
        </button>
      </div>
    </details>
  );
}
