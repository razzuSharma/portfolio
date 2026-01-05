// app/page.tsx or pages/index.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50 overflow-hidden">
      {/* teal glow orbs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-40 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[-8rem] h-72 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-12 px-6 py-20 md:flex-row md:items-center md:justify-between">
        {/* Left: intro copy */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl space-y-6"
        >
          <p className="inline-flex items-center rounded-full border border-teal-500/30 bg-slate-900/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-teal-300/90 shadow-sm backdrop-blur">
            Software Engineer · Web Craftsman
          </p>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-slate-100">Building fast,</span>
            <span className="block bg-gradient-to-r from-teal-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              beautiful web experiences.
            </span>
          </h1>

          <p className="text-base text-slate-300/90 sm:text-lg">
            I design and develop **teal‑accented**, dark‑mode–first interfaces that feel
            as good to use as they look. From landing pages to full‑stack apps, I focus
            on performance, polish, and thoughtful UX.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-teal-500 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-teal-500/30 transition hover:bg-teal-400"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition group-hover:translate-x-full group-hover:opacity-100" />
              <span className="relative">View my projects</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-6 py-3 text-sm font-medium text-slate-200 shadow-sm transition hover:border-teal-400/70 hover:text-teal-200"
            >
              Let&apos;s collaborate
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              Frontend &amp; UI Engineering
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Performance‑minded builds
            </span>
          </div>
        </motion.section>

        {/* Right: card / accent panel */}
        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="relative mt-6 w-full max-w-md md:mt-0"
        >
          <div className="relative overflow-hidden rounded-3xl border border-teal-500/30 bg-gradient-to-b from-slate-900/80 via-slate-950/90 to-slate-950/95 p-6 shadow-[0_24px_80px_rgba(15,118,110,0.45)] backdrop-blur">
            <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
              <span className="inline-flex items-center gap-2">
                <span className="flex h-2 w-8 items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/80" />
                </span>
                Live preview
              </span>
              <span>Portfolio · 2026</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-slate-50">
                Dark teal interface, bright ideas.
              </h2>
              <p className="text-sm text-slate-300/90">
                Explore selected work that blends clean engineering with rich, teal‑forward
                aesthetics. Each project is tuned for responsiveness, accessibility, and
                smooth micro‑interactions.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-3">
                  <p className="font-medium text-slate-100">UI Systems</p>
                  <p className="mt-1 text-slate-400">Design‑driven components built for reuse.</p>
                </div>
                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/70 p-3">
                  <p className="font-medium text-slate-100">App Performance</p>
                  <p className="mt-1 text-slate-400">Fast loads, fluid transitions, minimal jank.</p>
                </div>
              </div>

              <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
                <span>Next.js · TypeScript · Tailwind CSS</span>
                <span className="inline-flex items-center gap-1 text-teal-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-300" />
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
