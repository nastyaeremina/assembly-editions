"use client";

import { motion } from "framer-motion";
import { SectionHeading, Badge } from "@/components/ui";
import { Type, Palette, Sparkles } from "lucide-react";

interface SmallFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function SmallFeature({ icon, title, description }: SmallFeatureProps) {
  return (
    <div className="flex gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-zinc-100">{title}</h4>
        <p className="mt-1 text-sm text-zinc-400">{description}</p>
      </div>
    </div>
  );
}

export function WhatsMoreSection() {
  return (
    <section id="whats-more" className="py-16 sm:py-24 bg-zinc-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="And so much more"
            subtitle="A few more favorites from this release."
          />
        </motion.div>

        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SmallFeature
              icon={<Type className="h-5 w-5" />}
              title="Formatting Bar"
              description="Use the new formatting bar in the Messages App and elsewhere to better structure text."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SmallFeature
              icon={<Palette className="h-5 w-5" />}
              title="Icon Picker"
              description="Use our new icon picker to select from over 100 new icons."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <SmallFeature
              icon={<Sparkles className="h-5 w-5" />}
              title="More Coming Soon"
              description="Stay tuned for additional features and improvements."
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
