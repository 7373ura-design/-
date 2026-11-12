import { site } from "@/data/site";
import { background, services } from "@/data/brand";
import { getWorks } from "@/data/works";
import { answeredFaq } from "@/data/faq";

export const dynamic = "force-static";

/** /llms.txt: a plain-text summary of NAMI for AI assistants (see llmstxt.org). */
export function GET() {
  const abs = (p: string) => new URL(p, site.url).toString();
  const lines = [
    "# NAMI",
    "",
    `> ${site.description.en}`,
    "",
    `NAMI (${site.tagline}) is a Japandi interior design studio based in Sydney, Australia, working across Australia and in New Zealand. The designer is from Japan. Consultations in English and Japanese.`,
    "",
    "## Services",
    ...services.items.map((s) => `- ${s.title.en}: ${s.line.en}`),
    "",
    "## About the designer",
    ...background.items.map((b) => `- ${b.title.en}: ${b.line.en}`),
    "",
    "## Projects",
    ...getWorks().map((w) => `- [${w.title.en}](${abs(`/works/${w.slug}`)}): ${w.type.en}. ${w.lead.en}`),
    "",
    "## FAQ",
    ...answeredFaq().flatMap((g) => g.items.map((i) => `### ${i.q.en}\n${i.a.en}\n`)),
    "## Contact",
    `- Email: ${site.email}`,
    `- Instagram: ${site.instagram}`,
    `- Facebook: ${site.facebook}`,
    `- Website (English): ${abs("/")}`,
    `- Website (Japanese): ${abs("/ja")}`,
    `- FAQ: ${abs("/faq")}`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
