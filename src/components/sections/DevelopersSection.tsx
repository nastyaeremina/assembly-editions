"use client";

import { AppBridgeCodeDemo, SectionReveal } from "@/components/ui";

interface DevelopersSectionProps {
  inSplit?: boolean;
}

/* Shared inline styles */
const heading: React.CSSProperties = {
  fontFamily: "'PP Mori', var(--font-sans)",
  fontWeight: 600,
  fontSize: "1.05rem",
  lineHeight: 1.3,
  letterSpacing: "-0.015em",
  color: "var(--swatch-1)",
  margin: "0 0 0.75rem 0",
};

const body: React.CSSProperties = {
  fontFamily: "'PP Mori', var(--font-sans)",
  fontWeight: 400,
  fontSize: "0.975rem",
  lineHeight: 1.6,
  color: "var(--swatch-3)",
  margin: 0,
  maxWidth: "34rem",
};


export function DevelopersSection({ inSplit = false }: DevelopersSectionProps) {
  return (
    <section
      id="developers"
      className={`relative ${inSplit ? "py-24 sm:py-40" : "py-24 sm:py-40"}`}
      style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}
    >
      {/* Ambient gradient — top right */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "60%",
          height: "60%",
          background: "radial-gradient(ellipse at top right, rgba(255, 255, 255, 0.025), transparent 70%)",
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
              05
            </span>
            <div
              style={{
                flex: 1,
                height: "1px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              }}
            />
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "'PP Mori', var(--font-sans)",
              fontWeight: 600,
              fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              color: "var(--swatch-1)",
              margin: "0 0 4rem 0",
            }}
          >
            For developers
          </h2>
        </SectionReveal>

        {/* ── New Custom App Base ── */}
        <SectionReveal delay={0.1}>
          <div id="custom-app-base" style={{ marginBottom: "6rem" }}>
            <AppBridgeCodeDemo inSplit={inSplit} />
            <div style={{ marginTop: "2.5rem" }}>
              <h3 style={heading}>New custom app base</h3>
              <p style={body}>
                Rebuilt from the ground up with live examples for SSR, client-side API requests, and AppBridge configuration. Your new starting point for building on Assembly.
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* ── Secure App Sessions ── */}
        <SectionReveal delay={0.1}>
          <div id="secure-app-sessions" style={{ marginBottom: "6rem" }}>
            <h3 style={heading}>Secure app sessions</h3>
            <p style={body}>
              Session tokens now expire after 5 minutes. A new <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.9em" }}>@assembly-js/app-bridge</span> package handles refresh automatically — shared URLs no longer grant permanent access.
            </p>
          </div>
        </SectionReveal>

        {/* ── Tasks API ── */}
        <SectionReveal delay={0.1}>
          <div id="tasks-api">
            <h3 style={heading}>Tasks API: comments &amp; attachments</h3>
            <p style={body}>
              Fetch comments, threaded replies, and attachment metadata including secure download URLs. A new <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.9em" }}>comment.created</span> webhook triggers workflows when clients respond.
            </p>
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
