"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ──────────────────────────────────────────────────────────
   APPBRIDGE CODE DEMO
   Static code editor showing a realistic AppBridge setup.
   Dark syntax-highlighted block — signals "developer section"
   without being interactive or overwhelming.
   ────────────────────────────────────────────────────────── */

interface AppBridgeCodeDemoProps {
  inSplit?: boolean;
}

/* ── Syntax colors — muted, dark-editor palette ── */
const S = {
  bg: "#0d0d0d",
  bgHeader: "#141414",
  border: "rgba(255, 255, 255, 0.06)",
  lineNum: "rgba(255, 255, 255, 0.18)",
  comment: "rgba(255, 255, 255, 0.28)",
  keyword: "#c792ea",     // purple — import, from, const, await
  string: "#c3e88d",      // green — strings
  func: "#82aaff",        // blue — function names
  property: "#f78c6c",    // orange — property keys
  variable: "#eeffff",    // off-white — variable names
  punctuation: "rgba(255, 255, 255, 0.5)", // dimmed — brackets, colons
  plain: "rgba(255, 255, 255, 0.75)",      // regular text
};

/* ── Token types for syntax highlighting ── */
type TokenType = "keyword" | "string" | "func" | "property" | "variable" | "punctuation" | "comment" | "plain";

interface Token {
  text: string;
  type: TokenType;
}

const tokenColor: Record<TokenType, string> = {
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
const CODE_LINES: Token[][] = [
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

/* ── Single code line ── */
function CodeLine({ tokens, lineNum, delay, isInView, hasCursor }: {
  tokens: Token[];
  lineNum: number;
  delay: number;
  isInView: boolean;
  hasCursor?: boolean;
}) {
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

      {/* Blinking cursor */}
      {hasCursor && (
        <motion.span
          animate={{ opacity: [1, 1, 0, 0] }}
          transition={{
            duration: 1.0,
            repeat: Infinity,
            ease: "steps(1)",
            times: [0, 0.5, 0.5, 1],
          }}
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

export function AppBridgeCodeDemo({ inSplit = false }: AppBridgeCodeDemoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

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
            color: "rgba(255, 255, 255, 0.35)",
            letterSpacing: "0.01em",
            pointerEvents: "none",
          }}
        >
          app.config.ts
        </div>
      </div>

      {/* ── Code content ── */}
      <div
        style={{
          padding: "16px 0 16px 12px",
          overflowX: "auto",
        }}
      >
        {CODE_LINES.map((tokens, i) => (
          <CodeLine
            key={i}
            tokens={tokens}
            lineNum={i + 1}
            delay={0.3 + i * 0.04}
            isInView={isInView}
            hasCursor={i + 1 === CURSOR_LINE}
          />
        ))}
      </div>
    </motion.div>
  );
}
