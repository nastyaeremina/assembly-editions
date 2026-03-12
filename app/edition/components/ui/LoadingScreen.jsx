"use client";

import { useEffect, useState, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { BRAND } from "../../lib/constants";

/* ── Character setup ── */
const CHARACTERS = BRAND.version.split("");
const WORDMARK = BRAND.name; // "Assembly"

const PARALLAX = [
  { x: 20, y: 15 },
  { x: 8, y: 6 },
  { x: 25, y: 18 },
];
const STAGGER = [0, 0.08, 0.16];
const SPRING_CFG = { stiffness: 150, damping: 20, mass: 0.5 };

/* ── Animated background lines (converging toward center) ── */
const LINES = [
  // Near-vertical lines from top
  { x: 20, y: -12, angle: 86, delay: 0, dur: 5, h: 100 },
  { x: 45, y: -10, angle: 89, delay: 0.8, dur: 4.5, h: 90 },
  { x: 70, y: -14, angle: 92, delay: 0.3, dur: 5.5, h: 95 },
  // Angled from left
  { x: -5, y: 25, angle: 30, delay: 1.2, dur: 6, h: 110 },
  { x: -5, y: 55, angle: 12, delay: 0.5, dur: 5.5, h: 100 },
  // Angled from right
  { x: 105, y: 25, angle: 150, delay: 0.7, dur: 6, h: 110 },
  { x: 105, y: 55, angle: 168, delay: 1.5, dur: 5.5, h: 100 },
  // Diagonals from corners
  { x: 8, y: -5, angle: 55, delay: 1.8, dur: 7, h: 120 },
  { x: 92, y: -5, angle: 125, delay: 0.4, dur: 7, h: 120 },
];

const LINE_STYLES = LINES.map(
  (l, i) => `
@keyframes ls-line-${i} {
  0%   { transform: rotate(${l.angle}deg) translateY(0); opacity: 0; }
  8%   { opacity: 0.5; }
  50%  { opacity: 0.3; }
  85%  { opacity: 0; }
  100% { transform: rotate(${l.angle}deg) translateY(calc(100vh + 60px)); opacity: 0; }
}
`
).join("") + `
@keyframes ls-glow-pulse {
  0%, 100% { opacity: 0.03; transform: translate(-50%, -50%) scale(1); }
  50%      { opacity: 0.07; transform: translate(-50%, -50%) scale(1.05); }
}
@keyframes ls-shimmer {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
`;

export function LoadingScreen() {
  const [phase, setPhase] = useState("entering");

  /* ── Mouse parallax ── */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    SPRING_CFG,
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
    SPRING_CFG,
  );

  const c0x = useSpring(useTransform(mouseX, [-0.5, 0.5], [-PARALLAX[0].x, PARALLAX[0].x]), SPRING_CFG);
  const c0y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-PARALLAX[0].y, PARALLAX[0].y]), SPRING_CFG);
  const c1x = useSpring(useTransform(mouseX, [-0.5, 0.5], [-PARALLAX[1].x, PARALLAX[1].x]), SPRING_CFG);
  const c1y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-PARALLAX[1].y, PARALLAX[1].y]), SPRING_CFG);
  const c2x = useSpring(useTransform(mouseX, [-0.5, 0.5], [-PARALLAX[2].x, PARALLAX[2].x]), SPRING_CFG);
  const c2y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-PARALLAX[2].y, PARALLAX[2].y]), SPRING_CFG);

  const charSprings = [
    { x: c0x, y: c0y },
    { x: c1x, y: c1y },
    { x: c2x, y: c2y },
  ];

  const handleMouseMove = useCallback(
    (e) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    },
    [mouseX, mouseY],
  );

  const handleTouchMove = useCallback(
    (e) => {
      const t = e.touches[0];
      mouseX.set(t.clientX / window.innerWidth - 0.5);
      mouseY.set(t.clientY / window.innerHeight - 0.5);
    },
    [mouseX, mouseY],
  );

  /* ── Phase timing ── */
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced || sessionStorage.getItem("assembly-intro-shown")) {
      setPhase("done");
      return;
    }

    sessionStorage.setItem("assembly-intro-shown", "1");

    const t1 = setTimeout(() => setPhase("interactive"), 600);
    const t2 = setTimeout(() => setPhase("exiting"), 2500);
    const t3 = setTimeout(() => setPhase("done"), 3200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  useEffect(() => {
    if (phase !== "done") {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [phase]);

  if (phase === "done") return null;

  const isExiting = phase === "exiting";

  return (
    <AnimatePresence>
      <motion.div
        key="loading-screen"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="fixed inset-0 z-[300] flex flex-col items-center justify-center cursor-default select-none"
        style={{ backgroundColor: "#101010" }}
        exit={{
          y: "-100%",
          transition: {
            duration: 0.7,
            ease: [0.76, 0, 0.24, 1],
          },
        }}
        aria-hidden="true"
      >
        {/* ── Injected keyframes ── */}
        <style dangerouslySetInnerHTML={{ __html: LINE_STYLES }} />

        {/* ── Animated background lines ── */}
        {LINES.map((l, i) => (
          <motion.div
            key={`line-${i}`}
            animate={isExiting ? {
              opacity: 0,
              x: (l.x < 50 ? -1 : 1) * 80,
              y: (l.y < 0 ? -1 : 1) * 60,
            } : {}}
            transition={{ duration: 0.5, ease: "easeIn" }}
            style={{
              position: "absolute",
              left: `${l.x}%`,
              top: `${l.y}%`,
              width: "1px",
              height: `${l.h}px`,
              background: `linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.45) 20%, rgba(255, 255, 255, 0.25) 70%, transparent 100%)`,
              boxShadow: "0 0 6px 1px rgba(255, 255, 255, 0.04)",
              transformOrigin: "50% 0%",
              animation: `ls-line-${i} ${l.dur}s ${l.delay}s ease-in-out infinite`,
              opacity: 0,
            }}
          />
        ))}

        {/* ── Radial glow behind text ── */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: "min(50vw, 500px)",
            height: "min(50vw, 500px)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 40%, transparent 70%)",
            animation: "ls-glow-pulse 4s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

        {/* ── Text lockup with shimmer ── */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 2 }}>
          <motion.div
            animate={isExiting
              ? { scale: 1.08, opacity: 0 }
              : {}
            }
            transition={isExiting
              ? { duration: 0.5, ease: "easeIn" }
              : {}
            }
            style={{
              perspective: 800,
              display: "flex",
              alignItems: "baseline",
              rotateX,
              rotateY,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Characters: fade in staggered, then smoothly brighten */}
            {CHARACTERS.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: STAGGER[i],
                  duration: 0.6,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                style={{
                  fontFamily: "'PP Mori', var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "clamp(6rem, 20vw, 14rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  willChange: "transform",
                  x: charSprings[i].x,
                  y: charSprings[i].y,
                }}
              >
                {/* Dim base → bright transition via inner span */}
                <motion.span
                  initial={{ color: "rgba(255, 255, 255, 0.15)" }}
                  animate={{ color: "rgba(255, 255, 255, 0.45)" }}
                  transition={{
                    delay: 0.4 + STAGGER[i],
                    duration: 1.8,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  {char}
                </motion.span>
              </motion.span>
            ))}

            {/* Shimmer sweep — soft light that washes across the text */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                overflow: "hidden",
                pointerEvents: "none",
                mixBlendMode: "overlay",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(105deg, transparent 35%, rgba(255, 255, 255, 0.12) 45%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.12) 55%, transparent 65%)",
                  animation: "ls-shimmer 2s 0.6s ease-in-out forwards",
                }}
              />
            </div>
          </motion.div>

          {/* ── Subtle progress bar under the text ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isExiting ? { opacity: 0, scaleX: 0.8 } : { opacity: 1 }}
            transition={isExiting ? { duration: 0.3, ease: "easeIn" } : { delay: 0.3, duration: 0.5 }}
            style={{
              marginTop: "1.5rem",
              width: 80,
              height: 1.5,
              borderRadius: 1,
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 2.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 1,
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                transformOrigin: "left",
              }}
            />
          </motion.div>
        </div>

        {/* ── Film grain ── */}
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <filter id="ls-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>
        <div
          style={{
            position: "absolute",
            inset: 0,
            filter: "url(#ls-grain)",
            opacity: 0.035,
            mixBlendMode: "overlay",
            pointerEvents: "none",
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
