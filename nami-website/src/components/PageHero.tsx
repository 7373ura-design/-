import type { ReactNode } from "react";
import { Container, Lines, SectionLabel } from "@/components/ui";

/** Shared hero for inner pages: label, Japanese headline, optional intro and art. */
export function PageHero({
  label,
  heading,
  intro,
  art,
}: {
  label: string;
  heading: string[];
  intro?: string;
  art?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-cream pt-32 md:pt-40">
      <Container className="relative grid items-end gap-12 pb-12 md:pb-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div data-reveal>
            <SectionLabel>{label}</SectionLabel>
          </div>
          <h1
            className="jp-heading mt-8 text-[2.25rem] leading-[1.5] text-navy sm:text-5xl lg:text-[3.75rem]"
            data-reveal
            style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
          >
            {heading.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          {intro && (
            <p
              className="jp-body mt-8 max-w-xl text-[0.9375rem] text-navy/80"
              data-reveal
              style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
            >
              <Lines text={intro} />
            </p>
          )}
        </div>
        {art && (
          <div className="relative lg:col-span-5" data-reveal style={{ "--reveal-delay": "250ms" } as React.CSSProperties}>
            {art}
          </div>
        )}
      </Container>
    </section>
  );
}
