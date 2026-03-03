"use client";

import { ScrollytellingSection } from "@/components/layout";
import { InteractiveAppLibrary, ThemedClientHome } from "@/components/ui";

const SECTION_ID = "client-experience";
const SECTION_NUM = "01";

export function ClientExperienceSection() {
  return (
    <ScrollytellingSection
      sectionId={SECTION_ID}
      sectionNumber={SECTION_NUM}
      steps={[
        {
          id: "client-segments",
          suffix: "A",
          title: "Client Segments",
          description: "Create homepage variants for different client tiers. Gold clients see one layout, Bronze another — all from the same portal.",
          learnMoreUrl: "#",
          content: <ThemedClientHome inSplit={false} />,
        },
        {
          id: "app-folders",
          suffix: "B",
          title: "App Folders",
          description: "Drag and drop apps into folders to organize the client portal. Changes apply instantly — no page reloads, no waiting.",
          learnMoreUrl: "#",
          content: <InteractiveAppLibrary inSplit={false} />,
        },
      ]}
    />
  );
}
