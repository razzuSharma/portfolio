"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  innerClassName?: string;
  delay?: number;
};

export default function SectionWrapper({
  children,
  id,
  className,
  innerClassName,
  delay = 0,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1], delay }}
      className={cn("relative py-20 px-6", className)}
    >
      <div className={cn("mx-auto max-w-6xl", innerClassName)}>{children}</div>
    </motion.section>
  );
}
