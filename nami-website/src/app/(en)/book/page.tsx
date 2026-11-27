import { BookView, bookMetadata } from "@/views/MoreViews";

export const metadata = bookMetadata("en");

export default function Page() {
  return <BookView lang="en" />;
}
