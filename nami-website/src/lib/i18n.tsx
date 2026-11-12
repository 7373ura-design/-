"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Lang } from "@/lib/lang";

/**
 * Bilingual copy. English is the main site at "/", Japanese is the sub site at
 * "/ja". Each page is rendered in its own language only, so search engines see
 * one language per address (linked to each other with hreflang).
 */
export type Bi = { ja: string; en: string };
export type BiList = { ja: string[]; en: string[] };

type Tag = "span" | "div" | "p";

const LangContext = createContext<Lang>("en");

export function LangProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

/** Render the current language's string (with "\n" line breaks) or node. */
export function T({
  ja,
  en,
  as: Tag = "span",
  className,
}: {
  ja: ReactNode;
  en: ReactNode;
  as?: Tag;
  className?: string;
}) {
  const lang = useLang();
  const v = lang === "ja" ? ja : en;
  const content =
    typeof v === "string"
      ? v.split("\n").map((line, i, all) => (
          <span key={i}>
            {line}
            {i < all.length - 1 && <br />}
          </span>
        ))
      : v;
  return <Tag className={className}>{content}</Tag>;
}

/** Shorthand for a Bi value. */
export function B({ t, as, className }: { t: Bi; as?: Tag; className?: string }) {
  return <T ja={t.ja} en={t.en} as={as} className={className} />;
}
