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

export interface Subsection {
  id: string;
  label: string;
}

export interface SplitSection {
  id: string;
  label: string;
  shortLabel: string;
  number: string;
  title: string;
  subsections: Subsection[];
}

export const SPLIT_SECTIONS: SplitSection[] = [
  {
    id: "client-experience",
    label: "Client experience",
    shortLabel: "Clients",
    number: "01",
    title: "Create remarkable experiences for clients",
    subsections: [
      { id: "app-folders", label: "App Folders" },
      { id: "client-segments", label: "Client Segments" },
    ],
  },
  {
    id: "project-management",
    label: "Project management",
    shortLabel: "Tasks",
    number: "02",
    title: "Project management that actually fits how you work",
    subsections: [
      { id: "tasks-client-association", label: "Tasks with Client Association" },
      { id: "time-based-automations", label: "Time-Based Automations" },
    ],
  },
  {
    id: "client-management",
    label: "Client management",
    shortLabel: "Management",
    number: "03",
    title: "For client management",
    subsections: [
      { id: "native-desktop-app", label: "Native Desktop App" },
      { id: "context-bar", label: "Context Bar" },
    ],
  },
  {
    id: "payments",
    label: "Payments",
    shortLabel: "Payments",
    number: "04",
    title: "Payments, consolidated",
    subsections: [
      { id: "one-payments-home", label: "One Payments Home" },
      { id: "quickbooks-xero", label: "QuickBooks & Xero" },
    ],
  },
  {
    id: "developers",
    label: "Developers",
    shortLabel: "Developers",
    number: "05",
    title: "For developers",
    subsections: [
      { id: "custom-app-base", label: "New Custom App Base" },
      { id: "secure-app-sessions", label: "Secure App Sessions" },
      { id: "tasks-api", label: "Tasks API" },
    ],
  },
];

export type SplitSectionId = SplitSection["id"];
