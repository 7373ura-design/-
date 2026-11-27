import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // One 404 page for addresses that match nothing (there is a root layout per language)
  experimental: { globalNotFound: true },
  // The site is now one page plus the project pages; old addresses land on their section
  async redirects() {
    return [
      { source: "/projects", destination: "/homes#projects", permanent: true },
      { source: "/services", destination: "/homes#services", permanent: true },
      { source: "/faq", destination: "/homes#faq", permanent: true },
      { source: "/ja/faq", destination: "/ja/homes#faq", permanent: true },
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
