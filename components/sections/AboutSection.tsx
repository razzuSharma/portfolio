"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import ComicPanel from "@/components/ComicPanel";
import StatusTag from "@/components/StatusTag";
import { staggerContainer, scaleIn } from "@/lib/animations";
import { Zap, BrainCircuit, Shield, TrendingUp } from "lucide-react";

const traits = [
  {
    id: "strength",
    label: "TRAIT 01",
    name: "Strength",
    icon: Zap,
    tagline: "High-velocity execution",
    description: "Deliver production-ready features fast. Speed is a feature.",
    accentColor: "#5ba0c0",
    // CSS pattern — zigzag lines (faded denim)
    pattern: `repeating-linear-gradient(
      -45deg,
      rgba(91,160,192,0.06) 0px,
      rgba(91,160,192,0.06) 1px,
      transparent 1px,
      transparent 12px
    )`,
  },
  {
    id: "intelligence",
    label: "TRAIT 02",
    name: "Intelligence",
    icon: BrainCircuit,
    tagline: "Systems-level thinking",
    description: "Architect scalable solutions. Understand before building.",
    accentColor: "#c4932e",
    // CSS pattern — circuit dot grid (aged amber)
    pattern: `radial-gradient(circle, rgba(196,147,46,0.08) 1px, transparent 1px)`,
    patternSize: "16px 16px",
  },
  {
    id: "discipline",
    label: "TRAIT 03",
    name: "Discipline",
    icon: Shield,
    tagline: "Consistent craft",
    description: "Clean code, structured systems, zero corner-cutting.",
    accentColor: "#5ba0c0",
    // CSS pattern — grid lines (faded denim)
    pattern: `linear-gradient(rgba(91,160,192,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(91,160,192,0.05) 1px, transparent 1px)`,
    patternSize: "22px 22px",
  },
  {
    id: "growth",
    label: "TRAIT 04",
    name: "Growth",
    icon: TrendingUp,
    tagline: "Compound learning",
    description: "Every project levels up the next. Always expanding the stack.",
    accentColor: "#4a9e7a",
    // CSS pattern — diagonal rise (sage green)
    pattern: `repeating-linear-gradient(
      60deg,
      rgba(74,158,122,0.06) 0px,
      rgba(74,158,122,0.06) 1px,
      transparent 1px,
      transparent 14px
    )`,
  },
];

export default function AboutSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <SectionWrapper id="traits" className="bg-[#0c0a08]">
      {/* Section header */}
      <div className="mb-14">
        <ComicPanel label="SYSTEM SCAN" cornerColor="blue" className="inline-block px-5 py-3 bg-[#0f1929]/50">
          <p className="text-2xl font-black text-slate-100 sm:text-3xl pt-4">
            Core Traits
          </p>
          <p className="mt-1 font-mono text-xs text-slate-500">
            Operator identity modules — loaded and active
          </p>
        </ComicPanel>
      </div>

      {/* Trait cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {traits.map((trait) => {
          const Icon = trait.icon;
          const isHovered = hovered === trait.id;

          return (
            <motion.div
              key={trait.id}
              variants={scaleIn}
              onMouseEnter={() => setHovered(trait.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <ComicPanel
                label={trait.label}
                cornerColor={trait.accentColor === "#10b981" ? "green" : trait.accentColor === "#f59e0b" ? "gold" : "blue"}
                className="h-full overflow-hidden transition-all duration-300"
                style={{
                  boxShadow: isHovered ? `0 0 30px ${trait.accentColor}18` : "none",
                  borderColor: isHovered ? `${trait.accentColor}40` : undefined,
                } as React.CSSProperties}
              >
                {/* Pattern background */}
                <div
                  className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                  style={{
                    backgroundImage: trait.pattern,
                    backgroundSize: trait.patternSize ?? "20px 20px",
                    opacity: isHovered ? 1 : 0.5,
                  }}
                />

                <div className="relative p-6 pt-8">
                  {/* Icon */}
                  <div
                    className="mb-5 inline-flex h-12 w-12 items-center justify-center border transition-all duration-300"
                    style={{
                      borderColor: `${trait.accentColor}30`,
                      backgroundColor: `${trait.accentColor}10`,
                      color: trait.accentColor,
                      boxShadow: isHovered ? `0 0 20px ${trait.accentColor}30` : "none",
                    }}
                  >
                    <Icon size={22} />
                  </div>

                  {/* Name */}
                  <h3 className="mb-1 text-xl font-black text-slate-100">{trait.name}</h3>

                  {/* Tagline */}
                  <p
                    className="mb-3 font-mono text-xs font-semibold tracking-wider"
                    style={{ color: trait.accentColor }}
                  >
                    {trait.tagline}
                  </p>

                  {/* Description */}
                  <p className="mb-5 text-sm leading-relaxed text-slate-400">{trait.description}</p>

                  {/* Hover caption — comic style */}
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 6 }}
                    transition={{ duration: 0.2 }}
                    className="border border-slate-700/50 bg-[#0c0a08]/80 px-3 py-1.5"
                  >
                    <span className="comic-label text-slate-400">MODULE ACTIVATED</span>
                  </motion.div>
                </div>

                {/* Status tag */}
                <div className="border-t border-slate-700/30 px-4 py-2.5">
                  <StatusTag status="ACTIVE" />
                </div>
              </ComicPanel>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
