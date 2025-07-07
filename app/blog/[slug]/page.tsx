import { notFound } from "next/navigation";
import Image from "next/image";

const blogs = [
  {
    slug: "nextjs-best-practices",
    title: "Next.js Best Practices",
    summary:
      "Learn the best practices for building scalable and maintainable Next.js applications.",
    image: "/globe.svg",
    tags: ["Next.js", "Best Practices", "React"],
    content: `This is a detailed article about Next.js best practices.`,
  },
  {
    slug: "tailwind-tricks",
    title: "Tailwind CSS Tricks",
    summary:
      "Discover advanced Tailwind CSS techniques to supercharge your UI development.",
    image: "/window.svg",
    tags: ["Tailwind", "CSS", "UI"],
    content: `This is a detailed article about Tailwind CSS tricks.`,
  },
  {
    slug: "deploy-vercel",
    title: "How to Deploy on Vercel",
    summary:
      "A step-by-step guide to deploying your Next.js app on Vercel for free.",
    image: "/file.svg",
    tags: ["Vercel", "Deployment", "Guide"],
    content: `This is a detailed article about deploying on Vercel.`,
  },
];

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white/80 to-secondary/10 dark:from-black dark:via-gray-900 dark:to-gray-950 py-20 px-4">
      <div className="max-w-2xl mx-auto bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-lg p-6">
        <div className="relative w-full h-56 mb-6 rounded-xl overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {blog.title}
        </h1>
        <div className="flex flex-wrap gap-2 mb-4">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
          {blog.summary}
        </p>
        <div className="prose dark:prose-invert max-w-none">{blog.content}</div>
      </div>
    </div>
  );
}
