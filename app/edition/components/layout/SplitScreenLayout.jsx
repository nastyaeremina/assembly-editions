"use client";

import { useMediaQuery } from "../../hooks/useMediaQuery";
import { StorySpineNav } from "./StorySpineNav";

export function SplitScreenLayout({ children }) {
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
        gridTemplateColumns: "260px 1fr",
      }}
    >
      <StorySpineNav />
      <div style={{ minWidth: 0 }}>{children}</div>
    </div>
  );
}
