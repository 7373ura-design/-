# NAMI — Website

Japanese perspective on contemporary Australian living.
Next.js (App Router) · TypeScript · Tailwind CSS v4.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also type-checks)
npm run typecheck
```

## Pages
`/` · `/about` · `/services` · `/projects` (+ `/projects/[slug]`) · `/contact` · `/journal` (+ `/journal/[slug]`)

## What to replace
| What | Where |
| --- | --- |
| **Official logo** (current file is a placeholder) | `public/images/logo/nami-logo.svg` — same filename, no code change |
| Photography (current images are generated placeholders) | `public/images/{hero,services,projects,journal}/`, then update paths in `src/data/*.ts` |
| Surfer illustration (currently inline SVG) | `src/components/illustrations/Surfer.tsx` |
| Domain, email, social links | `src/data/site.ts` (or `NEXT_PUBLIC_SITE_URL`) |
| Services / Projects / Journal content | `src/data/services.ts`, `projects.ts`, `journal.ts` |
| Founder portrait and bio | `src/app/about/page.tsx` |

Placeholder images can be regenerated with `node scripts/generate-placeholders.mjs`.

Projects are **NAMI CONCEPTS** (design studies) and are labelled as such everywhere. Add real work later with `category: "residential"` or `"monitor"`.
Journal articles are placeholders with `published: false` (shown as "Coming soon", `noindex`, excluded from the sitemap).

## Enquiry form
`POST /api/enquiry` validates the form and delivers it only if a provider is configured:

- **Resend**: `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL` (optional `ENQUIRY_FROM_EMAIL`)
- **Formspree**: `FORMSPREE_ENDPOINT`

With no provider, development logs the enquiry and shows a dev notice; production returns 503 and the form shows an error with the email address, so visitors are never told a message was sent when it wasn't.

## Deploy
Import the repo into Vercel with **Root Directory = `nami-website`**, and set the environment variables above.
