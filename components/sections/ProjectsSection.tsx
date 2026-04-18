"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import ComicPanel from "@/components/ComicPanel";
import StatusTag from "@/components/StatusTag";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useState } from "react";

const missions = [
  {
    code: "MISSION 01",
    title: "Resume Artisan",
    description: "A free tool to create a beautiful resume in minutes. Real-time preview, multiple templates, and PDF export.",
    image: "/images/projects/resume-builder.png",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    liveUrl: "https://resume-builder-khaki-five.vercel.app/",
    githubUrl: "https://github.com/razzuSharma/resume-builder",
    status: "ACTIVE" as const,
    classification: "IDENTITY BUILDER ENGINE",
  },
  {
    code: "MISSION 02",
    title: "Shivam Marble & Tiles",
    description: "E-commerce presence for a marble and tile company. Product catalog, contact system, and polished UI.",
    image: "/images/projects/shivam-marbles.png",
    tags: ["React", "Framer Motion", "UI/UX"],
    liveUrl: "https://www.sibamstoneworks.shop/",
    githubUrl: "#",
    status: "STABLE" as const,
    classification: "REALITY INTERFACE SYSTEM",
  },
  {
    code: "MISSION 03",
    title: "Tour-gasm",
    description: "Tour booking platform with catalog browsing, availability system, and seamless booking experience.",
    image: "/images/projects/tour-gasm.png",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    liveUrl: "https://tour-gasm.vercel.app/",
    githubUrl: "https://github.com/razzuSharma/tour-gasm",
    status: "STABLE" as const,
    classification: "CORE LOGIC ENGINE",
  },
];

function MissionCard({ mission, index }: { mission: typeof missions[0]; index: number }) {
  const [imageError, setImageError] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div variants={fadeUp} style={{ transitionDelay: `${index * 0.08}s` }}>
      <ComicPanel
        label={mission.code}
        cornerColor="blue"
        className={`group h-full overflow-hidden bg-[#120e0a]/60 transition-all duration-300 ${
          hovered ? "shadow-[0_0_30px_rgba(0,212,255,0.08)]" : ""
        }`}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Image area */}
          <div className="relative h-48 overflow-hidden border-b border-slate-700/40 bg-slate-900/50 sm:h-52">
            {!imageError ? (
              <motion.div
                className="absolute inset-0"
                animate={{ scale: hovered ? 1.06 : 1 }}
                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <Image
                  src={mission.image}
                  alt={mission.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  onError={() => setImageError(true)}
                />
              </motion.div>
            ) : (
              <div className="flex h-full items-center justify-center font-mono text-xs text-slate-600">
                IMAGE UNAVAILABLE
              </div>
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#120e0a] via-[#120e0a]/20 to-transparent" />

            {/* Hover links overlay */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center gap-3 bg-[#0c0a08]/70"
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {mission.liveUrl && mission.liveUrl !== "#" && (
                <motion.a
                  href={mission.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  animate={{ y: hovered ? 0 : 12, opacity: hovered ? 1 : 0 }}
                  transition={{ delay: 0.05 }}
                  onClick={(e) => e.stopPropagation()}
                  className="border border-[#5ba0c0] bg-[#5ba0c0] px-4 py-2 font-mono text-xs font-bold text-[#0c0a08] transition-colors hover:bg-sky-300"
                >
                  <ExternalLink size={14} className="mr-1.5 inline" />
                  LIVE DEMO
                </motion.a>
              )}
              {mission.githubUrl && mission.githubUrl !== "#" && (
                <motion.a
                  href={mission.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  animate={{ y: hovered ? 0 : 12, opacity: hovered ? 1 : 0 }}
                  transition={{ delay: 0.08 }}
                  onClick={(e) => e.stopPropagation()}
                  className="border border-slate-600 bg-slate-800/80 px-4 py-2 font-mono text-xs font-bold text-slate-300 transition-colors hover:border-[#5ba0c0]/50"
                >
                  <Github size={14} className="mr-1.5 inline" />
                  SOURCE
                </motion.a>
              )}
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-5 pt-6">
            {/* Classification + status */}
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="comic-label text-[#5ba0c0]/50 truncate">
                {mission.classification}
              </span>
              <StatusTag status={mission.status} className="flex-shrink-0" />
            </div>

            {/* Title */}
            <h3 className="mb-2 text-lg font-black text-slate-100 transition-colors group-hover:text-[#5ba0c0]">
              {mission.title}
            </h3>

            {/* Description */}
            <p className="mb-4 text-sm leading-relaxed text-slate-400 line-clamp-2">
              {mission.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {mission.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-slate-700/50 bg-[#0c0a08]/60 px-2 py-0.5 font-mono text-[10px] tracking-wider text-slate-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-slate-700/30 px-5 py-3">
            <motion.div
              animate={{ x: hovered ? 4 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-1.5 font-mono text-xs text-[#5ba0c0]/60 group-hover:text-[#5ba0c0]"
            >
              VIEW MISSION <ArrowRight size={12} />
            </motion.div>
          </div>
        </div>
      </ComicPanel>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="bg-[#0c0a08]">
      {/* Section divider line */}
      <div className="mb-14 flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
        <span className="comic-label text-slate-600">CLASSIFIED RECORDS</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
      </div>

      {/* Header */}
      <div className="mb-12">
        <ComicPanel label="ARCHIVE ACCESS" cornerColor="blue" className="inline-block px-5 py-3 bg-[#120e0a]/50">
          <p className="text-2xl font-black text-slate-100 sm:text-3xl pt-4">
            Mission Archive
          </p>
          <p className="mt-1 font-mono text-xs text-slate-500">
            Completed operations — field reports
          </p>
        </ComicPanel>
      </div>

      {/* Mission cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {missions.map((mission, index) => (
          <MissionCard key={mission.code} mission={mission} index={index} />
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 flex justify-center"
      >
        <Link
          href="/projects"
          className="group border border-[#5ba0c0]/30 px-7 py-3 font-mono text-sm font-bold tracking-widest text-[#5ba0c0] transition-all hover:border-[#5ba0c0]/60 hover:bg-[#5ba0c0]/6"
        >
          FULL ARCHIVE
          <ArrowRight size={14} className="ml-2 inline transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </SectionWrapper>
  );
}
