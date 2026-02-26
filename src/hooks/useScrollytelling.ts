"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { RefObject, useState } from "react";

/**
 * Derives a discrete step index from scroll progress through a section.
 *
 * Attach a ref to the tall `<section>` wrapper. The hook divides its
 * scrollYProgress (0 → 1) evenly among `stepCount` steps and returns
 * the current active step (0-indexed).
 */
export function useScrollytelling(
  ref: RefObject<HTMLElement | null>,
  stepCount: number
) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [activeStep, setActiveStep] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const step = Math.min(Math.floor(v * stepCount), stepCount - 1);
    if (step >= 0) setActiveStep(step);
  });

  return { activeStep, scrollYProgress };
}
