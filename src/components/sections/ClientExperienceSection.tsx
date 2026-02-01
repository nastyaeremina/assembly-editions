"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading, ExpandableFeatureCard, ScreenshotDisplay, MediaPlaceholder } from "@/components/ui";
import { FolderOpen, EyeOff, GripVertical, Layers, Tags, Zap } from "lucide-react";

export function ClientExperienceSection() {
  return (
    <section id="client-experience" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Create remarkable experiences for clients"
            subtitle="Reimagined client portal with better organization and personalized homepages."
          />
        </motion.div>

        {/* Feature Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ExpandableFeatureCard
              title="App Folders"
              description="Drag and drop apps and embeds into folders. Group reports into an 'Analytics' folder, or create a 'Helpful links' folder for external resources."
              mediaElement={
                <ScreenshotDisplay
                  src="/screenshots/app_folders.jpg"
                  alt="App Folders"
                />
              }
              expandedContent={
                <div className="space-y-8">
                  {/* Hero section with image and intro */}
                  <div className="grid gap-6 lg:grid-cols-5">
                    <div className="lg:col-span-3">
                      <ScreenshotDisplay
                        src="/screenshots/app_folders.jpg"
                        alt="App Folders organization"
                      />
                    </div>
                    <div className="lg:col-span-2 flex flex-col justify-center">
                      <p className="text-zinc-300 leading-relaxed text-lg">
                        Organize your client portal with drag-and-drop folders. Group apps, embeds, and resources into logical categories that make sense for your clients.
                      </p>
                    </div>
                  </div>

                  {/* Feature cards grid */}
                  <div className="grid gap-3 sm:gap-4 sm:grid-cols-3">
                    {/* Drag & Drop */}
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#BCE7F4]/10 text-[#BCE7F4] mb-4">
                        <GripVertical className="h-5 w-5" />
                      </div>
                      <h4 className="font-medium text-zinc-100 mb-2">Drag & Drop</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        Reorganize apps instantly. Just drag items between folders or reorder them within the sidebar.
                      </p>
                    </div>

                    {/* Custom Folders */}
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#BCE7F4]/10 text-[#BCE7F4] mb-4">
                        <FolderOpen className="h-5 w-5" />
                      </div>
                      <h4 className="font-medium text-zinc-100 mb-2">Custom Folders</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        Create folders like &quot;Analytics&quot;, &quot;Resources&quot;, or &quot;Helpful Links&quot; to group related items together.
                      </p>
                    </div>

                    {/* Hidden Apps */}
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#BCE7F4]/10 text-[#BCE7F4] mb-4">
                        <EyeOff className="h-5 w-5" />
                      </div>
                      <h4 className="font-medium text-zinc-100 mb-2">Hidden Apps</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        Unpin apps from your internal view while keeping them active for clients. Great for set-and-forget integrations.
                      </p>
                    </div>
                  </div>

                  {/* App Pinning detail section */}
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 sm:p-6">
                    <div className="grid gap-6 lg:grid-cols-5 items-center">
                      <div className="lg:col-span-2">
                        <div className="relative">
                          <div className="absolute inset-0 bg-[#BCE7F4]/5 blur-2xl rounded-full scale-125" />
                          <div className="relative rounded-xl border border-zinc-700 bg-zinc-900/50 p-2 shadow-xl">
                            <Image
                              src="/screenshots/app-folders-pinning.jpg"
                              alt="App pinning feature"
                              width={400}
                              height={200}
                              className="rounded-lg w-full h-auto"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-3">
                        <h4 className="text-lg font-medium text-zinc-100 mb-3">Keep your workspace focused</h4>
                        <p className="text-zinc-400 leading-relaxed">
                          Some apps are essential for clients but not for your day-to-day work. Unpin them from your internal sidebar to hide them from your team while keeping them fully active in the client portal. Perfect for background integrations like file backups, accounting sync, or automated workflows that just need to run quietly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ExpandableFeatureCard
              title="Homepage Variants"
              description="Create up to five different homepage variants and automatically show the right one to each client based on custom field tags."
              mediaElement={
                <ScreenshotDisplay
                  src="/screenshots/home.jpg"
                  alt="Homepage Variants"
                />
              }
              expandedContent={
                <div className="space-y-8">
                  {/* Hero section with image and intro */}
                  <div className="grid gap-6 lg:grid-cols-5">
                    <div className="lg:col-span-3">
                      <ScreenshotDisplay
                        src="/screenshots/home.jpg"
                        alt="Homepage Variants"
                      />
                    </div>
                    <div className="lg:col-span-2 flex flex-col justify-center">
                      <p className="text-zinc-300 leading-relaxed text-lg">
                        Create up to five different homepage variants and automatically show the right one to each client based on custom field tags.
                      </p>
                    </div>
                  </div>

                  {/* Feature cards grid */}
                  <div className="grid gap-3 sm:gap-4 sm:grid-cols-3">
                    {/* Multiple Variants */}
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#BCE7F4]/10 text-[#BCE7F4] mb-4">
                        <Layers className="h-5 w-5" />
                      </div>
                      <h4 className="font-medium text-zinc-100 mb-2">Multiple Variants</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        Design up to five distinct homepage layouts, each tailored for different client segments or service tiers.
                      </p>
                    </div>

                    {/* Tag-Based Routing */}
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#BCE7F4]/10 text-[#BCE7F4] mb-4">
                        <Tags className="h-5 w-5" />
                      </div>
                      <h4 className="font-medium text-zinc-100 mb-2">Tag-Based Routing</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        Assign variants using custom field tags. Clients automatically see the homepage that matches their profile.
                      </p>
                    </div>

                    {/* Automatic Switching */}
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#BCE7F4]/10 text-[#BCE7F4] mb-4">
                        <Zap className="h-5 w-5" />
                      </div>
                      <h4 className="font-medium text-zinc-100 mb-2">Automatic Switching</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        No manual work needed. When a client&apos;s tags change, their homepage updates automatically.
                      </p>
                    </div>
                  </div>

                  {/* Configuration detail section */}
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 sm:p-6">
                    <div className="grid gap-6 lg:grid-cols-5 items-center">
                      <div className="lg:col-span-2">
                        <div className="relative">
                          <div className="absolute inset-0 bg-[#BCE7F4]/5 blur-2xl rounded-full scale-125" />
                          <div className="relative rounded-xl border border-zinc-700 bg-zinc-900/50 p-2 shadow-xl">
                            <Image
                              src="/screenshots/home_variants.png"
                              alt="Homepage Variants configuration"
                              width={400}
                              height={200}
                              className="rounded-lg w-full h-auto"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="lg:col-span-3">
                        <h4 className="text-lg font-medium text-zinc-100 mb-3">Personalization at scale</h4>
                        <p className="text-zinc-400 leading-relaxed">
                          Running a tiered service model? Show premium clients their dedicated resources while basic clients see standard onboarding. Serving both businesses and individuals? Each sees a homepage tailored to how they work with you. Great for distinguishing between client types, onboarding stages, or industry-specific configurations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
