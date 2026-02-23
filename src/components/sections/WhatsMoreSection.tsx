"use client";

const heading: React.CSSProperties = {
  fontFamily: "'PP Mori', var(--font-sans)",
  fontWeight: 600,
  fontSize: "1.1rem",
  lineHeight: 1.3,
  color: "var(--swatch-1)",
  margin: 0,
};

const body: React.CSSProperties = {
  fontFamily: "'PP Mori', var(--font-sans)",
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: 1.5,
  color: "var(--swatch-3)",
  margin: 0,
};

const bullet: React.CSSProperties = {
  fontFamily: "'PP Mori', var(--font-sans)",
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: 1.5,
  color: "var(--swatch-3)",
  margin: 0,
  paddingLeft: "1rem",
  position: "relative" as const,
};

export function WhatsMoreSection() {
  return (
    <section id="whats-more" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Divider at top */}
        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            margin: "0 0 3.5rem 0",
          }}
        />

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2
              style={{
                fontFamily: "'PP Mori', var(--font-sans)",
                fontWeight: 600,
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: "var(--swatch-1)",
                margin: 0,
              }}
            >
              And so much more
            </h2>
            <p
              style={{
                fontFamily: "'PP Mori', var(--font-sans)",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.4,
                color: "var(--swatch-4)",
                marginTop: "0.8rem",
              }}
            >
              A few more favorites from this release.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              <li style={{ ...bullet, marginBottom: "1rem" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--swatch-4)" }}>·</span>
                Use the new formatting bar in the Messages App and elsewhere to better structure text.
              </li>
              <li style={{ ...bullet, marginBottom: "1rem" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--swatch-4)" }}>·</span>
                Use our new icon picker to select from over 100 new icons.
              </li>
              <li style={bullet}>
                <span style={{ position: "absolute", left: 0, color: "var(--swatch-4)" }}>·</span>
                TBD
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
