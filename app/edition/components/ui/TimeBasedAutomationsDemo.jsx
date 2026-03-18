"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useIdleHint } from "../../hooks/useIdleHint";

/* ──────────────────────────────────────────────────────────
   TIME-BASED AUTOMATIONS DEMO
   Full-screen app view showing the Create Automation flow
   with scheduled time trigger configuration.
   Static (non-interactive) — just a visual showcase.
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
};

/* ── Icon paths ── */
const ICO = {
  calendar: "/edition/Icons/calendar.svg",
  upDown: "/edition/Icons/angles-up-down-duotone-solid-full 1.svg",
  chevronDown: "/edition/Icons/Vector.svg",
  dotGrid: "/edition/Icons/Dot Grid.svg",
};

/* ── Preset options ── */
const DATE_OPTIONS = [
  { label: "Mon, Jan 12, 2026", day: "12th" },
  { label: "Wed, Jan 14, 2026", day: "14th" },
  { label: "Fri, Jan 16, 2026", day: "16th" },
  { label: "Mon, Jan 19, 2026", day: "19th" },
  { label: "Wed, Jan 21, 2026", day: "21st" },
];
const TIME_OPTIONS = ["7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "12:00 PM", "2:00 PM"];
const UNIT_OPTIONS = ["day", "week", "month", "year"];

const INIT = { date: "Mon, Jan 12, 2026", time: "8:00 AM", repeatOn: true, repeatNum: 1, unit: "month" };

/* ── Reusable dropdown ── */
function MiniDropdown({ options, value, onSelect, onClose, align = "left" }) {
  const ref = useRef(null);
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) onClose(); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -3, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -3, scale: 0.97 }}
        transition={{ duration: 0.12, ease: "easeOut" }}
        style={{
          position: "absolute", top: "calc(100% + 3px)",
          ...(align === "left" ? { left: 0 } : { right: 0 }),
          zIndex: 60, backgroundColor: "#fff",
          border: `1px solid ${C.border}`, borderRadius: "6px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.06)",
          minWidth: "100%", overflow: "hidden", padding: "3px",
        }}
      >
        {options.map((opt) => {
          const label = typeof opt === "string" ? opt : opt.label;
          const isActive = label === value;
          return (
            <button
              key={label} type="button"
              onClick={() => { onSelect(opt); onClose(); }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#f5f5f5"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = isActive ? "#f0f0f0" : "transparent"; }}
              style={{
                display: "block", width: "100%", padding: "5px 8px",
                border: "none", borderRadius: "4px", cursor: "pointer",
                fontSize: "11px", color: C.text, textAlign: "left",
                fontFamily: "'Inter', system-ui, sans-serif",
                backgroundColor: isActive ? "#f0f0f0" : "transparent",
                fontWeight: isActive ? 500 : 400,
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </button>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
}

/* ════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════ */

export function TimeBasedAutomationsDemo({ inSplit = false }) {
  const isDesktop = useMediaQuery("(min-width: 1024px)", true);

  /* ── Desktop interactive state ── */
  const [dDate, setDDate] = useState(INIT.date);
  const [dTime, setDTime] = useState(INIT.time);
  const [dRepeatOn, setDRepeatOn] = useState(INIT.repeatOn);
  const [dRepeatNum, setDRepeatNum] = useState(INIT.repeatNum);
  const [dUnit, setDUnit] = useState(INIT.unit);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [showUnitPicker, setShowUnitPicker] = useState(false);
  const [activateFlash, setActivateFlash] = useState(false);
  const [showDateTooltip, setShowDateTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const { containerRef: idleRef, isIdle: dateIdleActive, dismiss: dismissIdle } = useIdleHint({ delay: 2500 });

  const interact = useCallback(() => { setHasInteracted(true); dismissIdle(); }, [dismissIdle]);

  const hasChanged = dDate !== INIT.date || dTime !== INIT.time || dRepeatOn !== INIT.repeatOn || dRepeatNum !== INIT.repeatNum || dUnit !== INIT.unit;

  const resetDesktop = useCallback(() => {
    setDDate(INIT.date); setDTime(INIT.time); setDRepeatOn(INIT.repeatOn);
    setDRepeatNum(INIT.repeatNum); setDUnit(INIT.unit);
    setShowDatePicker(false); setShowTimePicker(false); setShowUnitPicker(false);
    setActivateFlash(false);
  }, []);

  const handleActivate = useCallback(() => {
    if (!hasChanged) return;
    setActivateFlash(true);
    setTimeout(() => { setActivateFlash(false); resetDesktop(); }, 500);
  }, [hasChanged, resetDesktop]);

  /* Derive canvas summary text */
  const dateObj = DATE_OPTIONS.find((d) => d.label === dDate);
  const dayLabel = dateObj ? dateObj.day : "12th";
  const canvasSummary = dRepeatOn
    ? `Every ${dRepeatNum > 1 ? dRepeatNum + " " : ""}${dUnit}${dRepeatNum > 1 ? "s" : ""} on the ${dayLabel} at ${dTime}`
    : `On the ${dayLabel} at ${dTime}`;

  /* ── Mobile auto-play state ── */
  const [mDate, setMDate] = useState("Mon, Jan 12, 2026");
  const [mTime, setMTime] = useState("8:00 AM");
  const [mRepeatOn, setMRepeatOn] = useState(false);
  const [mRepeatNum, setMRepeatNum] = useState(1);
  const [mUnit, setMUnit] = useState("month");
  const mUserTookOver = useRef(false);

  /* ── Mobile dropdown states ── */
  const [mShowDatePicker, setMShowDatePicker] = useState(false);
  const [mShowTimePicker, setMShowTimePicker] = useState(false);
  const [mShowUnitPicker, setMShowUnitPicker] = useState(false);

  const stopMobileAuto = useCallback(() => { mUserTookOver.current = true; }, []);

  /* ── Mobile auto-play loop ── */
  useEffect(() => {
    if (isDesktop) return;
    let cancelled = false;
    const wait = (ms) => new Promise((r) => {
      const t = setTimeout(r, ms);
      if (cancelled) clearTimeout(t);
    });

    async function loop() {
      while (!cancelled && !mUserTookOver.current) {
        setMDate("Mon, Jan 12, 2026");
        setMTime("8:00 AM");
        setMRepeatOn(false);
        setMRepeatNum(1);
        setMUnit("month");
        await wait(1500);
        if (cancelled || mUserTookOver.current) break;

        setMDate("Mon, Jan 31, 2026");
        await wait(800);
        if (cancelled || mUserTookOver.current) break;

        setMTime("9:00 AM");
        await wait(800);
        if (cancelled || mUserTookOver.current) break;

        setMRepeatOn(true);
        await wait(1000);
        if (cancelled || mUserTookOver.current) break;

        setMRepeatNum(2);
        await wait(2500);
        if (cancelled || mUserTookOver.current) break;

        await wait(1200);
      }
    }

    loop();
    return () => { cancelled = true; };
  }, [isDesktop]);

  /* ── Mobile: just the config panel with auto-play ── */
  if (!isDesktop) {
    return (
      <>

      <motion.div
        className="interactive-hint"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          width: "100%",
          maxWidth: "min(100%, 520px)",
          borderRadius: "10px",
          border: `1px solid ${C.border}`,
          backgroundColor: C.cardBg,
          padding: "20px 18px",
          fontFamily: "'Inter', system-ui, sans-serif",
          overflow: "visible",
        }}
      >
        {/* Panel title */}
        <div style={{
          fontSize: "15px", fontWeight: 500, color: C.text,
          marginBottom: "22px", letterSpacing: "-0.01em",
        }}>Scheduled time</div>

        {/* Start date + Start time side by side */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "14px" }}>
          <div style={{ flex: 1, position: "relative" }}>
            <div style={{ fontSize: "12px", fontWeight: 500, color: C.text, marginBottom: "6px" }}>Start date</div>
            <div
              onClick={() => { stopMobileAuto(); setMShowDatePicker(!mShowDatePicker); setMShowTimePicker(false); setMShowUnitPicker(false); }}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "10px 12px", borderRadius: "6px",
                border: `1px solid ${mShowDatePicker ? C.text : C.border}`,
                fontSize: "12px", color: C.text, cursor: "pointer",
                transition: "border-color 150ms ease",
              }}
            >
              <span style={{ transition: "opacity 0.3s ease" }} key={mDate}>{mDate}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={ICO.calendar} alt="" width={13} height={14} style={{ display: "block", opacity: 0.45 }} />
            </div>
            {mShowDatePicker && (
              <MiniDropdown
                options={DATE_OPTIONS}
                value={mDate}
                onSelect={(opt) => setMDate(opt.label)}
                onClose={() => setMShowDatePicker(false)}
              />
            )}
          </div>

          <div style={{ width: "100px", flexShrink: 0, position: "relative" }}>
            <div style={{ fontSize: "12px", fontWeight: 500, color: C.text, marginBottom: "6px" }}>Start time</div>
            <div
              onClick={() => { stopMobileAuto(); setMShowTimePicker(!mShowTimePicker); setMShowDatePicker(false); setMShowUnitPicker(false); }}
              style={{
                padding: "10px 12px", borderRadius: "6px",
                border: `1px solid ${mShowTimePicker ? C.text : C.border}`,
                fontSize: "12px", color: C.text, cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "border-color 150ms ease",
              }}
            >
              <span style={{ transition: "opacity 0.3s ease" }} key={mTime}>{mTime}</span>
            </div>
            {mShowTimePicker && (
              <MiniDropdown
                options={TIME_OPTIONS}
                value={mTime}
                onSelect={(opt) => setMTime(opt)}
                onClose={() => setMShowTimePicker(false)}
                align="right"
              />
            )}
          </div>
        </div>

        {/* Timezone */}
        <div style={{
          display: "flex", alignItems: "center", gap: "6px",
          fontSize: "11px", color: C.textSec,
          marginBottom: "20px",
          paddingBottom: "20px",
          borderBottom: `1px solid ${C.borderLight}`,
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, opacity: 0.5 }}>
            <path d="M6 0.75C3.10156 0.75 0.75 3.10156 0.75 6C0.75 8.89844 3.10156 11.25 6 11.25C8.89844 11.25 11.25 8.89844 11.25 6C11.25 3.10156 8.89844 0.75 6 0.75ZM6 10.125C5.65078 10.125 5.05078 9.49687 4.64531 8.25H7.35469C6.94922 9.49687 6.34922 10.125 6 10.125ZM4.45078 7.125C4.38984 6.76172 4.35938 6.38438 4.35938 6C4.35938 5.61562 4.38984 5.23828 4.45078 4.875H7.54922C7.61016 5.23828 7.64062 5.61562 7.64062 6C7.64062 6.38438 7.61016 6.76172 7.54922 7.125H4.45078ZM1.875 6C1.875 5.61094 1.92422 5.23359 2.01562 4.875H3.31641C3.26484 5.24297 3.23438 5.61797 3.23438 6C3.23438 6.38203 3.26484 6.75703 3.31641 7.125H2.01562C1.92422 6.76641 1.875 6.38906 1.875 6ZM6 1.875C6.34922 1.875 6.94922 2.50313 7.35469 3.75H4.64531C5.05078 2.50313 5.65078 1.875 6 1.875ZM8.68359 4.875H9.98438C10.0758 5.23359 10.125 5.61094 10.125 6C10.125 6.38906 10.0758 6.76641 9.98438 7.125H8.68359C8.73516 6.75703 8.76562 6.38203 8.76562 6C8.76562 5.61797 8.73516 5.24297 8.68359 4.875ZM9.52266 3.75H8.42344C8.21484 2.89687 7.89609 2.17031 7.49531 1.63594C8.36953 2.02969 9.07031 2.80312 9.52266 3.75ZM4.50469 1.63594C4.10391 2.17031 3.78516 2.89687 3.57656 3.75H2.47734C2.92969 2.80312 3.63047 2.02969 4.50469 1.63594ZM2.47734 8.25H3.57656C3.78516 9.10313 4.10391 9.82969 4.50469 10.3641C3.63047 9.97031 2.92969 9.19688 2.47734 8.25ZM7.49531 10.3641C7.89609 9.82969 8.21484 9.10313 8.42344 8.25H9.52266C9.07031 9.19688 8.36953 9.97031 7.49531 10.3641Z" fill="#6b7280"/>
          </svg>
          <span>Time zone: Eastern time (GMT-05:00)</span>
        </div>

        {/* Repeat toggle — interactive */}
        <div style={{
          display: "flex", alignItems: "center", gap: "10px",
          marginBottom: "10px",
        }}>
          <div
            onClick={() => { stopMobileAuto(); setMRepeatOn(!mRepeatOn); }}
            style={{
              width: "36px", height: "20px", borderRadius: "10px",
              backgroundColor: mRepeatOn ? C.text : "#d1d5db",
              position: "relative",
              transition: "background-color 0.4s ease",
              flexShrink: 0, cursor: "pointer",
            }}
          >
            <div style={{
              width: "16px", height: "16px", borderRadius: "50%",
              backgroundColor: "#ffffff",
              position: "absolute", top: "2px",
              left: mRepeatOn ? "18px" : "2px",
              transition: "left 300ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
            }} />
          </div>
          <span style={{ fontSize: "12px", fontWeight: 500, color: C.text }}>Repeat</span>
        </div>

        {/* Repeat details */}
        <div style={{
          opacity: mRepeatOn ? 1 : 0.35,
          transition: "opacity 0.4s ease",
          pointerEvents: mRepeatOn ? "auto" : "none",
        }}>
          <div style={{
            fontSize: "11px", color: C.textSec, marginBottom: "16px",
            lineHeight: 1.4,
          }}>
            The trigger always uses the start time.
          </div>

          <div style={{ fontSize: "12px", fontWeight: 500, color: C.text, marginBottom: "8px" }}>
            Repeat every
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "10px 12px", borderRadius: "6px",
              border: `1px solid ${C.border}`,
              fontSize: "12px", color: C.text,
              width: "70px",
            }}>
              <span key={mRepeatNum} style={{ transition: "opacity 0.3s ease" }}>
                {mRepeatNum}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                <div onClick={() => { stopMobileAuto(); setMRepeatNum((n) => Math.min(n + 1, 12)); }} style={{ padding: "6px 6px 3px", margin: "-6px -4px -3px 0", cursor: "pointer", lineHeight: 0 }}>
                  <svg width="10" height="7" viewBox="0 0 8 6" fill="none"><path d="M3.65 0.35C3.85 0.15 4.15 0.15 4.35 0.35L7.05 3.05C7.25 3.25 7.25 3.55 7.05 3.75C6.85 3.95 6.55 3.95 6.35 3.75L4 1.4L1.65 3.75C1.45 3.95 1.15 3.95 0.95 3.75C0.75 3.55 0.75 3.25 0.95 3.05L3.65 0.35Z" fill="#212B36" fillOpacity="0.5" /></svg>
                </div>
                <div onClick={() => { stopMobileAuto(); setMRepeatNum((n) => Math.max(n - 1, 1)); }} style={{ padding: "3px 6px 6px", margin: "-3px -4px -6px 0", cursor: "pointer", lineHeight: 0 }}>
                  <svg width="10" height="7" viewBox="0 0 8 6" fill="none"><path d="M4.35 5.65C4.15 5.85 3.85 5.85 3.65 5.65L0.95 2.95C0.75 2.75 0.75 2.45 0.95 2.25C1.15 2.05 1.45 2.05 1.65 2.25L4 4.6L6.35 2.25C6.55 2.05 6.85 2.05 7.05 2.25C7.25 2.45 7.25 2.75 7.05 2.95L4.35 5.65Z" fill="#212B36" fillOpacity="0.5" /></svg>
                </div>
              </div>
            </div>

            <div style={{ flex: 1, position: "relative" }}>
              <div
                onClick={() => { stopMobileAuto(); setMShowUnitPicker(!mShowUnitPicker); setMShowDatePicker(false); setMShowTimePicker(false); }}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "10px 12px", borderRadius: "6px",
                  border: `1px solid ${mShowUnitPicker ? C.text : C.border}`,
                  fontSize: "12px", color: C.text, cursor: "pointer",
                  transition: "border-color 150ms ease",
                }}
              >
                <span>{mUnit}</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ICO.chevronDown} alt="" width={10} height={7} style={{ display: "block", opacity: 0.4 }} />
              </div>
              {mShowUnitPicker && (
                <MiniDropdown
                  options={UNIT_OPTIONS}
                  value={mUnit}
                  onSelect={(opt) => setMUnit(opt)}
                  onClose={() => setMShowUnitPicker(false)}
                />
              )}
            </div>
          </div>
        </div>
      </motion.div>
      </>
    );
  }

  /* ── Desktop: full app view (static, no interactions) ── */
  return (
    <div ref={idleRef}>
    <motion.div
      className="interactive-hint"
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        width: "100%",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.13)",
        boxShadow: "0 8px 30px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.06)",
        fontFamily: "'Inter', system-ui, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* ─── Browser chrome ─── */}
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
            <span style={{ color: C.textMuted, fontSize: "10px" }}>{"\u203A"}</span>
            <span style={{ color: C.text, fontWeight: 500 }}>Create automation</span>
          </div>
          {/* Cancel + Activate buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <button type="button" onClick={resetDesktop} style={{
              padding: "4px 12px", borderRadius: "5px",
              fontSize: "11px", fontWeight: 500, color: C.text,
              border: `1px solid ${C.cancelBorder}`,
              cursor: "pointer", backgroundColor: "transparent",
              fontFamily: "'Inter', system-ui, sans-serif",
            }}>Cancel</button>
            <button type="button" onClick={handleActivate} style={{
              padding: "4px 12px", borderRadius: "5px",
              fontSize: "11px", fontWeight: 500,
              color: activateFlash ? "#fff" : (hasChanged ? "#fff" : C.activateText),
              backgroundColor: activateFlash ? "#15803d" : (hasChanged ? C.text : C.activateBg),
              border: `1px solid ${activateFlash ? "#15803d" : (hasChanged ? C.text : C.activateBorder)}`,
              cursor: hasChanged ? "pointer" : "default",
              fontFamily: "'Inter', system-ui, sans-serif",
              transition: "all 200ms ease",
            }}>{activateFlash ? "\u2713 Activated" : "Activate"}</button>
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
            {/* Scheduled time card — selected state */}
            <div style={{
              width: "100%", maxWidth: "380px",
              border: `1.5px solid ${C.border}`,
              borderRadius: "8px",
              backgroundColor: C.cardBg,
              padding: "14px 16px",
              display: "flex", flexDirection: "column", gap: "3px",
              boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.03)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                {/* Clock icon */}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, opacity: 0.5 }}>
                  <path d="M7 0.875C3.61719 0.875 0.875 3.61719 0.875 7C0.875 10.3828 3.61719 13.125 7 13.125C10.3828 13.125 13.125 10.3828 13.125 7C13.125 3.61719 10.3828 0.875 7 0.875ZM7 12.0312C4.22266 12.0312 1.96875 9.77734 1.96875 7C1.96875 4.22266 4.22266 1.96875 7 1.96875C9.77734 1.96875 12.0312 4.22266 12.0312 7C12.0312 9.77734 9.77734 12.0312 7 12.0312ZM8.72266 8.72266C8.93359 8.93359 9.28516 8.93359 9.49609 8.72266C9.70703 8.51172 9.70703 8.16016 9.49609 7.94922L7.54688 5.99609V3.28125C7.54688 2.97656 7.30469 2.73438 7 2.73438C6.69531 2.73438 6.45312 2.97656 6.45312 3.28125V6.22266C6.45312 6.36719 6.50781 6.50391 6.60938 6.60547L8.72266 8.72266Z" fill="#18181b"/>
                </svg>
                <span style={{ fontSize: "13px", fontWeight: 500, color: C.text }}>Scheduled time</span>
              </div>
              <div style={{ fontSize: "11px", color: C.textSec, paddingLeft: "21px", transition: "opacity 0.2s ease" }}>
                {canvasSummary}
              </div>
            </div>

            {/* Connector line */}
            <div style={{ width: "1px", height: "14px", backgroundColor: C.border }} />

            {/* Send message action card */}
            <div style={{
              width: "100%", maxWidth: "380px",
              border: `1.5px solid ${C.border}`,
              borderRadius: "8px",
              backgroundColor: C.cardBg,
              padding: "14px 16px",
              display: "flex", flexDirection: "column", gap: "3px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                {/* Message icon */}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0, opacity: 0.5 }}>
                  <path d="M5.56992 13.1496L4.53633 13.8797C4.33672 14.0219 4.07422 14.0383 3.85547 13.9262C3.63672 13.8141 3.5 13.5898 3.5 13.3437V11.375H2.625C1.17578 11.375 0 10.1992 0 8.75V2.625C0 1.17578 1.17578 0 2.625 0H11.375C12.8242 0 14 1.17578 14 2.625V8.75C14 10.1992 12.8242 11.375 11.375 11.375H8.08281L5.56992 13.1496ZM7.32812 10.3031C7.54961 10.1473 7.81484 10.0625 8.08555 10.0625H11.375C12.0996 10.0625 12.6875 9.47461 12.6875 8.75V2.625C12.6875 1.90039 12.0996 1.3125 11.375 1.3125H2.625C1.90039 1.3125 1.3125 1.90039 1.3125 2.625V8.75C1.3125 9.47461 1.90039 10.0625 2.625 10.0625H4.15625C4.44063 10.0625 4.68398 10.243 4.77422 10.4973C4.79883 10.5656 4.8125 10.6395 4.8125 10.7187V12.0777C5.70664 11.4461 6.54336 10.8555 7.32539 10.3031H7.32812Z" fill="#18181b"/>
                </svg>
                <span style={{ fontSize: "13px", fontWeight: 500, color: C.text }}>Send message</span>
              </div>
              <div style={{ fontSize: "11px", color: C.textSec, paddingLeft: "21px" }}>
                Send a reminder to the client
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

          {/* ── Right config panel (static) ── */}
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
              <span style={{ fontSize: "11px" }}>{"\u2190"}</span>
              Select another trigger
            </div>

            {/* Panel title */}
            <div style={{
              fontSize: "15px", fontWeight: 500, color: C.text,
              marginBottom: "20px", letterSpacing: "-0.01em",
            }}>Scheduled time</div>

            {/* Start date + Start time side by side */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "14px" }}>
              {/* Start date — clickable dropdown */}
              <div style={{ flex: 1, position: "relative" }}>
                <div style={{ fontSize: "10px", fontWeight: 500, color: C.text, marginBottom: "5px" }}>Start date</div>
                <div style={{ position: "relative", display: "inline-block", width: "100%" }}>
                  <motion.div
                    onClick={() => { setShowDatePicker(!showDatePicker); setShowTimePicker(false); setShowUnitPicker(false); setShowDateTooltip(false); interact(); }}
                    onMouseEnter={() => { if (!showDatePicker) setShowDateTooltip(true); }}
                    onMouseLeave={() => setShowDateTooltip(false)}
                    animate={dateIdleActive && !hasInteracted ? {
                      boxShadow: [
                        "0 0 0 0px rgba(0,0,0,0)",
                        "0 0 0 3px rgba(0,0,0,0.05)",
                        "0 0 0 0px rgba(0,0,0,0)",
                      ],
                    } : { boxShadow: "0 0 0 0px rgba(0,0,0,0)" }}
                    transition={dateIdleActive && !hasInteracted ? {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    } : { duration: 0.2 }}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "7px 10px", borderRadius: "6px",
                      border: `1px solid ${showDatePicker ? C.text : C.border}`,
                      fontSize: "11px", color: C.text, cursor: "pointer",
                      transition: "border-color 150ms ease",
                    }}
                  >
                    <span>{dDate}</span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ICO.calendar} alt="" width={11} height={12} style={{ display: "block", opacity: 0.45 }} />
                  </motion.div>
                  {/* Tooltip */}
                  <AnimatePresence>
                    {showDateTooltip && !showDatePicker && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        style={{
                          position: "absolute",
                          bottom: "calc(100% + 8px)",
                          left: "50%",
                          transform: "translateX(-50%)",
                          zIndex: 50,
                          pointerEvents: "none",
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
                            Click to change
                          </span>
                          <div style={{
                            position: "absolute",
                            bottom: "-4px",
                            left: "50%",
                            marginLeft: "-4px",
                            width: "8px",
                            height: "8px",
                            backgroundColor: "rgba(39, 39, 42, 0.95)",
                            transform: "rotate(45deg)",
                            borderRight: "1px solid rgba(63, 63, 70, 0.5)",
                            borderBottom: "1px solid rgba(63, 63, 70, 0.5)",
                          }} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                {showDatePicker && (
                  <MiniDropdown
                    options={DATE_OPTIONS}
                    value={dDate}
                    onSelect={(opt) => setDDate(opt.label)}
                    onClose={() => setShowDatePicker(false)}
                  />
                )}
              </div>

              {/* Start time — clickable dropdown */}
              <div style={{ width: "80px", flexShrink: 0, position: "relative" }}>
                <div style={{ fontSize: "10px", fontWeight: 500, color: C.text, marginBottom: "5px" }}>Start time</div>
                <div
                  onClick={() => { setShowTimePicker(!showTimePicker); setShowDatePicker(false); setShowUnitPicker(false); interact(); }}
                  style={{
                    padding: "7px 10px", borderRadius: "6px",
                    border: `1px solid ${showTimePicker ? C.text : C.border}`,
                    fontSize: "11px", color: C.text, cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "border-color 150ms ease",
                  }}
                >
                  {dTime}
                </div>
                {showTimePicker && (
                  <MiniDropdown
                    options={TIME_OPTIONS}
                    value={dTime}
                    onSelect={(opt) => setDTime(opt)}
                    onClose={() => setShowTimePicker(false)}
                    align="right"
                  />
                )}
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

            {/* Repeat toggle — interactive */}
            <div style={{
              display: "flex", alignItems: "center", gap: "8px",
              marginBottom: "8px",
            }}>
              <div
                onClick={() => { setDRepeatOn(!dRepeatOn); interact(); }}
                style={{
                  width: "32px", height: "18px", borderRadius: "9px",
                  backgroundColor: dRepeatOn ? C.text : "#d1d5db",
                  cursor: "pointer", position: "relative",
                  flexShrink: 0,
                  transition: "background-color 300ms ease",
                }}
              >
                <div style={{
                  width: "14px", height: "14px", borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  position: "absolute", top: "2px",
                  left: dRepeatOn ? "16px" : "2px",
                  transition: "left 300ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.15)",
                }} />
              </div>
              <span style={{ fontSize: "12px", fontWeight: 500, color: C.text }}>Repeat</span>
            </div>

            {/* Repeat details */}
            <div style={{ opacity: dRepeatOn ? 1 : 0.35, transition: "opacity 0.3s ease", pointerEvents: dRepeatOn ? "auto" : "none" }}>
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
                {/* Number input — up/down arrows */}
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "7px 10px", borderRadius: "6px",
                  border: `1px solid ${C.border}`,
                  fontSize: "11px", color: C.text,
                  width: "60px",
                }}>
                  <span>{dRepeatNum}</span>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                    <div onClick={() => { setDRepeatNum((n) => Math.min(n + 1, 12)); interact(); }} style={{ padding: "6px 6px 3px", margin: "-6px -4px -3px 0", cursor: "pointer", lineHeight: 0 }}>
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M3.65 0.35C3.85 0.15 4.15 0.15 4.35 0.35L7.05 3.05C7.25 3.25 7.25 3.55 7.05 3.75C6.85 3.95 6.55 3.95 6.35 3.75L4 1.4L1.65 3.75C1.45 3.95 1.15 3.95 0.95 3.75C0.75 3.55 0.75 3.25 0.95 3.05L3.65 0.35Z" fill="#212B36" fillOpacity="0.5" /></svg>
                    </div>
                    <div onClick={() => { setDRepeatNum((n) => Math.max(n - 1, 1)); interact(); }} style={{ padding: "3px 6px 6px", margin: "-3px -4px -6px 0", cursor: "pointer", lineHeight: 0 }}>
                      <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M4.35 5.65C4.15 5.85 3.85 5.85 3.65 5.65L0.95 2.95C0.75 2.75 0.75 2.45 0.95 2.25C1.15 2.05 1.45 2.05 1.65 2.25L4 4.6L6.35 2.25C6.55 2.05 6.85 2.05 7.05 2.25C7.25 2.45 7.25 2.75 7.05 2.95L4.35 5.65Z" fill="#212B36" fillOpacity="0.5" /></svg>
                    </div>
                  </div>
                </div>

                {/* Unit dropdown — clickable */}
                <div style={{ flex: 1, position: "relative" }}>
                  <div
                    onClick={() => { setShowUnitPicker(!showUnitPicker); setShowDatePicker(false); setShowTimePicker(false); interact(); }}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "7px 10px", borderRadius: "6px",
                      border: `1px solid ${showUnitPicker ? C.text : C.border}`,
                      fontSize: "11px", color: C.text, cursor: "pointer",
                      transition: "border-color 150ms ease",
                    }}
                  >
                    <span>{dUnit}</span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ICO.chevronDown} alt="" width={9} height={6} style={{ display: "block", opacity: 0.4 }} />
                  </div>
                  {showUnitPicker && (
                    <MiniDropdown
                      options={UNIT_OPTIONS}
                      value={dUnit}
                      onSelect={(opt) => setDUnit(opt)}
                      onClose={() => setShowUnitPicker(false)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>{/* close app layout */}
    </motion.div>
    </div>
  );
}
