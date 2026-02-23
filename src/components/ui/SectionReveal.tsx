"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SectionRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** Enable gentle ±8px parallax drift on scroll */
  parallax?: boolean;
}

export function SectionReveal({
  children,
  delay = 0,
  className,
  parallax = false,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Very gentle parallax: 8px range
  const parallaxY = useTransform(scrollYProgress, [0, 1], [8, -8]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      style={parallax ? { y: parallaxY } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
