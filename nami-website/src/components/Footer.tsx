import Link from "next/link";
import { navigation, site } from "@/data/site";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui";
import { InstagramIcon } from "@/components/SocialIcons";
import { T } from "@/lib/i18n";

const heading = "text-[0.75rem] tracking-[0.12em] text-paper/45";

export function Footer() {
  return (
    <footer className="relative bg-navy text-paper">
      <Container className="pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1.2fr] md:gap-10">
          <div>
            {/* Single-colour (white) version of the logo for the dark ground */}
            <Logo className="h-9 w-auto brightness-0 invert" />
            <p className="mt-6 text-[0.9375rem] leading-relaxed text-paper/80">
              <T ja="ジャパンディ・インテリアデザイン" en="Japandi interior design" />
              <br />
              <T ja="シドニー" en="Sydney, Australia" />
            </p>
            <p className="mt-4 text-[0.75rem] tracking-[0.12em] text-paper/45">{site.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <p className={heading}>MENU</p>
            <ul className="mt-4 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline pb-0.5 text-[0.9375rem] text-paper/85 hover:text-paper">
                    {item.label.charAt(0) + item.label.slice(1).toLowerCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className={heading}>CONTACT</p>
            <p className="mt-4 text-[0.9375rem] text-paper/85">{site.email}</p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2.5 text-[0.9375rem] text-paper/85 transition-colors hover:text-paper"
            >
              <InstagramIcon className="h-[18px] w-[18px]" />
              {site.instagramHandle}
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-paper/10 pt-6 text-[0.75rem] tracking-[0.08em] text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 NAMI</p>
          <a href="#main" className="hover:text-paper">
            <T ja="ページの先頭へ ↑" en="Back to top ↑" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
