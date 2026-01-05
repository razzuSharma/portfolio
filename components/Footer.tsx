"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "/contact", label: "Email" },
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="relative  border-t border-slate-800/80 bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Decorative gradient line */}
      <div className="absolute top-5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                <span className="text-sm font-bold text-slate-900">RS</span>
              </div>
              <span className="text-lg font-bold text-slate-100">Raju Sharma</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Building modern web experiences with cutting-edge technologies and thoughtful design.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-slate-400 hover:text-teal-400 transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
              Navigation
            </h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-slate-400 hover:text-teal-400 transition-colors w-fit"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
              Built With
            </h3>
            <div className="flex flex-col space-y-2">
              <span className="text-sm text-slate-400">Next.js</span>
              <span className="text-sm text-slate-400">TypeScript</span>
              <span className="text-sm text-slate-400">Tailwind CSS</span>
              <span className="text-sm text-slate-400">Framer Motion</span>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
              Let&apos;s Connect
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Have a project in mind? Let&apos;s work together to bring your ideas to life.
            </p>
            <Link
              href="/contact"
              className="inline-block px-4 py-2 text-sm font-medium text-teal-400 border border-teal-500/30 rounded-lg hover:bg-teal-500/10 hover:border-teal-500/50 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-slate-500 text-center sm:text-left">
              © {currentYear}{" "}
              <span className="font-medium text-slate-300">Raju Sharma</span>. All rights reserved.
            </p>
            <p className="text-xs text-slate-500 text-center sm:text-right">
              Crafted with <span className="text-teal-400">♥</span> using modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
