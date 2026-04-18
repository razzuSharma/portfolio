"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import ComicPanel from "@/components/ComicPanel";
import StatusTag from "@/components/StatusTag";

const arcs = [
  {
    code: "ARC 01",
    phase: "Discovery",
    year: "2021",
    description: "First contact with code. HTML, CSS, the browser as a canvas. Realized building things that live online was the work worth doing.",
    highlight: "Zero to first commit.",
    status: "STABLE" as const,
    side: "left" as const,
    accentColor: "#5ba0c0",
  },
  {
    code: "ARC 02",
    phase: "Learning",
    year: "2022",
    description: "JavaScript went deep. React clicked. TypeScript enforced discipline. The ecosystem became familiar — tools, not mysteries.",
    highlight: "Framework fluency achieved.",
    status: "STABLE" as const,
    side: "right" as const,
    accentColor: "#c4932e",
  },
  {
    code: "ARC 03",
    phase: "Building",
    year: "2023",
    description: "First real users. Resume Artisan shipped. Shivam Marble launched. Freelance work forced production-grade thinking.",
    highlight: "First live users. First real bugs.",
    status: "STABLE" as const,
    side: "left" as const,
    accentColor: "#5ba0c0",
  },
  {
    code: "ARC 04",
    phase: "Scaling",
    year: "2024–25",
    description: "Backend expanded. Full-stack architecture, API design, database modeling. Tour-gasm shipped. Systems thinking replaced screen thinking.",
    highlight: "Full-stack. Systems-level. Now.",
    status: "ACTIVE" as const,
    side: "right" as const,
    accentColor: "#4a9e7a",
    isCurrent: true,
  },
];

export default function TimelineSection() {
  return (
    <SectionWrapper id="journey" className="bg-gradient-to-b from-[#0e0c09] to-[#0a0a0f]">
      {/* Header */}
      <div className="mb-16">
        <ComicPanel label="STORY ARC" cornerColor="gold" className="inline-block px-5 py-3 bg-[#120e0a]/50">
          <p className="text-2xl font-black text-slate-100 sm:text-3xl pt-4">
            Evolution Timeline
          </p>
          <p className="mt-1 font-mono text-xs text-slate-500">
            Origin to present — sequential arc log
          </p>
        </ComicPanel>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-4xl">
        {/* Center spine */}
        <div
          className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 hidden sm:block"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(91,160,192,0.25) 10%, rgba(91,160,192,0.25) 90%, transparent)",
          }}
        />

        {arcs.map((arc, index) => {
          const isLeft = arc.side === "left";

          return (
            <motion.div
              key={arc.code}
              initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className={`relative mb-10 flex items-center ${
                isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
              } flex-col sm:gap-0`}
            >
              {/* Card — 46% width on desktop */}
              <div className={`w-full sm:w-[46%] ${isLeft ? "sm:pr-8" : "sm:pl-8"}`}>
                <ComicPanel
                  label={arc.code}
                  cornerColor={
                    arc.accentColor === "#c4932e" ? "gold"
                    : arc.accentColor === "#4a9e7a" ? "green"
                    : "blue"
                  }
                  className={`overflow-hidden bg-[#120e0a]/60 transition-all duration-300 hover:bg-[#120e0a]/80 ${
                    arc.isCurrent ? "shadow-[0_0_30px_rgba(16,185,129,0.1)]" : ""
                  }`}
                >
                  <div className="p-5 pt-7">
                    {/* Phase + year */}
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <h3 className="text-xl font-black text-slate-100">{arc.phase}</h3>
                      <span
                        className="font-mono text-sm font-bold"
                        style={{ color: arc.accentColor }}
                      >
                        {arc.year}
                      </span>
                    </div>

                    <p className="mb-3 text-sm leading-relaxed text-slate-400">{arc.description}</p>

                    {/* Highlight — comic caption box */}
                    <div className="mb-4 border border-slate-700/40 bg-[#0a0a0f]/60 px-3 py-2">
                      <span
                        className="font-mono text-xs font-bold"
                        style={{ color: arc.accentColor }}
                      >
                        ▸ {arc.highlight}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-slate-700/30 px-4 py-2.5">
                    <StatusTag status={arc.status} />
                  </div>
                </ComicPanel>
              </div>

              {/* Center dot — desktop only */}
              <div className="hidden sm:flex sm:w-[8%] sm:justify-center">
                {arc.isCurrent ? (
                  <span className="relative flex h-4 w-4">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-400 ring-4 ring-emerald-400/15" />
                  </span>
                ) : (
                  <span
                    className="h-3 w-3 rounded-full ring-4"
                    style={{
                      backgroundColor: arc.accentColor,
                      boxShadow: `0 0 0 4px ${arc.accentColor}20`,
                    }}
                  />
                )}
              </div>

              {/* Empty half */}
              <div className="hidden sm:block sm:w-[46%]" />
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
