import { BrandSiteView, brandSiteMetadata } from "@/views/BrandParts";

export const metadata = brandSiteMetadata("en", "nami-nagomi");

export default function Page() {
  return <BrandSiteView lang="en" slug="nami-nagomi" />;
}
