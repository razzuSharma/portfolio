
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type BlogCardProps = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  tags: string[];
};

export default function BlogCard({
  slug,
  title,
  summary,
  image,
  tags,
}: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-primary"
      >
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="p-5 space-y-3">
          <h3 className="text-lg sm:text-xl font-semibold group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
            {summary}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-primary/10 text-primary dark:bg-primary/20 text-xs px-2 py-0.5 rounded-full border border-primary/30"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
