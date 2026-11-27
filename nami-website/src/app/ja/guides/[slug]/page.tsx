import { GuideView, guideMetadata, guideParams, type SlugProps } from "@/views/MoreViews";

export const generateStaticParams = guideParams;
export const generateMetadata = (props: SlugProps) => guideMetadata("ja", props);

export default function Page(props: SlugProps) {
  return <GuideView lang="ja" {...props} />;
}
