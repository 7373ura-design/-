import { BrandView, brandMetadata } from "@/views/MoreViews";

export const metadata = brandMetadata("en", "nami-works");

export default function Page() {
  return <BrandView lang="en" slug="nami-works" />;
}
