export const SECTIONS = [
  { id: "client-experience", label: "Client Experience" },
  { id: "project-management", label: "Project Management" },
  { id: "client-management", label: "Client Management" },
  { id: "payments", label: "Payments" },
  { id: "developers", label: "Developers" },
  { id: "whats-more", label: "What's More" },
  { id: "whats-next", label: "What's Next" },
] as const;

export const BRAND = {
  name: "Assembly",
  version: "2.0",
  tagline: "The biggest update in Assembly history",
  description:
    "This release touches nearly every part of the platform — how clients experience your portal, how you manage tasks and billing, how your team stays in context, and how developers build on top of Assembly.",
} as const;

export type SectionId = (typeof SECTIONS)[number]["id"];

export const SPLIT_SECTIONS = [
  { id: "client-experience", label: "Client experience", shortLabel: "Clients", number: "01", title: "Create remarkable experiences for clients" },
  { id: "project-management", label: "Project management", shortLabel: "Tasks", number: "02", title: "Project management that actually fits how you work" },
  { id: "client-management", label: "Client management", shortLabel: "Management", number: "03", title: "For client management" },
  { id: "payments", label: "Payments", shortLabel: "Payments", number: "04", title: "Payments, consolidated" },
  { id: "developers", label: "Developers", shortLabel: "Developers", number: "05", title: "For developers" },
] as const;

export type SplitSectionId = (typeof SPLIT_SECTIONS)[number]["id"];
