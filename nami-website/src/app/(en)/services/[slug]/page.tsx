import { ServiceView, serviceMetadata, serviceParams, type SlugProps } from "@/views/MoreViews";

export const generateStaticParams = serviceParams;
export const generateMetadata = (props: SlugProps) => serviceMetadata("en", props);

export default function Page(props: SlugProps) {
  return <ServiceView lang="en" {...props} />;
}
