/** Site languages: English (main, at "/") and Japanese (sub, at "/ja"). */
export type Lang = "en" | "ja";

/** The address of a page in the given language: "/works/x" -> "/ja/works/x", "/#works" -> "/ja#works". */
export function localHref(lang: Lang, path: string) {
  if (lang === "en") return path;
  if (path === "/") return "/ja";
  if (path.startsWith("/#")) return "/ja" + path.slice(1);
  return "/ja" + path;
}

/** The language of a pathname, and the same page in the other language. */
export function langOfPath(pathname: string): Lang {
  return pathname === "/ja" || pathname.startsWith("/ja/") ? "ja" : "en";
}

export function stripLang(pathname: string) {
  if (pathname === "/ja") return "/";
  return pathname.startsWith("/ja/") ? pathname.slice(3) : pathname;
}
