// components/Header.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ WebkitBackdropFilter: "blur(24px)" }}
    >
      <div className="relative max-w-6xl mx-auto flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3 md:p-4 rounded-2xl border border-white/30 dark:border-white/10 bg-white/40 dark:bg-black/30 shadow-lg backdrop-blur-2xl overflow-hidden">
        {/* Glassmorphism gradient overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 via-white/10 to-transparent dark:from-black/40 dark:via-black/10 dark:to-transparent" />
        <Link
          href="/"
          className="relative z-10 text-xl sm:text-2xl font-serif font-bold text-gray-900 dark:text-gray-100 drop-shadow"
        >
          Raju Sharma
        </Link>
        {/* Desktop nav */}
        <nav className="relative z-10 hidden md:flex space-x-4 sm:space-x-6 text-xs sm:text-sm font-medium">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link
            href="/projects"
            className="hover:text-primary transition-colors"
          >
            Projects
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blogs
          </Link>
        </nav>
        {/* Mobile menu button */}
        <button
          className="relative z-10 md:hidden p-2 rounded-md bg-white/30 dark:bg-black/30 hover:bg-white/50 dark:hover:bg-black/50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
      </div>
      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-white/20 dark:border-white/10 flex flex-col px-3 sm:px-4 pb-4 space-y-2 shadow-lg animate-fade-in">
          <Link
            href="/"
            className="hover:text-primary transition-colors py-2 text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="hover:text-primary transition-colors py-2 text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="hover:text-primary transition-colors py-2 text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary transition-colors py-2 text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
