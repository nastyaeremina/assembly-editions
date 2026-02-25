"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* ──────────────────────────────────────────────────────────
   CREATE TASK DEMO — Interactive modal prototype
   Matches the Figma "Create task" modal design.
   Only interactive element: "Share with client" toggle.
   ────────────────────────────────────────────────────────── */

/* ── Colors ── */
const C = {
  bg: "#ffffff",
  bgAlt: "#f5f6f7",
  border: "#e5e7eb",
  borderLight: "#f0f0f0",
  text: "#18181b",
  textSec: "#6b7280",
  textTertiary: "#9ca3af",
  toggleOn: "#18181b",
  toggleOff: "#d1d5db",
  createText: "#9ca3af",
  createBorder: "#e5e7eb",
} as const;

/* ════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════ */

interface CreateTaskDemoProps {
  inSplit?: boolean;
}

export function CreateTaskDemo({ inSplit = false }: CreateTaskDemoProps) {
  const [shareWithClient, setShareWithClient] = useState(false);

  return (
    <>
    <style>{`@keyframes cursorBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }`}</style>
    <motion.div
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
        display: "flex", flexDirection: "column",
      }}
    >
      {/* Modal header */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 20px 12px",
        borderBottom: `1px solid ${C.borderLight}`,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "15px", fontWeight: 600, color: C.text }}>Create task</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Icons/Primary-1.svg" alt="" width={16} height={16} style={{ display: "block", opacity: 0.35 }} />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/Icons/Icon (approved) copy.svg" alt="" width={12} height={12} style={{ display: "block", opacity: 0.3, cursor: "default" }} />
      </div>

      {/* Title + description area */}
      <div style={{
        padding: "16px 20px",
        borderBottom: `1px solid ${C.borderLight}`,
      }}>
        <div style={{
          fontSize: "15px", fontWeight: 500, color: C.text,
          marginBottom: "6px",
        }}>
          Competitor analysis<span style={{ color: C.toggleOn, fontWeight: 400, animation: "cursorBlink 1s step-end infinite" }}>|</span>
        </div>
        <div style={{
          fontSize: "13px", color: C.textTertiary,
          minHeight: "56px",
        }}>Add description...</div>
      </div>

      {/* Toolbar pills */}
      <div style={{
        display: "flex", alignItems: "center", gap: "6px",
        padding: "12px 20px", flexWrap: "wrap",
      }}>
        {/* Todo pill */}
        <div style={{
          display: "flex", alignItems: "center", gap: "5px",
          padding: "0 12px", height: "32px", borderRadius: "6px",
          border: `1px solid ${C.border}`, fontSize: "12px", fontWeight: 400,
          color: C.textSec, cursor: "default",
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Icons/circle.svg" alt="" width={12} height={12} style={{ display: "block", opacity: 0.5 }} />
          Todo
        </div>

        {/* Due date pill */}
        <div style={{
          display: "flex", alignItems: "center", gap: "5px",
          padding: "0 12px", height: "32px", borderRadius: "6px",
          border: `1px solid ${C.border}`, fontSize: "12px", fontWeight: 400,
          color: C.textSec, cursor: "default",
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Icons/Primary.svg" alt="" width={12} height={13} style={{ display: "block", opacity: 0.5 }} />
          Due date
        </div>

        {/* Assignee pill */}
        <div style={{
          display: "flex", alignItems: "center", gap: "5px",
          padding: "0 12px", height: "32px", borderRadius: "6px",
          border: `1px solid ${C.border}`, fontSize: "12px", fontWeight: 400,
          color: C.textSec, cursor: "default",
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Icons/user.svg" alt="" width={12} height={13} style={{ display: "block", opacity: 0.5 }} />
          Assignee
        </div>

        {/* Related to — with avatar */}
        <div style={{
          display: "flex", alignItems: "center", gap: "6px",
          padding: "0 12px", height: "32px", borderRadius: "6px",
          border: `1px solid ${C.border}`, fontSize: "12px", fontWeight: 500,
          color: C.text, cursor: "default",
        }}>
          <div style={{
            width: "22px", height: "22px", borderRadius: "50%",
            backgroundColor: "#f0e4f1", display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, fontSize: "9px", fontWeight: 600, color: "#6b2fa0", letterSpacing: "0.5px",
          }}>SG</div>
          Samantha Ganter
        </div>
      </div>

      {/* Share with client toggle row */}
      <div style={{
        padding: "10px 20px",
      }}>
        <div style={{
          display: "flex", alignItems: "center", gap: "12px",
        }}>
          {/* Toggle */}
          <div
            onClick={() => setShareWithClient(!shareWithClient)}
            style={{
              width: "36px", height: "20px", borderRadius: "10px",
              backgroundColor: shareWithClient ? C.toggleOn : C.toggleOff,
              cursor: "pointer", position: "relative",
              transition: "background-color 200ms ease",
              flexShrink: 0,
            }}
          >
            <div style={{
              width: "16px", height: "16px", borderRadius: "50%",
              backgroundColor: "#ffffff",
              position: "absolute", top: "2px",
              left: shareWithClient ? "18px" : "2px",
              transition: "left 200ms ease",
              boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
            }} />
          </div>
          <span style={{ fontSize: "13px", fontWeight: 500, color: C.text }}>Share with client</span>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", backgroundColor: C.borderLight }} />

      {/* Footer */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "flex-end",
        gap: "8px", padding: "14px 20px",
      }}>
        <div style={{
          padding: "6px 16px", borderRadius: "6px",
          fontSize: "13px", fontWeight: 500, color: C.text,
          border: `1px solid ${C.border}`,
          cursor: "default",
        }}>Discard</div>
        <div style={{
          padding: "6px 16px", borderRadius: "6px",
          fontSize: "13px", fontWeight: 500,
          color: C.createText,
          backgroundColor: C.bgAlt,
          border: `1px solid ${C.createBorder}`,
          cursor: "default",
        }}>Create</div>
      </div>
    </motion.div>
    </>
  );
}
