/**
 * 日本語 / EN switch. The buttons carry no state of their own: the small script
 * in the root layout (languageScript) reads the saved choice, sets
 * <html data-lang> and keeps aria-pressed in sync (set before hydration, hence
 * suppressHydrationWarning), so this works the same on a
 * server-rendered page and on a static export.
 */
export function LanguageSwitch({ className = "" }: { className?: string }) {
  const btn =
    "label rounded-full px-3 py-2 !tracking-[0.12em] transition-colors aria-pressed:bg-navy aria-pressed:text-paper text-navy hover:text-vermilion aria-pressed:hover:text-paper";
  return (
    <div role="group" aria-label="Language / 言語" className={`inline-flex items-center rounded-full border border-navy/30 p-0.5 ${className}`}>
      <button type="button" data-lang-set="ja" lang="ja" className={btn} suppressHydrationWarning>
        日本語
      </button>
      <button type="button" data-lang-set="en" lang="en" className={btn} suppressHydrationWarning>
        EN
      </button>
    </div>
  );
}
