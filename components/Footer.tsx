"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/razzuSharma", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "/#contact", label: "Email" },
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/#projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/#contact", label: "Contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="relative border-t border-[#00d4ff]/10 bg-[#0a0a0f]">
      {/* Decorative gradient line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/40 to-transparent" />

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-slate-700 bg-[#0f1929] text-slate-400 shadow-lg transition-all hover:border-[#00d4ff]/50 hover:text-[#00d4ff]"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} />
      </motion.button>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="mx-auto max-w-6xl px-6 py-14"
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link href="/" className="group flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#0ea5e9] transition-transform group-hover:scale-105">
                <span className="text-sm font-bold text-[#0a0a0f]">RS</span>
              </div>
              <span className="text-lg font-bold text-slate-100">Raju Sharma</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Building high-performance web experiences with modern technologies and cinematic polish.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700/50 bg-slate-800/30 text-slate-400 transition-all hover:border-[#00d4ff]/40 hover:bg-slate-800/60 hover:text-[#00d4ff]"
                  aria-label={label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Navigation
            </h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex w-fit items-center gap-1 text-sm text-slate-400 transition-colors hover:text-[#00d4ff]"
                >
                  <span className="h-px w-0 bg-[#00d4ff] transition-all group-hover:w-3" />
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Built With
            </h3>
            <div className="flex flex-col space-y-2">
              {["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech) => (
                <span key={tech} className="inline-flex w-fit items-center gap-2 text-sm text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00d4ff]/60" />
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Let&apos;s Connect
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Have a project in mind? Let&apos;s work together to bring your ideas to life.
            </p>
            <Link href="/#contact">
              <motion.span
                className="inline-block rounded-lg border border-[#00d4ff]/30 px-4 py-2 text-sm font-medium text-[#00d4ff] transition-all hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/10"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div variants={itemVariants} className="mt-12 border-t border-slate-800/80 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-xs text-slate-500 sm:text-left">
              &copy; {currentYear}{" "}
              <span className="font-medium text-slate-300">Raju Sharma Dahal</span>. All rights reserved.
            </p>
            <p className="flex items-center gap-1 text-center text-xs text-slate-500 sm:text-right">
              Crafted with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
              >
                <Heart size={12} className="fill-[#00d4ff] text-[#00d4ff]" />
              </motion.span>
              using modern web technologies
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
