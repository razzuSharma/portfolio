"use client";

import { motion } from "framer-motion";

type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
  side: "left" | "right";
  isCurrent?: boolean;
  index: number;
};

export default function TimelineItem({
  year,
  title,
  description,
  side,
  isCurrent = false,
  index,
}: TimelineItemProps) {
  const isLeft = side === "left";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      className={`relative mb-12 flex w-full items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}
    >
      {/* Content card — half width, offset from center */}
      <div className={`w-5/12 ${isLeft ? "pr-8 text-right" : "pl-8 text-left"}`}>
        <div className="rounded-xl border border-[#00d4ff]/12 bg-[#0f1929]/70 p-5 backdrop-blur-sm transition-all hover:border-[#00d4ff]/30 hover:shadow-[0_0_20px_rgba(0,212,255,0.08)]">
          <p className={`mb-1 text-xs font-mono font-semibold text-[#f59e0b]`}>{year}</p>
          <h3 className="mb-2 text-base font-bold text-slate-100">{title}</h3>
          <p className="text-sm leading-relaxed text-slate-400">{description}</p>
        </div>
      </div>

      {/* Center spine dot */}
      <div className="relative flex w-2/12 justify-center">
        {isCurrent ? (
          <span className="relative flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f59e0b] opacity-60" />
            <span className="relative inline-flex h-4 w-4 rounded-full bg-[#f59e0b] ring-4 ring-[#f59e0b]/20" />
          </span>
        ) : (
          <span className="h-3 w-3 rounded-full bg-[#00d4ff] ring-4 ring-[#00d4ff]/15" />
        )}
      </div>

      {/* Empty half */}
      <div className="w-5/12" />
    </motion.div>
  );
}
