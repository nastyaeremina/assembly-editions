"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

/* ──────────────────────────────────────────────────────────
   QUICKBOOKS & XERO SYNC DEMO
   Node-editor workflow canvas with 3 integration cards.
   Assembly→QB always connected. Click Xero card to connect.
   ────────────────────────────────────────────────────────── */

const C = {
  canvasBg: "#fafafa",
  cardBg: "#ffffff",
  border: "#e5e7eb",
  borderLight: "#f0f0f0",
  text: "#18181b",
  textSec: "#6b7280",
  textMuted: "#9ca3af",
  green: "#16a34a",
  line: "#d4d4d8",
  lineDashed: "#e5e7eb",
} as const;

/* ── Bezier path helpers ── */
function bezierPathH(fx: number, fy: number, tx: number, ty: number): string {
  const dx = Math.abs(tx - fx);
  const cp = Math.max(40, dx * 0.45);
  return `M ${fx} ${fy} C ${fx + cp} ${fy}, ${tx - cp} ${ty}, ${tx} ${ty}`;
}
function bezierPathV(fx: number, fy: number, tx: number, ty: number): string {
  const dy = Math.abs(ty - fy);
  const cp = Math.max(20, dy * 0.45);
  return `M ${fx} ${fy} C ${fx} ${fy + cp}, ${tx} ${ty - cp}, ${tx} ${ty}`;
}

/* ── Node card data ── */
interface NodeDef {
  id: string;
  icon: string;
  title: string;
  rows: { label: string; value: string; valueConnected?: string }[];
  status?: { connected: string; disconnected: string };
}

const ASSEMBLY_NODE: NodeDef = {
  id: "assembly",
  icon: "/Icons/AvatarBlack.svg",
  title: "Assembly",
  rows: [
    { label: "Clients", value: "847" },
    { label: "Invoices", value: "156" },
    { label: "Payments", value: "89" },
  ],
};

const QB_NODE: NodeDef = {
  id: "qb",
  icon: "/Icons/QB.svg",
  title: "QuickBooks",
  rows: [
    { label: "Invoices synced", value: "156" },
    { label: "Payments synced", value: "89" },
  ],
  status: { connected: "Connected", disconnected: "Connected" },
};

const XERO_NODE: NodeDef = {
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
   NODE CARD COMPONENT
   ══════════════════════════════════════════ */
function NodeCard({
  node,
  isConnected,
  style,
  nodeRef,
  animate: shouldAnimate,
  delay = 0,
  isInView,
  onClick,
  clickable,
  justConnected,
}: {
  node: NodeDef;
  isConnected: boolean;
  style: React.CSSProperties;
  nodeRef?: React.Ref<HTMLDivElement>;
  animate?: boolean;
  delay?: number;
  isInView: boolean;
  onClick?: () => void;
  clickable?: boolean;
  justConnected?: boolean;
}) {
  const statusText = node.status
    ? isConnected
      ? node.status.connected
      : node.status.disconnected
    : null;
  const statusColor = isConnected ? C.green : C.textMuted;

  return (
    <motion.div
      ref={nodeRef}
      initial={shouldAnimate ? { opacity: 0, y: 14 } : undefined}
      animate={shouldAnimate && isInView ? { opacity: 1, y: 0 } : undefined}
      transition={shouldAnimate ? { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] } : undefined}
      onClick={onClick}
      whileHover={clickable ? { scale: 1.02, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" } : undefined}
      whileTap={clickable ? { scale: 0.98 } : undefined}
      style={{
        position: "absolute",
        width: 220,
        border: `1.5px solid ${clickable ? C.lineDashed : C.border}`,
        borderRadius: "8px",
        backgroundColor: C.cardBg,
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        overflow: "hidden",
        cursor: clickable ? "pointer" : "default",
        transition: "border-color 0.3s ease",
        ...style,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 14px",
          borderBottom: `1px solid ${C.borderLight}`,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={node.icon}
          alt={node.title}
          width={22}
          height={22}
          draggable={false}
          style={{ borderRadius: "5px", flexShrink: 0 }}
        />
        <span
          style={{
            fontSize: "12px",
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
        <span
          style={{
            fontSize: "14px",
            color: C.textMuted,
            lineHeight: 1,
            letterSpacing: "1px",
            cursor: "default",
          }}
        >
          ···
        </span>
      </div>

      {/* Body rows */}
      <div style={{ padding: "6px 14px 8px" }}>
        {node.rows.map((row, i) => {
          const val = isConnected && row.valueConnected ? row.valueConnected : row.value;
          return (
            <div
              key={row.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "4px 0",
              }}
            >
              <span style={{ fontSize: "11px", color: C.textSec }}>{row.label}</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={val}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{
                    duration: 0.35,
                    delay: justConnected ? i * 0.15 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    fontSize: "11px",
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

        {/* Status row */}
        {statusText && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              paddingTop: "6px",
              marginTop: "4px",
              borderTop: `1px solid ${C.borderLight}`,
            }}
          >
            <motion.div
              animate={
                justConnected
                  ? { scale: [1, 1.6, 1], opacity: [0, 1, 1] }
                  : { scale: 1, opacity: isConnected ? 1 : 0.5 }
              }
              transition={justConnected ? { duration: 0.5, delay: 0.3 } : { duration: 0.2 }}
              style={{
                width: "6px",
                height: "6px",
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
                  duration: 0.35,
                  delay: justConnected ? 0.4 : 0,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  fontSize: "10px",
                  fontWeight: 500,
                  color: statusColor,
                }}
              >
                {statusText}
              </motion.span>
            </AnimatePresence>
          </div>
        )}

        {/* Click hint for unconnected clickable cards */}
        {clickable && !isConnected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.4 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
              paddingTop: "8px",
              marginTop: "4px",
              borderTop: `1px solid ${C.borderLight}`,
            }}
          >
            <span style={{ fontSize: "10px", color: C.textMuted, fontWeight: 500 }}>
              Click to connect
            </span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   MOBILE STATIC VIEW
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
        borderRadius: "12px",
        border: `1px solid ${C.border}`,
        backgroundColor: C.cardBg,
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        fontFamily: "'Inter', system-ui, sans-serif",
        overflow: "hidden",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      {items.map((item) => (
        <div
          key={item.label}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 14px",
            border: `1px solid ${C.border}`,
            borderRadius: "8px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.icon} alt={item.label} width={28} height={28} draggable={false}
            style={{ borderRadius: "7px", flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: "12px", fontWeight: 500, color: C.text }}>{item.label}</div>
            <div style={{ fontSize: "10px", color: C.textSec, marginTop: "2px" }}>{item.sub}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "5px", flexShrink: 0 }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: C.green }} />
            <span style={{ fontSize: "10px", color: C.green, fontWeight: 500 }}>Connected</span>
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

  /* Node refs for line measurement */
  const assemblyRef = useRef<HTMLDivElement>(null);
  const qbRef = useRef<HTMLDivElement>(null);
  const xeroRef = useRef<HTMLDivElement>(null);

  interface LinePositions {
    aRightX: number; aRightY: number;
    qbLeftX: number; qbLeftY: number;
    qbBottomX: number; qbBottomY: number;
    xTopX: number; xTopY: number;
  }
  const [lines, setLines] = useState<LinePositions | null>(null);

  /* ── Measure line endpoints (midpoints of card edges, no port circles) ── */
  const measure = useCallback(() => {
    if (!canvasRef.current || !assemblyRef.current || !qbRef.current || !xeroRef.current) return;
    const cr = canvasRef.current.getBoundingClientRect();
    const ar = assemblyRef.current.getBoundingClientRect();
    const qr = qbRef.current.getBoundingClientRect();
    const xr = xeroRef.current.getBoundingClientRect();

    setLines({
      aRightX: ar.right - cr.left,
      aRightY: ar.top - cr.top + ar.height * 0.45,
      qbLeftX: qr.left - cr.left,
      qbLeftY: qr.top - cr.top + qr.height * 0.45,
      qbBottomX: qr.left - cr.left + qr.width * 0.5,
      qbBottomY: qr.bottom - cr.top,
      xTopX: xr.left - cr.left + xr.width * 0.5,
      xTopY: xr.top - cr.top,
    });
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(() => measure());
    if (canvasRef.current) ro.observe(canvasRef.current);
    return () => ro.disconnect();
  }, [measure]);

  /* ── Connect handler ── */
  const handleConnect = useCallback(() => {
    if (xeroConnected) return;
    setXeroConnected(true);
    setJustConnected(true);
    // Clear justConnected after animations complete
    setTimeout(() => setJustConnected(false), 1200);
  }, [xeroConnected]);

  /* ── Mobile ── */
  if (!isDesktop) return <MobileStaticView />;

  void inSplit;
  const lp = lines;
  const CANVAS_H = 420;

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ width: "100%" }}
    >
      <div
        ref={canvasRef}
        style={{
          position: "relative",
          width: "100%",
          height: CANVAS_H,
          borderRadius: "12px",
          backgroundColor: "transparent",
          fontFamily: "'Inter', system-ui, sans-serif",
          overflow: "hidden",
        }}
      >
        {/* ── Node cards ── */}
        <NodeCard
          node={ASSEMBLY_NODE}
          isConnected={true}
          nodeRef={assemblyRef}
          animate
          delay={0.15}
          isInView={isInView}
          style={{ left: 0, top: 24 }}
        />
        <NodeCard
          node={QB_NODE}
          isConnected={true}
          nodeRef={qbRef}
          animate
          delay={0.3}
          isInView={isInView}
          style={{ right: 0, top: 24 }}
        />
        <NodeCard
          node={XERO_NODE}
          isConnected={xeroConnected}
          nodeRef={xeroRef}
          animate
          delay={0.42}
          isInView={isInView}
          onClick={handleConnect}
          clickable={!xeroConnected}
          justConnected={justConnected}
          style={{ right: "20%", bottom: 24 }}
        />

        {/* ─── SVG overlay: connection lines (no port circles) ─── */}
        {lp && (
          <svg
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 5,
            }}
          >
            {/* Assembly → QB: always connected */}
            <path
              d={bezierPathH(lp.aRightX, lp.aRightY, lp.qbLeftX, lp.qbLeftY)}
              stroke={C.line}
              strokeWidth={1.5}
              fill="none"
              strokeLinecap="round"
            />

            {/* QB → Xero: animated on connect */}
            {xeroConnected ? (
              <motion.path
                d={bezierPathV(lp.qbBottomX, lp.qbBottomY, lp.xTopX, lp.xTopY)}
                stroke={C.line}
                strokeWidth={1.5}
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            ) : (
              <path
                d={bezierPathV(lp.qbBottomX, lp.qbBottomY, lp.xTopX, lp.xTopY)}
                stroke={C.lineDashed}
                strokeWidth={1}
                fill="none"
                strokeLinecap="round"
                strokeDasharray="4 6"
                opacity={0.5}
              />
            )}
          </svg>
        )}
      </div>
    </motion.div>
  );
}
