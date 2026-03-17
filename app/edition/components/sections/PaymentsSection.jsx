"use client";

import { ScrollytellingSection } from "../layout";
import { OnePaymentsDemo } from "../ui";

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
          title: "A unified Payments center",
          description: "The Payments App (formerly Billing) now has analytics. See outstanding payments, received payments, and upcoming transfers to your bank.",
          learnMoreUrl: "https://assembly.com/blog/introducing-assembly-2-0#payments-consolidated",
          content: <OnePaymentsDemo inSplit={false} />,
        },
      ]}
    />
  );
}
