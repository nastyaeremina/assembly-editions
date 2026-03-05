export const SECTIONS = [
  { id: "client-experience", label: "Client Experience" },
  { id: "project-management", label: "Project Management" },
  { id: "client-management", label: "Client Management" },
  { id: "payments", label: "Payments" },
  { id: "developers", label: "Developers" },
  { id: "whats-more", label: "What's More" },
  { id: "whats-next", label: "What's Next" },
];

export const BRAND = {
  name: "Assembly",
  version: "2.0",
  tagline: "The biggest update in Assembly history",
  description:
    "This release touches nearly every part of the platform — how clients experience your portal, how you manage tasks and billing, how your team stays in context, and how developers build on top of Assembly.",
};

export const SPLIT_SECTIONS = [
  {
    id: "client-experience",
    label: "Client experience",
    shortLabel: "Clients",
    number: "01",
    title: "Create remarkable experiences for clients",
    categoryLabel: "CLIENT EXPERIENCE",
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
    categoryLabel: "PROJECT MANAGEMENT",
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
    categoryLabel: "CLIENT MANAGEMENT",
    subsections: [
      { id: "context-bar", label: "Context Bar" },
    ],
  },
  {
    id: "payments",
    label: "Payments",
    shortLabel: "Payments",
    number: "04",
    title: "Payments, consolidated",
    categoryLabel: "PAYMENTS",
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
    categoryLabel: "DEVELOPERS",
    subsections: [
      { id: "custom-app-base", label: "New Custom App Base" },
      { id: "secure-app-sessions", label: "Secure App Sessions" },
      { id: "tasks-api", label: "Tasks API" },
    ],
  },
];
