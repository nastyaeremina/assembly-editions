"use client";

import { CustomerStoryCard } from "@/components/ui/CustomerStoryCard";
import Image from "next/image";

const sampleStats = [
  { value: "5x", label: "Time back" },
  { value: "40+", label: "Hours saved" },
  { value: "1,000+", label: "Automations triggered" },
];

const sampleStats4 = [
  { value: "5x", label: "Time back" },
  { value: "40+", label: "Hours saved" },
  { value: "1,000+", label: "Automations triggered" },
  { value: "98%", label: "Client satisfaction" },
];

function OttoLogo() {
  return (
    <div className="flex items-center gap-2">
      <div
        className="flex h-6 items-center rounded-md px-2 text-xs font-semibold tracking-wide"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          color: "var(--swatch-2)",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="mr-1.5">
          <rect width="24" height="24" rx="4" fill="currentColor" fillOpacity="0.3" />
          <rect x="4" y="4" width="7" height="7" rx="1.5" fill="currentColor" />
          <rect x="13" y="4" width="7" height="7" rx="1.5" fill="currentColor" />
          <rect x="4" y="13" width="7" height="7" rx="1.5" fill="currentColor" />
          <rect x="13" y="13" width="7" height="7" rx="1.5" fill="currentColor" fillOpacity="0.4" />
        </svg>
        OTTO
      </div>
    </div>
  );
}

function AcmeLogo() {
  return (
    <div className="flex items-center gap-2">
      <div
        className="flex h-6 items-center rounded-md px-2 text-xs font-semibold tracking-wide"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          color: "var(--swatch-2)",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="mr-1.5">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path d="M8 12 L12 6 L16 12 L12 18Z" fill="currentColor" fillOpacity="0.5" />
        </svg>
        ACME
      </div>
    </div>
  );
}

export default function CustomerStoriesDemo() {
  return (
    <div
      className="min-h-screen px-6 py-16 sm:px-10 lg:px-16"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Page header */}
      <div className="mx-auto mb-16 max-w-5xl">
        <p
          className="mb-3 text-sm font-medium tracking-wide uppercase"
          style={{ color: "var(--swatch-4)" }}
        >
          Component Preview
        </p>
        <h1
          className="text-3xl font-semibold sm:text-4xl"
          style={{
            color: "var(--swatch-1)",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
          }}
        >
          Customer Story Cards
        </h1>
        <p
          className="mt-4 max-w-xl text-base"
          style={{ color: "var(--swatch-3)", lineHeight: 1.5 }}
        >
          All card variants from the Figma component set. Large, horizontal,
          and compact — with and without images and stats.
        </p>
      </div>

      {/* ============================================= */}
      {/*  VARIANT 1 — LARGE VERTICAL                  */}
      {/* ============================================= */}
      <section className="mx-auto mb-20 max-w-5xl">
        <h2
          className="mb-6 text-lg font-semibold"
          style={{ color: "var(--swatch-2)", letterSpacing: "-0.02em" }}
        >
          Large Vertical
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* With image + stats */}
          <CustomerStoryCard
            variant="large"
            logo={<OttoLogo />}
            headline="How Once Accounting Scaled 4.5x in 7 Months with Professional Client Portal Software"
            stats={sampleStats}
            showStats={true}
            image={{
              src: "/screenshots/home.jpg",
              alt: "Assembly dashboard",
            }}
            href="#"
          />

          {/* With image, no stats */}
          <CustomerStoryCard
            variant="large"
            logo={<AcmeLogo />}
            headline="How Once Accounting Scaled 4.5x in 7 Months with Professional Client Portal Software"
            stats={sampleStats}
            showStats={false}
            image={{
              src: "/screenshots/Payments.jpg",
              alt: "Assembly payments",
            }}
            href="#"
          />
        </div>
      </section>

      {/* ============================================= */}
      {/*  VARIANT 2 — HORIZONTAL                      */}
      {/* ============================================= */}
      <section className="mx-auto mb-20 max-w-5xl">
        <h2
          className="mb-6 text-lg font-semibold"
          style={{ color: "var(--swatch-2)", letterSpacing: "-0.02em" }}
        >
          Horizontal Split
        </h2>

        <div className="grid gap-6">
          {/* With image + stats */}
          <CustomerStoryCard
            variant="horizontal"
            logo={<OttoLogo />}
            headline="How Once Accounting Scaled 4.5x in 7 Months with Professional Client Portal Software"
            stats={sampleStats}
            showStats={true}
            image={{
              src: "/screenshots/home.jpg",
              alt: "Assembly dashboard",
            }}
            href="#"
          />

          {/* No image, with stats */}
          <CustomerStoryCard
            variant="horizontal"
            logo={<AcmeLogo />}
            headline="How Once Accounting Scaled 4.5x in 7 Months with Professional Client Portal Software"
            stats={sampleStats4}
            showStats={true}
            href="#"
          />
        </div>
      </section>

      {/* ============================================= */}
      {/*  VARIANT 3 — COMPACT                         */}
      {/* ============================================= */}
      <section className="mx-auto mb-20 max-w-5xl">
        <h2
          className="mb-6 text-lg font-semibold"
          style={{ color: "var(--swatch-2)", letterSpacing: "-0.02em" }}
        >
          Compact
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* With image + stats */}
          <CustomerStoryCard
            variant="compact"
            logo={<OttoLogo />}
            headline="How Once Accounting Scaled 4.5x in 7 Months with Professional Client Portal Software"
            stats={sampleStats}
            showStats={true}
            image={{
              src: "/screenshots/home.jpg",
              alt: "Assembly dashboard",
            }}
            href="#"
          />

          {/* With image, no stats */}
          <CustomerStoryCard
            variant="compact"
            logo={<AcmeLogo />}
            headline="How Once Accounting Scaled 4.5x in 7 Months with Professional Client Portal Software"
            stats={sampleStats}
            showStats={false}
            image={{
              src: "/screenshots/Payments.jpg",
              alt: "Assembly payments",
            }}
            href="#"
          />

          {/* No image, with stats */}
          <CustomerStoryCard
            variant="compact"
            logo={<OttoLogo />}
            headline="How Once Accounting Scaled 4.5x in 7 Months with Professional Client Portal Software"
            stats={sampleStats}
            showStats={true}
            href="#"
          />
        </div>
      </section>

      {/* ============================================= */}
      {/*  MIXED GRID — realistic layout                */}
      {/* ============================================= */}
      <section className="mx-auto mb-20 max-w-5xl">
        <h2
          className="mb-6 text-lg font-semibold"
          style={{ color: "var(--swatch-2)", letterSpacing: "-0.02em" }}
        >
          Mixed Grid Layout
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Large spanning 2 cols */}
          <div className="md:col-span-2">
            <CustomerStoryCard
              variant="horizontal"
              logo={<OttoLogo />}
              headline="How Once Accounting Scaled 4.5x in 7 Months with Professional Client Portal Software"
              stats={sampleStats}
              showStats={true}
              image={{
                src: "/screenshots/home.jpg",
                alt: "Assembly dashboard",
              }}
              href="#"
            />
          </div>

          {/* Compact on the right */}
          <CustomerStoryCard
            variant="compact"
            logo={<AcmeLogo />}
            headline="How Once Accounting Scaled 4.5x in 7 Months with Professional Client Portal Software"
            stats={[
              { value: "3x", label: "Revenue growth" },
              { value: "200+", label: "Active clients" },
            ]}
            showStats={true}
            image={{
              src: "/screenshots/Payments.jpg",
              alt: "Assembly payments",
            }}
            href="#"
          />
        </div>
      </section>
    </div>
  );
}
