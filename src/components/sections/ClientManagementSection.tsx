"use client";

import { MacOSDock, ContextBarDemo, SectionReveal } from "@/components/ui";

interface ClientManagementSectionProps {
  inSplit?: boolean;
}

export function ClientManagementSection({ inSplit = false }: ClientManagementSectionProps) {
  return (
    <section
      id="client-management"
      className={`relative ${inSplit ? "py-24 sm:py-40" : "py-24 sm:py-40"}`}
      style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}
    >
      {/* Ambient gradient — bottom right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "60%",
          height: "60%",
          background: "radial-gradient(ellipse at bottom right, rgba(255, 255, 255, 0.025), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className={`relative ${inSplit ? "px-6 sm:px-8 lg:px-10" : "mx-auto max-w-7xl px-6"}`}>
        {/* Header group */}
        <SectionReveal>
          {/* Section number + extending rule */}
          <div
            className="flex items-center"
            style={{ marginBottom: "1.5rem" }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "0.875rem",
                letterSpacing: "-0.04em",
                color: "rgba(255, 255, 255, 0.4)",
                whiteSpace: "nowrap",
                paddingRight: "1.5rem",
              }}
            >
              03
            </span>
            <div
              style={{
                flex: 1,
                height: "1px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              }}
            />
          </div>

          <h2
            style={{
              fontFamily: "'PP Mori', var(--font-sans)",
              fontWeight: 600,
              fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              color: "var(--swatch-1)",
              margin: "0 0 1.25rem 0",
            }}
          >
            Client management
          </h2>

          <p
            style={{
              fontFamily: "'PP Mori', var(--font-sans)",
              fontWeight: 400,
              fontSize: "1.05rem",
              lineHeight: 1.5,
              color: "var(--swatch-3)",
              maxWidth: "32rem",
              margin: "0 0 4rem 0",
            }}
          >
            A native desktop experience and contextual information at your fingertips.
          </p>
        </SectionReveal>

        {/* Desktop App */}
        <SectionReveal delay={0.1}>
          <div id="native-desktop-app" style={{ marginBottom: "6rem" }}>
            <MacOSDock />
            <div style={{ marginTop: "2.5rem" }}>
              <h3 style={{ fontFamily: "'PP Mori', var(--font-sans)", fontWeight: 600, fontSize: "1.05rem", lineHeight: 1.3, letterSpacing: "-0.015em", color: "var(--swatch-1)", margin: "0 0 0.75rem 0" }}>
                Native Desktop App
              </h3>
              <p style={{ fontFamily: "'PP Mori', var(--font-sans)", fontWeight: 400, fontSize: "0.975rem", lineHeight: 1.6, color: "var(--swatch-3)", margin: 0, maxWidth: "34rem" }}>
                Assembly now has a desktop app for Mac and Windows with real desktop notifications. No more browser tab hunting.
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* Context Bar */}
        <SectionReveal delay={0.1}>
          <div id="context-bar">
            <ContextBarDemo />
            <div style={{ marginTop: "2.5rem" }}>
              <h3 style={{ fontFamily: "'PP Mori', var(--font-sans)", fontWeight: 600, fontSize: "1.05rem", lineHeight: 1.3, letterSpacing: "-0.015em", color: "var(--swatch-1)", margin: "0 0 0.75rem 0" }}>
                Context Bar
              </h3>
              <p style={{ fontFamily: "'PP Mori', var(--font-sans)", fontWeight: 400, fontSize: "0.975rem", lineHeight: 1.6, color: "var(--swatch-3)", margin: 0, maxWidth: "34rem" }}>
                The redesigned right sidebar now appears on more surfaces. Pull up client details, edit fields, or chat with your team without navigating away.
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
