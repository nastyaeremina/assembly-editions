"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Returns continuous scroll progress (0 → 1) for each section.
 * Used by ChapterBar to render per-segment fill bars.
 *
 * Progress = how far the viewport centre has travelled through the section.
 * rAF-throttled for 60 fps without layout thrashing.
 */
export function useSectionProgress(
  sectionIds: string[]
): Record<string, number> {
  const [progress, setProgress] = useState<Record<string, number>>({});
  const rafRef = useRef(0);

  useEffect(() => {
    function compute() {
      const viewportCenter = window.scrollY + window.innerHeight / 2;
      const next: Record<string, number> = {};

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) {
          next[id] = 0;
          continue;
        }
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (height === 0) {
          next[id] = 0;
          continue;
        }
        const p = (viewportCenter - top) / height;
        next[id] = Math.max(0, Math.min(1, p));
      }

      setProgress(next);
    }

    function onScroll() {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(compute);
    }

    compute(); // initial
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionIds]);

  return progress;
}
