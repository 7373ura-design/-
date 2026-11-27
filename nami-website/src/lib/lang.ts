/** Site languages: English (main, at "/"), Japanese ("/ja") and Simplified Chinese ("/zh"). */
export type Lang = "en" | "ja" | "zh";
export const LANGS: Lang[] = ["en", "ja", "zh"];

/** BCP 47 tag, Open Graph locale. */
export const langTag = (lang: Lang) => (lang === "ja" ? "ja" : lang === "zh" ? "zh-Hans" : "en-AU");
export const ogLocale = (lang: Lang) => (lang === "ja" ? "ja_JP" : lang === "zh" ? "zh_CN" : "en_AU");

/** The address of a page in the given language: "/works/x" -> "/ja/works/x", "/#works" -> "/ja#works". */
export function localHref(lang: Lang, path: string) {
  if (lang === "en") return path;
  const p = "/" + lang;
  if (path === "/") return p;
  if (path.startsWith("/#")) return p + path.slice(1);
  return p + path;
}

export function langOfPath(pathname: string): Lang {
  for (const l of ["ja", "zh"] as const) if (pathname === "/" + l || pathname.startsWith("/" + l + "/")) return l;
  return "en";
}

export function stripLang(pathname: string) {
  for (const l of ["ja", "zh"]) {
    if (pathname === "/" + l) return "/";
    if (pathname.startsWith("/" + l + "/")) return pathname.slice(l.length + 1);
  }
  return pathname;
}
