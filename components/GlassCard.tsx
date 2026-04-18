"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type GlassCardProps = HTMLMotionProps<"div"> & {
  glowColor?: "blue" | "gold" | "none";
  hover?: boolean;
};

export default function GlassCard({
  children,
  className,
  glowColor = "blue",
  hover = true,
  ...props
}: GlassCardProps) {
  const borderColor =
    glowColor === "blue"
      ? "rgba(0, 212, 255, 0.12)"
      : glowColor === "gold"
      ? "rgba(245, 158, 11, 0.12)"
      : "rgba(255,255,255,0.06)";

  const hoverBorderColor =
    glowColor === "blue"
      ? "rgba(0, 212, 255, 0.35)"
      : glowColor === "gold"
      ? "rgba(245, 158, 11, 0.35)"
      : "rgba(255,255,255,0.15)";

  const hoverShadow =
    glowColor === "blue"
      ? "0 0 40px rgba(0, 212, 255, 0.1)"
      : glowColor === "gold"
      ? "0 0 40px rgba(245, 158, 11, 0.1)"
      : "none";

  return (
    <motion.div
      style={{ border: `1px solid ${borderColor}` }}
      whileHover={
        hover
          ? {
              scale: 1.005,
              borderColor: hoverBorderColor,
              boxShadow: hoverShadow,
            }
          : undefined
      }
      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
      className={cn(
        "rounded-2xl backdrop-blur-xl bg-[#0f1929]/70",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
