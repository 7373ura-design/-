import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/ui";
import { Card } from "@/components/home/sections";
import { getWorks } from "@/data/works";

export const metadata: Metadata = {
  title: "Projects",
  description: "Homes NAMI has worked on.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  const works = getWorks();
  return (
    <>
      <PageHero
        label="PROJECTS"
        heading={{ ja: "手がけた住まい", en: "Homes We Have Worked On" }}
        sub="SELECTED WORKS"
        art="village"
      />
      <section className="pb-24 md:pb-32" aria-label="Projects">
        <Container>
          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
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
        </Container>
      </section>
    </>
  );
}
