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

## Images
The logo and all imagery come from the NAMI reference files in `design/reference/`
and are cut out by `python3 scripts/make-images-from-reference.py`. The reference
is low resolution, so before launch replace them with full-size originals:

| What | Where |
| --- | --- |
| Logo (horizontal / stacked / emblem) | `public/images/logo/` |
| Hero interior + waves, closing wave, surfer girl | `public/images/hero/`, `public/images/illustrations/` |
| Service, project and journal photos | `public/images/{services,projects,journal}/`, paths in `src/data/*.ts` |
| Domain, email, social links | `src/data/site.ts` (or `NEXT_PUBLIC_SITE_URL`) |
| Founder portrait and bio | `src/app/about/page.tsx` |

Projects are **NAMI CONCEPTS** (design studies) and are labelled as such everywhere. Add real work later with `category: "residential"` or `"monitor"`.
Journal articles are placeholders with `published: false` (shown as "Coming soon", `noindex`, excluded from the sitemap).

## Enquiry form
`POST /api/enquiry` validates the form and delivers it only if a provider is configured:

- **Resend**: `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL` (optional `ENQUIRY_FROM_EMAIL`)
- **Formspree**: `FORMSPREE_ENDPOINT`

With no provider, development logs the enquiry and shows a dev notice; production returns 503 and the form shows an error with the email address, so visitors are never told a message was sent when it wasn't.

## Deploy
Import the repo into Vercel with **Root Directory = `nami-website`**, and set the environment variables above.
