"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SPLIT_SECTIONS } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useSplitActive } from "@/hooks/useSplitActive";
import { useSectionProgress } from "@/hooks/useSectionProgress";

/* ────────────────────────────────────────────────────────────
   STORY SPINE NAV — Editorial left rail
   Sticky vertical navigation for desktop. Shows numbered
   sections (01–05) with active state accent line, expandable
   subsections, and per-section progress bars.

   Sections with light theme (#FBFBF5 bg) get dark text colors.
   ──────────────────────────────────────────────────────────── */

const sectionIds = SPLIT_SECTIONS.map((s) => s.id);
const allSubsectionIds = SPLIT_SECTIONS.flatMap((s) =>
  s.subsections.map((sub) => sub.id)
);

/* Sections that use theme="light" */
const LIGHT_SECTIONS = new Set(["client-management", "payments"]);

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 4;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

/* ── Subsection list with vertical bracket connector ── */
function SubsectionList({
  subsections,
  activeSubsection,
  light = false,
}: {
  subsections: { id: string; label: string }[];
  activeSubsection: string;
  light?: boolean;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [subsections]);

  const bracketColor = light ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height, opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{
        height: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
        opacity: { duration: 0.2, ease: "easeOut" },
      }}
      style={{ overflow: "hidden" }}
    >
      <div ref={contentRef} style={{ position: "relative", paddingBottom: "0.4rem" }}>
        {subsections.map((sub, idx) => {
          const isActive = activeSubsection === sub.id;
          const isLast = idx === subsections.length - 1;
          return (
            <button
              key={sub.id}
              onClick={() => scrollToSection(sub.id)}
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                position: "relative",
                paddingLeft: "1.65rem",
                paddingTop: "0.3rem",
                paddingBottom: "0.3rem",
              }}
            >
              {isLast ? (
                <div
                  style={{
                    position: "absolute",
                    left: "0.7rem",
                    top: 0,
                    width: "0.5rem",
                    height: "calc(50% + 1px)",
                    borderLeft: `1px solid ${bracketColor}`,
                    borderBottom: `1px solid ${bracketColor}`,
                    borderBottomLeftRadius: "4px",
                    boxSizing: "border-box",
                  }}
                />
              ) : (
                <>
                  <div
                    style={{
                      position: "absolute",
                      left: "0.7rem",
                      top: 0,
                      bottom: 0,
                      width: "1px",
                      backgroundColor: bracketColor,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: "calc(0.7rem + 1px)",
                      top: "50%",
                      width: "calc(0.5rem - 1px)",
                      height: "1px",
                      backgroundColor: bracketColor,
                    }}
                  />
                </>
              )}
              <span
                style={{
                  fontFamily: "'PP Mori', var(--font-sans)",
                  fontSize: "0.75rem",
                  letterSpacing: "-0.01em",
                  fontWeight: 400,
                  color: isActive
                    ? (light ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.7)")
                    : (light ? "rgba(0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.3)"),
                  transition: "color 0.2s ease",
                }}
              >
                {sub.label}
              </span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ── Main exported component ── */
export function StorySpineNav() {
  const activeSection = useScrollSpy(sectionIds, 150);
  const activeSubsection = useScrollSpy(allSubsectionIds, 200);
  const visible = useSplitActive();
  const progress = useSectionProgress(sectionIds);

  const activeIdx = sectionIds.indexOf(activeSection);

  /* Does the currently-active section use the light (#FBFBF5) theme? */
  const isLight = LIGHT_SECTIONS.has(activeSection);

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 2rem 0 2.5rem",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-8px)",
        transition:
          "opacity 0.3s ease-out, transform 0.3s ease-out, background-color 0.5s ease",
        pointerEvents: visible ? "auto" : "none",
        backgroundColor: isLight ? "#FBFBF5" : "transparent",
      }}
    >
      <nav aria-label="Section navigation">
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {SPLIT_SECTIONS.map((section, i) => {
            const isActive = activeSection === section.id;
            const isPast = i < activeIdx;
            const isLast = i === SPLIT_SECTIONS.length - 1;
            const fillPercent = isPast
              ? 100
              : isActive
              ? Math.round((progress[section.id] ?? 0) * 100)
              : 0;

            /* Color palette — flips between dark-on-light and light-on-dark */
            const numberColor = isActive
              ? (isLight ? "rgba(0, 0, 0, 0.85)" : "rgba(255, 255, 255, 0.85)")
              : isPast
              ? (isLight ? "rgba(0, 0, 0, 0.45)" : "rgba(255, 255, 255, 0.45)")
              : (isLight ? "rgba(0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.3)");

            const labelColor = isActive
              ? (isLight ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.7)")
              : isPast
              ? (isLight ? "rgba(0, 0, 0, 0.35)" : "rgba(255, 255, 255, 0.35)")
              : (isLight ? "rgba(0, 0, 0, 0.32)" : "rgba(255, 255, 255, 0.32)");

            const progressTrackColor = isLight ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.06)";
            const progressFillColor = isActive
              ? (isLight ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.4)")
              : isPast
              ? (isLight ? "rgba(0, 0, 0, 0.15)" : "rgba(255, 255, 255, 0.15)")
              : "transparent";

            return (
              <li
                key={section.id}
                style={{
                  position: "relative",
                }}
              >
                <button
                  onClick={() => scrollToSection(section.id)}
                  aria-current={isActive ? "true" : undefined}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.15rem",
                    width: "100%",
                    padding: "0.7rem 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "color 0.3s ease",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.06em",
                      color: numberColor,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {section.number}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: labelColor,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {section.categoryLabel}
                  </span>

                  {/* Subtle progress bar */}
                  <div
                    aria-hidden="true"
                    style={{
                      marginTop: "0.25rem",
                      height: "1px",
                      width: "100%",
                      backgroundColor: progressTrackColor,
                      borderRadius: "1px",
                      overflow: "hidden",
                      transition: "background-color 0.3s ease",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${fillPercent}%`,
                        backgroundColor: progressFillColor,
                        transition: "width 0.15s linear, background-color 0.3s ease",
                      }}
                    />
                  </div>
                </button>

              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
