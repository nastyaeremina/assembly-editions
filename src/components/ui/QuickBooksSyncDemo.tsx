"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

/* ──────────────────────────────────────────────────────────
   QUICKBOOKS & XERO SYNC DEMO  —  v3 redesign
   Structured grid layout · premium connectors · depth layers
   Assembly is the hub on the left, QB + Xero stack on the right.
   ────────────────────────────────────────────────────────── */

/* ── Design tokens ── */
const C = {
  canvasBg: "rgba(250,250,248,0.6)",
  canvasBorder: "rgba(0,0,0,0.06)",
  cardBg: "#ffffff",
  cardBgInactive: "#fafafa",
  border: "#e5e7eb",
  borderLight: "#f0f0f0",
  text: "#18181b",
  textSec: "#6b7280",
  textMuted: "#9ca3af",
  green: "#16a34a",
  greenGlow: "rgba(22,163,74,0.12)",
  line: "#c4c9d2",
  lineActive: "#94a3b8",
  lineDashed: "#d4d8e0",
  port: "#94a3b8",
  portFill: "#f8fafc",
  portActive: "#64748b",
  dot: "#64748b",
} as const;

/* ── Layout constants ── */
const CANVAS_H = 360;
const CARD_W = 210;
const GAP = 120; // horizontal gap between hub and targets

/* ── Smooth bezier helper ── */
function bezierH(fx: number, fy: number, tx: number, ty: number): string {
  const cp = Math.abs(tx - fx) * 0.45;
  return `M${fx},${fy} C${fx + cp},${fy} ${tx - cp},${ty} ${tx},${ty}`;
}

/* ── Node data ── */
interface NodeRow {
  label: string;
  value: string;
  valueConnected?: string;
}
interface NodeDef {
  id: string;
  icon: string;
  title: string;
  rows: NodeRow[];
  status?: { connected: string; disconnected: string };
}

const ASSEMBLY: NodeDef = {
  id: "assembly",
  icon: "/Icons/AvatarBlack.svg",
  title: "Assembly",
  rows: [
    { label: "Clients", value: "847" },
    { label: "Invoices", value: "156" },
    { label: "Payments", value: "89" },
  ],
};
const QB: NodeDef = {
  id: "qb",
  icon: "/Icons/QB.svg",
  title: "QuickBooks",
  rows: [
    { label: "Invoices synced", value: "156" },
    { label: "Payments synced", value: "89" },
  ],
  status: { connected: "Connected", disconnected: "Connected" },
};
const XERO: NodeDef = {
  id: "xero",
  icon: "/Icons/Xerosq.svg",
  title: "Xero",
  rows: [
    { label: "Contacts", value: "—", valueConnected: "89" },
    { label: "Records", value: "—", valueConnected: "67" },
  ],
  status: { connected: "Connected", disconnected: "Not connected" },
};

/* ══════════════════════════════════════════
   CARD
   ══════════════════════════════════════════ */
function Card({
  node,
  connected,
  primary,
  nodeRef,
  anim,
  delay = 0,
  inView,
  onClick,
  clickable,
  justConnected,
}: {
  node: NodeDef;
  connected: boolean;
  primary?: boolean;
  nodeRef?: React.Ref<HTMLDivElement>;
  anim?: boolean;
  delay?: number;
  inView: boolean;
  onClick?: () => void;
  clickable?: boolean;
  justConnected?: boolean;
}) {
  const statusText = node.status
    ? connected
      ? node.status.connected
      : node.status.disconnected
    : null;
  const statusColor = connected ? C.green : C.textMuted;

  return (
    <motion.div
      ref={nodeRef}
      initial={anim ? { opacity: 0, y: 12 } : undefined}
      animate={anim && inView ? { opacity: 1, y: 0 } : undefined}
      transition={anim ? { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] } : undefined}
      onClick={onClick}
      whileHover={
        clickable
          ? { scale: 1.015, boxShadow: "0 6px 20px rgba(0,0,0,0.08)" }
          : undefined
      }
      whileTap={clickable ? { scale: 0.985 } : undefined}
      style={{
        width: CARD_W,
        flexShrink: 0,
        border: `1px solid ${connected || primary ? C.border : C.lineDashed}`,
        borderRadius: 10,
        backgroundColor: connected || primary ? C.cardBg : C.cardBgInactive,
        boxShadow: primary
          ? "0 2px 8px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.03)"
          : connected
            ? "0 1px 4px rgba(0,0,0,0.04)"
            : "0 1px 2px rgba(0,0,0,0.03)",
        overflow: "hidden",
        cursor: clickable ? "pointer" : "default",
        transition: "border-color 0.3s, box-shadow 0.3s, background-color 0.3s",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 14px",
          borderBottom: `1px solid ${C.borderLight}`,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={node.icon}
          alt=""
          width={22}
          height={22}
          draggable={false}
          style={{ borderRadius: 5, flexShrink: 0 }}
        />
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: C.text,
            flex: 1,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {node.title}
        </span>
        <span style={{ fontSize: 14, color: C.textMuted, lineHeight: 1, letterSpacing: 1 }}>
          ···
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: "6px 14px 10px" }}>
        {node.rows.map((r, i) => {
          const val = connected && r.valueConnected ? r.valueConnected : r.value;
          return (
            <div
              key={r.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "4px 0",
              }}
            >
              <span style={{ fontSize: 11, color: C.textSec }}>{r.label}</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={val}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{
                    duration: 0.3,
                    delay: justConnected ? i * 0.12 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    color: val === "—" ? C.textMuted : C.text,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {val}
                </motion.span>
              </AnimatePresence>
            </div>
          );
        })}

        {/* Status */}
        {statusText && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              paddingTop: 6,
              marginTop: 4,
              borderTop: `1px solid ${C.borderLight}`,
            }}
          >
            <motion.div
              animate={
                justConnected
                  ? { scale: [1, 1.5, 1], opacity: [0, 1, 1] }
                  : { scale: 1, opacity: connected ? 1 : 0.5 }
              }
              transition={justConnected ? { duration: 0.5, delay: 0.25 } : { duration: 0.2 }}
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: statusColor,
              }}
            />
            <AnimatePresence mode="wait">
              <motion.span
                key={statusText}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 4 }}
                transition={{
                  duration: 0.3,
                  delay: justConnected ? 0.35 : 0,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ fontSize: 10, fontWeight: 500, color: statusColor }}
              >
                {statusText}
              </motion.span>
            </AnimatePresence>
          </div>
        )}

        {/* Click hint */}
        {clickable && !connected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.4 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 8,
              marginTop: 4,
              borderTop: `1px solid ${C.borderLight}`,
            }}
          >
            <span style={{ fontSize: 10, color: C.textMuted, fontWeight: 500 }}>
              Click to connect
            </span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   SYNC PULSE – glowing dot with soft trail
   Uses a group: trailing gradient ellipse + bright core dot
   ══════════════════════════════════════════ */
function SyncPulse({ id, path, dur = "3s", delay = "0s" }: {
  id: string;
  path: string;
  dur?: string;
  delay?: string;
}) {
  return (
    <g>
      {/* Soft glow halo */}
      <circle r={8} fill={`url(#${id}-glow)`} opacity={0}>
        <animateMotion dur={dur} repeatCount="indefinite" begin={delay} path={path} rotate="auto" />
        <animate attributeName="opacity" values="0;0.5;0.5;0" keyTimes="0;0.1;0.85;1" dur={dur} repeatCount="indefinite" begin={delay} />
      </circle>
      {/* Core dot */}
      <circle r={2.5} fill="#64748b" opacity={0}>
        <animateMotion dur={dur} repeatCount="indefinite" begin={delay} path={path} rotate="auto" />
        <animate attributeName="opacity" values="0;0.9;0.9;0" keyTimes="0;0.08;0.88;1" dur={dur} repeatCount="indefinite" begin={delay} />
      </circle>
    </g>
  );
}

/* ══════════════════════════════════════════
   MOBILE STATIC
   ══════════════════════════════════════════ */
function MobileStaticView() {
  const items = [
    { icon: "/Icons/AvatarBlack.svg", label: "Assembly", sub: "847 clients, 156 invoices" },
    { icon: "/Icons/QB.svg", label: "QuickBooks", sub: "156 invoices, 89 payments synced" },
    { icon: "/Icons/Xerosq.svg", label: "Xero", sub: "89 contacts, 67 records synced" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        width: "100%",
        borderRadius: 12,
        border: `1px solid ${C.border}`,
        backgroundColor: C.cardBg,
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        fontFamily: "'Inter', system-ui, sans-serif",
        overflow: "hidden",
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      {items.map((item) => (
        <div
          key={item.label}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "12px 14px",
            border: `1px solid ${C.border}`,
            borderRadius: 8,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.icon}
            alt=""
            width={28}
            height={28}
            draggable={false}
            style={{ borderRadius: 7, flexShrink: 0 }}
          />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 500, color: C.text }}>{item.label}</div>
            <div style={{ fontSize: 10, color: C.textSec, marginTop: 2 }}>{item.sub}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 5, flexShrink: 0 }}>
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: C.green,
              }}
            />
            <span style={{ fontSize: 10, color: C.green, fontWeight: 500 }}>Connected</span>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════ */
export function QuickBooksSyncDemo({ inSplit = false }: { inSplit?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });
  const isDesktop = useMediaQuery("(min-width: 1024px)", true);

  const [xeroConnected, setXeroConnected] = useState(false);
  const [justConnected, setJustConnected] = useState(false);

  const assemblyRef = useRef<HTMLDivElement>(null);
  const qbRef = useRef<HTMLDivElement>(null);
  const xeroRef = useRef<HTMLDivElement>(null);

  /* ── Line endpoints ── */
  interface LP {
    aR_x: number; aR_y: number;
    qbL_x: number; qbL_y: number;
    aR2_x: number; aR2_y: number;
    xL_x: number; xL_y: number;
  }
  const [lp, setLp] = useState<LP | null>(null);

  const measure = useCallback(() => {
    const cv = canvasRef.current;
    const a = assemblyRef.current;
    const q = qbRef.current;
    const x = xeroRef.current;
    if (!cv || !a || !q || !x) return;
    const cr = cv.getBoundingClientRect();
    const ar = a.getBoundingClientRect();
    const qr = q.getBoundingClientRect();
    const xr = x.getBoundingClientRect();

    setLp({
      // Assembly right edge → QB left edge
      aR_x: ar.right - cr.left,
      aR_y: ar.top - cr.top + ar.height * 0.45,
      qbL_x: qr.left - cr.left,
      qbL_y: qr.top - cr.top + qr.height * 0.45,
      // Assembly right edge → Xero left edge
      aR2_x: ar.right - cr.left,
      aR2_y: ar.top - cr.top + ar.height * 0.7,
      xL_x: xr.left - cr.left,
      xL_y: xr.top - cr.top + xr.height * 0.45,
    });
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(() => measure());
    if (canvasRef.current) ro.observe(canvasRef.current);
    return () => ro.disconnect();
  }, [measure]);

  const handleConnect = useCallback(() => {
    if (xeroConnected) return;
    setXeroConnected(true);
    setJustConnected(true);
    setTimeout(() => setJustConnected(false), 1200);
  }, [xeroConnected]);

  if (!isDesktop) return <MobileStaticView />;
  void inSplit;

  /* ── Paths for SVG ── */
  const pathAQ = lp ? bezierH(lp.aR_x, lp.aR_y, lp.qbL_x, lp.qbL_y) : "";
  const pathAX = lp ? bezierH(lp.aR2_x, lp.aR2_y, lp.xL_x, lp.xL_y) : "";

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      {/* Canvas wrapper — full width, no background */}
      <div
        ref={canvasRef}
        style={{
          position: "relative",
          width: "100%",
          height: CANVAS_H,
          fontFamily: "'Inter', system-ui, sans-serif",
          overflow: "visible",
        }}
      >
        {/* ─── SVG connectors layer ─── */}
        {lp && (
          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 1,
              overflow: "visible",
            }}
          >
            <defs>
              {/* Gradient for active line */}
              <linearGradient id="grad-aq" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#64748b" />
              </linearGradient>
              {/* Glow filter for active connection line */}
              <filter id="glow-line" x="-20%" y="-50%" width="140%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {/* Radial glow for sync pulse dots */}
              <radialGradient id="pulse-aq-glow">
                <stop offset="0%" stopColor="#64748b" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#64748b" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="pulse-ax-glow">
                <stop offset="0%" stopColor="#64748b" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#64748b" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* ── Assembly → QB (always active) ── */}
            {/* Glow shadow */}
            <path
              d={pathAQ}
              stroke="rgba(100,116,139,0.12)"
              strokeWidth={6}
              fill="none"
              strokeLinecap="round"
              filter="url(#glow-line)"
            />
            {/* Main line */}
            <path
              d={pathAQ}
              stroke="url(#grad-aq)"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
            />
            {/* Port dots */}
            <circle cx={lp.aR_x} cy={lp.aR_y} r={4.5}
              fill={C.portFill} stroke={C.portActive} strokeWidth={1.5} />
            <circle cx={lp.qbL_x} cy={lp.qbL_y} r={4.5}
              fill={C.portFill} stroke={C.portActive} strokeWidth={1.5} />
            {/* Sync pulses — two staggered for continuous flow */}
            <SyncPulse id="pulse-aq" path={pathAQ} dur="3.5s" delay="0s" />
            <SyncPulse id="pulse-aq" path={pathAQ} dur="3.5s" delay="1.75s" />

            {/* ── Assembly → Xero ── */}
            {xeroConnected ? (
              <>
                {/* Glow */}
                <motion.path
                  d={pathAX}
                  stroke="rgba(100,116,139,0.10)"
                  strokeWidth={6}
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
                {/* Main line */}
                <motion.path
                  d={pathAX}
                  stroke="url(#grad-aq)"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
                {/* Ports */}
                <motion.circle
                  cx={lp.aR2_x} cy={lp.aR2_y} r={4.5}
                  fill={C.portFill} stroke={C.portActive} strokeWidth={1.5}
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  transition={{ duration: 0.25 }}
                />
                <motion.circle
                  cx={lp.xL_x} cy={lp.xL_y} r={4.5}
                  fill={C.portFill} stroke={C.portActive} strokeWidth={1.5}
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  transition={{ duration: 0.25, delay: 0.5 }}
                />
                {/* Sync pulses */}
                <SyncPulse id="pulse-ax" path={pathAX} dur="3.8s" delay="0.5s" />
                <SyncPulse id="pulse-ax" path={pathAX} dur="3.8s" delay="2.4s" />
              </>
            ) : (
              <>
                {/* Dashed preview line */}
                <path
                  d={pathAX}
                  stroke={C.lineDashed}
                  strokeWidth={1.5}
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="6 6"
                  opacity={0.6}
                />
                {/* Muted ports */}
                <circle cx={lp.aR2_x} cy={lp.aR2_y} r={4}
                  fill="#fff" stroke={C.lineDashed} strokeWidth={1.5} />
                <circle cx={lp.xL_x} cy={lp.xL_y} r={4}
                  fill="#fff" stroke={C.lineDashed} strokeWidth={1.5}
                  strokeDasharray="3 3" />
              </>
            )}
          </svg>
        )}

        {/* ─── Card layout: flex row with Assembly left, QB+Xero stacked right ─── */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            padding: "28px 28px",
            gap: GAP,
          }}
        >
          {/* Hub: Assembly */}
          <Card
            node={ASSEMBLY}
            connected={true}
            primary
            nodeRef={assemblyRef}
            anim
            delay={0.1}
            inView={isInView}
          />

          {/* Targets: QB + Xero stacked */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              flexShrink: 0,
            }}
          >
            <Card
              node={QB}
              connected={true}
              nodeRef={qbRef}
              anim
              delay={0.25}
              inView={isInView}
            />
            <Card
              node={XERO}
              connected={xeroConnected}
              nodeRef={xeroRef}
              anim
              delay={0.38}
              inView={isInView}
              onClick={handleConnect}
              clickable={!xeroConnected}
              justConnected={justConnected}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
