"use client";

import { useRef, useEffect, useCallback } from "react";

/* ────────────────────────────────────────────────────────────
   DOT GRID — Canvas-based interactive background
   Even grid of small dots with mouse displacement (flow-field).
   Subtle idle drift so the grid feels alive.
   ──────────────────────────────────────────────────────────── */

const DOT_SPACING = 28;
const DOT_RADIUS = 1;
const DOT_COLOR = "rgba(255, 255, 255, 0.12)";

/* Mouse influence */
const MOUSE_RADIUS = 160;
const MOUSE_STRENGTH = 18;

/* Physics — how fast dots return to rest */
const RETURN_SPEED = 0.04;
const DAMPING = 0.88;

/* Idle drift — very subtle Perlin-like sway */
const IDLE_AMPLITUDE = 0.6;
const IDLE_SPEED = 0.0004;

interface Dot {
  /* Home position */
  hx: number;
  hy: number;
  /* Current offset from home */
  dx: number;
  dy: number;
  /* Velocity */
  vx: number;
  vy: number;
}

export function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef(0);
  const sizeRef = useRef({ w: 0, h: 0 });

  /* Simple noise-like function for idle drift */
  const noise = useCallback((x: number, y: number, t: number) => {
    return (
      Math.sin(x * 0.015 + t) * Math.cos(y * 0.012 + t * 0.7) +
      Math.sin((x + y) * 0.008 + t * 1.3) * 0.5
    );
  }, []);

  /* Build dot grid */
  const buildGrid = useCallback(() => {
    const { w, h } = sizeRef.current;
    const cols = Math.ceil(w / DOT_SPACING) + 1;
    const rows = Math.ceil(h / DOT_SPACING) + 1;
    const offsetX = (w - (cols - 1) * DOT_SPACING) / 2;
    const offsetY = (h - (rows - 1) * DOT_SPACING) / 2;

    const dots: Dot[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        dots.push({
          hx: offsetX + c * DOT_SPACING,
          hy: offsetY + r * DOT_SPACING,
          dx: 0,
          dy: 0,
          vx: 0,
          vy: 0,
        });
      }
    }
    dotsRef.current = dots;
  }, []);

  /* Animation loop */
  const animate = useCallback(
    (time: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const { w, h } = sizeRef.current;
      const dpr = window.devicePixelRatio || 1;
      ctx.clearRect(0, 0, w * dpr, h * dpr);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const t = time * IDLE_SPEED;

      const dots = dotsRef.current;
      ctx.fillStyle = DOT_COLOR;

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        /* Idle drift */
        const idleX = noise(dot.hx, dot.hy, t) * IDLE_AMPLITUDE;
        const idleY = noise(dot.hx + 300, dot.hy + 300, t + 1) * IDLE_AMPLITUDE;

        /* Mouse displacement */
        const distX = dot.hx + dot.dx - mx;
        const distY = dot.hy + dot.dy - my;
        const dist = Math.sqrt(distX * distX + distY * distY);

        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (1 - dist / MOUSE_RADIUS) * MOUSE_STRENGTH;
          const angle = Math.atan2(distY, distX);
          dot.vx += Math.cos(angle) * force * 0.015;
          dot.vy += Math.sin(angle) * force * 0.015;
        }

        /* Spring back to home + idle offset */
        const targetX = idleX;
        const targetY = idleY;
        dot.vx += (targetX - dot.dx) * RETURN_SPEED;
        dot.vy += (targetY - dot.dy) * RETURN_SPEED;

        /* Damping */
        dot.vx *= DAMPING;
        dot.vy *= DAMPING;

        /* Integrate */
        dot.dx += dot.vx;
        dot.dy += dot.vy;

        /* Draw */
        const x = (dot.hx + dot.dx) * dpr;
        const y = (dot.hy + dot.dy) * dpr;
        ctx.beginPath();
        ctx.arc(x, y, DOT_RADIUS * dpr, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(animate);
    },
    [noise]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();
      sizeRef.current = { w: rect.width, h: rect.height };
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      buildGrid();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    resize();
    window.addEventListener("resize", resize);
    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseleave", handleMouseLeave);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [buildGrid, animate]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}
