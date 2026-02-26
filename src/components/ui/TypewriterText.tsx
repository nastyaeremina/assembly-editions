"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
  style?: React.CSSProperties;
  className?: string;
  as?: "h2" | "h3" | "p" | "span";
}

// Inject keyframes once
let injected = false;
function injectKeyframes() {
  if (injected || typeof document === "undefined") return;
  const sheet = document.createElement("style");
  sheet.textContent = `@keyframes cursor-blink{0%,100%{opacity:1}50%{opacity:0}}`;
  document.head.appendChild(sheet);
  injected = true;
}

export function TypewriterText({
  text,
  speed = 35,
  delay = 200,
  onComplete,
  style,
  className,
  as: Tag = "h2",
}: TypewriterTextProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [displayedCount, setDisplayedCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  // Inject keyframes on mount
  useEffect(() => { injectKeyframes(); }, []);

  // Start after delay when in view
  useEffect(() => {
    if (!isInView || started) return;
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [isInView, delay, started]);

  // Type characters
  useEffect(() => {
    if (!started || done) return;
    if (displayedCount >= text.length) {
      setDone(true);
      onComplete?.();
      return;
    }
    const timer = setTimeout(() => {
      setDisplayedCount((c) => c + 1);
    }, speed);
    return () => clearTimeout(timer);
  }, [started, displayedCount, text.length, speed, done, onComplete]);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement>}
      className={className}
      style={{ ...style, minHeight: "1.15em" }}
    >
      {text.slice(0, displayedCount)}
      {started && !done && (
        <span
          style={{
            display: "inline-block",
            width: "2px",
            height: "0.85em",
            backgroundColor: "var(--swatch-1)",
            marginLeft: "2px",
            verticalAlign: "text-bottom",
            animation: "cursor-blink 0.8s steps(1) infinite",
          }}
        />
      )}
      {/* Invisible full text for layout sizing */}
      <span style={{ visibility: "hidden", position: "absolute", pointerEvents: "none" }} aria-hidden="true">
        {text}
      </span>
    </Tag>
  );
}
