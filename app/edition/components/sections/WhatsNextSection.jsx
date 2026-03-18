"use client";

import { motion } from "framer-motion";

/* ────────────────────────────────────────────────────────────
   CTA Section — "Try Assembly 2.0" sign-off with gradient card
   ──────────────────────────────────────────────────────────── */

export function WhatsNextSection() {
  return (
    <section
      id="whats-next"
      className="relative z-50"
      style={{
        backgroundColor: "#101010",
        paddingTop: "clamp(2rem, 4vw, 3rem)",
        paddingBottom: "clamp(4rem, 8vw, 6rem)",
      }}
    >
      <div style={{ padding: "0 1rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div
            style={{
              maxWidth: "80rem",
              margin: "0 auto",
              borderRadius: "20px",
              position: "relative",
              overflow: "hidden",
              padding: "clamp(3.5rem, 7vw, 6rem) 2rem clamp(4rem, 8vw, 7rem)",
              textAlign: "center",
            }}
          >
            {/* Card gradient — off-black base + subtle cool glow from bottom */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background: `
                  radial-gradient(ellipse 80% 45% at 50% 100%, rgba(160, 200, 240, 0.35) 0%, rgba(160, 200, 240, 0.14) 50%, transparent 70%),
                  linear-gradient(to bottom, #101010 0%, #101010 45%, rgba(160, 200, 240, 0.10) 75%, rgba(160, 200, 240, 0.20) 100%),
                  #101010
                `,
                zIndex: 0,
              }}
            />
            <h2
              style={{
                fontFamily: "'PP Mori', var(--font-sans)",
                fontWeight: 600,
                fontSize: "clamp(1.5rem, 2.5vw, 1.9rem)",
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
