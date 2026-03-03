"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useIdleHint } from "@/hooks/useIdleHint";

/* ──────────────────────────────────────────────────────────
   QUICKBOOKS & XERO SYNC DEMO
   Redesigned as an Assembly "Integrations > Accounting"
   settings page inside browser chrome.
   Interactive: drag from output port to connect Xero.
   ────────────────────────────────────────────────────────── */

/* ── Color tokens (matching OnePaymentsDemo / ContextBarDemo) ── */
const C = {
  bg: "#ffffff",
  border: "#e5e7eb",
  text: "#18181b",
  textSec: "#6b7280",
  textMuted: "#9ca3af",
  green: "#16a34a",
  portColor: "rgba(0,0,0,0.22)",
  lineColor: "rgba(0,0,0,0.10)",
  lineDashed: "rgba(0,0,0,0.08)",
} as const;

/* ── Drag state ── */
interface DragState {
  fromX: number;
  fromY: number;
  mouseX: number;
  mouseY: number;
}

/* ── Bezier path helper ── */
function bezierPath(fx: number, fy: number, tx: number, ty: number): string {
  const dx = Math.abs(tx - fx);
  const cp = Math.max(30, dx * 0.4);
  return `M ${fx} ${fy} C ${fx + cp} ${fy}, ${tx - cp} ${ty}, ${tx} ${ty}`;
}

/* ══════════════════════════════════════════
   MOBILE STATIC VIEW
   ══════════════════════════════════════════ */
function MobileStaticView() {
  const integrations = [
    { id: "qb", label: "QuickBooks Online", icon: "/Icons/QB.svg", sub: "156 invoices, 89 payments synced" },
    { id: "xero", label: "Xero", icon: "/Icons/Xerosq.svg", sub: "89 contacts, 67 records synced" },
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
        backgroundColor: C.bg,
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        fontFamily: "'Inter', system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      <div style={{ padding: "16px 16px 0" }}>
        <div style={{
          fontFamily: "'PP Mori', var(--font-sans)",
          fontSize: "14px", fontWeight: 500, color: C.text, marginBottom: "4px",
        }}>
          Accounting
        </div>
        <div style={{ fontSize: "11px", color: C.textSec, marginBottom: "14px" }}>
          Connected accounting integrations
        </div>
      </div>

      <div style={{ padding: "0 16px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
        {integrations.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex", alignItems: "center", gap: "10px",
              padding: "12px 14px", border: `1px solid ${C.border}`,
              borderRadius: "8px", backgroundColor: C.bg,
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
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════ */
export function QuickBooksSyncDemo({ inSplit = false }: { inSplit?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });
  const isDesktop = useMediaQuery("(min-width: 1024px)", true);

  const [xeroConnected, setXeroConnected] = useState(false);
  const [drag, setDrag] = useState<DragState | null>(null);
  const tooltipDone = useRef(false);
  const [showTooltip, setShowTooltip] = useState(false);

  /* Refs for measuring card positions */
  const qbCardRef = useRef<HTMLDivElement>(null);
  const xeroCardRef = useRef<HTMLDivElement>(null);
  const [portPositions, setPortPositions] = useState<{
    outX: number; outY: number; inX: number; inY: number;
    qbLeftX: number; qbY: number;
  } | null>(null);

  /* Idle pulse hint */
  const { containerRef: idleRef, isIdle: portIdleActive, dismiss: dismissIdle } = useIdleHint({ delay: 3000 });

  /* ── Measure port positions from card refs ── */
  const measurePositions = useCallback(() => {
    if (!contentRef.current || !qbCardRef.current || !xeroCardRef.current) return;
    const contentRect = contentRef.current.getBoundingClientRect();
    const qbRect = qbCardRef.current.getBoundingClientRect();
    const xeroRect = xeroCardRef.current.getBoundingClientRect();

    const railX = 28;
    const outY = (qbRect.bottom - contentRect.top) + (xeroRect.top - qbRect.bottom) / 2;
    const inX = xeroRect.left - contentRect.left;
    const inY = xeroRect.top - contentRect.top + xeroRect.height / 2;
    const qbLeftX = qbRect.left - contentRect.left;
    const qbY = qbRect.top - contentRect.top + qbRect.height / 2;

    setPortPositions({ outX: railX, outY, inX, inY, qbLeftX, qbY });
  }, []);

  useEffect(() => {
    measurePositions();
    const ro = new ResizeObserver(() => measurePositions());
    if (contentRef.current) ro.observe(contentRef.current);
    return () => ro.disconnect();
  }, [measurePositions]);

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
      if (!drag || !contentRef.current) return;
      const rect = contentRef.current.getBoundingClientRect();
      setDrag((prev) =>
        prev ? { ...prev, mouseX: e.clientX - rect.left, mouseY: e.clientY - rect.top } : null
      );
    },
    [drag]
  );

  const handleMouseUp = useCallback(() => {
    setDrag(null);
  }, []);

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

  /* ── Mobile fallback ── */
  if (!isDesktop) {
    return <MobileStaticView />;
  }

  void inSplit; // acknowledged but not used for sizing in this design

  const pp = portPositions;

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
      <div
        style={{
          width: "100%",
          borderRadius: "10px",
          border: `1px solid ${C.border}`,
          boxShadow: "0 8px 30px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.06)",
          fontFamily: "'Inter', system-ui, sans-serif",
          overflow: "hidden",
        }}
      >
        {/* ─── Browser chrome ─── */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#141414",
            padding: "12px 16px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
          }}
        >
          <div style={{ display: "flex", gap: "7px", position: "relative", zIndex: 1 }}>
            {["#ff5f57", "#febc2e", "#28c840"].map((color) => (
              <div key={color} style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: color, opacity: 0.8 }} />
            ))}
          </div>
          <div style={{
            position: "absolute", left: 0, right: 0, textAlign: "center",
            fontFamily: "'SF Mono', 'Fira Code', Menlo, monospace",
            fontSize: "11px", color: "rgba(255, 255, 255, 0.35)",
            letterSpacing: "0.01em", pointerEvents: "none",
          }}>
            dashboard.assembly.com
          </div>
        </div>

        {/* ─── Settings page content ─── */}
        <div
          ref={contentRef}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          style={{
            position: "relative",
            backgroundColor: C.bg,
            padding: "24px 28px 28px",
            cursor: drag ? "grabbing" : "default",
          }}
        >
          {/* Page heading */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 style={{
              fontFamily: "'PP Mori', var(--font-sans)",
              fontSize: "15px", fontWeight: 500, color: C.text,
              margin: "0 0 4px 0",
            }}>
              Accounting
            </h3>
            <p style={{
              fontSize: "12px", color: C.textSec,
              margin: "0 0 20px 0", lineHeight: 1.4,
            }}>
              Connect your accounting software for two-way sync of invoices, payments, and contacts.
            </p>
          </motion.div>

          {/* Integration cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {/* QuickBooks — always connected */}
            <motion.div
              ref={qbCardRef}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: "flex", alignItems: "center", gap: "12px",
                padding: "14px 16px",
                border: `1px solid ${C.border}`, borderRadius: "10px",
                backgroundColor: C.bg,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Icons/QB.svg" alt="QuickBooks" width={32} height={32} draggable={false}
                style={{ borderRadius: "8px", flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: "13px", fontWeight: 500, color: C.text }}>QuickBooks Online</div>
                <div style={{ fontSize: "11px", color: C.textSec, marginTop: "2px" }}>
                  156 invoices, 89 payments synced
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: C.green }} />
                <span style={{ fontSize: "11px", color: C.green, fontWeight: 500 }}>Connected</span>
              </div>
            </motion.div>

            {/* Xero — interactive */}
            <motion.div
              ref={xeroCardRef}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => { if (!tooltipDone.current && !xeroConnected) setShowTooltip(true); }}
              onMouseLeave={() => setShowTooltip(false)}
              style={{
                display: "flex", alignItems: "center", gap: "12px",
                padding: "14px 16px",
                border: `1px solid ${C.border}`, borderRadius: "10px",
                backgroundColor: C.bg,
                transition: "border-color 0.3s ease",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Icons/Xerosq.svg" alt="Xero" width={32} height={32} draggable={false}
                style={{ borderRadius: "8px", flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: "13px", fontWeight: 500, color: C.text }}>Xero</div>
                <AnimatePresence mode="wait">
                  {xeroConnected ? (
                    <motion.div
                      key="connected"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ fontSize: "11px", color: C.textSec, marginTop: "2px" }}
                    >
                      89 contacts, 67 records synced
                    </motion.div>
                  ) : (
                    <motion.div
                      key="disconnected"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ fontSize: "11px", color: C.textMuted, marginTop: "2px" }}
                    >
                      Two-way sync for contacts and records
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <AnimatePresence mode="wait">
                {xeroConnected ? (
                  <motion.div
                    key="connected-status"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}
                  >
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: C.green }} />
                    <span style={{ fontSize: "11px", color: C.green, fontWeight: 500 }}>Connected</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="disconnected-status"
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}
                  >
                    <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: C.textMuted, opacity: 0.5 }} />
                    <span style={{ fontSize: "11px", color: C.textMuted }}>Not connected</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* ─── SVG overlay for connection lines + drag ─── */}
          {pp && (
            <svg
              style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%",
                pointerEvents: "none", zIndex: 5,
              }}
            >
              {/* Vertical rail */}
              <line
                x1={pp.outX} y1={pp.qbY}
                x2={pp.outX} y2={pp.inY}
                stroke={C.lineColor} strokeWidth={1}
              />
              {/* QB connector */}
              <line
                x1={pp.outX} y1={pp.qbY}
                x2={pp.qbLeftX} y2={pp.qbY}
                stroke={C.lineColor} strokeWidth={1}
              />
              {/* Xero connector */}
              {xeroConnected ? (
                <motion.line
                  x1={pp.outX} y1={pp.inY}
                  x2={pp.inX} y2={pp.inY}
                  stroke={C.lineColor} strokeWidth={1}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              ) : (
                <line
                  x1={pp.outX} y1={pp.inY}
                  x2={pp.inX} y2={pp.inY}
                  stroke={C.lineDashed} strokeWidth={1}
                  strokeDasharray="4 3"
                />
              )}
              {/* Drag line */}
              {drag && (
                <path
                  d={bezierPath(drag.fromX, drag.fromY, drag.mouseX, drag.mouseY)}
                  stroke="rgba(0,0,0,0.18)" strokeWidth={1.5}
                  fill="none" strokeDasharray="5 3" strokeLinecap="round"
                />
              )}
            </svg>
          )}

          {/* ─── Output port (draggable) ─── */}
          {pp && !xeroConnected && (
            <motion.div
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleDragStart({ x: pp.outX, y: pp.outY });
              }}
              animate={{ scale: drag ? 1.2 : 1 }}
              transition={{ duration: 0.15 }}
              style={{
                position: "absolute",
                left: pp.outX - 5, top: pp.outY - 5,
                width: 10, height: 10, borderRadius: "50%",
                backgroundColor: C.portColor,
                cursor: drag ? "grabbing" : "grab",
                zIndex: 10,
              }}
            />
          )}

          {/* ─── Input port on Xero (drop target) ─── */}
          {pp && !xeroConnected && (
            <motion.div
              onMouseUp={() => handleXeroDrop()}
              animate={{
                scale: drag ? 1.5 : 1,
                backgroundColor: drag ? "rgba(0,0,0,0.3)" : C.portColor,
              }}
              transition={{ duration: 0.15 }}
              style={{
                position: "absolute",
                left: pp.inX - 5, top: pp.inY - 5,
                width: 10, height: 10, borderRadius: "50%",
                backgroundColor: C.portColor,
                cursor: drag ? "pointer" : "default",
                zIndex: 10,
              }}
            />
          )}

          {/* ─── Idle pulse on output port ─── */}
          {pp && portIdleActive && !xeroConnected && (
            <motion.div
              animate={{ scale: [1, 2.2, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                left: pp.outX - 10, top: pp.outY - 10,
                width: 20, height: 20, borderRadius: "50%",
                border: "1.5px solid rgba(0, 0, 0, 0.15)",
                pointerEvents: "none", zIndex: 9,
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
                  left: pp.outX + 14, top: pp.outY - 14,
                  pointerEvents: "none", zIndex: 100,
                }}
              >
                <div style={{
                  position: "relative",
                  display: "inline-flex", alignItems: "center",
                  padding: "4px 8px", borderRadius: "6px",
                  backgroundColor: "rgba(24, 24, 27, 0.9)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  border: "1px solid rgba(63, 63, 70, 0.5)",
                  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)",
                  whiteSpace: "nowrap",
                }}>
                  <span style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: "10px", fontWeight: 400, color: "#ffffff",
                  }}>
                    Drag to connect
                  </span>
                  <div style={{
                    position: "absolute", left: "-4px", top: "50%", marginTop: "-4px",
                    width: "8px", height: "8px",
                    backgroundColor: "rgba(24, 24, 27, 0.9)",
                    transform: "rotate(45deg)",
                    borderLeft: "1px solid rgba(63, 63, 70, 0.5)",
                    borderBottom: "1px solid rgba(63, 63, 70, 0.5)",
                  }} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
