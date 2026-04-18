import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/lib/blog";
import ReadingProgress from "./ReadingProgress";

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogPostBySlug(slug);

  if (!blog) return notFound();

  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <ReadingProgress />

      {/* Background decorations */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-3xl top-0 left-1/4" />
        <div className="absolute w-96 h-96 bg-[#0ea5e9]/8 rounded-full blur-3xl bottom-0 right-1/4" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Back button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-[#00d4ff] transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Articles</span>
        </Link>

        {/* Article Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6 text-sm text-slate-400">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              <span>{formattedDate}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock size={14} />
              <span>{blog.readTime}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-[#00d4ff] via-sky-400 to-[#00d4ff] bg-clip-text text-transparent">
            {blog.title}
          </h1>

          {/* Summary */}
          <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-[#0f1929]/50 border border-[#00d4ff]/15">
            <p className="text-lg text-slate-300 leading-relaxed italic">{blog.summary}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-sm font-medium bg-slate-800/50 text-[#00d4ff] rounded-full border border-[#00d4ff]/20 hover:bg-slate-800/70 hover:border-[#00d4ff]/40 transition-all"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Article Content */}
        <article
          className="blog-content prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.contentHtml || "" }}
        />

        {/* Footer CTA */}
        <div className="mt-16 pt-8 border-t border-slate-800/80">
          <div className="bg-gradient-to-br from-slate-800/50 to-[#0f1929]/50 rounded-xl p-6 border border-[#00d4ff]/15">
            <h3 className="text-xl font-bold text-slate-100 mb-2">Enjoyed this article?</h3>
            <p className="text-slate-400 mb-4">
              Check out more articles or get in touch to discuss your next project.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="px-4 py-2 text-sm font-medium text-[#00d4ff] border border-[#00d4ff]/30 rounded-lg hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/50 transition-all"
              >
                View All Articles
              </Link>
              <Link
                href="/#contact"
                className="px-4 py-2 text-sm font-medium bg-[#00d4ff]/15 text-[#00d4ff] rounded-lg hover:bg-[#00d4ff]/25 border border-[#00d4ff]/25 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
