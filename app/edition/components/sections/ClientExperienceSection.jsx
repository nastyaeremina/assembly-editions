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
          description: "Drag and drop apps into folders to keep your dashboard and portal organized. Group your analytics apps together, tuck onboarding forms into one place, whatever makes sense for your workflow.",
          learnMoreUrl: "https://assembly.com/blog/introducing-assembly-2-0#organize-your-apps-into-folders",
          content: <InteractiveAppLibrary inSplit={false} />,
        },
      ]}
    />
  );
}
