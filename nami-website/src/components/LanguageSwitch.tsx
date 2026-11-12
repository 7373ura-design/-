"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { langOfPath, localHref, stripLang } from "@/lib/lang";

/** EN / 日本語: links to the same page in the other language (English at "/", Japanese at "/ja"). */
export function LanguageSwitch({ className = "" }: { className?: string }) {
  const pathname = usePathname() || "/";
  const lang = langOfPath(pathname);
  const path = stripLang(pathname);
  const btn =
    "label px-1 py-1 !tracking-[0.12em] text-navy/45 transition-colors hover:text-navy aria-[current=page]:text-navy aria-[current=page]:underline aria-[current=page]:decoration-vermilion aria-[current=page]:underline-offset-[6px]";
  return (
    <nav aria-label="Language / 言語" className={`inline-flex items-center gap-1.5 ${className}`}>
      <Link href={path} hrefLang="en-AU" lang="en" className={btn} aria-current={lang === "en" ? "page" : undefined}>
        EN
      </Link>
      <span aria-hidden className="text-navy/25">/</span>
      <Link href={localHref("ja", path)} hrefLang="ja" lang="ja" className={btn} aria-current={lang === "ja" ? "page" : undefined}>
        日本語
      </Link>
    </nav>
  );
}
