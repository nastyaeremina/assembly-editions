"use client";

import { SPLIT_SECTIONS } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useSplitActive } from "@/hooks/useSplitActive";

/* ────────────────────────────────────────────────────────────
   CHAPTER BAR — Persistent top-level section navigation
   A minimal editorial "control strip" fixed to the top of
   the viewport. Shows 5 equal segments (01–05) with scrollspy
   highlight. Appears when the user enters the split-content
   region and replaces the standard Header.
   ──────────────────────────────────────────────────────────── */

const sectionIds = SPLIT_SECTIONS.map((s) => s.id);

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

  return (
    <nav
      aria-label="Chapter navigation"
      className="hidden lg:grid"
      style={{
        position: "fixed",
        top: 0,
        /* Align with the right content stage — starts after the 30% left rail */
        left: "max(300px, 30%)",
        right: 0,
        zIndex: 50,
        gridTemplateColumns: `repeat(${SPLIT_SECTIONS.length}, 1fr)`,
        backgroundColor: "rgba(10, 10, 10, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        opacity: visible ? 1 : 0,
        transition:
          "transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.4s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {SPLIT_SECTIONS.map((section, i) => {
        const isActive = activeSection === section.id;
        const isLast = i === SPLIT_SECTIONS.length - 1;

        return (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              padding: "0.7rem 0.5rem",
              background: isActive
                ? "rgba(255, 255, 255, 0.04)"
                : "transparent",
              border: "none",
              borderRight: isLast
                ? "none"
                : "1px solid rgba(255, 255, 255, 0.08)",
              cursor: "pointer",
              transition: "background 0.3s ease, color 0.3s ease",
              position: "relative",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "0.65rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: isActive
                  ? "rgba(255, 255, 255, 0.85)"
                  : "rgba(255, 255, 255, 0.3)",
                transition: "color 0.3s ease",
                whiteSpace: "nowrap",
              }}
            >
              {section.number}&nbsp;&nbsp;{section.shortLabel}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
