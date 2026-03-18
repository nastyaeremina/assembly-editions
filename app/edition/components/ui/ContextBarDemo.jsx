"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";

/* ──────────────────────────────────────────────────────────
   CONTEXT BAR DEMO
   CRM messaging view with client details sidebar.
   Shows the redesigned right sidebar / context bar feature.
   ────────────────────────────────────────────────────────── */

/* ── Colors ── */
const C = {
  bg: "#ffffff",
  border: "#e5e7eb",
  borderLight: "#f3f4f6",
  text: "#18181b",
  textSec: "#6b7280",
  textMuted: "#6b7280",
  sidebarBg: "#fafafa",
  tabActive: "#18181b",
  tabInactive: "#374151",
  accent: "#3b82f6",
  iconBarBg: "#f9fafb",
  iconBarBorder: "#e5e7eb",
};

/* ── Icon paths ── */
const ICO = {
  avatar: "/edition/Icons/Avatar.png",
  person: "/edition/Icons/Icon-container.svg",
  document: "/edition/Icons/Icon (approved)-3 copy.svg",
  chat: "/edition/Icons/Icon (approved)-8.svg",
  iconContainer: "/edition/Icons/Icon-container-1 copy.svg",
  attachBtn: "/edition/Icons/Icon button.svg",
  sendBtn: "/edition/Icons/Icon button-1.svg",
};

/* ── Small icon helper ── */
function Ico({ src, size = 14, alt = "" }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} width={size} height={size} style={{ display: "block", opacity: 0.55 }} draggable={false} />
  );
}

/* ── Avatar colours per person ── */
const AVATAR_COLORS = {
  CM: { bg: "#ede7f6", text: "#6a1b9a" },
  JB: { bg: "#e3e8d8", text: "#5f6b56" },
};

/* ── Avatar component ── */
function Avatar({ src, name, size = 36 }) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2);
  const colors = AVATAR_COLORS[initials] ?? { bg: "#e0e7ff", text: "#4338ca" };
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: colors.bg,
        color: colors.text,
        fontSize: size * 0.36,
        fontWeight: 400,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        overflow: "hidden",
      }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        initials
      )}
    </div>
  );
}

/* ── Message bubble ── */
function Message({
  name,
  time,
  children,
  avatarSrc,
}) {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <Avatar name={name} size={32} src={avatarSrc} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "4px" }}>
          <span style={{ fontSize: "12px", fontWeight: 500, color: C.text }}>{name}</span>
          <span style={{ fontSize: "10px", color: C.textMuted }}>{time}</span>
        </div>
        <div style={{ fontSize: "11.5px", lineHeight: 1.55, color: C.text }}>{children}</div>
      </div>
    </div>
  );
}

/* ── Date separator ── */
function DateSeparator({ label }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: "16px 0" }}>
      <span
        style={{
          fontSize: "10px",
          color: "#212B36",
          backgroundColor: "#fff",
          padding: "5px 12px",
          borderRadius: "4px",
          border: `1px solid ${C.border}`,
        }}
      >
        {label}
      </span>
    </div>
  );
}

/* ── Custom field row ── */
function FieldRow({ label, iconSrc, placeholder, fontSize = "11px", value, iconSize = 14 }) {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "6px 0", fontSize }}>
      <span style={{ width: "70px", color: C.textSec, flexShrink: 0 }}>{label}</span>
      {value ? (
        <span style={{ color: C.text }}>{value}</span>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: "6px", color: C.textMuted }}>
          {iconSrc && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={iconSrc} alt="" width={iconSize} height={iconSize} draggable={false} style={{ opacity: 0.5, flexShrink: 0 }} />
          )}
          <span>{placeholder}</span>
        </div>
      )}
    </div>
  );
}


/* ════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════ */

/* ── Notes panel data ── */
const NOTES = [
  {
    title: "Follow-Up on Demo (Jan 18, 2025)",
    body: "Charles was impressed by the custom reporting features. Main concerns revolve ar...",
  },
  {
    title: "Competitive Analysis Insights",
    body: "Prospect mentioned they\u2019re evaluating our competitor.",
  },
  {
    title: "Pipeline Update: Warm Lead (Jan 8, 2025)",
    body: "Spoke with the decision-maker. We\u2019re all set.",
  },
];

/* ── Panel label map ── */
const PANEL_LABELS = {
  person: "Client Details",
  document: "Notes",
  chat: "Internal Chat",
};

const PANEL_ORDER = ["person", "document", "chat"];
const AUTO_CYCLE_DELAY = 1400; // ms before first auto-switch
const AUTO_CYCLE_INTERVAL = 2800; // ms between switches

/* ── Content tabs for the main area ── */
const CONTENT_TABS = ["Messages", "Files", "Contracts", "Forms", "Billing", "Home", "Tasks"];

export function ContextBarDemo({ inSplit = false }) {
  const [activePanel, setActivePanel] = useState("person");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)", true);
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipDismissed = useRef(false);

  /* ── Interactive message compose state ── */
  const [activeContentTab, setActiveContentTab] = useState("Messages");
  const [messageText, setMessageText] = useState("");
  const [extraMessages, setExtraMessages] = useState([]);
  const textareaRef = useRef(null);

  /* ── Internal chat compose state ── */
  const [chatText, setChatText] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const chatInputRef = useRef(null);

  const handleSendMessage = useCallback(() => {
    if (!messageText.trim() || extraMessages.length >= 1) return;
    setExtraMessages((prev) => [...prev, { text: messageText.trim(), time: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }) }]);
    setMessageText("");
  }, [messageText, extraMessages.length]);

  const handleSendChat = useCallback(() => {
    if (!chatText.trim() || chatMessages.length >= 1) return;
    setChatMessages((prev) => [...prev, { text: chatText.trim(), time: new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }) }]);
    setChatText("");
    if (chatInputRef.current) chatInputRef.current.focus();
  }, [chatText, chatMessages.length]);

  /* ── Auto-cycle logic ── */
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [userTookOver, setUserTookOver] = useState(false);
  const [autoCycleActive, setAutoCycleActive] = useState(false);
  const cycleTimer = useRef(null);

  const stopAutoCycle = useCallback(() => {
    setUserTookOver(true);
    setAutoCycleActive(false);
    if (cycleTimer.current) {
      clearTimeout(cycleTimer.current);
      cycleTimer.current = null;
    }
  }, []);

  const handleContentTabClick = useCallback((tab) => {
    stopAutoCycle();
    setActiveContentTab(tab);
  }, [stopAutoCycle]);

  const handleUserClick = useCallback((panel) => {
    stopAutoCycle();
    if (sidebarOpen && activePanel === panel) {
      setSidebarOpen(false);
    } else {
      setActivePanel(panel);
      setSidebarOpen(true);
    }
    setShowTooltip(false);
    tooltipDismissed.current = true;
  }, [stopAutoCycle, sidebarOpen, activePanel]);

  const handleAvatarClick = useCallback(() => {
    stopAutoCycle();
    setSidebarOpen(true);
    setShowTooltip(false);
    tooltipDismissed.current = true;
  }, [stopAutoCycle]);

  // Start auto-cycle when component enters viewport (desktop)
  useEffect(() => {
    if (!isInView || userTookOver || !isDesktop) return;

    const startTimer = setTimeout(() => {
      setSidebarOpen(true);
      setAutoCycleActive(true);
    }, AUTO_CYCLE_DELAY);

    return () => clearTimeout(startTimer);
  }, [isInView, userTookOver, isDesktop]);

  /* ── Mobile: continuous auto-cycle loop ── */
  useEffect(() => {
    if (isDesktop) return;
    let cancelled = false;
    const wait = (ms) =>
      new Promise((resolve) => {
        const t = setTimeout(resolve, ms);
        if (cancelled) clearTimeout(t);
      });

    async function loop() {
      while (!cancelled) {
        setActivePanel("person");
        await wait(3000);
        if (cancelled) break;
        setActivePanel("document");
        await wait(3000);
        if (cancelled) break;
        setActivePanel("chat");
        await wait(3000);
        if (cancelled) break;
      }
    }
    loop();
    return () => {
      cancelled = true;
    };
  }, [isDesktop]);

  // Run the cycle
  useEffect(() => {
    if (!autoCycleActive || userTookOver) return;

    const advance = () => {
      setActivePanel((prev) => {
        const idx = PANEL_ORDER.indexOf(prev);
        const next = PANEL_ORDER[(idx + 1) % PANEL_ORDER.length];
        return next;
      });
    };

    // Advance immediately on first tick, then keep going
    advance();

    const interval = setInterval(advance, AUTO_CYCLE_INTERVAL);
    return () => clearInterval(interval);
  }, [autoCycleActive, userTookOver]);

  /* ─────────────────────── MOBILE VIEW ─────────────────────── */
  if (!isDesktop) {
    return (
      <>
        <motion.div
        ref={containerRef}
        className="interactive-hint--light"
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
        {/* ── Compact header ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "16px 16px 14px",
            borderBottom: `1px solid ${C.border}`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/edition/Icons/Avatar.png" alt="" width={30} height={30} style={{ borderRadius: "6px", border: `1px solid ${C.border}` }} draggable={false} />
          <div>
            <div style={{ fontSize: "14px", fontWeight: 500, color: C.text, lineHeight: 1.2 }}>Charles Musial</div>
            <div style={{ fontSize: "11px", color: C.textSec, marginTop: "2px" }}>Service Symphony</div>
          </div>
        </div>

        {/* ── Segmented tab bar — sliding highlight ── */}
        <div
          style={{
            display: "flex",
            margin: "12px 14px 0",
            border: `1px solid ${C.border}`,
            borderRadius: "8px",
            padding: "3px",
            gap: "2px",
            backgroundColor: C.bg,
          }}
        >
          {["person", "document", "chat"].map((key) => {
            const isActive = activePanel === key;
            return (
              <div
                key={key}
                onClick={() => handleUserClick(key)}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "6px 6px",
                  cursor: "pointer",
                  borderRadius: "6px",
                  position: "relative",
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobile-tab-highlight"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "#edeef1",
                      borderRadius: "6px",
                    }}
                  />
                )}
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    color: isActive ? C.text : C.textMuted,
                    position: "relative",
                    zIndex: 1,
                    transition: "color 0.25s ease",
                  }}
                >
                  {PANEL_LABELS[key]}
                </span>
              </div>
            );
          })}
        </div>

        {/* ── Panel content — fade-in only (no exit anim = no blink) ── */}
        <div style={{ padding: "14px 16px 16px", minHeight: "220px", overflow: "hidden" }}>
          {activePanel === "person" && (
          <motion.div key="mob-person" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, ease: "easeOut" }}>
            <div style={{ fontSize: "11px", fontWeight: 500, color: C.textSec, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "10px" }}>
              Custom fields
            </div>
            <FieldRow label="Email" iconSrc="/edition/Icons/Icon-container copy 3.svg" placeholder="Add email" fontSize="12px" value="charles@greenleaf.co" />
            <FieldRow label="Team" iconSrc="/edition/Icons/Status Icon.svg" placeholder="Add text" fontSize="12px" />
            <FieldRow label="ID" iconSrc="/edition/Icons/heshtag.svg" placeholder="Add number" fontSize="12px" />
            <FieldRow label="Phone" iconSrc="/edition/Icons/Icon-container-2.svg" placeholder="Add phone number" fontSize="12px" value="+1 (415) 392-8100" />
            <FieldRow label="Link" iconSrc="/edition/Icons/Status Icon copy.svg" placeholder="Add link" fontSize="12px" />
            <FieldRow label="Tags" iconSrc="/edition/Icons/Icon-container copy 2.svg" placeholder="Add tags" fontSize="12px" iconSize={18} />
          </motion.div>
          )}

          {/* Notes panel */}
          {activePanel === "document" && (
          <motion.div key="mob-document" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, ease: "easeOut" }}>
            {NOTES.map((note, i) => (
              <div
                key={i}
                style={{
                  padding: i === 0 ? "0 0 12px" : "12px 0",
                  borderBottom: i < NOTES.length - 1 ? `1px solid ${C.borderLight}` : "none",
                }}
              >
                <div style={{ fontSize: "12px", fontWeight: 500, color: C.text, marginBottom: "4px" }}>{note.title}</div>
                <div style={{ fontSize: "12px", lineHeight: 1.5, color: C.textSec }}>{note.body}</div>
              </div>
            ))}
          </motion.div>
          )}

          {/* Chat panel */}
          {activePanel === "chat" && (
          <motion.div key="mob-chat" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35, ease: "easeOut" }} style={{ display: "flex", flexDirection: "column", minHeight: "190px" }}>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/edition/logos/Assemblychatlogo.svg" alt="Assembly" width={26} height={26} style={{ borderRadius: "50%", flexShrink: 0, marginTop: "2px" }} draggable={false} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: "12px", fontWeight: 500, color: C.text, marginBottom: "4px" }}>Assembly</div>
                <div style={{ fontSize: "12px", lineHeight: 1.55, color: C.textSec }}>
                  Chat privately with your team about this client, or tag @Assembly for help.
                </div>
              </div>
            </div>
            {/* Mini compose bar — pushed to bottom */}
            <div style={{ marginTop: "auto" }}>
              <div style={{ border: `1px solid ${C.border}`, borderRadius: "8px", overflow: "hidden" }}>
                <div style={{ padding: "10px 12px" }}>
                  <span style={{ fontSize: "12px", color: "#9ca3af" }}>Chat with teammates or @Assembly</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", padding: "6px 12px 8px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ICO.attachBtn} alt="Send" width={24} height={24} draggable={false} />
                </div>
              </div>
            </div>
          </motion.div>
          )}
        </div>
      </motion.div>
      </>
    );
  }

  /* ─────────────────────── DESKTOP VIEW ─────────────────────── */
  return (
    <>
    <motion.div
      ref={containerRef}
      className="interactive-hint--light"
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
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
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
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
      <div style={{ display: "flex", height: "640px", backgroundColor: C.bg }}>

        {/* ─── MAIN CONTENT ─── */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, minHeight: 0 }}>

          {/* Breadcrumb bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 20px",
              borderBottom: `1px solid ${C.border}`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
              <span style={{ color: C.textSec }}>CRM</span>
              <span style={{ color: C.textMuted }}>&rsaquo;</span>
              <span style={{ fontWeight: 500, color: C.text }}>Charles Musial</span>
            </div>
            {/* three-dot menu removed */}
          </div>

          {/* Tab bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              padding: "0 20px",
              borderBottom: `1px solid ${C.border}`,
            }}
          >
            {CONTENT_TABS.map((tab) => {
              const isActive = activeContentTab === tab;
              return (
                <span
                  key={tab}
                  onClick={() => handleContentTabClick(tab)}
                  style={{
                    fontSize: "11px",
                    color: isActive ? C.tabActive : C.tabInactive,
                    fontWeight: 400,
                    padding: "10px 0",
                    marginBottom: "-1px",
                    borderBottom: isActive ? `1px solid ${C.text}` : "1px solid transparent",
                    cursor: "pointer",
                    transition: "color 0.15s ease",
                  }}
                >
                  {tab}
                </span>
              );
            })}
          </div>

          {/* Contact filter — only show on Messages tab */}
          {activeContentTab === "Messages" && (
            <div style={{ padding: "10px 20px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "5px 10px",
                  borderRadius: "4px",
                  border: `1px solid ${C.border}`,
                  fontSize: "11px",
                  color: C.text,
                }}
              >
                Charles Musial
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/edition/Icons/Vector.svg" alt="" width={7} height={4} draggable={false} />
              </div>
            </div>
          )}

          {/* Main content area — conditional on activeContentTab */}
          {activeContentTab === "Messages" ? (
            <>
              {/* Messages area */}
              <div
                style={{
                  flex: 1,
                  overflow: "auto",
                  padding: "8px 20px",
                }}
              >
                <DateSeparator label="Wed, Sep 4" />

                <Message name="Charles Musial" time="1:36 PM">
                  Hi Jennifer, I reviewed the proposal you sent over. Quick question. Do you also offer SEO as part of your services?
                </Message>

                <Message name="Jennifer Beaty" time="1:37 PM">
                  Yes, we do. We can include ongoing SEO support alongside the website work. I can also send an updated scope if you would like.
                </Message>

                {/* User-added messages */}
                {extraMessages.map((msg, i) => (
                  <Message key={`extra-${i}`} name="Jennifer Beaty" time={msg.time}>
                    {msg.text}
                  </Message>
                ))}
              </div>

              {/* Compose bar */}
              <div style={{ padding: "0 16px 12px" }}>
                <div style={{ border: "1px solid #e5e7eb", borderRadius: "8px", overflow: "hidden" }}>
                  {/* Message input area */}
                  <div style={{ padding: "4px 12px" }}>
                    <textarea
                      ref={textareaRef}
                      value={messageText}
                      onChange={(e) => { setMessageText(e.target.value); }}
                      onFocus={() => stopAutoCycle()}
                      onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleSendMessage(); } }}
                      placeholder="Message your client"
                      rows={1}
                      style={{
                        width: "100%",
                        fontSize: "12px",
                        color: C.text,
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                        resize: "none",
                        padding: "6px 0",
                        lineHeight: 1.5,
                        fontFamily: "'Inter', system-ui, sans-serif",
                      }}
                    />
                  </div>
                  {/* Send row */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      padding: "4px 12px 8px",
                    }}
                  >
                    <div
                      onClick={handleSendMessage}
                      style={{
                        cursor: messageText.trim() ? "pointer" : "default",
                        opacity: messageText.trim() ? 1 : 0.4,
                        transition: "opacity 0.15s ease",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={ICO.attachBtn} alt="Send" width={28} height={28} draggable={false} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Non-Messages tab placeholder */
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 0,
                color: C.textMuted,
              }}
            >
              <div style={{ fontSize: "12px", fontWeight: 400, color: C.textMuted, textAlign: "center", lineHeight: 1.5 }}>
                Nothing here yet
              </div>
            </div>
          )}
        </div>

        {/* ─── RIGHT SIDEBAR ─── */}
        <motion.div
          animate={{ width: sidebarOpen ? 260 : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1], delay: sidebarOpen ? 0.05 : 0 }}
          style={{
            borderLeft: `1px solid ${C.border}`,
            display: "flex",
            flexDirection: "column",
            backgroundColor: C.bg,
            flexShrink: 0,
            overflow: "hidden",
          }}
        >
          <motion.div
            animate={{ opacity: sidebarOpen ? 1 : 0 }}
            transition={{ duration: sidebarOpen ? 0.15 : 0.12, ease: "easeOut", delay: sidebarOpen ? 0.15 : 0 }}
            style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 260, overflow: "hidden" }}
          >
          {/* Sidebar header */}
          <div
            style={{
              padding: "10px 16px",
              borderBottom: `1px solid ${C.border}`,
              fontSize: "12px",
              fontWeight: 500,
              color: C.text,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {activePanel === "chat" ? "Internal Chat" : activePanel === "document" ? "Internal Notes" : "Client Details"}
          </div>

          {/* ── Panel: Client Details (person) ── */}
          <AnimatePresence mode="wait">
          {activePanel === "person" && (
            <motion.div key="person" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }} style={{ flex: 1, overflowY: "auto", padding: "14px 16px" }}>
              <div style={{ marginBottom: "18px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                  }}
                >
                  <span style={{ fontSize: "11px", fontWeight: 500, color: C.text }}>Company</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/edition/Icons/Avatar.png" alt="" width={24} height={24} style={{ borderRadius: "4px", border: `1px solid ${C.border}` }} draggable={false} />
                  <span style={{ fontSize: "11px", color: C.text }}>Service Symphony</span>
                </div>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                  }}
                >
                  <span style={{ fontSize: "11px", fontWeight: 500, color: C.text }}>Custom fields</span>
                </div>
                <FieldRow label="Email" iconSrc="/edition/Icons/Icon-container copy 3.svg" placeholder="Add email" value="charles@greenleaf.co" />
                <FieldRow label="Team" iconSrc="/edition/Icons/Status Icon.svg" placeholder="Add text" />
                <FieldRow label="ID" iconSrc="/edition/Icons/heshtag.svg" placeholder="Add number" />
                <FieldRow label="Phone" iconSrc="/edition/Icons/Icon-container-2.svg" placeholder="Add phone number" value="+1 (415) 392-8100" />
                <FieldRow label="Link" iconSrc="/edition/Icons/Status Icon copy.svg" placeholder="Add phone number" />
                <FieldRow label="Address" iconSrc="/edition/Icons/Icon-container-1 copy.svg" placeholder="Add location" />
                <FieldRow label="Tags" iconSrc="/edition/Icons/Icon-container copy 2.svg" placeholder="Add phone number" />
              </div>
            </motion.div>
          )}

          {/* ── Panel: Notes (document) ── */}
          {activePanel === "document" && (
            <motion.div key="document" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }} style={{ flex: 1, overflow: "hidden" }}>
              {NOTES.map((note, i) => (
                <div
                  key={i}
                  style={{
                    padding: "14px 16px",
                    borderBottom: `1px solid ${C.border}`,
                  }}
                >
                  <div style={{ fontSize: "11px", fontWeight: 500, color: C.text, marginBottom: "6px" }}>
                    {note.title}
                  </div>
                  <div style={{ fontSize: "11px", lineHeight: 1.5, color: C.textSec }}>
                    {note.body}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* ── Panel: Internal Chat (chat) ── */}
          {activePanel === "chat" && (
            <motion.div key="chat" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }} style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
              {/* Chat message area */}
              <div style={{ flex: 1, padding: "14px 16px", overflowY: "auto" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: chatMessages.length > 0 ? "16px" : 0 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/edition/logos/Assemblychatlogo.svg" alt="Assembly" width={28} height={28} style={{ borderRadius: "50%", flexShrink: 0, marginTop: "2px" }} draggable={false} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "11px", fontWeight: 500, color: C.text, marginBottom: "6px" }}>Assembly</div>
                    <div style={{ fontSize: "11px", lineHeight: 1.55, color: C.textSec }}>
                      Chat privately with your team about this client, or tag @Assembly for help.
                    </div>
                  </div>
                </div>
                {/* User-added chat messages */}
                {chatMessages.map((msg, i) => (
                  <div key={`chat-${i}`} style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginTop: "12px" }}>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", backgroundColor: "#e3e8d8", color: "#5f6b56", fontSize: 10, fontWeight: 400, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>JB</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "4px" }}>
                        <span style={{ fontSize: "11px", fontWeight: 500, color: C.text }}>Jennifer Beaty</span>
                        <span style={{ fontSize: "9px", color: C.textMuted }}>{msg.time}</span>
                      </div>
                      <div style={{ fontSize: "11px", lineHeight: 1.55, color: C.text }}>{msg.text}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat compose bar */}
              <div style={{ padding: "0 12px 12px" }}>
                <div style={{ border: `1px solid ${C.border}`, borderRadius: "8px", overflow: "hidden" }}>
                  <div style={{ padding: "4px 12px" }}>
                    <textarea
                      ref={chatInputRef}
                      value={chatText}
                      onChange={(e) => setChatText(e.target.value)}
                      onFocus={() => stopAutoCycle()}
                      onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSendChat(); } }}
                      placeholder="Chat with teammates or @Assembly"
                      rows={1}
                      style={{
                        width: "100%",
                        fontSize: "11px",
                        color: C.text,
                        backgroundColor: "transparent",
                        border: "none",
                        outline: "none",
                        resize: "none",
                        padding: "6px 0",
                        lineHeight: 1.5,
                        fontFamily: "'Inter', system-ui, sans-serif",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      padding: "4px 12px 8px",
                    }}
                  >
                    <div
                      onClick={handleSendChat}
                      style={{
                        cursor: chatText.trim() ? "pointer" : "default",
                        opacity: chatText.trim() ? 1 : 0.4,
                        transition: "opacity 0.15s ease",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={ICO.attachBtn} alt="Send" width={24} height={24} draggable={false} />
                    </div>
                  </div>
                </div>
                {chatMessages.length >= 1 && (
                  <div style={{ fontSize: "9px", color: C.textMuted, textAlign: "center", marginTop: "4px" }}>
                    Demo limit reached
                  </div>
                )}
              </div>
            </motion.div>
          )}
          </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* ─── ICON BAR (far right) ─── */}
        <div
          style={{
            width: "36px",
            borderLeft: `1px solid ${C.border}`,
            marginLeft: "-1px",
            backgroundColor: C.iconBarBg,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "12px",
            gap: "14px",
            flexShrink: 0,
          }}
        >
          <div
            onClick={handleAvatarClick}
            style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "#ede7f6", color: "#6a1b9a", fontSize: 9, fontWeight: 400, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, cursor: "pointer" }}
          >CM</div>
          <div
            onMouseEnter={() => { if (!tooltipDismissed.current) setShowTooltip(true); }}
            onMouseLeave={() => setShowTooltip(false)}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", position: "relative" }}
          >
            {["person", "document", "chat"].map((key) => {
              const isActive = activePanel === key;
              return (
                <div
                  key={key}
                  onClick={() => handleUserClick(key)}
                  style={{
                    borderRadius: "6px",
                    padding: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    backgroundColor: isActive ? "#edeef1" : "transparent",
                    transition: "background-color 0.25s ease",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={ICO[key]}
                    alt={key}
                    width={14}
                    height={14}
                    style={{
                      display: "block",
                      opacity: isActive ? 1 : 0.8,
                    }}
                    draggable={false}
                  />
                </div>
              );
            })}
            {/* Tooltip */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, x: 4 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 4 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    position: "absolute",
                    right: "calc(100% + 8px)",
                    top: "50%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                    zIndex: 100,
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
                      Click to switch
                    </span>
                    <div style={{
                      position: "absolute",
                      right: "-4px",
                      top: "50%",
                      marginTop: "-4px",
                      width: "8px",
                      height: "8px",
                      backgroundColor: "rgba(39, 39, 42, 0.95)",
                      transform: "rotate(45deg)",
                      borderRight: "1px solid rgba(63, 63, 70, 0.5)",
                      borderTop: "1px solid rgba(63, 63, 70, 0.5)",
                    }} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
    </>
  );
}
