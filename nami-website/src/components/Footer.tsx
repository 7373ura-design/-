import Link from "next/link";
import { navigation, site } from "@/data/site";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui";

export function Footer() {
  return (
    <footer className="relative bg-navy text-paper">
      <Container className="pb-10 pt-14 md:pt-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr] md:gap-8">
          <div>
            <div className="inline-block rounded-[6px] bg-cream px-5 py-4">
              <Logo stacked className="h-24 w-auto" />
            </div>
            <p className="label mt-6 text-paper/75">{site.tagline}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="label link-underline pb-1 text-paper/90 hover:text-paper">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="space-y-3">
            {site.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label link-underline pb-1 text-paper/90 hover:text-paper"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="label mt-14 border-t border-paper/15 pt-6 !tracking-[0.18em] text-paper/60">
          © 2026 NAMI. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
