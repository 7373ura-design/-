import type { ReactNode } from "react";
import { Container, SectionLabel } from "@/components/ui";
import { T, type Bi } from "@/lib/i18n";

/** Shared hero for inner pages: label, Japanese headline, optional intro and art. */
export function PageHero({
  label,
  heading,
  intro,
  art,
}: {
  label: string;
  heading: Bi;
  intro?: Bi;
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
            <T ja={heading.ja} en={heading.en} />
          </h1>
          {intro && (
            <p
              className="jp-body mt-8 max-w-xl text-[0.9375rem] text-navy/80"
              data-reveal
              style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
            >
              <T ja={intro.ja} en={intro.en} />
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
