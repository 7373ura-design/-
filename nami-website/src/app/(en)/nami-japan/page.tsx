import { BrandSiteView, brandSiteMetadata } from "@/views/BrandParts";

export const metadata = brandSiteMetadata("en", "nami-japan");

export default function Page() {
  return <BrandSiteView lang="en" slug="nami-japan" />;
}
