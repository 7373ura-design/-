import Image from "next/image";
import Link from "next/link";
import { background } from "@/data/brand";
import { site } from "@/data/site";
import { Container } from "@/components/ui";
import { Notes } from "@/components/blocks";
import { Art, PostHead, type ArtName } from "@/components/washi";
import { EmailButton, FacebookIcon, InstagramIcon, MailIcon } from "@/components/SocialIcons";
import { T, type Bi } from "@/lib/i18n";

/*
 * Sections of the home page (and the shared Card), set like the NAMI Instagram carousels:
 * an illustration across the page, then a centred block of kicker, serif
 * title, blue subline, a short rule and the post's own words.
 */

function Post({
  id,
  labelledBy,
  art,
  children,
  className = "",
}: {
  id?: string;
  labelledBy: string;
  art?: ArtName;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative scroll-mt-16 ${art ? "" : "section-rule"} ${className}`} aria-labelledby={labelledBy}>
      {art && <Art name={art} position="50% 100%" className="h-[clamp(200px,34vw,460px)]" />}
      <Container className="pb-24 pt-14 md:pb-32 md:pt-20">{children}</Container>
    </section>
  );
}

/** A picture card: photo, number, title and one line. */
export function Card({
  href,
  src,
  alt,
  no,
  title,
  line,
  ratio = "aspect-[4/3]",
  sizes,
}: {
  href: string;
  src: string;
  alt: string;
  no: string;
  title: string | Bi;
  line: Bi;
  ratio?: string;
  sizes: string;
}) {
  return (
    <Link href={href} className="group block text-center">
      <div className={`relative overflow-hidden bg-beige ${ratio}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </div>
      <p className="kicker mt-6 text-vermilion">{no}.</p>
      <h3 className="title mt-2 text-[1.5rem] transition-colors group-hover:text-deep">
        {typeof title === "string" ? title : <T ja={title.ja.replace("\n", "")} en={title.en} />}
      </h3>
      <p className="mt-1.5 text-[0.9375rem] text-navy/65">
        <T ja={line.ja} en={line.en} />
      </p>
      <p className="mt-3 text-[0.9375rem] text-vermilion">
        <T ja="写真をタップして詳細へ →" en="Tap the photo for details →" />
      </p>
    </Link>
  );
}

/* ------------------------------------------------------------- Background */

export function BackgroundSection() {
  return (
    <Post id="background" labelledBy="background-h" art="tea">
      <PostHead title={{ ja: "プロフィール", en: "About" }} id="background-h">
        <Notes items={background.items} />
      </PostHead>
    </Post>
  );
}

/* ---------------------------------------------------------------- Contact */

const contactButton =
  "flex min-h-14 w-full items-center justify-center gap-3 bg-navy px-6 text-[1.0625rem] text-paper transition-colors hover:bg-deep";

export function ContactSection() {
  return (
    <Post id="contact" labelledBy="contact-h" art="bridge">
      <PostHead title={{ ja: "お問い合わせ", en: "Contact" }} id="contact-h" />
      <p className="jp-body mx-auto mt-10 max-w-2xl text-center text-[1.0625rem] text-navy/80">
        <T ja={`${site.base.ja}。`} en={`${site.base.en}.`} />
        <br />
        <T ja="家づくりのご相談は、お気軽にどうぞ。" en="Get in touch any time about your home." />
      </p>
      <ul className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
        <li>
          <EmailButton className={contactButton} cardClassName="left-1/2 top-full mt-2 -translate-x-1/2">
            <MailIcon className="h-5 w-5" />
            <T ja="メール" en="Email" />
          </EmailButton>
        </li>
        <li>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className={contactButton}>
            <InstagramIcon className="h-5 w-5" />
            Instagram
          </a>
        </li>
        <li>
          <a href={site.facebook} target="_blank" rel="noopener noreferrer" className={contactButton}>
            <FacebookIcon className="h-5 w-5" />
            Facebook
          </a>
        </li>
      </ul>
    </Post>
  );
}
