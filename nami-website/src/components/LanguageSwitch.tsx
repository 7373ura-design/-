/**
 * 日本語 / EN switch. The buttons carry no state of their own: the small script
 * in the root layout (languageScript) reads the saved choice, sets
 * <html data-lang> and keeps aria-pressed in sync (set before hydration, hence
 * suppressHydrationWarning), so this works the same on a
 * server-rendered page and on a static export.
 */
export function LanguageSwitch({ className = "" }: { className?: string }) {
  const btn =
    "label px-1 py-1 !tracking-[0.12em] text-navy/45 transition-colors hover:text-navy aria-pressed:text-navy aria-pressed:underline aria-pressed:decoration-vermilion aria-pressed:underline-offset-[6px]";
  return (
    <div role="group" aria-label="Language / 言語" className={`inline-flex items-center gap-1.5 ${className}`}>
      <button type="button" data-lang-set="ja" lang="ja" className={btn} suppressHydrationWarning>
        日本語
      </button>
      <span aria-hidden className="text-navy/25">/</span>
      <button type="button" data-lang-set="en" lang="en" className={btn} suppressHydrationWarning>
        EN
      </button>
    </div>
  );
}
