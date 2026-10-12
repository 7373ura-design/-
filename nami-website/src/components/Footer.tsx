import Link from "next/link";
import { navigation, site } from "@/data/site";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui";
import { SocialIcons } from "@/components/SocialIcons";

export function Footer() {
  return (
    <footer className="relative bg-navy text-paper">
      <Container className="pb-10 pt-16 md:pt-24">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr] md:gap-8">
          <div>
            {/* Single-colour (white) version of the logo for the dark ground */}
            <Logo className="h-9 w-auto brightness-0 invert" />
            <p className="mt-6 text-[0.6875rem] tracking-[0.3em] text-paper/55">{site.tagline}</p>
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

          <SocialIcons className="self-start" />
        </div>

        <p className="mt-20 border-t border-paper/10 pt-6 text-[0.6875rem] tracking-[0.18em] text-paper/45">
          © 2026 NAMI. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
