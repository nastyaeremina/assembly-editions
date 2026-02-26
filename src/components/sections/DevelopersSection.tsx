"use client";

import { ScrollytellingSection } from "@/components/layout";
import { AppBridgeCodeDemo } from "@/components/ui";

const SECTION_ID = "developers";
const SECTION_NUM = "05";
const TITLE = "For developers";
const DESC =
  "Rebuilt custom app base, secure session tokens, and a new Tasks API with comments and attachments.";

/* Text-only subsection content for subsections without demos */
function TextContent({ heading, body }: { heading: string; body: React.ReactNode }) {
  return (
    <div style={{ maxWidth: "32rem" }}>
      <h3
        style={{
          fontFamily: "'PP Mori', var(--font-sans)",
          fontWeight: 600,
          fontSize: "1.25rem",
          lineHeight: 1.3,
          letterSpacing: "-0.015em",
          color: "#fff",
          margin: "0 0 1rem 0",
        }}
      >
        {heading}
      </h3>
      <p
        style={{
          fontFamily: "'PP Mori', var(--font-sans)",
          fontWeight: 400,
          fontSize: "0.95rem",
          lineHeight: 1.65,
          color: "rgba(255, 255, 255, 0.5)",
          margin: 0,
        }}
      >
        {body}
      </p>
    </div>
  );
}

export function DevelopersSection() {
  return (
    <ScrollytellingSection
      sectionId={SECTION_ID}
      title={TITLE}
      description={DESC}
      sectionNumber={SECTION_NUM}
      heroImage="/screenshots/iStock-2205732826 (2) 1.png"
      steps={[
        {
          id: "custom-app-base",
          suffix: "A",
          title: "New custom app base",
          description: "A completely rebuilt foundation for custom apps — faster rendering, better TypeScript support, and a modern app-bridge that handles authentication automatically.",
          content: <AppBridgeCodeDemo inSplit={false} />,
        },
        {
          id: "secure-app-sessions",
          suffix: "B",
          title: "Secure app sessions",
          description: "Session tokens now expire after 5 minutes. The new @assembly-js/app-bridge handles refresh automatically — shared URLs no longer grant permanent access.",
          content: (
            <TextContent
              heading="Secure app sessions"
              body={
                <>
                  Session tokens now expire after 5 minutes. A new{" "}
                  <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.9em" }}>
                    @assembly-js/app-bridge
                  </span>{" "}
                  package handles refresh automatically — shared URLs no longer grant permanent access.
                </>
              }
            />
          ),
        },
        {
          id: "tasks-api",
          suffix: "C",
          title: "Tasks API: comments & attachments",
          description: "Fetch comments, threaded replies, and attachment metadata including secure download URLs. A new comment.created webhook triggers workflows when clients respond.",
          content: (
            <TextContent
              heading="Tasks API: comments & attachments"
              body={
                <>
                  Fetch comments, threaded replies, and attachment metadata including secure download URLs. A new{" "}
                  <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.9em" }}>
                    comment.created
                  </span>{" "}
                  webhook triggers workflows when clients respond.
                </>
              }
            />
          ),
        },
      ]}
    />
  );
}
