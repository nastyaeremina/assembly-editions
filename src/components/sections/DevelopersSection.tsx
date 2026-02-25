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
  margin: 0,
};

const body: React.CSSProperties = {
  fontFamily: "'PP Mori', var(--font-sans)",
  fontWeight: 400,
  fontSize: "0.975rem",
  lineHeight: 1.55,
  color: "var(--swatch-3)",
  margin: 0,
};


export function DevelopersSection({ inSplit = false }: DevelopersSectionProps) {
  return (
    <section
      id="developers"
      className={`relative ${inSplit ? "py-20 sm:py-32" : "py-20 sm:py-32"}`}
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
              margin: "0 0 3.5rem 0",
            }}
          >
            For developers
          </h2>
        </SectionReveal>

        {/* ── New Custom App Base ── */}
        <SectionReveal delay={0.1}>
          <div id="custom-app-base" style={{ marginBottom: "3.5rem" }}>
            <AppBridgeCodeDemo inSplit={inSplit} />
            <div className="grid gap-6 lg:grid-cols-12" style={{ marginTop: "2rem" }}>
              <div className="lg:col-span-4">
                <h3 style={heading}>New custom app base</h3>
              </div>
              <div className="lg:col-span-8">
                <p style={body}>
                  We&apos;ve rebuilt the foundation for Custom Apps from the ground up. The new base includes live examples for server-side rendering, client-side API requests, and AppBridge configuration — breadcrumbs, action menus, header controls — all with real feedback so you can see exactly how things work. There&apos;s also a preview of our design system pointing to the latest Storybook. If you&apos;re building on Assembly, this is your new starting point.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>


        {/* ── Secure App Sessions ── */}
        <SectionReveal delay={0.1}>
          <div id="secure-app-sessions" style={{ marginBottom: "3.5rem" }}>
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h3 style={heading}>Secure app sessions</h3>
              </div>
              <div className="lg:col-span-8">
                <p style={body}>
                  App session tokens now expire after 5 minutes instead of lasting indefinitely. A new <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.9em" }}>@assembly-js/app-bridge</span> package handles token refresh automatically in the background, so users won&apos;t notice anything — but shared URLs no longer grant permanent access to app data. If you&apos;re maintaining a Custom App, check our migration guide for the updated SDK packages.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>


        {/* ── Tasks API ── */}
        <SectionReveal delay={0.1}>
          <div id="tasks-api" style={{ marginBottom: "3.5rem" }}>
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h3 style={heading}>Tasks API: comments &amp; attachments</h3>
              </div>
              <div className="lg:col-span-8">
                <p style={body}>
                  The Tasks API now exposes comments and attachments. Fetch all comments on a task, access threaded replies via <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.9em" }}>parentCommentId</span>, and pull attachment metadata including secure download URLs. There&apos;s also a new <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.9em" }}>comment.created</span> webhook so you can trigger workflows when clients respond. If you&apos;re building integrations that track client activity or sync task data externally, this unlocks a lot.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>

      </div>
    </section>
  );
}
