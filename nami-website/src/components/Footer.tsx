"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import { brandOfService, brands } from "@/data/brands";
import { brandOfPath, brandSites } from "@/data/sites";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui";
import { langOfPath, localHref, stripLang } from "@/lib/lang";
import { EmailButton, FacebookIcon, InstagramIcon, MailIcon } from "@/components/SocialIcons";
import { tr } from "@/lib/tr";

const icon = "flex h-11 w-11 items-center justify-center rounded-full text-paper/75 transition-colors hover:text-paper";

/**
 * Footer. On a brand site it says the brand is part of NAMI; on every page it
 * lists NAMI's three businesses so a visitor can always find the right one.
 */
export function Footer() {
  const pathname = usePathname() || "/";
  const lang = langOfPath(pathname);
  const here = stripLang(pathname);
  const current = brandOfPath(
    here,
    (s) => brandOfService(s)?.slug,
    (g) => brands.find((b) => b.guides.includes(g))?.slug,
  );
  const cur = brands.find((b) => b.slug === current);
  return (
    <footer className="relative bg-navy text-paper">
      <Container className="py-12 md:py-14">
        <div className="flex items-center justify-between gap-6">
          <Logo href={localHref(lang, "/")} className="h-8 w-auto brightness-0 invert" />
          <ul className="flex items-center gap-1">
            <li>
              <EmailButton className={icon}>
                <MailIcon />
                <span className="sr-only">Email</span>
              </EmailButton>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className={icon} aria-label={`Instagram ${site.instagramHandle}`}>
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" className={icon} aria-label="Facebook">
                <FacebookIcon />
              </a>
            </li>
          </ul>
        </div>

        {cur && (
          <p className="mt-8 text-[1rem] text-paper/80">
            {tr(
              {
                en: `${cur.name} is one of NAMI's three businesses.`,
                ja: `${cur.name}は、NAMIの3つの事業のひとつです。`,
              },
              lang,
            )}
          </p>
        )}

        <nav aria-label={tr({ en: "NAMI businesses", ja: "NAMIの事業" }, lang)} className="mt-8 grid gap-6 border-t border-paper/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {brandSites.map((s) => {
            const b = brands.find((x) => x.slug === s.slug)!;
            return (
              <Link
                key={s.slug}
                href={localHref(lang, `/${s.slug}`)}
                aria-current={s.slug === current ? "page" : undefined}
                className="group block aria-[current=page]:opacity-60"
              >
                <span className="title block text-[1.15rem] !text-paper transition-colors group-hover:!text-aqua">{b.name} →</span>
                <span className="mt-1 block text-[0.875rem] leading-relaxed text-paper/60">{tr(s.forWho, lang)}</span>
              </Link>
            );
          })}
          <ul className="space-y-2 text-[0.9375rem] text-paper/75">
            <li><Link href={localHref(lang, "/")} className="hover:text-paper">{tr({ en: "NAMI top", ja: "NAMIトップ" }, lang)}</Link></li>
            <li><Link href={localHref(lang, "/about")} className="hover:text-paper">{tr({ en: "About NAMI", ja: "NAMIについて" }, lang)}</Link></li>
            <li><Link href={localHref(lang, "/guides")} className="hover:text-paper">{tr({ en: "Guides", ja: "お役立ちガイド" }, lang)}</Link></li>
            <li><Link href={localHref(lang, "/book")} className="hover:text-paper">{tr({ en: "Contact", ja: "お問い合わせ" }, lang)}</Link></li>
          </ul>
        </nav>

        <p className="mt-10 text-[0.9375rem] text-paper/70">{tr(site.base, lang)}</p>
        <p className="mt-2 text-[0.875rem] tracking-[0.08em] text-paper/40">© 2026 NAMI</p>
      </Container>
    </footer>
  );
}
