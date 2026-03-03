"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SectionDividerProps {
  /** Monospace label, e.g. "CLIENT EXPERIENCE" */
  label: string;
  /** Section number, e.g. "01" */
  number: string;
  /** First section: adds gradient fade from hero above */
  isFirst?: boolean;
}

export function SectionDivider({
  label,
  number,
  isFirst = false,
}: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 0.5"],
  });

  /* Staggered reveal: label fades in, then rule scales from left */
  const labelOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const labelY = useTransform(scrollYProgress, [0, 0.4], [12, 0]);
  const ruleScaleX = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: "relative",
        paddingTop: isFirst ? "clamp(4rem, 8vw, 6rem)" : "clamp(3rem, 6vw, 5rem)",
        paddingBottom: "0",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        backgroundColor: "#101010",
      }}
    >
      {/* Smooth gradient fade from hero area above */}
      {isFirst && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "100%",
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(16,16,16,0.4) 40%, #101010 100%)",
            pointerEvents: "none",
          }}
        />
      )}

      {/* Row: number + label + extending rule — aligned to editorial text left edge */}
      <motion.div
        style={{
          position: "relative",
          opacity: labelOpacity,
          y: labelY,
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        {/* Section number */}
        <span
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontWeight: 500,
            fontSize: "0.7rem",
            letterSpacing: "0.08em",
            color: "rgba(255, 255, 255, 0.4)",
            whiteSpace: "nowrap",
          }}
        >
          {number}
        </span>

        {/* Category label */}
        <span
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontWeight: 400,
            fontSize: "0.7rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
            color: "rgba(255, 255, 255, 0.35)",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>

        {/* Extending horizontal rule */}
        <motion.div
          style={{
            flex: 1,
            height: "1px",
            backgroundColor: "rgba(255, 255, 255, 0.12)",
            scaleX: ruleScaleX,
            transformOrigin: "left",
          }}
        />
      </motion.div>
    </div>
  );
}
