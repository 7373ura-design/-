import Image from "next/image";
import Link from "next/link";
import { background } from "@/data/brand";
import { site } from "@/data/site";
import { Container } from "@/components/ui";
import { Notes } from "@/components/blocks";
import { Art, PostHead, type ArtName } from "@/components/washi";
import { EmailButton, FacebookIcon, InstagramIcon, MailIcon } from "@/components/SocialIcons";
import { T, type Bi } from "@/lib/i18n";
import type { Lang } from "@/lib/lang";

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
      <PostHead kicker="ABOUT NAMI" title={{ ja: "日本出身の\nデザイナー。", en: "A designer\nfrom Japan." }} id="background-h">
        <Notes items={background.items} />
      </PostHead>
    </Post>
  );
}

/* ---------------------------------------------------------------- Contact */

const contactButton =
  "flex min-h-14 w-full items-center justify-center gap-3 bg-navy px-6 text-[1.0625rem] text-paper transition-colors hover:bg-deep";
const field = "mt-1.5 w-full border border-navy/25 bg-paper/70 px-3 py-2.5 text-[1rem] text-navy outline-none focus:border-navy";

/** Start a project: what we do and where, direct links, and an enquiry form (sent as an email). */
export function ContactSection({ lang }: { lang: Lang }) {
  const ja = lang === "ja";
  return (
    <Post id="contact" labelledBy="contact-h" art="bridge">
      <PostHead kicker="START A PROJECT" title={{ ja: "あなたの空間を、\n一緒に。", en: "Let\u2019s design\nyour space." }} id="contact-h">
        <p>
          <T
            ja="毎日のちょっとしたお悩みから、リノベーション、新築、お店やオフィスまで。何でもご相談ください。すべては、気軽なおしゃべりから。"
            en="From a small everyday worry to a full renovation, a new build or a new workplace, tell us anything. It all starts with a chat."
          />
        </p>
        <p className="mt-3">
          <T ja={`${site.base.ja}。`} en={`${site.base.en}.`} />
        </p>
        <p className="mt-3">
          <a href={`mailto:${site.email}`} className="text-vermilion hover:underline">
            {site.email}
          </a>
          <br />
          <a href={`tel:${site.phoneIntl}`} className="text-vermilion hover:underline">
            {site.phone}
          </a>
        </p>
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

      <form id="enquiry" data-enquiry={site.email} className="mx-auto mt-14 max-w-2xl scroll-mt-28 border border-navy/15 bg-cream/70 p-6 md:p-8">
        <p className="kicker text-vermilion">{ja ? "ご相談フォーム" : "PROJECT ENQUIRY"}</p>
        <p className="title mt-2 text-[1.5rem]">{ja ? "空間について、少し教えてください。" : "Tell us a little about your space."}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="text-[0.9375rem] text-navy/80">
            {ja ? "お名前 *" : "Name *"}
            <input name="name" required className={field} />
          </label>
          <label className="text-[0.9375rem] text-navy/80">
            {ja ? "メールアドレス *" : "Email *"}
            <input name="email" type="email" required className={field} />
          </label>
          <label className="text-[0.9375rem] text-navy/80">
            {ja ? "電話番号" : "Phone"}
            <input name="phone" type="tel" className={field} />
          </label>
          <label className="text-[0.9375rem] text-navy/80">
            {ja ? "ご相談の種類" : "Project type"}
            <select name="type" className={field} defaultValue={ja ? "住まい（新築・リノベーション）" : "Home (new build or renovation)"}>
              {(ja
                ? ["住まい（新築・リノベーション）", "住まい（1部屋・スタイリング）", "お店・オフィス", "その他"]
                : ["Home (new build or renovation)", "Home (single room or styling)", "Shop or office", "Other"]
              ).map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </label>
          <label className="text-[0.9375rem] text-navy/80 sm:col-span-2">
            {ja ? "ご相談内容" : "Tell us about your project"}
            <textarea name="message" rows={5} className={field} />
          </label>
        </div>
        <button type="submit" className="label mt-6 inline-flex items-center gap-2 bg-navy px-7 py-4 text-paper transition-colors hover:bg-deep">
          {ja ? "送信する" : "Send enquiry"} <span aria-hidden>→</span>
        </button>
        <p className="mt-3 text-[0.875rem] text-navy/60">
          {ja ? "送信すると、内容が入ったメールが開きます。そのまま送ってください。" : "Sending opens an email with your details filled in, ready to send."}
        </p>
      </form>
    </Post>
  );
}
