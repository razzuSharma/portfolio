"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import {
  BarChart3,
  BriefcaseBusiness,
  ChevronRight,
  Filter,
  Layout,
  Rocket,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Resume Artisan",
    description:
      "Resume builder product with live preview, export-ready layouts, and a fast editor flow optimized for first-time users.",
    image: "/images/projects/resume-builder.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "PDF Export"],
    category: "tooling",
    liveUrl: "https://resume-builder-khaki-five.vercel.app/",
    githubUrl: "https://github.com/razzuSharma/resume-builder",
    featured: true,
  },
  {
    title: "Shivam Marble and Tiles",
    description:
      "Business website with product discovery, trust-building layout, and conversion-focused contact sections for local leads.",
    image: "/images/projects/shivam-marbles.png",
    tags: ["React", "Framer Motion", "UI/UX", "Responsive"],
    category: "business",
    liveUrl: "https://www.sibamstoneworks.shop/",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Tour-gasm",
    description:
      "Travel platform experience with destination browsing, service highlights, and clear booking pathways across devices.",
    image: "/images/projects/tour-gasm.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "SEO"],
    category: "product",
    liveUrl: "https://tour-gasm.vercel.app/",
    githubUrl: "https://github.com/razzuSharma/tour-gasm",
    featured: true,
  },
];

const categories = [
  { id: "all", label: "All Projects", icon: Layout },
  { id: "product", label: "Product UI", icon: Rocket },
  { id: "business", label: "Business Web", icon: BriefcaseBusiness },
  { id: "tooling", label: "Frontend Tools", icon: Wrench },
];

const pageStats = [
  { label: "Shipped Projects", value: `${projects.length}`, icon: BarChart3 },
  { label: "Primary Stack", value: "Next.js + TypeScript", icon: Sparkles },
  { label: "Build Principles", value: "A11y, Perf, UX", icon: Star },
];

const deliveryHighlights = [
  "Reusable component patterns across pages",
  "Responsive behavior tuned for real devices",
  "Animation used for hierarchy, not distraction",
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const featuredProjects = useMemo(() => projects.filter((project) => project.featured), []);

  const activeCategoryLabel =
    activeCategory === "all"
      ? "All Projects"
      : categories.find((category) => category.id === activeCategory)?.label;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_10%_15%,rgba(56,189,248,0.14),transparent_36%),radial-gradient(circle_at_88%_10%,rgba(99,102,241,0.2),transparent_32%),radial-gradient(circle_at_50%_88%,rgba(245,158,11,0.14),transparent_30%),linear-gradient(160deg,#020617_0%,#0b1120_42%,#111827_100%)] px-4 py-24 text-slate-50">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-28 top-16 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.16, 0.26, 0.16] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-sky-400/15 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute left-1/3 top-1/2 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-12 space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.08 }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-slate-950/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-200 backdrop-blur-sm"
          >
            <Star size={14} className="text-indigo-300" />
            Frontend Case Studies
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-slate-100">Interfaces engineered for</span>
                <span className="block bg-gradient-to-r from-sky-300 via-indigo-300 to-amber-200 bg-clip-text text-transparent">
                  product clarity and speed.
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-slate-300/90 sm:text-lg">
                Selected work across product UI, business websites, and tooling experiences.
                Each project emphasizes maintainable code, conversion-aware UX, and
                measurable performance outcomes.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Delivery focus</p>
              <div className="mt-3 space-y-2">
                {deliveryHighlights.map((item) => (
                  <p key={item} className="text-sm text-slate-200">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="grid gap-3 sm:grid-cols-3"
          >
            {pageStats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -2 }}
                className="rounded-xl border border-slate-700/70 bg-slate-900/70 px-5 py-4"
              >
                <div className="flex items-center gap-2 text-slate-300">
                  <stat.icon size={16} />
                  <span className="text-xs uppercase tracking-[0.14em] text-slate-400">{stat.label}</span>
                </div>
                <p className="mt-2 text-lg font-semibold text-slate-100">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.header>

        {activeCategory === "all" && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-600/60 to-slate-600/60" />
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                <Sparkles size={14} />
                Featured Builds
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-600/60 via-slate-600/60 to-transparent" />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.title} {...project} index={index} />
              ))}
            </div>
          </motion.section>
        )}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-slate-300">
              <Filter size={16} />
              <span className="text-sm font-medium">Filter by project type</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`group relative flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? "border-indigo-400/50 bg-indigo-500/20 text-indigo-200"
                      : "border-slate-700/60 bg-slate-900/60 text-slate-300 hover:border-sky-400/40 hover:text-sky-200"
                  }`}
                >
                  <category.icon size={14} />
                  {category.label}
                  {activeCategory === category.id && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-500/10 to-sky-500/10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-200">{activeCategoryLabel}</h2>
            <span className="text-sm text-slate-400">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.title} {...project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-20 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-800/60">
                <Filter size={24} className="text-slate-500" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-300">No projects in this filter yet</h3>
              <p className="text-sm text-slate-500">Try another category.</p>
            </motion.div>
          )}
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.12, duration: 0.45 }}
          className="mt-16"
        >
          <div className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/85 via-slate-900/70 to-slate-950/90 p-8 sm:p-12">
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-indigo-500/12 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />

            <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <div className="flex-1 space-y-3">
                <h2 className="text-2xl font-bold text-slate-100 sm:text-3xl">
                  Need frontend support for your next release?
                </h2>
                <p className="max-w-xl text-slate-300/90">
                  I can help design, build, and refine interfaces from early concept to
                  production rollout.
                </p>
              </div>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-slate-50 shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-400"
              >
                Start a conversation
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
