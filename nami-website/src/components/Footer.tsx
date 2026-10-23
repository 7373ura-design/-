import { site } from "@/data/site";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui";

/** Just the logo, the two ways to reach NAMI, and the year. */
export function Footer() {
  return (
    <footer className="relative bg-navy text-paper">
      <Container className="py-12 md:py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Single-colour (white) version of the logo for the dark ground */}
          <Logo className="h-8 w-auto brightness-0 invert" />
          <p className="flex flex-col gap-2 text-[0.9375rem] text-paper/80 sm:flex-row sm:gap-0">
            <span>{site.email}</span>
            <span aria-hidden className="hidden px-4 text-paper/30 sm:inline">
              /
            </span>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
              Instagram {site.instagramHandle}
            </a>
          </p>
        </div>
        <p className="mt-10 text-[0.75rem] tracking-[0.08em] text-paper/40">© 2026 NAMI</p>
      </Container>
    </footer>
  );
}
