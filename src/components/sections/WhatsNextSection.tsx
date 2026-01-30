"use client";

import { motion } from "framer-motion";
import { SectionHeading, Badge, Button, MediaPlaceholder } from "@/components/ui";
import { Bot, Shield, ArrowRight, ExternalLink } from "lucide-react";

interface RoadmapCardProps {
  icon: React.ReactNode;
  title: string;
  timing: string;
  features: string[];
  badge?: string;
  badgeVariant?: "new" | "coming-soon";
}

function RoadmapCard({
  icon,
  title,
  timing,
  features,
  badge,
  badgeVariant = "coming-soon",
}: RoadmapCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-800 text-[#BCE7F4]">
        {icon}
      </div>
      <div className="flex items-center gap-3">
        <h3 className="text-xl font-semibold text-zinc-100">{title}</h3>
        {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
      </div>
      <p className="mt-1 text-sm text-zinc-500">{timing}</p>
      <ul className="mt-4 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-zinc-400">
            <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[#BCE7F4]" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WhatsNextSection() {
  return (
    <section id="whats-next" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="What's next"
            subtitle="Assembly 2.0 is live — but we're just getting started. Two more major releases are shipping in the next eight weeks."
          />
        </motion.div>

        {/* Roadmap Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <RoadmapCard
              icon={<Bot className="h-6 w-6" />}
              title="AI Edition"
              timing="Coming first"
              badge="Coming Soon"
              features={[
                "ChatGPT App to ask questions about your clients from anywhere",
                "MCP server for AI-native workflows",
                "Deeper Ask Assembly experience inside the platform",
              ]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <RoadmapCard
              icon={<Shield className="h-6 w-6" />}
              title="Scale Ready Edition"
              timing="Coming after AI Edition"
              badge="Coming Soon"
              features={[
                "Audit logs for compliance and security",
                "SSO for enterprise authentication",
                "Performance improvements for large teams",
              ]}
            />
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <div className="rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-8 text-center md:p-12">
            <h3 className="text-2xl font-bold text-zinc-100">
              Try Assembly 2.0 Today
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-zinc-400">
              Preview a fully branded client portal with your company&apos;s look and feel before you even sign up. Want early access to upcoming editions or want to shape what we build? Let us know.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg">
                Preview Your Portal
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="secondary" size="lg">
                Request Early Access
              </Button>
            </div>
            <p className="mt-8 text-sm text-zinc-500">
              Thanks for building your business on Assembly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
