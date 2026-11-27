import Link from "next/link";
import { site } from "@/data/site";
import { InstagramIcon, MailIcon } from "@/components/SocialIcons";
import { localHref, type Lang } from "@/lib/lang";
import { tr } from "@/lib/tr";

function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.3z" />
      <path d="M9 8.3c.2-.5.6-.6.9-.6h.5c.2 0 .4.1.5.4l.7 1.6c.1.2 0 .5-.1.7l-.5.6c.6 1.2 1.6 2.2 2.8 2.8l.6-.5c.2-.2.5-.2.7-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3-.1.7-.6.9-.7.4-1.6.4-2.6 0a9 9 0 0 1-4.9-4.9c-.4-1-.4-1.9 0-2.6z" />
    </svg>
  );
}

function LineIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <path d="M12 3.5c-5 0-9 3.2-9 7.2 0 3.6 3.2 6.6 7.5 7.1.3.1.7.2.8.5.1.2 0 .6 0 .8l-.1.8c0 .2-.2.9.8.5s5.3-3.1 7.2-5.4c1.3-1.4 1.8-2.8 1.8-4.3 0-4-4-7.2-9-7.2z" />
      <path d="M7.5 9v3.3h1.8M10.8 9v3.3M12.8 12.3V9l2.3 3.3V9M18 9h-1.7v3.3H18M16.3 10.6H18" strokeLinecap="round" />
    </svg>
  );
}

/** Contact buttons that stay on the right while scrolling. */
export function FloatingContact({ lang }: { lang: Lang }) {
  const btn =
    "flex h-12 w-12 items-center justify-center rounded-full bg-navy text-paper shadow-lg ring-1 ring-paper/30 transition-transform hover:scale-105 hover:bg-deep";
  const items = [
    site.line && { href: site.line, label: "LINE", icon: <LineIcon />, ext: true },
    site.whatsapp && { href: site.whatsapp, label: "WhatsApp", icon: <WhatsAppIcon />, ext: true },
    { href: site.instagram, label: "Instagram DM", icon: <InstagramIcon />, ext: true },
    { href: localHref(lang, "/book"), label: tr({ ja: "無料相談の予約", en: "Book a free consultation" }, lang), icon: <MailIcon />, ext: false },
  ].filter(Boolean) as { href: string; label: string; icon: React.ReactNode; ext: boolean }[];
  return (
    <nav
      aria-label={tr({ ja: "お問い合わせ", en: "Contact" }, lang)}
      className="fixed bottom-4 right-3 z-[45] flex flex-col gap-2.5 md:bottom-auto md:right-4 md:top-1/2 md:-translate-y-1/2"
    >
      {items.map((i) =>
        i.ext ? (
          <a key={i.label} href={i.href} target="_blank" rel="noopener noreferrer" className={btn} aria-label={i.label} title={i.label}>
            {i.icon}
          </a>
        ) : (
          <Link key={i.label} href={i.href} className={btn} aria-label={i.label} title={i.label}>
            {i.icon}
          </Link>
        ),
      )}
    </nav>
  );
}
