"use client";

import { motion } from "framer-motion";
import { SectionHeading, Badge, MediaPlaceholder } from "@/components/ui";
import { Code2, Shield, MessageSquare } from "lucide-react";

interface DevFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
  badgeVariant?: "new" | "beta" | "coming-soon";
}

function DevFeature({ icon, title, description, badge, badgeVariant = "new" }: DevFeatureProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-[#BCE7F4]">
        {icon}
      </div>
      <div className="flex items-center gap-3">
        <h3 className="text-lg font-semibold text-zinc-100">{title}</h3>
        {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
      </div>
      <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{description}</p>
    </div>
  );
}

export function DevelopersSection() {
  return (
    <section id="developers" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
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
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-semibold text-zinc-100">
                    New Custom App Base
                  </h3>
                  <Badge variant="new">New</Badge>
                </div>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  We&apos;ve rebuilt the foundation for Custom Apps from the ground up. The new base includes live examples for server-side rendering, client-side API requests, and AppBridge configuration—breadcrumbs, action menus, header controls—all with real feedback so you can see exactly how things work.
                </p>
                <p className="mt-3 text-sm text-zinc-500">
                  There&apos;s also a preview of our design system pointing to the latest Storybook. If you&apos;re building on Assembly, this is your new starting point.
                </p>
              </div>
              <MediaPlaceholder
                label="Screenshot: Custom App Base"
                aspectRatio="16:9"
              />
            </div>
          </div>
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
              badge="New"
              description="App session tokens now expire after 5 minutes instead of lasting indefinitely. A new @assembly-js/app-bridge package handles token refresh automatically in the background."
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
              badge="New"
              description="The Tasks API now exposes comments and attachments. Fetch all comments on a task, access threaded replies via parentCommentId, and pull attachment metadata."
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
              badge="New"
              description="There's a new comment.created webhook so you can trigger workflows when clients respond. Build integrations that track client activity or sync task data externally."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
