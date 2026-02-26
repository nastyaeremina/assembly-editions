"use client";

import { useRef, useEffect, useState, useCallback } from "react";

/* ────────────────────────────────────────────────────────────
   LIGHT BEAM — Interactive horizon glow for hero background
   Gradient center subtly follows cursor position.
   CSS gradients + keyframes + minimal JS for mouse tracking.
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

@keyframes shooting-star-move {
  0% {
    transform: translate(0, 0) scaleX(0.3);
    opacity: 0;
  }
  8% {
    opacity: 1;
    transform: translate(40px, 0) scaleX(1);
  }
  70% {
    opacity: 0.8;
  }
  100% {
    transform: translate(250px, 0) scaleX(0.2);
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .glow-wide,
  .glow-mid,
  .glow-core,
  .glow-horizon,
  .shooting-star {
    animation: none !important;
  }
}
`;

interface ShootingStar {
  id: number;
  x: number;       // start % from left
  y: number;       // start % from top
  angle: number;   // rotation degrees
  duration: number; // seconds
  tailWidth: number; // trail length in px
}

let starIdCounter = 0;

function spawnStar(): ShootingStar {
  return {
    id: starIdCounter++,
    x: Math.random() * 70 + 5,        // 5–75%
    y: Math.random() * 35 + 5,        // top 5–40%
    angle: 25 + Math.random() * 25,   // 25–50° downward
    duration: 0.6 + Math.random() * 0.5, // 0.6–1.1s
    tailWidth: 70 + Math.random() * 60,  // 70–130px trail
  };
}

export function LightBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  // x/y as percentages (0–100), default center
  const [pos, setPos] = useState({ x: 50, y: 55 });
  const raf = useRef<number>(0);
  const target = useRef({ x: 50, y: 55 });
  const current = useRef({ x: 50, y: 55 });
  const [stars, setStars] = useState<ShootingStar[]>([]);

  // Spawn shooting stars at random intervals
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const scheduleNext = () => {
      // Random interval: 2–6 seconds between stars
      const wait = 2000 + Math.random() * 4000;
      timeout = setTimeout(() => {
        setStars((prev) => {
          // Keep max 3 active, remove old ones
          const recent = prev.slice(-2);
          return [...recent, spawnStar()];
        });
        scheduleNext();
      }, wait);
    };

    // First star after a short delay
    timeout = setTimeout(() => {
      setStars([spawnStar()]);
      scheduleNext();
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  const lerp = useCallback(() => {
    const ease = 0.06; // slow, smooth follow
    current.current.x += (target.current.x - current.current.x) * ease;
    current.current.y += (target.current.y - current.current.y) * ease;
    setPos({ x: current.current.x, y: current.current.y });
    raf.current = requestAnimationFrame(lerp);
  }, []);

  useEffect(() => {
    raf.current = requestAnimationFrame(lerp);
    return () => cancelAnimationFrame(raf.current);
  }, [lerp]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const rawX = ((e.clientX - rect.left) / rect.width) * 100;
      const rawY = ((e.clientY - rect.top) / rect.height) * 100;

      // Clamp and dampen: only shift ±12% from center so it stays subtle
      const range = 12;
      const cx = 50 + ((rawX - 50) / 50) * range;
      const cy = 55 + ((rawY - 50) / 50) * range;

      target.current = { x: cx, y: cy };
    };

    const handleMouseLeave = () => {
      // Drift back to center
      target.current = { x: 50, y: 55 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const px = pos.x;
  const py = pos.y;

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
      <style dangerouslySetInnerHTML={{ __html: keyframes }} />

      {/* Glow group */}
      <div style={{ position: "absolute", inset: 0 }}>

        {/* Layer 1 — Wide purple/indigo ambient wash */}
        <div
          className="glow-wide"
          style={{
            position: "absolute",
            inset: "-20%",
            background:
              `radial-gradient(ellipse 65% 55% at ${px * 0.7 + 15}% ${py * 0.7 + 15}%, rgba(40, 20, 120, 0.5) 0%, rgba(30, 20, 100, 0.15) 40%, transparent 70%)`,
            animation: "glow-breathe 18s ease-in-out infinite",
            filter: "blur(40px)",
            willChange: "transform, opacity",
          }}
        />

        {/* Layer 2 — Mid-range vibrant blue-purple glow */}
        <div
          className="glow-mid"
          style={{
            position: "absolute",
            inset: "-10%",
            background:
              `radial-gradient(ellipse 50% 45% at ${px}% ${py + 3}%, rgba(80, 50, 180, 0.4) 0%, rgba(60, 40, 150, 0.1) 45%, transparent 70%)`,
            animation: "glow-breathe 16s ease-in-out infinite 1.5s",
            filter: "blur(30px)",
            willChange: "transform, opacity",
          }}
        />

        {/* Layer 3 — Bright core glow */}
        <div
          className="glow-core"
          style={{
            position: "absolute",
            inset: "-5%",
            background:
              `radial-gradient(ellipse 35% 30% at ${px}% ${py}%, rgba(140, 120, 240, 0.45) 0%, rgba(120, 100, 220, 0.1) 50%, transparent 75%)`,
            animation: "glow-breathe 16s ease-in-out infinite 3s",
            filter: "blur(25px)",
            willChange: "transform, opacity",
          }}
        />

        {/* Layer 4 — Bright center highlight */}
        <div
          className="glow-horizon"
          style={{
            position: "absolute",
            inset: 0,
            background:
              `radial-gradient(ellipse 22% 20% at ${px}% ${py - 3}%, rgba(200, 180, 255, 0.5) 0%, rgba(180, 160, 240, 0.12) 50%, transparent 75%)`,
            animation: "core-pulse 12s ease-in-out infinite",
            filter: "blur(20px)",
            willChange: "opacity",
          }}
        />

        {/* Layer 5 — Hot white-purple center point */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              `radial-gradient(ellipse 10% 8% at ${px}% ${py}%, rgba(230, 220, 255, 0.4) 0%, transparent 60%)`,
            filter: "blur(15px)",
          }}
        />
      </div>

      {/* Shooting stars */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        {stars.map((star) => (
          /* Outer positions the star and rotates to angle */
          <div
            key={star.id}
            style={{
              position: "absolute",
              left: `${star.x}%`,
              top: `${star.y}%`,
              transform: `rotate(${star.angle}deg)`,
            }}
          >
            {/* Inner moves along the rotated axis + fades */}
            <div
              className="shooting-star"
              style={{
                width: `${star.tailWidth}px`,
                height: "1.5px",
                background: `linear-gradient(to left, rgba(255, 255, 255, 0.9) 0%, rgba(200, 200, 255, 0.5) 30%, transparent 100%)`,
                borderRadius: "2px",
                filter: "blur(0.3px)",
                boxShadow: "0 0 6px 1px rgba(180, 180, 255, 0.3)",
                transformOrigin: "left center",
                animation: `shooting-star-move ${star.duration}s ease-out forwards`,
              }}
            />
          </div>
        ))}
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
