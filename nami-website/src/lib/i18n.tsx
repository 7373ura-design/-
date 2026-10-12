import type { ReactNode } from "react";

/**
 * Bilingual copy. Both languages are rendered into the page and CSS shows the
 * one selected on <html data-lang>. The choice is remembered in localStorage,
 * so it works on static hosting too and never causes a hydration mismatch.
 */
export type Bi = { ja: string; en: string };
export type BiList = { ja: string[]; en: string[] };

type Tag = "span" | "div" | "p";

/** Render either a pair of strings (with "\n" line breaks) or a pair of nodes. */
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
  const render = (v: ReactNode) =>
    typeof v === "string"
      ? v.split("\n").map((line, i, all) => (
          <span key={i}>
            {line}
            {i < all.length - 1 && <br />}
          </span>
        ))
      : v;
  return (
    <>
      <Tag lang="ja" className={`lang-ja ${className ?? ""}`}>
        {render(ja)}
      </Tag>
      <Tag lang="en-GB" className={`lang-en ${className ?? ""}`}>
        {render(en)}
      </Tag>
    </>
  );
}

/** Shorthand for a Bi value. */
export function B({ t, as, className }: { t: Bi; as?: Tag; className?: string }) {
  return <T ja={t.ja} en={t.en} as={as} className={className} />;
}

/** Runs before paint: applies the saved language and wires up every [data-lang-set] button. */
export const languageScript = `(function(){var d=document.documentElement;function set(l,save){d.setAttribute('data-lang',l);d.lang=l==='en'?'en-GB':'ja';document.querySelectorAll('[data-lang-set]').forEach(function(b){b.setAttribute('aria-pressed',String(b.getAttribute('data-lang-set')===l))});document.querySelectorAll('[data-ph-'+l+']').forEach(function(f){f.setAttribute('placeholder',f.getAttribute('data-ph-'+l))});if(save){try{localStorage.setItem('nami-lang',l)}catch(e){}}}var s='ja';try{s=localStorage.getItem('nami-lang')||'ja'}catch(e){}set(s);document.addEventListener('DOMContentLoaded',function(){set(d.getAttribute('data-lang')||'ja')});document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-lang-set]');if(b){set(b.getAttribute('data-lang-set'),true)}})})();`;
