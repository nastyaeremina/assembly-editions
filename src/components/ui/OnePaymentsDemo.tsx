"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

/* ──────────────────────────────────────────────────────────
   ONE PAYMENTS DEMO
   Payments dashboard with tabbed views: Overview, Invoices, Subscriptions.
   Auto-cycles between tabs on scroll-in, stops on user interaction.
   ────────────────────────────────────────────────────────── */

/* ── Colour tokens ── */
const C = {
  text: "#18181b",
  textSec: "#6b7280",
  textMuted: "#9ca3af",
  border: "#e5e7eb",
  borderLight: "#f3f4f6",
  bg: "#ffffff",
  bgPage: "#f9fafb",
  accent: "#2563eb",
  green: "#16a34a",
  greenBg: "#dcfce7",
  yellowBg: "#fef9c3",
  yellowText: "#a16207",
  redBg: "#fef2f2",
  redText: "#dc2626",
  grayBg: "#f3f4f6",
  grayText: "#6b7280",
} as const;

type TabId = "overview" | "invoices" | "subscriptions";
const TAB_ORDER: TabId[] = ["overview", "invoices", "subscriptions"];
const AUTO_CYCLE_MS = 4000;

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

interface InvoiceRow {
  name: string;
  initials: string;
  avatarBg: string;
  price: number;
  recurring?: boolean;
  status: "paid" | "open" | "void" | "overdue";
  invoiceNum: string;
  created: string;
  due: string;
  payment?: string;
}

const INVOICES_DATA: InvoiceRow[] = [
  { name: "Courtney Dinkins", initials: "CG", avatarBg: "#94a3b8", price: 6400, recurring: true, status: "paid", invoiceNum: "F7F23EF1-0016", created: "May 20, 2026", due: "Apr 30, 2026", payment: "" },
  { name: "Service Symphony", initials: "SS", avatarBg: "#8b5cf6", price: 9400, recurring: false, status: "paid", invoiceNum: "SUB-83F7CAE1-0008", created: "Oct 15, 2026", due: "Nov 15, 2026", payment: "Nov 10, 2026" },
  { name: "Sara Bergson", initials: "SB", avatarBg: "#f59e0b", price: 6553, recurring: false, status: "void", invoiceNum: "SUB-83F7CAE1-0009", created: "May 10, 2026", due: "", payment: "" },
  { name: "Godo", initials: "G", avatarBg: "#6366f1", price: 900, recurring: true, status: "open", invoiceNum: "SUB-D8EF5DE9-0001", created: "Nov 5, 2026", due: "Dec 30, 2026", payment: "" },
  { name: "Jordyn Donin", initials: "JD", avatarBg: "#ec4899", price: 8400, recurring: false, status: "open", invoiceNum: "F7F23EF1-0016", created: "Jun 18, 2026", due: "Jul 30, 2026", payment: "" },
  { name: "Zaire Dokidis", initials: "ZD", avatarBg: "#14b8a6", price: 10400, recurring: false, status: "paid", invoiceNum: "SUB-83F7CAE1-0010", created: "Jan 20, 2026", due: "Feb 20, 2026", payment: "Jan 25, 2026" },
  { name: "Tiana Botosh", initials: "TB", avatarBg: "#a855f7", price: 8400, recurring: false, status: "paid", invoiceNum: "SUB-8182B7A3-0002", created: "Feb 14, 2026", due: "Mar 30, 2026", payment: "Apr 3, 2026" },
  { name: "Wave marketing", initials: "WM", avatarBg: "#22c55e", price: 1400, recurring: true, status: "open", invoiceNum: "D8EF5DE9-0001", created: "Dec 1, 2026", due: "Dec 30, 2026", payment: "" },
  { name: "Jame Dilhome", initials: "JD", avatarBg: "#64748b", price: 12400, recurring: false, status: "open", invoiceNum: "SUB-44D2833F-0008", created: "Mar 30, 2026", due: "Apr 30, 2026", payment: "" },
  { name: "Patrick Ekstrom Bothman", initials: "PE", avatarBg: "#e879f9", price: 8734, recurring: false, status: "paid", invoiceNum: "SUB-83F7CAE1-0009", created: "Jul 4, 2026", due: "Aug 30, 2026", payment: "Aug 30, 2026" },
  { name: "Josh Dart", initials: "JD", avatarBg: "#64748b", price: 3454, recurring: false, status: "open", invoiceNum: "SUB-44D2833F-0006", created: "Aug 22, 2026", due: "Oct 30, 2026", payment: "" },
  { name: "Franklin Thomas", initials: "FT", avatarBg: "#ef4444", price: 9200, recurring: false, status: "paid", invoiceNum: "F7F23EF1-0015", created: "Sep 8, 2026", due: "Oct 31, 2026", payment: "Oct 31, 2026" },
  { name: "The Walsh Group", initials: "TW", avatarBg: "#94a3b8", price: 9353, recurring: true, status: "open", invoiceNum: "SUB-83F7CAE1-0008", created: "Apr 25, 2026", due: "Apr 30, 2026", payment: "" },
  { name: "Phyllis Maverick", initials: "PM", avatarBg: "#f59e0b", price: 6400, recurring: false, status: "open", invoiceNum: "F7F23EF1-0014", created: "Oct 30, 2026", due: "Dec 30, 2026", payment: "" },
  { name: "Erin Vetrovs", initials: "EV", avatarBg: "#ef4444", price: 23400, recurring: false, status: "open", invoiceNum: "792F7F23EF1-00121", created: "Nov 15, 2026", due: "Dec 30, 2026", payment: "" },
  { name: "Haylie Curtis", initials: "HC", avatarBg: "#f59e0b", price: 8232, recurring: true, status: "paid", invoiceNum: "F7F23EF1-0011", created: "Dec 25, 2025", due: "Dec 31, 2025", payment: "Dec 28, 2026" },
  { name: "Brandon Curtis", initials: "BC", avatarBg: "#22c55e", price: 8230, recurring: true, status: "paid", invoiceNum: "F7F23EF1-0010", created: "Jan 1, 2026", due: "Mar 31, 2026", payment: "Mar 1, 2026" },
  { name: "Michael Robert", initials: "MR", avatarBg: "#3b82f6", price: 3454, recurring: false, status: "overdue", invoiceNum: "SUB-44D2833F-0006", created: "Feb 28, 2026", due: "Mar 31, 2026", payment: "" },
];

interface SubscriptionRow {
  name: string;
  initials: string;
  avatarBg: string;
  price: number;
  period: "Monthly" | "Yearly";
  status: "active" | "cancelled";
  created: string;
  nextPayment?: string;
}

const SUBSCRIPTIONS_DATA: SubscriptionRow[] = [
  { name: "Courtney Dinkins", initials: "CG", avatarBg: "#94a3b8", price: 8400, period: "Monthly", status: "active", created: "May 20, 2026", nextPayment: "Apr 20, 2026" },
  { name: "Service Symphony", initials: "SS", avatarBg: "#8b5cf6", price: 12500, period: "Yearly", status: "active", created: "Oct 15, 2026", nextPayment: "Oct 15, 2027" },
  { name: "Sara Bergson", initials: "SB", avatarBg: "#f59e0b", price: 12500, period: "Yearly", status: "active", created: "Oct 15, 2026", nextPayment: "Oct 15, 2027" },
  { name: "Godo", initials: "G", avatarBg: "#6366f1", price: 15000, period: "Yearly", status: "active", created: "May 10, 2026", nextPayment: "May 10, 2027" },
  { name: "Jordyn Donin", initials: "JD", avatarBg: "#ec4899", price: 10200, period: "Yearly", status: "active", created: "Nov 5, 2026", nextPayment: "Nov 5, 2027" },
  { name: "Zaire Dokidis", initials: "ZD", avatarBg: "#14b8a6", price: 14500, period: "Yearly", status: "cancelled", created: "Jun 18, 2026", nextPayment: "" },
  { name: "Tiana Botosh", initials: "TB", avatarBg: "#a855f7", price: 20000, period: "Yearly", status: "active", created: "Jan 20, 2026", nextPayment: "Jan 20, 2027" },
  { name: "Wave Marketing", initials: "WM", avatarBg: "#22c55e", price: 7800, period: "Monthly", status: "active", created: "Feb 14, 2026", nextPayment: "Mar 14, 2026" },
  { name: "James Dilhome", initials: "JD", avatarBg: "#64748b", price: 6500, period: "Monthly", status: "active", created: "Dec 1, 2026", nextPayment: "Jan 1, 2027" },
  { name: "Patrick Ekstrom Bothman", initials: "PE", avatarBg: "#e879f9", price: 11000, period: "Monthly", status: "active", created: "Mar 30, 2026", nextPayment: "Apr 30, 2026" },
  { name: "Josh Dart", initials: "JD", avatarBg: "#64748b", price: 9500, period: "Yearly", status: "active", created: "Jul 4, 2026", nextPayment: "Jul 4, 2027" },
  { name: "Franklin Thomas", initials: "FT", avatarBg: "#ef4444", price: 18000, period: "Monthly", status: "active", created: "Aug 22, 2026", nextPayment: "Sep 22, 2026" },
  { name: "The Walsh Group", initials: "TW", avatarBg: "#94a3b8", price: 10100, period: "Monthly", status: "active", created: "Sep 8, 2026", nextPayment: "Oct 8, 2026" },
  { name: "Phyllis Maverick", initials: "PM", avatarBg: "#f59e0b", price: 22000, period: "Monthly", status: "active", created: "Apr 25, 2026", nextPayment: "May 25, 2026" },
  { name: "Erin Vetrovs", initials: "EV", avatarBg: "#ef4444", price: 5000, period: "Monthly", status: "cancelled", created: "Oct 30, 2026", nextPayment: "" },
  { name: "Haylie Curtis", initials: "HC", avatarBg: "#f59e0b", price: 3600, period: "Monthly", status: "active", created: "Nov 15, 2026", nextPayment: "Dec 15, 2026" },
  { name: "Brandon Curtis", initials: "BC", avatarBg: "#22c55e", price: 4800, period: "Monthly", status: "active", created: "Dec 25, 2026", nextPayment: "Jan 25, 2027" },
  { name: "Michael Robert", initials: "MR", avatarBg: "#3b82f6", price: 6200, period: "Yearly", status: "active", created: "Jan 1, 2026", nextPayment: "Feb 1, 2026" },
];

/* ═══════════════════════════════════════════
   SUB-COMPONENTS
   ═══════════════════════════════════════════ */

function Avatar({ initials, bg }: { initials: string; bg: string }) {
  return (
    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: "50%",
        backgroundColor: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "9px",
        fontWeight: 600,
        color: "#fff",
        flexShrink: 0,
        letterSpacing: "0.02em",
      }}
    >
      {initials}
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const s = status.toLowerCase();
  let bg: string = C.grayBg;
  let color: string = C.grayText;
  let border = "none";

  if (s === "paid" || s === "active") {
    bg = C.greenBg;
    color = C.green;
  } else if (s === "open") {
    bg = "transparent";
    color = C.green;
    border = `1px solid ${C.green}`;
  } else if (s === "overdue") {
    bg = C.redBg;
    color = C.redText;
  }
  // void / cancelled → default gray

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "2px 10px",
        borderRadius: "4px",
        fontSize: "11px",
        fontWeight: 500,
        backgroundColor: bg,
        color,
        border,
        whiteSpace: "nowrap",
        lineHeight: 1.5,
      }}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

/* ── Section card wrapper (kept for overview) ── */
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

/* ── Recurring icon ── */
function RecurringIcon() {
  return (
    <span style={{ fontSize: "11px", marginLeft: "3px", opacity: 0.45 }}>&#x21C4;</span>
  );
}

/* ── Three-dot menu ── */
function DotMenu() {
  return (
    <span style={{ fontSize: "12px", color: C.textMuted, cursor: "default", letterSpacing: "1px" }}>
      &bull;&bull;&bull;
    </span>
  );
}

/* ═══════════════════════════════════════════
   TABLE COMPONENTS
   ═══════════════════════════════════════════ */

/* Column widths for invoices */
const INV_COLS = "minmax(140px,1.8fr) minmax(60px,0.7fr) minmax(50px,0.6fr) minmax(120px,1.4fr) minmax(80px,1fr) minmax(80px,1fr) minmax(80px,1fr) 24px";

function InvoicesTable() {
  return (
    <div style={{ overflow: "hidden" }}>
      {/* Header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: INV_COLS,
          gap: "0",
          padding: "0 0 8px",
          fontSize: "11px",
          color: C.textMuted,
          fontWeight: 400,
        }}
      >
        <span>Recipient</span>
        <span>Price</span>
        <span>Status</span>
        <span>Invoice number</span>
        <span>Created</span>
        <span>Due</span>
        <span>Payment</span>
        <span />
      </div>

      {/* Rows */}
      {INVOICES_DATA.map((row, i) => (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: INV_COLS,
            gap: "0",
            alignItems: "center",
            padding: "8px 0",
            borderTop: `1px solid ${C.borderLight}`,
            fontSize: "11px",
            color: C.text,
          }}
        >
          {/* Recipient */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 0 }}>
            <Avatar initials={row.initials} bg={row.avatarBg} />
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {row.name}
            </span>
          </div>
          {/* Price */}
          <span style={{ fontVariantNumeric: "tabular-nums" }}>
            ${row.price.toLocaleString()}{row.recurring && <RecurringIcon />}
          </span>
          {/* Status */}
          <span><StatusBadge status={row.status} /></span>
          {/* Invoice number */}
          <span style={{ color: C.textSec, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{row.invoiceNum}</span>
          {/* Created */}
          <span style={{ color: C.textSec }}>{row.created}</span>
          {/* Due */}
          <span style={{ color: C.textSec }}>{row.due}</span>
          {/* Payment */}
          <span style={{ color: C.textSec }}>{row.payment || ""}</span>
          {/* Menu */}
          <DotMenu />
        </div>
      ))}
    </div>
  );
}

/* Column widths for subscriptions */
const SUB_COLS = "minmax(140px,1.8fr) minmax(60px,0.8fr) minmax(80px,1fr) minmax(60px,0.7fr) minmax(90px,1fr) minmax(90px,1fr) 24px";

function SubscriptionsTable() {
  return (
    <div style={{ overflow: "hidden" }}>
      {/* Header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: SUB_COLS,
          gap: "0",
          padding: "0 0 8px",
          fontSize: "11px",
          color: C.textMuted,
          fontWeight: 400,
        }}
      >
        <span>Recipient</span>
        <span>Price</span>
        <span>Billing period</span>
        <span>Status</span>
        <span style={{ display: "flex", alignItems: "center", gap: "3px" }}>
          Created <span style={{ fontSize: "9px" }}>↓</span>
        </span>
        <span>Next payment</span>
        <span />
      </div>

      {/* Rows */}
      {SUBSCRIPTIONS_DATA.map((row, i) => (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: SUB_COLS,
            gap: "0",
            alignItems: "center",
            padding: "8px 0",
            borderTop: `1px solid ${C.borderLight}`,
            fontSize: "11px",
            color: C.text,
          }}
        >
          {/* Recipient */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 0 }}>
            <Avatar initials={row.initials} bg={row.avatarBg} />
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {row.name}
            </span>
          </div>
          {/* Price */}
          <span style={{ fontVariantNumeric: "tabular-nums" }}>
            ${row.price.toLocaleString()}
          </span>
          {/* Billing period */}
          <span style={{ color: C.textSec }}>{row.period}</span>
          {/* Status */}
          <span><StatusBadge status={row.status} /></span>
          {/* Created */}
          <span style={{ color: C.textSec }}>{row.created}</span>
          {/* Next payment */}
          <span style={{ color: C.textSec }}>{row.nextPayment || ""}</span>
          {/* Menu */}
          <DotMenu />
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════
   MOBILE TABLE COMPONENTS
   ═══════════════════════════════════════════ */

function MobileInvoicesTable() {
  return (
    <div>
      {/* Header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto auto",
          gap: "8px",
          padding: "0 0 8px",
          fontSize: "10px",
          color: C.textMuted,
        }}
      >
        <span>Recipient</span>
        <span style={{ textAlign: "right" }}>Price</span>
        <span style={{ textAlign: "right" }}>Status</span>
      </div>
      {INVOICES_DATA.slice(0, 10).map((row, i) => (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto auto",
            gap: "8px",
            alignItems: "center",
            padding: "7px 0",
            borderTop: `1px solid ${C.borderLight}`,
            fontSize: "11px",
            color: C.text,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px", minWidth: 0 }}>
            <Avatar initials={row.initials} bg={row.avatarBg} />
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "11px" }}>
              {row.name}
            </span>
          </div>
          <span style={{ fontVariantNumeric: "tabular-nums", fontSize: "11px" }}>
            ${row.price.toLocaleString()}
          </span>
          <StatusBadge status={row.status} />
        </div>
      ))}
    </div>
  );
}

function MobileSubscriptionsTable() {
  return (
    <div>
      {/* Header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto auto",
          gap: "8px",
          padding: "0 0 8px",
          fontSize: "10px",
          color: C.textMuted,
        }}
      >
        <span>Recipient</span>
        <span style={{ textAlign: "right" }}>Price</span>
        <span style={{ textAlign: "right" }}>Status</span>
      </div>
      {SUBSCRIPTIONS_DATA.slice(0, 10).map((row, i) => (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto auto",
            gap: "8px",
            alignItems: "center",
            padding: "7px 0",
            borderTop: `1px solid ${C.borderLight}`,
            fontSize: "11px",
            color: C.text,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px", minWidth: 0 }}>
            <Avatar initials={row.initials} bg={row.avatarBg} />
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "11px" }}>
              {row.name}
            </span>
          </div>
          <span style={{ fontVariantNumeric: "tabular-nums", fontSize: "11px" }}>
            ${row.price.toLocaleString()}
          </span>
          <StatusBadge status={row.status} />
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════
   OVERVIEW CONTENT (existing)
   ═══════════════════════════════════════════ */

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

function OverviewContent({ isInView }: { isInView: boolean }) {
  const notPaid = useCountUp(7850, 5350, isInView, 2400, 1000);
  const paid = useCountUp(12460, 14960, isInView, 2400, 1000);

  const [badgeFlipped, setBadgeFlipped] = useState(false);
  useEffect(() => {
    if (!isInView) return;
    const t = setTimeout(() => setBadgeFlipped(true), 2800);
    return () => clearTimeout(t);
  }, [isInView]);

  return (
    <>
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
            &#9888; {badgeFlipped ? "2 overdue invoices" : "3 overdue invoices"}
          </span>
        </Card>

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
        <div style={{ width: "35%", padding: "16px 20px", borderRight: `1px solid ${C.border}` }}>
          <div style={{ fontSize: "11px", color: C.textSec, marginBottom: "4px" }}>Total Balance</div>
          <div style={{ fontSize: "18px", fontWeight: 500, color: C.text, marginBottom: "8px" }}>
            $117,252.73
          </div>
          <div style={{ fontSize: "11px", color: C.accent }}>
            Open Dashboard <span style={{ fontSize: "10px" }}>&#x2197;</span>
          </div>
        </div>

        <div style={{ flex: 1, padding: "12px 20px", fontSize: "11px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
            <span style={{ color: C.textSec }}>Upcoming payouts (Estimated) &#x24D8;</span>
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
    </>
  );
}

/* ── Mobile Overview (existing) ── */
function MobileOverviewContent({ isInView }: { isInView: boolean }) {
  const notPaid = useCountUp(7850, 5350, isInView, 2400, 1000);
  const paid = useCountUp(12460, 14960, isInView, 2400, 1000);

  const [badgeFlipped, setBadgeFlipped] = useState(false);
  useEffect(() => {
    if (!isInView) return;
    const t = setTimeout(() => setBadgeFlipped(true), 2800);
    return () => clearTimeout(t);
  }, [isInView]);

  return (
    <>
      {/* Not paid / Paid cards */}
      <div style={{ display: "flex", gap: "10px", padding: "0 16px 14px" }}>
        <div style={{ flex: 1, border: `1px solid ${C.border}`, borderRadius: "8px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: C.textSec, marginBottom: "4px" }}>Not paid</div>
          <div style={{ fontSize: "18px", fontWeight: 500, color: C.text, marginBottom: "8px", fontVariantNumeric: "tabular-nums" }}>
            {formatCurrency(notPaid)}
          </div>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "3px",
              padding: "2px 8px",
              borderRadius: "4px",
              backgroundColor: C.yellowBg,
              fontSize: "9px",
              color: C.yellowText,
              whiteSpace: "nowrap",
            }}
          >
            &#9888; {badgeFlipped ? "2 overdue" : "3 overdue"}
          </span>
        </div>

        <div style={{ flex: 1, border: `1px solid ${C.border}`, borderRadius: "8px", padding: "12px 14px" }}>
          <div style={{ fontSize: "10px", color: C.textSec, marginBottom: "4px" }}>Paid</div>
          <div style={{ fontSize: "18px", fontWeight: 500, color: C.text, marginBottom: "8px", fontVariantNumeric: "tabular-nums" }}>
            {formatCurrency(paid)}
          </div>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "3px",
              padding: "2px 8px",
              borderRadius: "4px",
              backgroundColor: C.greenBg,
              fontSize: "9px",
              color: C.green,
              whiteSpace: "nowrap",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/Icons/checkgreen.svg" alt="" width={9} height={9} draggable={false} style={{ flexShrink: 0 }} />
            {badgeFlipped ? "13 paid" : "12 paid"}
          </span>
        </div>
      </div>

      {/* Balance summary */}
      <div style={{ borderTop: `1px solid ${C.border}`, padding: "14px 16px 16px" }}>
        <div style={{ marginBottom: "12px" }}>
          <div>
            <div style={{ fontSize: "10px", color: C.textSec, marginBottom: "2px" }}>Total Balance</div>
            <div style={{ fontSize: "20px", fontWeight: 500, color: C.text }}>$117,252.73</div>
          </div>
        </div>
        <div style={{ fontSize: "12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderTop: `1px solid ${C.border}` }}>
            <span style={{ color: C.textSec }}>Upcoming payouts</span>
            <span style={{ color: C.text, fontWeight: 500 }}>$25,747.36</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderTop: `1px solid ${C.border}` }}>
            <span style={{ color: C.textSec }}>Available balance</span>
            <span style={{ color: C.text }}>$91,505.37</span>
          </div>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════
   TAB DEFINITIONS
   ═══════════════════════════════════════════ */

const TABS: { id: TabId; label: string }[] = [
  { id: "overview", label: "Overview" },
  { id: "invoices", label: "Invoices" },
  { id: "subscriptions", label: "Subscriptions" },
];

const ALL_TAB_LABELS = ["Overview", "Invoices", "Subscriptions", "Payment links", "Stores", "Services"];

const CTA_TEXT: Record<TabId, string> = {
  overview: "",
  invoices: "+ Create invoice",
  subscriptions: "+ Create subscription",
};

/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */

interface OnePaymentsDemoProps {
  inSplit?: boolean;
}

export function OnePaymentsDemo({ inSplit = false }: OnePaymentsDemoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-80px" });
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  const [activeTab, setActiveTab] = useState<TabId>("overview");
  const userTookOver = useRef(false);

  /* ── Auto-cycle tabs ── */
  useEffect(() => {
    if (!isInView || userTookOver.current) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const idx = TAB_ORDER.indexOf(prev);
        return TAB_ORDER[(idx + 1) % TAB_ORDER.length];
      });
    }, AUTO_CYCLE_MS);
    return () => clearInterval(interval);
  }, [isInView]);

  const handleTabClick = useCallback((tab: TabId) => {
    userTookOver.current = true;
    setActiveTab(tab);
  }, []);

  /* ─────────────────────── MOBILE VIEW ─────────────────────── */
  if (!isDesktop) {
    return (
      <motion.div
        ref={containerRef}
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
        {/* Header */}
        <div style={{ padding: "14px 16px 0" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px" }}>
            <span style={{ fontSize: "14px", fontWeight: 500, color: C.text }}>Payments</span>
          </div>
        </div>

        {/* Tab bar */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              display: "flex",
              gap: "14px",
              padding: "0 16px",
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {ALL_TAB_LABELS.map((label) => {
              const matchedTab = TABS.find((t) => t.label === label);
              const isActive = matchedTab ? activeTab === matchedTab.id : false;
              return (
                <span
                  key={label}
                  onClick={matchedTab ? () => handleTabClick(matchedTab.id) : undefined}
                  style={{
                    fontSize: "11px",
                    color: isActive ? C.text : C.textMuted,
                    fontWeight: isActive ? 500 : 400,
                    padding: "8px 0",
                    position: "relative",
                    cursor: matchedTab ? "pointer" : "default",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {label}
                  {isActive && (
                    <span style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "1.5px",
                      backgroundColor: C.text,
                      zIndex: 1,
                    }} />
                  )}
                </span>
              );
            })}
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", backgroundColor: C.border }} />
        </div>

        {/* Content — fixed height to prevent layout shift */}
        <div style={{ height: "360px", overflow: "hidden" }}>
          <AnimatePresence mode="wait">
            {activeTab === "overview" && (
              <motion.div
                key="mobile-overview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ padding: "12px 0 0" }}
              >
                <MobileOverviewContent isInView={isInView} />
              </motion.div>
            )}
            {activeTab === "invoices" && (
              <motion.div
                key="mobile-invoices"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ padding: "12px 16px 16px" }}
              >
                <MobileInvoicesTable />
              </motion.div>
            )}
            {activeTab === "subscriptions" && (
              <motion.div
                key="mobile-subscriptions"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ padding: "12px 16px 16px" }}
              >
                <MobileSubscriptionsTable />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  }

  /* ─────────────────────── DESKTOP VIEW ─────────────────────── */
  const ctaText = CTA_TEXT[activeTab];

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
        border: `1px solid ${C.border}`,
        boxShadow: "0 8px 30px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.06)",
        fontFamily: "'Inter', system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Page header */}
      <div style={{ padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontSize: "13px", fontWeight: 500, color: C.text }}>
          Payments
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* Search chip */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              padding: "5px 12px",
              borderRadius: "6px",
              border: `1px solid ${C.border}`,
              fontSize: "11px",
              color: C.textSec,
            }}
          >
            <span style={{ fontSize: "11px" }}>&#x1F50D;</span>
            Search
          </span>
          {/* Icon buttons */}
          <span style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: "28px", height: "28px", borderRadius: "6px",
            border: `1px solid ${C.border}`, fontSize: "12px", color: C.textSec, cursor: "default",
          }}>
            &#x2630;
          </span>
          <span style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: "28px", height: "28px", borderRadius: "6px",
            border: `1px solid ${C.border}`, fontSize: "12px", color: C.textSec, cursor: "default",
          }}>
            &#x1F4C4;
          </span>
          {/* CTA button */}
          <AnimatePresence mode="wait">
            {ctaText && (
              <motion.span
                key={ctaText}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "6px 14px",
                  borderRadius: "6px",
                  backgroundColor: C.text,
                  color: "#fff",
                  fontSize: "11px",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                  cursor: "default",
                }}
              >
                {ctaText}
                <span style={{ fontSize: "10px", marginLeft: "2px" }}>&#x25BE;</span>
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", backgroundColor: C.border }} />

      {/* Tab bar */}
      <div style={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            gap: "20px",
            padding: "0 24px",
          }}
        >
          {ALL_TAB_LABELS.map((label) => {
            const matchedTab = TABS.find((t) => t.label === label);
            const isActive = matchedTab ? activeTab === matchedTab.id : false;
            return (
              <span
                key={label}
                onClick={matchedTab ? () => handleTabClick(matchedTab.id) : undefined}
                style={{
                  fontSize: "11px",
                  color: isActive ? C.text : C.textMuted,
                  fontWeight: isActive ? 500 : 400,
                  padding: "10px 0",
                  position: "relative",
                  cursor: matchedTab ? "pointer" : "default",
                }}
              >
                {label}
                {isActive && (
                  <span style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "1.5px",
                    backgroundColor: C.text,
                    zIndex: 1,
                  }} />
                )}
              </span>
            );
          })}
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", backgroundColor: C.border }} />
      </div>

      {/* Page content */}
      <div style={{ padding: "16px 24px 20px", overflow: "hidden" }}>
        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div
              key="overview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <OverviewContent isInView={isInView} />
            </motion.div>
          )}
          {activeTab === "invoices" && (
            <motion.div
              key="invoices"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <InvoicesTable />
            </motion.div>
          )}
          {activeTab === "subscriptions" && (
            <motion.div
              key="subscriptions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <SubscriptionsTable />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
