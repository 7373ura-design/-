import { HomesView, homesMetadata } from "@/views/HomesView";

export const metadata = homesMetadata("en");

export default function Page() {
  return <HomesView lang="en" />;
}
