"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ──────────────────────────────────────────────────────────
   ONE PAYMENTS DEMO
   Payments dashboard with overview, balance, and payment options.
   ────────────────────────────────────────────────────────── */

/* ── Colour tokens ── */
const C = {
  text: "#18181b",
  textSec: "#6b7280",
  textMuted: "#9ca3af",
  border: "#e5e7eb",
  bg: "#ffffff",
  bgPage: "#f9fafb",
  accent: "#2563eb",
  green: "#16a34a",
  greenBg: "#dcfce7",
  yellowBg: "#fef9c3",
  yellowText: "#a16207",
} as const;

/* ── Section card wrapper ── */
function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        border: `1px solid ${C.border}`,
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: C.bg,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════ */

interface OnePaymentsDemoProps {
  inSplit?: boolean;
}

/* ── Smooth counting hook ── */
function useCountUp(
  from: number,
  to: number,
  started: boolean,
  duration = 2400,
  delay = 1000
) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!started) return;
    let raf: number;
    const start = performance.now() + delay;

    function tick(now: number) {
      const elapsed = now - start;
      if (elapsed < 0) { raf = requestAnimationFrame(tick); return; }
      const t = Math.min(elapsed / duration, 1);
      // ease-in-out sine — very smooth, no harsh start or stop
      const eased = -(Math.cos(Math.PI * t) - 1) / 2;
      setValue(from + (to - from) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, from, to, duration, delay]);

  return value;
}

function formatCurrency(n: number): string {
  return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function OnePaymentsDemo({ inSplit = false }: OnePaymentsDemoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  // Not paid: $7,850 → $5,350  (decrease by $2,500)
  // Paid: $12,460 → $14,960    (increase by $2,500)
  const notPaid = useCountUp(7850, 5350, isInView, 2400, 1000);
  const paid = useCountUp(12460, 14960, isInView, 2400, 1000);

  // Badge text flips near the end
  const [badgeFlipped, setBadgeFlipped] = useState(false);
  useEffect(() => {
    if (!isInView) return;
    const t = setTimeout(() => setBadgeFlipped(true), 2800);
    return () => clearTimeout(t);
  }, [isInView]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        width: "100%",
        backgroundColor: C.bg,
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        boxShadow: "0 8px 30px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.06)",
        fontFamily: "'Inter', system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
          {/* Page header */}
          <div style={{ padding: "16px 24px" }}>
            <div style={{ fontSize: "13px", fontWeight: 500, color: C.text }}>
              Payments
            </div>
          </div>

          {/* Divider — edge to edge */}
          <div style={{ height: "1px", backgroundColor: C.border }} />

          {/* Tab bar — content padded, bottom border edge to edge */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                display: "flex",
                gap: "20px",
                padding: "0 24px",
              }}
            >
              {["Overview", "Invoices", "Subscriptions", "Payment links", "Stores", "Services"].map(
                (tab, i) => (
                  <span
                    key={tab}
                    style={{
                      fontSize: "11px",
                      color: i === 0 ? C.text : C.textMuted,
                      fontWeight: 400,
                      padding: "10px 0",
                      position: "relative",
                      cursor: "default",
                    }}
                  >
                    {tab}
                    {i === 0 && (
                      <span style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "1px",
                        backgroundColor: C.text,
                        zIndex: 1,
                      }} />
                    )}
                  </span>
                )
              )}
            </div>
            {/* Edge-to-edge bottom border — same 1px, sits at the same bottom:0 line */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", backgroundColor: C.border }} />
          </div>

          {/* Page content */}
          <div style={{ padding: "16px 24px 20px", overflow: "hidden" }}>
            {/* Date filter chip */}
            <div style={{ marginBottom: "14px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "5px 12px",
                  borderRadius: "4px",
                  border: `1px solid ${C.border}`,
                  fontSize: "11px",
                  color: C.text,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/Icons/calendar.svg" alt="" width={10} height={10} style={{ opacity: 0.5 }} draggable={false} />
                Last 30 days
              </span>
            </div>

            {/* Not paid / Paid row */}
            <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }}>
              {/* Not paid */}
              <Card style={{ flex: 1, padding: "16px 20px" }}>
                <div style={{ fontSize: "11px", color: C.textSec, marginBottom: "6px" }}>Not paid</div>
                <div style={{ fontSize: "20px", fontWeight: 500, color: C.text, marginBottom: "10px", fontVariantNumeric: "tabular-nums" }}>
                  {formatCurrency(notPaid)}
                </div>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "3px 10px",
                    borderRadius: "4px",
                    backgroundColor: C.yellowBg,
                    fontSize: "10px",
                    color: C.yellowText,
                    whiteSpace: "nowrap",
                  }}
                >
                  ⚠ {badgeFlipped ? "2 overdue invoices" : "3 overdue invoices"}
                </span>
              </Card>

              {/* Paid */}
              <Card style={{ flex: 1, padding: "16px 20px" }}>
                <div style={{ fontSize: "11px", color: C.textSec, marginBottom: "6px" }}>Paid</div>
                <div style={{ fontSize: "20px", fontWeight: 500, color: C.text, marginBottom: "10px", fontVariantNumeric: "tabular-nums" }}>
                  {formatCurrency(paid)}
                </div>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "3px 10px",
                    borderRadius: "4px",
                    backgroundColor: C.greenBg,
                    fontSize: "10px",
                    color: C.green,
                    whiteSpace: "nowrap",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/Icons/checkgreen.svg" alt="" width={10} height={10} draggable={false} style={{ flexShrink: 0 }} />
                  {badgeFlipped ? "13 paid invoices" : "12 paid invoices"}
                </span>
              </Card>
            </div>

            {/* Balance / Payouts row */}
            <div style={{ display: "flex", border: `1px solid ${C.border}`, borderRadius: "8px", overflow: "hidden" }}>
              {/* Total Balance */}
              <div style={{ width: "35%", padding: "16px 20px", borderRight: `1px solid ${C.border}` }}>
                <div style={{ fontSize: "11px", color: C.textSec, marginBottom: "4px" }}>Total Balance</div>
                <div style={{ fontSize: "18px", fontWeight: 500, color: C.text, marginBottom: "8px" }}>
                  $117,252.73
                </div>
                <div style={{ fontSize: "11px", color: C.accent }}>
                  Open Dashboard <span style={{ fontSize: "10px" }}>↗</span>
                </div>
              </div>

              {/* Upcoming payouts */}
              <div style={{ flex: 1, padding: "12px 20px", fontSize: "11px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span style={{ color: C.textSec }}>Upcoming payouts (Estimated) ⓘ</span>
                  <span style={{ color: C.text, fontWeight: 500 }}>$25,747.36</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px", paddingLeft: "12px" }}>
                  <span style={{ color: C.textMuted }}>Expected to arrive Jan 13</span>
                  <span style={{ color: C.text }}>$12,729.38</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", paddingLeft: "12px" }}>
                  <span style={{ color: C.textMuted }}>Expected to arrive Jan 14</span>
                  <span style={{ color: C.text }}>$13,017.98</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "6px 0",
                    borderTop: `1px solid ${C.border}`,
                  }}
                >
                  <span style={{ color: C.textSec }}>Available balance</span>
                  <span style={{ color: C.text }}>$91,505.37</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "6px 0",
                    borderTop: `1px solid ${C.border}`,
                    fontWeight: 500,
                  }}
                >
                  <span style={{ color: C.text }}>Total balance</span>
                  <span style={{ color: C.text }}>$117,252.73</span>
                </div>
              </div>
            </div>

          </div>
    </motion.div>
  );
}
