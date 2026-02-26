"use client";

import { ScrollytellingSection } from "@/components/layout";
import { MacOSDock, ContextBarDemo } from "@/components/ui";

const SECTION_ID = "client-management";
const SECTION_NUM = "03";
const TITLE =
  "Native desktop experience with context at your fingertips";
const DESC =
  "Assembly now has a desktop app for Mac and Windows with real desktop notifications. The redesigned context bar appears on more surfaces than ever.";

export function ClientManagementSection() {
  return (
    <ScrollytellingSection
      sectionId={SECTION_ID}
      title={TITLE}
      description={DESC}
      sectionNumber={SECTION_NUM}
      heroImage={<MacOSDock />}
      steps={[
        {
          id: "native-desktop-app",
          suffix: "A",
          title: "Native desktop app",
          description: "A real desktop app for Mac and Windows — not just a browser tab. Get native notifications, a dock icon, and instant access without opening Chrome.",
          content: null,
          sameAsHero: true,
        },
        {
          id: "context-bar",
          suffix: "B",
          title: "Redesigned\ncontext bar",
          description: "The context bar now surfaces client details, recent activity, and quick actions on more surfaces than ever — invoices, tasks, messages, and contracts.",
          content: <ContextBarDemo />,
        },
      ]}
    />
  );
}
