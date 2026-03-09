"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";

/* ──────────────────────────────────────────────────────────
   APPBRIDGE CODE DEMO
   Static code editor showing a realistic AppBridge setup.
   Dark syntax-highlighted block — signals "developer section"
   without being interactive or overwhelming.
   ────────────────────────────────────────────────────────── */

/* ── Syntax colors — lifted dark-editor palette ── */
const S = {
  bg: "#161618",
  bgHeader: "#1c1c1f",
  border: "rgba(255, 255, 255, 0.08)",
  lineNum: "rgba(255, 255, 255, 0.25)",
  comment: "rgba(255, 255, 255, 0.38)",
  keyword: "#d4a4f0",     // purple — import, from, const, await
  string: "#d0eda0",      // green — strings
  func: "#9bbcff",        // blue — function names
  property: "#f9a682",    // orange — property keys
  variable: "#f0f4ff",    // off-white — variable names
  punctuation: "rgba(255, 255, 255, 0.6)", // dimmed — brackets, colons
  plain: "rgba(255, 255, 255, 0.85)",      // regular text
};

const tokenColor = {
  keyword: S.keyword,
  string: S.string,
  func: S.func,
  property: S.property,
  variable: S.variable,
  punctuation: S.punctuation,
  comment: S.comment,
  plain: S.plain,
};

/* ── Code lines — AppBridge config snippet ── */
const CODE_LINES = [
  // Line 1: import
  [
    { text: "import", type: "keyword" },
    { text: " { ", type: "punctuation" },
    { text: "createApp", type: "func" },
    { text: " } ", type: "punctuation" },
    { text: "from", type: "keyword" },
    { text: " '@assembly/app-bridge'", type: "string" },
  ],
  // Line 2: empty
  [],
  // Line 3: const app
  [
    { text: "const", type: "keyword" },
    { text: " app ", type: "variable" },
    { text: "= ", type: "punctuation" },
    { text: "createApp", type: "func" },
    { text: "({", type: "punctuation" },
  ],
  // Line 4: title
  [
    { text: "  title", type: "property" },
    { text: ": ", type: "punctuation" },
    { text: "'My Custom App'", type: "string" },
    { text: ",", type: "punctuation" },
  ],
  // Line 5: empty
  [],
  // Line 6: comment
  [
    { text: "  // Header controls & navigation", type: "comment" },
  ],
  // Line 7: breadcrumbs
  [
    { text: "  breadcrumbs", type: "property" },
    { text: ": [", type: "punctuation" },
    { text: "{ ", type: "punctuation" },
    { text: "label", type: "property" },
    { text: ": ", type: "punctuation" },
    { text: "'Dashboard'", type: "string" },
    { text: ", ", type: "punctuation" },
    { text: "path", type: "property" },
    { text: ": ", type: "punctuation" },
    { text: "'/'", type: "string" },
    { text: " }],", type: "punctuation" },
  ],
  // Line 8: actions
  [
    { text: "  actions", type: "property" },
    { text: ": [", type: "punctuation" },
    { text: "{ ", type: "punctuation" },
    { text: "label", type: "property" },
    { text: ": ", type: "punctuation" },
    { text: "'Settings'", type: "string" },
    { text: ", ", type: "punctuation" },
    { text: "icon", type: "property" },
    { text: ": ", type: "punctuation" },
    { text: "'gear'", type: "string" },
    { text: " }],", type: "punctuation" },
  ],
  // Line 9: empty
  [],
  // Line 10: comment
  [
    { text: "  // Session token auto-refreshes every 5 min", type: "comment" },
  ],
  // Line 11: auth
  [
    { text: "  auth", type: "property" },
    { text: ": { ", type: "punctuation" },
    { text: "autoRefresh", type: "property" },
    { text: ": ", type: "punctuation" },
    { text: "true", type: "keyword" },
    { text: " },", type: "punctuation" },
  ],
  // Line 12: closing
  [
    { text: "})", type: "punctuation" },
  ],
  // Line 13: empty
  [],
  // Line 14: comment
  [
    { text: "// Listen for task comments via webhook", type: "comment" },
  ],
  // Line 15: app.on
  [
    { text: "app", type: "variable" },
    { text: ".", type: "punctuation" },
    { text: "on", type: "func" },
    { text: "(", type: "punctuation" },
    { text: "'comment.created'", type: "string" },
    { text: ", ", type: "punctuation" },
    { text: "(", type: "punctuation" },
    { text: "event", type: "variable" },
    { text: ") ", type: "punctuation" },
    { text: "=>", type: "keyword" },
    { text: " {", type: "punctuation" },
  ],
  // Line 16: console.log
  [
    { text: "  console", type: "variable" },
    { text: ".", type: "punctuation" },
    { text: "log", type: "func" },
    { text: "(", type: "punctuation" },
    { text: "event", type: "variable" },
    { text: ".", type: "punctuation" },
    { text: "taskId", type: "property" },
    { text: ", ", type: "punctuation" },
    { text: "event", type: "variable" },
    { text: ".", type: "punctuation" },
    { text: "parentCommentId", type: "property" },
    { text: ")", type: "punctuation" },
  ],
  // Line 17: closing
  [
    { text: "})", type: "punctuation" },
  ],
];

/* ── The line number where the blinking cursor sits (1-indexed) ── */
const CURSOR_LINE = 13;
const MOBILE_CURSOR_LINE = 2;

/* ── Single code line ── */
function CodeLine({ tokens, lineNum, delay, isInView, hasCursor }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.3, delay, ease: "easeOut" }}
      style={{
        display: "flex",
        alignItems: "baseline",
        height: "22px",
        fontFamily: "'SF Mono', 'Fira Code', 'JetBrains Mono', Menlo, monospace",
        fontSize: "12.5px",
        lineHeight: "22px",
        whiteSpace: "pre",
        position: "relative",
        ...(hasCursor ? { backgroundColor: "rgba(255, 255, 255, 0.03)" } : {}),
      }}
    >
      {/* Active line highlight — subtle left accent */}
      {hasCursor && (
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "2px",
            backgroundColor: "rgba(255, 255, 255, 0.08)",
          }}
        />
      )}

      {/* Line number */}
      <span
        style={{
          display: "inline-block",
          width: "32px",
          textAlign: "right",
          paddingRight: "16px",
          color: hasCursor ? "rgba(255, 255, 255, 0.35)" : S.lineNum,
          fontSize: "11px",
          userSelect: "none",
          flexShrink: 0,
        }}
      >
        {lineNum}
      </span>

      {/* Tokens */}
      {tokens.map((token, i) => (
        <span key={i} style={{ color: tokenColor[token.type] }}>
          {token.text}
        </span>
      ))}

      {/* Static cursor */}
      {hasCursor && (
        <span
          style={{
            display: "inline-block",
            width: "1.5px",
            height: "14px",
            backgroundColor: "rgba(255, 255, 255, 0.55)",
            marginLeft: "1px",
            verticalAlign: "middle",
            position: "relative",
            top: "-1px",
          }}
        />
      )}
    </motion.div>
  );
}

/* ── Plain text of the code (for clipboard) ── */
const CODE_TEXT = CODE_LINES.map((tokens) => tokens.map((t) => t.text).join("")).join("\n");

/* ── Number of lines to show on mobile (just the createApp config) ── */
const MOBILE_LINE_COUNT = 12;

export function AppBridgeCodeDemo({ inSplit = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isDesktop = useMediaQuery("(min-width: 768px)", true);
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(CODE_TEXT);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* clipboard blocked — silently ignore */ }
  }, []);

  /* Each code line is 22px tall; top padding is 16px.
     Mobile clips after MOBILE_LINE_COUNT lines (no bottom padding). */
  const mobileMaxH = MOBILE_LINE_COUNT * 22 + 16;
  const desktopMaxH = CODE_LINES.length * 22 + 32;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        borderRadius: "10px",
        overflow: "hidden",
        border: `1px solid ${S.border}`,
        backgroundColor: S.bg,
      }}
    >
      {/* ── Editor header bar ── */}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          padding: "12px 16px",
          backgroundColor: S.bgHeader,
          borderBottom: `1px solid ${S.border}`,
        }}
      >
        {/* Traffic light dots */}
        <div style={{ display: "flex", gap: "7px", position: "relative", zIndex: 1 }}>
          {["#ff5f57", "#febc2e", "#28c840"].map((color) => (
            <div
              key={color}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: color,
                opacity: 0.8,
              }}
            />
          ))}
        </div>

        {/* Filename tab — absolutely centered */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            textAlign: "center",
            fontFamily: "'SF Mono', 'Fira Code', Menlo, monospace",
            fontSize: "11px",
            color: "rgba(255, 255, 255, 0.45)",
            letterSpacing: "0.01em",
            pointerEvents: "none",
          }}
        >
          app.config.ts
        </div>

        {/* Copy button */}
        <button
          type="button"
          onClick={handleCopy}
          style={{
            marginLeft: "auto",
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            gap: "4px",
            padding: "3px 8px",
            borderRadius: "4px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            backgroundColor: copied ? "rgba(34, 197, 94, 0.15)" : "transparent",
            color: copied ? "#4ade80" : "rgba(255, 255, 255, 0.45)",
            fontSize: "11px",
            fontFamily: "'SF Mono', 'Fira Code', Menlo, monospace",
            cursor: "pointer",
            transition: "all 200ms ease",
          }}
          onMouseEnter={(e) => { if (!copied) { e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.06)"; e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)"; } }}
          onMouseLeave={(e) => { if (!copied) { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "rgba(255, 255, 255, 0.45)"; } }}
        >
          {copied ? (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
          )}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      {/* ── Code content ── */}
      <div
        style={{
          padding: "16px 0 16px 12px",
          overflow: "hidden",
          maxHeight: isDesktop ? `${desktopMaxH}px` : `${mobileMaxH}px`,
          transition: "max-height 0.35s ease",
        }}
      >
        {CODE_LINES.map((tokens, i) => (
          <CodeLine
            key={i}
            tokens={tokens}
            lineNum={i + 1}
            delay={0.3 + i * 0.04}
            isInView={isInView}
            hasCursor={isDesktop ? i + 1 === CURSOR_LINE : i + 1 === MOBILE_CURSOR_LINE}
          />
        ))}
      </div>
    </motion.div>
  );
}
