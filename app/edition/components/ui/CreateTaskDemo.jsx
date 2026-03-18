"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIdleHint } from "../../hooks/useIdleHint";
import { useMediaQuery } from "../../hooks/useMediaQuery";

/* ──────────────────────────────────────────────────────────
   CREATE TASK DEMO — Interactive modal prototype
   Desktop: clicking "Related to" pill opens a client picker.
   Mobile: auto-plays animation loop (select client →
   show toggle → switch on → hold → reset → repeat).
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
};

/* ── Client data ── */
const CLIENTS = [
  { id: "ms", initials: "MS", name: "Mary Sung", subtitle: "mary@servicesymphony.c...", color: "#f0e6c8", textColor: "#8a7230" },
  { id: "cm", initials: "CM", name: "Charles Musial", subtitle: "charles@servicesymphony.c...", color: "#e8e4f0", textColor: "#6b5b95" },
];

/* ── Todo status states ── */
const TODO_STATES = [
  { label: "Todo",        color: C.textSec,  iconOpacity: 0.5 },
  { label: "In progress", color: "#b45309",  iconOpacity: 0.7 },
  { label: "Done",        color: "#115B3B",  iconOpacity: 1.0 },
];

/* ── Assignee preset ── */
const ASSIGNEE = { initials: "AW", name: "Alex Werner", color: "#d1e7dd", textColor: "#0f5132" };
const DUE_DATE_LABEL = "Jan 15, 2026";

/* ════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════ */

export function CreateTaskDemo({ inSplit = false }) {
  const [relatedClient, setRelatedClient] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [shareWithClient, setShareWithClient] = useState(false);
  const pickerRef = useRef(null);
  const containerRef = useRef(null);
  const [showRelatedTooltip, setShowRelatedTooltip] = useState(false);
  const [description, setDescription] = useState("");
  const [todoStatus, setTodoStatus] = useState(0);
  const [dueDateSet, setDueDateSet] = useState(false);
  const [assigneeSet, setAssigneeSet] = useState(false);
  const [titleValue, setTitleValue] = useState("Review Onboarding Intake Form");
  const [titleEditing, setTitleEditing] = useState(false);
  const [createFlash, setCreateFlash] = useState(false);
  const titleInputRef = useRef(null);
  /* Mobile animation: which pill is currently being highlighted */
  const [activePill, setActivePill] = useState(null); // "todo" | "date" | "assignee" | "related" | "share" | null
  /* Mobile: fade the whole card for smooth reset */
  const [mobileCardVisible, setMobileCardVisible] = useState(true);

  const isMobile = useMediaQuery("(max-width: 1023px)", false);

  /* Mobile pill truncation style — keeps pills from reflowing */
  const mobilePillClip = isMobile ? { maxWidth: "155px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } : {};

  /* Reset all state to initial */
  const resetAll = () => {
    setRelatedClient(null);
    setShowPicker(false);
    setShareWithClient(false);
    setShowRelatedTooltip(false);
    setDescription("");
    setTodoStatus(0);
    setDueDateSet(false);
    setAssigneeSet(false);
    setTitleValue("Review Onboarding Intake Form");
    setTitleEditing(false);
    setCreateFlash(false);
  };

  /* At least one field pill must be set */
  const hasFieldSet = todoStatus !== 0 || dueDateSet || assigneeSet || relatedClient !== null;

  /* Handle Create button click */
  const handleCreate = () => {
    if (!titleValue.trim() || isMobile || !hasFieldSet) return;
    setCreateFlash(true);
    setTimeout(() => {
      setCreateFlash(false);
      resetAll();
    }, 400);
  };

  /* Idle hint — subtle glow pulse on "Related to" pill (desktop only) */
  const { containerRef: idleRef, isIdle: pillIdleActive, dismiss: dismissIdle } = useIdleHint({ delay: 2500 });

  /* ── Mobile auto-play loop ──
     Minimal: pre-fill everything, only animate "Related to" → Share → Create */
  useEffect(() => {
    if (!isMobile) return;
    let cancelled = false;
    const wait = (ms) => new Promise((r) => { const t = setTimeout(r, ms); if (cancelled) clearTimeout(t); });

    async function loop() {
      while (!cancelled) {
        // Pre-fill everything except Related to + Share
        setRelatedClient(null);
        setShareWithClient(false);
        setShowPicker(false);
        setTodoStatus(1);          // "In progress" from the start
        setDueDateSet(true);       // "Jan 15, 2026" from the start
        setAssigneeSet(true);      // "Alex Werner" from the start
        setDescription("");
        setTitleValue("Review Onboarding Intake Form");
        setTitleEditing(false);
        setCreateFlash(false);
        setActivePill(null);
        setMobileCardVisible(true);
        await wait(2000);
        if (cancelled) break;

        // Step 1: Press "Related to" pill, then select client
        setActivePill("related");
        await wait(350);
        if (cancelled) break;
        setActivePill(null);
        setRelatedClient("ms");
        await wait(1400);
        if (cancelled) break;
        if (cancelled) break;

        // Step 2: Toggle share on
        setShareWithClient(true);
        await wait(1800);
        if (cancelled) break;

        // Hold the completed state, then fade out and reset
        await wait(1800);
        if (cancelled) break;
        setMobileCardVisible(false);
        await wait(600);
        if (cancelled) break;
      }
    }

    loop();
    return () => { cancelled = true; };
  }, [isMobile]);

  // Close picker on outside click (desktop only)
  useEffect(() => {
    if (!showPicker || isMobile) return;
    const handler = (e) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target)) {
        setShowPicker(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showPicker, isMobile]);

  const selectClient = (clientId) => {
    setRelatedClient(clientId);
    setShowPicker(false);
  };

  const selectedClient = relatedClient ? CLIENTS.find((c) => c.id === relatedClient) : null;

  return (
    <div ref={(el) => {
      containerRef.current = el;
      idleRef.current = el;
    }} style={{ width: "100%", maxWidth: "600px" }}>
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      animate={isMobile ? { opacity: mobileCardVisible ? 1 : 0 } : undefined}
      transition={isMobile ? { duration: 0.5, ease: "easeInOut" } : { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        width: "100%",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.13)",
        boxShadow: "0 8px 30px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.06)",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      {/* ─── Browser chrome ─── */}
      <div style={{
        position: "relative", display: "flex", alignItems: "center",
        backgroundColor: "#141414", padding: "12px 16px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "10px 10px 0 0",
        overflow: "hidden",
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

      {/* ─── Modal content ─── */}
      <div style={{
        backgroundColor: C.bg,
        display: "flex",
        flexDirection: "column",
        borderRadius: "0 0 10px 10px",
      }}>
      {/* ── Modal header ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 20px 12px",
          borderBottom: `1px solid ${C.borderLight}`,
        }}
      >
        <span style={{ fontSize: "14px", fontWeight: 500, color: C.text }}>
          Create task
        </span>
      </div>

      {/* ── Title + description area ── */}
      <div
        style={{
          padding: "16px 20px",
          borderBottom: `1px solid ${C.borderLight}`,
        }}
      >
        {titleEditing && !isMobile ? (
          <input
            ref={titleInputRef}
            type="text"
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value.slice(0, 60))}
            onBlur={() => setTitleEditing(false)}
            onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); setTitleEditing(false); } if (e.key === "Escape") { setTitleEditing(false); } }}
            maxLength={60}
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: C.text,
              marginBottom: "6px",
              width: "100%",
              border: "none",
              outline: "none",
              padding: 0,
              backgroundColor: "transparent",
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          />
        ) : (
          <div
            onClick={() => { if (!isMobile) { setTitleEditing(true); setTimeout(() => titleInputRef.current?.focus(), 0); } }}
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: C.text,
              marginBottom: "6px",
              cursor: isMobile ? "default" : "text",
            }}
          >
            {titleValue}
          </div>
        )}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add description..."
          rows={2}
          readOnly={isMobile}
          style={{
            fontSize: "12px",
            color: C.text,
            width: "100%",
            border: "none",
            outline: "none",
            resize: "none",
            padding: 0,
            margin: 0,
            backgroundColor: "transparent",
            fontFamily: "'Inter', system-ui, sans-serif",
            lineHeight: "18px",
            maxHeight: "36px",
            overflow: "hidden",
          }}
        />
      </div>

      {/* ── Toolbar pills ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "12px 20px",
          flexWrap: "wrap",
        }}
      >
        {/* Todo pill — cycles: Todo → In progress → Done */}
        {(() => {
          const state = TODO_STATES[todoStatus];
          const isActive = isMobile && activePill === "todo";
          return (
            <motion.button
              type="button"
              onClick={() => { if (!isMobile) setTodoStatus((s) => (s + 1) % 3); }}
              whileHover={isMobile ? undefined : { backgroundColor: "#f9fafb" }}
              animate={isActive ? { scale: 1.05, backgroundColor: "#f5f6f7" } : { scale: 1, backgroundColor: "transparent" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "0 12px",
                height: "32px",
                borderRadius: "6px",
                border: `1px solid ${isActive ? "#d1d5db" : C.border}`,
                fontSize: "12px",
                fontWeight: 400,
                color: state.color,
                cursor: isMobile ? "default" : "pointer",
                fontFamily: "'Inter', system-ui, sans-serif",
                transition: "color 300ms ease, border-color 300ms ease",
                ...mobilePillClip,
              }}
            >
              {todoStatus === 0 && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src="/edition/Icons/circle.svg" alt="" width={12} height={12} style={{ display: "block", opacity: 0.5 }} />
              )}
              {todoStatus === 1 && (
                <svg width="12" height="12" viewBox="0 0 20 20" fill="none" style={{ display: "block", flexShrink: 0 }}>
                  <circle cx="10" cy="10" r="8.5" stroke="#b45309" strokeWidth="1.5" fill="none" />
                  <path d="M10 1.5 A8.5 8.5 0 0 1 10 18.5" fill="#b45309" />
                </svg>
              )}
              {todoStatus === 2 && (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src="/edition/Icons/checkgreen.svg" alt="" width={12} height={12} style={{ display: "block" }} />
              )}
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{state.label}</span>
            </motion.button>
          );
        })()}

        {/* Due date pill — toggles date value */}
        {(() => {
          const isActive = isMobile && activePill === "date";
          return (
        <motion.button
          type="button"
          onClick={() => { if (!isMobile) setDueDateSet((v) => !v); }}
          whileHover={isMobile ? undefined : { backgroundColor: "#f9fafb" }}
          animate={isActive ? { scale: 1.05, backgroundColor: "#f5f6f7" } : { scale: 1, backgroundColor: "transparent" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            padding: "0 12px",
            height: "32px",
            borderRadius: "6px",
            border: `1px solid ${isActive ? "#d1d5db" : C.border}`,
            fontSize: "12px",
            fontWeight: 400,
            color: dueDateSet ? C.text : C.textSec,
            cursor: isMobile ? "default" : "pointer",
            fontFamily: "'Inter', system-ui, sans-serif",
            transition: "color 300ms ease, border-color 300ms ease",
            ...mobilePillClip,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/edition/Icons/calendar.svg" alt="" width={11} height={12} style={{ display: "block", opacity: dueDateSet ? 0.8 : 0.5, flexShrink: 0 }} />
          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{dueDateSet ? DUE_DATE_LABEL : "Due date"}</span>
        </motion.button>
          );
        })()}

        {/* Assignee pill — toggle like status & due date */}
        {(() => { const isActive = isMobile && activePill === "assignee"; return (
        <motion.button
          type="button"
          onClick={() => { if (!isMobile) setAssigneeSet((v) => !v); }}
          whileHover={isMobile ? undefined : { backgroundColor: "#f9fafb" }}
          animate={isActive ? { scale: 1.05, backgroundColor: "#f5f6f7" } : { scale: 1, backgroundColor: "transparent" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            padding: "0 12px",
            height: "32px",
            borderRadius: "6px",
            border: `1px solid ${isActive ? "#d1d5db" : C.border}`,
            fontSize: "12px",
            fontWeight: 400,
            color: assigneeSet ? C.text : C.textSec,
            cursor: isMobile ? "default" : "pointer",
            fontFamily: "'Inter', system-ui, sans-serif",
            transition: "color 300ms ease, border-color 300ms ease",
            ...mobilePillClip,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/edition/Icons/user.svg" alt="" width={12} height={12} style={{ display: "block", opacity: assigneeSet ? 0.8 : 0.5, flexShrink: 0 }} />
          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{assigneeSet ? ASSIGNEE.name : "Assignee"}</span>
        </motion.button>
          );
        })()}

        {/* Related to pill — interactive */}
        <div ref={pickerRef} style={{ position: "relative" }}>
          {/* Button + tooltip wrapper — inline-block so it sizes to button */}
          <div style={{ position: "relative", display: "inline-block" }}>
            {(() => {
              const isActive = isMobile && activePill === "related";
              return (
            <motion.button
              type="button"
              onClick={() => {
                if (isMobile) {
                  const ids = [null, ...CLIENTS.map(c => c.id)];
                  const idx = ids.indexOf(relatedClient);
                  setRelatedClient(ids[(idx + 1) % ids.length]);
                } else {
                  setShowPicker(!showPicker); setShowRelatedTooltip(false); dismissIdle();
                }
              }}
              onMouseEnter={() => { if (!showPicker && !isMobile) setShowRelatedTooltip(true); }}
              onMouseLeave={() => setShowRelatedTooltip(false)}
              whileHover={isMobile ? undefined : { backgroundColor: "#f9fafb" }}
              animate={
                isActive
                  ? { scale: 0.96, backgroundColor: "#f0f1f3", boxShadow: "0 0 0 0px rgba(0,0,0,0)" }
                  : pillIdleActive && !relatedClient && !isMobile
                    ? { boxShadow: ["0 0 0 0px rgba(0,0,0,0)", "0 0 0 3px rgba(0,0,0,0.05)", "0 0 0 0px rgba(0,0,0,0)"], scale: 1, backgroundColor: "transparent" }
                    : { boxShadow: "0 0 0 0px rgba(0,0,0,0)", scale: 1, backgroundColor: "transparent" }
              }
              transition={
                isActive
                  ? { type: "spring", stiffness: 400, damping: 25 }
                  : pillIdleActive && !relatedClient && !isMobile
                    ? { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    : { type: "spring", stiffness: 400, damping: 25 }
              }
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "0 12px",
                height: "32px",
                borderRadius: "6px",
                border: `1px solid ${isActive ? "#d1d5db" : C.border}`,
                fontSize: "12px",
                fontWeight: 400,
                color: relatedClient ? C.text : C.textSec,
                cursor: "pointer",
                fontFamily: "'Inter', system-ui, sans-serif",
                transition: "color 300ms ease, border-color 300ms ease",
                ...mobilePillClip,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/edition/Icons/user.svg" alt="" width={12} height={12} style={{ display: "block", opacity: relatedClient ? 0.8 : 0.5, flexShrink: 0 }} />
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{relatedClient && selectedClient ? selectedClient.name : "Related to"}</span>
            </motion.button>
              );
            })()}
            {/* ── Tooltip (desktop only) ── */}
            <AnimatePresence>
              {showRelatedTooltip && !showPicker && !isMobile && (
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
                      Click to open
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

          {/* ── Client picker dropdown (desktop only) ── */}
          <AnimatePresence>
            {showPicker && !isMobile && (
              <motion.div
                initial={{ opacity: 0, y: -4, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -4, scale: 0.97 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  top: "calc(100% + 4px)",
                  left: 0,
                  zIndex: 60,
                  backgroundColor: "#fff",
                  border: `1px solid ${C.border}`,
                  borderRadius: "6px",
                  boxShadow:
                    "0 4px 16px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.06)",
                  minWidth: "210px",
                  overflow: "hidden",
                }}
              >
                {/* Search input */}
                <div
                  style={{
                    padding: "8px 10px",
                    borderBottom: `1px solid ${C.borderLight}`,
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      color: C.textTertiary,
                      cursor: "text",
                    }}
                  >
                    Set client or company
                  </div>
                </div>

                {/* Clients list */}
                <div style={{ padding: "4px" }}>
                  {CLIENTS.map((client) => (
                    <button
                      key={client.id}
                      type="button"
                      onClick={() => selectClient(client.id)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "#f5f5f5";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        width: "100%",
                        padding: "7px 8px",
                        border: "none",
                        backgroundColor: "transparent",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "12px",
                        fontWeight: 400,
                        color: C.text,
                        textAlign: "left",
                        fontFamily: "'Inter', system-ui, sans-serif",
                        transition: "background-color 100ms ease",
                      }}
                    >
                      <div
                        style={{
                          width: "26px",
                          height: "26px",
                          borderRadius: "50%",
                          backgroundColor: client.color,
                          flexShrink: 0,
                          fontSize: "10px",
                          fontWeight: 400,
                          fontFamily: "'Inter', system-ui, sans-serif",
                          color: client.textColor,
                          lineHeight: "26px",
                          textAlign: "center",
                        }}
                      >
                        {client.initials}
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: "12px", fontWeight: 500, color: C.text, lineHeight: 1.3 }}>{client.name}</div>
                        {client.subtitle && (
                          <div style={{ fontSize: "10px", color: C.textTertiary, lineHeight: 1.3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{client.subtitle}</div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Share with client toggle ── */}
      {isMobile ? (
        /* Mobile: always rendered (fixed height), dimmed when no client */
        <motion.div
          animate={{ opacity: relatedClient ? 1 : 0.35 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ pointerEvents: relatedClient ? "auto" : "none" }}
        >
          <div style={{ padding: "4px 20px 12px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                cursor: "default",
              }}
            >
              <div
                style={{
                  width: "34px",
                  height: "18px",
                  borderRadius: "9px",
                  backgroundColor: shareWithClient ? C.toggleOn : C.toggleOff,
                  position: "relative",
                  transition: "background-color 300ms ease",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: "14px",
                    height: "14px",
                    borderRadius: "50%",
                    backgroundColor: "#ffffff",
                    position: "absolute",
                    top: "2px",
                    left: shareWithClient ? "18px" : "2px",
                    transition: "left 300ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
                  }}
                />
              </div>
              <span style={{ fontSize: "12px", fontWeight: 400, color: C.text }}>
                Share with client
              </span>
            </div>
          </div>
        </motion.div>
      ) : (
        /* Desktop: expand/collapse with AnimatePresence */
        <AnimatePresence>
          {relatedClient && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div style={{ padding: "4px 20px 12px" }}>
                <div
                  onClick={() => setShareWithClient(!shareWithClient)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      width: "34px",
                      height: "18px",
                      borderRadius: "9px",
                      backgroundColor: shareWithClient ? C.toggleOn : C.toggleOff,
                      position: "relative",
                      transition: "background-color 300ms ease",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        width: "14px",
                        height: "14px",
                        borderRadius: "50%",
                        backgroundColor: "#ffffff",
                        position: "absolute",
                        top: "2px",
                        left: shareWithClient ? "18px" : "2px",
                        transition: "left 300ms cubic-bezier(0.34, 1.56, 0.64, 1)",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
                      }}
                    />
                  </div>
                  <span style={{ fontSize: "12px", fontWeight: 400, color: C.text }}>
                    Share with client
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* ── Divider ── */}
      <div style={{ height: "1px", backgroundColor: C.borderLight }} />

      {/* ── Footer ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "8px",
          padding: "14px 20px",
        }}
      >
        {(() => {
          const mobileReady = isMobile && hasFieldSet && titleValue.trim();
          const desktopReady = !isMobile && hasFieldSet && titleValue.trim();
          const isReady = mobileReady || desktopReady;
          return (
        <motion.button
          type="button"
          onClick={handleCreate}
          disabled={!isReady && !createFlash}
          animate={
            createFlash
              ? { scale: 1, backgroundColor: "#15803d", color: "#ffffff", borderColor: "#15803d" }
              : (isMobile && activePill === "create")
                ? { scale: 0.95, backgroundColor: C.text, color: "#ffffff", borderColor: C.text }
                : isReady
                  ? { scale: 1, backgroundColor: C.text, color: "#ffffff", borderColor: C.text }
                  : { scale: 1, backgroundColor: C.bgAlt, color: C.createText, borderColor: C.createBorder }
          }
          whileTap={isReady && !isMobile ? { scale: 0.96 } : undefined}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{
            padding: "6px 16px",
            borderRadius: "6px",
            fontSize: "12px",
            fontWeight: 500,
            cursor: isReady && !isMobile ? "pointer" : "default",
            fontFamily: "'Inter', system-ui, sans-serif",
            border: "1px solid",
          }}
        >
          {createFlash ? "✓ Created" : "Create"}
        </motion.button>
          );
        })()}
      </div>
      </div>{/* close modal content wrapper */}
    </motion.div>
    </div>
  );
}

