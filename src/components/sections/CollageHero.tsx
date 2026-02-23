"use client";

import { useEffect, useRef } from "react";

/* ────────────────────────────────────────────────────────────
   HERO SECTION
   Dark background with stacked horizontal marquee rows.
   Each row scrolls large h1-style text at varying speeds,
   inspired by the Cargo reference design.
   ──────────────────────────────────────────────────────────── */

const MARQUEE_ROWS = [
  { text: "Assembly 2.0 — The biggest update in Assembly history", speed: 40, bg: "#5BE4C2" },
  { text: "Client Portals, Reimagined — Organization + Personalized Homepages", speed: 30, bg: "#FF9092" },
  { text: "Project Management That Actually Fits How You Work", speed: 50, bg: "#C5B3FF" },
  { text: "Payments, Consolidated — Invoicing + Billing in One Place", speed: 35, bg: "#D6F990" },
  { text: "For Developers — APIs, Custom Apps + Integrations", speed: 45, bg: "#7DA4FF" },
];

function MarqueeRow({ text, speed, bg }: { text: string; speed: number; bg: string }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    let lastTime = 0;

    function animate(time: number) {
      if (lastTime) {
        const delta = (time - lastTime) / 1000;
        offsetRef.current -= speed * delta;

        // Reset when first copy has scrolled fully out
        const singleWidth = el!.scrollWidth / 2;
        if (Math.abs(offsetRef.current) >= singleWidth) {
          offsetRef.current += singleWidth;
        }

        el!.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }
      lastTime = time;
      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed]);

  return (
    <div
      className="overflow-hidden"
      style={{
        backgroundColor: bg,
        paddingTop: "1.2rem",
        paddingBottom: "0.8rem",
        borderRadius: "0.5rem",
      }}
    >
      <div
        ref={innerRef}
        className="flex whitespace-nowrap will-change-transform"
        style={{ gap: "0.5em" }}
      >
        {/* Duplicate the content for seamless loop */}
        {[0, 1].map((i) => (
          <span
            key={i}
            style={{
              fontWeight: 600,
              fontSize: "clamp(2.5rem, 8vw, 9.2rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              color: "#101010",
              paddingRight: "0.5em",
            }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}

export function CollageHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#101010" }}
      aria-label="Assembly 2.0 hero"
    >
      <div
        className="flex flex-col"
        style={{ gap: "0.5rem", paddingTop: "4.5rem", paddingBottom: "0.5rem", paddingLeft: "0.5rem", paddingRight: "0.5rem" }}
      >
        {MARQUEE_ROWS.map((row, i) => (
          <MarqueeRow key={i} text={row.text} speed={row.speed} bg={row.bg} />
        ))}
      </div>
    </section>
  );
}
