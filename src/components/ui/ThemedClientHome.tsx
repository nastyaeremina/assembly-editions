"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

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
  bannerBg: string;

  /* Content that differs per segment */
  greeting: string;
  subtitle: string;
  actions: { invoices: number; contracts: number; tasks: number; forms: number };
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
  contractsCard: "/Icons/Icon (approved)-3.svg",
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
    bannerBg: "#1e3a5f",
    greeting: "Welcome back Mike",
    subtitle: "Here\u2019s what needs your attention today",
    actions: { invoices: 1, contracts: 1, tasks: 1, forms: 1 },
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
    bannerBg: "#6b4c32",
    greeting: "Welcome back Sarah",
    subtitle: "Here\u2019s what needs your attention today",
    actions: { invoices: 2, contracts: 1, tasks: 1, forms: 1 },
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
    bannerBg: "#5c6058",
    greeting: "Welcome back James",
    subtitle: "Here\u2019s what needs your attention today",
    actions: { invoices: 2, contracts: 2, tasks: 1, forms: 1 },
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
    bannerBg: "#134e4a",
    greeting: "Welcome back Alex",
    subtitle: "Here\u2019s what needs your attention today",
    actions: { invoices: 1, contracts: 1, tasks: 1, forms: 1 },
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
        filter: invert ? "brightness(0) invert(1)" : "none",
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
        <span style={{ display: "flex", flexShrink: 0 }}><Ico src={iconSrc} size={12} /></span>
        <span style={{ fontSize: "12px", fontWeight: 500, color: CONTENT.textPrimary, fontFamily: "'Inter', system-ui, sans-serif", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{label}</span>
      </div>
      <span style={{ fontSize: "11px", color: CONTENT.textSecondary, fontFamily: "'Inter', system-ui, sans-serif" }}>
        {count} {count === 1 ? unit : `${unit}s`}
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
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipDismissed = useRef(false);

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
    setShowTooltip(false);
    tooltipDismissed.current = true;
    if (overrideTimer.current) clearTimeout(overrideTimer.current);
    overrideTimer.current = setTimeout(() => setManualOverride(false), 4000);
  }, []);

  /* Cleanup */
  useEffect(() => {
    return () => {
      if (overrideTimer.current) clearTimeout(overrideTimer.current);
    };
  }, []);

  const isMobile = useMediaQuery("(max-width: 1023px)", false);

  /* ── Segment switcher (shared between mobile & desktop) ── */
  const segmentSwitcher = (
    <div
      onMouseEnter={() => { if (!tooltipDismissed.current) setShowTooltip(true); }}
      onMouseLeave={() => setShowTooltip(false)}
      style={{
        display: "flex",
        alignItems: "center",
        padding: "8px 14px 8px 4px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
      }}
    >
      {SEGMENTS.map((s, i) => {
        const isActive = activeIndex === i;
        return (
          <button
            key={s.id}
            onClick={() => handleSegmentClick(i)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              padding: "4px 10px",
              border: "none",
              borderRadius: "0",
              backgroundColor: "transparent",
              cursor: "pointer",
              outline: "none",
              transition: "opacity 300ms ease",
              opacity: isActive ? 1 : 0.4,
              position: "relative",
            }}
          >
            <span style={{
              width: "5px", height: "5px", borderRadius: "50%",
              backgroundColor: s.dotColor, flexShrink: 0,
            }} />
            <span style={{
              fontFamily: "'PP Mori', var(--font-sans)",
              fontSize: "0.75rem",
              fontWeight: isActive ? 500 : 400,
              color: "rgba(255,255,255,0.85)",
              letterSpacing: "-0.01em",
            }}>
              {s.name}
            </span>
            <span style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "0.65rem",
              color: "rgba(255,255,255,0.35)",
            }}>
              {s.clientCount}
            </span>
          </button>
        );
      })}
      {/* Continuous progress line across full tab bar */}
      {!manualOverride && (() => {
        const total = SEGMENTS.length;
        const filledPercent = (activeIndex / total) * 100;
        const segmentPercent = 100 / total;
        const dotColor = SEGMENTS[activeIndex]?.dotColor ?? "#fff";
        return (
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "1.5px",
            }}
          >
            {/* Already-filled portion (previous segments) */}
            {activeIndex > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: `${filledPercent}%`,
                  height: "100%",
                  backgroundColor: dotColor,
                  opacity: 0.35,
                  borderRadius: "1px",
                }}
              />
            )}
            {/* Animating portion (current segment) */}
            <div
              key={`progress-${activeIndex}`}
              style={{
                position: "absolute",
                top: 0,
                left: `${filledPercent}%`,
                width: `${segmentPercent}%`,
                height: "100%",
                backgroundColor: dotColor,
                opacity: 0.35,
                borderRadius: "1px",
                transformOrigin: "left",
                animation: "segment-progress 2.5s linear forwards",
              }}
            />
          </div>
        );
      })()}
      <span
        className="hidden min-[480px]:inline"
        style={{
          marginLeft: "auto",
          fontFamily: "var(--font-mono, monospace)",
          fontSize: "0.65rem",
          letterSpacing: "0.04em",
          color: "rgba(255,255,255,0.2)",
          textTransform: "uppercase" as const,
        }}
      >
        {TOTAL_CLIENTS} clients
      </span>
      {/* Tooltip — positioned over 2nd segment (Gold) since 1st is already active */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            style={{
              position: "absolute",
              top: "calc(100% + 6px)",
              left: "80px",
              pointerEvents: "none",
              zIndex: 100,
            }}
          >
            <div style={{
              position: "relative",
              display: "inline-flex",
              alignItems: "center",
              padding: "4px 8px",
              borderRadius: "6px",
              backgroundColor: "rgba(39, 39, 42, 0.95)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: "1px solid rgba(63, 63, 70, 0.5)",
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
              whiteSpace: "nowrap",
            }}>
              <span style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "10px",
                fontWeight: 400,
                color: "#ffffff",
              }}>
                Click to switch
              </span>
              <div style={{
                position: "absolute",
                top: "-4px",
                left: "16px",
                width: "8px",
                height: "8px",
                backgroundColor: "rgba(39, 39, 42, 0.95)",
                transform: "rotate(45deg)",
                borderLeft: "1px solid rgba(63, 63, 70, 0.5)",
                borderTop: "1px solid rgba(63, 63, 70, 0.5)",
              }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  /* ── Mobile: no sidebar, mobile top bar ── */
  if (isMobile) {
    return (
      <div ref={containerRef}>
        <div style={{
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.08)",
          overflow: "hidden",
          boxShadow: `0 0 80px ${segment.accent}10, 0 4px 30px rgba(0,0,0,0.3)`,
          transition: "box-shadow 500ms ease",
          fontFamily: "'Inter', system-ui, sans-serif",
        }}>
          {segmentSwitcher}
          {/* Mobile app top bar */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#ffffff",
            padding: "12px 16px",
            borderBottom: "1px solid #e5e7eb",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "3.5px", cursor: "default" }}>
                <div style={{ width: "16px", height: "1.5px", backgroundColor: "#18181b", borderRadius: "1px" }} />
                <div style={{ width: "16px", height: "1.5px", backgroundColor: "#18181b", borderRadius: "1px" }} />
                <div style={{ width: "16px", height: "1.5px", backgroundColor: "#18181b", borderRadius: "1px" }} />
              </div>
              <span style={{ fontSize: "14px", fontWeight: 500, color: "#18181b" }}>Home</span>
            </div>
          </div>

          {/* Content area — no sidebar */}
          <div style={{ backgroundColor: CONTENT.bg, padding: "20px 18px 28px", overflow: "hidden" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={segment.id + "-greeting"}
                variants={fadeVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={fadeTransition}
                style={{ marginBottom: "4px", minHeight: "42px" }}
              >
                <div style={{
                  fontSize: "18px", fontWeight: 500,
                  color: CONTENT.textPrimary, fontFamily: "'Inter', system-ui, sans-serif",
                }}>{segment.greeting}</div>
                <div style={{
                  fontSize: "12px", color: CONTENT.textSecondary,
                  fontFamily: "'Inter', system-ui, sans-serif", marginTop: "2px",
                }}>{segment.subtitle}</div>
              </motion.div>
            </AnimatePresence>

            {/* Hero banner — stacked layers for smooth cross-fade */}
            <div style={{
              marginTop: "12px", borderRadius: "8px", height: "140px",
              position: "relative", overflow: "hidden",
            }}>
              {SEGMENTS.map((seg) => (
                <div
                  key={seg.id + "-mobile-banner"}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: seg.bannerBg,
                    opacity: seg.id === segment.id ? 1 : 0,
                    transition: "opacity 600ms ease",
                  }}
                />
              ))}
            </div>

            {/* Actions card */}
            <div style={{
              marginTop: "14px", borderRadius: "8px",
              border: `1px solid ${CONTENT.cardBorder}`,
              backgroundColor: CONTENT.cardBg, padding: "16px",
            }}>
              <div style={{
                fontSize: "14px", fontWeight: 500, color: CONTENT.textPrimary,
                fontFamily: "'Inter', system-ui, sans-serif", marginBottom: "3px",
              }}>Your actions</div>
              <div style={{
                fontSize: "12px", color: CONTENT.textSecondary,
                fontFamily: "'Inter', system-ui, sans-serif", marginBottom: "10px",
              }}>You have {segment.actions.invoices + segment.actions.contracts + segment.actions.tasks + segment.actions.forms} pending items</div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                <ActionCard iconSrc={ICO.billing} label="Invoices" count={segment.actions.invoices} unit="invoice" />
                <ActionCard iconSrc={ICO.contractsCard} label="Contracts" count={segment.actions.contracts} unit="contract" />
                <ActionCard iconSrc={ICO.tasks} label="Tasks" count={segment.actions.tasks} unit="task" />
                <ActionCard iconSrc={ICO.forms} label="Forms" count={segment.actions.forms} unit="form" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── Desktop: full layout with sidebar ── */
  return (
    <div ref={containerRef}>

      {/* ── Portal preview container ── */}
      <motion.div
        style={{
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.08)",
          overflow: "hidden",
          boxShadow: `0 0 80px ${segment.accent}10, 0 4px 30px rgba(0,0,0,0.3)`,
          transition: "box-shadow 500ms ease",
        }}
      >
        {segmentSwitcher}

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
                fontSize: "11.5px", fontWeight: 500, color: segment.sidebarText,
                fontFamily: "'Inter', system-ui, sans-serif", transition: "color 400ms ease",
              }}>BrandMages</span>
            </div>

            <div style={{ padding: "0 4px", display: "flex", flexDirection: "column", gap: "1px" }}>
              <NavItem iconSrc={ICO.home} label="Home" active segment={segment} />
              <NavItem iconSrc={ICO.messages} label="Messages" segment={segment} />
              <NavItem iconSrc={ICO.tasks} label="Tasks" badge={segment.actions.tasks} segment={segment} />
              <NavItem iconSrc={ICO.files} label="Files" segment={segment} />
              <NavItem iconSrc={ICO.forms} label="Forms" badge={segment.actions.forms} segment={segment} />
              <NavItem iconSrc={ICO.billing} label="Billing" badge={segment.actions.invoices} segment={segment} />
              <NavItem iconSrc={ICO.contracts} label="Contracts" badge={segment.actions.contracts} segment={segment} />
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
                    fontSize: inSplit ? "15px" : "19px", fontWeight: 500,
                    color: CONTENT.textPrimary, fontFamily: "'Inter', system-ui, sans-serif",
                  }}>{segment.greeting}</div>
                  <div style={{
                    fontSize: "12px", color: CONTENT.textSecondary,
                    fontFamily: "'Inter', system-ui, sans-serif", marginTop: "2px",
                  }}>{segment.subtitle}</div>
                </motion.div>
              </AnimatePresence>

              {/* Hero banner — stacked layers for smooth cross-fade */}
              <div style={{
                marginTop: "12px", borderRadius: "8px", height: inSplit ? "140px" : "160px",
                position: "relative", overflow: "hidden",
              }}>
                {SEGMENTS.map((seg) => (
                  <div
                    key={seg.id + "-desktop-banner"}
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: seg.bannerBg,
                      opacity: seg.id === segment.id ? 1 : 0,
                      transition: "opacity 600ms ease",
                    }}
                  />
                ))}
              </div>

              {/* Actions card — fixed across all segments */}
              <div style={{
                marginTop: "14px", borderRadius: "8px",
                border: `1px solid ${CONTENT.cardBorder}`,
                backgroundColor: CONTENT.cardBg, padding: inSplit ? "10px" : "16px",
              }}>
                <div style={{
                  fontSize: "14px", fontWeight: 500, color: CONTENT.textPrimary,
                  fontFamily: "'Inter', system-ui, sans-serif", marginBottom: "3px",
                }}>Your actions</div>
                <div style={{
                  fontSize: "12px", color: CONTENT.textSecondary,
                  fontFamily: "'Inter', system-ui, sans-serif", marginBottom: "10px",
                }}>You have {segment.actions.invoices + segment.actions.contracts + segment.actions.tasks + segment.actions.forms} pending items</div>

                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" as const }}>
                  <ActionCard iconSrc={ICO.billing} label="Invoices" count={segment.actions.invoices} unit="invoice" />
                  <ActionCard iconSrc={ICO.contractsCard} label="Contracts" count={segment.actions.contracts} unit="contract" />
                  <ActionCard iconSrc={ICO.tasks} label="Tasks" count={segment.actions.tasks} unit="task" />
                  <ActionCard iconSrc={ICO.forms} label="Forms" count={segment.actions.forms} unit="form" />
                </div>
              </div>

              {/* About us section */}
              <div style={{ marginTop: "14px" }}>
                <div style={{ fontSize: "12px", fontWeight: 500, color: CONTENT.textPrimary, fontFamily: "'Inter', system-ui, sans-serif", marginBottom: "4px" }}>About us</div>
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
