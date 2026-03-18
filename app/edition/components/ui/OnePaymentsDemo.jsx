"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";

/* ──────────────────────────────────────────────────────────
   ONE PAYMENTS DEMO
   Payments dashboard with tabbed views: Overview, Invoices,
   Subscriptions, Payment Links, Stores, Services.
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
  green: "#15803d",
  greenBg: "#dcfce7",
  yellowBg: "#fef9c3",
  yellowText: "#a16207",
  redBg: "#fef2f2",
  redText: "#dc2626",
  grayBg: "#f3f4f6",
  grayText: "#6b7280",
};

const TAB_ORDER = ["overview", "invoices", "subscriptions", "payment-links", "stores", "services"];
const AUTO_CYCLE_MS = 8000;
const AUTO_CYCLE_INITIAL_DELAY = 5500;

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */

/* ── Avatar palette (light bg + muted text) ── */
const AVATAR_PALETTES = [
  { bg: "#e8f0e4", color: "#6b8f71" },   // sage green (MS)
  { bg: "#e8e4f0", color: "#7b6f99" },   // lavender (WW)
  { bg: "#f5e4e4", color: "#c47a6c" },   // light pink / coral (TL)
  { bg: "#f0e4ed", color: "#99566e" },   // mauve / rose (JK)
  { bg: "#f0ece2", color: "#8a7d54" },   // cream / olive (KT)
  { bg: "#eaebec", color: "#5c5f63" },   // light gray (AA)
  { bg: "#e0f0e8", color: "#3d7a56" },   // mint / dark green (LB)
  { bg: "#dff0ef", color: "#2a7a75" },   // teal (EO)
  { bg: "#f2e4ec", color: "#9e6a8a" },   // soft pink / rose (BS)
];

function getAvatarPalette(index) {
  return AVATAR_PALETTES[index % AVATAR_PALETTES.length];
}

const INVOICES_DATA = [
  { name: "Courtney Dinkins", initials: "CD", price: 6400, recurring: true, status: "paid", invoiceNum: "F7F23EF1-0016", created: "May 20, 2026", due: "Apr 30, 2026", payment: "" },
  { name: "Service Symphony", initials: "SS", price: 9400, recurring: false, status: "paid", invoiceNum: "SUB-83F7CAE1-0008", created: "Oct 15, 2026", due: "Nov 15, 2026", payment: "Nov 10, 2026" },
  { name: "Sara Bergson", initials: "SB", price: 6553, recurring: false, status: "void", invoiceNum: "SUB-83F7CAE1-0009", created: "May 10, 2026", due: "", payment: "" },
  { name: "Godo", initials: "GO", price: 900, recurring: true, status: "open", invoiceNum: "SUB-D8EF5DE9-0001", created: "Nov 5, 2026", due: "Dec 30, 2026", payment: "" },
  { name: "Jordyn Donin", initials: "JD", price: 8400, recurring: false, status: "open", invoiceNum: "F7F23EF1-0016", created: "Jun 18, 2026", due: "Jul 30, 2026", payment: "" },
  { name: "Zaire Dokidis", initials: "ZD", price: 10400, recurring: false, status: "paid", invoiceNum: "SUB-83F7CAE1-0010", created: "Jan 20, 2026", due: "Feb 20, 2026", payment: "Jan 25, 2026" },
];

const SUBSCRIPTIONS_DATA = [
  { name: "Courtney Dinkins", initials: "CD", price: 8400, period: "Monthly", status: "active", created: "May 20, 2026", nextPayment: "Apr 20, 2026" },
  { name: "Service Symphony", initials: "SS", price: 12500, period: "Yearly", status: "active", created: "Oct 15, 2026", nextPayment: "Oct 15, 2027" },
  { name: "Sara Bergson", initials: "SB", price: 12500, period: "Yearly", status: "active", created: "Oct 15, 2026", nextPayment: "Oct 15, 2027" },
  { name: "Godo", initials: "GO", price: 15000, period: "Yearly", status: "active", created: "May 10, 2026", nextPayment: "May 10, 2027" },
  { name: "Jordyn Donin", initials: "JD", price: 10200, period: "Yearly", status: "active", created: "Nov 5, 2026", nextPayment: "Nov 5, 2027" },
  { name: "Zaire Dokidis", initials: "ZD", price: 14500, period: "Yearly", status: "cancelled", created: "Jun 18, 2026", nextPayment: "" },
];

/* ── Payment Links data ── */
const PAYMENT_LINKS_DATA = [
  { name: "Logo design", price: 2000, recurring: "month", checkouts: 0, created: "Feb 9, 2025", status: "active" },
  { name: "Branding overhaul", price: 1000, checkouts: 3, created: "Nov 27, 2024", status: "active" },
  { name: "Website overhaul", price: 10000, recurring: "year", checkouts: 7, created: "Jul 31, 2024", status: "active" },
  { name: "Logo Design 2022", price: 500, checkouts: 3, created: "Jul 7, 2024", status: "inactive" },
  { name: "Logo Design 2022", price: 1000, checkouts: 3, created: "Jul 2, 2024", status: "inactive" },
  { name: "Social Media Pack", price: 750, checkouts: 1, created: "Jun 15, 2024", status: "inactive" },
];

/* ── Stores data (same structure as Payment Links) ── */
const STORES_DATA = [
  { name: "Design Assets Store", price: 5000, recurring: "year", checkouts: 12, created: "Mar 15, 2025", status: "active" },
  { name: "Brand Templates", price: 1500, recurring: "month", checkouts: 8, created: "Jan 20, 2025", status: "active" },
  { name: "Illustration Pack", price: 750, checkouts: 5, created: "Dec 5, 2024", status: "active" },
  { name: "Icon Library 2023", price: 300, checkouts: 14, created: "Sep 12, 2024", status: "inactive" },
  { name: "UI Kit Bundle", price: 2500, checkouts: 9, created: "Aug 3, 2024", status: "inactive" },
  { name: "Motion Graphics Set", price: 1200, checkouts: 2, created: "May 28, 2024", status: "inactive" },
];

/* ── Services data ── */
const SERVICES_DATA = [
  { name: "Logo Design", price: 2500, status: "active", thumbIdx: 0 },
  { name: "Brand Identity Package", price: 8000, status: "active", thumbIdx: 1 },
  { name: "Social Media Campaign Design", price: 3500, status: "active", thumbIdx: 2 },
  { name: "Mobile App UX/UI Design", price: 3500, status: "active", thumbIdx: 3 },
  { name: "Corporate Presentation Template", price: 1500, status: "active", thumbIdx: 4 },
  { name: "Explainer Video", price: 5000, status: "archived", thumbIdx: 5 },
];

/* ═══════════════════════════════════════════
   SUB-COMPONENTS
   ═══════════════════════════════════════════ */

function Avatar({ initials, index }) {
  const palette = getAvatarPalette(index);
  return (
    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: "50%",
        backgroundColor: palette.bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "9px",
        fontWeight: 400,
        fontFamily: "'Inter', system-ui, sans-serif",
        color: palette.color,
        flexShrink: 0,
        letterSpacing: "0.02em",
        border: "none",
      }}
    >
      {initials}
    </div>
  );
}

function StatusBadge({ status }) {
  const s = status.toLowerCase();
  let bg = C.grayBg;
  let color = C.grayText;
  let border = "none";

  if (s === "paid" || s === "active") {
    bg = "#dcfce7";
    color = "#15803d";
  } else if (s === "open") {
    bg = C.grayBg;
    color = C.grayText;
  } else if (s === "overdue") {
    bg = C.yellowBg;
    color = C.yellowText;
  }
  // void / cancelled / inactive / archived → default gray

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "2px 10px",
        borderRadius: "999px",
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
function Card({ children, style }) {
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
    <span style={{ marginLeft: "3px", display: "inline-flex", alignItems: "center", verticalAlign: "middle" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/edition/Icons/2.svg" alt="" width={12} height={12} style={{ opacity: 0.5 }} draggable={false} />
    </span>
  );
}

/* ── Three-dot icon (static, decorative) ── */
function DotMenu() {
  return (
    <svg
      width="14" height="14" viewBox="0 0 448 512" fill={C.textMuted}
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
    </svg>
  );
}

/* ── Copy / clipboard icon for payment links ── */
function CopyIcon() {
  return (
    <span style={{ fontSize: "11px", color: C.textMuted, cursor: "default", opacity: 0.55 }}>
      &#x2398;
    </span>
  );
}

/* ── Service thumbnail ── */
function ServiceThumb({ index }) {
  const palette = getAvatarPalette(index);
  return (
    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: "6px",
        backgroundColor: palette.bg,
        flexShrink: 0,
      }}
    />
  );
}

/* ── Info tooltip icon ── */
function InfoIcon() {
  return (
    <span style={{ fontSize: "10px", color: C.textMuted, marginLeft: "2px", cursor: "default" }}>
      &#x24D8;
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
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#f9fafb"; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
          style={{
            display: "grid",
            gridTemplateColumns: INV_COLS,
            gap: "0",
            alignItems: "center",
            padding: "8px 4px",
            margin: "0 -4px",
            borderTop: `1px solid ${C.borderLight}`,
            fontSize: "11px",
            color: C.text,
            borderRadius: "4px",
            transition: "background-color 0.1s ease",
          }}
        >
          {/* Recipient */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 0 }}>
            <Avatar initials={row.initials} index={i} />
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {row.name}
            </span>
          </div>
          {/* Price */}
          <span style={{ fontVariantNumeric: "tabular-nums" }}>
            ${row.price.toLocaleString()}
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
        <span>Created</span>
        <span>Next payment</span>
        <span />
      </div>

      {/* Rows */}
      {SUBSCRIPTIONS_DATA.map((row, i) => (
        <div
          key={i}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#f9fafb"; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
          style={{
            display: "grid",
            gridTemplateColumns: SUB_COLS,
            gap: "0",
            alignItems: "center",
            padding: "8px 4px",
            margin: "0 -4px",
            borderTop: `1px solid ${C.borderLight}`,
            fontSize: "11px",
            color: C.text,
            borderRadius: "4px",
            transition: "background-color 0.1s ease",
          }}
        >
          {/* Recipient */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 0 }}>
            <Avatar initials={row.initials} index={i} />
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

/* ── Payment Links table (desktop) ── */
const PL_COLS = "minmax(140px,2fr) minmax(80px,1fr) minmax(80px,0.8fr) minmax(90px,1fr) minmax(60px,0.7fr) 24px";

function PaymentLinksTable() {
  return (
    <div style={{ overflow: "hidden" }}>
      {/* Header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: PL_COLS,
          gap: "0",
          padding: "0 0 8px",
          fontSize: "11px",
          color: C.textMuted,
          fontWeight: 400,
        }}
      >
        <span>Name</span>
        <span>Price</span>
        <span>Checkouts</span>
        <span>Created</span>
        <span>Status</span>
        <span />
      </div>

      {/* Rows */}
      {PAYMENT_LINKS_DATA.map((row, i) => (
        <div
          key={i}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#f9fafb"; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
          style={{
            display: "grid",
            gridTemplateColumns: PL_COLS,
            gap: "0",
            alignItems: "center",
            padding: "8px 4px",
            margin: "0 -4px",
            borderTop: `1px solid ${C.borderLight}`,
            fontSize: "11px",
            color: C.text,
            borderRadius: "4px",
            transition: "background-color 0.1s ease",
          }}
        >
          {/* Name */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 0 }}>
            <ServiceThumb index={i} />
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {row.name}
            </span>
          </div>
          {/* Price */}
          <span style={{ fontVariantNumeric: "tabular-nums" }}>
            ${row.price.toLocaleString()}{row.recurring && <span style={{ color: C.textMuted, fontSize: "10px" }}>/{row.recurring}</span>}
          </span>
          {/* Checkouts */}
          <span style={{ color: C.textSec }}>{row.checkouts}</span>
          {/* Created */}
          <span style={{ color: C.textSec }}>{row.created}</span>
          {/* Status */}
          <span><StatusBadge status={row.status} /></span>
          {/* Menu */}
          <DotMenu />
        </div>
      ))}
    </div>
  );
}

/* ── Stores table (desktop) — same layout as Payment Links ── */
const ST_COLS = "minmax(140px,2fr) minmax(80px,1fr) minmax(80px,0.8fr) minmax(90px,1fr) minmax(60px,0.7fr) 24px";

function StoresTable() {
  return (
    <div style={{ overflow: "hidden" }}>
      {/* Header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: ST_COLS,
          gap: "0",
          padding: "0 0 8px",
          fontSize: "11px",
          color: C.textMuted,
          fontWeight: 400,
        }}
      >
        <span>Name</span>
        <span>Price</span>
        <span>Checkouts</span>
        <span>Created</span>
        <span>Status</span>
        <span />
      </div>

      {/* Rows */}
      {STORES_DATA.map((row, i) => (
        <div
          key={i}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#f9fafb"; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
          style={{
            display: "grid",
            gridTemplateColumns: ST_COLS,
            gap: "0",
            alignItems: "center",
            padding: "8px 4px",
            margin: "0 -4px",
            borderTop: `1px solid ${C.borderLight}`,
            fontSize: "11px",
            color: C.text,
            borderRadius: "4px",
            transition: "background-color 0.1s ease",
          }}
        >
          {/* Name */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 0 }}>
            <ServiceThumb index={i + 6} />
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {row.name}
            </span>
          </div>
          {/* Price */}
          <span style={{ fontVariantNumeric: "tabular-nums" }}>
            ${row.price.toLocaleString()}{row.recurring && <span style={{ color: C.textMuted, fontSize: "10px" }}>/{row.recurring}</span>}
          </span>
          {/* Checkouts */}
          <span style={{ color: C.textSec }}>{row.checkouts}</span>
          {/* Created */}
          <span style={{ color: C.textSec }}>{row.created}</span>
          {/* Status */}
          <span><StatusBadge status={row.status} /></span>
          {/* Menu */}
          <DotMenu />
        </div>
      ))}
    </div>
  );
}

/* ── Services table (desktop) ── */
const SVC_COLS = "minmax(180px,2.5fr) minmax(80px,1fr) minmax(60px,0.7fr) 24px";

function ServicesTable() {
  return (
    <div style={{ overflow: "hidden" }}>
      {/* Header */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: SVC_COLS,
          gap: "0",
          padding: "0 0 8px",
          fontSize: "11px",
          color: C.textMuted,
          fontWeight: 400,
        }}
      >
        <span>Name</span>
        <span>Price</span>
        <span>Status</span>
        <span />
      </div>

      {/* Rows */}
      {SERVICES_DATA.map((row, i) => (
        <div
          key={i}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#f9fafb"; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
          style={{
            display: "grid",
            gridTemplateColumns: SVC_COLS,
            gap: "0",
            alignItems: "center",
            padding: "8px 4px",
            margin: "0 -4px",
            borderTop: `1px solid ${C.borderLight}`,
            fontSize: "11px",
            color: C.text,
            borderRadius: "4px",
            transition: "background-color 0.1s ease",
          }}
        >
          {/* Name */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: 0 }}>
            <ServiceThumb index={row.thumbIdx} />
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {row.name}
            </span>
          </div>
          {/* Price */}
          <span style={{ fontVariantNumeric: "tabular-nums" }}>
            ${row.price.toLocaleString()}
          </span>
          {/* Status */}
          <span><StatusBadge status={row.status} /></span>
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
          gridTemplateColumns: "1fr 72px 90px",
          gap: "8px",
          padding: "0 0 8px",
          fontSize: "10px",
          color: C.textMuted,
        }}
      >
        <span>Recipient</span>
        <span>Price</span>
        <span>Status</span>
      </div>
      {INVOICES_DATA.slice(0, 10).map((row, i) => (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 72px 90px",
            gap: "8px",
            alignItems: "center",
            padding: "7px 0",
            borderTop: `1px solid ${C.borderLight}`,
            fontSize: "11px",
            color: C.text,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px", minWidth: 0 }}>
            <Avatar initials={row.initials} index={i} />
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
          gridTemplateColumns: "1fr 72px 90px",
          gap: "8px",
          padding: "0 0 8px",
          fontSize: "10px",
          color: C.textMuted,
        }}
      >
        <span>Recipient</span>
        <span>Price</span>
        <span>Status</span>
      </div>
      {SUBSCRIPTIONS_DATA.slice(0, 10).map((row, i) => (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 72px 90px",
            gap: "8px",
            alignItems: "center",
            padding: "7px 0",
            borderTop: `1px solid ${C.borderLight}`,
            fontSize: "11px",
            color: C.text,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px", minWidth: 0 }}>
            <Avatar initials={row.initials} index={i} />
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

/* ── Mobile Payment Links ── */
function MobilePaymentLinksTable() {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 72px 90px",
          gap: "8px",
          padding: "0 0 8px",
          fontSize: "10px",
          color: C.textMuted,
        }}
      >
        <span>Name</span>
        <span>Price</span>
        <span>Status</span>
      </div>
      {PAYMENT_LINKS_DATA.map((row, i) => (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 72px 90px",
            gap: "8px",
            alignItems: "center",
            padding: "7px 0",
            borderTop: `1px solid ${C.borderLight}`,
            fontSize: "11px",
            color: C.text,
          }}
        >
          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "11px" }}>
            {row.name}
          </span>
          <span style={{ fontVariantNumeric: "tabular-nums", fontSize: "11px" }}>
            ${row.price.toLocaleString()}
          </span>
          <StatusBadge status={row.status} />
        </div>
      ))}
    </div>
  );
}

/* ── Mobile Stores ── */
function MobileStoresTable() {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 72px 90px",
          gap: "8px",
          padding: "0 0 8px",
          fontSize: "10px",
          color: C.textMuted,
        }}
      >
        <span>Name</span>
        <span>Price</span>
        <span>Status</span>
      </div>
      {STORES_DATA.map((row, i) => (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 72px 90px",
            gap: "8px",
            alignItems: "center",
            padding: "7px 0",
            borderTop: `1px solid ${C.borderLight}`,
            fontSize: "11px",
            color: C.text,
          }}
        >
          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontSize: "11px" }}>
            {row.name}
          </span>
          <span style={{ fontVariantNumeric: "tabular-nums", fontSize: "11px" }}>
            ${row.price.toLocaleString()}
          </span>
          <StatusBadge status={row.status} />
        </div>
      ))}
    </div>
  );
}

/* ── Mobile Services ── */
function MobileServicesTable() {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 72px 90px",
          gap: "8px",
          padding: "0 0 8px",
          fontSize: "10px",
          color: C.textMuted,
        }}
      >
        <span>Name</span>
        <span>Price</span>
        <span>Status</span>
      </div>
      {SERVICES_DATA.map((row, i) => (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 72px 90px",
            gap: "8px",
            alignItems: "center",
            padding: "7px 0",
            borderTop: `1px solid ${C.borderLight}`,
            fontSize: "11px",
            color: C.text,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px", minWidth: 0 }}>
            <ServiceThumb index={row.thumbIdx} />
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
  from,
  to,
  started,
  duration = 2400,
  delay = 1000
) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!started) return;
    let raf;
    const start = performance.now() + delay;

    function tick(now) {
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

function formatCurrency(n) {
  return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function OverviewContent({ isInView }) {
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
          <img src="/edition/Icons/calendar.svg" alt="" width={10} height={10} style={{ opacity: 0.5 }} draggable={false} />
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
            <img src="/edition/Icons/checkgreen.svg" alt="" width={10} height={10} draggable={false} style={{ flexShrink: 0 }} />
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
            Open Dashboard <span style={{ fontSize: "12px" }}>&#x2197;</span>
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
function MobileOverviewContent({ isInView }) {
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
            <img src="/edition/Icons/checkgreen.svg" alt="" width={9} height={9} draggable={false} style={{ flexShrink: 0 }} />
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

const TABS = [
  { id: "overview", label: "Overview" },
  { id: "invoices", label: "Invoices" },
  { id: "subscriptions", label: "Subscriptions" },
  { id: "payment-links", label: "Payment links" },
  { id: "stores", label: "Stores" },
  { id: "services", label: "Services" },
];

const ALL_TAB_LABELS = ["Overview", "Invoices", "Subscriptions", "Payment links", "Stores", "Services"];


/* ═══════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════ */

export function OnePaymentsDemo({ inSplit = false }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-80px" });
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  const [activeTab, setActiveTab] = useState("overview");
  const userTookOver = useRef(false);
  const timerRefs = useRef({ delay: null, interval: null });

  /* ── Auto-cycle tabs ── */
  useEffect(() => {
    if (!isInView || userTookOver.current) return;
    timerRefs.current.delay = setTimeout(() => {
      if (userTookOver.current) return;
      setActiveTab((prev) => {
        const idx = TAB_ORDER.indexOf(prev);
        return TAB_ORDER[(idx + 1) % TAB_ORDER.length];
      });
      timerRefs.current.interval = setInterval(() => {
        if (userTookOver.current) return;
        setActiveTab((prev) => {
          const idx = TAB_ORDER.indexOf(prev);
          return TAB_ORDER[(idx + 1) % TAB_ORDER.length];
        });
      }, AUTO_CYCLE_MS);
    }, AUTO_CYCLE_INITIAL_DELAY);
    return () => {
      clearTimeout(timerRefs.current.delay);
      if (timerRefs.current.interval) clearInterval(timerRefs.current.interval);
    };
  }, [isInView]);

  const handleTabClick = useCallback((tab) => {
    userTookOver.current = true;
    clearTimeout(timerRefs.current.delay);
    if (timerRefs.current.interval) clearInterval(timerRefs.current.interval);
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
              overflowY: "hidden",
              WebkitOverflowScrolling: "touch",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              overscrollBehaviorX: "contain",
              touchAction: "pan-x",
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
                    transition: "color 0.3s ease",
                  }}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="payments-tab-underline-mobile"
                      style={{
                        position: "absolute",
                        bottom: -1,
                        left: 0,
                        right: 0,
                        height: "2px",
                        backgroundColor: C.text,
                        zIndex: 2,
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </span>
              );
            })}
          </div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", backgroundColor: C.border }} />
        </div>

        {/* Content — fixed height to prevent layout shift */}
        <div style={{ height: "290px", overflow: "hidden" }}>
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
            {activeTab === "payment-links" && (
              <motion.div
                key="mobile-payment-links"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ padding: "12px 16px 16px" }}
              >
                <MobilePaymentLinksTable />
              </motion.div>
            )}
            {activeTab === "stores" && (
              <motion.div
                key="mobile-stores"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ padding: "12px 16px 16px" }}
              >
                <MobileStoresTable />
              </motion.div>
            )}
            {activeTab === "services" && (
              <motion.div
                key="mobile-services"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{ padding: "12px 16px 16px" }}
              >
                <MobileServicesTable />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  }

  /* ─────────────────────── DESKTOP VIEW ─────────────────────── */

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: C.bg,
        borderRadius: "10px",
        border: `1px solid ${C.border}`,
        cursor: "default",
        boxShadow: "0 8px 30px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.06)",
        fontFamily: "'Inter', system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Page header */}
      <div style={{ padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "53px", boxSizing: "border-box" }}>
        <div style={{ fontSize: "13px", fontWeight: 500, color: C.text }}>
          Payments
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
                  transition: "color 0.3s ease",
                }}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="payments-tab-underline"
                    style={{
                      position: "absolute",
                      bottom: -1,
                      left: 0,
                      right: 0,
                      height: "2px",
                      backgroundColor: C.text,
                      zIndex: 2,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
              </span>
            );
          })}
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", backgroundColor: C.border }} />
      </div>

      {/* Page content — fixed height to match Overview across all tabs */}
      <div style={{ padding: "16px 24px 24px", overflow: "hidden", height: "370px" }}>
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
          {activeTab === "payment-links" && (
            <motion.div
              key="payment-links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <PaymentLinksTable />
            </motion.div>
          )}
          {activeTab === "stores" && (
            <motion.div
              key="stores"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <StoresTable />
            </motion.div>
          )}
          {activeTab === "services" && (
            <motion.div
              key="services"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <ServicesTable />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
