"use client";

import { useEffect, useState } from "react";
import { BRAND, SPLIT_SECTIONS } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useSplitActive } from "@/hooks/useSplitActive";

/* ────────────────────────────────────────────────────────────
   EDITION INTRO — Fixed right sidebar (desktop)
   Only visible while the split-content area is in viewport.
   ──────────────────────────────────────────────────────────── */

const sectionIds = SPLIT_SECTIONS.map((s) => s.id);
const NUMBERS = SPLIT_SECTIONS.map((s) => s.number);

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

/* ── Desktop: Fixed right sidebar ── */
export function EditionIntro() {
  const activeSection = useScrollSpy(sectionIds, 140);
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
      {/* ── Top: Title + Description ── */}
      <div>
        <h2
          style={{
            fontFamily: "'PP Mori', var(--font-sans)",
            fontWeight: 600,
            fontSize: "1.3rem",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: "var(--swatch-1)",
            margin: "0 0 1.2rem 0",
          }}
        >
          {BRAND.name} {BRAND.version}
        </h2>

        <p
          style={{
            fontFamily: "'PP Mori', var(--font-sans)",
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 1.5,
            color: "var(--swatch-4)",
            margin: "0 0 2rem 0",
          }}
        >
          Today we&apos;re launching {BRAND.name} {BRAND.version}. {BRAND.description} Here&apos;s what&apos;s new.
        </p>

        {/* ── Section nav ── */}
        <nav aria-label="Section navigation">
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              borderTop: "1px solid rgba(255, 255, 255, 0.12)",
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
                    <span style={{ minWidth: "1.5rem" }}>{NUMBERS[i]}</span>
                    <span
                      style={{
                        fontFamily: "'PP Mori', var(--font-sans)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {section.label}
                    </span>
                  </button>
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
      {/* Intro block */}
      <div
        style={{
          backgroundColor: "#101010",
          padding: "2.5rem 1.2rem 1.5rem",
        }}
      >
        <h2
          style={{
            fontFamily: "'PP Mori', var(--font-sans)",
            fontWeight: 600,
            fontSize: "1.3rem",
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: "var(--swatch-1)",
            margin: "0 0 0.8rem 0",
          }}
        >
          {BRAND.name} {BRAND.version}
        </h2>
        <p
          style={{
            fontFamily: "'PP Mori', var(--font-sans)",
            fontWeight: 400,
            fontSize: "0.95rem",
            lineHeight: 1.4,
            color: "var(--swatch-4)",
            margin: 0,
          }}
        >
          Today we&apos;re launching {BRAND.name} {BRAND.version}. {BRAND.description}
        </p>
      </div>

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
                {NUMBERS[i]} {section.shortLabel}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
