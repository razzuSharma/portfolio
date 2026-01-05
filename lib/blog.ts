import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  image: string;
  tags: string[];
  readTime: string;
  date: string;
  featured?: boolean;
  content: string;
  contentHtml?: string;
}

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Process markdown content to HTML with enhanced plugins
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || "",
    summary: data.summary || "",
    image: data.image || "/globe.svg",
    tags: data.tags || [],
    readTime: data.readTime || "5 min read",
    date: data.date || new Date().toISOString(),
    featured: data.featured || false,
    content: content,
    contentHtml: contentHtml,
  };
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const slugs = getAllBlogSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getBlogPostBySlug(slug);
      return post!;
    })
  );

  // Sort posts by date, newest first
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

