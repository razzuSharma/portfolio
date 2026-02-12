"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { 
  Code2, 
  Sparkles, 
  Zap, 
  Layout,
  Filter,
  ChevronRight,
  Star,
  Trophy,
  Rocket
} from "lucide-react";

// Enhanced project data with categories and URLs
const projects = [
  {
    title: "Resume Artisan",
    description: "A free tool to create a beautiful resume in minutes. Features real-time preview, multiple templates, and PDF export.",
    image: "/images/projects/resume-builder.png",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    category: "tools",
    liveUrl: "https://resume-builder-khaki-five.vercel.app/",
    githubUrl: "https://github.com/razzuSharma/resume-builder",
    featured: true,
  },
  {
    title: "Shivam Marble and Tiles",
    description: "A website for a marble and tile company. Features a product catalog, a contact form, and a blog.",
    image: "/images/projects/shivam-marbles.png",
    tags: ["React", "Framer Motion", "UI/UX"],
    category: "web",
    liveUrl: "https://www.sibamstoneworks.shop/",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Tour-gasm",
    description: "A website for a tour company. Features a tour catalog, a contact form, and a blog.",
    image:  "/images/projects/tour-gasm.png",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    category: "web",
    liveUrl: "https://tour-gasm.vercel.app/",
    githubUrl: "https://github.com/razzuSharma/tour-gasm",
    featured: true,
  },
  
];

const categories = [
  { id: "all", label: "All Projects", icon: Layout },
  { id: "web", label: "Web Apps", icon: Code2 },
  { id: "dashboard", label: "Dashboards", icon: Zap },
  { id: "ai", label: "AI/ML", icon: Sparkles },
  { id: "productivity", label: "Productivity", icon: Rocket },
];

const stats = [
  { label: "Projects", value: "12+", icon: Code2 },
  { label: "Technologies", value: "25+", icon: Sparkles },
  { label: "Experience", value: "5+ Years", icon: Trophy },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const featuredProjects = useMemo(() => 
    projects.filter((p) => p.featured),
    []
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-24 text-slate-50">
      {/* Animated background elements */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        {/* Primary teal glow */}
        <motion.div
          className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Secondary cyan glow */}
        <motion.div
          className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Subtle emerald accent */}
        <div className="absolute left-1/4 top-1/2 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-slate-950/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-teal-300/90 backdrop-blur-sm"
          >
            <Star size={14} className="text-teal-400" />
            Selected Work
          </motion.div>

          {/* Title */}
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-slate-100">Projects with a</span>
              <span className="block bg-gradient-to-r from-teal-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                dark teal personality.
              </span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300/90 sm:text-lg">
              A curated collection of interfaces, dashboards, and products that balance{" "}
              <span className="font-semibold text-teal-300">speed</span>,{" "}
              <span className="font-semibold text-teal-300">clarity</span>, and{" "}
              <span className="font-semibold text-teal-300">delight</span>. Each project is built
              with a focus on usability, performance, and a cohesive teal‑forward visual system.
            </p>
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group relative overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/60 px-5 py-3 backdrop-blur-sm transition-all hover:border-teal-500/40 hover:bg-slate-800/60"
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredStat === index ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
                <div className="relative flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500/20 to-cyan-500/20 text-teal-400">
                    <stat.icon size={20} />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-100">{stat.value}</div>
                    <div className="text-xs text-slate-400">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.header>

        {/* Featured Projects Section */}
        {activeCategory === "all" && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700/50 to-slate-700/50" />
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
                <Trophy size={14} />
                Featured Projects
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-700/50 via-slate-700/50 to-transparent" />
            </div>
            
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  index={index}
                />
              ))}
            </div>
          </motion.section>
        )}

        {/* Filter Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-slate-400">
              <Filter size={16} />
              <span className="text-sm font-medium">Filter by category</span>
            </div>
            
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group relative flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? "border-teal-500/50 bg-teal-500/20 text-teal-300"
                      : "border-slate-700/50 bg-slate-900/50 text-slate-400 hover:border-teal-500/30 hover:text-teal-300"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon size={14} />
                  {category.label}
                  {activeCategory === category.id && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 -z-10 rounded-full bg-teal-500/10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects Grid with AnimatePresence for smooth filtering */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* Section header */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-200">
              {activeCategory === "all" ? "All Projects" : categories.find(c => c.id === activeCategory)?.label}
            </h2>
            <span className="text-sm text-slate-500">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  {...project}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-800/50">
                <Filter size={24} className="text-slate-500" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-300">
                No projects found
              </h3>
              <p className="text-sm text-slate-500">
                Try selecting a different category
              </p>
            </motion.div>
          )}
        </motion.section>

        {/* Bottom CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-16"
        >
          <div className="relative overflow-hidden rounded-3xl border border-teal-500/20 bg-gradient-to-br from-slate-900/80 to-slate-950/80 p-8 sm:p-12">
            {/* Background decoration */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
            
            <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <div className="flex-1 space-y-3">
                <h2 className="text-2xl font-bold text-slate-100 sm:text-3xl">
                  Have a project in mind?
                </h2>
                <p className="max-w-xl text-slate-400">
                  I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
              </div>
              <motion.a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/30 transition-all hover:bg-teal-400"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Let&apos;s Talk
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </motion.a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
