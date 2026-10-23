import { site } from "@/data/site";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui";
import { FacebookIcon, InstagramIcon, MailIcon } from "@/components/SocialIcons";
import { T } from "@/lib/i18n";

const icon = "flex h-11 w-11 items-center justify-center rounded-full text-paper/75 transition-colors hover:text-paper";

/** The logo, three marks (email, Instagram, Facebook) and the year. */
export function Footer() {
  return (
    <footer className="relative bg-navy text-paper">
      <Container className="py-12 md:py-14">
        <div className="flex items-center justify-between gap-6">
          {/* Single-colour (white) version of the logo for the dark ground */}
          <Logo className="h-8 w-auto brightness-0 invert" />
          <ul className="flex items-center gap-1">
            <li className="relative">
              {/* Tap the mark to show the address, with a copy button (copying is wired in nami.js) */}
              <details className="mail-pop">
                <summary className={`${icon} cursor-pointer list-none [&::-webkit-details-marker]:hidden`} aria-label="Email">
                  <MailIcon />
                </summary>
                <div className="absolute bottom-full right-0 z-10 mb-3 w-max rounded-md bg-paper px-4 py-3 text-navy shadow-lg">
                  <p className="select-all text-[0.9375rem]">{site.email}</p>
                  <button
                    type="button"
                    data-copy={site.email}
                    className="mt-2 text-[0.8125rem] text-vermilion underline underline-offset-4"
                  >
                    <span data-copy-label>
                      <T ja="コピーする" en="Copy" />
                    </span>
                    <span data-copy-done hidden>
                      <T ja="コピーしました" en="Copied" />
                    </span>
                  </button>
                </div>
              </details>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className={icon} aria-label={`Instagram ${site.instagramHandle}`}>
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" className={icon} aria-label="Facebook">
                <FacebookIcon />
              </a>
            </li>
          </ul>
        </div>
        <p className="mt-10 text-[0.75rem] tracking-[0.08em] text-paper/40">© 2026 NAMI</p>
      </Container>
    </footer>
  );
}
