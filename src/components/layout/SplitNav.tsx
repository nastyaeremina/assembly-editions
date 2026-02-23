"use client";

import { cn } from "@/lib/utils";
import { SPLIT_SECTIONS, BRAND } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";
const sectionIds = SPLIT_SECTIONS.map((s) => s.id);

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    const offset = 40;
    const y = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

/** Desktop: fixed left panel card — hidden below lg */
export function SplitLeftPanel() {
  const activeSection = useScrollSpy(sectionIds, 140);

  return (
    <aside
      id="split-left-panel"
      className="hidden lg:flex fixed top-12 left-6 bottom-6 z-40 w-[calc(45vw-1.5rem)] max-w-[640px] flex-col justify-end p-8 xl:p-10"
      style={{ display: "none" }}
      aria-label="Assembly Editions overview"
    >
      {/* Hero content — pushed to bottom via flex justify-end */}
      <div className="mb-8">
        <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground mb-6">
          Inside Assembly &nbsp; June 23 2025
        </p>
        <h1 className="text-3xl xl:text-4xl font-semibold tracking-tight text-heading leading-tight">
          {BRAND.name} {BRAND.version}
        </h1>
        <p className="mt-3 text-sm text-muted leading-relaxed max-w-md">
          Link tasks to a client without making them visible. Tasks appear on the client profile for your team only, and you can share them anytime by turning on client access.
        </p>
      </div>

      {/* Table of contents nav */}
      <nav aria-label="Section navigation">
        <ul>
          {SPLIT_SECTIONS.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={cn(
                    "flex w-full items-start gap-4 border-t border-border py-3 text-left transition-colors",
                    isActive
                      ? "text-zinc-100"
                      : "text-zinc-500 hover:text-zinc-300"
                  )}
                >
                  <span
                    className={cn(
                      "font-mono text-xs tabular-nums mt-0.5 shrink-0 transition-colors",
                      isActive ? "text-zinc-100" : "text-zinc-600"
                    )}
                  >
                    {section.number} –
                  </span>
                  <span className="text-sm leading-snug">{section.title}</span>
                </button>
              </li>
            );
          })}
          {/* Bottom border */}
          <li aria-hidden="true" className="border-t border-border" />
        </ul>
      </nav>
    </aside>
  );
}

/** Mobile: horizontal sticky bar — visible below lg */
export function SplitNavMobile() {
  const activeSection = useScrollSpy(sectionIds, 140);

  return (
    <nav
      className="lg:hidden sticky top-10 z-40 border-b border-border bg-overlay/90 backdrop-blur-md"
      aria-label="Section navigation"
    >
      <div className="px-4 sm:px-6">
        <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
          {SPLIT_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                activeSection === section.id
                  ? "bg-nav-active text-nav-active-text"
                  : "text-nav-text hover:bg-ghost-hover/50 hover:text-nav-hover-text"
              )}
            >
              {section.shortLabel}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

/** Dynamic section number indicator for the right panel */
export function SectionIndicator() {
  const activeSection = useScrollSpy(sectionIds, 140);
  const activeNumber = SPLIT_SECTIONS.find((s) => s.id === activeSection)?.number || "01";

  return (
    <div
      id="split-section-indicator"
      className="hidden lg:block fixed bottom-8 right-8 font-mono text-8xl xl:text-9xl text-zinc-800/60 pointer-events-none select-none z-30"
      style={{ display: "none" }}
      aria-hidden="true"
    >
      {activeNumber}
    </div>
  );
}
