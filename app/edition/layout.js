const OG_IMAGE = "https://assembly-editions-gamma.vercel.app/images/Blog%20Cover.png";

export const metadata = {
  metadataBase: new URL("https://assembly-editions-gamma.vercel.app"),
  title: "Meet Assembly 2.0 | Product Release Editions",
  description:
    "Assembly 2.0 is live. Dynamic client portals, app folders, time-based automations, desktop app, and more. The biggest update in Assembly history.",
  openGraph: {
    title: "Meet Assembly 2.0 | Product Release Editions",
    description:
      "Assembly 2.0 is live. Dynamic client portals, app folders, time-based automations, desktop app, and more. The biggest update in Assembly history.",
    images: [
      {
        url: OG_IMAGE,
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
    images: [OG_IMAGE],
  },
};

export default function EditionLayout({ children }) {
  return children;
}
