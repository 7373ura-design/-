import { site } from "@/data/site";
import { background, strengths } from "@/data/brand";
import { beyondSteps, everydayDesign, homeCategories, homeStyles } from "@/data/homes";
import { commercialFaq, freeProposal, sectors } from "@/data/commercial";
import { getWorks } from "@/data/works";
import { concepts } from "@/data/concepts";
import { services } from "@/data/services";
import { guides } from "@/data/guides";
import { areas } from "@/data/areas";
import { kindWords, story } from "@/data/nami";
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
    `NAMI (${site.tagline}) is a Japandi interior design studio based in Sydney, Australia. The designer is from Japan. Two services: homes, and shops and offices. NAMI and its partner Japan Homes do not do building work themselves: through Japan Homes' 20+ years of connections, NAMI arranges licensed builders, and the client contracts the builder directly. Consultations in English and Japanese.`,
    "",
    "## Why NAMI",
    ...strengths.map((s) => `- ${s.title.en}: ${s.line.en}`),
    "",
    `## Homes (${abs("/homes")})`,
    ...homeCategories.map((c) => `- ${c.title.en}: ${c.line.en} ${c.ideas.en}`),
    "",
    "### Styles (not only Japanese)",
    ...homeStyles.map((s) => `- ${s.title.en}: ${s.line.en}`),
    "",
    "### Beyond designing the house",
    ...beyondSteps.map((s) => `- ${s.title.en}: ${s.line.en}`),
    `- If you'd like, we also help with: ${everydayDesign.map((e) => e.title.en.toLowerCase()).join(", ")}`,
    "",
    "### Projects",
    ...getWorks().map((w) => `- [${w.title.en}](${abs(`/homes/projects/${w.slug}`)}): ${w.type.en}. ${w.lead.en}`),
    "",
    `## Shops and offices (${abs("/commercial")})`,
    "Launch offer: free design proposal for 10 businesses (when the build is arranged through NAMI and Japan Homes):",
    ...freeProposal.map((s) => `- ${s.title.en}: ${s.line.en}`),
    "Concept projects (design visualisations; Engawa Office is a sample for a fictional company):",
    ...concepts.map((c) => `- [${c.title}](${abs(`/commercial/concepts/${c.slug}`)}): ${c.kind.en}. ${c.lead.en}`),
    "Who we design for:",
    ...sectors.map((s) => `- ${s.title.en}: ${s.line.en}`),
    "",
    "## Services (one page each)",
    ...services.map((x) => `- [${x.title.en}](${abs(`/services/${x.slug}`)}): ${x.line.en}`),
    "",
    "## Guides",
    ...guides.map((g) => `- [${g.title.en}](${abs(`/guides/${g.slug}`)}): ${g.description.en}`),
    "",
    "## Areas",
    ...areas.map((a) => `- [${a.name.en}](${abs(`/areas/${a.slug}`)}): ${a.lead.en}`),
    "",
    "## Our story",
    ...story.map((p) => `- ${p.title.en} ${p.body.en}`),
    "",
    "## Kind words (clients, initials only)",
    ...kindWords.map((k) => `- "${k.quote.en}" (${k.who}, ${k.place.en})`),
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
