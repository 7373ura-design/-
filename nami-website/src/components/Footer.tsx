import Image from "next/image";
import { site } from "@/data/site";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui";
import { EmailButton, FacebookIcon, InstagramIcon, MailIcon } from "@/components/SocialIcons";

const icon = "flex h-11 w-11 items-center justify-center rounded-full text-paper/75 transition-colors hover:text-paper";

/** The logo, three marks (email, Instagram, Facebook) and the year. */
export function Footer() {
  return (
    <footer className="relative mt-36 bg-navy text-paper md:mt-64">
      {/* The top edge of the footer is the sea: a gentle swell across the page that
          builds on the right into a breaking wave, with the NAMI surfer on its face */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-full block h-8 w-full text-navy md:h-14"
      >
        <path fill="currentColor" d="M0 60V40C120 26 240 24 360 34S600 50 720 42 960 26 1080 34 1200 52 1440 58V60Z" />
      </svg>
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[calc(100%-2px)] right-0 aspect-[2/1] w-[300px] md:w-[540px]">
        <Image src="/images/washi/footer-wave.svg" alt="" fill sizes="540px" className="object-contain" />
        <Image
          src="/images/washi/surfer-mark.png"
          alt=""
          width={574}
          height={640}
          sizes="110px"
          className="absolute bottom-[8.9%] right-[20.7%] h-auto w-[19.3%]"
        />
      </div>
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
