// app/page.tsx or pages/index.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-white/80 to-secondary/10 dark:from-black dark:via-gray-900 dark:to-gray-950">
      {/* subtle blurred circle background decoration */}
      <div className="absolute -z-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl top-20 left-10" />
      <div className="absolute -z-10 w-72 h-72 bg-secondary/30 rounded-full blur-2xl bottom-20 right-10" />

      <main className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center px-4 pt-32 pb-16 text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent drop-shadow-xl"
        >
          Welcome to My Portfolio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl"
        >
          I'm a <span className="font-semibold text-primary">software engineer</span> passionate about building
          <span className="text-secondary font-semibold"> fast</span>, 
          <span className="text-secondary font-semibold"> beautiful</span>, and 
          <span className="text-secondary font-semibold"> user-friendly</span> web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Link
            href="/projects"
            className="relative inline-block px-8 py-3 rounded-full bg-primary text-white font-semibold shadow-xl hover:bg-primary/90 transition"
          >
            <span className="absolute inset-0 rounded-full border-2 border-primary animate-pulse"></span>
            <span className="relative">View My Projects</span>
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
