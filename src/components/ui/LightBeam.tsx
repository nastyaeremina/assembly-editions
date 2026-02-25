"use client";

/* ────────────────────────────────────────────────────────────
   LIGHT BEAM — Horizon glow for hero background
   Bottom-center light source spreading upward like a dawn.
   Pure CSS gradients + keyframes. No JS runtime cost.
   SVG feTurbulence for film grain overlay.
   ──────────────────────────────────────────────────────────── */

const keyframes = `
@keyframes glow-breathe {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.03);
    opacity: 0.92;
  }
}

@keyframes core-pulse {
  0%, 100% {
    opacity: 0.9;
  }
  50% {
    opacity: 0.7;
  }
}

@media (prefers-reduced-motion: reduce) {
  .glow-wide,
  .glow-mid,
  .glow-core,
  .glow-horizon {
    animation: none !important;
  }
}
`;

export function LightBeam() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: keyframes }} />

      {/* Glow group */}
      <div style={{ position: "absolute", inset: 0 }}>

        {/* Layer 1 — Very wide indigo ambient wash, centered at bottom */}
        <div
          className="glow-wide"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 50% at 50% 95%, rgba(30, 30, 100, 0.3) 0%, transparent 100%)",
            animation: "glow-breathe 18s ease-in-out infinite",
            willChange: "transform, opacity",
          }}
        />

        {/* Layer 2 — Mid-range blue glow, upward fan */}
        <div
          className="glow-mid"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 45% 55% at 50% 90%, rgba(50, 50, 140, 0.25) 0%, transparent 100%)",
            animation: "glow-breathe 16s ease-in-out infinite 1.5s",
            willChange: "transform, opacity",
          }}
        />

        {/* Layer 3 — Bright core glow at horizon */}
        <div
          className="glow-core"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 25% 30% at 50% 92%, rgba(140, 140, 220, 0.35) 0%, transparent 100%)",
            animation: "glow-breathe 16s ease-in-out infinite 3s",
            willChange: "transform, opacity",
          }}
        />

        {/* Layer 4 — White-hot core at the horizon point */}
        <div
          className="glow-horizon"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 12% 8% at 50% 96%, rgba(200, 200, 255, 0.5) 0%, transparent 100%)",
            animation: "core-pulse 12s ease-in-out infinite",
            willChange: "opacity",
          }}
        />

        {/* Layer 5 — Thin horizon line */}
        <div
          style={{
            position: "absolute",
            bottom: "4%",
            left: "15%",
            right: "15%",
            height: "1px",
            background:
              "linear-gradient(to right, transparent 0%, rgba(160, 160, 230, 0.25) 30%, rgba(200, 200, 255, 0.4) 50%, rgba(160, 160, 230, 0.25) 70%, transparent 100%)",
            filter: "blur(0.5px)",
          }}
        />

        {/* Layer 6 — Horizon line soft bloom */}
        <div
          style={{
            position: "absolute",
            bottom: "3%",
            left: "10%",
            right: "10%",
            height: "6px",
            background:
              "linear-gradient(to right, transparent 0%, rgba(120, 120, 200, 0.12) 30%, rgba(180, 180, 255, 0.2) 50%, rgba(120, 120, 200, 0.12) 70%, transparent 100%)",
            filter: "blur(4px)",
          }}
        />

        {/* Layer 7 — Upward light rays from horizon (subtle cone) */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "20%",
            right: "20%",
            height: "70%",
            background:
              "linear-gradient(to top, rgba(80, 80, 170, 0.08) 0%, transparent 100%)",
            clipPath: "polygon(35% 100%, 65% 100%, 80% 0%, 20% 0%)",
          }}
        />
      </div>

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
