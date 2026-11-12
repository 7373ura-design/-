import Image from "next/image";
import { site } from "@/data/site";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui";
import { EmailButton, FacebookIcon, InstagramIcon, MailIcon } from "@/components/SocialIcons";

const icon = "flex h-11 w-11 items-center justify-center rounded-full text-paper/75 transition-colors hover:text-paper";

/** The logo, three marks (email, Instagram, Facebook) and the year. */
export function Footer() {
  return (
    <footer className="relative mt-16 bg-navy text-paper md:mt-20">
      {/* The top edge of the footer is a wave, and the NAMI surfer rides its crest */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 bottom-full block h-12 w-full text-navy md:h-20"
      >
        <path
          fill="currentColor"
          d="M0 100V62C90 44 190 40 300 56S520 86 640 72 840 30 960 34 1090 66 1160 52 1240 6 1290 4 1360 38 1440 44V100Z"
        />
      </svg>
      <Image
        src="/images/washi/surfer-mark.png"
        alt=""
        width={574}
        height={640}
        sizes="140px"
        className="pointer-events-none absolute bottom-full left-[82%] h-auto w-[78px] md:left-[89.6%] -translate-x-1/2 translate-y-[38%] md:w-[120px] md:translate-y-[30%]"
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
