import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, TextLink } from "@/components/ui";
import { PostHead } from "@/components/washi";
import { getWork, getWorks } from "@/data/works";
import { T } from "@/lib/i18n";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getWorks().map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) return {};
  return {
    title: `${work.title.en} — ${work.location}`,
    description: `${work.type.en} in ${work.location}, by NAMI.`,
    alternates: { canonical: `/works/${work.slug}` },
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();
  const [cover, ...rest] = work.photos;
  const others = getWorks().filter((w) => w.slug !== work.slug);

  return (
    <div data-lightbox>
      <section className="pt-20 md:pt-24">
        <div className="relative h-[clamp(260px,52vw,720px)] w-full overflow-hidden bg-beige" data-lightbox-item>
          <Image src={cover.src} alt={cover.alt} fill priority sizes="100vw" className="object-cover" />
        </div>
        <Container className="pb-16 pt-14 md:pb-20 md:pt-20">
          <PostHead
            as="h1"
            no={work.number}
            kicker="WORKS"
            title={work.title}
            sub={`${work.type.en.toUpperCase()} · ${work.location.toUpperCase()}`}
            size="lg"
          />
        </Container>
      </section>

      {rest.length > 0 && (
        <section className="pb-24 md:pb-32" aria-label="Photos">
          <Container className="grid gap-6 md:grid-cols-2">
            {rest.map((p, i) => (
              <div
                key={p.src}
                className={`relative overflow-hidden bg-beige ${i % 3 === 2 || rest.length === 1 ? "aspect-[16/9] md:col-span-2" : "aspect-[4/3]"}`}
                data-reveal="image"
                data-lightbox-item
              >
                <Image src={p.src} alt={p.alt} fill sizes={i % 3 === 2 ? "100vw" : "(min-width: 768px) 50vw, 100vw"} className="object-cover" />
              </div>
            ))}
          </Container>
        </section>
      )}

      {others.length > 0 && (
        <section className="section-rule py-20 md:py-28" aria-labelledby="more-works">
          <Container>
            <PostHead kicker="MORE WORKS" title={{ ja: "ほかの住まい", en: "More Homes" }} id="more-works" />
            <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-3">
              {others.map((w) => (
                <Link key={w.slug} href={`/works/${w.slug}`} className="group block text-center">
                  <div className="relative aspect-[4/3] overflow-hidden bg-beige">
                    <Image src={w.photos[0].src} alt={w.photos[0].alt} fill sizes="(min-width:768px) 30vw, 90vw" className="object-cover transition-transform duration-[1600ms] group-hover:scale-[1.03]" />
                  </div>
                  <p className="kicker mt-6 text-vermilion">{w.number}.</p>
                  <h3 className="title mt-2 text-[1.35rem] transition-colors group-hover:text-deep">
                    <T ja={w.title.ja} en={w.title.en} />
                  </h3>
                  <p className="mt-1.5 text-[0.8125rem] text-navy/65">
                    <T ja={`${w.type.ja} · ${w.location}`} en={`${w.type.en} · ${w.location}`} />
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-14 text-center">
              <TextLink href="/projects">
                <T ja="プロジェクト一覧" en="All projects" />
              </TextLink>
            </div>
          </Container>
        </section>
      )}

    </div>
  );
}
