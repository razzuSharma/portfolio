"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Accessibility, ArrowRight, Gauge, GitBranch, Layers3, Sparkles } from "lucide-react";

const heroStats = [
  { label: "Frontend Focus", value: "React, Next.js, TypeScript" },
  { label: "Quality Baseline", value: "A11y-first, responsive, testable UI" },
  { label: "Performance Habit", value: "Core Web Vitals and smooth motion" },
];

const serviceCards = [
  {
    title: "Design System Engineering",
    description: "Reusable components, documented patterns, and token-driven styling.",
    icon: Layers3,
    accent: "from-indigo-500/20 to-sky-500/20 border-indigo-400/40",
  },
  {
    title: "Performance and UX",
    description: "Fast routes, progressive loading, and interactions that feel intentional.",
    icon: Gauge,
    accent: "from-amber-500/20 to-orange-500/20 border-amber-400/40",
  },
  {
    title: "Accessibility by Default",
    description: "Semantic structure, keyboard support, and accessible color contrast.",
    icon: Accessibility,
    accent: "from-emerald-500/20 to-teal-500/20 border-emerald-400/40",
  },
];

const workflow = [
  "Audit current UI and product constraints.",
  "Ship a scoped component system and page templates.",
  "Measure with Lighthouse and real-user feedback, then iterate.",
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.14),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(99,102,241,0.2),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(245,158,11,0.12),transparent_32%),linear-gradient(160deg,#020617_0%,#0b1120_45%,#111827_100%)] text-slate-50">
      <motion.div
        className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="pointer-events-none absolute -right-24 top-40 h-72 w-72 rounded-full bg-amber-400/15 blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-[-8rem] h-72 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

      <main className="relative mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid min-h-[70vh] gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="max-w-xl space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-slate-900/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-indigo-200 shadow-sm backdrop-blur"
            >
              <Sparkles size={14} className="text-indigo-300" />
              Frontend Engineer · Product UI
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
            >
              <span className="block text-slate-100">I engineer frontend systems</span>
              <span className="block bg-gradient-to-r from-sky-300 via-indigo-300 to-amber-200 bg-clip-text text-transparent">
                that scale from MVP to product.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base leading-relaxed text-slate-300/90 sm:text-lg"
            >
              I build robust interfaces with clean component architecture, deliberate motion,
              and measurable performance targets. My stack centers on Next.js, TypeScript,
              Tailwind, and Framer Motion with a strong emphasis on accessibility and maintainability.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link href="/projects" className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-indigo-500 px-7 py-3 text-sm font-semibold text-slate-50 shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-400 hover:shadow-indigo-500/40">
                <motion.span
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ translateX: ["-100%", "200%"] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                />
                <span className="relative flex items-center gap-2">
                  Explore projects
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-6 py-3 text-sm font-medium text-slate-200 shadow-sm transition-all hover:border-sky-400/70 hover:bg-slate-800/60 hover:text-sky-200"
              >
                Discuss your product
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid gap-2 pt-4 text-xs text-slate-300 sm:grid-cols-3"
            >
              {heroStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-slate-700/70 bg-slate-900/70 px-3 py-2"
                >
                  <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                  <p className="mt-1 text-sm text-slate-100">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative mt-6 w-full max-w-md justify-self-end md:mt-0"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-3xl border border-slate-700/60 bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-slate-950 p-6 shadow-[0_20px_70px_rgba(30,41,59,0.5)] backdrop-blur"
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 hover:opacity-100">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-amber-500/20" />
              </div>

              <div className="relative">
                <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                  <span className="inline-flex items-center gap-2">
                    <span className="flex h-2 w-8 items-center gap-1">
                      <motion.span
                        className="h-1.5 w-1.5 rounded-full bg-indigo-400"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-400/70" />
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
                    </span>
                    Delivery snapshot
                  </span>
                  <span>Portfolio · 2026</span>
                </div>

                <div className="space-y-4">
                  <h2 className="text-lg font-semibold text-slate-50">
                    What I typically deliver
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-300/90">
                    Production-ready pages, reusable components, and a clear handoff path
                    for product teams. The goal is not only visual polish but long-term velocity.
                  </p>

                  <div className="space-y-2 text-sm text-slate-300">
                    {workflow.map((step, index) => (
                      <div key={step} className="flex items-start gap-3 rounded-xl border border-slate-700/70 bg-slate-900/70 px-3 py-2">
                        <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/30 text-[11px] font-semibold text-indigo-100">
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <GitBranch size={13} />
                      Next.js · TypeScript · Tailwind · Framer Motion
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-emerald-300">
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                      </span>
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="mt-14 grid gap-4 md:grid-cols-3"
        >
          {serviceCards.map((card) => (
            <motion.article
              key={card.title}
              whileHover={{ y: -4 }}
              className={`rounded-2xl border bg-gradient-to-br p-5 ${card.accent}`}
            >
              <card.icon size={20} className="text-slate-100" />
              <h3 className="mt-3 text-base font-semibold text-slate-100">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-200/90">{card.description}</p>
            </motion.article>
          ))}
        </motion.section>
      </main>
    </div>
  );
}
