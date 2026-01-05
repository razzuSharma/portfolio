"use client";

import { useEffect } from "react";

export default function ReadingProgress() {
  useEffect(() => {
    const updateProgress = () => {
      const article = document.querySelector(".blog-content") as HTMLElement;
      if (!article) return;

      const articleTop = article.getBoundingClientRect().top + window.scrollY;
      const articleHeight = article.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      const progress = Math.min(
        Math.max(
          ((scrollTop + windowHeight - articleTop) / articleHeight) * 100,
          0
        ),
        100
      );

      const progressBar = document.getElementById("reading-progress");
      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }
    };

    window.addEventListener("scroll", updateProgress);
    window.addEventListener("resize", updateProgress);
    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return null;
}

