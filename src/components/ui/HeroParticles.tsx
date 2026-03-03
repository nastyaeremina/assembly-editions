"use client";

import { useEffect, useRef, useCallback } from "react";

/* ────────────────────────────────────────────────────────────
   HERO PARTICLES — Subtle animated particle field
   Very low-opacity, gently drifting dots that add depth
   to the hero background without competing with content.
   Canvas-based for smooth 60 fps. Respects prefers-reduced-motion.
   ──────────────────────────────────────────────────────────── */

interface Particle {
  x: number;
  y: number;
  /** Base radius in CSS px */
  size: number;
  /** Base opacity 0–1 */
  alpha: number;
  /** Vertical drift speed (px/frame) — positive = upward */
  vy: number;
  /** Horizontal sway amplitude */
  swayAmp: number;
  /** Sway phase offset */
  swayPhase: number;
  /** Sway frequency */
  swayFreq: number;
  /** Twinkle phase offset */
  twinklePhase: number;
  /** Twinkle speed */
  twinkleSpeed: number;
  /** RGB tint — slight warm/cool variation */
  r: number;
  g: number;
  b: number;
}

// ── Configuration ──
const PARTICLE_DENSITY = 0.00012; // particles per sq-px
const MIN_PARTICLES = 50;
const MAX_PARTICLES = 150;
const DRIFT_SPEED_MIN = 0.06; // px per frame (~60fps) — slow, calm
const DRIFT_SPEED_MAX = 0.2;
const SIZE_MIN = 1.0;
const SIZE_MAX = 2.4;
const ALPHA_MIN = 0.12;
const ALPHA_MAX = 0.4;

function createParticle(w: number, h: number, randomY = false): Particle {
  // Subtle tint: mostly white, occasional warm or cool shift
  const tint = Math.random();
  let r = 255, g = 255, b = 255;
  if (tint < 0.3) {
    // Slight lavender
    r = 210 + Math.random() * 45;
    g = 200 + Math.random() * 40;
    b = 255;
  } else if (tint < 0.5) {
    // Slight warm
    r = 255;
    g = 230 + Math.random() * 25;
    b = 210 + Math.random() * 30;
  }

  return {
    x: Math.random() * w,
    y: randomY ? Math.random() * h : h + Math.random() * 40,
    size: SIZE_MIN + Math.random() * (SIZE_MAX - SIZE_MIN),
    alpha: ALPHA_MIN + Math.random() * (ALPHA_MAX - ALPHA_MIN),
    vy: DRIFT_SPEED_MIN + Math.random() * (DRIFT_SPEED_MAX - DRIFT_SPEED_MIN),
    swayAmp: 8 + Math.random() * 20,
    swayPhase: Math.random() * Math.PI * 2,
    swayFreq: 0.002 + Math.random() * 0.004,
    twinklePhase: Math.random() * Math.PI * 2,
    twinkleSpeed: 0.008 + Math.random() * 0.015,
    r, g, b,
  };
}

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const reducedMotionRef = useRef(false);
  const timeRef = useRef(0);
  const dimsRef = useRef({ w: 0, h: 0 });

  const init = useCallback((canvas: HTMLCanvasElement) => {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    dimsRef.current = { w, h };

    // Calculate particle count from area
    const count = Math.min(
      Math.max(Math.floor(w * h * PARTICLE_DENSITY), MIN_PARTICLES),
      MAX_PARTICLES
    );

    // Spread particles across the full canvas on init
    particlesRef.current = Array.from({ length: count }, () =>
      createParticle(w, h, true)
    );
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Reduced motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mq.matches;
    const onMqChange = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
    };
    mq.addEventListener("change", onMqChange);

    init(canvas);

    // Resize
    const ro = new ResizeObserver(() => init(canvas));
    ro.observe(canvas);

    const ctx = canvas.getContext("2d")!;

    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      const { w, h } = dimsRef.current;
      const particles = particlesRef.current;
      const reduced = reducedMotionRef.current;

      timeRef.current += 1;
      const t = timeRef.current;

      ctx.save();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      if (reduced) {
        // Static dots, no animation
        for (const p of particles) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.r}, ${p.g}, ${p.b}, ${p.alpha * 0.5})`;
          ctx.fill();
        }
      } else {
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];

          // Drift upward
          p.y -= p.vy;

          // Horizontal sway (sine wave)
          const swayX = p.x + Math.sin(t * p.swayFreq + p.swayPhase) * p.swayAmp;

          // Twinkle: modulate alpha
          const twinkle = 0.5 + 0.5 * Math.sin(t * p.twinkleSpeed + p.twinklePhase);
          const currentAlpha = p.alpha * (0.4 + twinkle * 0.6);

          // Fade in near bottom, fade out near top for smooth entry/exit
          let edgeFade = 1;
          const fadeZone = h * 0.15;
          if (p.y < fadeZone) {
            edgeFade = Math.max(0, p.y / fadeZone);
          } else if (p.y > h - fadeZone) {
            edgeFade = Math.max(0, (h - p.y) / fadeZone);
          }

          const finalAlpha = currentAlpha * edgeFade;
          const { r, g, b } = p;

          // Draw soft dot
          if (finalAlpha > 0.005) {
            // Soft outer glow
            ctx.beginPath();
            ctx.arc(swayX, p.y, p.size * 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${finalAlpha * 0.12})`;
            ctx.fill();

            // Mid glow
            ctx.beginPath();
            ctx.arc(swayX, p.y, p.size * 1.6, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${finalAlpha * 0.3})`;
            ctx.fill();

            // Core
            ctx.beginPath();
            ctx.arc(swayX, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${finalAlpha})`;
            ctx.fill();
          }

          // Recycle particle when it drifts above the canvas
          if (p.y < -20) {
            particles[i] = createParticle(w, h, false);
          }
        }
      }

      ctx.restore();
      animRef.current = requestAnimationFrame(render);
    };

    animRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
      mq.removeEventListener("change", onMqChange);
    };
  }, [init]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
