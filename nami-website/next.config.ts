import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // The site is now one page plus the project pages; old addresses land on their section
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: true },
      { source: "/projects", destination: "/#works", permanent: true },
      { source: "/services", destination: "/", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
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
