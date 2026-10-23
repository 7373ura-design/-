# Building the NAMI site in Webflow

Notes for rebuilding this site in Webflow with the Webflow connector. Everything
here is already in this folder; treat the Next.js site as the source of truth.

## Site

- Create a new Webflow site named **NAMI** (blank, no template).
- Locales: Japanese (primary) and English. The words for both are in
  `src/data/brand.ts`, `src/data/services.ts` and the page files in `src/app/`.

## Look

- Paper background `#f2e8d9`, with the washi texture from `body::before` in
  `src/app/globals.css` (three SVG noise layers, multiply, opacity 0.55).
- Colours: navy `#1e3a5c` (text), deep `#2a5b86`, ocean `#2a8bc0` (sublines),
  vermilion `#e8553b` (accents, buttons), beige `#e4d5bf`, paper `#f6efe3`.
- One typeface for everything, Japanese and English: **Shippori Mincho**
  (Google Fonts, 400/500/600/700). Titles 500, body 400.
- Section heads: from tablet up, two columns. In Japanese the title and its
  small English label stand vertically (writing-mode: vertical-rl) on the right,
  the text on the left. In English the title is on the left. Phones stack them.
- No animation anywhere.
- Illustrations: `public/images/washi/*.jpg`, full width between sections.

## Pages

A portfolio site: one home page plus a page for each of the four homes.

| Page | Illustration | Content |
| --- | --- | --- |
| Home | `surfer-wide.jpg` (hero), `tea`, `gum-frame`, `bridge` | Hero, Works (the four homes), About (Background, Japan Homes), Contact (`src/app/page.tsx`) |
| Project × 4 | — | 12 photos each from `public/images/portfolio/<home>/`, with a photo viewer |

Menu: WORKS / ABOUT / CONTACT (links to the sections of the home page), the
logo goes to the top, plus 日本語 / EN.

## Contact

No form. Contact is by email or Instagram DM:

- Email: **hello@nami-studio.com.au**
- Instagram: the only outside link on the site (account URL still to come;
  `site.instagram` in `src/data/site.ts`).
