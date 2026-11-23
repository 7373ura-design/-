import { CommercialView, commercialMetadata } from "@/views/CommercialView";

export const metadata = commercialMetadata("en");

export default function Page() {
  return <CommercialView lang="en" />;
}
