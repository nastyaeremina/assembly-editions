"use client";

import { ScrollytellingSection } from "@/components/layout";
import { CreateTaskDemo, TimeBasedAutomationsDemo } from "@/components/ui";

const SECTION_ID = "project-management";
const SECTION_NUM = "02";
const TITLE = "Project management that actually fits how you work";
const DESC =
  "Associate tasks with clients and automate recurring workflows with time-based triggers.";

export function ProjectManagementSection() {
  return (
    <ScrollytellingSection
      sectionId={SECTION_ID}
      title={TITLE}
      description={DESC}
      sectionNumber={SECTION_NUM}
      heroImage="/screenshots/JPEG image.jpeg"
      heroGradient={false}
      steps={[
        {
          id: "tasks-client-association",
          suffix: "A",
          title: "Tasks now associate with clients",
          description: "Link tasks to a client without making them visible. Tasks appear on the client profile for your team only, and you can share them anytime by turning on client access.",
          content: <CreateTaskDemo inSplit={false} />,
        },
        {
          id: "time-based-automations",
          suffix: "B",
          title: "Time-based automations",
          description: "Set automations that trigger on a schedule — send reminders, update statuses, or reassign tasks automatically based on due dates and time elapsed.",
          content: <TimeBasedAutomationsDemo inSplit={false} />,
        },
      ]}
    />
  );
}
