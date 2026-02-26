"use client";

import { SPLIT_SECTIONS } from "@/lib/constants";

/* ────────────────────────────────────────────────────────────
   EDITORIAL SPLIT — Shared layout primitives
   Used by every section for the editorial rail + content stage
   ──────────────────────────────────────────────────────────── */

/* ── Inline monospace navigation ── */
const SUB_LETTERS = "ABCDEFGHIJ";

export function InlineNav({
  activeSectionId,
  activeStepIndex = -1,
}: {
  activeSectionId: string;
  activeStepIndex?: number; // -1 = hero (no subsection highlighted)
}) {
  return (
    <div
      style={{
        fontFamily: "var(--font-mono, monospace)",
        fontSize: "0.65rem",
        lineHeight: 1.9,
        letterSpacing: "0.02em",
        color: "rgba(255, 255, 255, 0.3)",
        textAlign: "right",
        whiteSpace: "nowrap",
      }}
    >
      {SPLIT_SECTIONS.map((section) => {
        const isActive = section.id === activeSectionId;
        return (
          <div key={section.id}>
            <div style={{ color: isActive ? "rgba(255,255,255,0.55)" : undefined }}>
              {section.number} {section.shortLabel.toUpperCase()}
            </div>
            {isActive &&
              section.subsections.map((sub, i) => (
                <div
                  key={sub.id}
                  style={{
                    color: i === activeStepIndex ? "rgba(255,255,255,0.7)" : undefined,
                    transition: "color 0.3s ease",
                  }}
                >
                  {"    "}{SUB_LETTERS[i]}.
                </div>
              ))}
          </div>
        );
      })}
    </div>
  );
}

/* ── Editorial rail — left black column ── */
export function EditorialRail({
  title,
  description,
  sectionNumber,
  subsectionSuffix,
}: {
  title: string;
  description: string;
  sectionNumber: string;
  subsectionSuffix?: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "2.5rem 2rem",
        minHeight: "100%",
      }}
    >
      {/* Top: label + title + description */}
      <div>
        <p
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: "0.7rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.4)",
            margin: "0 0 1.5rem 0",
          }}
        >
          SECTION {sectionNumber}
        </p>
        <h2
          key={title}
          style={{
            fontFamily: "'PP Mori', var(--font-sans)",
            fontWeight: 600,
            fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.025em",
            color: "#fff",
            margin: "0 0 1.25rem 0",
            transition: "opacity 0.4s ease",
          }}
        >
          {title}
        </h2>
        <p
          key={description}
          style={{
            fontFamily: "'PP Mori', var(--font-sans)",
            fontWeight: 400,
            fontSize: "0.85rem",
            lineHeight: 1.65,
            color: "rgba(255, 255, 255, 0.45)",
            margin: 0,
            maxWidth: "22rem",
            transition: "opacity 0.4s ease",
          }}
        >
          {description}
        </p>
      </div>

      {/* Bottom: section number */}
      <div
        style={{
          fontFamily: "'PP Mori', var(--font-sans)",
          fontWeight: 300,
          fontSize: "clamp(2rem, 3.5vw, 3rem)",
          letterSpacing: "-0.03em",
          color: "rgba(255, 255, 255, 0.85)",
          marginTop: "3rem",
        }}
      >
        {sectionNumber}
        <span
          key={subsectionSuffix || "hero"}
          style={{
            display: "inline-block",
            transition: "opacity 0.35s ease",
            opacity: subsectionSuffix ? 1 : 0.4,
          }}
        >
          {subsectionSuffix ? `-${subsectionSuffix}` : ""}
        </span>
      </div>
    </div>
  );
}

/* ── Reusable editorial row wrapper ── */
export function EditorialRow({
  id,
  sectionId,
  title,
  description,
  sectionNumber,
  subsectionSuffix,
  children,
  isHero,
  heroImage,
}: {
  id?: string;
  sectionId: string;
  title: string;
  description: string;
  sectionNumber: string;
  subsectionSuffix?: string;
  children?: React.ReactNode;
  isHero?: boolean;
  heroImage?: string;
}) {
  return (
    <div
      id={id}
      className="grid grid-cols-1 lg:grid-cols-[minmax(300px,30%)_1fr]"
      style={{ minHeight: "100vh" }}
    >
      {/* Left rail */}
      {subsectionSuffix ? (
        <div className="lg:sticky lg:top-0 lg:self-start" style={{ height: "fit-content" }}>
          <EditorialRail
            title={title}
            description={description}
            sectionNumber={sectionNumber}
            subsectionSuffix={subsectionSuffix}
          />
        </div>
      ) : (
        <EditorialRail
          title={title}
          description={description}
          sectionNumber={sectionNumber}
        />
      )}

      {/* Right stage */}
      {isHero && heroImage ? (
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 30%",
              display: "block",
            }}
          />
          <div
            className="hidden lg:block absolute"
            style={{ top: "50%", right: "2.5rem", transform: "translateY(-50%)", zIndex: 2 }}
          >
            <InlineNav activeSectionId={sectionId} />
          </div>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "#161616",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "3rem 2rem",
            position: "relative",
          }}
        >
          {children}
          <div
            className="hidden lg:block absolute"
            style={{ top: "50%", right: "2.5rem", transform: "translateY(-50%)", zIndex: 2 }}
          >
            <InlineNav activeSectionId={sectionId} />
          </div>
        </div>
      )}
    </div>
  );
}
