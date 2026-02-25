"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";

/* ────────────────────────────────────────────────────────────
   HERO SECTION
   Centered title + subtitle + demo video placeholder.
   Clean, editorial approach with staggered entrance.
   ──────────────────────────────────────────────────────────── */

export function CollageHero() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#101010" }}
      aria-label="Assembly 2.0 hero"
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          paddingTop: "clamp(8rem, 16vw, 14rem)",
          paddingBottom: "clamp(4rem, 8vw, 6rem)",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* ── Version badge ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontWeight: 400,
            fontSize: "0.75rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.45)",
            marginBottom: "1.5rem",
          }}
        >
          Assembly 2.0
        </motion.div>

        {/* ── Title ── */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'PP Mori', var(--font-sans)",
            fontWeight: 600,
            fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
            lineHeight: 1.08,
            letterSpacing: "-0.035em",
            color: "var(--swatch-2, #f5f5f5)",
            margin: 0,
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          The biggest update in Assembly&nbsp;history.
        </motion.h1>

        {/* ── Subtitle ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'PP Mori', var(--font-sans)",
            fontWeight: 400,
            fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
            lineHeight: 1.5,
            letterSpacing: "-0.01em",
            color: "var(--swatch-3, #999)",
            margin: 0,
            marginTop: "1.5rem",
            textAlign: "center",
            maxWidth: "580px",
          }}
        >
          This release touches nearly every part of the platform — how clients
          experience your portal, how you manage tasks and billing, and how
          developers build on&nbsp;Assembly.
        </motion.p>

        {/* ── Video placeholder ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: "100%",
            maxWidth: "960px",
            marginTop: "clamp(3rem, 5vw, 4.5rem)",
            aspectRatio: "16 / 9",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            position: "relative",
          }}
        >
          {/* Subtle gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at center, rgba(255,255,255,0.02) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* Play button */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              position: "relative",
              transition: "background-color 0.3s ease",
            }}
          >
            <Play
              size={28}
              style={{
                color: "rgba(255, 255, 255, 0.6)",
                marginLeft: "3px",
              }}
              strokeWidth={1.5}
              fill="rgba(255, 255, 255, 0.6)"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
