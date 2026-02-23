"use client";

import { cn } from "@/lib/utils";
import { SECTIONS } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";

interface StickyNavProps {
  className?: string;
}

export function StickyNav({ className }: StickyNavProps) {
  const sectionIds = SECTIONS.map((s) => s.id);
  const activeSection = useScrollSpy(sectionIds, 150);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Account for sticky nav height
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "sticky top-10 z-40 border-b border-border bg-overlay/90 backdrop-blur-md",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
          {SECTIONS.map((section) => (
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
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
