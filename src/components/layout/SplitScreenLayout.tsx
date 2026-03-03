"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { StorySpineNav } from "./StorySpineNav";

/* ────────────────────────────────────────────────────────────
   SPLIT SCREEN LAYOUT

   Desktop (≥1024px): Two-column CSS Grid with sticky left rail
   (StorySpineNav) and content stage on the right.

   Mobile (<1024px): Full-width passthrough — no grid, no rail.
   ──────────────────────────────────────────────────────────── */

interface SplitScreenLayoutProps {
  children: React.ReactNode;
}

export function SplitScreenLayout({ children }: SplitScreenLayoutProps) {
  const isDesktop = useMediaQuery("(min-width: 1024px)", true);

  if (!isDesktop) {
    return (
      <div id="split-content">
        {children}
      </div>
    );
  }

  return (
    <div
      id="split-content"
      style={{
        display: "grid",
        gridTemplateColumns: "220px 1fr",
      }}
    >
      <StorySpineNav />
      <div style={{ minWidth: 0 }}>{children}</div>
    </div>
  );
}
