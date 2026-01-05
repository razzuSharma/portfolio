// components/Header.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-3 py-2 sm:px-4 sm:py-3 md:px-4 md:py-3">
        <div className="absolute inset-0 -z-10 rounded-2xl border border-teal-500/25 bg-slate-950/80 shadow-[0_18px_60px_rgba(15,118,110,0.55)] backdrop-blur-2xl" />
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-teal-500/20 via-transparent to-cyan-400/20" />

        <Link
          href="/"
          className="relative z-10 flex items-center gap-2 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 via-cyan-400 to-emerald-400 text-xs font-bold text-slate-950 shadow-md">
            RS
          </span>
          <span className="drop-shadow-sm">Raju Sharma Dahal</span>
        </Link>

        {/* Desktop nav */}
        <nav className="relative z-10 hidden items-center gap-4 text-xs font-medium text-slate-300 sm:flex sm:gap-6 sm:text-sm">
          <Link
            href="/"
            className="transition-colors hover:text-teal-300"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="transition-colors hover:text-teal-300"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-teal-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-teal-300"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="transition-colors hover:text-teal-300"
          >
            Blogs
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="relative z-10 flex items-center justify-center rounded-full border border-teal-500/40 bg-slate-900/70 p-2 text-slate-100 shadow-sm transition hover:border-teal-400/80 hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="flex flex-col space-y-1 border-b border-slate-800/80 bg-slate-950/95 px-3 pb-4 pt-1 text-sm text-slate-200 shadow-lg backdrop-blur-xl sm:px-4 md:hidden">
          <Link
            href="/"
            className="rounded-lg px-1 py-2 font-medium transition-colors hover:bg-slate-900 hover:text-teal-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="rounded-lg px-1 py-2 font-medium transition-colors hover:bg-slate-900 hover:text-teal-300"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="rounded-lg px-1 py-2 font-medium transition-colors hover:bg-slate-900 hover:text-teal-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="rounded-lg px-1 py-2 font-medium transition-colors hover:bg-slate-900 hover:text-teal-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="rounded-lg px-1 py-2 font-medium transition-colors hover:bg-slate-900 hover:text-teal-300"
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </Link>
        </div>
      )}
    </header>
  );
}
