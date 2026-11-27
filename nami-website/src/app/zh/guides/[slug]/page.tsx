import { zhMeta } from "@/lib/tr";
import { GuideView, guideMetadata, guideParams, type SlugProps } from "@/views/MoreViews";

export const generateStaticParams = guideParams;
export const generateMetadata = async (props: SlugProps) => zhMeta(await guideMetadata("zh", props));

export default function Page(props: SlugProps) {
  return <GuideView lang="zh" {...props} />;
}
