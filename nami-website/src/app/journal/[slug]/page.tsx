import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Photo } from "@/components/Photo";
import { JournalCard } from "@/components/cards";
import { ArrowLink, Container, SectionLabel } from "@/components/ui";
import { articles, getArticle } from "@/data/journal";
import { T } from "@/lib/i18n";

type Props = { params: Promise<{ slug: string }> };

/** "## " paragraphs become subheadings. */
function renderPara(p: string, i: number) {
  return p.startsWith("## ") ? (
    <h2 key={i} className="jp-heading !mt-12 text-2xl text-navy">
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
    <article className="bg-cream pt-32 md:pt-44">
      <Container className="max-w-4xl">
        <div data-reveal>
          <SectionLabel>{`JOURNAL — ${article.category}`}</SectionLabel>
        </div>
        <h1 className="mt-8 font-display text-5xl leading-tight text-navy md:text-6xl" data-reveal>
          {article.title}
        </h1>
        {article.titleJa && (
          <p className="jp-heading lang-ja mt-4 text-xl text-deep" lang="ja" data-reveal>
            {article.titleJa}
          </p>
        )}
        <p className="label mt-8 text-navy/60" data-reveal>
          {article.published ? `${article.date} · ${article.readingTime}` : "COMING SOON"}
        </p>
      </Container>
      <Container className="mt-12 max-w-5xl">
        <Photo image={article.cover} priority className="aspect-[16/9]" sizes="(min-width: 1024px) 64rem, 100vw" />
      </Container>
      <Container className="max-w-3xl py-16 md:py-24">
        <p className="jp-heading text-xl leading-[2] text-navy">
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
      <section className="border-t hairline py-20" aria-labelledby="more-articles">
        <Container>
          <h2 id="more-articles" className="font-display text-4xl text-navy">
            More from the Journal
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-3 [&_article]:w-auto">
            {more.map((a, i) => (
              <JournalCard key={a.slug} article={a} index={i} />
            ))}
          </div>
        </Container>
      </section>
    </article>
  );
}
