"use client";

import BlogCard from "@/components/BlogCard";
import { motion } from "framer-motion";
import { BlogPost } from "@/lib/blog";

interface BlogClientProps {
  featuredBlog?: BlogPost;
  regularBlogs: BlogPost[];
}

export default function BlogClient({ featuredBlog, regularBlogs }: BlogClientProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 px-4">
      {/* Background decorations */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute w-96 h-96 bg-teal-500/20 rounded-full blur-3xl top-0 left-1/4" />
        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl bottom-0 right-1/4" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Blog & Articles
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on modern web development, best practices, and the latest technologies.
          </p>
        </motion.div>

        {/* Featured Blog */}
        {featuredBlog && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-16"
          >
            <BlogCard {...featuredBlog} />
          </motion.div>
        )}

        {/* Regular Blogs Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <h2 className="text-2xl font-bold text-slate-200 mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularBlogs.map((blog, idx) => (
              <motion.div
                key={blog.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
              >
                <BlogCard {...blog} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

