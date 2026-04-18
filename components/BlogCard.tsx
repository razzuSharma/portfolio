"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

type BlogCardProps = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  tags: string[];
  readTime?: string;
  featured?: boolean;
};

export default function BlogCard({
  slug,
  title,
  summary,
  tags,
  readTime = "5 min read",
  featured = false,
}: BlogCardProps) {
  if (featured) {
    return (
      <Link href={`/blog/${slug}`} passHref>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.01 }}
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/90 to-[#0f1929]/90 border border-[#00d4ff]/25 hover:border-[#00d4ff]/45 transition-all duration-300 shadow-xl hover:shadow-[#00d4ff]/15"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/8 via-transparent to-[#0ea5e9]/8 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-semibold bg-[#00d4ff]/15 text-[#00d4ff] rounded-full border border-[#00d4ff]/25">
                Featured
              </span>
              <div className="flex items-center gap-1 text-slate-400 text-sm">
                <Clock size={14} />
                <span>{readTime}</span>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4 group-hover:text-[#00d4ff] transition-colors">
              {title}
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6 line-clamp-3">
              {summary}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-[#00d4ff] rounded-full border border-[#00d4ff]/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center text-[#00d4ff] font-medium group-hover:gap-2 transition-all">
              <span>Read article</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.div>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${slug}`} passHref>
      <motion.div
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.98 }}
        className="group relative h-full flex flex-col rounded-xl overflow-hidden bg-gradient-to-br from-slate-800/80 to-[#0f1929]/80 border border-slate-700/50 hover:border-[#00d4ff]/35 transition-all duration-300 shadow-lg hover:shadow-[#00d4ff]/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/5 via-transparent to-[#0ea5e9]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative p-6 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <Clock size={12} />
              <span>{readTime}</span>
            </div>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-slate-100 mb-3 group-hover:text-[#00d4ff] transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
            {summary}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium bg-slate-700/40 text-[#00d4ff] rounded-md border border-[#00d4ff]/20"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center text-[#00d4ff] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Read more</span>
            <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
