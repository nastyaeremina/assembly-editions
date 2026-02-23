"use client";

import { ScreenshotDisplay, SectionReveal } from "@/components/ui";

interface PaymentsSectionProps {
  inSplit?: boolean;
}

export function PaymentsSection({ inSplit = false }: PaymentsSectionProps) {
  return (
    <section
      id="payments"
      className={`relative ${inSplit ? "py-20 sm:py-32" : "py-20 sm:py-32"}`}
      style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}
    >
      {/* Ambient gradient — top left */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "60%",
          height: "60%",
          background: "radial-gradient(ellipse at top left, rgba(255, 255, 255, 0.02), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className={`relative ${inSplit ? "px-6 sm:px-8 lg:px-10" : "mx-auto max-w-7xl px-6"}`}>
        {/* Header group */}
        <SectionReveal>
          {/* Section number + extending rule */}
          <div
            className="flex items-center"
            style={{ marginBottom: "1.5rem" }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: "0.875rem",
                letterSpacing: "-0.04em",
                color: "rgba(255, 255, 255, 0.4)",
                whiteSpace: "nowrap",
                paddingRight: "1.5rem",
              }}
            >
              04
            </span>
            <div
              style={{
                flex: 1,
                height: "1px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              }}
            />
          </div>

          <h2
            style={{
              fontFamily: "'PP Mori', var(--font-sans)",
              fontWeight: 600,
              fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              color: "var(--swatch-1)",
              margin: "0 0 1.25rem 0",
            }}
          >
            Payments
          </h2>

          <p
            style={{
              fontFamily: "'PP Mori', var(--font-sans)",
              fontWeight: 400,
              fontSize: "1.15rem",
              lineHeight: 1.45,
              color: "var(--swatch-3)",
              maxWidth: "36rem",
              margin: "0 0 3.5rem 0",
            }}
          >
            Invoices, subscriptions, payment links, and storefronts — all brought together in one place.
          </p>
        </SectionReveal>

        {/* Payments Home */}
        <SectionReveal delay={0.1}>
          <div style={{ marginBottom: "3.5rem" }}>
            <ScreenshotDisplay src="/screenshots/Payments.jpg" alt="Payments Home Overview" />
            <div className="grid gap-6 lg:grid-cols-12" style={{ marginTop: "2rem" }}>
              <div className="lg:col-span-4">
                <h3 style={{ fontFamily: "'PP Mori', var(--font-sans)", fontWeight: 600, fontSize: "1.05rem", lineHeight: 1.3, letterSpacing: "-0.015em", color: "var(--swatch-1)", margin: 0 }}>
                  One Payments Home
                </h3>
              </div>
              <div className="lg:col-span-8">
                <p style={{ fontFamily: "'PP Mori', var(--font-sans)", fontWeight: 400, fontSize: "0.975rem", lineHeight: 1.55, color: "var(--swatch-3)", margin: 0 }}>
                  All billing surfaces consolidated into a single page with tabs — Overview, Invoices, Subscriptions, Payment Links, Stores, and Services. See your balance, upcoming payouts, and payment activity at a glance.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>


        {/* Accounting Integrations */}
        <SectionReveal delay={0.1}>
          <div>
            <ScreenshotDisplay src="/screenshots/quickbooks.jpg" alt="QuickBooks integration" />
            <div className="grid gap-6 lg:grid-cols-12" style={{ marginTop: "2rem" }}>
              <div className="lg:col-span-4">
                <h3 style={{ fontFamily: "'PP Mori', var(--font-sans)", fontWeight: 600, fontSize: "1.05rem", lineHeight: 1.3, letterSpacing: "-0.015em", color: "var(--swatch-1)", margin: 0 }}>
                  QuickBooks &amp; Xero
                </h3>
              </div>
              <div className="lg:col-span-8">
                <p style={{ fontFamily: "'PP Mori', var(--font-sans)", fontWeight: 400, fontSize: "0.975rem", lineHeight: 1.55, color: "var(--swatch-3)", margin: 0 }}>
                  Accounting integrations are fully out of beta. Map Assembly products to your existing items, sync invoice statuses, invoice numbers, and tax information. One-way sync — your books stay clean.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
