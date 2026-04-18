"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/#traits", label: "Traits" },
  { href: "/#divisions", label: "Divisions" },
  { href: "/#projects", label: "Archive" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/blog") return pathname === "/blog" || pathname.startsWith("/blog/");
    return false;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        className="mx-auto px-4 py-3 sm:px-6"
      >
        <div
          className={`relative mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
            scrolled
              ? "border-[#5ba0c0]/20 bg-[#0c0a08]/90 shadow-[0_18px_60px_rgba(0,212,255,0.1)] backdrop-blur-2xl"
              : "border-transparent bg-[#0c0a08]/50 backdrop-blur-xl"
          } ${isOpen ? "rounded-b-none" : ""}`}
          style={{ borderWidth: "1px", borderStyle: "solid" }}
        >
          {/* Gradient background */}
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#5ba0c0]/8 via-transparent to-[#4a8aaa]/8" />
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 flex items-center gap-2 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl"
          >
            <motion.span
              className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#5ba0c0] to-[#4a8aaa] text-xs font-bold text-[#0c0a08] shadow-md sm:h-8 sm:w-8"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              RS
            </motion.span>
            <span className="hidden drop-shadow-sm sm:inline">Raju Sharma Dahal</span>
            <span className="drop-shadow-sm sm:hidden">Raju</span>
          </Link>

          {/* Desktop nav */}
          <nav className="relative z-10 hidden items-center gap-1 text-sm font-medium text-slate-300 md:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-lg px-4 py-2 transition-all ${
                    active
                      ? "text-[#5ba0c0]"
                      : "hover:bg-slate-800/50 hover:text-[#5ba0c0]"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg bg-slate-800/60"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <motion.button
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg border border-[#5ba0c0]/30 bg-slate-900/70 text-slate-100 shadow-sm transition-colors hover:border-[#5ba0c0]/60 hover:bg-slate-800/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5ba0c0] md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              className="mx-auto max-w-6xl overflow-hidden rounded-b-2xl border-x border-b border-[#5ba0c0]/15 bg-[#0c0a08]/95 shadow-lg backdrop-blur-xl md:hidden"
            >
              <nav className="flex flex-col space-y-1 p-3 text-sm text-slate-200">
                {navLinks.map((link, index) => {
                  const active = isActive(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between rounded-lg px-4 py-3 font-medium transition-all ${
                          active
                            ? "bg-slate-800/80 text-[#5ba0c0]"
                            : "text-slate-300 hover:bg-slate-900/80 hover:text-[#5ba0c0]"
                        }`}
                      >
                        {link.label}
                        {active && (
                          <motion.span
                            layoutId="activeMobileNav"
                            className="h-1.5 w-1.5 rounded-full bg-[#5ba0c0]"
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
