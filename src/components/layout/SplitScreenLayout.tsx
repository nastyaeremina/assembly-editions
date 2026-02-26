/* ────────────────────────────────────────────────────────────
   SPLIT SCREEN LAYOUT

   Content is full-width. The sidebar floats as an overlay on
   the right edge via position: fixed — it does NOT push or
   shrink the main content.
   ──────────────────────────────────────────────────────────── */

interface SplitScreenLayoutProps {
  children: React.ReactNode;
}

export function SplitScreenLayout({ children }: SplitScreenLayoutProps) {
  return (
    <div id="split-content">
      {children}
    </div>
  );
}
