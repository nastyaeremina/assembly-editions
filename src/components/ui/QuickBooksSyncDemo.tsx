"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ──────────────────────────────────────────────────────────
   QUICKBOOKS SYNC DEMO
   Apple-style integration visualization inside browser chrome.
   Three app icons connected by lines. Hover lifts the icon
   and illuminates the connections. Subtle breathing idle.
   ────────────────────────────────────────────────────────── */

interface QuickBooksSyncDemoProps {
  inSplit?: boolean;
}

const APPS = [
  { id: "assembly", src: "/Icons/_System App Icon-2.svg", alt: "Assembly", label: "Assembly" },
  { id: "quickbooks", src: "/Icons/QB.svg", alt: "QuickBooks", label: "QuickBooks" },
  { id: "xero", src: "/Icons/Xerosq.svg", alt: "Xero", label: "Xero" },
];

/* ── Connection line (light-themed) ── */
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
            ? "rgba(0, 0, 0, 0.15)"
            : "rgba(0, 0, 0, 0.06)",
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
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

/* ── App icon (light-themed) ── */
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {/* Ambient glow — subtle shadow on light bg */}
      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0.2,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          width: 140,
          height: 140,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)",
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
        style={{ position: "relative" }}
      >
        {/* Shadow that appears on lift */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.15 : 0,
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
            background: "radial-gradient(ellipse, rgba(0,0,0,0.35) 0%, transparent 70%)",
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

      {/* Label */}
      <motion.span
        animate={{
          opacity: isHovered ? 1 : 0.55,
          color: isHovered ? "#18181b" : "#6b7280",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          fontSize: "11px",
          fontWeight: 500,
          fontFamily: "'Inter', system-ui, sans-serif",
          letterSpacing: "0.01em",
          whiteSpace: "nowrap",
        }}
      >
        {app.label}
      </motion.span>
    </motion.div>
  );
}

export function QuickBooksSyncDemo({ inSplit = false }: QuickBooksSyncDemoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  void inSplit;

  const line1Hovered = hoveredIdx === 0 || hoveredIdx === 1;
  const line2Hovered = hoveredIdx === 1 || hoveredIdx === 2;

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ width: "100%" }}
    >
      <div
        style={{
          width: "100%",
          borderRadius: "10px",
          border: "1px solid #e5e7eb",
          boxShadow: "0 8px 30px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.06)",
          fontFamily: "'Inter', system-ui, sans-serif",
          overflow: "hidden",
        }}
      >
        {/* ─── Browser chrome ─── */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#141414",
            padding: "12px 16px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
          }}
        >
          <div style={{ display: "flex", gap: "7px", position: "relative", zIndex: 1 }}>
            {["#ff5f57", "#febc2e", "#28c840"].map((color) => (
              <div key={color} style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: color, opacity: 0.8 }} />
            ))}
          </div>
          <div style={{
            position: "absolute", left: 0, right: 0, textAlign: "center",
            fontFamily: "'SF Mono', 'Fira Code', Menlo, monospace",
            fontSize: "11px", color: "rgba(255, 255, 255, 0.35)",
            letterSpacing: "0.01em", pointerEvents: "none",
          }}>
            dashboard.assembly.com
          </div>
        </div>

        {/* ─── White content area ─── */}
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "44px 28px 40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
        </div>
      </div>
    </motion.div>
  );
}
