"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/data/site";
import { Logo } from "@/components/Logo";
import { ArrowRight } from "@/components/illustrations/Icons";
import Image from "next/image";
import { LanguageSwitch } from "@/components/LanguageSwitch";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <a
        href="#main"
        className="label sr-only z-[80] bg-navy px-4 py-3 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "border-b hairline bg-cream/92 backdrop-blur-md" : "border-b border-transparent bg-cream"
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-[1360px] items-center justify-between px-5 transition-all duration-500 md:px-10 lg:px-16 ${
            scrolled ? "h-16" : "h-20 md:h-24"
          }`}
        >
          <Logo priority className={`w-auto transition-all duration-500 ${scrolled ? "h-8" : "h-9 md:h-10"}`} />

          <nav aria-label="Main" className="hidden items-center gap-7 xl:gap-9 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`label link-underline pb-1 transition-colors hover:text-vermilion ${
                  isActive(item.href) ? "text-vermilion" : "text-navy"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <LanguageSwitch />
            <Link
              href="/contact"
              className="label hidden items-center border-b border-navy/30 pb-1 text-navy transition-colors hover:border-vermilion hover:text-vermilion sm:inline-flex"
            >
              ENQUIRE
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 flex-col items-center justify-center gap-[7px] lg:hidden"
            >
              <span className="sr-only">Open menu</span>
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
        className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-cream text-navy lg:hidden"
      >
        <div className="flex h-20 items-center justify-between px-5 md:px-10">
          <Logo className="h-9 w-auto" />
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
          {[{ label: "HOME", href: "/" }, ...navigation].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-baseline gap-4 border-b hairline py-4"
            >
              <span className="label text-vermilion">0{i}</span>
              <span className="font-jp text-3xl tracking-[0.12em] transition-colors group-hover:text-vermilion">
                {item.label}
              </span>
            </Link>
          ))}
          <Link
            href="/contact"
            className="label mt-8 inline-flex items-center justify-center gap-3 bg-navy px-6 py-4 text-paper"
          >
            ENQUIRE NOW <ArrowRight className="h-3 w-6" />
          </Link>
        </nav>
        <div className="relative mt-8 aspect-[2/1] w-full" aria-hidden>
          <Image src="/images/washi/wave-sun.jpg" alt="" fill sizes="100vw" className="object-cover object-bottom" />
        </div>
      </div>
    </>
  );
}
