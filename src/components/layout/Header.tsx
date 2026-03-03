"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSplitActive } from "@/hooks/useSplitActive";

/* Assembly icon mark only (no wordmark) — the stacked chevron/triangle */
export function AssemblyMark({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 36 35"
      fill="currentColor"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path d="M35.327 25.05v5.867c0 2.075-1.711 3.758-3.822 3.758H1.1c-.936 0-1.405-1.113-.743-1.764l7.127-7.003a3.008 3.008 0 0 1 2.107-.857H35.33h-.002ZM35.33 11.802v5.865c0 2.075-1.712 3.757-3.824 3.757H12.051l8.92-8.765a3.005 3.005 0 0 1 2.107-.857H35.33h-.001ZM35.33 1.043v3.373c0 2.075-1.712 3.758-3.824 3.758h-5.97L33.534.312c.662-.65 1.794-.19 1.794.73Z" />
    </svg>
  );
}


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
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1)",
      }}
    >
      <div className="flex items-center justify-between">
        {/* Left — Full Assembly logo (mark + wordmark) */}
        <Link href="/" className="transition-opacity hover:opacity-70" style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/logos/watermark.svg"
            alt="Assembly"
            style={{ height: "22px", width: "auto", filter: "invert(1)" }}
          />
        </Link>

        {/* Right — Log in + Start free trial */}
        <div className="flex items-center" style={{ gap: "1.25rem" }}>
          <a
            href="https://assembly.com"
            target="_blank"
            rel="noopener"
            style={{
              fontFamily: "'PP Mori', var(--font-sans)",
              fontWeight: 400,
              fontSize: "0.85rem",
              color: "rgba(255, 255, 255, 0.6)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            className="transition-colors hover:!text-white"
            onMouseEnter={(e) => { e.currentTarget.style.color = "rgba(255, 255, 255, 0.9)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)"; }}
          >
            Log in
          </a>
          <a
            href="https://assembly.com/signup?utm_source=edition&utm_medium=web&utm_campaign=assembly2-launch"
            target="_blank"
            rel="noopener"
            style={{
              fontFamily: "'PP Mori', var(--font-sans)",
              fontWeight: 500,
              fontSize: "0.85rem",
              color: "#101010",
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              padding: "0.45rem 1.25rem",
              borderRadius: "9999px",
              textDecoration: "none",
              transition: "all 0.2s ease",
              display: "inline-flex",
              alignItems: "center",
            }}
            className="hidden lg:inline-flex"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(214, 249, 144, 0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Start free trial
          </a>
        </div>
      </div>
    </header>
  );
}
