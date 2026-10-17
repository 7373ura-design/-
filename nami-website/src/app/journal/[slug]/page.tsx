import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PostHead } from "@/components/washi";
import { JournalCard } from "@/components/cards";
import { ArrowLink, Container } from "@/components/ui";
import { articles, getArticle } from "@/data/journal";
import { T } from "@/lib/i18n";

type Props = { params: Promise<{ slug: string }> };

/** "## " paragraphs become subheadings. */
function renderPara(p: string, i: number) {
  return p.startsWith("## ") ? (
    <h2 key={i} className="title !mt-12 text-[1.6rem]">
      {p.slice(3)}
    </h2>
  ) : (
    <p key={i}>{p}</p>
  );
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt.en,
    alternates: { canonical: `/journal/${article.slug}` },
    // Unpublished placeholders stay out of search results.
    robots: article.published ? undefined : { index: false, follow: true },
    openGraph: { type: "article", title: `${article.title} | NAMI`, description: article.excerpt.en },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <article className="pt-20 md:pt-24">
      <div className="relative h-[clamp(220px,40vw,540px)] w-full overflow-hidden">
        <Image src={article.cover.src} alt={article.cover.alt} fill priority sizes="100vw" className="object-cover" />
      </div>
      <Container className="max-w-4xl pt-14 text-center md:pt-20" >
        <div data-reveal>
          <p className="kicker">{`JOURNAL · ${article.category}`}</p>
          <h1 className="title mt-5 text-[2.4rem] md:text-[3.6rem]">{article.title}</h1>
          {article.titleJa && (
            <p className="subline lang-ja mt-3 !normal-case !tracking-[0.08em] text-[0.9375rem]" lang="ja">
              {article.titleJa}
            </p>
          )}
          <span className="rule mx-auto mt-6" aria-hidden />
          <p className="kicker mt-6 !text-navy/55">
            {article.published ? `${article.date} · ${article.readingTime}` : "COMING SOON"}
          </p>
        </div>
      </Container>
      <Container className="max-w-3xl py-16 md:py-24">
        <p className="jp-heading text-center text-xl leading-[2] text-navy">
          <T ja={article.excerpt.ja} en={article.excerpt.en} />
        </p>
        <div className="jp-body mt-10 text-base text-navy/85">
          <T
            as="div"
            className="space-y-6"
            ja={article.body.ja.map(renderPara)}
            en={article.body.en.map(renderPara)}
          />
        </div>
        <ArrowLink href="/journal" className="mt-14">
          BACK TO JOURNAL
        </ArrowLink>
      </Container>
      <section className="section-rule py-20 md:py-28" aria-labelledby="more-articles">
        <Container>
          <PostHead kicker="KEEP READING" title={{ ja: "More from the Journal", en: "More from the Journal" }} id="more-articles" />
          <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-3 [&_article]:w-auto">
            {more.map((a, i) => (
              <JournalCard key={a.slug} article={a} index={i} />
            ))}
          </div>
        </Container>
      </section>
    </article>
  );
}
