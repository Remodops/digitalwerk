import { withPageMeta } from "@/lib/seo";
import BlogDisabled from "@/modules/blog/Disabled";
import { ENABLE_BLOG } from "@/lib/config";

export const metadata = withPageMeta({ title: "Blog" });

export default function Page() {
  if (!ENABLE_BLOG) return <BlogDisabled />;
  return null;
}


