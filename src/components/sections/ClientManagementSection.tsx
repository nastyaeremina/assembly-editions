"use client";

import { ScrollytellingSection } from "@/components/layout";
import { MacOSDock, ContextBarDemo } from "@/components/ui";

const SECTION_ID = "client-management";
const SECTION_NUM = "03";
const TITLE =
  "Native desktop experience with context at your fingertips";
const DESC =
  "Assembly now has a desktop app for Mac with real desktop notifications — Windows coming soon. The redesigned context bar appears on more surfaces than ever.";

export function ClientManagementSection() {
  return (
    <ScrollytellingSection
      sectionId={SECTION_ID}
      title={TITLE}
      description={DESC}
      sectionNumber={SECTION_NUM}
      heroImage={<MacOSDock />}
      heroLayout="contained"
      heroFullWidth
      theme="light"
      ctaContent={
        <a
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.7rem 1.75rem",
            backgroundColor: "transparent",
            color: "rgba(0, 0, 0, 0.6)",
            border: "1px solid rgba(0, 0, 0, 0.15)",
            borderRadius: "9999px",
            fontSize: "0.9rem",
            fontWeight: 500,
            fontFamily: "'PP Mori', var(--font-sans)",
            textDecoration: "none",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.3)";
            e.currentTarget.style.color = "rgba(0, 0, 0, 0.85)";
            e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.03)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.15)";
            e.currentTarget.style.color = "rgba(0, 0, 0, 0.6)";
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          Download now
        </a>
      }
      steps={[
        {
          id: "context-bar",
          suffix: "A",
          title: "Redesigned context bar",
          description: "The context bar now surfaces client details, recent activity, and quick actions on more surfaces than ever — invoices, tasks, messages, and contracts.",
          learnMoreUrl: "#",
          content: <ContextBarDemo />,
        },
      ]}
    />
  );
}
