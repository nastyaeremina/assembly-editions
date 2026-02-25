"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ──────────────────────────────────────────────────────────
   QUICKBOOKS SYNC DEMO
   Apple-style integration visualization.
   Three app icons connected by lines. Hover lifts the icon
   and illuminates the connections. Subtle breathing idle.
   ────────────────────────────────────────────────────────── */

interface QuickBooksSyncDemoProps {
  inSplit?: boolean;
}

const APPS = [
  { id: "assembly", src: "/Icons/_System App Icon-2.svg", alt: "Assembly" },
  { id: "quickbooks", src: "/Icons/QB.svg", alt: "QuickBooks" },
  { id: "xero", src: "/Icons/Xerosq.svg", alt: "Xero" },
];

/* ── Connection line ── */
function ConnectionLine({ hovered }: { hovered: boolean }) {
  return (
    <div style={{
      flex: 1,
      height: "40px",
      display: "flex",
      alignItems: "center",
      minWidth: "40px",
      position: "relative",
    }}>
      {/* Line */}
      <motion.div
        animate={{
          backgroundColor: hovered
            ? "rgba(255, 255, 255, 0.15)"
            : "rgba(255, 255, 255, 0.04)",
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          width: "100%",
          height: "1px",
        }}
      />
      {/* Glow behind line on hover */}
      <motion.div
        animate={{
          opacity: hovered ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: "50%",
          left: "10%",
          right: "10%",
          height: "20px",
          transform: "translateY(-50%)",
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

/* ── App icon ── */
function AppIcon({
  app,
  idx,
  isInView,
  hoveredIdx,
  setHoveredIdx,
}: {
  app: typeof APPS[0];
  idx: number;
  isInView: boolean;
  hoveredIdx: number | null;
  setHoveredIdx: (v: number | null) => void;
}) {
  const isHovered = hoveredIdx === idx;
  const isNeighbour = hoveredIdx !== null && Math.abs(hoveredIdx - idx) === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 + idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHoveredIdx(idx)}
      onMouseLeave={() => setHoveredIdx(null)}
      style={{
        flexShrink: 0,
        cursor: "default",
        position: "relative",
      }}
    >
      {/* Ambient glow — always faintly visible, intensifies on hover */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0.3,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 140,
          height: 140,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Icon with lift + scale on hover */}
      <motion.div
        animate={{
          y: isHovered ? -6 : isNeighbour ? -2 : 0,
          scale: isHovered ? 1.1 : isNeighbour ? 1.03 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.8,
        }}
      >
        {/* Shadow that appears on lift */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.2 : 0,
            scale: isHovered ? 0.92 : 0.85,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            position: "absolute",
            bottom: -8,
            left: "50%",
            transform: "translateX(-50%)",
            width: 72,
            height: 12,
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(0,0,0,0.5) 0%, transparent 70%)",
            pointerEvents: "none",
            filter: "blur(4px)",
          }}
        />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={app.src}
          alt={app.alt}
          width={88}
          height={88}
          draggable={false}
          style={{
            display: "block",
            borderRadius: "20px",
            position: "relative",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export function QuickBooksSyncDemo({ inSplit = false }: QuickBooksSyncDemoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const line1Hovered = hoveredIdx === 0 || hoveredIdx === 1;
  const line2Hovered = hoveredIdx === 1 || hoveredIdx === 2;

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        fontFamily: "'Inter', system-ui, sans-serif",
        padding: "48px 0",
        width: "100%",
      }}
    >
      <div style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        maxWidth: "520px",
      }}>
        <AppIcon app={APPS[0]} idx={0} isInView={isInView} hoveredIdx={hoveredIdx} setHoveredIdx={setHoveredIdx} />
        <ConnectionLine hovered={line1Hovered} />
        <AppIcon app={APPS[1]} idx={1} isInView={isInView} hoveredIdx={hoveredIdx} setHoveredIdx={setHoveredIdx} />
        <ConnectionLine hovered={line2Hovered} />
        <AppIcon app={APPS[2]} idx={2} isInView={isInView} hoveredIdx={hoveredIdx} setHoveredIdx={setHoveredIdx} />
      </div>
    </motion.div>
  );
}
