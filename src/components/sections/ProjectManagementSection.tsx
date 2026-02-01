"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading, HorizontalFeatureCard, MediaPlaceholder, ScreenshotDisplay } from "@/components/ui";
import { User, Users, Building2, Eye, EyeOff, ChevronRight, RotateCcw, MousePointerClick, Calendar, FileText, MessageSquare, ClipboardCheck, Target } from "lucide-react";

// Static flowchart diagram for the card preview
function TaskAssignmentFlowchart() {
  return (
    <div className="relative w-full h-full min-h-[180px] flex items-center justify-center p-3">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(188, 231, 244, 0.5) 1px, transparent 1px)`,
          backgroundSize: '16px 16px',
        }}
      />

      {/* Simple vertical flow with branches */}
      <div className="relative flex flex-col items-center">
        {/* Start node */}
        <div className="flex items-center gap-1.5 rounded-md bg-zinc-800 border border-zinc-700 px-2.5 py-1.5 shadow-sm">
          <div className="h-1.5 w-1.5 rounded-full bg-[#BCE7F4]" />
          <span className="text-[10px] font-medium text-zinc-300">Create Task</span>
        </div>

        {/* Connector line down */}
        <div className="w-px h-3 bg-zinc-600" />

        {/* Branch container */}
        <div className="relative flex items-start gap-6">
          {/* Left branch connector */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-px bg-zinc-600" />

          {/* Internal User path (left) */}
          <div className="flex flex-col items-center pt-3">
            <div className="w-px h-2 bg-zinc-600 -mt-3" />
            <div className="flex items-center gap-1 rounded-md bg-[#BCE7F4]/10 border border-[#BCE7F4]/30 px-2 py-1">
              <User className="h-2.5 w-2.5 text-[#BCE7F4]" />
              <span className="text-[9px] font-medium text-[#BCE7F4]">Internal</span>
            </div>
            <div className="w-px h-2 bg-zinc-600" />

            {/* Sub-branch for internal */}
            <div className="relative flex items-start gap-3">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70px] h-px bg-zinc-600" />

              {/* Link path */}
              <div className="flex flex-col items-center pt-2">
                <div className="w-px h-1.5 bg-zinc-600 -mt-2" />
                <div className="flex items-center gap-0.5 rounded bg-amber-500/10 border border-amber-500/30 px-1.5 py-0.5">
                  <Building2 className="h-2 w-2 text-amber-400" />
                  <span className="text-[8px] text-amber-400">Link</span>
                </div>
                <div className="w-px h-1.5 bg-zinc-600" />
                <div className="flex items-center gap-1">
                  <div className="rounded bg-purple-500/10 border border-purple-500/30 px-1 py-0.5">
                    <Eye className="h-2 w-2 text-purple-400" />
                  </div>
                  <div className="rounded bg-zinc-700/50 border border-zinc-600 px-1 py-0.5">
                    <EyeOff className="h-2 w-2 text-zinc-500" />
                  </div>
                </div>
              </div>

              {/* No link path */}
              <div className="flex flex-col items-center pt-2">
                <div className="w-px h-1.5 bg-zinc-600 -mt-2" />
                <div className="flex items-center gap-0.5 rounded bg-blue-500/10 border border-blue-500/30 px-1.5 py-0.5">
                  <User className="h-2 w-2 text-blue-400" />
                  <span className="text-[8px] text-blue-400">Only</span>
                </div>
              </div>
            </div>
          </div>

          {/* Client User path (right) */}
          <div className="flex flex-col items-center pt-3">
            <div className="w-px h-2 bg-zinc-600 -mt-3" />
            <div className="flex items-center gap-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 px-2 py-1">
              <Users className="h-2.5 w-2.5 text-emerald-400" />
              <span className="text-[9px] font-medium text-emerald-400">Client</span>
            </div>
            <div className="w-px h-2 bg-zinc-600" />
            <div className="flex items-center gap-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 px-1.5 py-0.5">
              <Eye className="h-2 w-2 text-emerald-400" />
              <span className="text-[8px] text-emerald-400">Visible</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Interactive diagram component for task assignment flow
function TaskAssignmentDiagram() {
  const [step, setStep] = useState<number>(0);
  const [assigneeType, setAssigneeType] = useState<"internal" | "client" | null>(null);
  const [clientAssociated, setClientAssociated] = useState<boolean | null>(null);
  const [clientVisible, setClientVisible] = useState<boolean | null>(null);

  const reset = () => {
    setStep(0);
    setAssigneeType(null);
    setClientAssociated(null);
    setClientVisible(null);
  };

  const handleAssigneeChoice = (type: "internal" | "client") => {
    setAssigneeType(type);
    setStep(type === "internal" ? 1 : 3);
    if (type === "client") {
      setClientAssociated(null);
      setClientVisible(null);
    }
  };

  const handleClientAssociation = (associated: boolean) => {
    setClientAssociated(associated);
    setStep(associated ? 2 : 3);
    if (!associated) {
      setClientVisible(null);
    }
  };

  const handleClientVisibility = (visible: boolean) => {
    setClientVisible(visible);
    setStep(3);
  };

  // Get result message based on selections
  const getResultMessage = () => {
    if (assigneeType === "client") {
      return {
        icon: <Users className="h-5 w-5" />,
        title: "Client-assigned task",
        description: "Task is assigned directly to the client. They can see and complete it.",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/30",
      };
    }
    if (assigneeType === "internal" && !clientAssociated) {
      return {
        icon: <User className="h-5 w-5" />,
        title: "Internal-only task",
        description: "Task stays completely internal. No client connection.",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/30",
      };
    }
    if (assigneeType === "internal" && clientAssociated && !clientVisible) {
      return {
        icon: <EyeOff className="h-5 w-5" />,
        title: "Client-linked, internal task",
        description: "Task appears on the client's profile for your team, but the client can't see it.",
        color: "text-amber-400",
        bg: "bg-amber-500/10",
        border: "border-amber-500/30",
      };
    }
    if (assigneeType === "internal" && clientAssociated && clientVisible) {
      return {
        icon: <Eye className="h-5 w-5" />,
        title: "Client-visible task",
        description: "Task is linked to the client AND visible to them. Best of both worlds.",
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/30",
      };
    }
    return null;
  };

  const result = getResultMessage();

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-lg font-medium text-zinc-100">How task assignment works</h4>
        {step > 0 && (
          <button
            onClick={reset}
            className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Start over
          </button>
        )}
      </div>

      {/* Step 1: Assignee Type */}
      <div className="space-y-4">
        <div className={`transition-opacity duration-300 ${step > 0 ? "opacity-50" : ""}`}>
          <p className="text-sm text-zinc-400 mb-3">Who do you want to assign this task to?</p>
          <div className="flex gap-3">
            <button
              onClick={() => handleAssigneeChoice("internal")}
              disabled={step > 0}
              className={`flex-1 flex items-center gap-3 rounded-lg border p-4 transition-all ${
                assigneeType === "internal"
                  ? "border-[#BCE7F4] bg-[#BCE7F4]/10"
                  : "border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800/50"
              } ${step > 0 ? "cursor-default" : "cursor-pointer"}`}
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                assigneeType === "internal" ? "bg-[#BCE7F4]/20 text-[#BCE7F4]" : "bg-zinc-800 text-zinc-400"
              }`}>
                <User className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className={`font-medium ${assigneeType === "internal" ? "text-[#BCE7F4]" : "text-zinc-200"}`}>
                  Internal user
                </div>
                <div className="text-xs text-zinc-500">Your team member</div>
              </div>
            </button>

            <button
              onClick={() => handleAssigneeChoice("client")}
              disabled={step > 0}
              className={`flex-1 flex items-center gap-3 rounded-lg border p-4 transition-all ${
                assigneeType === "client"
                  ? "border-emerald-500 bg-emerald-500/10"
                  : "border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800/50"
              } ${step > 0 ? "cursor-default" : "cursor-pointer"}`}
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                assigneeType === "client" ? "bg-emerald-500/20 text-emerald-400" : "bg-zinc-800 text-zinc-400"
              }`}>
                <Users className="h-5 w-5" />
              </div>
              <div className="text-left">
                <div className={`font-medium ${assigneeType === "client" ? "text-emerald-400" : "text-zinc-200"}`}>
                  Client user
                </div>
                <div className="text-xs text-zinc-500">Your client</div>
              </div>
            </button>
          </div>
        </div>

        {/* Step 2: Client Association (only for internal) */}
        <AnimatePresence>
          {assigneeType === "internal" && step >= 1 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`transition-opacity duration-300 ${step > 1 ? "opacity-50" : ""}`}
            >
              <div className="flex items-center gap-2 mb-3 mt-2">
                <ChevronRight className="h-4 w-4 text-[#BCE7F4]" />
                <p className="text-sm text-zinc-400">Associate this task with a client?</p>
              </div>
              <div className="flex gap-3 ml-6">
                <button
                  onClick={() => handleClientAssociation(true)}
                  disabled={step > 1}
                  className={`flex-1 flex items-center gap-3 rounded-lg border p-4 transition-all ${
                    clientAssociated === true
                      ? "border-amber-500 bg-amber-500/10"
                      : "border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800/50"
                  } ${step > 1 ? "cursor-default" : "cursor-pointer"}`}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                    clientAssociated === true ? "bg-amber-500/20 text-amber-400" : "bg-zinc-800 text-zinc-400"
                  }`}>
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div className={`font-medium ${clientAssociated === true ? "text-amber-400" : "text-zinc-200"}`}>
                      Yes, link to client
                    </div>
                    <div className="text-xs text-zinc-500">Shows on client profile</div>
                  </div>
                </button>

                <button
                  onClick={() => handleClientAssociation(false)}
                  disabled={step > 1}
                  className={`flex-1 flex items-center gap-3 rounded-lg border p-4 transition-all ${
                    clientAssociated === false
                      ? "border-blue-500 bg-blue-500/10"
                      : "border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800/50"
                  } ${step > 1 ? "cursor-default" : "cursor-pointer"}`}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                    clientAssociated === false ? "bg-blue-500/20 text-blue-400" : "bg-zinc-800 text-zinc-400"
                  }`}>
                    <User className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div className={`font-medium ${clientAssociated === false ? "text-blue-400" : "text-zinc-200"}`}>
                      No, keep internal
                    </div>
                    <div className="text-xs text-zinc-500">Purely internal task</div>
                  </div>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step 3: Client Visibility (only if client associated) */}
        <AnimatePresence>
          {assigneeType === "internal" && clientAssociated === true && step >= 2 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`transition-opacity duration-300 ${step > 2 ? "opacity-50" : ""}`}
            >
              <div className="flex items-center gap-2 mb-3 mt-2">
                <ChevronRight className="h-4 w-4 text-amber-400" />
                <p className="text-sm text-zinc-400">Make this task visible to the client?</p>
              </div>
              <div className="flex gap-3 ml-6">
                <button
                  onClick={() => handleClientVisibility(true)}
                  disabled={step > 2}
                  className={`flex-1 flex items-center gap-3 rounded-lg border p-4 transition-all ${
                    clientVisible === true
                      ? "border-purple-500 bg-purple-500/10"
                      : "border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800/50"
                  } ${step > 2 ? "cursor-default" : "cursor-pointer"}`}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                    clientVisible === true ? "bg-purple-500/20 text-purple-400" : "bg-zinc-800 text-zinc-400"
                  }`}>
                    <Eye className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div className={`font-medium ${clientVisible === true ? "text-purple-400" : "text-zinc-200"}`}>
                      Yes, make visible
                    </div>
                    <div className="text-xs text-zinc-500">Client can see it</div>
                  </div>
                </button>

                <button
                  onClick={() => handleClientVisibility(false)}
                  disabled={step > 2}
                  className={`flex-1 flex items-center gap-3 rounded-lg border p-4 transition-all ${
                    clientVisible === false
                      ? "border-amber-500 bg-amber-500/10"
                      : "border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800/50"
                  } ${step > 2 ? "cursor-default" : "cursor-pointer"}`}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                    clientVisible === false ? "bg-amber-500/20 text-amber-400" : "bg-zinc-800 text-zinc-400"
                  }`}>
                    <EyeOff className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <div className={`font-medium ${clientVisible === false ? "text-amber-400" : "text-zinc-200"}`}>
                      No, keep hidden
                    </div>
                    <div className="text-xs text-zinc-500">Internal view only</div>
                  </div>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Result */}
        <AnimatePresence>
          {step === 3 && result && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className={`mt-4 rounded-xl border ${result.border} ${result.bg} p-4`}
            >
              <div className="flex items-start gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${result.bg} ${result.color}`}>
                  {result.icon}
                </div>
                <div>
                  <div className={`font-medium ${result.color}`}>{result.title}</div>
                  <p className="text-sm text-zinc-400 mt-1">{result.description}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Hint text */}
      {step === 0 && (
        <p className="text-xs text-zinc-600 mt-4 text-center">
          Click an option to explore the task assignment flow
        </p>
      )}
    </div>
  );
}

export function ProjectManagementSection() {
  return (
    <section id="project-management" className="py-16 sm:py-24 bg-zinc-900/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
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

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <HorizontalFeatureCard
              title="Tasks with Client Association"
              description="Associate a task with a client or company without making it visible to them. Create a task, link it to a client, and it shows up on that client's profile — but only your team sees it."
              imagePosition="left"
              mediaElement={
                <ScreenshotDisplay
                  src="/screenshots/task_creation.jpg"
                  alt="Task creation with client association"
                />
              }
              expandedContent={
                <div className="space-y-8">
                  {/* Full-width screenshot */}
                  <ScreenshotDisplay
                    src="/screenshots/task_creation.jpg"
                    alt="Task creation with client association"
                  />

                  {/* Description */}
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    When you create a task you can assign it to a client or internal user. If you assign it to an internal user you can associate it to a client for better organization. And then you can also give clients visibility for the task, so that they can follow along with progress.
                  </p>

                  {/* Interactive Diagram */}
                  <TaskAssignmentDiagram />

                  {/* Why this matters section */}
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-4 sm:p-6">
                    <h4 className="text-base sm:text-lg font-medium text-zinc-100 mb-2 sm:mb-3">Why this matters</h4>
                    <p className="text-zinc-400 leading-relaxed">
                      Internal-first project management that adapts to when and how you want to loop clients in. Keep tasks organized by client without exposing them, and toggle visibility when you&apos;re ready to share. Great for managing deliverables, tracking client requests internally, or collaborating on tasks before sharing progress.
                    </p>
                  </div>
                </div>
              }
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <HorizontalFeatureCard
              title="Time-Based Automations"
              description="Set up tasks that reoccur monthly, quarterly, or on a custom schedule. Send recurring messages, trigger forms at regular intervals, or create quarterly check-in tasks."
              imagePosition="right"
              mediaElement={
                <ScreenshotDisplay
                  src="/screenshots/automations_scheduled_trigger.jpg"
                  alt="Time-Based Automations"
                />
              }
              expandedContent={
                <div className="space-y-8">
                  {/* Full-width screenshot */}
                  <ScreenshotDisplay
                    src="/screenshots/automations_scheduled_trigger.jpg"
                    alt="Time-Based Automations configuration"
                  />

                  {/* Description */}
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    Create automations that run on a schedule — daily, weekly, monthly, or on a custom cadence. Choose which clients or team members to target, define what action to trigger, and let Assembly handle the rest. Great for recurring deliverables, periodic check-ins, or any workflow that needs to happen on a regular basis.
                  </p>

                  {/* Use cases as feature cards */}
                  <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#BCE7F4]/10 text-[#BCE7F4] mb-4">
                        <FileText className="h-5 w-5" />
                      </div>
                      <h4 className="font-medium text-zinc-100 mb-2">Recurring Reports</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        Auto-create monthly reporting tasks. Never miss a deliverable again.
                      </p>
                    </div>

                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#BCE7F4]/10 text-[#BCE7F4] mb-4">
                        <ClipboardCheck className="h-5 w-5" />
                      </div>
                      <h4 className="font-medium text-zinc-100 mb-2">Client Check-ins</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        Quarterly reviews and touchpoints that create themselves on schedule.
                      </p>
                    </div>

                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#BCE7F4]/10 text-[#BCE7F4] mb-4">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <h4 className="font-medium text-zinc-100 mb-2">Form Requests</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        Trigger feedback forms, update requests, or surveys at regular intervals.
                      </p>
                    </div>

                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#BCE7F4]/10 text-[#BCE7F4] mb-4">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <h4 className="font-medium text-zinc-100 mb-2">Scheduled Messages</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        Send recurring updates to clients or team members automatically.
                      </p>
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
