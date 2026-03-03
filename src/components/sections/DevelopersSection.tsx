"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollytellingSection } from "@/components/layout";
import { AppBridgeCodeDemo } from "@/components/ui";

const SECTION_ID = "developers";
const SECTION_NUM = "05";

/* ── Accordion data ── */
const DEV_FEATURES = [
  {
    id: "custom-app-base",
    number: "01",
    title: "New custom app base",
    description:
      "A completely rebuilt foundation for custom apps — faster rendering, better TypeScript support, and a modern app-bridge that handles authentication automatically.",
  },
  {
    id: "secure-app-sessions",
    number: "02",
    title: "Secure app sessions",
    description:
      "Session tokens now expire after 5 minutes. The new @assembly-js/app-bridge handles refresh automatically — shared URLs no longer grant permanent access.",
  },
  {
    id: "tasks-api",
    number: "03",
    title: "Tasks API: comments & attachments",
    description:
      "Fetch comments, threaded replies, and attachment metadata including secure download URLs. A new comment.created webhook triggers workflows when clients respond.",
  },
];

/* ── Single accordion row ── */
function AccordionItem({
  item,
  isOpen,
  onToggle,
  isLast,
}: {
  item: (typeof DEV_FEATURES)[number];
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div
      style={{
        borderBottom: isLast ? "none" : "1px solid rgba(255, 255, 255, 0.06)",
      }}
    >
      {/* Trigger row */}
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "1.25rem",
          padding: "1.5rem 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          outline: "none",
        }}
      >
        {/* Title */}
        <span
          style={{
            fontFamily: "'PP Mori', var(--font-sans)",
            fontSize: "1.1rem",
            fontWeight: 500,
            letterSpacing: "-0.01em",
            color: isOpen ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.55)",
            transition: "color 0.4s ease",
            flex: 1,
          }}
        >
          {item.title}
        </span>

        {/* Chevron */}
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          style={{ flexShrink: 0 }}
        >
          <path
            d="M4 6L8 10L12 6"
            stroke={isOpen ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)"}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transition: "stroke 0.4s ease" }}
          />
        </motion.svg>
      </button>

      {/* Expandable description */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? height : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          height: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
          opacity: { duration: isOpen ? 0.35 : 0.15, delay: isOpen ? 0.08 : 0, ease: "easeOut" },
        }}
        style={{ overflow: "hidden" }}
      >
        <div ref={contentRef} style={{ paddingBottom: "1.5rem", paddingLeft: "0" }}>
          <p
            style={{
              fontFamily: "'PP Mori', var(--font-sans)",
              fontWeight: 400,
              fontSize: "0.9rem",
              lineHeight: 1.7,
              color: "rgba(255, 255, 255, 0.4)",
              margin: 0,
              maxWidth: "80%",
            }}
          >
            {item.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

/* ── Developer features accordion ── */
function DevFeaturesAccordion() {
  const [openId, setOpenId] = useState<string | null>(DEV_FEATURES[0].id);

  return (
    <div
      style={{
        borderTop: "1px solid rgba(255, 255, 255, 0.06)",
        width: "100%",
      }}
    >
      {DEV_FEATURES.map((item, i) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => setOpenId(openId === item.id ? null : item.id)}
          isLast={i === DEV_FEATURES.length - 1}
        />
      ))}
    </div>
  );
}

export function DevelopersSection() {
  return (
    <ScrollytellingSection
      sectionId={SECTION_ID}
      sectionNumber={SECTION_NUM}
      steps={[
        {
          id: "app-bridge",
          suffix: "A",
          title: "For developers",
          description:
            "Rebuilt custom app base, secure session tokens, and a new Tasks API with comments and attachments.",
          learnMoreUrl: "#",
          content: (
            <div>
              <AppBridgeCodeDemo inSplit={false} />
              <div style={{ marginTop: "2.5rem" }}>
                <DevFeaturesAccordion />
              </div>
            </div>
          ),
        },
      ]}
    />
  );
}
