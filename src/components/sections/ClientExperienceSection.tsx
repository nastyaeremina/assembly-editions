"use client";

import { SectionReveal, InteractiveAppLibrary, ThemedClientHome } from "@/components/ui";

interface ClientExperienceSectionProps {
  inSplit?: boolean;
}

export function ClientExperienceSection({ inSplit = false }: ClientExperienceSectionProps) {
  return (
    <section
      id="client-experience"
      className={`relative ${inSplit ? "py-24 sm:py-40" : "py-24 sm:py-40"}`}
    >

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
              01
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
              margin: "0 0 1.25rem 0",
            }}
          >
            Create remarkable experiences for clients
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
            A reimagined client portal with better organization, drag-and-drop folders, and personalized homepages.
          </p>
        </SectionReveal>

        {/* App Folders — Interactive Demo */}
        <SectionReveal delay={0.1}>
          <div id="app-folders" style={{ marginBottom: "6rem" }}>
            <InteractiveAppLibrary inSplit={inSplit} />
            <div style={{ marginTop: "2.5rem" }}>
              <h3 style={{ fontFamily: "'PP Mori', var(--font-sans)", fontWeight: 600, fontSize: "1.05rem", lineHeight: 1.3, letterSpacing: "-0.015em", color: "var(--swatch-1)", margin: "0 0 0.75rem 0" }}>
                App Folders
              </h3>
              <p style={{ fontFamily: "'PP Mori', var(--font-sans)", fontWeight: 400, fontSize: "0.975rem", lineHeight: 1.6, color: "var(--swatch-3)", margin: 0, maxWidth: "34rem" }}>
                Drag and drop apps and embeds into folders. Unpin apps from your internal dashboard without affecting the client view.
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* Homepage Variants — Interactive Themed Preview */}
        <SectionReveal delay={0.1}>
          <div id="client-segments">
            <ThemedClientHome inSplit={inSplit} />
            <div style={{ marginTop: "2.5rem" }}>
              <h3 style={{ fontFamily: "'PP Mori', var(--font-sans)", fontWeight: 600, fontSize: "1.05rem", lineHeight: 1.3, letterSpacing: "-0.015em", color: "var(--swatch-1)", margin: "0 0 0.75rem 0" }}>
                Client Segments
              </h3>
              <p style={{ fontFamily: "'PP Mori', var(--font-sans)", fontWeight: 400, fontSize: "0.975rem", lineHeight: 1.6, color: "var(--swatch-3)", margin: 0, maxWidth: "34rem" }}>
                Create homepage variants and route clients automatically based on segment tags. Premium clients see dedicated resources, new clients see onboarding.
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
