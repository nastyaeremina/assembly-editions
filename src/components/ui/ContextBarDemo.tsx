"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
function FieldRow({ label, iconSrc, placeholder }: { label: string; iconSrc?: string; placeholder: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "6px 0", fontSize: "11px" }}>
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

export function ContextBarDemo({ inSplit = false }: ContextBarDemoProps) {
  const [activePanel, setActivePanel] = useState<"person" | "document" | "chat">("person");
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
            <div
              style={{
                width: "22px",
                height: "22px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: C.textMuted,
                fontSize: "14px",
              }}
            >
              •••
            </div>
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
            width: "260px",
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
              padding: "12px 16px",
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
                      Welcome to your Internal Chat. Use this to talk privately with your team regarding this client, or tag @Assembly to help you.
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
          {(["person", "document", "chat"] as const).map((key) => (
            <div
              key={key}
              onClick={() => setActivePanel(key)}
              style={{
                backgroundColor: activePanel === key ? "#f0f1f3" : "transparent",
                borderRadius: "6px",
                padding: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
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
                  opacity: activePanel === key ? 1 : 0.55,
                }}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
