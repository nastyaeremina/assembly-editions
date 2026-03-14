"use client";

/* ────────────────────────────────────────────────────────────
   LIGHT BEAM — Hero background with CTA-style teal gradient
   (dark top → teal bottom) + animated traveling lines + film grain.
   ──────────────────────────────────────────────────────────── */

/* Each line: startX%, startY%, angle (deg), delay, duration, height of line segment */
const LINES = [
  // Long vertical / near-vertical lines spread across width
  { x: 15, y: -10, angle: 84, delay: 0, dur: 7, h: 90 },
  { x: 28, y: -15, angle: 86, delay: 2.5, dur: 8, h: 100 },
  { x: 42, y: -12, angle: 88, delay: 1.0, dur: 6.5, h: 80 },
  { x: 55, y: -10, angle: 91, delay: 3.2, dur: 7.5, h: 85 },
  { x: 68, y: -14, angle: 93, delay: 0.8, dur: 7, h: 95 },
  { x: 82, y: -10, angle: 96, delay: 4.0, dur: 8, h: 90 },

  // Angled lines from left side
  { x: -5, y: 15, angle: 25, delay: 1.5, dur: 9, h: 110 },
  { x: -5, y: 40, angle: 15, delay: 3.8, dur: 8.5, h: 100 },
  { x: -5, y: 65, angle: 8, delay: 0.5, dur: 7.5, h: 90 },

  // Angled lines from right side
  { x: 105, y: 15, angle: 155, delay: 2.0, dur: 8.5, h: 110 },
  { x: 105, y: 40, angle: 165, delay: 0.2, dur: 9, h: 100 },
  { x: 105, y: 65, angle: 172, delay: 4.5, dur: 7.5, h: 90 },

  // Diagonal from corners
  { x: 5, y: -5, angle: 52, delay: 5.0, dur: 10, h: 120 },
  { x: 95, y: -5, angle: 128, delay: 2.8, dur: 10, h: 120 },

  // Extra scattered verticals
  { x: 8, y: -8, angle: 82, delay: 6.0, dur: 9, h: 70 },
  { x: 35, y: -10, angle: 87, delay: 4.5, dur: 7, h: 75 },
  { x: 50, y: -8, angle: 90, delay: 7.0, dur: 6, h: 80 },
  { x: 75, y: -10, angle: 94, delay: 5.5, dur: 7.5, h: 75 },
  { x: 92, y: -8, angle: 98, delay: 1.8, dur: 8, h: 70 },
];

const STYLES = LINES.map((l, i) => `
@keyframes line-${i} {
  0%   { transform: rotate(${l.angle}deg) translateY(0); opacity: 0; }
  5%   { opacity: 0.35; }
  50%  { opacity: 0.18; }
  90%  { opacity: 0; }
  100% { transform: rotate(${l.angle}deg) translateY(calc(100vh + 80px)); opacity: 0; }
}
`).join("");

export function LightBeam() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      {/* ── Card gradient — off-black base + Assembly Blue glow from bottom ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 70% 40% at 50% 100%, rgba(188, 231, 244, 0.18) 0%, rgba(125, 164, 255, 0.06) 40%, transparent 65%),
            linear-gradient(to bottom, #101010 0%, #101010 50%, rgba(125, 164, 255, 0.06) 70%, rgba(188, 231, 244, 0.12) 100%),
            #101010
          `,
        }}
      />

      {/* ── Animated lines across full section ── */}
      {LINES.map((l, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${l.x}%`,
            top: `${l.y}%`,
            width: "1px",
            height: `${l.h}px`,
            background: `linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.4) 20%, rgba(255, 255, 255, 0.22) 70%, transparent 100%)`,
            boxShadow: "0 0 8px 2px rgba(188, 231, 244, 0.06)",
            transformOrigin: "50% 0%",
            animation: `line-${i} ${l.dur}s ${l.delay}s ease-in-out infinite`,
            opacity: 0,
          }}
        />
      ))}


      {/* Film grain */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <filter id="hero-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>
      <div style={{
        position: "absolute", inset: 0,
        filter: "url(#hero-grain)",
        opacity: 0.035,
        mixBlendMode: "overlay",
      }} />
    </div>
  );
}
