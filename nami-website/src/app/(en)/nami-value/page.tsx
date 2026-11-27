import { BrandSiteView, brandSiteMetadata } from "@/views/BrandParts";

export const metadata = brandSiteMetadata("en", "nami-value");

export default function Page() {
  return <BrandSiteView lang="en" slug="nami-value" />;
}
