import { GuideView, guideMetadata, guideParams, type SlugProps } from "@/views/MoreViews";

export const generateStaticParams = guideParams;
export const generateMetadata = (props: SlugProps) => guideMetadata("en", props);

export default function Page(props: SlugProps) {
  return <GuideView lang="en" {...props} />;
}
