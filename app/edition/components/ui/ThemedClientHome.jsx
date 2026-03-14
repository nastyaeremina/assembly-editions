"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";

/* ──────────────────────────────────────────────────────────
   SEGMENT-BASED CLIENT HOME PREVIEW
   Demonstrates automatic homepage routing per client segment.
   Click a segment pill to see what that tier's clients see.
   ────────────────────────────────────────────────────────── */

/* Fixed content-area colors (never change) */
const CONTENT = {
  bg: "#ffffff",
  cardBg: "#ffffff",
  cardBorder: "#e2e8f0",
  textPrimary: "#1e293b",
  textSecondary: "#64748b",
  tableBorder: "#e5e7eb",
  tableRowBorder: "#f0f0f0",
  tableHeaderBg: "#fafafa",
};

/* Glass variant — used in hero preview (static mode) for seamless integration */
const CONTENT_DARK = {
  bg: "transparent",
  cardBg: "rgba(255, 255, 255, 0.035)",
  cardBorder: "rgba(255, 255, 255, 0.08)",
  textPrimary: "rgba(255, 255, 255, 0.82)",
  textSecondary: "rgba(255, 255, 255, 0.38)",
  tableBorder: "rgba(255, 255, 255, 0.08)",
  tableRowBorder: "rgba(255, 255, 255, 0.03)",
  tableHeaderBg: "rgba(255, 255, 255, 0.03)",
  /* Glass overrides for sidebar + banner */
  sidebarBg: "transparent",
  bannerBg: null, /* null = use segment gradient even in static mode */
};

/* ── Icon paths ── */
const ICO = {
  home: "/edition/Icons/house.svg",
  messages: "/edition/Icons/Icon (approved)-8.svg",
  tasks: "/edition/Icons/Icon (approved)-7.svg",
  files: "/edition/Icons/Icon (approved)-6.svg",
  forms: "/edition/Icons/Icon (approved)-5.svg",
  billing: "/edition/Icons/Icon (approved)-4.svg",
  contracts: "/edition/Icons/Icon (approved)-3.svg",
  contractsCard: "/edition/Icons/Icon (approved)-3.svg",
  helpdesk: "/edition/Icons/Icon (approved)-2.svg",
  more: "/edition/Icons/Icon (approved)-1.svg",
  arrow: "/edition/Icons/Icon (approved).svg",
  logo: "/edition/Icons/Logo.svg",
};

/* ── 3 Segments — each with different sidebar items & action cards ── */
const SEGMENTS = [
  {
    id: "premium",
    name: "Premium",
    dotColor: "#4B8EC8",
    clientCount: 42,
    accent: "#4B8EC8",
    sidebarBg: "#1e3a5f",
    sidebarText: "#e2e8f0",
    sidebarActive: "#ffffff",
    sidebarActiveBg: "rgba(255,255,255,0.1)",
    sidebarBadgeBg: "rgba(255,255,255,0.1)",
    sidebarBadgeText: "#e2e8f0",
    bannerBg: "#1e3a5f",
    bannerGradient: "linear-gradient(135deg, #e8722a 0%, #d4567a 18%, #c24a8e 32%, #9b4cb8 46%, #6a6cd4 58%, #4a88cc 70%, #3d9bbe 82%, #35a8b5 94%, #2fb0ae 100%)",
    greeting: "Welcome back Sarah",
    subtitle: "Here\u2019s everything in one place",
    navItems: [
      { icon: "home", label: "Home", active: true },
      { icon: "messages", label: "Messages" },
      { icon: "tasks", label: "Tasks", badge: 3 },
      { icon: "files", label: "Files" },
      { icon: "forms", label: "Forms", badge: 1 },
      { icon: "billing", label: "Billing", badge: 2 },
      { icon: "contracts", label: "Contracts", badge: 2 },
      { icon: "helpdesk", label: "Helpdesk" },
      { icon: "more", label: "More" },
    ],
    actionCards: [
      { icon: "billing", label: "Invoices", count: 2, unit: "invoice" },
      { icon: "contractsCard", label: "Contracts", count: 2, unit: "contract" },
      { icon: "tasks", label: "Tasks", count: 3, unit: "task" },
      { icon: "forms", label: "Forms", count: 1, unit: "form" },
    ],
    bottomSection: "team",
    bottomTitle: "Your team",
    bottomSubtitle: "Meet the team working on your account. Reach out directly or send a message through the portal.",
    tableHeaders: ["Team member", "Role", "Email", "Availability"],
    tableRows: [
      ["Sarah Kim", "Account Manager", "sarah@brandmages.com", "M\u2013F, 9AM\u20136PM"],
      ["Jake Torres", "Designer", "jake@brandmages.com", "M\u2013F, 10AM\u20135PM"],
      ["Priya Patel", "Strategist", "priya@brandmages.com", "M\u2013Th, 9AM\u20134PM"],
    ],
  },
  {
    id: "standard",
    name: "Silver",
    dotColor: "#f59e0b",
    clientCount: 60,
    accent: "#d97706",
    sidebarBg: "#3d2e1e",
    sidebarText: "#e2e8f0",
    sidebarActive: "#ffffff",
    sidebarActiveBg: "rgba(251,191,36,0.12)",
    sidebarBadgeBg: "rgba(251,191,36,0.12)",
    sidebarBadgeText: "#e2e8f0",
    bannerBg: "#4a3524",
    bannerGradient: "linear-gradient(135deg, #1a0a00 0%, #4a1e00 14%, #7a3500 28%, #b04e08 42%, #d4700a 56%, #e8920e 68%, #f5b020 80%, #fcd878 92%, #fef3c7 100%)",
    greeting: "Welcome back Mike",
    subtitle: "Your hub for files, tasks, and updates",
    navItems: [
      { icon: "home", label: "Home", active: true },
      { icon: "messages", label: "Messages" },
      { icon: "tasks", label: "Tasks", badge: 2 },
      { icon: "files", label: "Files" },
      { icon: "billing", label: "Billing", badge: 1 },
      { icon: "helpdesk", label: "Helpdesk" },
    ],
    actionCards: [
      { icon: "billing", label: "Invoices", count: 1, unit: "invoice" },
      { icon: "tasks", label: "Tasks", count: 2, unit: "task" },
    ],
    bottomSection: "services",
    bottomTitle: "Active services",
    bottomSubtitle: "Here\u2019s a snapshot of what\u2019s currently running for your account.",
    tableHeaders: ["Service", "Status", "Frequency", "Next delivery"],
    tableRows: [
      ["Social media management", "Active", "Weekly", "Mar 18"],
      ["SEO audit", "Active", "Monthly", "Apr 1"],
      ["Email campaign", "Scheduled", "Bi-weekly", "Mar 20"],
    ],
  },
  {
    id: "starter",
    name: "Starter",
    dotColor: "#14b8a6",
    clientCount: 30,
    accent: "#0d9488",
    sidebarBg: "#134e4a",
    sidebarText: "#e2e8f0",
    sidebarActive: "#ffffff",
    sidebarActiveBg: "rgba(20,184,166,0.12)",
    sidebarBadgeBg: "rgba(20,184,166,0.12)",
    sidebarBadgeText: "#e2e8f0",
    bannerBg: "#134e4a",
    bannerGradient: "linear-gradient(135deg, #a8d8d0 0%, #8ccbc2 16%, #6ebdb4 32%, #52b0a6 48%, #3aa39a 62%, #28968e 76%, #1a8580 88%, #0d7377 100%)",
    greeting: "Welcome back Alex",
    subtitle: "Everything you need, all in one place",
    navItems: [
      { icon: "home", label: "Home", active: true },
      { icon: "messages", label: "Messages" },
      { icon: "files", label: "Files" },
      { icon: "billing", label: "Billing", badge: 1 },
    ],
    actionCards: [
      { icon: "billing", label: "Invoices", count: 1, unit: "invoice" },
      { icon: "tasks", label: "Tasks", count: 1, unit: "task" },
    ],
    bottomSection: "hours",
    bottomTitle: "Office hours",
    bottomSubtitle: "Our availability for calls and support requests.",
    tableHeaders: ["Day", "Hours", "Timezone", "Support"],
    tableRows: [
      ["Monday \u2013 Friday", "9AM \u2013 6PM", "EST", "Full"],
      ["Saturday", "10AM \u2013 5PM", "EST", "Limited"],
      ["Sunday", "Closed", "\u2014", "\u2014"],
    ],
  },
];

const TOTAL_CLIENTS = SEGMENTS.reduce((sum, s) => sum + s.clientCount, 0);

/* ── Icon helper ── */
function Ico({ src, size = 14, invert = false }) {
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
function NavItem({ iconSrc, label, active, badge, segment, compact = false }) {
  return (
    <div
      style={{
        display: "flex", alignItems: "center",
        gap: compact ? "5px" : "7px",
        padding: compact ? "2px 6px" : "4px 10px",
        borderRadius: compact ? "3px" : "5px",
        fontSize: compact ? "8.5px" : "11.5px",
        fontWeight: active ? 500 : 400,
        color: active ? segment.sidebarActive : segment.sidebarText,
        backgroundColor: active ? segment.sidebarActiveBg : "transparent",
        cursor: "default", fontFamily: "'Inter', system-ui, sans-serif", transition: "all 400ms ease",
      }}
    >
      <span style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
        <Ico src={iconSrc} size={compact ? 9 : 12} invert />
      </span>
      <span style={{ flex: 1 }}>{label}</span>
      {badge !== undefined && badge > 0 && (
        <span style={{
          fontSize: compact ? "7px" : "10px", fontWeight: 600,
          minWidth: compact ? "12px" : "16px", textAlign: "center",
          backgroundColor: segment.sidebarBadgeBg, color: segment.sidebarBadgeText,
          borderRadius: compact ? "3px" : "4px",
          padding: compact ? "1px 3px" : "1px 5px",
          transition: "all 400ms ease",
        }}>{badge}</span>
      )}
    </div>
  );
}

/* ── Action card ── */
function ActionCard({ iconSrc, label, count, unit, compact = false, colors = CONTENT }) {
  return (
    <div
      style={{
        flex: 1,
        padding: compact ? "6px 8px" : "12px 14px",
        borderRadius: compact ? "5px" : "8px",
        backgroundColor: colors.cardBg, border: `1px solid ${colors.cardBorder}`,
        display: "flex", flexDirection: "column",
        gap: compact ? "2px" : "6px",
        minWidth: 0, cursor: "default",
        transition: "border-color 0.15s ease",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = colors === CONTENT ? "#c7d2dd" : "rgba(255,255,255,0.15)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = colors.cardBorder; }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: compact ? "4px" : "7px" }}>
        <span style={{ display: "flex", flexShrink: 0 }}><Ico src={iconSrc} size={compact ? 8 : 12} invert={colors !== CONTENT} /></span>
        <span style={{ fontSize: compact ? "8px" : "12px", fontWeight: 500, color: colors.textPrimary, fontFamily: "'Inter', system-ui, sans-serif", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{label}</span>
      </div>
      <span style={{ fontSize: compact ? "7px" : "11px", color: colors.textSecondary, fontFamily: "'Inter', system-ui, sans-serif" }}>
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

const fadeTransition = { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] };

/* ════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════ */
export function ThemedClientHome({ inSplit = false, static: isStatic = false }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [manualOverride, setManualOverride] = useState(false);
  const overrideTimer = useRef(null);
  const intervalRef = useRef(null);
  const segment = SEGMENTS[activeIndex];
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipDismissed = useRef(false);
  const silverBtnRef = useRef(null);
  const [tooltipLeft, setTooltipLeft] = useState(0);

  /* Content-area palette — dark in hero preview, light elsewhere */
  const C = isStatic ? CONTENT_DARK : CONTENT;

  /* Auto-cycle segments when component is visible on screen.
     Uses IntersectionObserver to start/stop a 2.5s interval.
     Manual clicks pause the auto-cycle for 4s then resume.
     Skipped entirely when static={true}. */
  useEffect(() => {
    if (isStatic) return;
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
  }, [isStatic]);

  /* Pause auto-cycle during manual override */
  useEffect(() => {
    if (isStatic) return;
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
  }, [manualOverride, isStatic]);

  /* Manual click: override auto-cycle for 4s */
  const handleSegmentClick = useCallback((i) => {
    if (isStatic) return;
    setActiveIndex(i);
    setManualOverride(true);
    setShowTooltip(false);
    tooltipDismissed.current = true;
    if (overrideTimer.current) clearTimeout(overrideTimer.current);
    overrideTimer.current = setTimeout(() => setManualOverride(false), 4000);
  }, [isStatic]);

  /* Cleanup */
  useEffect(() => {
    return () => {
      if (overrideTimer.current) clearTimeout(overrideTimer.current);
    };
  }, []);

  const isMobileViewport = useMediaQuery("(max-width: 1023px)", false);
  /* In static mode (hero preview), always show the desktop layout with
     sidebar — it's a product screenshot, not an interactive component. */
  const isMobile = isStatic ? false : isMobileViewport;

  /* ── Segment switcher (shared between mobile & desktop) ── */
  const segmentSwitcher = (
    <div
      onMouseEnter={(e) => {
        if (!tooltipDismissed.current) {
          if (silverBtnRef.current) {
            const btn = silverBtnRef.current;
            const parent = btn.parentElement;
            if (parent) {
              const bRect = btn.getBoundingClientRect();
              const pRect = parent.getBoundingClientRect();
              setTooltipLeft(bRect.x + bRect.width / 2 - pRect.x);
            }
          }
          setShowTooltip(true);
        }
      }}
      onMouseLeave={() => setShowTooltip(false)}
      style={{
        display: "flex",
        alignItems: "center",
        padding: "8px 14px 8px 4px",
        borderBottom: isStatic ? "1px solid rgba(255,255,255,0.06)" : "none",
        position: "relative",
      }}
    >
      {SEGMENTS.map((s, i) => {
        const isActive = activeIndex === i;
        return (
          <button
            key={s.id}
            ref={i === 1 ? silverBtnRef : undefined}
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
      {/* Continuous progress line across full tab bar (hidden in static mode) */}
      {!isStatic && !manualOverride && (() => {
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
              height: "2px",
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
                  opacity: 0.6,
                  borderRadius: 0,
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
                opacity: 0.7,
                borderRadius: 0,
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
          textTransform: "uppercase",
        }}
      >
        {TOTAL_CLIENTS} clients
      </span>

      {/* Tooltip below segment bar, centered on Silver */}
      <AnimatePresence>
        {!isStatic && showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: -4, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -4, x: "-50%" }}
            transition={{ duration: 0.15 }}
            style={{
              position: "absolute",
              top: "calc(100% + 6px)",
              left: `${tooltipLeft}px`,
              pointerEvents: "none",
              zIndex: 200,
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
                left: "50%",
                marginLeft: "-4px",
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
      <div ref={containerRef} style={isStatic ? { height: "100%" } : undefined}>

        <div className={isStatic ? undefined : "interactive-hint"} style={{
          borderRadius: isStatic ? 0 : "12px",
          border: isStatic ? "none" : "1px solid rgba(255,255,255,0.08)",
          overflow: "hidden",
          boxShadow: isStatic ? "none" : `0 0 80px ${segment.accent}10, 0 4px 30px rgba(0,0,0,0.3)`,
          transition: "box-shadow 500ms ease",
          fontFamily: "'Inter', system-ui, sans-serif",
          height: isStatic ? "100%" : undefined,
          display: isStatic ? "flex" : undefined,
          flexDirection: isStatic ? "column" : undefined,
        }}>
          {!isStatic && segmentSwitcher}
          {/* Mobile app top bar */}
          {!isStatic && (
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
          )}

          {/* Content area — no sidebar */}
          <div style={{ backgroundColor: C.bg, padding: "20px 18px 18px", overflow: "hidden", flex: isStatic ? 1 : undefined }}>
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
                  color: C.textPrimary, fontFamily: "'Inter', system-ui, sans-serif",
                }}>{segment.greeting}</div>
                <div style={{
                  fontSize: "12px", color: C.textSecondary,
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
                    background: isStatic ? (C.bannerBg ?? seg.bannerGradient) : (seg.bannerGradient || seg.bannerBg),
                    opacity: seg.id === segment.id ? 1 : 0,
                    transition: "opacity 600ms ease",
                  }}
                />
              ))}
            </div>

            {/* Actions card */}
            <div style={{
              marginTop: "14px", borderRadius: "8px",
              border: `1px solid ${C.cardBorder}`,
              backgroundColor: C.cardBg, padding: "16px",
            }}>
              <div style={{
                fontSize: "14px", fontWeight: 500, color: C.textPrimary,
                fontFamily: "'Inter', system-ui, sans-serif", marginBottom: "3px",
              }}>Your actions</div>
              <div style={{
                fontSize: "12px", color: C.textSecondary,
                fontFamily: "'Inter', system-ui, sans-serif", marginBottom: "10px",
              }}>You have {segment.actionCards.reduce((sum, c) => sum + c.count, 0)} pending items</div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {segment.actionCards.slice(0, 2).map((card) => (
                  <ActionCard key={card.label} iconSrc={ICO[card.icon]} label={card.label} count={card.count} unit={card.unit} colors={C} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── Desktop: full layout with sidebar ── */
  return (
    <div ref={containerRef} style={{ position: "relative", ...(isStatic ? { height: "100%" } : {}) }}>

      {/* ── Portal preview container ── */}
      <motion.div
        className={isStatic ? undefined : "interactive-hint"}
        style={{
          borderRadius: isStatic ? 0 : "12px",
          border: isStatic ? "none" : "1px solid rgba(255,255,255,0.08)",
          overflow: "hidden",
          boxShadow: isStatic ? "none" : `0 0 80px ${segment.accent}10, 0 4px 30px rgba(0,0,0,0.3)`,
          transition: "box-shadow 500ms ease",
          height: isStatic ? "100%" : undefined,
        }}
      >
        {!isStatic && segmentSwitcher}

        {/* Browser chrome */}
        {!isStatic && (
          <div style={{
            position: "relative", display: "flex", alignItems: "center",
            backgroundColor: "#141414", padding: "12px 16px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
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
        )}

        {/* Portal layout: sidebar + content */}
        <div style={{ display: "flex", height: isStatic ? "100%" : (inSplit ? "640px" : "640px"), overflow: "hidden" }}>

          {/* ── Sidebar ── */}
          <div style={{
            width: inSplit ? "150px" : "175px", flexShrink: 0,
            backgroundColor: isStatic ? C.sidebarBg : segment.sidebarBg,
            borderRight: isStatic ? "1px solid rgba(255, 255, 255, 0.08)" : "none",
            padding: "10px 0",
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
              {segment.navItems.map((item) => (
                <NavItem
                  key={item.label}
                  iconSrc={ICO[item.icon]}
                  label={item.label}
                  active={item.active}
                  badge={item.badge}
                  segment={segment}
                />
              ))}
            </div>
          </div>

          {/* ── Content area ── */}
          <div style={{
            flex: 1, backgroundColor: C.bg,
            overflow: "hidden",
            display: "flex", flexDirection: "column",
          }}>
            {/* Top breadcrumb */}
            <div style={{
              padding: inSplit ? "8px 14px" : "8px 18px", fontSize: "12px", fontWeight: 500,
              color: C.textSecondary, fontFamily: "'Inter', system-ui, sans-serif",
              borderBottom: `1px solid ${C.cardBorder}`,
            }}>Home</div>

            <div style={{ flex: 1, padding: inSplit ? "14px 14px 24px" : "18px 18px 30px", overflow: "hidden" }}>
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
                        color: C.textPrimary, fontFamily: "'Inter', system-ui, sans-serif",
                      }}>{segment.greeting}</div>
                      <div style={{
                        fontSize: "12px", color: C.textSecondary,
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
                          background: isStatic ? (C.bannerBg ?? seg.bannerGradient) : (seg.bannerGradient || seg.bannerBg),
                          opacity: seg.id === segment.id ? 1 : 0,
                          transition: "opacity 600ms ease",
                        }}
                      />
                    ))}
                  </div>

                  {/* Actions card — fixed across all segments */}
                  <div style={{
                    marginTop: "14px", borderRadius: "8px",
                    border: `1px solid ${C.cardBorder}`,
                    backgroundColor: C.cardBg, padding: inSplit ? "10px" : "16px",
                  }}>
                    <div style={{
                      fontSize: "14px", fontWeight: 500, color: C.textPrimary,
                      fontFamily: "'Inter', system-ui, sans-serif", marginBottom: "3px",
                    }}>Your actions</div>
                    <div style={{
                      fontSize: "12px", color: C.textSecondary,
                      fontFamily: "'Inter', system-ui, sans-serif", marginBottom: "10px",
                    }}>You have {segment.actionCards.reduce((sum, c) => sum + c.count, 0)} pending items</div>

                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      {segment.actionCards.map((card) => (
                        <ActionCard key={card.label} iconSrc={ICO[card.icon]} label={card.label} count={card.count} unit={card.unit} colors={C} />
                      ))}
                    </div>
                  </div>

                  {/* Bottom section — table for each segment with different content */}
                  <div style={{ marginTop: "14px" }}>
                    <div style={{ fontSize: "12px", fontWeight: 500, color: C.textPrimary, fontFamily: "'Inter', system-ui, sans-serif", marginBottom: "4px" }}>{segment.bottomTitle}</div>
                    <div style={{ fontSize: "10px", lineHeight: 1.5, color: C.textSecondary, fontFamily: "'Inter', system-ui, sans-serif", marginBottom: "10px" }}>
                      {segment.bottomSubtitle}
                    </div>
                    <div style={{ border: `1px solid ${C.tableBorder}`, borderRadius: "6px", overflow: "hidden" }}>
                      <table style={{ borderCollapse: "collapse", fontSize: "10px", fontFamily: "'Inter', system-ui, sans-serif", width: "100%" }}>
                        <thead>
                          <tr style={{ backgroundColor: C.tableHeaderBg }}>
                            {segment.tableHeaders.map((h) => (
                              <td key={h} style={{ padding: "6px 10px", color: C.textSecondary, borderBottom: `1px solid ${C.tableBorder}`, fontWeight: 500 }}>{h}</td>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {segment.tableRows.map((row, i) => (
                            <tr key={i}>
                              {row.map((cell, j) => (
                                <td key={j} style={{ padding: "6px 10px", color: C.textSecondary, ...(i < segment.tableRows.length - 1 ? { borderBottom: `1px solid ${C.tableRowBorder}` } : {}) }}>{cell}</td>
                              ))}
                            </tr>
                          ))}
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
