"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useInView } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

/**
 * useIdleHint — shared hook for subtle idle animations on interactive demos.
 *
 * Lifecycle:
 *  1. Wait for element to enter viewport
 *  2. Wait `delay` ms
 *  3. Set `isIdle = true` (animation plays)
 *  4. Call `dismiss()` on first user interaction → permanently stops
 *
 * Respects prefers-reduced-motion.
 */

interface UseIdleHintOptions {
  /** Delay in ms after viewport entry before idle animation starts. Default: 2000 */
  delay?: number;
  /** IntersectionObserver margin. Default: "-100px" */
  viewportMargin?: string;
}

interface UseIdleHintReturn {
  /** Ref to attach to the container element */
  containerRef: React.RefObject<HTMLDivElement | null>;
  /** Whether the idle animation should currently be playing */
  isIdle: boolean;
  /** Call this when the user interacts — permanently stops idle animation */
  dismiss: () => void;
}

export function useIdleHint(options: UseIdleHintOptions = {}): UseIdleHintReturn {
  const { delay = 2000, viewportMargin = "-100px" } = options;
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- MarginType is overly strict for negative values
  const isInView = useInView(containerRef, { margin: viewportMargin as any });
  const [isIdle, setIsIdle] = useState(false);
  const dismissed = useRef(false);
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)", false);

  const dismiss = useCallback(() => {
    dismissed.current = true;
    setIsIdle(false);
  }, []);

  useEffect(() => {
    if (dismissed.current || prefersReducedMotion) return;
    if (!isInView) {
      setIsIdle(false);
      return;
    }
    const timer = setTimeout(() => {
      if (!dismissed.current) setIsIdle(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [isInView, delay, prefersReducedMotion]);

  return { containerRef, isIdle, dismiss };
}
