"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, ImageOff } from "lucide-react";
import { useState, useRef } from "react";

type Props = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  index?: number;
};

const isSvgImage = (src: string) => src.endsWith(".svg");

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  featured = false,
  index = 0,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const rotateX = isHovered ? (mousePosition.y - 0.5) * -10 : 0;
  const rotateY = isHovered ? (mousePosition.x - 0.5) * 10 : 0;
  const svgImage = isSvgImage(image);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: "preserve-3d",
      }}
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
        featured
          ? "border-[#00d4ff]/30 bg-gradient-to-br from-slate-800/90 to-[#0f1929]/90 shadow-xl shadow-[#00d4ff]/10"
          : "border-slate-700/50 bg-[#0f1929]/80 hover:border-[#00d4ff]/30 hover:shadow-xl hover:shadow-[#00d4ff]/10"
      }`}
    >
      {/* Animated gradient background on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/8 via-sky-500/5 to-[#0ea5e9]/8"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Spotlight effect following mouse */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(0, 212, 255, 0.08), transparent 40%)`,
        }}
      />

      {/* Featured badge — gold */}
      {featured && (
        <div className="absolute -right-8 top-4 z-10 rotate-45 bg-gradient-to-r from-[#f59e0b] to-[#d97706] px-10 py-1">
          <span className="text-xs font-bold text-slate-950">FEATURED</span>
        </div>
      )}

      {/* Image container */}
      <div className="relative h-48 overflow-hidden bg-slate-800/50 sm:h-52">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
        >
          {imageError ? (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-slate-800/80 text-slate-500">
              <ImageOff size={32} />
              <span className="text-xs">Image not available</span>
            </div>
          ) : svgImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image} alt={title} className="h-full w-full object-cover" onError={() => setImageError(true)} />
          ) : (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              onError={() => setImageError(true)}
              unoptimized={image.startsWith("http")}
            />
          )}
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1929] via-[#0f1929]/40 to-transparent" />

        {/* Hover overlay with links */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-3 bg-[#0a0a0f]/60 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {liveUrl && liveUrl !== "#" && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#00d4ff] px-4 py-2 text-sm font-semibold text-[#0a0a0f] shadow-lg shadow-[#00d4ff]/20 transition-colors hover:bg-sky-300"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.05, duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={16} />
              Live Demo
            </motion.a>
          )}
          {githubUrl && githubUrl !== "#" && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800/80 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-sm transition-colors hover:border-[#00d4ff]/70 hover:text-[#00d4ff]"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.1, duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={16} />
              Code
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-slate-100 transition-colors group-hover:text-[#00d4ff] sm:text-xl">
            {title}
          </h3>
          <motion.div
            animate={{ x: isHovered ? 2 : 0, y: isHovered ? -2 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight size={18} className="text-slate-500 transition-colors group-hover:text-[#00d4ff]" />
          </motion.div>
        </div>

        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-slate-400">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + tagIndex * 0.05 + 0.2 }}
              className="relative overflow-hidden rounded-full border border-[#00d4ff]/20 bg-slate-800/60 px-2.5 py-1 text-xs font-medium text-[#00d4ff] transition-all group-hover:border-[#00d4ff]/40 group-hover:bg-slate-800"
            >
              <span className="relative z-10">{tag}</span>
              <motion.div
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#00d4ff]/10 to-transparent"
                animate={{ translateX: isHovered ? "200%" : "-100%" }}
                transition={{ duration: 0.8, delay: tagIndex * 0.1 }}
              />
            </motion.span>
          ))}
        </div>

        {/* Bottom border glow on hover */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/50 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}
