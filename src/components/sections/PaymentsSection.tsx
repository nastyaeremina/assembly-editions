"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading, ScreenshotDisplay, FeatureModal, MediaPlaceholder } from "@/components/ui";

export function PaymentsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="payments" className="py-16 sm:py-24 bg-zinc-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
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
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-6 md:p-8">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-zinc-100">
                One Payments Home
              </h3>
              <p className="mt-3 max-w-2xl text-zinc-400">
                We&apos;ve consolidated all billing surfaces into a single page with tabs: Overview, Invoices, Subscriptions, Payment Links, Stores, and Services. The new Overview tab shows first-time users a clear path to their first payment, while active users see their balance, upcoming payouts, and payment activity at a glance.
              </p>
            </div>
            <ScreenshotDisplay
              src="/screenshots/Payments.jpg"
              alt="Payments Home Overview showing balance, invoices, subscriptions, and payment links"
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
          <motion.div
            onClick={() => setIsModalOpen(true)}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-6 md:p-8 cursor-pointer transition-[border-color,background-color,box-shadow] duration-150 ease-out hover:border-zinc-700 hover:bg-zinc-800/50 hover:shadow-xl hover:shadow-black/20"
            whileHover={{ y: -4 }}
            transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
          >
            {/* Expand button */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-zinc-800 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-zinc-200"
              aria-label="Expand QuickBooks and Xero Integrations"
              animate={{ rotate: isHovered ? 90 : 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Plus className="h-4 w-4" />
            </motion.button>

            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 md:items-center">
              {/* Content */}
              <div className="flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl font-semibold text-zinc-100 pr-10">
                  QuickBooks and Xero Integrations
                </h3>
                <p className="mt-3 text-zinc-400 leading-relaxed">
                  Our accounting integrations are now fully out of beta. Map Assembly products directly to your existing items, sync invoice statuses, invoice numbers, and tax information.
                </p>
              </div>

              {/* Logos */}
              <div className="flex items-center justify-center gap-6 py-8">
                <div className="flex flex-col items-center gap-3">
                  <Image
                    src="/logos/quickbooks.png"
                    alt="QuickBooks"
                    width={72}
                    height={72}
                    className="h-[72px] w-[72px]"
                  />
                  <span className="text-sm font-medium text-zinc-400">QuickBooks</span>
                </div>
                <div className="text-2xl text-zinc-400">+</div>
                <div className="flex flex-col items-center gap-3">
                  <Image
                    src="/logos/xero2.png"
                    alt="Xero"
                    width={72}
                    height={72}
                    className="h-[72px] w-[72px]"
                  />
                  <span className="text-sm font-medium text-zinc-400">Xero</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      <FeatureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="QuickBooks and Xero Integrations"
      >
        <div className="space-y-6">
          {/* Logos in modal */}
          <div className="flex items-center justify-center gap-6 py-8 rounded-xl bg-zinc-800/50">
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/logos/quickbooks.png"
                alt="QuickBooks"
                width={72}
                height={72}
                className="h-[72px] w-[72px]"
              />
              <span className="text-sm font-medium text-zinc-400">QuickBooks</span>
            </div>
            <div className="text-2xl text-zinc-400">+</div>
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/logos/xero2.png"
                alt="Xero"
                width={72}
                height={72}
                className="h-[72px] w-[72px]"
              />
              <span className="text-sm font-medium text-zinc-400">Xero</span>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-zinc-400 leading-relaxed">
              Our accounting integrations are now fully out of beta. Map Assembly products directly to your existing items, sync invoice statuses, invoice numbers, and tax information, and track absorbed fees to an automatically created Assembly Processing Fees expense account.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              It&apos;s a one-way sync from Assembly to your accounting system—your books stay clean, and you stay out of data entry.
            </p>

            <h4 className="text-lg font-medium text-zinc-100 pt-2">What syncs automatically</h4>
            <ul className="space-y-2 text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                Invoice statuses and invoice numbers
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                Product mappings to your existing items
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                Tax information and calculations
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                Processing fees tracked to a dedicated expense account
              </li>
            </ul>

            <h4 className="text-lg font-medium text-zinc-100 pt-2">How it works</h4>
            <p className="text-zinc-400 leading-relaxed">
              Connect your QuickBooks or Xero account in Settings → Integrations. Once connected, Assembly will automatically sync new invoices and payment data. Historical data can be synced on demand.
            </p>

            <ScreenshotDisplay
              src="/screenshots/quickbooks.jpg"
              alt="QuickBooks integration settings showing sync configuration"
              className="mt-4"
            />
          </div>
        </div>
      </FeatureModal>
    </section>
  );
}
