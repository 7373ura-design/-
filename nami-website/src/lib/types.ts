import type { Bi, BiList } from "@/lib/i18n";

export type ImageAsset = {
  src: string;
  alt: string;
};

export type Service = {
  slug: string;
  number: string;
  title: string;
  /** Short description under the title (Japanese / English). */
  sub: Bi;
  summary: Bi;
  /** The Japanese idea behind the service. */
  idea: { term: string; text: Bi };
  whatItIs: Bi;
  whoFor: BiList;
  included: BiList;
  process: { step: string; detail: Bi }[];
  deliverables: BiList;
};





