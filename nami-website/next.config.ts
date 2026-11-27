import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // One 404 page for addresses that match nothing (there is a root layout per language)
  experimental: { globalNotFound: true },
  // The site is now one page plus the project pages; old addresses land on their section
  async redirects() {
    return [
      // Granny flats, ageing-in-place, schools and gardens are no longer offered
      { source: "/services/gardens-and-outdoor", destination: "/nami-home", permanent: true },
      { source: "/ja/services/gardens-and-outdoor", destination: "/ja/nami-home", permanent: true },
      { source: "/zh/services/gardens-and-outdoor", destination: "/zh/nami-home", permanent: true },
      { source: "/services/school-design", destination: "/nami-works", permanent: true },
      { source: "/ja/services/school-design", destination: "/ja/nami-works", permanent: true },
      { source: "/zh/services/school-design", destination: "/zh/nami-works", permanent: true },
      { source: "/nami-nagomi", destination: "/", permanent: true },
      { source: "/services/ageing-in-place", destination: "/nami-home", permanent: true },
      { source: "/guides/ageing-in-place-five-places", destination: "/guides", permanent: true },
      { source: "/ja/nami-nagomi", destination: "/ja", permanent: true },
      { source: "/ja/services/ageing-in-place", destination: "/ja/nami-home", permanent: true },
      { source: "/ja/guides/ageing-in-place-five-places", destination: "/ja/guides", permanent: true },
      { source: "/zh/nami-nagomi", destination: "/zh", permanent: true },
      { source: "/zh/services/ageing-in-place", destination: "/zh/nami-home", permanent: true },
      { source: "/zh/guides/ageing-in-place-five-places", destination: "/zh/guides", permanent: true },
      { source: "/services/granny-flats", destination: "/nami-value", permanent: true },
      { source: "/guides/granny-flat-rules-nsw", destination: "/guides", permanent: true },
      { source: "/ja/services/granny-flats", destination: "/ja/nami-value", permanent: true },
      { source: "/ja/guides/granny-flat-rules-nsw", destination: "/ja/guides", permanent: true },
      { source: "/zh/services/granny-flats", destination: "/zh/nami-value", permanent: true },
      { source: "/zh/guides/granny-flat-rules-nsw", destination: "/zh/guides", permanent: true },
      // Homes and Shops & Offices became the NAMI Home and NAMI Works sites
      { source: "/homes", destination: "/nami-home", permanent: true },
      { source: "/commercial", destination: "/nami-works", permanent: true },
      { source: "/ja/homes", destination: "/ja/nami-home", permanent: true },
      { source: "/ja/commercial", destination: "/ja/nami-works", permanent: true },
      { source: "/zh/homes", destination: "/zh/nami-home", permanent: true },
      { source: "/zh/commercial", destination: "/zh/nami-works", permanent: true },
      { source: "/projects", destination: "/nami-home#projects", permanent: true },
      { source: "/services", destination: "/nami-home#services", permanent: true },
      { source: "/faq", destination: "/nami-home#faq", permanent: true },
      { source: "/ja/faq", destination: "/ja/nami-home#faq", permanent: true },
      { source: "/works/new-lynn-house", destination: "/homes/projects/welcome-home", permanent: true },
      { source: "/works/remuera-renovation", destination: "/homes/projects/old-meets-new", permanent: true },
      { source: "/works/glen-innes-unit", destination: "/homes/projects/living-in-green", permanent: true },
      { source: "/works/hillcrest-house", destination: "/homes/projects/simply-special", permanent: true },
      { source: "/works/:slug", destination: "/homes/projects/:slug", permanent: true },
      { source: "/ja/works/:slug", destination: "/ja/homes/projects/:slug", permanent: true },
      { source: "/contact", destination: "/book", permanent: true },
      // Project pages are named after their Instagram posts
    ];
  },
  images: {
    // Placeholder artwork is SVG. Remove once real photography (JPG/WebP) is in place.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
