export const site = {
  name: "NAMI",
  tagline: "NEST AND MEMORIES INSIDE",
  title: "NAMI — Japanese Perspective on Contemporary Australian Living",
  description:
    "NAMI is an interior design practice bringing Japanese ideas about home to Australian houses.",
  // TODO: replace with the production domain once it is connected on Vercel.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nami.example.com",
  locale: "ja_JP",
  // TODO: replace with real profile URLs.
  social: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Facebook", href: "https://facebook.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
  // TODO: replace with the real enquiry address.
  email: "hello@nami.example.com",
};

export const navigation = [
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "PROJECTS", href: "/projects" },
  { label: "JOURNAL", href: "/journal" },
  { label: "CONTACT", href: "/contact" },
];
