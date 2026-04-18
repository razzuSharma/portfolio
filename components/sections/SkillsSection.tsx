"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import ComicPanel from "@/components/ComicPanel";
import SkillCard from "@/components/SkillCard";
import { staggerContainer, fadeUp } from "@/lib/animations";
import {
  Globe,
  Layers,
  Wind,
  Zap,
  Server,
  Database,
  Link2,
  GitBranch,
  Cloud,
  Figma,
  Terminal,
  Code2,
} from "lucide-react";

const skillCategories = [
  {
    label: "FRONTEND",
    skills: [
      { icon: Globe, name: "React / Next.js", level: 5 },
      { icon: Code2, name: "TypeScript", level: 5 },
      { icon: Wind, name: "Tailwind CSS", level: 5 },
      { icon: Zap, name: "Framer Motion", level: 4 },
      { icon: Layers, name: "HTML / CSS", level: 5 },
    ],
  },
  {
    label: "BACKEND",
    skills: [
      { icon: Server, name: "Node.js", level: 4 },
      { icon: Link2, name: "REST APIs", level: 4 },
      { icon: Database, name: "PostgreSQL", level: 3 },
      { icon: Database, name: "Prisma / Drizzle", level: 3 },
    ],
  },
  {
    label: "TOOLS",
    skills: [
      { icon: GitBranch, name: "Git / GitHub", level: 5 },
      { icon: Cloud, name: "Vercel / Deploy", level: 4 },
      { icon: Figma, name: "Figma", level: 3 },
      { icon: Terminal, name: "Linux / CLI", level: 4 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-gradient-to-b from-[#0a0a0f] via-[#0d1420] to-[#0a0a0f]">
      {/* Section header */}
      <div className="mb-14">
        <ComicPanel label="LOADOUT" cornerColor="blue" className="inline-block px-5 py-3 bg-[#0f1929]/50">
          <p className="text-2xl font-black text-slate-100 sm:text-3xl pt-4">Tech Arsenal</p>
          <p className="mt-1 font-mono text-xs text-slate-500">
            Equipped modules — stack registry
          </p>
        </ComicPanel>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={category.label}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            transition={{ delayChildren: catIdx * 0.1 }}
          >
            {/* Category label */}
            <motion.p
              variants={fadeUp}
              className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#f59e0b]"
            >
              {category.label}
            </motion.p>

            {/* Skill cards */}
            <div className="flex flex-col gap-3">
              {category.skills.map((skill, skillIdx) => (
                <motion.div
                  key={skill.name}
                  variants={fadeUp}
                  transition={{ delay: skillIdx * 0.05 }}
                >
                  <SkillCard {...skill} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
