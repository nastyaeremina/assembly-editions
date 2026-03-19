export const metadata = {
  title: "Meet Assembly 2.0 | Product Release Editions",
  description:
    "Assembly 2.0 is live. Dynamic client portals, app folders, time-based automations, desktop app, and more. The biggest update in Assembly history.",
  openGraph: {
    title: "Meet Assembly 2.0 | Product Release Editions",
    description:
      "Assembly 2.0 is live. Dynamic client portals, app folders, time-based automations, desktop app, and more. The biggest update in Assembly history.",
    images: [
      {
        url: "/images/Blog Cover.png",
        width: 1200,
        height: 630,
        alt: "Assembly 2.0 Product Release",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet Assembly 2.0 | Product Release Editions",
    description:
      "Assembly 2.0 is live. Dynamic client portals, app folders, time-based automations, desktop app, and more. The biggest update in Assembly history.",
    images: ["/images/Blog Cover.png"],
  },
};

export default function EditionLayout({ children }) {
  return children;
}
