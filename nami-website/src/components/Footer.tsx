import { site } from "@/data/site";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui";
import { EmailButton, FacebookIcon, InstagramIcon, MailIcon } from "@/components/SocialIcons";

const icon = "flex h-11 w-11 items-center justify-center rounded-full text-paper/75 transition-colors hover:text-paper";

/** The logo, three marks (email, Instagram, Facebook) and the year. */
export function Footer() {
  return (
    <footer className="relative mt-[clamp(190px,20.84vw,300px)] bg-navy text-paper">
      {/* The top edge of the footer is the sea, in the manner of a Hokusai woodblock print:
          layers of waves with clawed foam, and the NAMI surfer riding the one that breaks.
          The picture keeps its right-hand end (and the surfer) on narrow screens. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/washi/footer-sea.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[calc(100%-1px)] block h-[clamp(190px,20.84vw,300px)] w-full"
      />
      <Container className="pb-12 pt-20 md:py-14">
        <div className="flex items-center justify-between gap-6">
          {/* Single-colour (white) version of the logo for the dark ground */}
          <Logo className="h-8 w-auto brightness-0 invert" />
          <ul className="flex items-center gap-1">
            <li>
              <EmailButton className={icon}>
                <MailIcon />
                <span className="sr-only">Email</span>
              </EmailButton>
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
