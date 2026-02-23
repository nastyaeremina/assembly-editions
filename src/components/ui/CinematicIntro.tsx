"use client";

import { useEffect, useState } from "react";

// Assembly mark SVG paths (reused from LogoParticles constants)
const LOGO_PATHS = [
  "M35.327 25.05v5.867c0 2.075-1.711 3.758-3.822 3.758H1.1c-.936 0-1.405-1.113-.743-1.764l7.127-7.003a3.008 3.008 0 0 1 2.107-.857H35.33h-.002Z",
  "M35.33 11.802v5.865c0 2.075-1.712 3.757-3.824 3.757H12.051l8.92-8.765a3.005 3.005 0 0 1 2.107-.857H35.33h-.001Z",
  "M35.33 1.043v3.373c0 2.075-1.712 3.758-3.824 3.758h-5.97L33.534.312c.662-.65 1.794-.19 1.794.73Z",
];

export function CinematicIntro() {
  const [phase, setPhase] = useState<"logo" | "text" | "exit" | "done">("logo");

  // Respect prefers-reduced-motion — skip entirely
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setReducedMotion(true);
      setPhase("done");
      return;
    }

    // Phase timeline
    const t1 = setTimeout(() => setPhase("text"), 400);
    const t2 = setTimeout(() => setPhase("exit"), 800);
    const t3 = setTimeout(() => setPhase("done"), 1200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  // Once done, unmount entirely
  if (phase === "done" || reducedMotion) return null;

  return (
    <div
      className={`cinematic-intro fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[var(--color-assembly-black)] ${
        phase === "exit" ? "cinematic-exit" : ""
      }`}
      aria-hidden="true"
    >
      {/* Assembly mark */}
      <svg
        viewBox="0 0 35.33 34.675"
        className={`cinematic-logo h-10 w-10 sm:h-12 sm:w-12 fill-zinc-100 ${
          phase === "logo" || phase === "text" || phase === "exit"
            ? "cinematic-reveal"
            : ""
        }`}
      >
        {LOGO_PATHS.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </svg>

      {/* "Assembly 2.0" text */}
      <p
        className={`cinematic-text mt-4 text-lg font-semibold tracking-tight text-zinc-100 sm:text-xl ${
          phase === "text" || phase === "exit" ? "cinematic-reveal" : ""
        }`}
      >
        Assembly 2.0
      </p>
    </div>
  );
}
