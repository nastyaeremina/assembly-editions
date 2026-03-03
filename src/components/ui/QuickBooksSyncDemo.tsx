"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useIdleHint } from "@/hooks/useIdleHint";

/* ──────────────────────────────────────────────────────────
   QUICKBOOKS & XERO SYNC DEMO
   Node-editor workflow canvas with 3 integration cards
   connected by bezier curves. Drag from QB output port
   to Xero input port to connect.
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
  line: "#18181b",
  lineDashed: "#d4d4d8",
  portStroke: "#18181b",
  portFill: "#ffffff",
} as const;

/* ── Drag state ── */
interface DragState {
  fromX: number;
  fromY: number;
  mouseX: number;
  mouseY: number;
}

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
  animate,
  delay = 0,
  isInView,
}: {
  node: NodeDef;
  isConnected: boolean;
  style: React.CSSProperties;
  nodeRef?: React.Ref<HTMLDivElement>;
  animate?: boolean;
  delay?: number;
  isInView: boolean;
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
      initial={animate ? { opacity: 0, y: 14 } : undefined}
      animate={animate && isInView ? { opacity: 1, y: 0 } : undefined}
      transition={animate ? { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] } : undefined}
      style={{
        position: "absolute",
        width: 220,
        border: `1.5px solid ${C.border}`,
        borderRadius: "8px",
        backgroundColor: C.cardBg,
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        overflow: "hidden",
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
        {node.rows.map((row) => {
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
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
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: statusColor,
                opacity: isConnected ? 1 : 0.5,
              }}
            />
            <AnimatePresence mode="wait">
              <motion.span
                key={statusText}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
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
  const [drag, setDrag] = useState<DragState | null>(null);
  const tooltipDone = useRef(false);
  const [showTooltip, setShowTooltip] = useState(false);

  /* Node refs for port measurement */
  const assemblyRef = useRef<HTMLDivElement>(null);
  const qbRef = useRef<HTMLDivElement>(null);
  const xeroRef = useRef<HTMLDivElement>(null);

  interface PortPositions {
    aOutQBX: number; aOutQBY: number;   // Assembly right port → QB
    aOutXeroX: number; aOutXeroY: number; // Assembly right port → Xero
    qbInX: number; qbInY: number;       // QB left port
    xInX: number; xInY: number;         // Xero left port
  }
  const [ports, setPorts] = useState<PortPositions | null>(null);

  /* Idle pulse */
  const { containerRef: idleRef, isIdle: portIdleActive, dismiss: dismissIdle } = useIdleHint({ delay: 3000 });

  /* Show tooltip after idle kicks in */
  useEffect(() => {
    if (portIdleActive && !xeroConnected && !tooltipDone.current) {
      setShowTooltip(true);
    }
  }, [portIdleActive, xeroConnected]);

  /* ── Measure port positions ── */
  const measure = useCallback(() => {
    if (!canvasRef.current || !assemblyRef.current || !qbRef.current || !xeroRef.current) return;
    const cr = canvasRef.current.getBoundingClientRect();
    const ar = assemblyRef.current.getBoundingClientRect();
    const qr = qbRef.current.getBoundingClientRect();
    const xr = xeroRef.current.getBoundingClientRect();

    const qbInY = qr.top - cr.top + qr.height * 0.45;
    const xInY = xr.top - cr.top + xr.height * 0.45;

    setPorts({
      aOutQBX: ar.right - cr.left,
      aOutQBY: ar.top - cr.top + ar.height * 0.35,   // upper portion of Assembly card
      aOutXeroX: ar.right - cr.left,
      aOutXeroY: ar.top - cr.top + ar.height * 0.65,  // lower portion of Assembly card
      qbInX: qr.left - cr.left,
      qbInY,
      xInX: xr.left - cr.left,
      xInY,
    });
  }, []);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(() => measure());
    if (canvasRef.current) ro.observe(canvasRef.current);
    return () => ro.disconnect();
  }, [measure]);

  /* ── Drag handlers ── */
  const handleDragStart = useCallback(
    (pos: { x: number; y: number }) => {
      if (xeroConnected) return;
      setDrag({ fromX: pos.x, fromY: pos.y, mouseX: pos.x, mouseY: pos.y });
    },
    [xeroConnected]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!drag || !canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      setDrag((prev) =>
        prev ? { ...prev, mouseX: e.clientX - rect.left, mouseY: e.clientY - rect.top } : null
      );
    },
    [drag]
  );

  const handleMouseUp = useCallback(() => setDrag(null), []);

  const handleXeroDrop = useCallback(() => {
    if (!drag) return;
    setXeroConnected(true);
    setDrag(null);
  }, [drag]);

  useEffect(() => {
    if (drag) {
      setShowTooltip(false);
      tooltipDone.current = true;
      dismissIdle();
    }
  }, [drag, dismissIdle]);

  useEffect(() => {
    if (!drag) return;
    const handler = () => setDrag(null);
    window.addEventListener("mouseup", handler);
    return () => window.removeEventListener("mouseup", handler);
  }, [drag]);

  /* ── Mobile ── */
  if (!isDesktop) return <MobileStaticView />;

  void inSplit;
  const pp = ports;
  const CANVAS_H = 400;

  /* ── Port circle SVG helper ── */
  const portCircle = (cx: number, cy: number, key: string) => (
    <circle
      key={key}
      cx={cx}
      cy={cy}
      r={5}
      fill={C.portFill}
      stroke={C.portStroke}
      strokeWidth={1.5}
    />
  );

  return (
    <motion.div
      ref={(el) => {
        (idleRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
        (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }}
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ width: "100%" }}
    >
      {/* ─── Canvas (no browser chrome) ─── */}
      <div
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{
          position: "relative",
          width: "100%",
          height: CANVAS_H,
          borderRadius: "12px",
          backgroundColor: "transparent",
          fontFamily: "'Inter', system-ui, sans-serif",
          cursor: drag ? "grabbing" : "default",
          overflow: "hidden",
        }}
      >
        {/* ── Node cards: triangle layout ── */}
        {/* Assembly: left, vertically centered */}
        <NodeCard
          node={ASSEMBLY_NODE}
          isConnected={true}
          nodeRef={assemblyRef}
          animate
          delay={0.15}
          isInView={isInView}
          style={{ left: 32, top: "50%", transform: "translateY(-50%)" }}
        />
        {/* QuickBooks: top-right */}
        <NodeCard
          node={QB_NODE}
          isConnected={true}
          nodeRef={qbRef}
          animate
          delay={0.3}
          isInView={isInView}
          style={{ right: 36, top: 20 }}
        />
        {/* Xero: bottom-right */}
        <NodeCard
          node={XERO_NODE}
          isConnected={xeroConnected}
          nodeRef={xeroRef}
          animate
          delay={0.42}
          isInView={isInView}
          style={{ right: 36, bottom: 20 }}
        />

          {/* ─── SVG overlay: connection lines + ports ─── */}
          {pp && (
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
              {/* Assembly → QB: always connected (horizontal) */}
              <path
                d={bezierPathH(pp.aOutQBX, pp.aOutQBY, pp.qbInX, pp.qbInY)}
                stroke={C.line}
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
              />
              {portCircle(pp.aOutQBX, pp.aOutQBY, "a-out-qb")}
              {portCircle(pp.qbInX, pp.qbInY, "qb-in")}

              {/* Assembly → Xero: interactive (horizontal) */}
              {xeroConnected ? (
                <motion.path
                  d={bezierPathH(pp.aOutXeroX, pp.aOutXeroY, pp.xInX, pp.xInY)}
                  stroke={C.line}
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              ) : (
                <path
                  d={bezierPathH(pp.aOutXeroX, pp.aOutXeroY, pp.xInX, pp.xInY)}
                  stroke={C.lineDashed}
                  strokeWidth={1.5}
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="6 4"
                />
              )}
              {portCircle(pp.aOutXeroX, pp.aOutXeroY, "a-out-xero")}
              {portCircle(pp.xInX, pp.xInY, "x-in")}

              {/* Drag line */}
              {drag && (
                <path
                  d={bezierPathH(drag.fromX, drag.fromY, drag.mouseX, drag.mouseY)}
                  stroke={C.line}
                  strokeWidth={2}
                  fill="none"
                  strokeDasharray="6 4"
                  strokeLinecap="round"
                  opacity={0.4}
                />
              )}
            </svg>
          )}

          {/* ─── Interactive Assembly→Xero output port (draggable) ─── */}
          {pp && !xeroConnected && (
            <motion.div
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleDragStart({ x: pp.aOutXeroX, y: pp.aOutXeroY });
              }}
              animate={{ scale: drag ? 1.3 : 1 }}
              transition={{ duration: 0.15 }}
              style={{
                position: "absolute",
                left: pp.aOutXeroX - 7,
                top: pp.aOutXeroY - 7,
                width: 14,
                height: 14,
                borderRadius: "50%",
                backgroundColor: "transparent",
                cursor: drag ? "grabbing" : "grab",
                zIndex: 10,
              }}
            />
          )}

          {/* ─── Interactive Xero input port (drop target) ─── */}
          {pp && !xeroConnected && (
            <motion.div
              onMouseUp={() => handleXeroDrop()}
              animate={{
                scale: drag ? 1.6 : 1,
              }}
              transition={{ duration: 0.15 }}
              style={{
                position: "absolute",
                left: pp.xInX - 7,
                top: pp.xInY - 7,
                width: 14,
                height: 14,
                borderRadius: "50%",
                backgroundColor: "transparent",
                cursor: drag ? "pointer" : "default",
                zIndex: 10,
              }}
            />
          )}

          {/* ─── Idle pulse on Assembly→Xero output port ─── */}
          {pp && portIdleActive && !xeroConnected && (
            <motion.div
              animate={{ scale: [1, 2.4, 1], opacity: [0.35, 0, 0.35] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                left: pp.aOutXeroX - 12,
                top: pp.aOutXeroY - 12,
                width: 24,
                height: 24,
                borderRadius: "50%",
                border: `2px solid ${C.line}`,
                opacity: 0.2,
                pointerEvents: "none",
                zIndex: 9,
              }}
            />
          )}

          {/* ─── Tooltip ─── */}
          <AnimatePresence>
            {showTooltip && pp && !xeroConnected && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                style={{
                  position: "absolute",
                  left: pp.aOutXeroX + 14,
                  top: pp.aOutXeroY - 12,
                  pointerEvents: "none",
                  zIndex: 100,
                }}
              >
                <div
                  style={{
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(24, 24, 27, 0.9)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    border: "1px solid rgba(63, 63, 70, 0.5)",
                    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ fontSize: "10px", fontWeight: 400, color: "#ffffff" }}>
                    Drag to connect
                  </span>
                  <div
                    style={{
                      position: "absolute",
                      left: "-4px",
                      top: "50%",
                      marginTop: "-4px",
                      width: "8px",
                      height: "8px",
                      backgroundColor: "rgba(24, 24, 27, 0.9)",
                      transform: "rotate(45deg)",
                      borderLeft: "1px solid rgba(63, 63, 70, 0.5)",
                      borderBottom: "1px solid rgba(63, 63, 70, 0.5)",
                    }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
    </motion.div>
  );
}
