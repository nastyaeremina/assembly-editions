"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useInView } from "framer-motion";
import { useMediaQuery } from "./useMediaQuery";

export function useIdleHint(options = {}) {
  const { delay = 2000, viewportMargin = "-100px" } = options;
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: viewportMargin });
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
