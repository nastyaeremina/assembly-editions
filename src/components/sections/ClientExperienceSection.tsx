"use client";

import { ScrollytellingSection } from "@/components/layout";
import { InteractiveAppLibrary, ThemedClientHome } from "@/components/ui";

const SECTION_ID = "client-experience";
const SECTION_NUM = "01";
const TITLE = "Create remarkable experiences for clients";
const DESC =
  "A reimagined client portal with better organization, drag-and-drop folders, and personalized homepages — every touchpoint crafted to feel like your brand.";

export function ClientExperienceSection() {
  return (
    <ScrollytellingSection
      sectionId={SECTION_ID}
      title={TITLE}
      description={DESC}
      sectionNumber={SECTION_NUM}
      heroImage="/screenshots/iStock-2205732826 (2) 1.png"
      steps={[
        {
          id: "app-folders",
          suffix: "A",
          title: "App Folders",
          description: "Drag and drop apps into folders to organize the client portal. Changes apply instantly — no page reloads, no waiting.",
          content: <InteractiveAppLibrary inSplit={false} />,
        },
        {
          id: "client-segments",
          suffix: "B",
          title: "Client Segments",
          description: "Create homepage variants for different client tiers. Gold clients see one layout, Bronze another — all from the same portal.",
          content: <ThemedClientHome inSplit={false} />,
        },
      ]}
    />
  );
}
