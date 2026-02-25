"use client";

/* ────────────────────────────────────────────────────────────
   LIGHT BEAM — Vertical spotlight column for hero background
   Pure CSS gradients + keyframes. No JS runtime cost.
   Slow breathing + horizontal drift for organic feel.
   SVG feTurbulence for film grain overlay.
   ──────────────────────────────────────────────────────────── */

const keyframes = `
@keyframes beam-breathe {
  0%, 100% {
    transform: scaleX(1);
    opacity: 1;
  }
  50% {
    transform: scaleX(1.04);
    opacity: 0.88;
  }
}

@keyframes core-pulse {
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.5;
  }
}

@media (prefers-reduced-motion: reduce) {
  .beam-outer,
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
        {/* Layer 1 — Wide outer ambient glow */}
        <div
          className="beam-outer"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 35% 70% at 50% 35%, rgba(0, 170, 175, 0.07) 0%, transparent 100%)",
            animation: "beam-breathe 16s ease-in-out infinite",
            willChange: "transform, opacity",
          }}
        />

        {/* Layer 2 — Narrow beam column */}
        <div
          className="beam-inner"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 12% 65% at 50% 30%, rgba(0, 190, 195, 0.1) 0%, transparent 100%)",
            animation: "beam-breathe 16s ease-in-out infinite 2s",
            willChange: "transform, opacity",
          }}
        />

        {/* Layer 3 — Thin bright core line */}
        <div
          className="beam-core"
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            width: "2px",
            height: "55%",
            marginLeft: "-1px",
            background:
              "linear-gradient(to bottom, rgba(160, 230, 235, 0.6) 0%, rgba(0, 180, 185, 0.2) 35%, transparent 100%)",
            filter: "blur(1px)",
            animation: "core-pulse 12s ease-in-out infinite",
            willChange: "opacity",
          }}
        />
      </div>

      {/* Layer 4 — Film grain via SVG feTurbulence */}
      <svg
        width="0"
        height="0"
        style={{ position: "absolute" }}
      >
        <filter id="hero-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
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
          opacity: 0.04,
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}
