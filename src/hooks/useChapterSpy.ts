"use client";

import { useState, useEffect } from "react";
import { SPLIT_SECTIONS } from "@/lib/constants";

const SUB_LETTERS = "ABCDEFGHIJ";

interface ChapterState {
  activeSectionId: string;
  /** e.g. "SECTION 1", "SECTION 1-A", "SECTION 1-B" */
  labels: Record<string, string>;
}

/**
 * For each section, compute the scroll-based step index
 * and return a label map like { "client-experience": "SECTION 1-A" }.
 */
export function useChapterSpy(): ChapterState {
  const [state, setState] = useState<ChapterState>(() => {
    const labels: Record<string, string> = {};
    SPLIT_SECTIONS.forEach((s, i) => {
      labels[s.id] = `SECTION ${i + 1}`;
    });
    return { activeSectionId: SPLIT_SECTIONS[0]?.id || "", labels };
  });

  useEffect(() => {
    const handleScroll = () => {
      let activeSectionId = SPLIT_SECTIONS[0]?.id || "";
      const labels: Record<string, string> = {};

      for (let i = 0; i < SPLIT_SECTIONS.length; i++) {
        const section = SPLIT_SECTIONS[i];
        const el = document.getElementById(section.id);
        const sectionIndex = i + 1;

        if (!el) {
          labels[section.id] = `SECTION ${sectionIndex}`;
          continue;
        }

        const rect = el.getBoundingClientRect();
        const totalHeight = el.scrollHeight;
        const stepCount = section.subsections.length + 1; // +1 for hero

        // Check if this section is active (top is at or above trigger)
        if (rect.top <= 150) {
          activeSectionId = section.id;
        }

        // Compute progress through this section
        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(scrolled / (totalHeight - window.innerHeight), 1));
        const step = Math.min(Math.floor(progress * stepCount), stepCount - 1);

        if (step <= 0) {
          labels[section.id] = `SECTION ${sectionIndex}`;
        } else {
          const letter = SUB_LETTERS[step - 1] || "";
          labels[section.id] = `SECTION ${sectionIndex}-${letter}`;
        }
      }

      setState({ activeSectionId, labels });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return state;
}
