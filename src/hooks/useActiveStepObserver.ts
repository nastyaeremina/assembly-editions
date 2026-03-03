"use client";

import { useState, useEffect, useRef } from "react";

/**
 * Observes an array of step-block elements (by ID) and returns
 * the index of the one most visible in the viewport centre zone.
 *
 * Used by ScrollytellingSection to decide which step drives the
 * left-rail title / description.
 *
 * rootMargin shrinks the effective viewport to the middle 50 %,
 * so a step is "active" only when it dominates the visual focus area.
 */
export function useActiveStepObserver(stepIds: string[]): number {
  const [activeIndex, setActiveIndex] = useState(0);
  const ratios = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    if (stepIds.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.current.set(entry.target.id, entry.intersectionRatio);
        }

        // Pick the step with the highest intersection ratio
        let bestIndex = 0;
        let bestRatio = -1;
        for (let i = 0; i < stepIds.length; i++) {
          const r = ratios.current.get(stepIds[i]) ?? 0;
          if (r > bestRatio) {
            bestRatio = r;
            bestIndex = i;
          }
        }

        setActiveIndex(bestIndex);
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: "-25% 0px -25% 0px",
      }
    );

    const elements: Element[] = [];
    for (const id of stepIds) {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        elements.push(el);
      }
    }

    return () => {
      observer.disconnect();
      ratios.current.clear();
    };
  }, [stepIds]);

  return activeIndex;
}
