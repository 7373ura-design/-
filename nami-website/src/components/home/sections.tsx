import Image from "next/image";
import Link from "next/link";
import { approach, approachIcons, meanings, meaningsIntro, roots, story } from "@/data/brand";
import { services } from "@/data/services";
import { craft, craftIntro } from "@/data/craft";
import { projects } from "@/data/projects";
import { getArticles } from "@/data/journal";
import { Container, Lines, TextLink } from "@/components/ui";
import { Art, IconList, PostHead, type IconName } from "@/components/washi";
import { T, type Bi } from "@/lib/i18n";

/*
 * Home is set like the NAMI Instagram carousels, one post after another:
 * an illustration across the page, then a centred block of kicker, serif
 * title, blue subline, a short rule and a few lines of text.
 */

/** Paragraphs in both languages. */
export function Paras({ ja, en, gap = "mt-4" }: { ja: string[]; en: string[]; gap?: string }) {
  const render = (list: string[]) =>
    list.map((p, i) => (
      <p key={i} className={i ? gap : ""}>
        <Lines text={p} />
      </p>
    ));
  return <T as="div" ja={render(ja)} en={render(en)} />;
}

function Post({
  id,
  labelledBy,
  art,
  children,
  className = "",
}: {
  id?: string;
  labelledBy: string;
  art?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative scroll-mt-16 ${className}`} aria-labelledby={labelledBy}>
      {art}
      <Container className="pb-24 pt-14 md:pb-32 md:pt-20">{children}</Container>
    </section>
  );
}

/* ------------------------------------------------------------------ Story */

export function StorySection() {
  return (
    <Post id="story" labelledBy="story-h" art={<Art name="wave-sun" position="50% 100%" className="h-[clamp(200px,34vw,460px)]" />}>
      <PostHead no="01" kicker="OUR STORY" title={story.heading} sub="LIFE MOVES IN WAVES" id="story-h">
        <Paras ja={story.body.ja} en={story.body.en} gap="mt-4" />
      </PostHead>
      <div className="mt-10 text-center">
        <TextLink href="/about">
          <T ja="NAMIについて" en="About NAMI" />
        </TextLink>
      </div>
    </Post>
  );
}

/* --------------------------------------------------------------- Meanings */

const meaningNames: Bi[] = [
  { ja: "波", en: "波  Waves" },
  { ja: "並", en: "並  Side by Side" },
  { ja: "N.A.M.I", en: "N.A.M.I" },
];

export function MeaningsSection() {
  return (
    <Post id="meaning" labelledBy="meaning-h" art={<Art name="scrolls" position="50% 40%" />}>
      <PostHead kicker="THE NAME" title={meaningsIntro.heading} sub="THE STORY BEHIND NAMI" id="meaning-h">
        <T as="p" ja={meaningsIntro.body.ja} en={meaningsIntro.body.en} />
      </PostHead>

      <ol className="mx-auto mt-14 grid max-w-5xl gap-12 md:grid-cols-3 md:gap-10">
        {meanings.map((m, i) => (
          <li key={m.number} className="text-center" data-reveal style={{ "--reveal-delay": `${i * 110}ms` } as React.CSSProperties}>
            <p className="kicker text-vermilion">{m.number}.</p>
            <p aria-hidden className={`mt-4 leading-none text-navy ${/^[A-Z]$/.test(m.kanji) ? "font-display text-[3.4rem]" : "font-jp text-[3.4rem] font-light"}`}>
              {m.kanji}
            </p>
            <h3 className="title mt-5 text-[1.35rem]">
              <T ja={meaningNames[i].ja} en={meaningNames[i].en} />
            </h3>
            <p className="subline mt-2 !normal-case !tracking-[0.04em] text-[0.8125rem]">
              <T ja={m.lead.ja} en={m.lead.en} />
            </p>
            <div className="jp-body mx-auto mt-4 max-w-[22em] text-[0.875rem] text-navy/75">
              <T as="p" ja={m.body.ja[0]} en={m.body.en[0]} />
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-14 text-center">
        <TextLink href="/about">
          <T ja="名前の由来をもっと読む" en="Read more about the name" />
        </TextLink>
      </div>
    </Post>
  );
}

/* --------------------------------------------------------------- Approach */

const approachIconNames: IconName[] = ["leaf", "infinity", "chair", "home"];

export function ApproachSection() {
  return (
    <Post id="approach" labelledBy="approach-h" art={<Art name="shoji" />}>
      <PostHead no="02" kicker="IN BETWEEN" title={approach.heading} sub="NOT COPYING. REINTERPRETING." id="approach-h">
        <T as="p" ja={approach.body.ja} en={approach.body.en} />
      </PostHead>
      <IconList
        className="mt-14 sm:grid sm:grid-cols-2 sm:gap-x-16 sm:gap-y-8 sm:space-y-0"
        items={approachIcons.map((a, i) => ({
          icon: approachIconNames[i],
          title: a.title,
          line: { ja: a.body.ja.replace("\n", ""), en: a.body.en.replace("\n", " ") },
        }))}
      />
    </Post>
  );
}

/* ------------------------------------------------------------------ Craft */

export function CraftSection() {
  return (
    <Post id="craft" labelledBy="craft-h" art={<Art name="maple-island" position="50% 100%" className="h-[clamp(200px,34vw,460px)]" />}>
      <PostHead
        kicker="JAPANESE HOME CRAFT"
        title={{ ja: "日本の家づくりから、\n学ぶこと。", en: "What Japanese Homes\nTeach Us" }}
        sub="THE THINKING, NOT THE FORMS"
        id="craft-h"
      >
        <T as="p" ja={craftIntro.ja} en={craftIntro.en} />
      </PostHead>

      <ol className="mx-auto mt-16 grid max-w-5xl gap-x-14 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {craft.map((c, i) => (
          <li key={c.title} data-reveal style={{ "--reveal-delay": `${(i % 3) * 90}ms` } as React.CSSProperties}>
            <p className="kicker">
              <span className="mr-3 text-vermilion">{c.number}.</span>
              {c.title}
            </p>
            <h3 className="title mt-3 text-[1.25rem] !leading-snug">
              <T ja={c.heading.ja} en={c.heading.en} />
            </h3>
            <p className="jp-body mt-3 text-[0.8125rem] leading-[1.95] text-navy/75">
              <T ja={c.body.ja} en={c.body.en} />
            </p>
          </li>
        ))}
      </ol>
      <p className="mx-auto mt-14 max-w-2xl text-center text-[0.75rem] leading-relaxed text-navy/55">
        <T
          ja="NAMIはインテリアデザインのブランドです。建築・施工など資格が必要な工事は、有資格の建築会社・専門家が担当します。"
          en="NAMI is an interior design brand. Building work and other regulated services are carried out by licensed builders and professionals."
        />
      </p>
    </Post>
  );
}

/* ------------------------------------------------------------------ Roots */

const rootIcons: IconName[] = ["home", "sun", "compass"];

/** Japan Homes: the connection, what it gives clients, and who does what. */
export function RootsSection() {
  return (
    <Post id="roots" labelledBy="roots-h" art={<Art name="gum-frame" position="50% 100%" className="h-[clamp(220px,36vw,500px)]" />}>
      <PostHead kicker="OUR ROOTS" title={roots.heading} sub="TOGETHER WITH JAPAN HOMES" id="roots-h">
        <T as="p" ja={roots.body.ja} en={roots.body.en} />
      </PostHead>
      <IconList
        className="mt-12"
        items={roots.points.map((p, i) => ({ icon: rootIcons[i], title: p.title, line: p.line }))}
      />
      <p className="jp-body mx-auto mt-12 max-w-[30em] text-center text-[0.8125rem] text-navy/65">
        <T ja={roots.note.ja} en={roots.note.en} />
      </p>
    </Post>
  );
}

/* --------------------------------------------------------------- Services */

function Card({
  href,
  src,
  alt,
  no,
  title,
  line,
  ratio = "aspect-[4/5]",
  sizes,
}: {
  href: string;
  src: string;
  alt: string;
  no: string;
  title: string;
  line: Bi;
  ratio?: string;
  sizes: string;
}) {
  return (
    <Link href={href} className="group block text-center" data-reveal>
      <div className={`relative overflow-hidden bg-beige ${ratio}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[1600ms] ease-[var(--ease-wave)] group-hover:scale-[1.03]"
        />
      </div>
      <p className="kicker mt-6 text-vermilion">{no}.</p>
      <h3 className="title mt-2 text-[1.35rem] transition-colors group-hover:text-deep">{title}</h3>
      <p className="mt-1.5 text-[0.8125rem] text-navy/65">
        <T ja={line.ja} en={line.en} />
      </p>
    </Link>
  );
}

export function ServicesPreview() {
  return (
    <Post id="services" labelledBy="services-h" className="section-rule">
      <PostHead
        kicker="WHAT WE DO"
        title={{ ja: "暮らしを整える、\n4つのサービス。", en: "Four Ways to\nShape Your Home" }}
        sub="FROM FIRST CONVERSATION TO FINAL TOUCH"
        id="services-h"
      >
        <T
          as="p"
          ja="住まいのご相談から、コンセプトづくり、空間プランニング、スタイリングまで。ライフスタイルに合わせた空間づくりをサポートします。"
          en="From a first conversation to concept, space planning and styling, we help create spaces that suit the way you live."
        />
      </PostHead>
      <div className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <Card
            key={s.slug}
            href={`/services#${s.slug}`}
            src={s.image.src}
            alt={s.image.alt}
            no={s.number}
            title={s.title}
            line={s.sub}
            sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 90vw"
          />
        ))}
      </div>
      <div className="mt-14 text-center">
        <TextLink href="/services">
          <T ja="サービスの詳細" en="All services" />
        </TextLink>
      </div>
    </Post>
  );
}

/* --------------------------------------------------------------- Projects */

export function ProjectsPreview() {
  return (
    <Post id="projects" labelledBy="projects-h" art={<Art name="pavilion" position="50% 100%" className="h-[clamp(200px,34vw,460px)]" />}>
      <PostHead
        kicker="NAMI CONCEPTS"
        title={{ ja: "暮らしの波を、\nかたちに。", en: "Giving Shape\nto Life’s Waves" }}
        sub="CONCEPT STUDIES, NOT CLIENT WORK"
        id="projects-h"
      >
        <T
          as="p"
          ja="NAMIの考え方をもとにしたコンセプトプロジェクトです。（今後は実際のプロジェクトも掲載していきます）"
          en="Concept projects that show how NAMI thinks. Real client projects will be added in future."
        />
      </PostHead>
      <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-3">
        {projects.map((p) => (
          <Card
            key={p.slug}
            href={`/projects/${p.slug}`}
            src={p.cover.src}
            alt={p.cover.alt}
            no={p.number}
            title={p.title}
            line={{ ja: p.subtitle, en: p.subtitle }}
            sizes="(min-width:768px) 30vw, 90vw"
          />
        ))}
      </div>
      <div className="mt-14 text-center">
        <TextLink href="/projects">
          <T ja="プロジェクト一覧" en="All projects" />
        </TextLink>
      </div>
    </Post>
  );
}

/* ---------------------------------------------------------------- Journal */

export function JournalPreview() {
  const list = getArticles().slice(0, 3);
  return (
    <Post id="journal" labelledBy="journal-h" className="section-rule">
      <PostHead
        kicker="JOURNAL"
        title={{ ja: "暮らしを考える、\nヒントを届ける。", en: "Ideas for\nAustralian Living" }}
        sub="NOTES ON HOMES, MATERIALS AND CULTURE"
        id="journal-h"
      />
      <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-3">
        {list.map((a, i) => (
          <Card
            key={a.slug}
            href={`/journal/${a.slug}`}
            src={a.cover.src}
            alt={a.cover.alt}
            no={String(i + 1).padStart(2, "0")}
            title={a.title}
            line={{ ja: a.titleJa ?? a.title, en: a.category.charAt(0) + a.category.slice(1).toLowerCase() }}
            ratio="aspect-[3/2]"
            sizes="(min-width:768px) 30vw, 90vw"
          />
        ))}
      </div>
      <div className="mt-14 text-center">
        <TextLink href="/journal">
          <T ja="すべての記事" en="All articles" />
        </TextLink>
      </div>
    </Post>
  );
}
