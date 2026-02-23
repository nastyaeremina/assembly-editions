"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { BRAND } from "@/lib/constants";

/* ────────────────────────────────────────────────────────────
   BRAND STATEMENT — Split layout between the colorful hero
   marquee and the split-screen content.

   Left: editorial text (~5/12). Right: dot-grid demo placeholder (~7/12).
   ──────────────────────────────────────────────────────────── */

export function BrandStatement() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.25"],
  });

  // Group 1: Mono label + rule
  const labelOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const labelY = useTransform(scrollYProgress, [0, 0.25], [20, 0]);
  const ruleScaleX = useTransform(scrollYProgress, [0.05, 0.35], [0, 1]);

  // Group 2: Split grid (text + placeholder)
  const gridOpacity = useTransform(scrollYProgress, [0.1, 0.45], [0, 1]);
  const gridY = useTransform(scrollYProgress, [0.1, 0.45], [30, 0]);


  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ backgroundColor: "#101010" }}
    >
      <div
        className="px-6 sm:px-8 lg:px-10"
        style={{
          paddingTop: "clamp(5rem, 10vw, 8rem)",
          paddingBottom: "clamp(4rem, 8vw, 6rem)",
        }}
      >
        {/* ── Part 1: Mono label + extending rule ── */}
        <motion.div
          style={{ opacity: labelOpacity, y: labelY }}
          className="flex items-center"
        >
          <span
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontWeight: 400,
              fontSize: "0.8rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              color: "var(--swatch-5)",
              whiteSpace: "nowrap" as const,
              paddingRight: "1.5rem",
            }}
          >
            {BRAND.name} {BRAND.version}
          </span>
          <motion.div
            style={{
              flex: 1,
              height: "1px",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              scaleX: ruleScaleX,
              transformOrigin: "left",
            }}
          />
        </motion.div>

        {/* ── Part 2: Split grid — text left, demo right ── */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          style={{
            opacity: gridOpacity,
            y: gridY,
            marginTop: "clamp(3rem, 5vw, 4rem)",
          }}
        >
          {/* Left column — editorial text */}
          <div className="lg:col-span-5">
            <h2
              style={{
                fontFamily: "'PP Mori', var(--font-sans)",
                fontWeight: 600,
                fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)",
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                color: "var(--swatch-2)",
                margin: 0,
              }}
            >
              {BRAND.tagline}.
            </h2>

            <p
              style={{
                fontFamily: "'PP Mori', var(--font-sans)",
                fontWeight: 400,
                fontSize: "clamp(1.05rem, 1.5vw, 1.2rem)",
                lineHeight: 1.4,
                letterSpacing: "-0.01em",
                color: "var(--swatch-3)",
                margin: 0,
                marginTop: "1.75rem",
              }}
            >
              {BRAND.description} Here&apos;s what&apos;s new.
            </p>
          </div>

          {/* Right column — dot-grid placeholder */}
          <div className="lg:col-span-7">
            <div
              style={{
                position: "relative",
                aspectRatio: "16 / 10",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.06)",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                backgroundImage:
                  "radial-gradient(circle, rgba(255, 255, 255, 0.12) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Center icon */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <ImageIcon
                  size={48}
                  style={{ color: "rgba(255, 255, 255, 0.15)" }}
                  strokeWidth={1}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
