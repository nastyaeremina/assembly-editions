"use client";

import { motion } from "framer-motion";
import { SectionHeading, FeatureCard } from "@/components/ui";

export function ProjectManagementSection() {
  return (
    <section id="project-management" className="py-24 px-6 bg-zinc-900/30">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Project management that actually fits how you work"
            subtitle="Associate tasks with clients and automate recurring workflows with time-based triggers."
          />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FeatureCard
              title="Tasks with Client Association"
              description="Associate a task with a client or company without making it visible to them. Create a task, link it to a client, and it shows up on that client's profile — but only your team sees it. When ready, optionally share it with the client by turning on client access."
              mediaLabel="Screenshot: Task-Client Association"
              badge="New"
              layout="vertical"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FeatureCard
              title="Time-Based Automations"
              description="Set up tasks that reoccur monthly, quarterly, or on a custom schedule. Send recurring messages, trigger forms at regular intervals, or create quarterly check-in tasks for every active client. Target internal users, all clients, or all companies."
              mediaLabel="Screenshot: Time-Based Automations"
              badge="New"
              layout="vertical"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
