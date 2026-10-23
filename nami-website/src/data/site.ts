export const site = {
  name: "NAMI",
  tagline: "NEST AND MEMORIES INSIDE",
  title: "NAMI — Japanese Perspective on Contemporary Australian Living",
  description:
    "NAMI is a Japanese-Australian interior design brand creating thoughtful spaces where Japanese design sensibility meets contemporary Australian living.",
  // TODO: replace with the production domain once it is connected on Vercel.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://nami.example.com",
  locale: "ja_JP",
  instagram: "https://www.instagram.com/nami.studio_au/",
  instagramHandle: "@nami.studio_au",
  // TODO: replace with the NAMI Facebook page once confirmed.
  facebook: "https://www.facebook.com/",
  email: "hello@nami-studio.com.au",
};

export const navigation = [
  { label: "WORKS", href: "/#works" },
  { label: "ABOUT", href: "/#about" },
  { label: "CONTACT", href: "/#contact" },
];
