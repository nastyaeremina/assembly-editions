"use client";

import { useEffect, useState, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { BRAND } from "@/lib/constants";

/* ────────────────────────────────────────────────────────────
   LOADING SCREEN — Mouse-interactive "2.0" intro overlay
   Shows once per session, skips for reduced-motion users.
   ──────────────────────────────────────────────────────────── */

type Phase = "entering" | "interactive" | "exiting" | "done";

const CHARACTERS = BRAND.version.split(""); // ["2", ".", "0"]

// Per-character parallax displacement (px at ±0.5 mouse range)
const PARALLAX = [
  { x: 20, y: 15 }, // "2"  — moderate
  { x: 8, y: 6 },   // "."  — subtle anchor
  { x: 25, y: 18 }, // "0"  — most reactive
];

const STAGGER = [0, 0.08, 0.16]; // entrance delay per character

const SPRING_CFG = { stiffness: 150, damping: 20, mass: 0.5 };

export function LoadingScreen() {
  const [phase, setPhase] = useState<Phase>("entering");

  /* ── Normalised mouse position [-0.5, 0.5] ── */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  /* ── 3D tilt (whole group) ── */
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [8, -8]),
    SPRING_CFG,
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-8, 8]),
    SPRING_CFG,
  );

  /* ── Per-character parallax springs ── */
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

  /* ── Mouse / touch handlers ── */
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    },
    [mouseX, mouseY],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      const t = e.touches[0];
      mouseX.set(t.clientX / window.innerWidth - 0.5);
      mouseY.set(t.clientY / window.innerHeight - 0.5);
    },
    [mouseX, mouseY],
  );

  /* ── Phase timeline ── */
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

  /* ── Scroll lock ── */
  useEffect(() => {
    if (phase !== "done") {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [phase]);

  if (phase === "done") return null;

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
          {/* ── "2.0" with 3D tilt container ── */}
          <motion.div
            style={{
              perspective: 800,
              display: "flex",
              alignItems: "baseline",
              rotateX,
              rotateY,
            }}
          >
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
                  color: "rgba(255, 255, 255, 0.3)",
                  willChange: "transform",
                  x: charSprings[i].x,
                  y: charSprings[i].y,
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.div>

          {/* ── Progress line ── */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 2.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{
              position: "absolute",
              bottom: "2rem",
              left: "50%",
              translateX: "-50%",
              width: 120,
              height: 1,
              backgroundColor: "rgba(255, 255, 255, 0.4)",
              transformOrigin: "left",
            }}
          />
        </motion.div>
    </AnimatePresence>
  );
}
