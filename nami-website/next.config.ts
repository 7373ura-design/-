import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // One 404 page for addresses that match nothing (there is a root layout per language)
  experimental: { globalNotFound: true },
  // The site is now one page plus the project pages; old addresses land on their section
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/projects", destination: "/#works", permanent: true },
      { source: "/services", destination: "/", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      // Project pages are named after their Instagram posts
      { source: "/works/new-lynn-house", destination: "/works/welcome-home", permanent: true },
      { source: "/works/remuera-renovation", destination: "/works/old-meets-new", permanent: true },
      { source: "/works/glen-innes-unit", destination: "/works/living-in-green", permanent: true },
      { source: "/works/hillcrest-house", destination: "/works/simply-special", permanent: true },
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
