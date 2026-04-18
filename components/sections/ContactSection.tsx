"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import ComicPanel from "@/components/ComicPanel";
import ContactForm from "@/components/ContactForm";
import { staggerContainer, fadeUp, slideFromLeft, slideFromRight } from "@/lib/animations";
import { Mail, Github, Briefcase } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "DIRECT CHANNEL",
    value: "razzu236@gmail.com",
    href: "mailto:razzu236@gmail.com",
  },
  {
    icon: Github,
    label: "SOURCE ARCHIVE",
    value: "github.com/razzuSharma",
    href: "https://github.com/razzuSharma",
  },
  {
    icon: Briefcase,
    label: "DEPLOYMENT MODE",
    value: "Full-time · Freelance · Contract",
    href: null,
  },
];

export default function ContactSection() {
  return (
    <SectionWrapper id="contact" className="relative overflow-hidden bg-[#0c0a08]">
      {/* Gold ambient orb — very subtle */}
      <div className="pointer-events-none absolute -right-48 -top-24 h-96 w-96 rounded-full bg-[#c4932e]/4 blur-3xl" />

      {/* Section divider */}
      <div className="mb-12 flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
        <span className="comic-label text-slate-600">OPEN CHANNEL</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
      </div>

      {/* Header */}
      <div className="mb-12">
        <ComicPanel label="COMM LINK" cornerColor="gold" className="inline-block px-5 py-3 bg-[#120e0a]/50">
          <p className="text-2xl font-black text-slate-100 sm:text-3xl pt-4">
            Contact
          </p>
          <p className="mt-1 font-mono text-xs text-slate-500">
            Transmission accepted — response within 48h
          </p>
        </ComicPanel>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
        {/* Left — contact methods */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-4"
        >
          <motion.h2 variants={fadeUp} className="text-4xl font-black text-slate-100 sm:text-5xl leading-tight">
            Ready to{" "}
            <span className="bg-gradient-to-r from-[#c4932e] to-[#a87828] bg-clip-text text-transparent text-glow-gold">
              Collaborate?
            </span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-base leading-relaxed text-slate-400 sm:text-lg">
            Whether you need a high-performance web app, a polished UI, or a full product from scratch — let&apos;s build.
          </motion.p>

          <motion.div variants={staggerContainer} className="space-y-3 pt-2">
            {contactMethods.map((method) => (
              <motion.div key={method.label} variants={slideFromLeft}>
                <ComicPanel cornerColor="blue" className="overflow-hidden">
                  {method.href ? (
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 bg-[#120e0a]/40 p-4 transition-all hover:bg-[#120e0a]/70"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-[#5ba0c0]/20 bg-[#5ba0c0]/10 text-[#5ba0c0] transition-all group-hover:bg-[#5ba0c0]/20">
                        <method.icon size={18} />
                      </div>
                      <div>
                        <p className="comic-label text-slate-500">{method.label}</p>
                        <p className="text-sm font-semibold text-slate-300 transition-colors group-hover:text-[#5ba0c0]">
                          {method.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 bg-[#120e0a]/40 p-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-[#c4932e]/20 bg-[#c4932e]/10 text-[#c4932e]">
                        <method.icon size={18} />
                      </div>
                      <div>
                        <p className="comic-label text-slate-500">{method.label}</p>
                        <p className="text-sm font-semibold text-slate-300">{method.value}</p>
                      </div>
                    </div>
                  )}
                </ComicPanel>
              </motion.div>
            ))}
          </motion.div>

          {/* Available indicator */}
          <motion.div variants={fadeUp} className="pt-2">
            <ComicPanel cornerColor="green" className="inline-block overflow-hidden">
              <div className="flex items-center gap-3 bg-emerald-500/5 px-4 py-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span className="comic-label text-emerald-400">AVAILABLE FOR NEW PROJECTS</span>
              </div>
            </ComicPanel>
          </motion.div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          variants={slideFromRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <ComicPanel cornerColor="gold" className="overflow-hidden bg-[#120e0a]/60 backdrop-blur-sm">
            <div className="border-b border-slate-700/30 px-6 py-3">
              <span className="comic-label text-slate-500">TRANSMISSION FORM</span>
            </div>
            <div className="p-6">
              <ContactForm />
            </div>
          </ComicPanel>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
