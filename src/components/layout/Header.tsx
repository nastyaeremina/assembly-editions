"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSplitActive } from "@/hooks/useSplitActive";

/* Assembly icon mark only (no wordmark) — the stacked chevron/triangle */
export function AssemblyMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 35"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M35.327 25.05v5.867c0 2.075-1.711 3.758-3.822 3.758H1.1c-.936 0-1.405-1.113-.743-1.764l7.127-7.003a3.008 3.008 0 0 1 2.107-.857H35.33h-.002ZM35.33 11.802v5.865c0 2.075-1.712 3.757-3.824 3.757H12.051l8.92-8.765a3.005 3.005 0 0 1 2.107-.857H35.33h-.001ZM35.33 1.043v3.373c0 2.075-1.712 3.758-3.824 3.758h-5.97L33.534.312c.662-.65 1.794-.19 1.794.73Z" />
    </svg>
  );
}

/* ────────────────────────────────────────────────────────────
   NAV LINK STYLE
   ──────────────────────────────────────────────────────────── */
const navLinkStyle: React.CSSProperties = {
  fontFamily: "'PP Mori', var(--font-sans)",
  fontWeight: 400,
  fontSize: "1.1rem",
  lineHeight: 1.2,
  color: "var(--swatch-2)",
  textDecoration: "none",
};

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const hidden = useSplitActive();

  return (
    <header
      className={cn("fixed top-0 left-0 right-0 z-50", className)}
      style={{
        backgroundColor: "#101010",
        paddingTop: "0.8rem",
        paddingBottom: "0.5rem",
        paddingLeft: "0.9rem",
        paddingRight: "0.9rem",
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)",
      }}
    >
      <div className="flex items-center justify-between">
        {/* Left — Assembly */}
        <Link href="/" style={navLinkStyle} className="transition-opacity hover:opacity-70">
          Assembly
        </Link>

        {/* Right — Log in + Start free trial */}
        <div className="flex items-center" style={{ gap: "1.5rem" }}>
          <a
            href="https://assembly.com"
            target="_blank"
            rel="noopener"
            style={navLinkStyle}
            className="transition-opacity hover:opacity-70"
          >
            Log in
          </a>
          <a
            href="https://assembly.com/signup?utm_source=edition&utm_medium=web&utm_campaign=assembly2-launch"
            target="_blank"
            rel="noopener"
            style={navLinkStyle}
            className="transition-opacity hover:opacity-70"
          >
            Start free trial
          </a>
        </div>
      </div>
    </header>
  );
}
