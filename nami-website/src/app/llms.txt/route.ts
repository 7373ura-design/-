import { site } from "@/data/site";
import { background, strengths } from "@/data/brand";
import { glossary, homeServices } from "@/data/homes";
import { commercialFaq, freeProposal, sectors } from "@/data/commercial";
import { getWorks } from "@/data/works";
import { concepts } from "@/data/concepts";
import { answeredFaq, type Faq } from "@/data/faq";

export const dynamic = "force-static";

/** /llms.txt: a plain-text summary of NAMI for AI assistants (see llmstxt.org). */
export function GET() {
  const abs = (p: string) => new URL(p, site.url).toString();
  const qa = (items: Faq[]) => items.filter((i) => i.a).map((i) => `### ${i.q.en}\n${i.a!.en}\n`);
  const lines = [
    "# NAMI",
    "",
    `> ${site.description.en}`,
    "",
    `NAMI (${site.tagline}) is a Japandi interior design studio based in Sydney, Australia. The designer is from Japan. Two services: homes, and shops and offices. Building work is done by NAMI's licensed partner, Japan Homes. Consultations in English and Japanese.`,
    "",
    "## Why NAMI",
    ...strengths.map((s) => `- ${s.title.en}: ${s.line.en}`),
    "",
    `## Homes (${abs("/homes")})`,
    ...homeServices.map((s) => `- ${s.title.en}: ${s.line.en}`),
    "",
    "### Projects",
    ...getWorks().map((w) => `- [${w.title.en}](${abs(`/homes/projects/${w.slug}`)}): ${w.type.en}. ${w.lead.en}`),
    "",
    "### Japanese design words",
    ...glossary.map((g) => `- ${g.term} (${g.kana}): ${g.what.en} How NAMI uses it: ${g.use.en}`),
    "",
    `## Shops and offices (${abs("/commercial")})`,
    "Free design proposal (when built with Japan Homes; limited places):",
    ...freeProposal.map((s) => `- ${s.title.en}: ${s.line.en}`),
    "Concept projects (design visualisations; Engawa Office is a sample for a fictional company):",
    ...concepts.map((c) => `- [${c.title}](${abs(`/commercial/concepts/${c.slug}`)}): ${c.kind.en}. ${c.lead.en}`),
    "Who we design for:",
    ...sectors.map((s) => `- ${s.title.en}: ${s.line.en}`),
    "",
    "## About the designer",
    ...background.items.map((b) => `- ${b.title.en}: ${b.line.en}`),
    "",
    "## FAQ: homes",
    ...answeredFaq().flatMap((g) => qa(g.items)),
    "## FAQ: shops and offices",
    ...qa(commercialFaq),
    "## Contact",
    `- Email: ${site.email}`,
    `- Instagram: ${site.instagram}`,
    `- Facebook: ${site.facebook}`,
    `- Website (English): ${abs("/")}`,
    `- Website (Japanese): ${abs("/ja")}`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
