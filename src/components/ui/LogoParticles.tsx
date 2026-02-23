"use client";

import { useEffect, useRef, useCallback } from "react";

// ── Assembly icon mark paths (from assembly.com SVG) ──
// Original viewBox region: roughly 0–35.33 x 0–34.675
const LOGO_SVG_PATHS = [
  // Bottom bar (widest)
  "M35.327 25.05v5.867c0 2.075-1.711 3.758-3.822 3.758H1.1c-.936 0-1.405-1.113-.743-1.764l7.127-7.003a3.008 3.008 0 0 1 2.107-.857H35.33h-.002Z",
  // Middle bar
  "M35.33 11.802v5.865c0 2.075-1.712 3.757-3.824 3.757H12.051l8.92-8.765a3.005 3.005 0 0 1 2.107-.857H35.33h-.001Z",
  // Top bar (smallest)
  "M35.33 1.043v3.373c0 2.075-1.712 3.758-3.824 3.758h-5.97L33.534.312c.662-.65 1.794-.19 1.794.73Z",
];

// Source viewBox bounds of the icon
const SVG_W = 35.33;
const SVG_H = 34.675;

// ── Types ──
interface Particle {
  // Target position (logo silhouette)
  tx: number;
  ty: number;
  // Current position
  x: number;
  y: number;
  // Velocity for smooth easing
  vx: number;
  vy: number;
  // Per-particle properties
  size: number;
  baseAlpha: number;
  alpha: number;
  // Organic drift offset
  driftPhase: number;
  driftSpeed: number;
  driftRadius: number;
}

// ── Helpers ──

/** Sample points along SVG paths by rasterising to an offscreen canvas */
function sampleLogoPoints(
  count: number,
  displayW: number,
  displayH: number,
  canvasCenterX: number,
  canvasCenterY: number
): { x: number; y: number }[] {
  const sampleCanvas = document.createElement("canvas");
  const sampleSize = 256; // resolution of the sampling bitmap
  sampleCanvas.width = sampleSize;
  sampleCanvas.height = sampleSize;
  const ctx = sampleCanvas.getContext("2d")!;

  // Scale SVG paths to fill the sampling canvas with proper aspect ratio
  const scaleX = sampleSize / SVG_W;
  const scaleY = sampleSize / SVG_H;
  const scale = Math.min(scaleX, scaleY) * 0.92;
  const dx = (sampleSize - SVG_W * scale) / 2;
  const dy = (sampleSize - SVG_H * scale) / 2;

  ctx.fillStyle = "#fff";
  ctx.save();
  ctx.translate(dx, dy);
  ctx.scale(scale, scale);
  for (const d of LOGO_SVG_PATHS) {
    const path = new Path2D(d);
    ctx.fill(path);
  }
  ctx.restore();

  // Read pixel data and collect white pixel positions
  const imageData = ctx.getImageData(0, 0, sampleSize, sampleSize);
  const filledPixels: { x: number; y: number }[] = [];
  for (let y = 0; y < sampleSize; y++) {
    for (let x = 0; x < sampleSize; x++) {
      const idx = (y * sampleSize + x) * 4;
      if (imageData.data[idx + 3] > 128) {
        filledPixels.push({ x, y });
      }
    }
  }

  if (filledPixels.length === 0) return [];

  // Map from sampling canvas → actual display position, centered on (canvasCenterX, canvasCenterY)
  const displayScaleX = displayW / sampleSize;
  const displayScaleY = displayH / sampleSize;
  const originX = canvasCenterX - displayW / 2;
  const originY = canvasCenterY - displayH / 2;

  const points: { x: number; y: number }[] = [];
  for (let i = 0; i < count; i++) {
    const pixel = filledPixels[Math.floor(Math.random() * filledPixels.length)];
    // Add sub-pixel jitter for organic feel
    const jitter = 0.8;
    points.push({
      x: originX + (pixel.x + (Math.random() - 0.5) * jitter) * displayScaleX,
      y: originY + (pixel.y + (Math.random() - 0.5) * jitter) * displayScaleY,
    });
  }

  return points;
}

// ── Component ──

interface LogoParticlesProps {
  className?: string;
}

export function LogoParticles({ className }: LogoParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });
  const reducedMotionRef = useRef(false);
  const initializedRef = useRef(false);
  const timeRef = useRef(0);

  const initParticles = useCallback((canvas: HTMLCanvasElement) => {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;

    canvas.width = w * dpr;
    canvas.height = h * dpr;

    // Determine particle count based on size (performance scaling)
    const area = w * h;
    const count = Math.min(Math.max(Math.floor(area / 28), 500), 2400);

    // Logo display dimensions — use the smaller axis to keep aspect ratio,
    // center within canvas
    const logoSize = Math.min(w, h) * 0.82;
    // Maintain SVG aspect ratio
    const logoDisplayW = logoSize * (SVG_W / Math.max(SVG_W, SVG_H));
    const logoDisplayH = logoSize * (SVG_H / Math.max(SVG_W, SVG_H));

    const points = sampleLogoPoints(count, logoDisplayW, logoDisplayH, w / 2, h / 2);

    particlesRef.current = points.map((pt) => ({
      tx: pt.x,
      ty: pt.y,
      x: pt.x + (Math.random() - 0.5) * 100,
      y: pt.y + (Math.random() - 0.5) * 100,
      vx: 0,
      vy: 0,
      size: 1 + Math.random() * 1.2,
      baseAlpha: 0.25 + Math.random() * 0.45,
      alpha: 0,
      driftPhase: Math.random() * Math.PI * 2,
      driftSpeed: 0.3 + Math.random() * 0.5,
      driftRadius: 0.4 + Math.random() * 0.8,
    }));

    initializedRef.current = true;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check prefers-reduced-motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mq.matches;
    const onMotionChange = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
    };
    mq.addEventListener("change", onMotionChange);

    // Init
    initParticles(canvas);

    // Mouse handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };
    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Resize handler
    const handleResize = () => {
      initParticles(canvas);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas);

    // ── Render loop ──
    const ctx = canvas.getContext("2d")!;

    const render = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const reduced = reducedMotionRef.current;

      timeRef.current += 0.016; // ~60fps time step
      const time = timeRef.current;

      ctx.save();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Clear
      ctx.clearRect(0, 0, w, h);

      // Interaction radius
      const interactRadius = 80;
      const interactRadiusSq = interactRadius * interactRadius;
      // Connection line radius
      const connectRadius = 30;
      const connectRadiusSq = connectRadius * connectRadius;

      // Spring constants
      const returnStiffness = 0.04;
      const damping = 0.88;
      const attractStrength = 0.015;

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Organic drift
        const driftX = reduced ? 0 : Math.sin(time * p.driftSpeed + p.driftPhase) * p.driftRadius;
        const driftY = reduced ? 0 : Math.cos(time * p.driftSpeed * 0.7 + p.driftPhase + 1.5) * p.driftRadius;

        // Target = logo position + drift
        const targetX = p.tx + driftX;
        const targetY = p.ty + driftY;

        // Spring force toward target
        let fx = (targetX - p.x) * returnStiffness;
        let fy = (targetY - p.y) * returnStiffness;

        // Mouse attraction
        let interactionFactor = 0;
        if (mouse.active && !reduced) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < interactRadiusSq && distSq > 1) {
            const dist = Math.sqrt(distSq);
            const strength = (1 - dist / interactRadius) * attractStrength;
            fx += (dx / dist) * strength * 60;
            fy += (dy / dist) * strength * 60;
            interactionFactor = 1 - dist / interactRadius;
          }
        }

        // Apply forces
        if (reduced) {
          // Snap to target with no velocity
          p.x = p.tx;
          p.y = p.ty;
          p.alpha = p.baseAlpha;
        } else {
          p.vx = (p.vx + fx) * damping;
          p.vy = (p.vy + fy) * damping;
          p.x += p.vx;
          p.y += p.vy;

          // Fade in smoothly
          const targetAlpha = p.baseAlpha + interactionFactor * 0.4;
          p.alpha += (targetAlpha - p.alpha) * 0.1;
        }

        // Draw particle
        const glowAlpha = p.alpha * 0.3;
        const coreAlpha = p.alpha;

        // Outer glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${glowAlpha * 0.15})`;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${coreAlpha})`;
        ctx.fill();
      }

      // Connection lines (only when mouse is active, and only near cursor)
      if (mouse.active && !reduced) {
        ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
        ctx.lineWidth = 0.5;

        // Only check particles near the mouse for performance
        const nearParticles: Particle[] = [];
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          if (dx * dx + dy * dy < interactRadiusSq) {
            nearParticles.push(p);
          }
        }

        // Draw connections between nearby particles near cursor
        for (let i = 0; i < nearParticles.length; i++) {
          for (let j = i + 1; j < nearParticles.length; j++) {
            const a = nearParticles[i];
            const b = nearParticles[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const distSq = dx * dx + dy * dy;
            if (distSq < connectRadiusSq) {
              const dist = Math.sqrt(distSq);
              const alpha = (1 - dist / connectRadius) * 0.12;
              ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
      }

      ctx.restore();

      animRef.current = requestAnimationFrame(render);
    };

    animRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animRef.current);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      resizeObserver.disconnect();
      mq.removeEventListener("change", onMotionChange);
    };
  }, [initParticles]);

  return (
    <div className={className} aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{ display: "block" }}
      />
      {/* Static fallback for reduced-motion / no-JS: an SVG of the logo */}
      <noscript>
        <svg
          viewBox="0 0 35.33 34.675"
          className="h-full w-full opacity-20"
          fill="rgba(255,255,255,0.4)"
        >
          {LOGO_SVG_PATHS.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </svg>
      </noscript>
    </div>
  );
}
