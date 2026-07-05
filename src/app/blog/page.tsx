export const dynamic = 'force-dynamic';
import { getBlogs } from "@/app/actions/blog.action";
import BlogClient from "./BlogClient";

export default async function BlogPage() {
  const blogs = await getBlogs();
  
  return <BlogClient blogs={blogs} />;
}
