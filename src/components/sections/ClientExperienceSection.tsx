"use client";

import { ScreenshotDisplay, SectionReveal, InteractiveAppLibrary } from "@/components/ui";

interface ClientExperienceSectionProps {
  inSplit?: boolean;
}

export function ClientExperienceSection({ inSplit = false }: ClientExperienceSectionProps) {
  return (
    <section
      id="client-experience"
      className={`relative ${inSplit ? "py-20 sm:py-32" : "py-20 sm:py-32"}`}
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
              fontSize: "1.15rem",
              lineHeight: 1.45,
              color: "var(--swatch-3)",
              maxWidth: "36rem",
              margin: "0 0 3.5rem 0",
            }}
          >
            A reimagined client portal with better organization, drag-and-drop folders, and personalized homepages that adapt to each client automatically.
          </p>
        </SectionReveal>

        {/* App Folders — Interactive Demo */}
        <SectionReveal delay={0.1}>
          <div style={{ marginBottom: "3.5rem" }}>
            <InteractiveAppLibrary inSplit={inSplit} />
            <div className="grid gap-6 lg:grid-cols-12" style={{ marginTop: "2rem" }}>
              <div className="lg:col-span-4">
                <h3 style={{ fontFamily: "'PP Mori', var(--font-sans)", fontWeight: 600, fontSize: "1.05rem", lineHeight: 1.3, letterSpacing: "-0.015em", color: "var(--swatch-1)", margin: 0 }}>
                  App Folders
                </h3>
              </div>
              <div className="lg:col-span-8">
                <p style={{ fontFamily: "'PP Mori', var(--font-sans)", fontWeight: 400, fontSize: "0.975rem", lineHeight: 1.55, color: "var(--swatch-3)", margin: 0 }}>
                  Drag and drop apps and embeds into folders. Group reports into an &quot;Analytics&quot; folder, or create a &quot;Helpful links&quot; folder with external resources for clients. Unpin apps from your internal dashboard without affecting the client view &mdash; your workspace stays focused on what you actually use.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Homepage Variants */}
        <SectionReveal delay={0.1}>
          <div>
            <ScreenshotDisplay src="/screenshots/home.jpg" alt="Homepage Variants" />
            <div className="grid gap-6 lg:grid-cols-12" style={{ marginTop: "2rem" }}>
              <div className="lg:col-span-4">
                <h3 style={{ fontFamily: "'PP Mori', var(--font-sans)", fontWeight: 600, fontSize: "1.05rem", lineHeight: 1.3, letterSpacing: "-0.015em", color: "var(--swatch-1)", margin: 0 }}>
                  Homepage Variants
                </h3>
              </div>
              <div className="lg:col-span-8">
                <p style={{ fontFamily: "'PP Mori', var(--font-sans)", fontWeight: 400, fontSize: "0.975rem", lineHeight: 1.55, color: "var(--swatch-3)", margin: 0 }}>
                  Create up to five homepage variants and automatically show the right one to each client based on custom field tags. Running a tiered service model? Premium clients see dedicated resources while basic clients see standard onboarding. The Home App itself has been refreshed with updated banners, improved responsive loading, and a cleaner layout.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
