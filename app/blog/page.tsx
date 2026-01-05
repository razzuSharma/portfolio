import BlogClient from "./BlogClient";
import { getAllBlogPosts } from "@/lib/blog";

export default async function BlogListPage() {
  const blogs = await getAllBlogPosts();
  const featuredBlog = blogs.find(blog => blog.featured);
  const regularBlogs = blogs.filter(blog => !blog.featured);

  return <BlogClient featuredBlog={featuredBlog} regularBlogs={regularBlogs} />;
}
