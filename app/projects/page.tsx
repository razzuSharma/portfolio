import React from "react";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Modern Dashboard",
    description: "A beautiful dashboard app with analytics and real-time data.",
    image: "/globe.svg",
    tags: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my work and skills.",
    image: "/window.svg",
    tags: ["React", "Framer Motion", "UI/UX"],
  },
  {
    title: "E-commerce Store",
    description: "A full-featured e-commerce platform with payment integration.",
    image: "/file.svg",
    tags: ["Commerce", "Stripe", "Next.js"],
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white/80 to-secondary/10 dark:from-black dark:via-gray-900 dark:to-gray-950 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
