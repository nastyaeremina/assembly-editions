"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Scrolling messages (left column) ── */
const MESSAGES = [
  "// Initializing Assembly 2.0...",
  "// Loading client experiences...",
  "// Syncing payment modules...",
  "// Preparing task engine...",
  "// Configuring portal themes...",
  "// Connecting developer APIs...",
  "// Assembling the future...",
];

/* ── Right-side text that "decodes" from scrambled ── */
const DECODED_TEXT =
  "The biggest update in Assembly history is here. Every surface, reimagined.";

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

/* ── Hook: scramble-decode text ── */
function useScrambleText(text, duration = 1800, delay = 400) {
  const [display, setDisplay] = useState("");
  const rafRef = useRef(null);

  useEffect(() => {
    const startTime = performance.now() + delay;
    const len = text.length;

    function tick(now) {
      const elapsed = now - startTime;
      if (elapsed < 0) {
        let s = "";
        for (let i = 0; i < len; i++) {
          s +=
            text[i] === " "
              ? " "
              : CHARS[Math.floor(Math.random() * CHARS.length)];
        }
        setDisplay(s);
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      const revealed = Math.floor(progress * len);
      let s = "";
      for (let i = 0; i < len; i++) {
        if (i < revealed) {
          s += text[i];
        } else {
          s +=
            text[i] === " "
              ? " "
              : CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      setDisplay(s);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [text, duration, delay]);

  return display;
}

/* ── Hook: counter 0.0 → 2.0 ── */
const COUNTER_DURATION = 2200; // ms to count from 0.0 to 2.0

function useCounter(duration) {
  const [value, setValue] = useState("0.0");
  const rafRef = useRef(null);

  useEffect(() => {
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // 0.0 → 2.0
      const num = progress * 2.0;
      setValue(num.toFixed(1));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [duration]);

  return value;
}

/* ── Scrolling message list ── */
function ScrollingMessages({ activeIndex }) {
  const doubled = [...MESSAGES, ...MESSAGES];

  return (
    <div
      style={{
        position: "absolute",
        left: "clamp(1rem, 4vw, 3rem)",
        top: "50%",
        transform: "translateY(-50%)",
        overflow: "hidden",
        height: `${MESSAGES.length * 1.8}em`,
        width: "clamp(200px, 30vw, 400px)",
      }}
    >
      <motion.div
        animate={{ y: `-${activeIndex * 1.8}em` }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {doubled.map((msg, i) => {
          const isActive =
            i % MESSAGES.length === activeIndex % MESSAGES.length;
          return (
            <div
              key={i}
              style={{
                fontFamily:
                  "'SF Mono', 'Fira Code', 'Consolas', monospace",
                fontSize: "clamp(0.6rem, 1vw, 0.75rem)",
                lineHeight: "1.8em",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: isActive ? "#101010" : "rgba(255,255,255,0.25)",
                backgroundColor: isActive
                  ? "rgba(255,255,255,0.9)"
                  : "transparent",
                padding: isActive ? "0 0.4em" : "0",
                display: "inline-block",
                transition: "color 0.3s, background-color 0.3s",
                whiteSpace: "nowrap",
              }}
            >
              {msg}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

/* ── MONO STYLE (shared by left messages, center counter, right text) ── */
const MONO = {
  fontFamily: "'SF Mono', 'Fira Code', 'Consolas', monospace",
  letterSpacing: "0.02em",
  textTransform: "uppercase",
};

export function LoadingScreen() {
  const [phase, setPhase] = useState("entering");
  const [activeMsg, setActiveMsg] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrambled = useScrambleText(DECODED_TEXT, 2000, 300);
  const counter = useCounter(COUNTER_DURATION);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

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

    const t1 = setTimeout(() => setPhase("interactive"), 200);
    // Counter reaches 2.0 at ~2200ms, brief hold then fade out
    const t2 = setTimeout(() => setPhase("exiting"), 2500);
    const t3 = setTimeout(() => setPhase("done"), 3100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  /* ── Cycle through messages ── */
  useEffect(() => {
    if (phase === "done" || phase === "exiting") return;
    const interval = setInterval(() => {
      setActiveMsg((prev) => (prev + 1) % MESSAGES.length);
    }, 350);
    return () => clearInterval(interval);
  }, [phase]);

  /* ── Lock scroll ── */
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
        className="fixed inset-0 z-[300] flex items-center justify-center cursor-default select-none"
        style={{ backgroundColor: "#101010" }}
        animate={isExiting ? { opacity: 0 } : { opacity: 1 }}
        transition={
          isExiting
            ? { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
            : { duration: 0.2 }
        }
        aria-hidden="true"
      >
        {/* ── Left: Scrolling messages (desktop only) ── */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isExiting ? 0 : 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <ScrollingMessages activeIndex={activeMsg} />
          </motion.div>
        )}

        {/* ── Center: ( 0.0 ) → ( 2.0 ) counter ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.05, duration: 0.4 }}
          style={{
            ...MONO,
            fontSize: isMobile ? "1.1rem" : "clamp(0.7rem, 1.1vw, 0.85rem)",
            color:
              counter === "2.0"
                ? "rgba(255,255,255,0.9)"
                : "rgba(255,255,255,0.5)",
            transition: "color 0.3s ease",
            position: isMobile ? "relative" : "relative",
            zIndex: 2,
            ...(isMobile && {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
            }),
          }}
        >
          ( {counter} )
          {/* ── Mobile: scrambled text inline below counter ── */}
          {isMobile && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: isExiting ? 0 : 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                ...MONO,
                fontSize: "0.6rem",
                lineHeight: 1.7,
                letterSpacing: "0.01em",
                color: "rgba(255,255,255,0.35)",
                textAlign: "center",
                maxWidth: "260px",
                wordBreak: "break-word",
              }}
            >
              {scrambled}
            </motion.span>
          )}
        </motion.div>

        {/* ── Right: Scramble/decode text (desktop only) ── */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isExiting ? 0 : 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{
              ...MONO,
              position: "absolute",
              right: "clamp(1rem, 4vw, 3rem)",
              top: "50%",
              transform: "translateY(-50%)",
              width: "clamp(160px, 22vw, 300px)",
              fontSize: "clamp(0.55rem, 0.85vw, 0.7rem)",
              lineHeight: 1.6,
              letterSpacing: "0.01em",
              color: "rgba(255,255,255,0.4)",
              textAlign: "right",
              wordBreak: "break-word",
            }}
          >
            {scrambled}
          </motion.div>
        )}

        {/* ── Film grain ── */}
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <filter id="ls-grain">
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
            filter: "url(#ls-grain)",
            opacity: 0.03,
            mixBlendMode: "overlay",
            pointerEvents: "none",
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
