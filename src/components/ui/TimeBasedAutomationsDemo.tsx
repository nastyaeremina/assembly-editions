"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ──────────────────────────────────────────────────────────
   TIME-BASED AUTOMATIONS DEMO
   Full-screen app view showing the Create Automation flow
   with scheduled time trigger configuration.
   ────────────────────────────────────────────────────────── */

/* ── Colors ── */
const C = {
  /* Content */
  bg: "#fafafa",
  cardBg: "#ffffff",
  border: "#e5e7eb",
  borderLight: "#f0f0f0",
  text: "#18181b",
  textSec: "#6b7280",
  textMuted: "#9ca3af",

  /* Actions */
  cancelBorder: "#d1d5db",
  activateBg: "#f5f5f5",
  activateText: "#a3a3a3",
  activateBorder: "#e5e7eb",
} as const;

/* ── Icon paths ── */
const ICO = {
  calendar: "/Icons/calendar.svg",
  upDown: "/Icons/angles-up-down-duotone-solid-full 1.svg",
  chevronDown: "/Icons/Vector.svg",
  dotGrid: "/Icons/Dot Grid.svg",
};

/* ════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════ */

interface TimeBasedAutomationsDemoProps {
  inSplit?: boolean;
}

export function TimeBasedAutomationsDemo({ inSplit = false }: TimeBasedAutomationsDemoProps) {
  const [repeatOn, setRepeatOn] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        width: "100%",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        boxShadow: "0 8px 30px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.06)",
        fontFamily: "'Inter', system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* ─── Browser chrome ─── */}
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
          dashboard.assembly.com
        </div>
      </div>

      {/* ─── App layout ─── */}
      <div style={{ display: "flex", height: "640px", backgroundColor: C.cardBg }}>

      {/* ─── CONTENT ─── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Top bar with breadcrumb + actions */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "12px 16px",
          borderBottom: `1px solid ${C.borderLight}`,
        }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
            <span style={{ color: C.textSec, fontWeight: 400 }}>Automations</span>
            <span style={{ color: C.textMuted, fontSize: "10px" }}>›</span>
            <span style={{ color: C.text, fontWeight: 500 }}>Create automation</span>
          </div>
          {/* Cancel + Activate buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{
              padding: "4px 12px", borderRadius: "5px",
              fontSize: "11px", fontWeight: 500, color: C.text,
              border: `1px solid ${C.cancelBorder}`,
              cursor: "default",
            }}>Cancel</div>
            <div style={{
              padding: "4px 12px", borderRadius: "5px",
              fontSize: "11px", fontWeight: 500,
              color: C.activateText,
              backgroundColor: C.activateBg,
              border: `1px solid ${C.activateBorder}`,
              cursor: "default",
            }}>Activate</div>
          </div>
        </div>

        {/* Main split: automation canvas + right config panel */}
        <div style={{ flex: 1, display: "flex", minHeight: 0 }}>
          {/* ── Canvas area with dot grid ── */}
          <div style={{
            flex: 1, display: "flex", flexDirection: "column",
            alignItems: "center",
            backgroundColor: C.bg,
            padding: "28px 24px",
            gap: "0px",
            backgroundImage: `url("${ICO.dotGrid}")`,
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
          }}>
            {/* Scheduled time card */}
            <div style={{
              width: "100%", maxWidth: "380px",
              border: `1.5px solid ${C.border}`,
              borderRadius: "8px",
              backgroundColor: C.cardBg,
              padding: "14px 16px",
              display: "flex", flexDirection: "column", gap: "3px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                {/* Clock icon */}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, opacity: 0.5 }}>
                  <path d="M7 0.875C3.61719 0.875 0.875 3.61719 0.875 7C0.875 10.3828 3.61719 13.125 7 13.125C10.3828 13.125 13.125 10.3828 13.125 7C13.125 3.61719 10.3828 0.875 7 0.875ZM7 12.0312C4.22266 12.0312 1.96875 9.77734 1.96875 7C1.96875 4.22266 4.22266 1.96875 7 1.96875C9.77734 1.96875 12.0312 4.22266 12.0312 7C12.0312 9.77734 9.77734 12.0312 7 12.0312ZM8.72266 8.72266C8.93359 8.93359 9.28516 8.93359 9.49609 8.72266C9.70703 8.51172 9.70703 8.16016 9.49609 7.94922L7.54688 5.99609V3.28125C7.54688 2.97656 7.30469 2.73438 7 2.73438C6.69531 2.73438 6.45312 2.97656 6.45312 3.28125V6.22266C6.45312 6.36719 6.50781 6.50391 6.60938 6.60547L8.72266 8.72266Z" fill="#18181b"/>
                </svg>
                <span style={{ fontSize: "13px", fontWeight: 500, color: C.text }}>Scheduled time</span>
              </div>
              <div style={{ fontSize: "11px", color: C.textSec, paddingLeft: "21px" }}>
                Every month on the 12th at 8:00 AM
              </div>
            </div>

            {/* Connector line */}
            <div style={{ width: "1px", height: "14px", backgroundColor: C.border }} />

            {/* Add step button */}
            <div style={{
              width: "20px", height: "20px", borderRadius: "5px",
              backgroundColor: "#52525b",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "default",
            }}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 1.5V8.5M1.5 5H8.5" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* ── Right config panel ── */}
          <div style={{
            width: "280px",
            minWidth: "280px",
            borderLeft: `1px solid ${C.borderLight}`,
            backgroundColor: C.cardBg,
            padding: "16px 14px",
            display: "flex",
            flexDirection: "column",
          }}>
            {/* Back link */}
            <div style={{
              display: "flex", alignItems: "center", gap: "4px",
              fontSize: "10px", color: C.textSec, marginBottom: "6px",
              cursor: "default",
            }}>
              <span style={{ fontSize: "11px" }}>←</span>
              Select another trigger
            </div>

            {/* Panel title */}
            <div style={{
              fontSize: "16px", fontWeight: 600, color: C.text,
              marginBottom: "20px", letterSpacing: "-0.01em",
            }}>Scheduled time</div>

            {/* Start date + Start time side by side */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "14px" }}>
              {/* Start date */}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "10px", fontWeight: 500, color: C.text, marginBottom: "5px" }}>Start date</div>
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "7px 10px", borderRadius: "6px",
                  border: `1px solid ${C.border}`,
                  fontSize: "11px", color: C.text,
                }}>
                  <span>Mon, Jan 12, 2026</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ICO.calendar} alt="" width={11} height={12} style={{ display: "block", opacity: 0.45 }} />
                </div>
              </div>

              {/* Start time */}
              <div style={{ width: "70px", flexShrink: 0 }}>
                <div style={{ fontSize: "10px", fontWeight: 500, color: C.text, marginBottom: "5px" }}>Start time</div>
                <div style={{
                  padding: "7px 10px", borderRadius: "6px",
                  border: `1px solid ${C.border}`,
                  fontSize: "11px", color: C.text,
                }}>8:00 AM</div>
              </div>
            </div>

            {/* Timezone */}
            <div style={{
              display: "flex", alignItems: "center", gap: "5px",
              fontSize: "10px", color: C.textSec,
              marginBottom: "16px",
              paddingBottom: "16px",
              borderBottom: `1px solid ${C.borderLight}`,
            }}>
              {/* Globe icon */}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, opacity: 0.5 }}>
                <path d="M6 0.75C3.10156 0.75 0.75 3.10156 0.75 6C0.75 8.89844 3.10156 11.25 6 11.25C8.89844 11.25 11.25 8.89844 11.25 6C11.25 3.10156 8.89844 0.75 6 0.75ZM6 10.125C5.65078 10.125 5.05078 9.49687 4.64531 8.25H7.35469C6.94922 9.49687 6.34922 10.125 6 10.125ZM4.45078 7.125C4.38984 6.76172 4.35938 6.38438 4.35938 6C4.35938 5.61562 4.38984 5.23828 4.45078 4.875H7.54922C7.61016 5.23828 7.64062 5.61562 7.64062 6C7.64062 6.38438 7.61016 6.76172 7.54922 7.125H4.45078ZM1.875 6C1.875 5.61094 1.92422 5.23359 2.01562 4.875H3.31641C3.26484 5.24297 3.23438 5.61797 3.23438 6C3.23438 6.38203 3.26484 6.75703 3.31641 7.125H2.01562C1.92422 6.76641 1.875 6.38906 1.875 6ZM6 1.875C6.34922 1.875 6.94922 2.50313 7.35469 3.75H4.64531C5.05078 2.50313 5.65078 1.875 6 1.875ZM8.68359 4.875H9.98438C10.0758 5.23359 10.125 5.61094 10.125 6C10.125 6.38906 10.0758 6.76641 9.98438 7.125H8.68359C8.73516 6.75703 8.76562 6.38203 8.76562 6C8.76562 5.61797 8.73516 5.24297 8.68359 4.875ZM9.52266 3.75H8.42344C8.21484 2.89687 7.89609 2.17031 7.49531 1.63594C8.36953 2.02969 9.07031 2.80312 9.52266 3.75ZM4.50469 1.63594C4.10391 2.17031 3.78516 2.89687 3.57656 3.75H2.47734C2.92969 2.80312 3.63047 2.02969 4.50469 1.63594ZM2.47734 8.25H3.57656C3.78516 9.10313 4.10391 9.82969 4.50469 10.3641C3.63047 9.97031 2.92969 9.19688 2.47734 8.25ZM7.49531 10.3641C7.89609 9.82969 8.21484 9.10313 8.42344 8.25H9.52266C9.07031 9.19688 8.36953 9.97031 7.49531 10.3641Z" fill="#6b7280"/>
              </svg>
              <span>Time zone: Eastern time (GMT-05:00)</span>
            </div>

            {/* Repeat toggle */}
            <div style={{
              display: "flex", alignItems: "center", gap: "8px",
              marginBottom: "8px",
            }}>
              {/* Toggle */}
              <div
                onClick={() => setRepeatOn(!repeatOn)}
                style={{
                  width: "32px", height: "18px", borderRadius: "9px",
                  backgroundColor: repeatOn ? C.text : "#d1d5db",
                  cursor: "pointer", position: "relative",
                  transition: "background-color 200ms ease",
                  flexShrink: 0,
                }}
              >
                <div style={{
                  width: "14px", height: "14px", borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  position: "absolute", top: "2px",
                  left: repeatOn ? "16px" : "2px",
                  transition: "left 200ms ease",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
                }} />
              </div>
              <span style={{ fontSize: "12px", fontWeight: 500, color: C.text }}>Repeat</span>
            </div>

            {/* Repeat details (shown when toggle is on) */}
            <AnimatePresence>
              {repeatOn && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                >
                  {/* Helper text */}
                  <div style={{
                    fontSize: "10px", color: C.textSec, marginBottom: "14px",
                    lineHeight: 1.4,
                  }}>
                    The trigger always uses the start time.
                  </div>

                  {/* Repeat every label */}
                  <div style={{ fontSize: "10px", fontWeight: 500, color: C.text, marginBottom: "6px" }}>
                    Repeat every
                  </div>

                  {/* Number + Unit selectors */}
                  <div style={{ display: "flex", gap: "8px" }}>
                    {/* Number input */}
                    <div style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "7px 10px", borderRadius: "6px",
                      border: `1px solid ${C.border}`,
                      fontSize: "11px", color: C.text,
                      width: "60px",
                    }}>
                      <span>1</span>
                      <svg width="10" height="14" viewBox="0 0 10 14" fill="none" style={{ display: "block", opacity: 0.4 }}>
                        <path d="M4.55 0.85C4.74 0.66 5.06 0.66 5.25 0.85L7.95 3.55C8.14 3.74 8.14 4.06 7.95 4.25C7.76 4.44 7.44 4.44 7.25 4.25L4.9 1.9L2.55 4.25C2.36 4.44 2.04 4.44 1.85 4.25C1.66 4.06 1.66 3.74 1.85 3.55L4.55 0.85Z" fill="#212B36"/>
                        <path d="M5.25 13.15C5.06 13.34 4.74 13.34 4.55 13.15L1.85 10.45C1.66 10.26 1.66 9.94 1.85 9.75C2.04 9.56 2.36 9.56 2.55 9.75L4.9 12.1L7.25 9.75C7.44 9.56 7.76 9.56 7.95 9.75C8.14 9.94 8.14 10.26 7.95 10.45L5.25 13.15Z" fill="#212B36"/>
                      </svg>
                    </div>

                    {/* Unit dropdown */}
                    <div style={{
                      flex: 1,
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "7px 10px", borderRadius: "6px",
                      border: `1px solid ${C.border}`,
                      fontSize: "11px", color: C.text,
                    }}>
                      <span>month</span>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={ICO.chevronDown} alt="" width={9} height={6} style={{ display: "block", opacity: 0.4 }} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      </div>{/* close app layout */}
    </motion.div>
  );
}
