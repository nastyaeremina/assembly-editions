"use client";

import { motion } from "framer-motion";
import { SectionHeading, MediaPlaceholder, Badge, Button } from "@/components/ui";
import { Download } from "lucide-react";

export function ClientManagementSection() {
  return (
    <section id="client-management" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
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
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-semibold text-zinc-100">
                    Native Desktop App
                  </h3>
                  <Badge variant="new">New</Badge>
                </div>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  Assembly now has a desktop app for Mac and Windows with real desktop notifications. No more browser tab hunting or missing client messages because Chrome was buried. Get notified the moment something needs your attention.
                </p>
                <div className="mt-6">
                  <Button size="lg">
                    <Download className="mr-2 h-4 w-4" />
                    Download Today
                  </Button>
                </div>
              </div>
              <MediaPlaceholder
                label="Screenshot: Desktop App"
                aspectRatio="16:9"
              />
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
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <MediaPlaceholder
                label="Screenshot: Context Bar"
                aspectRatio="16:9"
                className="order-last lg:order-first"
              />
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-semibold text-zinc-100">
                    Context Bar
                  </h3>
                  <Badge variant="new">New</Badge>
                </div>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  We&apos;ve renamed and redesigned the right sidebar on CRM pages—and brought it to more surfaces. Now when you&apos;re in Messages, Files, Notifications, or other apps looking at client-specific content, you can pull up the Context Bar to see client details, edit custom fields, add internal notes, or chat with your team—without navigating away.
                </p>
                <p className="mt-4 text-sm text-zinc-500">
                  The goal: show you the right context at the moment you need it, so you&apos;re not constantly clicking back to the CRM.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
