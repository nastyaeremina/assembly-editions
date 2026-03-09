"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ────────────────────────────────────────────────────────────
   WHAT'S NEXT — Stacking cards on scroll.

   Inspired by opennote.com's sticky-card technique: each card
   uses `position: sticky` so they naturally pile up as the
   user scrolls. Pure CSS for the stacking, framer-motion for
   the heading fade-in and CTA scroll reveal.
   ──────────────────────────────────────────────────────────── */

const ROADMAP = [
  {
    label: "Up next",
    title: "AI Edition",
    description:
      "ChatGPT App to ask questions about your clients from anywhere. MCP server for AI-native workflows. Deeper Ask Assembly experience inside the platform.",
    bg: "#1a1a1a",
    borderColor: "rgba(255, 255, 255, 0.10)",
    rotation: -2.5,
    iconBg: "#2a2a2a",
    icon: (
      <img
        src="/images/openai.svg"
        alt=""
        aria-hidden="true"
        style={{ width: "24px", height: "24px", filter: "invert(1)", opacity: 0.7 }}
      />
    ),
  },
  {
    label: "Coming soon",
    title: "Scale Ready Edition",
    description:
      "Audit logs for compliance and security. SSO for enterprise authentication. Performance improvements for large teams.",
    bg: "#161616",
    borderColor: "rgba(255, 255, 255, 0.08)",
    rotation: 1.8,
    iconBg: "#252525",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 2L4 5.5V11.5C4 16.45 7.4 21.05 12 22C16.6 21.05 20 16.45 20 11.5V5.5L12 2ZM12 11.99H18C17.47 16.11 15.14 19.78 12 20.93V12H6V6.69L12 4.14V11.99Z"
          fill="rgba(255, 255, 255, 0.6)"
        />
      </svg>
    ),
  },
];

export function WhatsNextSection() {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const ctaOpacity = useTransform(scrollYProgress, [0.6, 0.85], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.6, 0.85], [24, 0]);

  return (
    <section
      ref={sectionRef}
      id="whats-next"
      className="relative z-50"
      style={{
        backgroundColor: "#101010",
        paddingTop: "clamp(4rem, 8vw, 6rem)",
        paddingBottom: "clamp(4rem, 8vw, 6rem)",
      }}
    >
      <div style={{ padding: "0 2rem" }}>

        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2
            style={{
              fontFamily: "'PP Mori', var(--font-sans)",
              fontWeight: 600,
              fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              color: "#fff",
              margin: 0,
              textAlign: "center",
            }}
          >
            What&apos;s next
          </h2>

          <p
            style={{
              fontFamily: "'PP Mori', var(--font-sans)",
              fontWeight: 400,
              fontSize: "0.95rem",
              lineHeight: 1.65,
              color: "rgba(255, 255, 255, 0.55)",
              maxWidth: "32rem",
              margin: "1rem auto 0",
              textAlign: "center",
            }}
          >
            Assembly 2.0 is live — but we&apos;re just getting started. Two more
            editions are shipping in the next eight weeks.
          </p>
        </motion.div>

        {/* ── Stacking cards container ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: isMobile ? "24px" : "60px",
            marginTop: "clamp(3.5rem, 7vw, 5rem)",
            paddingBottom: isMobile ? "0" : "20vh",
          }}
        >
          {ROADMAP.map((item, i) => (
            <div
              key={item.title}
              style={{
                position: isMobile ? "relative" : "sticky",
                top: isMobile ? "auto" : "20vh",
                zIndex: i + 1,
                width: isMobile ? "100%" : "min(420px, 90vw)",
                minHeight: "280px",
                padding: "2rem 2.25rem",
                borderRadius: "16px",
                backgroundColor: item.bg,
                border: `1px solid ${item.borderColor}`,
                transform: isMobile ? "none" : `rotate(${item.rotation}deg)`,
                boxShadow: "0 4px 24px rgba(0, 0, 0, 0.3)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                backgroundImage:
                  "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 40%)",
              }}
            >
              {/* Icon in rounded square */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  backgroundColor: item.iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>

              {/* Label row */}
              <div
                style={{
                  marginBottom: "1.25rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'ABC Diatype Mono', var(--font-mono, monospace)",
                    fontSize: "0.8rem",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                    color: "rgba(255, 255, 255, 0.35)",
                    textTransform: "uppercase",
                  }}
                >
                  {item.label}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'PP Mori', var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "clamp(1.3rem, 2.2vw, 1.65rem)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  color: "rgba(255, 255, 255, 0.9)",
                  margin: 0,
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'PP Mori', var(--font-sans)",
                  fontWeight: 400,
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  color: "rgba(255, 255, 255, 0.45)",
                  margin: 0,
                  marginTop: "0.75rem",
                  maxWidth: "24rem",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── CTA sign-off ── */}
        <motion.div
          style={{
            opacity: ctaOpacity,
            y: ctaY,
          }}
        >
          <div
            style={{
              marginTop: "clamp(6rem, 12vw, 10rem)",
              margin: "clamp(6rem, 12vw, 10rem) -0.5rem 0",
              borderRadius: "20px",
              position: "relative",
              overflow: "hidden",
              padding: "clamp(3.5rem, 7vw, 6rem) 2rem clamp(4rem, 8vw, 7rem)",
              textAlign: "center",
            }}
          >
            {/* Card gradient — dark top, blue glow from bottom */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background: `
                  linear-gradient(to bottom, #101010 0%, #0a1a1a 40%, #0c2a28 70%, #0e4540 100%),
                  radial-gradient(ellipse 80% 50% at 50% 100%, rgba(0, 160, 140, 0.4) 0%, rgba(0, 110, 100, 0.15) 40%, transparent 70%)
                `,
                backgroundBlendMode: "normal",
                zIndex: 0,
              }}
            />
            <h2
              style={{
                fontFamily: "'PP Mori', var(--font-sans)",
                fontWeight: 600,
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "#fff",
                margin: 0,
                position: "relative",
                zIndex: 2,
              }}
            >
              Try Assembly 2.0
            </h2>

            <p
              style={{
                fontFamily: "'PP Mori', var(--font-sans)",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.5,
                color: "rgba(255, 255, 255, 0.5)",
                maxWidth: "26rem",
                margin: "1rem auto 0",
                position: "relative",
                zIndex: 2,
              }}
            >
              Start your free trial to experience the full platform.
            </p>

            <div style={{ marginTop: "2rem", position: "relative", zIndex: 2 }}>
              <a
                href="https://assembly.com/signup?utm_source=edition&utm_medium=web&utm_campaign=assembly2-launch"
                target="_blank"
                rel="noopener noreferrer"
                className="edition-cta-arrow"
                style={{
                  fontFamily: "'PP Mori', var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: "#101010",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  padding: "0.7rem 2rem",
                  borderRadius: "9999px",
                  border: "none",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.9)";
                }}
              >
                Start free trial
                <span
                  className="edition-cta-arrow-icon"
                  style={{
                    fontFamily: "'PP Mori', var(--font-sans)",
                    display: "inline-block",
                    transition: "transform 0.25s cubic-bezier(0.25, 0.1, 0.25, 1)",
                  }}
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
