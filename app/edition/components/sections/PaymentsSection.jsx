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
          description: "The Billing app has been revamped into a single unified Payments tab. See outstanding payouts and total balances from your invoices, subscriptions, payment links, and store.",
          learnMoreUrl: "https://assembly.com/blog/introducing-assembly-2-0#payments-consolidated",
          content: <OnePaymentsDemo inSplit={false} />,
        },
      ]}
    />
  );
}
