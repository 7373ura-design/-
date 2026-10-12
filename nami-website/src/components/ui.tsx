import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "@/components/illustrations/Icons";
import { T, type Bi } from "@/lib/i18n";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1360px] px-5 md:px-10 lg:px-16 ${className}`}>{children}</div>;
}

/** Splits "\n" into line breaks — used for the hand-set Japanese copy. */
export function Lines({ text }: { text: string }) {
  const parts = text.split("\n");
  return (
    <>
      {parts.map((line, i) => (
        <span key={i}>
          {line}
          {i < parts.length - 1 && <br />}
        </span>
      ))}
    </>
  );
}

export function SectionLabel({
  number,
  children,
  tone = "navy",
}: {
  number?: string;
  children: ReactNode;
  tone?: "navy" | "light";
}) {
  return (
    <p className={`label flex items-center gap-3 ${tone === "light" ? "text-paper/80" : "text-navy/75"}`}>
      {number && <span className="text-navy/40">{number}</span>}
      <span>{children}</span>
    </p>
  );
}

export function SectionHeader({
  number,
  label,
  heading,
  intro,
  tone = "navy",
  align = "left",
  as: Tag = "h2",
}: {
  number?: string;
  label: string;
  heading: Bi;
  intro?: Bi;
  tone?: "navy" | "light";
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto text-center [&_p.label]:justify-center" : ""}`} data-reveal>
      <SectionLabel number={number} tone={tone}>
        {label}
      </SectionLabel>
      <Tag
        className={`jp-heading mt-5 text-[1.75rem] leading-[1.5] sm:text-[2rem] lg:text-[2.35rem] ${tone === "light" ? "text-paper" : "text-navy"}`}
      >
        <T ja={heading.ja} en={heading.en} />
      </Tag>
      {intro && (
        <p
          className={`jp-body mt-6 text-[0.9375rem] ${center ? "mx-auto" : ""} max-w-xl ${tone === "light" ? "text-paper/80" : "text-navy/80"}`}
        >
          <T ja={intro.ja} en={intro.en} />
        </p>
      )}
    </div>
  );
}

type ArrowLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode;
  variant?: "text" | "solid" | "outline" | "light" | "pill";
};

export function ArrowLink({ children, variant = "text", className = "", ...props }: ArrowLinkProps) {
  const styles = {
    text: "text-navy hover:text-vermilion",
    solid: "bg-navy text-paper px-7 py-4 hover:bg-deep",
    outline: "border border-navy/50 text-navy px-6 py-3.5 hover:border-navy hover:bg-navy hover:text-paper",
    light: "border border-paper/60 text-paper px-6 py-3.5 hover:bg-paper hover:text-navy",
    pill: "bg-navy text-paper px-7 py-4 hover:bg-deep",
  }[variant];
  return (
    <Link
      {...props}
      className={`group label inline-flex items-center gap-3 transition-colors duration-500 ${styles} ${className}`}
    >
      <span className={variant === "text" ? "link-underline pb-1" : ""}>{children}</span>
      <ArrowRight className="h-2.5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
    </Link>
  );
}

/** The quiet link used across Home: underlined text, a short rule, no button. */
export function TextLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 text-[0.8125rem] tracking-[0.04em] text-navy transition-colors hover:text-vermilion ${className}`}
    >
      <span className="border-b border-current/30 pb-0.5 group-hover:border-current">{children}</span>
      <span aria-hidden className="h-px w-6 bg-current transition-all duration-500 group-hover:w-9" />
    </Link>
  );
}
