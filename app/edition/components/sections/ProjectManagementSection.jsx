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
          description: "Link internal team tasks to their relevant client. Selectively share tasks with clients to give them visibility into your progress and process.",
          learnMoreUrl: "#",
          content: <CreateTaskDemo inSplit={false} />,
        },
        {
          id: "time-based-automations",
          suffix: "B",
          title: "Time-based automations",
          description: "Set automations that trigger on a schedule — send reminders, update statuses, or reassign tasks automatically based on due dates and time elapsed.",
          learnMoreUrl: "#",
          content: <TimeBasedAutomationsDemo inSplit={false} />,
        },
      ]}
    />
  );
}
