import { AboutView, aboutMetadata } from "@/views/MoreViews";

export const metadata = aboutMetadata("en");

export default function Page() {
  return <AboutView lang="en" />;
}
