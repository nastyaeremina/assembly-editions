"use client";

import { ScrollytellingSection } from "../layout";
import { InteractiveAppLibrary, ThemedClientHome } from "../ui";

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
          learnMoreUrl: "https://assembly.com/blog/introducing-assembly-2-0#even-more-remarkable-experiences-for-clients",
          content: <ThemedClientHome inSplit={false} />,
        },
        {
          id: "app-folders",
          suffix: "B",
          title: "App Folders",
          description: "Drag and drop apps into folders to organize the client portal. Changes apply instantly — no page reloads, no waiting.",
          learnMoreUrl: "https://assembly.com/blog/introducing-assembly-2-0#organize-your-apps-into-folders",
          content: <InteractiveAppLibrary inSplit={false} />,
        },
      ]}
    />
  );
}
