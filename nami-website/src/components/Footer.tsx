import Link from "next/link";
import { navigation, site } from "@/data/site";
import { Logo } from "@/components/Logo";
import { SurferMini } from "@/components/illustrations/Surfer";
import { Container } from "@/components/ui";

export function Footer() {
  return (
    <footer className="relative bg-navy text-paper">
      <Container className="pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr] md:gap-8">
          <div>
            <Logo tone="light" className="h-12 w-auto" />
            <p className="label mt-6 text-paper/70">{site.tagline}</p>
            <p className="jp-body mt-4 max-w-xs text-sm leading-[2.05] text-paper/70">
              Japanese perspective on
              <br />
              contemporary Australian living.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="label mb-5 text-aqua">MENU</p>
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

          <div className="flex flex-col justify-between gap-10">
            <div>
              <p className="label mb-5 text-aqua">FOLLOW</p>
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
            <SurferMini className="w-36 self-start md:self-end" title="NAMIの波乗りの人" />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-paper/15 pt-6 text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p className="label !tracking-[0.18em]">© 2026 NAMI. All rights reserved.</p>
          <p className="label !tracking-[0.18em]">Japan × Australia</p>
        </div>
      </Container>
    </footer>
  );
}
