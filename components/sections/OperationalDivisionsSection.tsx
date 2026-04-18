"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import ComicPanel from "@/components/ComicPanel";
import StatusTag from "@/components/StatusTag";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { Globe, Cpu, LayoutDashboard, FileText, Box, Gauge } from "lucide-react";

const divisions = [
  {
    id: "RIS",
    code: "DIV-01",
    name: "Reality Interface System",
    sub: "Frontend Engineering",
    description: "Precision-crafted user interfaces. Responsive, accessible, performant.",
    icon: Globe,
    status: "ACTIVE" as const,
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
    accent: "#5ba0c0",
  },
  {
    id: "CLE",
    code: "DIV-02",
    name: "Core Logic Engine",
    sub: "Backend & APIs",
    description: "Server architecture, REST APIs, data modeling, auth systems.",
    icon: Cpu,
    status: "ACTIVE" as const,
    tags: ["Node.js", "PostgreSQL", "Prisma", "REST"],
    accent: "#c4932e",
  },
  {
    id: "CCS",
    code: "DIV-03",
    name: "Command Center Systems",
    sub: "Dashboards & Admin",
    description: "Data visualization, control panels, analytics interfaces.",
    icon: LayoutDashboard,
    status: "STABLE" as const,
    tags: ["Charts", "Tables", "Real-time", "Filters"],
    accent: "#5ba0c0",
  },
  {
    id: "IBE",
    code: "DIV-04",
    name: "Identity Builder Engine",
    sub: "Resume & Profile Tools",
    description: "Document generation, PDF export, template systems.",
    icon: FileText,
    status: "ACTIVE" as const,
    tags: ["PDF", "Templates", "Export", "Editor"],
    accent: "#4a9e7a",
  },
  {
    id: "ASL",
    code: "DIV-05",
    name: "Avatar Simulation Lab",
    sub: "3D & Immersive Web",
    description: "Three.js experiments, 3D avatars, spatial UI concepts.",
    icon: Box,
    status: "BUILDING" as const,
    tags: ["Three.js", "WebGL", "R3F", "3D"],
    accent: "#7b5c9e",
  },
  {
    id: "SU",
    code: "DIV-06",
    name: "Stability Unit",
    sub: "Performance & Optimization",
    description: "Core Web Vitals, bundle audits, caching strategies, CI/CD.",
    icon: Gauge,
    status: "STABLE" as const,
    tags: ["Performance", "Lighthouse", "Vercel", "CI/CD"],
    accent: "#5ba0c0",
  },
];

export default function OperationalDivisionsSection() {
  return (
    <SectionWrapper id="divisions" className="bg-gradient-to-b from-[#0c0a08] to-[#0d1420]">
      {/* Section header */}
      <div className="mb-14 flex items-end justify-between gap-6 flex-wrap">
        <div>
          <ComicPanel label="SYSTEM MAP" cornerColor="gold" className="inline-block px-5 py-3 bg-[#120e0a]/50">
            <p className="text-2xl font-black text-slate-100 sm:text-3xl pt-4">
              Operational Divisions
            </p>
            <p className="mt-1 font-mono text-xs text-slate-500">
              Active service units — capability registry
            </p>
          </ComicPanel>
        </div>
        <div className="comic-label text-slate-600">
          6 UNITS ONLINE · SYSTEM NOMINAL
        </div>
      </div>

      {/* Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {divisions.map((div) => {
          const Icon = div.icon;
          return (
            <motion.div key={div.id} variants={fadeUp}>
              <ComicPanel
                label={div.code}
                cornerColor={
                  div.accent === "#c4932e" ? "gold"
                  : div.accent === "#4a9e7a" ? "green"
                  : div.accent === "#7b5c9e" ? "slate"
                  : "blue"
                }
                className="group h-full overflow-hidden bg-[#120e0a]/50 backdrop-blur-sm transition-all duration-300 hover:bg-[#120e0a]/80"
              >
                {/* Top section */}
                <div className="p-6 pt-8">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    {/* Icon */}
                    <div
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center border transition-all duration-300 group-hover:shadow-[0_0_16px_currentColor]"
                      style={{
                        borderColor: `${div.accent}30`,
                        backgroundColor: `${div.accent}10`,
                        color: div.accent,
                      }}
                    >
                      <Icon size={20} />
                    </div>

                    <StatusTag status={div.status} />
                  </div>

                  {/* Name */}
                  <h3
                    className="mb-0.5 text-base font-black text-slate-100 transition-colors duration-200 group-hover:text-slate-50"
                  >
                    {div.name}
                  </h3>
                  <p className="mb-3 font-mono text-[10px] tracking-widest text-slate-500">{div.sub}</p>

                  {/* Description */}
                  <p className="mb-4 text-sm leading-relaxed text-slate-400">{div.description}</p>

                  {/* Tags — sharp mono labels */}
                  <div className="flex flex-wrap gap-1.5">
                    {div.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-slate-700/50 bg-[#0c0a08]/60 px-2 py-0.5 font-mono text-[10px] tracking-wider text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom line — unit ID */}
                <div className="border-t border-slate-700/30 px-4 py-2.5">
                  <div className="flex items-center justify-between">
                    <span className="comic-label text-slate-600">{div.id} DIVISION</span>
                    <div
                      className="h-px w-12 transition-all duration-300 group-hover:w-20"
                      style={{ backgroundColor: `${div.accent}50` }}
                    />
                  </div>
                </div>
              </ComicPanel>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
