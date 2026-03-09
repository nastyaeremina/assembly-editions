"use client";

import { useRef, useEffect, useState } from "react";

/* ── Configuration ── */
const IMAGE_SRC = "/edition/creation-hands.png";
const CHAR_RAMP = " .,:;+*FLY0#@"; // 13 levels: space(dark) → @(bright)
const SCRAMBLE_SET =
  "!@#$%^&*+-=~<>?/\\|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const SCRAMBLE_PHASE = 600; // ms of pure scramble
const RESOLVE_PHASE = 2000; // ms for resolve
const CYCLE_MS = 80; // ms between scramble-char refreshes
const TEXT_OPACITY = 0.09;

/**
 * ASCII hero background — two hands reaching toward each other
 * (Creation of Adam), rendered as a monospace character grid.
 *
 * Loads a reference image, samples brightness at grid intervals,
 * maps each sample to an ASCII character. On load, characters
 * scramble then resolve — a decryption-style reveal.
 *
 * After animation the text is static — zero ongoing cost.
 */
export function AsciiHeroBackground() {
  const preRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let rafId;

    async function init() {
      const el = preRef.current;
      if (!el) return;

      const isMobile = window.innerWidth < 768;
      const isTablet = window.innerWidth < 1024;

      /* ── Load reference image ── */
      const img = new Image();
      img.crossOrigin = "anonymous";
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = IMAGE_SRC;
      });
      if (cancelled) return;

      /* ── Draw to off-screen canvas for brightness sampling ── */
      const step = isMobile ? 7 : isTablet ? 5 : 4;
      /* Scale image to a reasonable sampling size */
      const maxW = 1400;
      const scale = Math.min(maxW / img.naturalWidth, 1);
      const CW = Math.round(img.naturalWidth * scale);
      const CH = Math.round(img.naturalHeight * scale);

      const canvas = document.createElement("canvas");
      canvas.width = CW;
      canvas.height = CH;
      const ctx = canvas.getContext("2d");

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, CW, CH);
      ctx.drawImage(img, 0, 0, CW, CH);

      /* ── Sample brightness → character grid ── */
      const data = ctx.getImageData(0, 0, CW, CH).data;
      const cols = Math.floor(CW / step);
      const rows = Math.floor(CH / step);
      const rampMax = CHAR_RAMP.length - 1;

      const targetGrid = [];
      const resolveAt = [];

      for (let r = 0; r < rows; r++) {
        const rowChars = [];
        const rowTimes = [];
        for (let c = 0; c < cols; c++) {
          const px = Math.min(c * step + (step >> 1), CW - 1);
          const py = Math.min(r * step + (step >> 1), CH - 1);
          const idx = (py * CW + px) * 4;
          const brightness =
            (data[idx] + data[idx + 1] + data[idx + 2]) / 3 / 255;

          const ci = Math.min(
            Math.floor(brightness * rampMax + 0.5),
            rampMax
          );
          rowChars.push(CHAR_RAMP[ci]);
          // Ease-in resolve: slow start, burst finish
          rowTimes.push(Math.pow(Math.random(), 2.5));
        }
        targetGrid.push(rowChars);
        resolveAt.push(rowTimes);
      }

      if (cancelled) return;

      /* ── Reduced motion → show final state immediately ── */
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        el.textContent = targetGrid.map((r) => r.join("")).join("\n");
        setIsReady(true);
        return;
      }

      /* ── Scramble grid (pre-allocated) ── */
      const scramble = targetGrid.map((row) =>
        row.map((ch) =>
          ch === " "
            ? " "
            : SCRAMBLE_SET[Math.floor(Math.random() * SCRAMBLE_SET.length)]
        )
      );

      setIsReady(true);
      const t0 = performance.now();
      let lastCycle = 0;

      function frame(now) {
        if (cancelled) return;

        const elapsed = now - t0;
        const rp = Math.max(
          0,
          Math.min((elapsed - SCRAMBLE_PHASE) / RESOLVE_PHASE, 1)
        );

        /* Refresh un-resolved scramble chars */
        if (now - lastCycle > CYCLE_MS) {
          lastCycle = now;
          for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
              if (targetGrid[r][c] !== " " && resolveAt[r][c] > rp) {
                scramble[r][c] =
                  SCRAMBLE_SET[
                    Math.floor(Math.random() * SCRAMBLE_SET.length)
                  ];
              }
            }
          }
        }

        /* Build display text */
        let out = "";
        for (let r = 0; r < rows; r++) {
          if (r > 0) out += "\n";
          for (let c = 0; c < cols; c++) {
            const tgt = targetGrid[r][c];
            out +=
              tgt === " "
                ? " "
                : rp >= resolveAt[r][c]
                  ? tgt
                  : scramble[r][c];
          }
        }
        el.textContent = out;

        if (elapsed < SCRAMBLE_PHASE + RESOLVE_PHASE) {
          rafId = requestAnimationFrame(frame);
        }
        /* After complete — static text, zero ongoing cost */
      }

      rafId = requestAnimationFrame(frame);
    }

    init();
    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity: isReady ? 1 : 0,
        transition: "opacity 1.2s ease-out 0.1s",
        zIndex: 1,
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <pre
        ref={preRef}
        aria-hidden="true"
        style={{
          fontFamily:
            "var(--font-mono), 'SF Mono', 'Fira Code', 'Courier New', monospace",
          fontSize: "clamp(0.28rem, 0.5vw, 0.38rem)",
          lineHeight: 0.85,
          letterSpacing: "0.04em",
          color: `rgba(255, 255, 255, ${TEXT_OPACITY})`,
          margin: 0,
          padding: 0,
          whiteSpace: "pre",
          userSelect: "none",
          overflow: "hidden",
        }}
      />
    </div>
  );
}
