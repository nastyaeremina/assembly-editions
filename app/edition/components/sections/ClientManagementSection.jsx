"use client";

import { ScrollytellingSection } from "../layout";
import { MacOSDock, ContextBarDemo } from "../ui";

const SECTION_ID = "client-management";
const SECTION_NUM = "03";
const TITLE =
  "Desktop app to never miss a notification";
const DESC =
  "You and your internal team can now download the Assembly desktop app for Mac (Windows coming out soon). No more hunting through browser tabs.";

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
          title: "Context on your clients anywhere you work",
          description: "Stay in context. You can now reference your clients' details and internal notes beyond the CRM in file channels, on notifications, during messaging and more.",
          learnMoreUrl: "#",
          content: <ContextBarDemo />,
        },
      ]}
    />
  );
}
