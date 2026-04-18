"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedGrid from "@/components/AnimatedGrid";
import ComicPanel from "@/components/ComicPanel";

type Step = 1 | 2 | 3;

const bootLines = [
  { text: "> SYSTEM BOOT v2.0", color: "text-slate-400" },
  { text: "> Loading module: developer.profile", color: "text-slate-400" },
  { text: "> Scanning stack dependencies...", color: "text-slate-400" },
  { text: "> [████████████████] 100%", color: "text-[#5ba0c0]" },
  { text: "> STATUS: READY", color: "text-emerald-400" },
  { text: "> Initializing Developer Profile...", color: "text-slate-200" },
];

const comicPanels = [
  { label: "PANEL 01", heading: "FULL STACK", sub: "Frontend · Backend", x: -80, y: 0 },
  { label: "PANEL 02", heading: "DEVELOPER", sub: "Systems · Interfaces", x: 0, y: 60 },
  { label: "PANEL 03", heading: "EST. 2021", sub: "Nepal · Global", x: 80, y: 0 },
];

export default function HeroSection() {
  const [step, setStep] = useState<Step>(1);
  const [visibleLines, setVisibleLines] = useState(0);

  // Reveal boot lines one by one
  useEffect(() => {
    if (step !== 1) return;
    const id = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= bootLines.length) return prev;
        return prev + 1;
      });
    }, 380);
    return () => clearInterval(id);
  }, [step]);

  // Auto-advance steps
  useEffect(() => {
    const t1 = setTimeout(() => setStep(2), 3400);
    const t2 = setTimeout(() => setStep(3), 5400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0c0a08]">
      <AnimatedGrid />

      {/* Halftone overlay */}
      <div className="pointer-events-none absolute inset-0 halftone opacity-30" />

      <AnimatePresence mode="wait">
        {/* ── STEP 1 — Initialization terminal ── */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative z-10 w-full max-w-xl px-6"
          >
            <ComicPanel label="PROFILE.SYS" cornerColor="blue">
              {/* Terminal bar */}
              <div className="flex items-center gap-2 border-b border-[#5ba0c0]/12 bg-[#120e0a]/60 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#c4932e]/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
                <span className="ml-3 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  DEVELOPER PROFILE LOADER
                </span>
              </div>

              <div className="space-y-2 bg-[#0c0a08]/80 p-6 font-mono text-sm">
                {bootLines.slice(0, visibleLines).map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className={line.color}
                  >
                    {line.text}
                  </motion.p>
                ))}
                {visibleLines > 0 && visibleLines <= bootLines.length && (
                  <span className="inline-block h-4 w-2 animate-pulse bg-[#5ba0c0]" />
                )}
              </div>
            </ComicPanel>
          </motion.div>
        )}

        {/* ── STEP 2 — Comic panels slide in ── */}
        {step === 2 && (
          <motion.div
            key="step2"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex w-full max-w-3xl flex-col gap-3 px-6 sm:flex-row"
          >
            {comicPanels.map((panel, i) => (
              <motion.div
                key={panel.label}
                initial={{ opacity: 0, x: panel.x, y: panel.y }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.55, ease: [0.25, 0, 0, 1] }}
                className="flex-1"
              >
                <ComicPanel label={panel.label} cornerColor="blue" className="bg-[#120e0a]/70 px-6 py-10 text-center backdrop-blur-sm">
                  <p className="mb-3 text-3xl font-black tracking-tight text-slate-100 sm:text-4xl">
                    {panel.heading}
                  </p>
                  <p className="font-mono text-xs tracking-widest text-slate-500">{panel.sub}</p>
                </ComicPanel>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* ── STEP 3 — Main hero content ── */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 mx-auto w-full max-w-5xl px-6"
          >
            <ComicPanel cornerColor="blue" className="bg-[#0c0a08]/60 backdrop-blur-sm">
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-slate-700/30 px-6 py-3">
                <span className="comic-label text-[#5ba0c0]/50">PROFILE LOADED</span>
                <span className="comic-label text-emerald-400">STATUS: ACTIVE</span>
              </div>

              <div className="px-6 py-14 text-center sm:py-20">
                {/* Identity label */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-8 inline-block border border-slate-700/60 px-4 py-1.5"
                >
                  <span className="comic-label text-slate-400">
                    RAJU SHARMA DAHAL · FULL STACK DEVELOPER
                  </span>
                </motion.div>

                {/* Name */}
                <div className="mb-4 overflow-hidden">
                  <motion.h1
                    initial={{ y: "105%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.15, duration: 0.7, ease: [0.25, 0, 0, 1] }}
                    className="text-6xl font-black leading-none tracking-tight text-slate-100 sm:text-8xl lg:text-9xl"
                  >
                    Full Stack
                  </motion.h1>
                </div>
                <div className="mb-10 overflow-hidden">
                  <motion.h1
                    initial={{ y: "105%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.27, duration: 0.7, ease: [0.25, 0, 0, 1] }}
                    className="text-6xl font-black leading-none tracking-tight text-glow-blue sm:text-8xl lg:text-9xl"
                  >
                    <span className="bg-gradient-to-r from-[#5ba0c0] via-[#7abdd8] to-[#4a8aaa] bg-clip-text text-transparent">
                      Developer
                    </span>
                  </motion.h1>
                </div>

                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.6 }}
                  className="mx-auto mb-10 max-w-xl font-mono text-sm leading-relaxed text-slate-400 sm:text-base"
                >
                  Building systems.{" "}
                  <span className="text-slate-300">Crafting experiences.</span>
                </motion.p>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex flex-wrap items-center justify-center gap-4"
                >
                  {/* Primary — sharp edges, not pill */}
                  <button
                    onClick={() => scrollTo("projects")}
                    className="group relative overflow-hidden border border-[#5ba0c0] bg-[#5ba0c0] px-8 py-3.5 text-sm font-bold text-[#0c0a08] shadow-[0_0_30px_rgba(0,212,255,0.25)] transition-all hover:bg-[#7abdd8] hover:shadow-[0_0_50px_rgba(0,212,255,0.4)]"
                  >
                    <motion.span
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent"
                      animate={{ translateX: ["-100%", "200%"] }}
                      transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 3.5, ease: "easeInOut" }}
                    />
                    <span className="relative font-mono tracking-widest">MISSION ARCHIVE</span>
                  </button>

                  <button
                    onClick={() => scrollTo("contact")}
                    className="border border-[#5ba0c0]/40 px-8 py-3.5 font-mono text-sm font-bold tracking-widest text-[#5ba0c0] transition-all hover:border-[#5ba0c0]/80 hover:bg-[#5ba0c0]/8"
                  >
                    OPEN CHANNEL
                  </button>
                </motion.div>

                {/* Tech stack — comic tags, not pills */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-10 flex flex-wrap justify-center gap-2"
                >
                  {["NEXT.JS 15", "TYPESCRIPT", "NODE.JS", "POSTGRESQL"].map((tech) => (
                    <span
                      key={tech}
                      className="border border-slate-700/50 bg-[#120e0a]/40 px-3 py-1 font-mono text-[10px] tracking-widest text-slate-500 transition-colors hover:border-slate-600/70 hover:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Bottom bar */}
              <div className="border-t border-slate-700/30 px-6 py-2.5 text-center">
                <span className="comic-label text-slate-600">
                  EST. 2021 · NEPAL · AVAILABLE FOR HIRE
                </span>
              </div>
            </ComicPanel>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll indicator */}
      {step === 3 && (
        <motion.button
          onClick={() => scrollTo("traits")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#5ba0c0]/40 transition-colors hover:text-[#5ba0c0]"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.button>
      )}
    </section>
  );
}
