/* ────────────────────────────────────────────────────────────
   SPLIT SCREEN LAYOUT

   Content is ALWAYS constrained to 75% width on desktop (lg+).
   This means the document height never changes when the sidebar
   slides in/out, eliminating all scroll jump and feedback issues.

   The sidebar overlays the right 25% via position: fixed.
   ──────────────────────────────────────────────────────────── */

interface SplitScreenLayoutProps {
  children: React.ReactNode;
}

export function SplitScreenLayout({ children }: SplitScreenLayoutProps) {
  return (
    <div id="split-content">
      <div className="lg:pr-[min(25%,400px)]">
        {children}
      </div>
    </div>
  );
}
