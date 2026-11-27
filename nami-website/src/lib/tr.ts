import zh from "@/data/zh.json";
import type { Lang } from "@/lib/lang";

/**
 * Pick the text for a language. Japanese and English are written in the data;
 * Simplified Chinese comes from src/data/zh.json, keyed by the English text
 * (falls back to English when a translation is missing).
 */
const dict = zh as Record<string, string>;

export function zhOf(en: string) {
  return dict[en] ?? en;
}

export function tr<T>(bi: { ja: T; en: T }, lang: Lang): T {
  if (lang === "ja") return bi.ja;
  if (lang === "zh") {
    const en = bi.en as unknown;
    if (typeof en === "string") return zhOf(en) as T;
    if (Array.isArray(en)) return en.map((s) => (typeof s === "string" ? zhOf(s) : s)) as T;
  }
  return bi.en;
}

/** Chinese page metadata: the English title and description, translated. */
export function zhMeta<M extends { title?: unknown; description?: unknown }>(meta: M): M {
  const t = typeof meta.title === "string" ? zhOf(meta.title) : meta.title;
  const d = typeof meta.description === "string" ? zhOf(meta.description) : meta.description;
  return { ...meta, title: t, description: d };
}
