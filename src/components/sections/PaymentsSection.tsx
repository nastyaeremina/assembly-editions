"use client";

import { motion } from "framer-motion";
import { SectionHeading, FeatureCard, MediaPlaceholder, Badge } from "@/components/ui";

export function PaymentsSection() {
  return (
    <section id="payments" className="py-24 px-6 bg-zinc-900/30">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Payments, consolidated"
            subtitle="Our payments features have grown into a full suite — invoices, subscriptions, payment links, and storefronts. Assembly 2.0 brings them all together."
          />
        </motion.div>

        {/* Payments Home Feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8">
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-semibold text-zinc-100">
                  One Payments Home
                </h3>
                <Badge variant="new">New</Badge>
              </div>
              <p className="mt-3 max-w-2xl text-zinc-400">
                We&apos;ve consolidated all billing surfaces into a single page with tabs: Overview, Invoices, Subscriptions, Payment Links, Stores, and Services. The new Overview tab shows first-time users a clear path to their first payment, while active users see their balance, upcoming payouts, and payment activity at a glance.
              </p>
            </div>
            <MediaPlaceholder
              label="Screenshot: Payments Home Overview"
              aspectRatio="16:9"
            />
          </div>
        </motion.div>

        {/* Accounting Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FeatureCard
            title="QuickBooks and Xero Integrations"
            description="Our accounting integrations are now fully out of beta. Map Assembly products directly to your existing items, sync invoice statuses, invoice numbers, and tax information, and track absorbed fees to an automatically created Assembly Processing Fees expense account. It's a one-way sync from Assembly to your accounting system—your books stay clean, and you stay out of data entry."
            mediaLabel="Screenshot: QuickBooks/Xero Integration"
            badge="New"
            layout="horizontal"
          />
        </motion.div>
      </div>
    </section>
  );
}
