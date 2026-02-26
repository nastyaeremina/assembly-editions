"use client";

import { ScrollytellingSection } from "@/components/layout";
import { OnePaymentsDemo, QuickBooksSyncDemo } from "@/components/ui";

const SECTION_ID = "payments";
const SECTION_NUM = "04";
const TITLE = "Payments, consolidated";
const DESC =
  "Invoices, subscriptions, payment links, and storefronts — all in one place. Accounting integrations are fully out of beta.";

export function PaymentsSection() {
  return (
    <ScrollytellingSection
      sectionId={SECTION_ID}
      title={TITLE}
      description={DESC}
      sectionNumber={SECTION_NUM}
      heroImage="/screenshots/JPEG image2.jpeg"
      heroGradient={false}
      steps={[
        {
          id: "one-payments-home",
          suffix: "A",
          title: "One Payments home",
          description: "Invoices, subscriptions, payment links, and storefronts now live under a single unified Payments tab. No more switching between modules.",
          content: <OnePaymentsDemo inSplit={false} />,
        },
        {
          id: "quickbooks-xero",
          suffix: "B",
          title: "QuickBooks & Xero sync",
          description: "Accounting integrations are fully out of beta. Two-way sync keeps invoices, payments, and client records in perfect alignment.",
          content: <QuickBooksSyncDemo inSplit={false} />,
        },
      ]}
    />
  );
}
