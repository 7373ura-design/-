import { AreasIndexView, areasIndexMetadata } from "@/views/MoreViews";

export const metadata = areasIndexMetadata("en");

export default function Page() {
  return <AreasIndexView lang="en" />;
}
