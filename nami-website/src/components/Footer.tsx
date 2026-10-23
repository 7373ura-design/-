import { site } from "@/data/site";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui";
import { InstagramLink } from "@/components/SocialIcons";

export function Footer() {
  return (
    <footer className="relative bg-navy text-paper">
      <Container className="pb-10 pt-16 md:pt-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            {/* Single-colour (white) version of the logo for the dark ground */}
            <Logo className="h-9 w-auto brightness-0 invert" />
            <p className="mt-6 text-[0.75rem] tracking-[0.12em] text-paper/55">{site.tagline}</p>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-[0.9375rem] text-paper/90">{site.email}</p>
            <InstagramLink className="text-paper/75 hover:text-paper" />
          </div>
        </div>

        <p className="mt-16 border-t border-paper/10 pt-6 text-[0.75rem] tracking-[0.12em] text-paper/45">
          © 2026 NAMI. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
