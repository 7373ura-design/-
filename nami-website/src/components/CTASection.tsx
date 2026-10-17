import Link from "next/link";
import { site } from "@/data/site";
import { Art, CircleIcon, PostHead, type IconName } from "@/components/washi";
import { Container } from "@/components/ui";
import { T, type Bi } from "@/lib/i18n";

const next: { icon: IconName; href: string; title: Bi; line: Bi; external?: boolean }[] = [
  {
    icon: "chat",
    href: "/contact",
    title: { ja: "相談する", en: "Make an Enquiry" },
    line: { ja: "住まいのこと、まずはお気軽に", en: "Tell us about your home" },
  },
  {
    icon: "home",
    href: "/projects",
    title: { ja: "手がけた住まいを見る", en: "See Our Projects" },
    line: { ja: "これまでの住まい", en: "Homes we have worked on" },
  },
  {
    icon: "heart",
    href: site.social[0].href,
    title: { ja: "Instagramをフォロー", en: "Follow NAMI" },
    line: { ja: "新しい投稿をお届けします", en: "New posts on Instagram" },
    external: true,
  },
];

/** Closing post: Sydney Harbour, an invitation, and three next steps. */
export function CTASection() {
  return (
    <section className="relative" aria-labelledby="cta-heading">
      <Art name="harbour" position="50% 100%" className="h-[clamp(200px,34vw,460px)]" />
      <Container className="pb-24 pt-14 md:pb-32 md:pt-20">
        <PostHead
          kicker="GET TO KNOW NAMI"
          title={{ ja: "一緒に、\n心地よい空間をつくりませんか？", en: "Shall We Create a Space\nThat Feels Like Yours?" }}
          sub="THIS IS JUST THE BEGINNING"
          id="cta-heading"
        />
        <ul className="mx-auto mt-12 w-fit space-y-6">
          {next.map((n) => (
            <li key={n.icon}>
              <Link
                href={n.href}
                {...(n.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center gap-5"
              >
                <span className="transition-colors group-hover:[&>span]:border-vermilion group-hover:[&>span]:text-vermilion">
                  <CircleIcon name={n.icon} />
                </span>
                <span>
                  <span className="title block text-[1.2rem] !leading-snug transition-colors group-hover:text-deep">
                    <T ja={n.title.ja} en={n.title.en} />
                  </span>
                  <span className="mt-0.5 block text-[0.8125rem] text-navy/70">
                    <T ja={n.line.ja} en={n.line.en} />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
