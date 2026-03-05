"use client";

import { useState, useEffect, useRef } from "react";

export function useActiveStepObserver(stepIds) {
  const [activeIndex, setActiveIndex] = useState(0);
  const ratios = useRef(new Map());

  useEffect(() => {
    if (stepIds.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.current.set(entry.target.id, entry.intersectionRatio);
        }

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

    const elements = [];
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
