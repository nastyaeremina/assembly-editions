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
          title: "Your client homepage, redesigned",
          description: "Show variants of homepages based on client type. New banners, customizable action items, dynamic fields, and a cleaner layout for a more polished portal experience.",
          learnMoreUrl: "https://assembly.com/blog/introducing-assembly-2-0#even-more-remarkable-experiences-for-clients",
          content: <ThemedClientHome inSplit={false} />,
        },
        {
          id: "app-folders",
          suffix: "B",
          title: "Organize your apps into folders",
          description: "Drag and drop apps into folders to organize the sidebar for you and your clients. Group links that your clients need, hide apps from your internal sidebar that you don't need. Manage and preview everything in a new App Library.",
          learnMoreUrl: "https://assembly.com/blog/introducing-assembly-2-0#organize-your-apps-into-folders",
          content: <InteractiveAppLibrary inSplit={false} />,
        },
      ]}
    />
  );
}
