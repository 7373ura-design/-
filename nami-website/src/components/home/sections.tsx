import Image from "next/image";
import Link from "next/link";
import { background } from "@/data/brand";
import { site } from "@/data/site";
import { getWorks } from "@/data/works";
import { Container } from "@/components/ui";
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
      <h3 className="title mt-2 text-[1.35rem] transition-colors group-hover:text-deep">
        {typeof title === "string" ? title : <T ja={title.ja.replace("\n", "")} en={title.en} />}
      </h3>
      <p className="mt-1.5 text-[0.8125rem] text-navy/65">
        <T ja={line.ja} en={line.en} />
      </p>
      <p className="mt-3 text-[0.8125rem] text-vermilion">
        <T ja="写真をタップして詳細へ →" en="Tap the photo for details →" />
      </p>
    </Link>
  );
}

/* ------------------------------------------------------------------ Works */

export function WorksSection() {
  const works = getWorks();
  return (
    <Post id="works" labelledBy="works-h">
      <PostHead kicker="WORKS" title={{ ja: "手がけた住まい", en: "Homes We Have Worked On" }} id="works-h">
        <T
          as="p"
          ja="写真をタップすると、それぞれの住まいのこだわりと、ほかの写真をご覧いただけます。"
          en="Tap a photo to see what shaped each home, with more pictures."
        />
      </PostHead>
      <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">
        {works.map((w) => (
          <Card
            key={w.slug}
            href={`/works/${w.slug}`}
            src={w.photos[0].src}
            alt={w.photos[0].alt}
            no={w.number}
            title={w.title}
            line={{ ja: `${w.type.ja} · ${w.location}`, en: `${w.type.en} · ${w.location}` }}
            sizes="(min-width:768px) 45vw, 90vw"
          />
        ))}
      </div>
    </Post>
  );
}

/* ------------------------------------------------------------- Background */

export function BackgroundSection() {
  return (
    <Post id="background" labelledBy="background-h" art="tea">
      <PostHead kicker="OUR BACKGROUND" title={background.heading} sub="JAPAN · AUSTRALIA · NEW ZEALAND" id="background-h">
        <T as="p" ja={background.body.ja} en={background.body.en} />
        {/* A plain list, ruled like a page of notes */}
        <dl className="mt-10 border-b border-navy/15">
          {background.items.map((b) => (
            <div key={b.title.en} className="grid gap-1 border-t border-navy/15 py-4 sm:grid-cols-[10.5rem_1fr] sm:gap-6">
              <dt className="title text-[1.05rem] !leading-snug">
                <T ja={b.title.ja} en={b.title.en} />
              </dt>
              <dd className="text-[0.875rem] leading-relaxed text-navy/75">
                <T ja={b.line.ja} en={b.line.en} />
              </dd>
            </div>
          ))}
        </dl>
      </PostHead>
    </Post>
  );
}

/* ---------------------------------------------------------------- Contact */

const contactButton =
  "flex min-h-14 w-full items-center justify-center gap-3 bg-navy px-6 text-[0.9375rem] text-paper transition-colors hover:bg-deep";

export function ContactSection() {
  return (
    <Post id="contact" labelledBy="contact-h" art="bridge">
      <PostHead kicker="CONTACT" title={{ ja: "お問い合わせ", en: "Get in Touch" }} sub="EMAIL · INSTAGRAM · FACEBOOK" id="contact-h">
        <T
          as="p"
          ja="ご相談やご質問は、メール、またはInstagram・FacebookのDMからお気軽にどうぞ。"
          en="For a chat about your home, email us or send a DM on Instagram or Facebook."
        />
      </PostHead>
      <ul className="mx-auto mt-12 grid max-w-2xl gap-3 sm:grid-cols-3">
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
