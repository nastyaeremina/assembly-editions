"use client";

/* ────────────────────────────────────────────────────────────
   LIGHT BEAM — Vertical spotlight column for hero background
   Pure CSS gradients + keyframes. No JS runtime cost.
   Subtle breathing animation. SVG feTurbulence for film grain.
   ──────────────────────────────────────────────────────────── */

const keyframes = `
@keyframes beam-breathe {
  0%, 100% {
    transform: scaleX(1);
    opacity: 1;
  }
  50% {
    transform: scaleX(1.04);
    opacity: 0.9;
  }
}

@keyframes core-pulse {
  0%, 100% {
    opacity: 0.85;
  }
  50% {
    opacity: 0.6;
  }
}

@media (prefers-reduced-motion: reduce) {
  .beam-outer,
  .beam-mid,
  .beam-inner,
  .beam-core {
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
      {/* Inject keyframes */}
      <style dangerouslySetInnerHTML={{ __html: keyframes }} />

      {/* Beam group */}
      <div
        style={{
          position: "absolute",
          inset: 0,
        }}
      >
        {/* Layer 1 — Very wide ambient wash */}
        <div
          className="beam-outer"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 50% 80% at 50% 40%, rgba(0, 160, 170, 0.14) 0%, transparent 100%)",
            animation: "beam-breathe 18s ease-in-out infinite",
            willChange: "transform, opacity",
          }}
        />

        {/* Layer 2 — Mid-range glow column */}
        <div
          className="beam-mid"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 25% 75% at 50% 38%, rgba(0, 175, 180, 0.18) 0%, transparent 100%)",
            animation: "beam-breathe 16s ease-in-out infinite 1s",
            willChange: "transform, opacity",
          }}
        />

        {/* Layer 3 — Narrow bright beam */}
        <div
          className="beam-inner"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 8% 70% at 50% 35%, rgba(0, 200, 210, 0.22) 0%, transparent 100%)",
            animation: "beam-breathe 16s ease-in-out infinite 2.5s",
            willChange: "transform, opacity",
          }}
        />

        {/* Layer 4 — Thin bright core line */}
        <div
          className="beam-core"
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            width: "2px",
            height: "50%",
            marginLeft: "-1px",
            background:
              "linear-gradient(to bottom, rgba(200, 245, 250, 0.9) 0%, rgba(100, 220, 225, 0.5) 20%, rgba(0, 180, 185, 0.15) 50%, transparent 100%)",
            filter: "blur(0.5px)",
            animation: "core-pulse 12s ease-in-out infinite",
            willChange: "opacity",
          }}
        />

        {/* Layer 5 — Core line soft halo (wider glow around core) */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            width: "8px",
            height: "45%",
            marginLeft: "-4px",
            background:
              "linear-gradient(to bottom, rgba(150, 235, 240, 0.35) 0%, rgba(0, 190, 195, 0.1) 40%, transparent 100%)",
            filter: "blur(4px)",
          }}
        />
      </div>

      {/* Film grain via SVG feTurbulence */}
      <svg
        width="0"
        height="0"
        style={{ position: "absolute" }}
      >
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
          opacity: 0.08,
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}
