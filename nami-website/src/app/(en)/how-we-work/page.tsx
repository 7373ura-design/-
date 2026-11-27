import { WorriesView, worriesMetadata } from "@/views/MoreViews";

export const metadata = worriesMetadata("en");

export default function Page() {
  return <WorriesView lang="en" />;
}
