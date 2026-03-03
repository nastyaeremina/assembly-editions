"use client";

import { SPLIT_SECTIONS } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useSplitActive } from "@/hooks/useSplitActive";
import { useSectionProgress } from "@/hooks/useSectionProgress";

/* ────────────────────────────────────────────────────────────
   CHAPTER BAR — Persistent top-level section navigation
   A minimal editorial "control strip" fixed to the top of
   the viewport. Shows 5 equal segments (01–05) with scrollspy
   highlight and a single continuous progress bar across the
   full nav width. Appears when the user enters the split region.
   ──────────────────────────────────────────────────────────── */

const sectionIds = SPLIT_SECTIONS.map((s) => s.id);
const TOTAL = SPLIT_SECTIONS.length; // 5 sections
const STEP = 100 / TOTAL; // 20% per section

/* Sections that use theme="light" */
const LIGHT_SECTIONS = new Set(["client-management", "payments"]);

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 4;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export function ChapterBar() {
  const activeSection = useScrollSpy(sectionIds, 150);
  const visible = useSplitActive();
  const progress = useSectionProgress(sectionIds);

  // Find index of active section to determine which are "past"
  const activeIdx = sectionIds.indexOf(activeSection);

  /* Does the currently-active section use the light (#FBFBF5) theme? */
  const isLight = LIGHT_SECTIONS.has(activeSection);

  /* ── Single continuous progress calculation ──
     Past sections contribute their full STEP (20%).
     The active section contributes its scroll progress × STEP.
     Future sections contribute 0. */
  const sectionProgress = progress[activeSection] ?? 0;
  const totalFill = Math.min(
    100,
    activeIdx * STEP + sectionProgress * STEP
  );

  return (
    <nav
      aria-label="Chapter navigation"
      className="hidden lg:grid"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        gridTemplateColumns: `repeat(${TOTAL}, 1fr)`,
        backgroundColor: isLight ? "rgba(251, 251, 245, 0.85)" : "rgba(10, 10, 10, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        opacity: visible ? 1 : 0,
        transition:
          "transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.4s ease, background-color 0.5s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {SPLIT_SECTIONS.map((section, i) => {
        const isActive = activeSection === section.id;
        const isPast = i < activeIdx;
        const isLast = i === TOTAL - 1;

        const textColor = isActive
          ? (isLight ? "rgba(0, 0, 0, 0.85)" : "rgba(255, 255, 255, 0.85)")
          : isPast
          ? (isLight ? "rgba(0, 0, 0, 0.55)" : "rgba(255, 255, 255, 0.55)")
          : (isLight ? "rgba(0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.3)");

        return (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              padding: "0.75rem 0.5rem 0.65rem",
              background: "transparent",
              border: "none",
              borderRight: isLast
                ? "none"
                : isLight
                ? "1px solid rgba(0, 0, 0, 0.04)"
                : "1px solid rgba(255, 255, 255, 0.04)",
              cursor: "pointer",
              transition: "color 0.3s ease, border-color 0.5s ease",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "0.65rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: textColor,
                transition: "color 0.3s ease",
                whiteSpace: "nowrap",
              }}
            >
              {section.number}&nbsp;&nbsp;{section.shortLabel}
            </span>
          </button>
        );
      })}

      {/* ── Single continuous progress bar ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          backgroundColor: isLight ? "rgba(0, 0, 0, 0.04)" : "rgba(255, 255, 255, 0.04)",
          overflow: "hidden",
          gridColumn: `1 / -1`,
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${totalFill}%`,
            backgroundColor: isLight ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)",
            transition: "width 0.15s linear, background-color 0.5s ease",
          }}
        />
      </div>
    </nav>
  );
}
