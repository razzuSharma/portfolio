"use client";

import BlogCard from "@/components/BlogCard";
import { motion } from "framer-motion";

const blogs = [
  {
    slug: "nextjs-best-practices",
    title: "Next.js Best Practices",
    summary: "Learn the best practices for building scalable and maintainable Next.js applications.",
    image: "/globe.svg",
    tags: ["Next.js", "Best Practices", "React"],
  },
  {
    slug: "tailwind-tricks",
    title: "Tailwind CSS Tricks",
    summary: "Discover advanced Tailwind CSS techniques to supercharge your UI development.",
    image: "/window.svg",
    tags: ["Tailwind", "CSS", "UI"],
  },
  {
    slug: "deploy-vercel",
    title: "How to Deploy on Vercel",
    summary: "A step-by-step guide to deploying your Next.js app on Vercel for free.",
    image: "/file.svg",
    tags: ["Vercel", "Deployment", "Guide"],
  },
];

export default function BlogListPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white/80 to-secondary/10 dark:from-black dark:via-gray-900 dark:to-gray-950 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-lg"
        >
          Latest Blog Posts
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogs.map((blog, idx) => (
            <motion.div
              key={blog.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
            >
              <BlogCard {...blog} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
