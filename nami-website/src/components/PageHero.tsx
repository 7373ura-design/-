import type { ReactNode } from "react";
import { Container } from "@/components/ui";
import { Art, PostHead, type ArtName } from "@/components/washi";
import { T, type Bi } from "@/lib/i18n";

/** Inner-page opener, like the first slide of a post: illustration, then the title block. */
export function PageHero({
  label,
  heading,
  sub,
  intro,
  art,
  artPosition,
  children,
}: {
  label: string;
  heading: Bi;
  sub?: string;
  intro?: Bi;
  art?: ArtName;
  artPosition?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-20 md:pt-24">
      {art && <Art name={art} priority position={artPosition} className="h-[clamp(220px,38vw,520px)]" />}
      <Container className={`pb-16 md:pb-24 ${art ? "pt-14 md:pt-20" : "pt-16 md:pt-24"}`}>
        <PostHead as="h1" kicker={label} title={heading} sub={sub} size="lg">
          {intro && <T ja={intro.ja} en={intro.en} />}
        </PostHead>
        {children && <div className="mx-auto mt-10 max-w-2xl">{children}</div>}
      </Container>
    </section>
  );
}
