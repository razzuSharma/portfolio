import React from "react";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Modern Dashboard",
    description: "A high-contrast analytics dashboard with smooth transitions and responsive charts.",
    image: "/globe.svg",
    tags: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    title: "Portfolio Website",
    description: "A dark teal, motion-rich portfolio for showcasing work and personality.",
    image: "/window.svg",
    tags: ["React", "Framer Motion", "UI/UX"],
  },
  {
    title: "E-commerce Store",
    description: "A performant storefront with secure checkout, wishlists, and product discovery.",
    image: "/file.svg",
    tags: ["Commerce", "Stripe", "Next.js"],
  },
];

const ProjectsPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 py-24 text-slate-50">
      {/* teal accents */}
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10">
        <header className="max-w-3xl space-y-4">
          <p className="inline-flex items-center rounded-full border border-teal-500/30 bg-slate-950/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-teal-300/90">
            Selected Work
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            <span className="block text-slate-100">Projects with a</span>
            <span className="block bg-gradient-to-r from-teal-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              dark teal personality.
            </span>
          </h1>
          <p className="text-sm text-slate-300/90 sm:text-base">
            A curated set of interfaces, dashboards, and products that balance{" "}
            <span className="font-semibold text-teal-200">speed</span>,{" "}
            <span className="font-semibold text-teal-200">clarity</span>, and{" "}
            <span className="font-semibold text-teal-200">delight</span>. Each project is built
            with a focus on usability, performance, and a cohesive teal‑forward visual system.
          </p>
        </header>

        <main className="space-y-8">
          <section className="grid grid-cols-1 gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>

            <aside className="flex flex-col justify-between gap-4 rounded-3xl border border-teal-500/25 bg-slate-950/80 p-5 shadow-[0_20px_70px_rgba(15,118,110,0.5)]">
              <div className="space-y-3">
                <h2 className="text-base font-semibold text-slate-50 sm:text-lg">
                  How I approach every build
                </h2>
                <p className="text-xs text-slate-300/90 sm:text-sm">
                  From the first wireframe to the final deploy, I care about{" "}
                  <span className="font-medium text-teal-200">micro‑interactions</span>,
                  crisp typography, and{" "}
                  <span className="font-medium text-teal-200">dark‑mode ergonomics</span>. I aim
                  to make each project feel polished, calm, and reliable.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-[0.7rem] text-slate-300 sm:text-xs">
                <div className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-3">
                  <p className="font-semibold text-slate-100">Stack</p>
                  <p className="mt-1 text-slate-400">
                    Next.js, TypeScript, Tailwind, Framer Motion.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-3">
                  <p className="font-semibold text-slate-100">Focus</p>
                  <p className="mt-1 text-slate-400">
                    Visual hierarchy, accessibility, and snappy performance.
                  </p>
                </div>
              </div>
            </aside>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ProjectsPage;
