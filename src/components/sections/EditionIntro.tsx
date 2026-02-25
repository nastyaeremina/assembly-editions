"use client";

import { useEffect, useState, useRef } from "react";
import { SPLIT_SECTIONS } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useSplitActive } from "@/hooks/useSplitActive";
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

function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    function update() {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");
      setTime(`${h}:${m}:${s}`);
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return <span>{time}</span>;
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
        {/* Vertical connector line */}
        <div
          style={{
            position: "absolute",
            left: "0.7rem",
            top: "0.2rem",
            bottom: "calc(0.5rem + 0.65rem)",
            width: "1px",
            backgroundColor: "rgba(255, 255, 255, 0.12)",
          }}
        />
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
                paddingTop: "0.35rem",
                paddingBottom: "0.35rem",
                transition: "color 0.2s ease",
              }}
            >
              {/* Horizontal tick from vertical line */}
              <div
                style={{
                  position: "absolute",
                  left: "0.7rem",
                  top: "50%",
                  width: "0.5rem",
                  height: "1px",
                  backgroundColor: isActive
                    ? "rgba(255, 255, 255, 0.3)"
                    : "rgba(255, 255, 255, 0.12)",
                  transition: "background-color 0.2s ease",
                }}
              />
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

/* ── Desktop: Fixed right sidebar ── */
export function EditionIntro() {
  const activeSection = useScrollSpy(sectionIds, 140);
  const activeSubsection = useScrollSpy(allSubsectionIds, 200);
  const visible = useSplitActive();

  return (
    <aside
      id="edition-sidebar"
      className="hidden lg:flex fixed top-0 right-0 bottom-0 z-40 flex-col justify-between"
      style={{
        width: "25%",
        maxWidth: "400px",
        padding: "5rem 1.5rem 1.5rem 1.5rem",
        backgroundColor: "#101010",
        transform: visible ? "translateX(0)" : "translateX(100%)",
        pointerEvents: visible ? "auto" : "none",
        transition: "transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)",
      }}
      aria-label="Assembly Editions overview"
    >
      {/* ── Section nav ── */}
      <div>
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
              return (
                <li
                  key={section.id}
                  style={{
                    borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                  }}
                >
                  <button
                    onClick={() => scrollToSection(section.id)}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "0.75rem",
                      width: "100%",
                      padding: "0.85rem 0",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "color 0.2s",
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: "0.925rem",
                      letterSpacing: "-0.04em",
                      color: isActive
                        ? "rgba(255, 255, 255, 0.85)"
                        : "rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    <span style={{ minWidth: "1.5rem" }}>
                      {section.number}
                    </span>
                    <span
                      style={{
                        fontFamily: "'PP Mori', var(--font-sans)",
                        fontWeight: isActive ? 500 : 400,
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
      </div>

      {/* ── Bottom: Live clock ── */}
      <div
        style={{
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "0.9rem",
          letterSpacing: "-0.05em",
          color: "rgba(255, 255, 255, 0.3)",
        }}
      >
        <LiveClock />
      </div>
    </aside>
  );
}

/* ── Mobile: Collapsible intro + horizontal nav ── */
export function EditionIntroMobile() {
  const activeSection = useScrollSpy(sectionIds, 140);

  return (
    <div className="lg:hidden">
      {/* Sticky horizontal nav */}
      <nav
        className="sticky top-10 z-40"
        style={{
          backgroundColor: "rgba(16, 16, 16, 0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
        aria-label="Section navigation"
      >
        <div
          className="flex items-center gap-1 overflow-x-auto py-3 px-4 scrollbar-hide"
        >
          {SPLIT_SECTIONS.map((section, i) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                style={{
                  whiteSpace: "nowrap",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "0.5rem",
                  background: isActive ? "rgba(255,255,255,0.1)" : "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: "0.85rem",
                  letterSpacing: "-0.03em",
                  color: isActive
                    ? "rgba(255, 255, 255, 0.85)"
                    : "rgba(255, 255, 255, 0.4)",
                  transition: "all 0.2s",
                }}
              >
                {section.number} {section.shortLabel}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
