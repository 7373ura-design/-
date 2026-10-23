import Image from "next/image";
import { site } from "@/data/site";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui";
import { EmailButton, FacebookIcon, InstagramIcon, MailIcon } from "@/components/SocialIcons";

const icon = "flex h-11 w-11 items-center justify-center rounded-full text-paper/75 transition-colors hover:text-paper";

/** The logo, three marks (email, Instagram, Facebook) and the year. */
export function Footer() {
  return (
    <footer className="relative bg-navy text-paper">
      {/* The NAMI surfer riding over the top edge of the footer */}
      <Image
        src="/images/washi/surfer-mark.png"
        alt=""
        width={574}
        height={640}
        sizes="140px"
        className="pointer-events-none absolute left-1/2 top-0 h-auto w-[104px] -translate-x-1/2 -translate-y-[55%] md:w-[132px]"
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
