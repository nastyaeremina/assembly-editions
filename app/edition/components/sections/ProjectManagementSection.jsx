"use client";

import { ScrollytellingSection } from "../layout";
import { CreateTaskDemo, TimeBasedAutomationsDemo } from "../ui";

const SECTION_ID = "project-management";
const SECTION_NUM = "02";

export function ProjectManagementSection() {
  return (
    <ScrollytellingSection
      sectionId={SECTION_ID}
      sectionNumber={SECTION_NUM}
      steps={[
        {
          id: "tasks-client-association",
          suffix: "A",
          title: "Tasks now associate with clients",
          description: "You can now associate internal tasks with a client. Once linked, you can selectively share them so clients can follow along with progress.",
          learnMoreUrl: "https://assembly.com/blog/introducing-assembly-2-0#project-management-that-actually-fits-how-you-work",
          content: <CreateTaskDemo inSplit={false} />,
        },
        {
          id: "time-based-automations",
          suffix: "B",
          title: "Time-based automations",
          description: "Set automations that trigger on a schedule — send reminders, update statuses, or reassign tasks automatically based on due dates and time elapsed.",
          learnMoreUrl: "https://assembly.com/blog/introducing-assembly-2-0#time-based-automations",
          content: <TimeBasedAutomationsDemo inSplit={false} />,
        },
      ]}
    />
  );
}
