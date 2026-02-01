"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading, MediaPlaceholder, Button, MacOSDock, FeatureModal } from "@/components/ui";
import { Download, Plus } from "lucide-react";

export function ClientManagementSection() {
  const [isContextBarModalOpen, setIsContextBarModalOpen] = useState(false);
  const [isContextBarHovered, setIsContextBarHovered] = useState(false);

  return (
    <section id="client-management" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="For client management"
            subtitle="Stay connected with clients through a native desktop experience and contextual information at your fingertips."
          />
        </motion.div>

        {/* Desktop App Feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-6 md:p-8">
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-zinc-100">
                  Native Desktop App
                </h3>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  Assembly now has a desktop app for Mac and Windows with real desktop notifications. No more browser tab hunting or missing client messages because Chrome was buried.
                </p>
                <div className="mt-6">
                  <Button size="lg">
                    <Download className="mr-2 h-4 w-4" />
                    Download Today
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-900 min-h-[180px] overflow-visible">
                <MacOSDock />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Context Bar Feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            onClick={() => setIsContextBarModalOpen(true)}
            onHoverStart={() => setIsContextBarHovered(true)}
            onHoverEnd={() => setIsContextBarHovered(false)}
            className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-6 md:p-8 cursor-pointer transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-800/50 hover:shadow-lg hover:shadow-black/20"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            {/* Expand button */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                setIsContextBarModalOpen(true);
              }}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-zinc-800 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-zinc-200"
              aria-label="Expand Context Bar"
              animate={{ rotate: isContextBarHovered ? 90 : 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Plus className="h-4 w-4" />
            </motion.button>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:items-center">
              <MediaPlaceholder
                label="Screenshot: Context Bar"
                aspectRatio="16:9"
                className="order-last lg:order-first"
              />
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-zinc-100 pr-10">
                  Context Bar
                </h3>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  We&apos;ve renamed and redesigned the right sidebar on CRM pages—and brought it to more surfaces. Now when you&apos;re in Messages, Files, Notifications, or other apps, you can pull up the Context Bar to see client details without navigating away.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Context Bar Modal */}
      <FeatureModal
        isOpen={isContextBarModalOpen}
        onClose={() => setIsContextBarModalOpen(false)}
        title="Context Bar"
      >
        <div className="space-y-6">
          <MediaPlaceholder
            label="Screenshot: Context Bar in action"
            aspectRatio="16:9"
          />
          <div className="space-y-4">
            <p className="text-zinc-400 leading-relaxed">
              We&apos;ve renamed and redesigned the right sidebar on CRM pages—and brought it to more surfaces. Now when you&apos;re in Messages, Files, Notifications, or other apps looking at client-specific content, you can pull up the Context Bar to see client details, edit custom fields, add internal notes, or chat with your team—without navigating away.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              The goal: show you the right context at the moment you need it, so you&apos;re not constantly clicking back to the CRM.
            </p>
            <h4 className="text-lg font-medium text-zinc-100 pt-2">What you can do</h4>
            <ul className="space-y-2 text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                View client details and contact information
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                Edit custom fields on the fly
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                Add internal notes and comments
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                Chat with your team about the client
              </li>
            </ul>
            <h4 className="text-lg font-medium text-zinc-100 pt-2">Available in</h4>
            <ul className="space-y-2 text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                Messages
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                Files
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                Notifications
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                And more apps with client-specific content
              </li>
            </ul>
          </div>
        </div>
      </FeatureModal>
    </section>
  );
}
