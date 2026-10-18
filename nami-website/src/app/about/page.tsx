import { permanentRedirect } from "next/navigation";

/** About now lives on the home page. */
export default function AboutPage() {
  permanentRedirect("/#meaning");
}
