"use client";

import { ScreenshotDisplay, SectionReveal, CreateTaskDemo, TimeBasedAutomationsDemo } from "@/components/ui";

interface ProjectManagementSectionProps {
  inSplit?: boolean;
}

export function ProjectManagementSection({ inSplit = false }: ProjectManagementSectionProps) {
  return (
    <section
      id="project-management"
      className={`relative ${inSplit ? "py-24 sm:py-40" : "py-24 sm:py-40"}`}
      style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}
    >
      {/* Ambient gradient — top left */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "60%",
          height: "60%",
          background: "radial-gradient(ellipse at top left, rgba(255, 255, 255, 0.02), transparent 70%)",
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
              02
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
            Project management
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
            Associate tasks with clients and automate recurring workflows with time-based triggers.
          </p>
        </SectionReveal>

        {/* Tasks with Client Association */}
        <SectionReveal delay={0.1}>
          <div id="tasks-client-association" style={{ marginBottom: "6rem" }}>
            <CreateTaskDemo inSplit={inSplit} />
            <div style={{ marginTop: "2.5rem" }}>
              <h3 style={{ fontFamily: "'PP Mori', var(--font-sans)", fontWeight: 600, fontSize: "1.05rem", lineHeight: 1.3, letterSpacing: "-0.015em", color: "var(--swatch-1)", margin: "0 0 0.75rem 0" }}>
                Tasks with Client Association
              </h3>
              <p style={{ fontFamily: "'PP Mori', var(--font-sans)", fontWeight: 400, fontSize: "0.975rem", lineHeight: 1.6, color: "var(--swatch-3)", margin: 0, maxWidth: "34rem" }}>
                Link tasks to a client without making them visible. Share them anytime by turning on client access.
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* Time-Based Automations */}
        <SectionReveal delay={0.1}>
          <div id="time-based-automations">
            <TimeBasedAutomationsDemo inSplit={inSplit} />
            <div style={{ marginTop: "2.5rem" }}>
              <h3 style={{ fontFamily: "'PP Mori', var(--font-sans)", fontWeight: 600, fontSize: "1.05rem", lineHeight: 1.3, letterSpacing: "-0.015em", color: "var(--swatch-1)", margin: "0 0 0.75rem 0" }}>
                Time-Based Automations
              </h3>
              <p style={{ fontFamily: "'PP Mori', var(--font-sans)", fontWeight: 400, fontSize: "0.975rem", lineHeight: 1.6, color: "var(--swatch-3)", margin: 0, maxWidth: "34rem" }}>
                Set up tasks that reoccur monthly, quarterly, or on a custom schedule. Trigger forms and messages at regular intervals — all automated.
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
