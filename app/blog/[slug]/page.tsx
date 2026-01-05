import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/lib/blog";
import ReadingProgress from "./ReadingProgress";

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogPostBySlug(slug);

  if (!blog) return notFound();

  // Format date for display
  const formattedDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <ReadingProgress />
      
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-900/50 z-50">
        <div 
          className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-150"
          id="reading-progress"
        />
      </div>

      {/* Background decorations */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute w-96 h-96 bg-teal-500/20 rounded-full blur-3xl top-0 left-1/4" />
        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl bottom-0 right-1/4" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Back button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors mb-8 group"
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
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            {blog.title}
          </h1>

          {/* Summary/Intro */}
          <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-teal-500/20">
            <p className="text-lg text-slate-300 leading-relaxed italic">
              {blog.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-sm font-medium bg-slate-800/50 text-teal-300 rounded-full border border-teal-500/20 hover:bg-slate-800/70 hover:border-teal-500/40 transition-all"
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
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-teal-500/20">
            <h3 className="text-xl font-bold text-slate-100 mb-2">Enjoyed this article?</h3>
            <p className="text-slate-400 mb-4">
              Check out more articles or get in touch to discuss your next project.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/blog"
                className="px-4 py-2 text-sm font-medium text-teal-400 border border-teal-500/30 rounded-lg hover:bg-teal-500/10 hover:border-teal-500/50 transition-all"
              >
                View All Articles
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 text-sm font-medium bg-teal-500/20 text-teal-300 rounded-lg hover:bg-teal-500/30 border border-teal-500/30 transition-all"
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
