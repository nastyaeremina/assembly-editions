"use client";

import { useRef } from "react";

/* ────────────────────────────────────────────────────────────
   LIGHT BEAM — Minimal hero background with film grain overlay.
   Glow layers and shooting stars removed for a cleaner look.
   ──────────────────────────────────────────────────────────── */

export function LightBeam() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
    >
      {/* Film grain via SVG feTurbulence */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <filter id="hero-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          filter: "url(#hero-grain)",
          opacity: 0.06,
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}
