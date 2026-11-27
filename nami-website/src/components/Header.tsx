"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/data/site";
import { brandOfService, brands } from "@/data/brands";
import { brandOfPath, getBrandSite } from "@/data/sites";
import { langOfPath, localHref, stripLang } from "@/lib/lang";
import { Logo } from "@/components/Logo";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { tr } from "@/lib/tr";

export function Header() {
  const pathname = usePathname() || "/";
  const lang = langOfPath(pathname);
  const here = stripLang(pathname);
  // On a brand's own site, the header becomes that brand's header
  const brandSlug = brandOfPath(
    here,
    (s) => brandOfService(s)?.slug,
    (g) => brands.find((b) => b.guides.includes(g))?.slug,
  );
  const site = brandSlug ? getBrandSite(brandSlug) : undefined;
  const items = site
    ? site.menu
    : navigation;
  const menu = items.map((item) => ({
    label: tr(item.label, lang),
    href: localHref(lang, item.href),
    // The business page you are on (or one of its projects) is marked in the menu
    current: !item.href.includes("#") && (here === item.href || here.startsWith(item.href + "/")),
  }));
  const [open, setOpen] = useState(false);
  // Close the menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);


  return (
    <>
      <a
        href="#main"
        className="label sr-only z-[80] bg-navy px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {tr({ ja: "本文へ", en: "Skip to content" }, lang)}
      </a>
      <header className="fixed inset-x-0 top-0 z-50 border-b hairline bg-cream">
        <div className="mx-auto flex h-20 w-full max-w-[1360px] items-center justify-between px-5 md:h-24 md:px-10 lg:px-16">
          <div className="flex min-w-0 flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-4">
            <Logo href={localHref(lang, "/")} priority className={`${site ? "h-6" : "h-7"} w-auto sm:h-9 md:h-10`} />
            {site && (
              <Link
                href={localHref(lang, `/${site.slug}`)}
                className="title text-[1rem] !leading-none tracking-[0.1em] text-navy transition-colors hover:text-vermilion sm:border-l sm:border-navy/25 sm:pl-4 sm:text-[1.4rem] md:text-[1.7rem]"
              >
                {site.short}
              </Link>
            )}
          </div>

          <nav aria-label="Main" className="hidden items-center gap-6 whitespace-nowrap xl:flex xl:gap-8">
            {menu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className="label link-underline pb-1 text-navy transition-colors hover:text-vermilion aria-[current=page]:text-vermilion aria-[current=page]:underline aria-[current=page]:decoration-vermilion aria-[current=page]:underline-offset-[8px]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <Link
              href={localHref(lang, "/book")}
              className="label hidden whitespace-nowrap bg-navy px-4 py-2.5 text-paper transition-colors hover:bg-deep sm:inline-flex"
            >
              {tr({ ja: "無料相談", en: "BOOK" }, lang)}
            </Link>
            <LanguageSwitch />
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 flex-col items-center justify-center gap-[7px] xl:hidden"
            >
              <span className="sr-only">{tr({ ja: "メニューを開く", en: "Open menu" }, lang)}</span>
              <span className="h-px w-7 bg-navy" />
              <span className="h-px w-7 bg-navy" />
              <span className="h-px w-4 self-end bg-vermilion mr-2" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!open}
        className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-cream text-navy xl:hidden"
      >
        <div className="flex h-20 items-center justify-between px-5 md:px-10">
          <div className="flex items-center gap-3">
            <Logo href={localHref(lang, "/")} className="h-9 w-auto" />
            {site && <span className="title border-l border-navy/25 pl-3 text-[1.5rem] !leading-none tracking-[0.08em]">{site.short}</span>}
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="relative h-11 w-11"
            aria-label="Close menu"
          >
            <span className="absolute left-2 top-1/2 h-px w-7 rotate-45 bg-navy" />
            <span className="absolute left-2 top-1/2 h-px w-7 -rotate-45 bg-navy" />
          </button>
        </div>
        <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center gap-1 px-5 md:px-10">
          {menu.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-4 border-b hairline py-4"
            >
              <span className="label text-vermilion">0{i + 1}</span>
              <span className="font-jp text-3xl tracking-[0.12em] transition-colors group-hover:text-vermilion">
                {item.label}
              </span>
            </Link>
          ))}
          <Link
            href={localHref(lang, "/#businesses")}
            onClick={() => setOpen(false)}
            className="label mt-8 text-navy/70 hover:text-vermilion"
          >
            {tr({ ja: "NAMIのすべての事業 →", en: "ALL NAMI BUSINESSES →" }, lang)}
          </Link>
        </nav>
      </div>
    </>
  );
}
