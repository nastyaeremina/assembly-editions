"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ──────────────────────────────────────────────────────────
   SEGMENT-BASED CLIENT HOME PREVIEW
   Demonstrates automatic homepage routing per client segment.
   Click a segment pill to see what that tier's clients see.
   ────────────────────────────────────────────────────────── */

/* ── Segment data ── */
interface Segment {
  id: string;
  name: string;
  dotColor: string;
  clientCount: number;

  /* Sidebar + banner (change per segment) */
  accent: string;
  sidebarBg: string;
  sidebarText: string;
  sidebarActive: string;
  sidebarActiveBg: string;
  sidebarBadgeBg: string;
  sidebarBadgeText: string;
  bannerGradient: string;

  /* Content that differs per segment */
  greeting: string;
  subtitle: string;
}

/* Fixed content-area colors (never change) */
const CONTENT = {
  bg: "#ffffff",
  cardBg: "#ffffff",
  cardBorder: "#e2e8f0",
  textPrimary: "#1e293b",
  textSecondary: "#64748b",
} as const;

/* ── Icon paths ── */
const ICO = {
  home: "/Icons/house.svg",
  messages: "/Icons/Icon (approved)-8.svg",
  tasks: "/Icons/Icon (approved)-7.svg",
  files: "/Icons/Icon (approved)-6.svg",
  forms: "/Icons/Icon (approved)-5.svg",
  billing: "/Icons/Icon (approved)-4.svg",
  contracts: "/Icons/Icon (approved)-3.svg",
  helpdesk: "/Icons/Icon (approved)-2.svg",
  more: "/Icons/Icon (approved)-1.svg",
  arrow: "/Icons/Icon (approved).svg",
  logo: "/Icons/Logo.svg",
};

/* ── 4 Segments ── */
const SEGMENTS: Segment[] = [
  {
    id: "default",
    name: "Default",
    dotColor: "#71717a",
    clientCount: 42,
    accent: "#4B8EC8",
    sidebarBg: "#1e3a5f",
    sidebarText: "#e2e8f0",
    sidebarActive: "#ffffff",
    sidebarActiveBg: "rgba(255,255,255,0.1)",
    sidebarBadgeBg: "rgba(255,255,255,0.1)",
    sidebarBadgeText: "#e2e8f0",
    bannerGradient: "linear-gradient(135deg, #1e3a5f 0%, #334155 50%, #475569 100%)",
    greeting: "Good morning Mike",
    subtitle: "Here\u2019s what needs your attention today",
  },
  {
    id: "gold",
    name: "Gold",
    dotColor: "#f59e0b",
    clientCount: 60,
    accent: "#d97706",
    sidebarBg: "#3d2e1e",
    sidebarText: "#e2e8f0",
    sidebarActive: "#ffffff",
    sidebarActiveBg: "rgba(251,191,36,0.12)",
    sidebarBadgeBg: "rgba(251,191,36,0.12)",
    sidebarBadgeText: "#e2e8f0",
    bannerGradient: "linear-gradient(135deg, #78350f 0%, #92400e 50%, #b45309 100%)",
    greeting: "Good morning Sarah",
    subtitle: "Here\u2019s what needs your attention today",
  },
  {
    id: "silver",
    name: "Silver",
    dotColor: "#8b5cf6",
    clientCount: 20,
    accent: "#7c3aed",
    sidebarBg: "#1e1b2e",
    sidebarText: "#e2e8f0",
    sidebarActive: "#ffffff",
    sidebarActiveBg: "rgba(139,92,246,0.12)",
    sidebarBadgeBg: "rgba(139,92,246,0.12)",
    sidebarBadgeText: "#e2e8f0",
    bannerGradient: "linear-gradient(135deg, #1e1b2e 0%, #312e47 50%, #44406a 100%)",
    greeting: "Good morning James",
    subtitle: "Here\u2019s what needs your attention today",
  },
  {
    id: "bronze",
    name: "Bronze",
    dotColor: "#14b8a6",
    clientCount: 10,
    accent: "#0d9488",
    sidebarBg: "#134e4a",
    sidebarText: "#e2e8f0",
    sidebarActive: "#ffffff",
    sidebarActiveBg: "rgba(20,184,166,0.12)",
    sidebarBadgeBg: "rgba(20,184,166,0.12)",
    sidebarBadgeText: "#e2e8f0",
    bannerGradient: "linear-gradient(135deg, #134e4a 0%, #1a5c56 50%, #237068 100%)",
    greeting: "Good morning Alex",
    subtitle: "Here\u2019s what needs your attention today",
  },
];

const TOTAL_CLIENTS = SEGMENTS.reduce((sum, s) => sum + s.clientCount, 0);

/* ── Icon helper ── */
function Ico({ src, size = 14, invert = false }: { src: string; size?: number; invert?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      style={{
        display: "block",
        filter: invert ? "invert(1)" : "none",
        opacity: invert ? 0.85 : 0.7,
        transition: "filter 400ms ease",
      }}
    />
  );
}

/* ── Nav item ── */
function NavItem({ iconSrc, label, active, badge, segment }: {
  iconSrc: string; label: string; active?: boolean; badge?: number; segment: Segment;
}) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: "7px", padding: "4px 10px",
      borderRadius: "5px", fontSize: "11.5px", fontWeight: active ? 500 : 400,
      color: active ? segment.sidebarActive : segment.sidebarText,
      backgroundColor: active ? segment.sidebarActiveBg : "transparent",
      cursor: "default", fontFamily: "'Inter', system-ui, sans-serif", transition: "all 400ms ease",
    }}>
      <span style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
        <Ico src={iconSrc} size={12} invert />
      </span>
      <span style={{ flex: 1 }}>{label}</span>
      {badge !== undefined && badge > 0 && (
        <span style={{
          fontSize: "10px", fontWeight: 600, minWidth: "16px", textAlign: "center" as const,
          backgroundColor: segment.sidebarBadgeBg, color: segment.sidebarBadgeText,
          borderRadius: "4px", padding: "1px 5px", transition: "all 400ms ease",
        }}>{badge}</span>
      )}
    </div>
  );
}

/* ── Action card ── */
function ActionCard({ iconSrc, label, count, unit }: {
  iconSrc: string; label: string; count: number; unit: string;
}) {
  return (
    <div style={{
      flex: 1, padding: "12px 14px", borderRadius: "8px",
      backgroundColor: CONTENT.cardBg, border: `1px solid ${CONTENT.cardBorder}`,
      display: "flex", flexDirection: "column" as const, gap: "6px",
      minWidth: 0,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
        <span style={{ display: "flex" }}><Ico src={iconSrc} size={12} /></span>
        <span style={{ fontSize: "12px", fontWeight: 400, color: CONTENT.textPrimary, fontFamily: "'Inter', system-ui, sans-serif" }}>{label}</span>
      </div>
      <span style={{ fontSize: "11px", color: CONTENT.textSecondary, fontFamily: "'Inter', system-ui, sans-serif" }}>
        {count} {unit}
      </span>
    </div>
  );
}

/* ── Framer Motion fade variant ── */
const fadeVariant = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
};

const fadeTransition = { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const };

/* ════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════ */
export function ThemedClientHome({ inSplit = false }: { inSplit?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [manualOverride, setManualOverride] = useState(false);
  const overrideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const segment = SEGMENTS[activeIndex];

  /* Auto-cycle segments when component is visible on screen.
     Uses IntersectionObserver to start/stop a 2.5s interval.
     Manual clicks pause the auto-cycle for 4s then resume. */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start cycling
          if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
              setActiveIndex((prev) => (prev + 1) % SEGMENTS.length);
            }, 2500);
          }
        } else {
          // Stop cycling when out of view
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  /* Pause auto-cycle during manual override */
  useEffect(() => {
    if (manualOverride) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    } else {
      // Resume cycling if component is still in view
      const el = containerRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (inView && !intervalRef.current) {
          intervalRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % SEGMENTS.length);
          }, 2500);
        }
      }
    }
  }, [manualOverride]);

  /* Manual click: override auto-cycle for 4s */
  const handleSegmentClick = useCallback((i: number) => {
    setActiveIndex(i);
    setManualOverride(true);
    if (overrideTimer.current) clearTimeout(overrideTimer.current);
    overrideTimer.current = setTimeout(() => setManualOverride(false), 4000);
  }, []);

  /* Cleanup */
  useEffect(() => {
    return () => {
      if (overrideTimer.current) clearTimeout(overrideTimer.current);
    };
  }, []);

  return (
    <div ref={containerRef}>

      {/* ── Segment switcher (above preview) ── */}
      <div style={{ marginBottom: "16px" }}>
        {/* Label */}
        {/* Segment pills */}
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "6px", marginBottom: "12px" }}>
          {SEGMENTS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => handleSegmentClick(i)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "5px 14px",
                borderRadius: "20px",
                border: activeIndex === i
                  ? "1px solid rgba(255,255,255,0.15)"
                  : "1px solid transparent",
                backgroundColor: activeIndex === i
                  ? "rgba(255,255,255,0.1)"
                  : "transparent",
                cursor: "pointer",
                transition: "background-color 300ms ease, color 300ms ease, border-color 300ms ease",
                outline: "none",
              }}
            >
              {/* Colored dot */}
              <span style={{
                width: "8px", height: "8px", borderRadius: "50%",
                backgroundColor: s.dotColor, flexShrink: 0,
              }} />
              {/* Name */}
              <span style={{
                fontFamily: "'PP Mori', var(--font-sans)",
                fontSize: "12px",
                fontWeight: 500,
                color: activeIndex === i ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.5)",
                transition: "color 300ms ease",
              }}>
                {s.name}
              </span>
              {/* Client count */}
              <span style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "10px",
                color: activeIndex === i ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.3)",
                transition: "color 300ms ease",
              }}>
                {s.clientCount}
              </span>
            </button>
          ))}
        </div>

        {/* Stacked bar chart */}
        <div style={{
          display: "flex", height: "4px", borderRadius: "2px",
          overflow: "hidden", backgroundColor: "rgba(255,255,255,0.05)",
        }}>
          {SEGMENTS.map((s, i) => (
            <div
              key={s.id}
              style={{
                width: `${(s.clientCount / TOTAL_CLIENTS) * 100}%`,
                backgroundColor: s.dotColor,
                opacity: activeIndex === i ? 1 : 0.4,
                transition: "opacity 400ms ease",
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Portal preview container ── */}
      <motion.div
        style={{
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.1)",
          overflow: "hidden",
          boxShadow: `0 0 80px ${segment.accent}10, 0 4px 30px rgba(0,0,0,0.3)`,
          transition: "box-shadow 500ms ease",
        }}
      >
        {/* Browser chrome */}
        <div style={{
          position: "relative", display: "flex", alignItems: "center",
          backgroundColor: "#141414", padding: "12px 16px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        }}>
          <div style={{ display: "flex", gap: "7px", position: "relative", zIndex: 1 }}>
            {["#ff5f57", "#febc2e", "#28c840"].map((color) => (
              <div key={color} style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: color, opacity: 0.8 }} />
            ))}
          </div>
          <div style={{ position: "absolute", left: 0, right: 0, textAlign: "center", fontFamily: "'SF Mono', 'Fira Code', Menlo, monospace", fontSize: "11px", color: "rgba(255, 255, 255, 0.35)", letterSpacing: "0.01em", pointerEvents: "none" }}>
            portal.yourbrand.com
          </div>
        </div>

        {/* Portal layout: sidebar + content */}
        <div style={{ display: "flex", height: inSplit ? "640px" : "640px" }}>

          {/* ── Sidebar ── */}
          <div style={{
            width: inSplit ? "150px" : "175px", flexShrink: 0,
            backgroundColor: segment.sidebarBg, padding: "10px 0",
            display: "flex", flexDirection: "column",
            transition: "background-color 400ms ease",
          }}>
            {/* Company */}
            <div style={{
              display: "flex", alignItems: "center", gap: "7px",
              padding: "2px 10px 10px",
              marginBottom: "6px",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ICO.logo}
                alt="BrandMages"
                width={20}
                height={20}
                style={{ borderRadius: "5px", display: "block" }}
              />
              <span style={{
                fontSize: "11.5px", fontWeight: 600, color: segment.sidebarText,
                fontFamily: "'Inter', system-ui, sans-serif", transition: "color 400ms ease",
              }}>BrandMages</span>
            </div>

            <div style={{ padding: "0 4px", display: "flex", flexDirection: "column", gap: "1px" }}>
              <NavItem iconSrc={ICO.home} label="Home" active segment={segment} />
              <NavItem iconSrc={ICO.messages} label="Messages" segment={segment} />
              <NavItem iconSrc={ICO.tasks} label="Tasks" badge={1} segment={segment} />
              <NavItem iconSrc={ICO.files} label="Files" segment={segment} />
              <NavItem iconSrc={ICO.forms} label="Forms" badge={1} segment={segment} />
              <NavItem iconSrc={ICO.billing} label="Billing" badge={1} segment={segment} />
              <NavItem iconSrc={ICO.contracts} label="Contracts" badge={1} segment={segment} />
              <NavItem iconSrc={ICO.helpdesk} label="Helpdesk" segment={segment} />
              <NavItem iconSrc={ICO.more} label="More" segment={segment} />
            </div>
          </div>

          {/* ── Content area (fixed white — does NOT change with segment) ── */}
          <div style={{
            flex: 1, backgroundColor: CONTENT.bg,
            overflow: "hidden",
            display: "flex", flexDirection: "column",
          }}>
            {/* Top breadcrumb */}
            <div style={{
              padding: "8px 16px", fontSize: "12px", fontWeight: 500,
              color: CONTENT.textSecondary, fontFamily: "'Inter', system-ui, sans-serif",
              borderBottom: `1px solid ${CONTENT.cardBorder}`,
            }}>Home</div>

            <div style={{ flex: 1, padding: inSplit ? "14px 14px 24px" : "18px 18px 30px" }}>
              {/* Greeting — cross-fades per segment */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={segment.id + "-greeting"}
                  variants={fadeVariant}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={fadeTransition}
                  style={{ marginBottom: "4px", minHeight: inSplit ? "42px" : "50px" }}
                >
                  <div style={{
                    fontSize: inSplit ? "15px" : "19px", fontWeight: 600,
                    color: CONTENT.textPrimary, fontFamily: "'Inter', system-ui, sans-serif",
                  }}>{segment.greeting}</div>
                  <div style={{
                    fontSize: "12px", color: CONTENT.textSecondary,
                    fontFamily: "'Inter', system-ui, sans-serif", marginTop: "2px",
                  }}>{segment.subtitle}</div>
                </motion.div>
              </AnimatePresence>

              {/* Hero banner — gradient changes with segment */}
              <div style={{
                marginTop: "12px", borderRadius: "8px", height: inSplit ? "140px" : "160px",
                background: segment.bannerGradient, transition: "background 500ms ease",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", inset: 0, opacity: 0.15,
                  background: "repeating-linear-gradient(135deg, transparent, transparent 8px, rgba(255,255,255,0.1) 8px, rgba(255,255,255,0.1) 16px)",
                }} />
              </div>

              {/* Actions card — fixed across all segments */}
              <div style={{
                marginTop: "14px", borderRadius: "8px",
                border: `1px solid ${CONTENT.cardBorder}`,
                backgroundColor: CONTENT.cardBg, padding: inSplit ? "10px" : "16px",
              }}>
                <div style={{
                  fontSize: "14px", fontWeight: 600, color: CONTENT.textPrimary,
                  fontFamily: "'Inter', system-ui, sans-serif", marginBottom: "3px",
                }}>Your actions</div>
                <div style={{
                  fontSize: "12px", color: CONTENT.textSecondary,
                  fontFamily: "'Inter', system-ui, sans-serif", marginBottom: "10px",
                }}>You have 4 pending items</div>

                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" as const }}>
                  <ActionCard iconSrc={ICO.billing} label="Invoices" count={1} unit="invoice" />
                  <ActionCard iconSrc={ICO.contracts} label="Contracts" count={1} unit="contract" />
                  <ActionCard iconSrc={ICO.tasks} label="Tasks" count={1} unit="task" />
                  <ActionCard iconSrc={ICO.forms} label="Forms" count={1} unit="form" />
                </div>
              </div>

              {/* About us section */}
              <div style={{ marginTop: "14px" }}>
                <div style={{ fontSize: "12px", fontWeight: 600, color: CONTENT.textPrimary, fontFamily: "'Inter', system-ui, sans-serif", marginBottom: "4px" }}>About us</div>
                <div style={{ fontSize: "10px", lineHeight: 1.5, color: CONTENT.textSecondary, fontFamily: "'Inter', system-ui, sans-serif", marginBottom: "10px" }}>
                  BrandMages, a full-service marketing agency that helps businesses increase their brand awareness, attract new customers, and grow their bottom line. We specialize in crafting unique and effective marketing strategies that align with your business goals and help you stand out in a crowded marketplace.
                </div>
                <div style={{ border: "1px solid #e5e7eb", borderRadius: "6px", overflow: "hidden" }}>
                  <table style={{ borderCollapse: "collapse", fontSize: "10px", fontFamily: "'Inter', system-ui, sans-serif", width: "100%" }}>
                    <thead>
                      <tr style={{ backgroundColor: "#fafafa" }}>
                        <td style={{ padding: "6px 10px", color: CONTENT.textSecondary, borderBottom: "1px solid #e5e7eb", fontWeight: 500 }}>Days</td>
                        <td style={{ padding: "6px 10px", color: CONTENT.textSecondary, borderBottom: "1px solid #e5e7eb", fontWeight: 500 }}>Hours (EST)</td>
                        <td style={{ padding: "6px 10px", color: CONTENT.textSecondary, borderBottom: "1px solid #e5e7eb", fontWeight: 500 }}>Phone</td>
                        <td style={{ padding: "6px 10px", color: CONTENT.textSecondary, borderBottom: "1px solid #e5e7eb", fontWeight: 500 }}>Email</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td style={{ padding: "6px 10px", borderBottom: "1px solid #f0f0f0", color: CONTENT.textSecondary }}>M–F</td><td style={{ padding: "6px 10px", borderBottom: "1px solid #f0f0f0", color: CONTENT.textSecondary }}>9AM – 6PM</td><td style={{ padding: "6px 10px", borderBottom: "1px solid #f0f0f0", color: CONTENT.textSecondary }}>(555) 234-5678</td><td style={{ padding: "6px 10px", borderBottom: "1px solid #f0f0f0", color: CONTENT.textSecondary }}>hello@brandmages.com</td></tr>
                      <tr><td style={{ padding: "6px 10px", borderBottom: "1px solid #f0f0f0", color: CONTENT.textSecondary }}>Sat</td><td style={{ padding: "6px 10px", borderBottom: "1px solid #f0f0f0", color: CONTENT.textSecondary }}>10AM – 5PM</td><td style={{ padding: "6px 10px", borderBottom: "1px solid #f0f0f0", color: CONTENT.textSecondary }}>(555) 234-5678</td><td style={{ padding: "6px 10px", borderBottom: "1px solid #f0f0f0", color: CONTENT.textSecondary }}>hello@brandmages.com</td></tr>
                      <tr><td style={{ padding: "6px 10px", color: CONTENT.textSecondary }}>Sun</td><td style={{ padding: "6px 10px", color: CONTENT.textSecondary }}>Closed</td><td style={{ padding: "6px 10px", color: CONTENT.textSecondary }}>—</td><td style={{ padding: "6px 10px", color: CONTENT.textSecondary }}>—</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
