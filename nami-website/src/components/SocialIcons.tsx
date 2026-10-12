import { site } from "@/data/site";

/** Simple single-colour brand marks, drawn on a 24px grid. */
const icons: Record<string, React.JSX.Element> = {
  Instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </>
  ),
  Facebook: (
    <path
      fill="currentColor"
      d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1z"
    />
  ),
  LinkedIn: (
    <path
      fill="currentColor"
      d="M5.4 8.2a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6zM3.9 9.6h3V20h-3V9.6zm5 0h2.9v1.4h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7V20h-3v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V20h-3V9.6z"
    />
  ),
};

export function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-5 ${className}`}>
      {site.social.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`NAMI on ${s.label}`}
            title={s.label}
            className="block text-paper/75 transition-colors hover:text-paper"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
              {icons[s.label]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
