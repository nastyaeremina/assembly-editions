"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIdleHint } from "@/hooks/useIdleHint";
import { useMediaQuery } from "@/hooks/useMediaQuery";

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
} as const;

/* ── Client data ── */
const CLIENTS = [
  { id: "ms", initials: "MS", name: "Mary Sung", subtitle: "Mary@servicesymphony.c...", color: "#f0e6c8", textColor: "#8a7230" },
  { id: "cm", initials: "CM", name: "Charles Musial", subtitle: "Charles@servicesymphony.c...", color: "#e8e4f0", textColor: "#6b5b95" },
];

/* ════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════ */

interface CreateTaskDemoProps {
  inSplit?: boolean;
}

export function CreateTaskDemo({ inSplit = false }: CreateTaskDemoProps) {
  const [relatedClient, setRelatedClient] = useState<string | null>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [shareWithClient, setShareWithClient] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showRelatedTooltip, setShowRelatedTooltip] = useState(false);

  const isMobile = useMediaQuery("(max-width: 1023px)", false);

  /* Idle hint — subtle glow pulse on "Related to" pill (desktop only) */
  const { containerRef: idleRef, isIdle: pillIdleActive, dismiss: dismissIdle } = useIdleHint({ delay: 2500 });

  /* ── Mobile auto-play loop ──
     Sequence: wait → select client → show toggle → switch on → hold → reset → repeat */
  useEffect(() => {
    if (!isMobile) return;
    let cancelled = false;
    const wait = (ms: number) => new Promise<void>((r) => { const t = setTimeout(r, ms); if (cancelled) clearTimeout(t); });

    async function loop() {
      while (!cancelled) {
        // Reset
        setRelatedClient(null);
        setShareWithClient(false);
        setShowPicker(false);
        await wait(2000);
        if (cancelled) break;

        // Step 1: auto-select client (Mary Sung)
        setRelatedClient("ms");
        await wait(1800);
        if (cancelled) break;

        // Step 2: toggle "Share with client" ON
        setShareWithClient(true);
        await wait(3000);
        if (cancelled) break;

        // Step 3: hold before reset
        await wait(1500);
      }
    }

    loop();
    return () => { cancelled = true; };
  }, [isMobile]);

  // Close picker on outside click (desktop only)
  useEffect(() => {
    if (!showPicker || isMobile) return;
    const handler = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setShowPicker(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showPicker, isMobile]);

  const selectClient = (clientId: string) => {
    setRelatedClient(clientId);
    setShowPicker(false);
  };

  const selectedClient = relatedClient ? CLIENTS.find((c) => c.id === relatedClient) : null;

  return (
    <div ref={(el) => {
      (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      (idleRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
    }} style={{ width: "100%" }}>
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
        display: "flex",
        flexDirection: "column",
      }}
    >
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
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "14px", fontWeight: 500, color: C.text }}>
            Create task
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Icons/Primary-1.svg"
            alt=""
            width={16}
            height={16}
            style={{ display: "block", opacity: 0.35 }}
          />
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/Icons/Icon (approved) copy.svg"
          alt=""
          width={12}
          height={12}
          style={{ display: "block", opacity: 0.3, cursor: "default" }}
        />
      </div>

      {/* ── Title + description area ── */}
      <div
        style={{
          padding: "16px 20px",
          borderBottom: `1px solid ${C.borderLight}`,
        }}
      >
        <div
          style={{
            fontSize: "14px",
            fontWeight: 500,
            color: C.text,
            marginBottom: "6px",
          }}
        >
          Competitor analysis
        </div>
        <div
          style={{
            fontSize: "12px",
            color: C.textTertiary,
            minHeight: "36px",
          }}
        >
          Add description...
        </div>
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
        {/* Todo pill */}
        <ToolbarPill icon="/Icons/circle.svg" label="Todo" />

        {/* Due date pill */}
        <ToolbarPill icon="/Icons/Primary.svg" label="Due date" />

        {/* Assignee pill */}
        <ToolbarPill icon="/Icons/user.svg" label="Assignee" />

        {/* Related to pill — interactive */}
        <div ref={pickerRef} style={{ position: "relative" }}>
          {/* Button + tooltip wrapper — inline-block so it sizes to button */}
          <div style={{ position: "relative", display: "inline-block" }}>
            <motion.button
              type="button"
              onClick={() => { if (!isMobile) { setShowPicker(!showPicker); setShowRelatedTooltip(false); dismissIdle(); } }}
              onMouseEnter={() => { if (!showPicker && !isMobile) setShowRelatedTooltip(true); }}
              onMouseLeave={() => setShowRelatedTooltip(false)}
              whileHover={isMobile ? undefined : { backgroundColor: "#f9fafb" }}
              animate={pillIdleActive && !relatedClient && !isMobile ? {
                boxShadow: [
                  "0 0 0 0px rgba(0,0,0,0)",
                  "0 0 0 3px rgba(0,0,0,0.05)",
                  "0 0 0 0px rgba(0,0,0,0)",
                ],
              } : { boxShadow: "0 0 0 0px rgba(0,0,0,0)" }}
              transition={pillIdleActive && !relatedClient && !isMobile ? {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              } : { duration: 0.2 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: relatedClient ? "0 12px 0 4px" : "0 12px",
                height: "32px",
                borderRadius: "6px",
                border: `1px solid ${C.border}`,
                fontSize: "12px",
                fontWeight: 400,
                color: relatedClient ? C.text : C.textSec,
                cursor: "pointer",
                backgroundColor: "transparent",
                fontFamily: "'Inter', system-ui, sans-serif",
                transition: "border-color 400ms ease, padding 400ms ease, color 400ms ease",
              }}
            >
              {relatedClient && selectedClient ? (
                <>
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      backgroundColor: selectedClient.color,
                      flexShrink: 0,
                      fontSize: "9px",
                      fontWeight: 400,
                      fontFamily: "'Inter', system-ui, sans-serif",
                      color: selectedClient.textColor,
                      lineHeight: "24px",
                      textAlign: "center",
                    }}
                  >
                    {selectedClient.initials}
                  </div>
                  {selectedClient.name}
                </>
              ) : (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/Icons/user.svg" alt="" width={12} height={12} style={{ display: "block", opacity: 0.5 }} />
                  Related to
                </>
              )}
            </motion.button>
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
                  minWidth: "240px",
                  overflow: "hidden",
                }}
              >
                {/* Search input */}
                <div
                  style={{
                    padding: "10px 12px",
                    borderBottom: `1px solid ${C.borderLight}`,
                  }}
                >
                  <div
                    style={{
                      fontSize: "13px",
                      color: C.textTertiary,
                      cursor: "text",
                    }}
                  >
                    Set client or company
                  </div>
                </div>

                {/* Clients list */}
                <div style={{ padding: "6px" }}>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 500,
                      color: C.textTertiary,
                      padding: "6px 8px 4px",
                    }}
                  >
                    Clients
                  </div>
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
                        gap: "10px",
                        width: "100%",
                        padding: "10px 8px",
                        border: "none",
                        backgroundColor: "transparent",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "13px",
                        fontWeight: 400,
                        color: C.text,
                        textAlign: "left",
                        fontFamily: "'Inter', system-ui, sans-serif",
                        transition: "background-color 100ms ease",
                      }}
                    >
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          backgroundColor: client.color,
                          flexShrink: 0,
                          fontSize: "13px",
                          fontWeight: 400,
                          fontFamily: "'Inter', system-ui, sans-serif",
                          color: client.textColor,
                          lineHeight: "32px",
                          textAlign: "center",
                        }}
                      >
                        {client.initials}
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: "13px", fontWeight: 500, color: C.text, lineHeight: 1.3 }}>{client.name}</div>
                        {client.subtitle && (
                          <div style={{ fontSize: "11px", color: C.textTertiary, lineHeight: 1.3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{client.subtitle}</div>
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
        /* Mobile: always rendered (no height shift), opacity animates */
        <div style={{
          opacity: relatedClient ? 1 : 0.3,
          transition: "opacity 0.5s ease",
        }}>
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
        </div>
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
        <div
          style={{
            padding: "6px 16px",
            borderRadius: "6px",
            fontSize: "12px",
            fontWeight: 500,
            color: C.text,
            border: `1px solid ${C.border}`,
            cursor: "default",
          }}
        >
          Discard
        </div>
        <div
          style={{
            padding: "6px 16px",
            borderRadius: "6px",
            fontSize: "12px",
            fontWeight: 500,
            color: C.createText,
            backgroundColor: C.bgAlt,
            border: `1px solid ${C.createBorder}`,
            cursor: "default",
          }}
        >
          Create
        </div>
      </div>
    </motion.div>
    </div>
  );
}

/* ── Toolbar pill (static) ── */
function ToolbarPill({ icon, label }: { icon: string; label: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
        padding: "0 12px",
        height: "32px",
        borderRadius: "6px",
        border: `1px solid ${C.border}`,
        fontSize: "12px",
        fontWeight: 400,
        color: C.textSec,
        cursor: "default",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={icon}
        alt=""
        width={12}
        height={12}
        style={{ display: "block", opacity: 0.5 }}
      />
      {label}
    </div>
  );
}
