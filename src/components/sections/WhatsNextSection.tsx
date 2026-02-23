"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* ────────────────────────────────────────────────────────────
   WHAT'S NEXT — Roadmap + CTA closing section.

   Zone A: Upcoming releases in subtle bordered cards.
   Zone B: Centered conversion CTA with pill button.
   ──────────────────────────────────────────────────────────── */

const ROADMAP = [
  {
    title: "AI Edition",
    description:
      "ChatGPT App to ask questions about your clients from anywhere. MCP server for AI-native workflows. Deeper Ask Assembly experience inside the platform.",
  },
  {
    title: "Scale Ready Edition",
    description:
      "Audit logs for compliance and security. SSO for enterprise authentication. Performance improvements for large teams.",
  },
];

export function WhatsNextSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  // CTA zone entrance animation
  const ctaOpacity = useTransform(scrollYProgress, [0.6, 0.85], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.6, 0.85], [20, 0]);

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
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* ══════════════════════════════════════════════════
            ZONE A — Roadmap
           ══════════════════════════════════════════════════ */}

        {/* Mono label + extending rule */}
        <div className="flex items-center">
          <span
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontWeight: 400,
              fontSize: "0.8rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              color: "var(--swatch-5)",
              whiteSpace: "nowrap" as const,
              paddingRight: "1.5rem",
            }}
          >
            What&apos;s next
          </span>
          <div
            style={{
              flex: 1,
              height: "1px",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
            }}
          />
        </div>

        {/* Intro text */}
        <p
          style={{
            fontFamily: "'PP Mori', var(--font-sans)",
            fontWeight: 400,
            fontSize: "clamp(1.05rem, 1.6vw, 1.25rem)",
            lineHeight: 1.5,
            color: "var(--swatch-3)",
            maxWidth: "36rem",
            margin: 0,
            marginTop: "clamp(2rem, 4vw, 2.5rem)",
          }}
        >
          Assembly 2.0 is live — but we&apos;re just getting started. Two more
          major releases are shipping in the next eight weeks.
        </p>

        {/* Roadmap cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column" as const,
            gap: "1rem",
            marginTop: "clamp(2rem, 4vw, 3rem)",
          }}
        >
          {ROADMAP.map((item) => (
            <div
              key={item.title}
              style={{
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "12px",
                padding: "1.5rem 2rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "'PP Mori', var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  lineHeight: 1.3,
                  color: "var(--swatch-1)",
                  margin: 0,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "'PP Mori', var(--font-sans)",
                  fontWeight: 400,
                  fontSize: "1rem",
                  lineHeight: 1.5,
                  color: "var(--swatch-3)",
                  margin: 0,
                  marginTop: "0.75rem",
                }}
              >
                {item.description}
              </p>
            </div>
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
            paddingTop: "clamp(4rem, 8vw, 6rem)",
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
              color: "var(--swatch-1)",
              margin: 0,
            }}
          >
            Try Assembly 2.0
          </h2>

          <p
            style={{
              fontFamily: "'PP Mori', var(--font-sans)",
              fontWeight: 400,
              fontSize: "1.1rem",
              lineHeight: 1.4,
              color: "var(--swatch-3)",
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
              gap: "1.5rem",
              marginTop: "2rem",
            }}
          >
            <a
              href="https://assembly.com/signup?utm_source=edition&utm_medium=web&utm_campaign=assembly2-launch"
              target="_blank"
              rel="noopener"
              style={{
                fontFamily: "'PP Mori', var(--font-sans)",
                fontWeight: 600,
                fontSize: "0.95rem",
                color: "#101010",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                padding: "0.75rem 2rem",
                borderRadius: "9999px",
                border: "none",
                textDecoration: "none",
                transition: "background-color 0.15s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#ffffff")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.9)")
              }
            >
              Start free trial
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
