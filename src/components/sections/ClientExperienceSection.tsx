"use client";

import { motion } from "framer-motion";
import { SectionHeading, FeatureCard, MediaPlaceholder } from "@/components/ui";

export function ClientExperienceSection() {
  return (
    <section id="client-experience" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Create remarkable experiences for clients"
            subtitle="Reimagined client portal with AI-powered customization, better organization, and personalized homepages."
          />
        </motion.div>

        {/* AI Portal Feature - Full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8">
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full bg-[#BCE7F4] px-2.5 py-0.5 text-xs font-medium text-zinc-900">
                New
              </span>
              <h3 className="mt-3 text-2xl font-semibold text-zinc-100">
                AI-Powered Portal Customization
              </h3>
              <p className="mt-2 max-w-2xl text-zinc-400">
                Brand new to Assembly? AI-powered client portal software now speeds up your brand customization of your portal login page.
              </p>
            </div>
            <MediaPlaceholder
              label="Screenshot: AI Portal Customization"
              aspectRatio="16:9"
            />
          </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FeatureCard
              title="App Folders"
              description="Drag and drop apps and embeds into folders. Group reports into an 'Analytics' folder, or create a 'Helpful links' folder for external resources. Unpin apps from your internal dashboard without affecting the client view."
              mediaLabel="Screenshot: App Folders"
              badge="New"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FeatureCard
              title="Homepage Variants"
              description="Create up to five different homepage variants and automatically show the right one to each client based on custom field tags. Perfect for tiered service models or serving different client types."
              mediaLabel="Screenshot: Homepage Variants"
              badge="New"
            />
          </motion.div>
        </div>

        {/* Refreshed Home App */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <p className="text-zinc-400">
              <span className="font-medium text-zinc-200">Plus:</span> The Home App has been completely refreshed with updated banners, a curated image gallery, improved responsive loading, and a cleaner greeting + action items layout.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
