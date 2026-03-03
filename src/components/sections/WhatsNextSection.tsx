"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ────────────────────────────────────────────────────────────
   WHAT'S NEXT — Roadmap + CTA closing section.

   Left-aligned editorial layout matching the scrollytelling
   sections above. Two roadmap cards with color accents, then
   a centered CTA zone that fades in on scroll.
   ──────────────────────────────────────────────────────────── */

const ROADMAP = [
  {
    label: "Up next",
    title: "AI Edition",
    description:
      "ChatGPT App to ask questions about your clients from anywhere. MCP server for AI-native workflows. Deeper Ask Assembly experience inside the platform.",
    color: "#D6F990",
  },
  {
    label: "Coming soon",
    title: "Scale Ready Edition",
    description:
      "Audit logs for compliance and security. SSO for enterprise authentication. Performance improvements for large teams.",
    color: "#7DA4FF",
  },
];

export function WhatsNextSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  // CTA zone entrance animation
  const ctaOpacity = useTransform(scrollYProgress, [0.55, 0.8], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.55, 0.8], [24, 0]);

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
      {/* Left-aligned container — matches editorial text padding */}
      <div style={{ padding: "0 2rem" }}>
        {/* ══════════════════════════════════════════════════
            ZONE A — Roadmap
           ══════════════════════════════════════════════════ */}

        {/* Section title */}
        <h2
          style={{
            fontFamily: "'PP Mori', var(--font-sans)",
            fontWeight: 600,
            fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.025em",
            color: "#fff",
            margin: 0,
          }}
        >
          What&apos;s next
        </h2>

        {/* Intro text */}
        <p
          style={{
            fontFamily: "'PP Mori', var(--font-sans)",
            fontWeight: 400,
            fontSize: "0.95rem",
            lineHeight: 1.65,
            color: "rgba(255, 255, 255, 0.82)",
            maxWidth: "32rem",
            margin: 0,
            marginTop: "1rem",
          }}
        >
          Assembly 2.0 is live — but we&apos;re just getting started. Two more
          major releases are shipping in the next eight weeks.
        </p>

        {/* Roadmap cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1rem",
            marginTop: "clamp(2rem, 4vw, 3rem)",
          }}
        >
          {ROADMAP.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              style={{
                position: "relative",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "12px",
                padding: "1.5rem 1.75rem",
                overflow: "hidden",
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
              }}
            >
              {/* Color accent line at top */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "1px",
                  background: `linear-gradient(90deg, transparent, ${item.color}50, transparent)`,
                }}
              />

              {/* Label badge */}
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  color: item.color,
                  border: `1px solid ${item.color}30`,
                  backgroundColor: `${item.color}08`,
                  borderRadius: "9999px",
                  padding: "0.2rem 0.6rem",
                  marginBottom: "1rem",
                  textTransform: "uppercase" as const,
                }}
              >
                {item.label}
              </span>

              <h3
                style={{
                  fontFamily: "'PP Mori', var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "1.15rem",
                  lineHeight: 1.3,
                  color: "#fff",
                  margin: 0,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "'PP Mori', var(--font-sans)",
                  fontWeight: 400,
                  fontSize: "0.92rem",
                  lineHeight: 1.6,
                  color: "rgba(255, 255, 255, 0.72)",
                  margin: 0,
                  marginTop: "0.6rem",
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ══════════════════════════════════════════════════
            ZONE B — Centered CTA
           ══════════════════════════════════════════════════ */}
        <motion.div
          style={{
            opacity: ctaOpacity,
            y: ctaY,
            textAlign: "center" as const,
            paddingTop: "clamp(5rem, 10vw, 8rem)",
            paddingBottom: "clamp(2rem, 4vw, 3rem)",
          }}
        >
          <h2
            style={{
              fontFamily: "'PP Mori', var(--font-sans)",
              fontWeight: 600,
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              color: "#fff",
              margin: 0,
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
              color: "rgba(255, 255, 255, 0.72)",
              maxWidth: "28rem",
              margin: "1rem auto 0",
            }}
          >
            Start your free trial to experience the full platform.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              marginTop: "2rem",
              flexWrap: "wrap" as const,
            }}
          >
            <a
              href="https://assembly.com/signup?utm_source=edition&utm_medium=web&utm_campaign=assembly2-launch"
              target="_blank"
              rel="noopener"
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
                e.currentTarget.style.boxShadow = "0 0 30px rgba(214, 249, 144, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Start free trial
              <span style={{ fontFamily: "'PP Mori', var(--font-sans)" }}>→</span>
            </a>
            <a
              href="https://assembly.com"
              target="_blank"
              rel="noopener"
              style={{
                fontFamily: "'PP Mori', var(--font-sans)",
                fontWeight: 500,
                fontSize: "0.9rem",
                color: "rgba(255, 255, 255, 0.7)",
                backgroundColor: "transparent",
                padding: "0.7rem 1.75rem",
                borderRadius: "9999px",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.95)";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Log in
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
