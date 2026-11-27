import { zhMeta } from "@/lib/tr";
import { AreaView, areaMetadata, areaParams, type SlugProps } from "@/views/MoreViews";

export const generateStaticParams = areaParams;
export const generateMetadata = async (props: SlugProps) => zhMeta(await areaMetadata("zh", props));

export default function Page(props: SlugProps) {
  return <AreaView lang="zh" {...props} />;
}
