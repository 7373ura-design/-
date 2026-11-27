import { GuidesIndexView, guidesIndexMetadata } from "@/views/MoreViews";

export const metadata = guidesIndexMetadata("en");

export default function Page() {
  return <GuidesIndexView lang="en" />;
}
