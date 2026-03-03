"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

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
  textMuted: "#9ca3af",
  sidebarBg: "#fafafa",
  tabActive: "#18181b",
  tabInactive: "#6b7280",
  accent: "#3b82f6",
  iconBarBg: "#f9fafb",
  iconBarBorder: "#e5e7eb",
} as const;

/* ── Icon paths ── */
const ICO = {
  avatar: "/Icons/Avatar.svg",
  person: "/Icons/Icon-container.svg",
  document: "/Icons/Icon (approved)-3 copy.svg",
  chat: "/Icons/Icon (approved)-8.svg",
  iconContainer: "/Icons/Icon-container-1 copy.svg",
  unorderedList: "/Icons/UnorderedList.svg",
  numberedList: "/Icons/NumberedList.svg",
  underline: "/Icons/Underline.svg",
  linkIcon: "/Icons/Icon (approved) copy 4.svg",
  attachBtn: "/Icons/Icon button.svg",
  sendBtn: "/Icons/Icon button-1.svg",
} as const;

/* ── Small icon helper ── */
function Ico({ src, size = 14, alt = "" }: { src: string; size?: number; alt?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} width={size} height={size} style={{ display: "block", opacity: 0.55 }} draggable={false} />
  );
}

/* ── Avatar colours per person ── */
const AVATAR_COLORS: Record<string, { bg: string; text: string }> = {
  CM: { bg: "#ede7f6", text: "#6a1b9a" },
  JB: { bg: "#e3e8d8", text: "#5f6b56" },
};

/* ── Avatar component ── */
function Avatar({ src, name, size = 36 }: { src?: string; name: string; size?: number }) {
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
}: {
  name: string;
  time: string;
  children: React.ReactNode;
  avatarSrc?: string;
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
function DateSeparator({ label }: { label: string }) {
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
function FieldRow({ label, iconSrc, placeholder, fontSize = "11px" }: { label: string; iconSrc?: string; placeholder: string; fontSize?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "6px 0", fontSize }}>
      <span style={{ width: "70px", color: C.textSec, flexShrink: 0 }}>{label}</span>
      <div style={{ display: "flex", alignItems: "center", gap: "6px", color: C.textMuted }}>
        {iconSrc && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={iconSrc} alt="" width={14} height={14} draggable={false} style={{ opacity: 0.5, flexShrink: 0 }} />
        )}
        <span>{placeholder}</span>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════ */

interface ContextBarDemoProps {
  inSplit?: boolean;
}

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
const PANEL_LABELS: Record<"person" | "document" | "chat", string> = {
  person: "Client Details",
  document: "Notes",
  chat: "Internal Chat",
};

const PANEL_ORDER: ("person" | "document" | "chat")[] = ["person", "document", "chat"];
const AUTO_CYCLE_DELAY = 1400; // ms before first auto-switch
const AUTO_CYCLE_INTERVAL = 2800; // ms between switches

export function ContextBarDemo({ inSplit = false }: ContextBarDemoProps) {
  const [activePanel, setActivePanel] = useState<"person" | "document" | "chat">("person");
  const isDesktop = useMediaQuery("(min-width: 768px)", true);
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipDismissed = useRef(false);

  /* ── Auto-cycle logic ── */
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [userTookOver, setUserTookOver] = useState(false);
  const [autoCycleActive, setAutoCycleActive] = useState(false);
  const cycleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const stopAutoCycle = useCallback(() => {
    setUserTookOver(true);
    setAutoCycleActive(false);
    if (cycleTimer.current) {
      clearTimeout(cycleTimer.current);
      cycleTimer.current = null;
    }
  }, []);

  const handleUserClick = useCallback((panel: "person" | "document" | "chat") => {
    stopAutoCycle();
    setActivePanel(panel);
    setShowTooltip(false);
    tooltipDismissed.current = true;
  }, [stopAutoCycle]);

  // Start auto-cycle when component enters viewport (desktop)
  useEffect(() => {
    if (!isInView || userTookOver || !isDesktop) return;

    const startTimer = setTimeout(() => {
      setAutoCycleActive(true);
    }, AUTO_CYCLE_DELAY);

    return () => clearTimeout(startTimer);
  }, [isInView, userTookOver, isDesktop]);

  /* ── Mobile: continuous auto-cycle loop ── */
  useEffect(() => {
    if (isDesktop) return;
    let cancelled = false;
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const t = setTimeout(resolve, ms);
        if (cancelled) clearTimeout(t);
      });

    async function loop() {
      while (!cancelled) {
        setActivePanel("person");
        await wait(2200);
        if (cancelled) break;
        setActivePanel("document");
        await wait(2200);
        if (cancelled) break;
        setActivePanel("chat");
        await wait(2200);
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
          <img src="/Icons/Avatar.svg" alt="" width={30} height={30} style={{ borderRadius: "6px", border: `1px solid ${C.border}` }} draggable={false} />
          <div>
            <div style={{ fontSize: "14px", fontWeight: 500, color: C.text, lineHeight: 1.2 }}>Charles Musial</div>
            <div style={{ fontSize: "11px", color: C.textSec, marginTop: "2px" }}>Service Symphony</div>
          </div>
        </div>

        {/* ── Segmented tab bar ── */}
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
          {(["person", "document", "chat"] as const).map((key) => {
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
                  backgroundColor: isActive ? "#f4f5f7" : "transparent",
                  transition: "background-color 0.25s ease",
                }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: isActive ? 500 : 400,
                    color: isActive ? C.text : C.textMuted,
                    transition: "color 0.25s ease, font-weight 0.25s ease",
                  }}
                >
                  {PANEL_LABELS[key]}
                </span>
              </div>
            );
          })}
        </div>

        {/* ── Panel content with cross-fade ── */}
        <div style={{ padding: "14px 16px 16px", position: "relative", height: "220px", overflow: "hidden" }}>
          <AnimatePresence mode="wait">
            {/* Person / Client Details panel */}
            {activePanel === "person" && (
              <motion.div
                key="person"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ fontSize: "11px", fontWeight: 500, color: C.textSec, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "10px" }}>
                  Custom fields
                </div>
                <FieldRow label="Email" iconSrc="/Icons/Icon-container copy 3.svg" placeholder="Add email" fontSize="12px" />
                <FieldRow label="Team" iconSrc="/Icons/Status Icon.svg" placeholder="Add text" fontSize="12px" />
                <FieldRow label="ID" iconSrc="/Icons/heshtag.svg" placeholder="Add number" fontSize="12px" />
                <FieldRow label="Phone" iconSrc="/Icons/Icon-container-2.svg" placeholder="Add phone number" fontSize="12px" />
                <FieldRow label="Link" iconSrc="/Icons/Status Icon copy.svg" placeholder="Add link" fontSize="12px" />
              </motion.div>
            )}

            {/* Notes panel */}
            {activePanel === "document" && (
              <motion.div
                key="document"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
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
              <motion.div
                key="chat"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "16px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logos/Assemblychatlogo.svg" alt="Assembly" width={26} height={26} style={{ borderRadius: "50%", flexShrink: 0, marginTop: "2px" }} draggable={false} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "12px", fontWeight: 500, color: C.text, marginBottom: "4px" }}>Assembly</div>
                    <div style={{ fontSize: "12px", lineHeight: 1.55, color: C.textSec }}>
                      Chat privately with your team about this client, or tag @Assembly for help.
                    </div>
                  </div>
                </div>
                {/* Mini compose bar */}
                <div style={{ border: `1px solid ${C.border}`, borderRadius: "8px", overflow: "hidden" }}>
                  <div style={{ padding: "10px 12px" }}>
                    <span style={{ fontSize: "12px", color: "#9ca3af" }}>Chat with teammates or @Assembly</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 12px 8px" }}>
                    <span style={{ fontSize: "13px", color: C.textMuted, cursor: "default" }}>@</span>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ICO.attachBtn} alt="Send" width={24} height={24} draggable={false} />
                  </div>
                </div>
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
        <div style={{ position: "absolute", left: 0, right: 0, textAlign: "center", fontFamily: "'SF Mono', 'Fira Code', Menlo, monospace", fontSize: "11px", color: "rgba(255, 255, 255, 0.35)", letterSpacing: "0.01em", pointerEvents: "none" }}>
          dashboard.assembly.com
        </div>
      </div>

      {/* ─── App layout ─── */}
      <div style={{ display: "flex", height: "640px", backgroundColor: C.bg }}>

        {/* ─── MAIN CONTENT ─── */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>

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
              <span style={{ color: C.textMuted }}>›</span>
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
            {["Messages", "Files", "Contracts", "Forms", "Billing", "Home", "Tasks"].map((tab, i) => (
              <span
                key={tab}
                style={{
                  fontSize: "11px",
                  color: i === 0 ? C.tabActive : C.tabInactive,
                  fontWeight: 400,
                  padding: "10px 0",
                  marginBottom: "-1px",
                  borderBottom: i === 0 ? `1px solid ${C.text}` : "1px solid transparent",
                  cursor: "default",
                }}
              >
                {tab}
              </span>
            ))}
          </div>

          {/* Contact filter */}
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
              <img src="/Icons/Vector.svg" alt="" width={7} height={4} draggable={false} />
            </div>
          </div>

          {/* Messages area */}
          <div
            style={{
              flex: 1,
              overflow: "hidden",
              padding: "8px 20px",
            }}
          >
            <DateSeparator label="Wed, Sep 4" />

            <Message name="Charles Musial" time="1:36 PM">
              Hi Jennifer, Can you tell me more about SEO?
            </Message>

            <Message name="Jennifer Beaty" time="1:37 PM">
              Absolutely, Charles! SEO, is all about improving your website&apos;s visibility on search engines like Google. For your business, we&apos;d focus on making sure potential customers can find you when they search for services you offer. This includes optimizing your website content, targeting the right keywords, improving your site&apos;s speed and mobile experience, and even building links to boost your credibility.
            </Message>

          </div>

          {/* Compose bar */}
          <div style={{ padding: "0 16px 12px" }}>
            <div style={{ border: "1px solid #e5e7eb", borderRadius: "8px", overflow: "hidden" }}>
              {/* Formatting toolbar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#f8f9fa",
                  padding: "8px 12px",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/Icons/bold.svg" alt="Bold" width={14} height={14} draggable={false} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/Icons/italic.svg" alt="Italic" width={14} height={14} draggable={false} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ICO.underline} alt="Underline" width={14} height={14} draggable={false} />
                <div style={{ width: "1px", height: "14px", backgroundColor: "#d1d5db", margin: "0 2px" }} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ICO.unorderedList} alt="Bullet list" width={14} height={14} draggable={false} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ICO.numberedList} alt="Numbered list" width={14} height={14} draggable={false} />
                <div style={{ width: "1px", height: "14px", backgroundColor: "#d1d5db", margin: "0 2px" }} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ICO.linkIcon} alt="Link" width={14} height={14} draggable={false} />
              </div>
              {/* Message input area */}
              <div style={{ padding: "10px 12px" }}>
                <span style={{ fontSize: "12px", color: "#9ca3af" }}>Message your client</span>
              </div>
              {/* Attach + Send row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "6px 12px 10px",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ICO.sendBtn} alt="Attach" width={24} height={24} style={{ opacity: 0.5 }} draggable={false} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={ICO.attachBtn} alt="Send" width={28} height={28} draggable={false} />
              </div>
            </div>
          </div>
        </div>

        {/* ─── RIGHT SIDEBAR ─── */}
        <div
          style={{
            width: "clamp(240px, 30%, 320px)",
            borderLeft: `1px solid ${C.border}`,
            display: "flex",
            flexDirection: "column",
            backgroundColor: C.bg,
            flexShrink: 0,
          }}
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
            {activePanel === "chat" ? "Internal Chat" : "Client Details"}
            {activePanel === "document" && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src="/Icons/Icon (approved) copy.svg" alt="Add" width={10} height={10} style={{ opacity: 0.4 }} draggable={false} />
            )}
          </div>

          {/* ── Panel: Client Details (person) ── */}
          {activePanel === "person" && (
            <div style={{ flex: 1, overflowY: "auto", padding: "14px 16px" }}>
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/Icons/Icon (approved) copy.svg" alt="Add" width={10} height={10} style={{ opacity: 0.4 }} draggable={false} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/Icons/Avatar.svg" alt="" width={24} height={24} style={{ borderRadius: "4px", border: `1px solid ${C.border}` }} draggable={false} />
                  <span style={{ fontSize: "11px", color: C.text }}>Service Symphony</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/Icons/Icon (approved)-1.svg" alt="More" width={12} height={12} style={{ marginLeft: "auto", opacity: 0.4 }} draggable={false} />
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/Icons/Icon (approved) copy.svg" alt="Add" width={10} height={10} style={{ opacity: 0.4 }} draggable={false} />
                </div>
                <FieldRow label="Email" iconSrc="/Icons/Icon-container copy 3.svg" placeholder="Add email" />
                <FieldRow label="Team" iconSrc="/Icons/Status Icon.svg" placeholder="Add text" />
                <FieldRow label="ID" iconSrc="/Icons/heshtag.svg" placeholder="Add number" />
                <FieldRow label="Phone" iconSrc="/Icons/Icon-container-2.svg" placeholder="Add phone number" />
                <FieldRow label="Link" iconSrc="/Icons/Status Icon copy.svg" placeholder="Add phone number" />
                <FieldRow label="Address" iconSrc="/Icons/Icon-container-1 copy.svg" placeholder="Add location" />
                <FieldRow label="Tags" iconSrc="/Icons/Icon-container copy 2.svg" placeholder="Add phone number" />
              </div>
            </div>
          )}

          {/* ── Panel: Notes (document) ── */}
          {activePanel === "document" && (
            <div style={{ flex: 1, overflow: "hidden" }}>
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
            </div>
          )}

          {/* ── Panel: Internal Chat (chat) ── */}
          {activePanel === "chat" && (
            <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
              {/* Chat message area */}
              <div style={{ flex: 1, padding: "14px 16px" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logos/Assemblychatlogo.svg" alt="Assembly" width={28} height={28} style={{ borderRadius: "50%", flexShrink: 0, marginTop: "2px" }} draggable={false} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: "11px", fontWeight: 500, color: C.text, marginBottom: "6px" }}>Assembly</div>
                    <div style={{ fontSize: "11px", lineHeight: 1.55, color: C.textSec }}>
                      Chat privately with your team about this client, or tag @Assembly for help.
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat compose bar */}
              <div style={{ padding: "0 12px 12px" }}>
                <div style={{ border: `1px solid ${C.border}`, borderRadius: "8px", overflow: "hidden" }}>
                  <div style={{ padding: "10px 12px" }}>
                    <span style={{ fontSize: "11px", color: "#9ca3af" }}>Chat with teammates or @Assembly</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "6px 12px 10px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span style={{ fontSize: "13px", color: C.textMuted, cursor: "default" }}>@</span>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={ICO.sendBtn} alt="Attach" width={16} height={16} style={{ opacity: 0.5 }} draggable={false} />
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ICO.attachBtn} alt="Send" width={24} height={24} draggable={false} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ─── ICON BAR (far right) ─── */}
        <div
          style={{
            width: "36px",
            borderLeft: `1px solid ${C.border}`,
            backgroundColor: C.iconBarBg,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "12px",
            gap: "14px",
            flexShrink: 0,
          }}
        >
          <div style={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "#dfe8e6", color: "#2a8a7a", fontSize: 9, fontWeight: 400, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>MA</div>
          <div
            onMouseEnter={() => { if (!tooltipDismissed.current) setShowTooltip(true); }}
            onMouseLeave={() => setShowTooltip(false)}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", position: "relative" }}
          >
            {(() => {
              const nextPanel = PANEL_ORDER[(PANEL_ORDER.indexOf(activePanel) + 1) % PANEL_ORDER.length];
              return (["person", "document", "chat"] as const).map((key) => {
                const isActive = activePanel === key;
                const isNext = autoCycleActive && !userTookOver && key === nextPanel;
                return (
                  <motion.div
                    key={key}
                    onClick={() => handleUserClick(key)}
                    animate={isNext ? {
                      backgroundColor: ["rgba(0,0,0,0)", "rgba(0,0,0,0.04)", "rgba(0,0,0,0)"],
                    } : {}}
                    transition={isNext ? {
                      duration: 1.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    } : { duration: 0.15 }}
                    style={{
                      borderRadius: "6px",
                      padding: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      backgroundColor: isActive ? "#f0f1f3" : "transparent",
                      transition: isNext ? undefined : "background-color 0.15s ease",
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
                        opacity: isActive ? 1 : key === "chat" ? 0.75 : 0.55,
                        transition: "opacity 0.15s ease",
                      }}
                      draggable={false}
                    />
                  </motion.div>
                );
              });
            })()}
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
  );
}
