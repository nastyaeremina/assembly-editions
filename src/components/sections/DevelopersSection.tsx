"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading, MediaPlaceholder, FeatureModal } from "@/components/ui";
import { Code2, Shield, MessageSquare, Plus } from "lucide-react";

interface DevFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
}

function DevFeature({ icon, title, description, onClick }: DevFeatureProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-6 cursor-pointer transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-800/50 hover:shadow-lg hover:shadow-black/20 h-full flex flex-col"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {onClick && (
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-zinc-800 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-zinc-200"
          aria-label={`Expand ${title}`}
          animate={{ rotate: isHovered ? 90 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Plus className="h-4 w-4" />
        </motion.button>
      )}
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-[#BCE7F4]">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-zinc-100 pr-10">{title}</h3>
      <p className="mt-2 text-sm text-zinc-400 leading-relaxed flex-grow">{description}</p>
    </motion.div>
  );
}

export function DevelopersSection() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isCustomAppHovered, setIsCustomAppHovered] = useState(false);

  return (
    <section id="developers" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="For developers"
            subtitle="Build on Assembly's platform with a rebuilt foundation, secure sessions, and expanded API capabilities."
          />
        </motion.div>

        {/* New Custom App Base - Featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <motion.div
            onClick={() => setActiveModal("custom-app")}
            onHoverStart={() => setIsCustomAppHovered(true)}
            onHoverEnd={() => setIsCustomAppHovered(false)}
            className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-6 md:p-8 cursor-pointer transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-800/50 hover:shadow-lg hover:shadow-black/20"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                setActiveModal("custom-app");
              }}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-zinc-800 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-zinc-200"
              aria-label="Expand New Custom App Base"
              animate={{ rotate: isCustomAppHovered ? 90 : 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Plus className="h-4 w-4" />
            </motion.button>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-zinc-100 pr-10">
                  New Custom App Base
                </h3>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  We&apos;ve rebuilt the foundation for Custom Apps from the ground up. The new base includes live examples for server-side rendering, client-side API requests, and AppBridge configuration.
                </p>
              </div>
              <MediaPlaceholder
                label="Screenshot: Custom App Base"
                aspectRatio="16:9"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Developer Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <DevFeature
              icon={<Shield className="h-5 w-5" />}
              title="Secure App Sessions"
              description="App session tokens now expire after 5 minutes instead of lasting indefinitely. A new @assembly-js/app-bridge package handles token refresh automatically."
              onClick={() => setActiveModal("secure-sessions")}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <DevFeature
              icon={<MessageSquare className="h-5 w-5" />}
              title="Tasks API: Comments"
              description="The Tasks API now exposes comments and attachments. Fetch all comments on a task, access threaded replies, and pull attachment metadata."
              onClick={() => setActiveModal("tasks-api")}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <DevFeature
              icon={<Code2 className="h-5 w-5" />}
              title="Webhooks"
              description="New comment.created webhook to trigger workflows when clients respond. Build integrations that track client activity or sync task data."
              onClick={() => setActiveModal("webhooks")}
            />
          </motion.div>
        </div>
      </div>

      {/* Custom App Base Modal */}
      <FeatureModal
        isOpen={activeModal === "custom-app"}
        onClose={() => setActiveModal(null)}
        title="New Custom App Base"
      >
        <div className="space-y-6">
          <MediaPlaceholder
            label="Screenshot: Custom App Base examples"
            aspectRatio="16:9"
          />
          <div className="space-y-4">
            <p className="text-zinc-400 leading-relaxed">
              We&apos;ve rebuilt the foundation for Custom Apps from the ground up. The new base includes live examples for server-side rendering, client-side API requests, and AppBridge configuration—breadcrumbs, action menus, header controls—all with real feedback so you can see exactly how things work.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              There&apos;s also a preview of our design system pointing to the latest Storybook. If you&apos;re building on Assembly, this is your new starting point.
            </p>
            <h4 className="text-lg font-medium text-zinc-100 pt-2">What&apos;s included</h4>
            <ul className="space-y-2 text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                Server-side rendering examples
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                Client-side API request patterns
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                AppBridge configuration (breadcrumbs, action menus, header controls)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                Design system preview with Storybook link
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                Real-time feedback for all configurations
              </li>
            </ul>
          </div>
        </div>
      </FeatureModal>

      {/* Secure Sessions Modal */}
      <FeatureModal
        isOpen={activeModal === "secure-sessions"}
        onClose={() => setActiveModal(null)}
        title="Secure App Sessions"
      >
        <div className="space-y-6">
          <div className="flex items-center justify-center rounded-xl bg-zinc-800/50 py-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-800 text-[#BCE7F4]">
              <Shield className="h-8 w-8" />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-zinc-400 leading-relaxed">
              App session tokens now expire after 5 minutes instead of lasting indefinitely. This is a significant security improvement that protects your users and their data.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              A new @assembly-js/app-bridge package handles token refresh automatically in the background, so you don&apos;t need to change how you build apps—just upgrade and you&apos;re covered.
            </p>
            <h4 className="text-lg font-medium text-zinc-100 pt-2">Benefits</h4>
            <ul className="space-y-2 text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                Tokens expire after 5 minutes (was indefinite)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                Automatic token refresh in the background
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                No code changes required—just update the package
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                Better protection against token theft
              </li>
            </ul>
          </div>
        </div>
      </FeatureModal>

      {/* Tasks API Modal */}
      <FeatureModal
        isOpen={activeModal === "tasks-api"}
        onClose={() => setActiveModal(null)}
        title="Tasks API: Comments & Attachments"
      >
        <div className="space-y-6">
          <div className="flex items-center justify-center rounded-xl bg-zinc-800/50 py-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-800 text-[#BCE7F4]">
              <MessageSquare className="h-8 w-8" />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-zinc-400 leading-relaxed">
              The Tasks API now exposes comments and attachments. Fetch all comments on a task, access threaded replies via parentCommentId, and pull attachment metadata including file names, sizes, and download URLs.
            </p>
            <h4 className="text-lg font-medium text-zinc-100 pt-2">New capabilities</h4>
            <ul className="space-y-2 text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                Fetch all comments on a task
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                Access threaded replies via parentCommentId
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                Pull attachment metadata (file names, sizes, URLs)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                Build richer task integrations
              </li>
            </ul>
          </div>
        </div>
      </FeatureModal>

      {/* Webhooks Modal */}
      <FeatureModal
        isOpen={activeModal === "webhooks"}
        onClose={() => setActiveModal(null)}
        title="Webhooks"
      >
        <div className="space-y-6">
          <div className="flex items-center justify-center rounded-xl bg-zinc-800/50 py-12">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-800 text-[#BCE7F4]">
              <Code2 className="h-8 w-8" />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-zinc-400 leading-relaxed">
              There&apos;s a new comment.created webhook so you can trigger workflows when clients respond. Build integrations that track client activity or sync task data externally.
            </p>
            <h4 className="text-lg font-medium text-zinc-100 pt-2">Use cases</h4>
            <ul className="space-y-2 text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                Trigger Slack notifications when clients comment
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                Sync task data to external project management tools
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                Track client engagement and activity
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#BCE7F4] mt-1">•</span>
                Build custom automations based on client responses
              </li>
            </ul>
          </div>
        </div>
      </FeatureModal>
    </section>
  );
}
