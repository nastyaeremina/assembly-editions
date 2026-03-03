"use client";

import { useEffect, useState, useRef } from "react";
import { SPLIT_SECTIONS } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useSplitActive } from "@/hooks/useSplitActive";
import { useSectionProgress } from "@/hooks/useSectionProgress";
import { motion, AnimatePresence } from "framer-motion";

/* ────────────────────────────────────────────────────────────
   EDITION INTRO — Fixed right sidebar (desktop)
   Only visible while the split-content area is in viewport.
   Now with expandable subsections that track scroll position.
   ──────────────────────────────────────────────────────────── */

const sectionIds = SPLIT_SECTIONS.map((s) => s.id);

/* Collect ALL subsection IDs for the secondary scroll spy */
const allSubsectionIds = SPLIT_SECTIONS.flatMap((s) =>
  s.subsections.map((sub) => sub.id)
);

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 40;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

/* ── Subsection list with vertical bracket connector ── */
function SubsectionList({
  subsections,
  activeSubsection,
}: {
  subsections: { id: string; label: string }[];
  activeSubsection: string;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [subsections]);

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
      <div ref={contentRef} style={{ position: "relative", paddingBottom: "0.5rem" }}>
        {subsections.map((sub, idx) => {
          const isActive = activeSubsection === sub.id;
          const isLast = idx === subsections.length - 1;
          const c = "rgba(255, 255, 255, 0.15)";
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
                paddingTop: "0.35rem",
                paddingBottom: "0.35rem",
              }}
            >
              {isLast ? (
                /* Last item: vertical from top → center, then curves right */
                <div
                  style={{
                    position: "absolute",
                    left: "0.7rem",
                    top: 0,
                    width: "0.5rem",
                    height: "calc(50% + 1px)",
                    borderLeft: `1px solid ${c}`,
                    borderBottom: `1px solid ${c}`,
                    borderBottomLeftRadius: "4px",
                    boxSizing: "border-box",
                  }}
                />
              ) : (
                <>
                  {/* Vertical line through full row height */}
                  <div
                    style={{
                      position: "absolute",
                      left: "0.7rem",
                      top: 0,
                      bottom: 0,
                      width: "1px",
                      backgroundColor: c,
                    }}
                  />
                  {/* Horizontal tick at center */}
                  <div
                    style={{
                      position: "absolute",
                      left: "calc(0.7rem + 1px)",
                      top: "50%",
                      width: "calc(0.5rem - 1px)",
                      height: "1px",
                      backgroundColor: c,
                    }}
                  />
                </>
              )}
              <span
                style={{
                  fontFamily: "'PP Mori', var(--font-sans)",
                  fontSize: "0.85rem",
                  letterSpacing: "-0.01em",
                  fontWeight: 400,
                  color: isActive
                    ? "rgba(255, 255, 255, 0.7)"
                    : "rgba(255, 255, 255, 0.35)",
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

/* ── Desktop: Floating overlay nav (right edge) ── */
export function EditionIntro() {
  const activeSection = useScrollSpy(sectionIds, 140);
  const activeSubsection = useScrollSpy(allSubsectionIds, 200);
  const visible = useSplitActive();

  return (
    <aside
      id="edition-sidebar"
      className="hidden lg:block fixed z-40"
      style={{
        top: "50%",
        right: "2rem",
        transform: visible
          ? "translateY(-50%) translateX(0)"
          : "translateY(-50%) translateX(calc(100% + 2rem))",
        pointerEvents: visible ? "auto" : "none",
        opacity: visible ? 1 : 0,
        transition:
          "transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.4s ease",
        width: "220px",
        background: "rgba(16, 16, 16, 0.75)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "12px",
        padding: "1rem 1.25rem",
      }}
      aria-label="Assembly Editions overview"
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
            const isLastSection = i === SPLIT_SECTIONS.length - 1;
            return (
              <li
                key={section.id}
                style={{
                  borderBottom: isLastSection
                    ? "none"
                    : "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <button
                  onClick={() => scrollToSection(section.id)}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "0.5rem",
                    width: "100%",
                    padding: "0.6rem 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "color 0.2s",
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "0.8rem",
                    letterSpacing: "-0.04em",
                    color: isActive
                      ? "rgba(255, 255, 255, 0.85)"
                      : "rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <span style={{ minWidth: "1.25rem" }}>
                    {section.number}
                  </span>
                  <span
                    style={{
                      fontFamily: "'PP Mori', var(--font-sans)",
                      fontWeight: isActive ? 500 : 400,
                      fontSize: "0.8rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {section.label}
                  </span>
                </button>

                {/* Expandable subsections */}
                <AnimatePresence>
                  {isActive && section.subsections.length > 0 && (
                    <SubsectionList
                      subsections={section.subsections}
                      activeSubsection={activeSubsection}
                    />
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

/* ── Mobile: Fixed bottom nav bar — visible while in scrollytelling sections ── */
export function EditionIntroMobile() {
  const activeSection = useScrollSpy(sectionIds, 140);
  const visible = useSplitActive();
  const progress = useSectionProgress(sectionIds);

  const activeIdx = sectionIds.indexOf(activeSection);

  return (
    <nav
      aria-label="Section navigation"
      className="grid lg:hidden"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        gridTemplateColumns: `repeat(${SPLIT_SECTIONS.length}, 1fr)`,
        backgroundColor: "rgba(10, 10, 10, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        paddingTop: "env(safe-area-inset-top, 0px)",
        transform: visible ? "translateY(0)" : "translateY(-100%)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.4s ease",
        pointerEvents: visible ? "auto" : "none",
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

        return (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.35rem",
              padding: "0.6rem 0.25rem",
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
                fontSize: "0.55rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: isActive
                  ? "rgba(255, 255, 255, 0.85)"
                  : isPast
                  ? "rgba(255, 255, 255, 0.55)"
                  : "rgba(255, 255, 255, 0.3)",
                transition: "color 0.3s ease",
                whiteSpace: "nowrap",
              }}
            >
              {section.number}<span className="hidden min-[480px]:inline">&nbsp;&nbsp;{section.shortLabel}</span>
            </span>

            {/* Progress fill bar at bottom edge */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                height: "2px",
                width: `${fillPercent}%`,
                backgroundColor:
                  isActive
                    ? "rgba(255, 255, 255, 0.6)"
                    : isPast
                    ? "rgba(255, 255, 255, 0.25)"
                    : "transparent",
                transition: "width 0.15s linear, background-color 0.3s ease",
              }}
            />
          </button>
        );
      })}
    </nav>
  );
}
