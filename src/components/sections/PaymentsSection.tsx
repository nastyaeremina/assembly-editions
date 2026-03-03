"use client";

import { ScrollytellingSection } from "@/components/layout";
import { OnePaymentsDemo } from "@/components/ui";

const SECTION_ID = "payments";
const SECTION_NUM = "04";

export function PaymentsSection() {
  return (
    <ScrollytellingSection
      sectionId={SECTION_ID}
      sectionNumber={SECTION_NUM}
      theme="light"
      steps={[
        {
          id: "one-payments-home",
          suffix: "A",
          title: "One Payments home",
          description: "Invoices, subscriptions, payment links, and storefronts now live under a single unified Payments tab. No more switching between modules.",
          learnMoreUrl: "#",
          content: <OnePaymentsDemo inSplit={false} />,
        },
      ]}
    />
  );
}
