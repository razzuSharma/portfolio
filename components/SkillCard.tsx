"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type SkillCardProps = {
  icon: LucideIcon;
  name: string;
  level: number; // 1–5
};

export default function SkillCard({ icon: Icon, name, level }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.25 }}
      className="group flex items-center gap-3 rounded-xl border border-[#00d4ff]/12 bg-[#0f1929]/70 px-4 py-3 backdrop-blur-sm transition-all hover:border-[#00d4ff]/35 hover:bg-[#0f1929]/90"
      style={{ boxShadow: "0 0 0 rgba(0,212,255,0)" }}
    >
      {/* Icon */}
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#00d4ff]/10 text-[#00d4ff] transition-all group-hover:bg-[#00d4ff]/20 group-hover:shadow-[0_0_16px_rgba(0,212,255,0.3)]">
        <Icon size={18} />
      </div>

      {/* Name + level dots */}
      <div className="flex flex-1 items-center justify-between gap-2">
        <span className="text-sm font-medium text-slate-200">{name}</span>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full transition-all ${
                i < level
                  ? "bg-[#00d4ff] group-hover:shadow-[0_0_6px_rgba(0,212,255,0.8)]"
                  : "bg-slate-700"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
