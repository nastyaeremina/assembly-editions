"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ──────────────────────────────────────────────────────────
   INTERACTIVE APP LIBRARY DEMO
   Full-fidelity replica of the Assembly App Library.
   Users can drag-and-drop to reorder apps, create folders,
   and drag apps into folders. Client Preview updates live.
   ────────────────────────────────────────────────────────── */

/* ── Types ── */
interface AppItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  visibility: string;
}

interface FolderItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  visibility: string;
  isFolder: true;
  children: AppItem[];
}

type LibraryItem = AppItem | FolderItem;

function isFolder(item: LibraryItem): item is FolderItem {
  return "isFolder" in item && item.isFolder === true;
}

/* ── Icons (minimal SVG) ── */
const HomeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 6.5L8 2l5.5 4.5V13a1 1 0 01-1 1h-9a1 1 0 01-1-1V6.5z" />
    <path d="M6 14V9h4v5" />
  </svg>
);

const MessagesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h12v8H4l-2 2V3z" />
  </svg>
);

const FilesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 2H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V6L9 2z" />
    <path d="M9 2v4h4" />
  </svg>
);

const ContractsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1 0z" />
    <circle cx="8" cy="6" r="2" />
    <path d="M5 12c0-1.7 1.3-3 3-3s3 1.3 3 3" />
  </svg>
);

const FolderIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 4v8a1 1 0 001 1h10a1 1 0 001-1V6a1 1 0 00-1-1H8L6.5 3.5A1 1 0 005.8 3H3a1 1 0 00-1 1z" />
  </svg>
);

const DashboardIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="5" height="5" rx="1" />
    <rect x="9" y="2" width="5" height="5" rx="1" />
    <rect x="2" y="9" width="5" height="5" rx="1" />
    <rect x="9" y="9" width="5" height="5" rx="1" />
  </svg>
);

const CRMIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="5" r="3" />
    <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" />
  </svg>
);

const BellIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6a4 4 0 018 0c0 4 2 5 2 5H2s2-1 2-5" />
    <path d="M6.5 13a1.5 1.5 0 003 0" />
  </svg>
);

const AutomationsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 2L5 9h6l-4 7" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="8" r="2.5" />
    <path d="M13.5 8a5.5 5.5 0 00-.2-1.2l1.5-1.2-1-1.7-1.8.5a5.4 5.4 0 00-1-.6L10.5 2h-2l-.5 1.8a5.4 5.4 0 00-1 .6l-1.8-.5-1 1.7 1.5 1.2a5.5 5.5 0 000 2.4l-1.5 1.2 1 1.7 1.8-.5c.3.2.7.4 1 .6L8.5 14h2l.5-1.8c.4-.2.7-.4 1-.6l1.8.5 1-1.7-1.5-1.2c.1-.4.2-.8.2-1.2z" />
  </svg>
);

const HelpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="8" r="6" />
    <path d="M6 6a2 2 0 013.5 1.5c0 1.5-2 1.5-2 3" />
    <circle cx="8" cy="12.5" r="0.5" fill="currentColor" />
  </svg>
);

const CustomizeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l2 2-8 8H4v-2l8-8z" />
  </svg>
);

const AppLibraryIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="4" height="4" rx="0.5" />
    <rect x="10" y="2" width="4" height="4" rx="0.5" />
    <rect x="2" y="10" width="4" height="4" rx="0.5" />
    <rect x="10" y="10" width="4" height="4" rx="0.5" />
  </svg>
);

const DotsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <circle cx="4" cy="8" r="1.2" />
    <circle cx="8" cy="8" r="1.2" />
    <circle cx="12" cy="8" r="1.2" />
  </svg>
);

const GripIcon = () => (
  <svg width="10" height="14" viewBox="0 0 10 14" fill="currentColor" opacity="0.25">
    <circle cx="3" cy="3" r="1.2" />
    <circle cx="7" cy="3" r="1.2" />
    <circle cx="3" cy="7" r="1.2" />
    <circle cx="7" cy="7" r="1.2" />
    <circle cx="3" cy="11" r="1.2" />
    <circle cx="7" cy="11" r="1.2" />
  </svg>
);

const PlusIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M6 1.5v9M1.5 6h9" />
  </svg>
);

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    style={{
      transition: "transform 200ms ease",
      transform: open ? "rotate(90deg)" : "rotate(0deg)",
    }}
  >
    <path d="M3.5 2l3 3-3 3" />
  </svg>
);

/* ── Default items ── */
const DEFAULT_ITEMS: LibraryItem[] = [
  { id: "home", name: "Home", icon: <HomeIcon />, visibility: "Visible to all clients" },
  { id: "messages", name: "Messages", icon: <MessagesIcon />, visibility: "Visible to all clients" },
  { id: "files", name: "Files", icon: <FilesIcon />, visibility: "Visible to all clients" },
  { id: "contracts", name: "Contracts", icon: <ContractsIcon />, visibility: "Visible to all clients" },
];

/* ── Colors ── */
const C = {
  bg: "#ffffff",
  bgAlt: "#f9fafb",
  border: "#e5e7eb",
  borderLight: "#f0f0f0",
  text: "#18181b",
  textSec: "#6b7280",
  textMuted: "#9ca3af",
  hover: "#f3f4f6",
  accent: "#18181b",
  // Sidebar (left nav)
  navBg: "#fafafa",
  navBorder: "#ebebeb",
  navText: "#374151",
  navTextMuted: "#9ca3af",
  navLabel: "#9ca3af",
  navActive: "#f3f4f6",
  // Dark sidebar (client preview)
  darkBg: "#1a1a1a",
  darkText: "#ffffff",
  darkTextMuted: "rgba(255,255,255,0.45)",
  darkBorder: "rgba(255,255,255,0.08)",
  darkHover: "rgba(255,255,255,0.06)",
  // Drag
  dragBg: "#eff6ff",
  dragBorder: "#60a5fa",
};

/* ── Helper: flatten for preview ── */
function flattenForPreview(items: LibraryItem[]): { id: string; name: string; icon: React.ReactNode; isFolder?: boolean }[] {
  const result: { id: string; name: string; icon: React.ReactNode; isFolder?: boolean }[] = [];
  for (const item of items) {
    if (isFolder(item)) {
      result.push({ id: item.id, name: item.name, icon: <FolderIcon />, isFolder: true });
      for (const child of item.children) {
        result.push({ id: child.id, name: child.name, icon: child.icon });
      }
    } else {
      result.push({ id: item.id, name: item.name, icon: item.icon });
    }
  }
  return result;
}

/* ── Nav sidebar item ── */
function NavItem({ icon, label, badge, active }: { icon: React.ReactNode; label: string; badge?: number; active?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "5px 12px",
        borderRadius: "6px",
        fontSize: "12.5px",
        fontWeight: active ? 500 : 400,
        color: active ? C.text : C.navText,
        backgroundColor: active ? C.navActive : "transparent",
        cursor: "default",
        fontFamily: "var(--font-sans)",
      }}
    >
      <span style={{ display: "flex", alignItems: "center", color: C.navTextMuted, flexShrink: 0 }}>{icon}</span>
      <span style={{ flex: 1 }}>{label}</span>
      {badge !== undefined && (
        <span
          style={{
            fontSize: "10px",
            fontWeight: 500,
            color: C.textMuted,
            backgroundColor: C.border,
            borderRadius: "10px",
            padding: "1px 6px",
            minWidth: "18px",
            textAlign: "center",
          }}
        >
          {badge}
        </span>
      )}
    </div>
  );
}

/* ── App Row (draggable) ── */
function AppRow({
  item,
  onDragStart,
  onDragEnd,
  dragOverId,
  onDragOver,
  isInFolder,
}: {
  item: AppItem;
  onDragStart: (id: string) => void;
  onDragEnd: () => void;
  dragOverId: string | null;
  onDragOver: (id: string) => void;
  isInFolder?: boolean;
}) {
  const isDraggedOver = dragOverId === item.id;

  return (
    <motion.div
      layout
      layoutId={item.id}
      draggable
      onDragStart={(e) => {
        const ev = e as unknown as React.DragEvent;
        ev.dataTransfer?.setData("text/plain", item.id);
        onDragStart(item.id);
      }}
      onDragOver={(e) => {
        const ev = e as unknown as React.DragEvent;
        ev.preventDefault?.();
        onDragOver(item.id);
      }}
      onDragEnd={onDragEnd}
      style={{
        display: "flex",
        alignItems: "center",
        padding: isInFolder ? "7px 12px 7px 36px" : "7px 12px",
        borderRadius: "6px",
        cursor: "grab",
        backgroundColor: isDraggedOver ? C.dragBg : "transparent",
        border: isDraggedOver ? `1px dashed ${C.dragBorder}` : "1px solid transparent",
        transition: "background-color 150ms, border-color 150ms",
        userSelect: "none",
      }}
      whileHover={{ backgroundColor: C.hover }}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6, transition: { duration: 0.15 } }}
      transition={{ duration: 0.2 }}
    >
      <span style={{ marginRight: "8px", color: C.textMuted, display: "flex", alignItems: "center" }}>
        <GripIcon />
      </span>
      <span style={{ display: "flex", alignItems: "center", marginRight: "10px", color: C.textSec }}>
        {item.icon}
      </span>
      <span style={{ flex: 1, fontSize: "13px", fontWeight: 500, color: C.text, fontFamily: "var(--font-sans)" }}>
        {item.name}
      </span>
      <span style={{ fontSize: "11px", color: C.textMuted, marginRight: "10px", fontFamily: "var(--font-sans)", whiteSpace: "nowrap" }}>
        {item.visibility}
      </span>
      <span style={{ color: C.textMuted, cursor: "pointer", display: "flex", alignItems: "center" }}>
        <DotsIcon />
      </span>
    </motion.div>
  );
}

/* ── Folder Row ── */
function FolderRow({
  folder,
  onDragStart,
  onDragEnd,
  dragOverId,
  onDragOver,
  onDropIntoFolder,
}: {
  folder: FolderItem;
  onDragStart: (id: string) => void;
  onDragEnd: () => void;
  dragOverId: string | null;
  onDragOver: (id: string) => void;
  onDropIntoFolder: (folderId: string, itemId: string) => void;
}) {
  const [open, setOpen] = useState(true);
  const isDraggedOver = dragOverId === folder.id;

  return (
    <motion.div
      layout
      layoutId={folder.id}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6, transition: { duration: 0.15 } }}
    >
      <div
        draggable
        onDragStart={(e) => {
          e.dataTransfer.setData("text/plain", folder.id);
          onDragStart(folder.id);
        }}
        onDragOver={(e) => {
          e.preventDefault();
          onDragOver(folder.id);
        }}
        onDrop={(e) => {
          e.preventDefault();
          const itemId = e.dataTransfer.getData("text/plain");
          if (itemId && itemId !== folder.id) {
            onDropIntoFolder(folder.id, itemId);
          }
        }}
        onDragEnd={onDragEnd}
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "7px 12px",
          borderRadius: "6px",
          cursor: "grab",
          backgroundColor: isDraggedOver ? C.dragBg : "transparent",
          border: isDraggedOver ? `1px dashed ${C.dragBorder}` : "1px solid transparent",
          transition: "background-color 150ms, border-color 150ms",
          userSelect: "none",
        }}
      >
        <span style={{ marginRight: "8px", color: C.textMuted, display: "flex", alignItems: "center" }}>
          <GripIcon />
        </span>
        <span style={{ display: "flex", alignItems: "center", marginRight: "4px", color: C.textSec }}>
          <ChevronIcon open={open} />
        </span>
        <span style={{ display: "flex", alignItems: "center", marginRight: "10px", color: C.textSec }}>
          <FolderIcon />
        </span>
        <span style={{ flex: 1, fontSize: "13px", fontWeight: 500, color: C.text, fontFamily: "var(--font-sans)" }}>
          {folder.name}
        </span>
        <span style={{ fontSize: "11px", color: C.textMuted, marginRight: "10px", fontFamily: "var(--font-sans)", whiteSpace: "nowrap" }}>
          {folder.visibility}
        </span>
        <span style={{ color: C.textMuted, cursor: "pointer", display: "flex", alignItems: "center" }}>
          <DotsIcon />
        </span>
      </div>

      <AnimatePresence>
        {open &&
          folder.children.map((child) => (
            <AppRow
              key={child.id}
              item={child}
              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
              dragOverId={dragOverId}
              onDragOver={onDragOver}
              isInFolder
            />
          ))}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Client Preview (right side — dark sidebar + content) ── */
function ClientPreview({ items, inSplit = false }: { items: LibraryItem[]; inSplit?: boolean }) {
  const previewItems = flattenForPreview(items);

  return (
    <div style={{ display: "flex", height: "100%", borderRadius: "8px", overflow: "hidden", border: `1px solid ${C.border}` }}>
      {/* Dark sidebar */}
      <div
        style={{
          width: inSplit ? "100%" : "180px",
          flexShrink: 0,
          backgroundColor: C.darkBg,
          padding: "14px 0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Company header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "0 12px 12px",
            borderBottom: `1px solid ${C.darkBorder}`,
            marginBottom: "6px",
          }}
        >
          <div
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "5px",
              backgroundColor: "rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "10px",
              fontWeight: 600,
              color: C.darkText,
              fontFamily: "var(--font-sans)",
            }}
          >
            B
          </div>
          <span style={{ fontSize: "12px", fontWeight: 600, color: C.darkText, fontFamily: "var(--font-sans)" }}>
            BrandMages
          </span>
        </div>

        {/* Nav items */}
        <div style={{ flex: 1, padding: "2px 6px" }}>
          <AnimatePresence mode="popLayout">
            {previewItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                layoutId={`preview-${item.id}`}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 6 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "5px 8px",
                  borderRadius: "5px",
                  marginBottom: "1px",
                  cursor: "default",
                }}
              >
                <span style={{ color: C.darkTextMuted, display: "flex", alignItems: "center", fontSize: "13px" }}>
                  {item.icon}
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: item.isFolder ? 500 : 400,
                    color: C.darkText,
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  {item.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Content area — "Good morning" (hidden in split to save space) */}
      {!inSplit && (
        <div style={{ flex: 1, backgroundColor: C.bg, padding: "24px 20px" }}>
          <h5
            style={{
              margin: "0 0 16px",
              fontSize: "15px",
              fontWeight: 600,
              color: C.text,
              fontFamily: "var(--font-sans)",
            }}
          >
            Good morning
          </h5>
          {/* Placeholder content lines */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ height: "8px", width: "85%", borderRadius: "4px", backgroundColor: "#f0f0f0" }} />
            <div style={{ height: "8px", width: "70%", borderRadius: "4px", backgroundColor: "#f0f0f0" }} />
            <div style={{ height: "8px", width: "60%", borderRadius: "4px", backgroundColor: "#f0f0f0" }} />
            <div style={{ height: "8px", width: "78%", borderRadius: "4px", backgroundColor: "#f0f0f0" }} />
            <div style={{ height: "8px", width: "45%", borderRadius: "4px", backgroundColor: "#f0f0f0" }} />
          </div>
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ════════════════════════════════════════════════════════════ */
export function InteractiveAppLibrary({ inSplit = false }: { inSplit?: boolean }) {
  const [items, setItems] = useState<LibraryItem[]>(DEFAULT_ITEMS);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null);
  const [isAddingFolder, setIsAddingFolder] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isAddingFolder && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isAddingFolder]);

  /* ── Drag handlers ── */
  const handleDragStart = useCallback((id: string) => setDraggingId(id), []);
  const handleDragEnd = useCallback(() => { setDraggingId(null); setDragOverId(null); }, []);
  const handleDragOver = useCallback((targetId: string) => {
    setDragOverId((prev) => (targetId !== draggingId ? targetId : prev));
  }, [draggingId]);

  /* Reorder on drop */
  const handleDrop = useCallback((e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    const sourceId = e.dataTransfer.getData("text/plain");
    if (!sourceId || sourceId === targetId) return;

    setItems((prev) => {
      const newItems = [...prev];
      let srcItem: LibraryItem | null = null;
      let srcIndex = newItems.findIndex((i) => i.id === sourceId);
      let srcFolderIdx = -1;
      let srcChildIdx = -1;

      if (srcIndex >= 0) {
        srcItem = newItems[srcIndex];
      } else {
        for (let fi = 0; fi < newItems.length; fi++) {
          const f = newItems[fi];
          if (isFolder(f)) {
            const ci = f.children.findIndex((c) => c.id === sourceId);
            if (ci >= 0) { srcItem = f.children[ci]; srcFolderIdx = fi; srcChildIdx = ci; break; }
          }
        }
      }
      if (!srcItem) return prev;

      if (srcIndex >= 0) newItems.splice(srcIndex, 1);
      else if (srcFolderIdx >= 0) {
        const f = newItems[srcFolderIdx] as FolderItem;
        f.children = [...f.children]; f.children.splice(srcChildIdx, 1);
        if (f.children.length === 0) newItems.splice(srcFolderIdx, 1);
      }

      const tgtIdx = newItems.findIndex((i) => i.id === targetId);
      if (tgtIdx >= 0) newItems.splice(tgtIdx, 0, srcItem); else newItems.push(srcItem);
      return newItems;
    });
    setDraggingId(null); setDragOverId(null);
  }, []);

  /* Drop into folder */
  const handleDropIntoFolder = useCallback((folderId: string, itemId: string) => {
    setItems((prev) => {
      const n = [...prev];
      let item: AppItem | null = null;
      let idx = -1; let fi = -1; let ci = -1;

      for (let i = 0; i < n.length; i++) {
        if (n[i].id === itemId && !isFolder(n[i])) { item = n[i] as AppItem; idx = i; break; }
        if (isFolder(n[i])) {
          const f = n[i] as FolderItem;
          const c = f.children.findIndex((x) => x.id === itemId);
          if (c >= 0) { item = f.children[c]; fi = i; ci = c; break; }
        }
      }
      if (!item) return prev;

      if (idx >= 0) n.splice(idx, 1);
      else if (fi >= 0) { const f = n[fi] as FolderItem; f.children = [...f.children]; f.children.splice(ci, 1); if (f.children.length === 0) n.splice(fi, 1); }

      const fIdx = n.findIndex((i) => i.id === folderId);
      if (fIdx >= 0 && isFolder(n[fIdx])) { (n[fIdx] as FolderItem).children = [...(n[fIdx] as FolderItem).children, item]; }
      return [...n];
    });
    setDraggingId(null); setDragOverId(null);
  }, []);

  /* Folder creation */
  const handleAddFolder = useCallback(() => { setIsAddingFolder(true); setNewFolderName(""); }, []);
  const handleSaveFolder = useCallback(() => {
    const name = newFolderName.trim();
    if (!name) return;
    setItems((prev) => [...prev, { id: `folder-${Date.now()}`, name, icon: <FolderIcon />, visibility: "Visible to all clients", isFolder: true, children: [] } as FolderItem]);
    setIsAddingFolder(false); setNewFolderName("");
  }, [newFolderName]);
  const handleDiscardFolder = useCallback(() => { setIsAddingFolder(false); setNewFolderName(""); }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.1)",
        overflow: "hidden",
        backgroundColor: C.bg,
      }}
    >
      {/* Browser chrome */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          borderBottom: "1px solid #3f3f46",
          backgroundColor: "#27272a",
          padding: "10px 16px",
        }}
      >
        <div style={{ display: "flex", gap: "6px" }}>
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#3f3f46" }} />
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#3f3f46" }} />
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#3f3f46" }} />
        </div>
        <div style={{ marginLeft: "16px", flex: 1 }}>
          <div
            style={{
              maxWidth: "280px",
              margin: "0 auto",
              borderRadius: "6px",
              backgroundColor: "#18181b",
              padding: "4px 12px",
              fontSize: "11px",
              color: "#71717a",
              border: "1px solid #3f3f46",
              fontFamily: "var(--font-mono, monospace)",
            }}
          >
            dashboard.assembly.com
          </div>
        </div>
      </div>

      {/* Main layout — 3-column full or 2-column compact */}
      <div style={{ display: "flex", minHeight: inSplit ? "360px" : "420px" }}>
        {/* ──── Left: Navigation sidebar (hidden in split) ──── */}
        {!inSplit && (
          <div
            style={{
              width: "180px",
              flexShrink: 0,
              backgroundColor: C.navBg,
              borderRight: `1px solid ${C.navBorder}`,
              padding: "12px 0",
              display: "flex",
              flexDirection: "column",
              fontSize: "12.5px",
            }}
          >
            {/* Company header */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "0 12px 12px" }}>
              <div
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "6px",
                  backgroundColor: C.accent,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#fff",
                  fontFamily: "var(--font-sans)",
                }}
              >
                B
              </div>
              <span style={{ fontSize: "13px", fontWeight: 600, color: C.text, fontFamily: "var(--font-sans)" }}>
                BrandMages
              </span>
            </div>

            {/* Main nav */}
            <div style={{ padding: "0 6px", display: "flex", flexDirection: "column", gap: "1px" }}>
              <NavItem icon={<DashboardIcon />} label="Dashboard" />
              <NavItem icon={<CRMIcon />} label="CRM" />
              <NavItem icon={<BellIcon />} label="Notifications" badge={2} />
              <NavItem icon={<AutomationsIcon />} label="Automations" />
            </div>

            {/* APPS label */}
            <div style={{ padding: "14px 16px 4px", fontSize: "10px", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" as const, color: C.navLabel }}>
              Apps
            </div>
            <div style={{ padding: "0 6px", display: "flex", flexDirection: "column", gap: "1px" }}>
              <NavItem icon={<HomeIcon />} label="Home" />
              <NavItem icon={<MessagesIcon />} label="Messages" badge={3} />
              <NavItem icon={<FilesIcon />} label="Files" />
              <NavItem icon={<ContractsIcon />} label="Contracts" />
            </div>

            {/* PREFERENCES label */}
            <div style={{ padding: "14px 16px 4px", fontSize: "10px", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" as const, color: C.navLabel }}>
              Preferences
            </div>
            <div style={{ padding: "0 6px", display: "flex", flexDirection: "column", gap: "1px" }}>
              <NavItem icon={<AppLibraryIcon />} label="App Library" active />
              <NavItem icon={<CustomizeIcon />} label="Customization" />
            </div>

            {/* Spacer */}
            <div style={{ flex: 1 }} />

            {/* Bottom nav */}
            <div style={{ padding: "0 6px", display: "flex", flexDirection: "column", gap: "1px", borderTop: `1px solid ${C.navBorder}`, paddingTop: "8px", marginTop: "8px" }}>
              <NavItem icon={<HelpIcon />} label="Help center" />
              <NavItem icon={<SettingsIcon />} label="Settings" />
              <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "5px 12px", fontSize: "12.5px", color: C.navText, fontFamily: "var(--font-sans)" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#22c55e", flexShrink: 0 }} />
                <span>Portal</span>
              </div>
            </div>
          </div>
        )}

        {/* ──── Center: App Library main content ──── */}
        <div style={{ flex: 1, backgroundColor: C.bg, display: "flex", flexDirection: "column", minWidth: 0 }}>
          {/* App Library header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: inSplit ? "12px 16px" : "16px 20px",
              borderBottom: `1px solid ${C.border}`,
            }}
          >
            <h4 style={{ margin: 0, fontSize: inSplit ? "13px" : "14px", fontWeight: 600, color: C.text, fontFamily: "var(--font-sans)" }}>
              App Library
            </h4>
            <div style={{ display: "flex", gap: "6px" }}>
              <button
                onClick={handleAddFolder}
                style={{
                  display: "flex", alignItems: "center", gap: "4px", padding: "4px 10px",
                  borderRadius: "6px", border: `1px solid ${C.border}`, backgroundColor: C.bg,
                  color: C.text, fontSize: "11.5px", fontWeight: 500, cursor: "pointer", fontFamily: "var(--font-sans)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.hover)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.bg)}
              >
                <PlusIcon /> Add folder
              </button>
              <button
                style={{
                  display: "flex", alignItems: "center", gap: "4px", padding: "4px 10px",
                  borderRadius: "6px", border: `1px solid ${C.border}`, backgroundColor: C.accent,
                  color: "#fff", fontSize: "11.5px", fontWeight: 500, cursor: "pointer", fontFamily: "var(--font-sans)",
                }}
              >
                <PlusIcon /> Add app
              </button>
            </div>
          </div>

          {/* Apps section header */}
          <div style={{ padding: inSplit ? "12px 16px 6px" : "16px 20px 8px" }}>
            <h5 style={{ margin: 0, fontSize: "13px", fontWeight: 600, color: C.text, fontFamily: "var(--font-sans)" }}>
              Apps
            </h5>
          </div>

          {/* Items list */}
          <div
            style={{ padding: "0 8px", display: "flex", flexDirection: "column", gap: "1px" }}
            onDragOver={(e) => e.preventDefault()}
          >
            <AnimatePresence mode="popLayout">
              {items.map((item) =>
                isFolder(item) ? (
                  <FolderRow
                    key={item.id}
                    folder={item}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    dragOverId={dragOverId}
                    onDragOver={handleDragOver}
                    onDropIntoFolder={handleDropIntoFolder}
                  />
                ) : (
                  <div
                    key={item.id}
                    onDragOver={(e) => { e.preventDefault(); handleDragOver(item.id); }}
                    onDrop={(e) => handleDrop(e, item.id)}
                  >
                    <AppRow
                      item={item}
                      onDragStart={handleDragStart}
                      onDragEnd={handleDragEnd}
                      dragOverId={dragOverId}
                      onDragOver={handleDragOver}
                    />
                  </div>
                )
              )}
            </AnimatePresence>

            {/* New folder input */}
            <AnimatePresence>
              {isAddingFolder && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{ display: "flex", alignItems: "center", padding: "6px 12px", gap: "8px" }}
                >
                  <span style={{ display: "flex", alignItems: "center", color: C.textSec }}>
                    <FolderIcon />
                  </span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={newFolderName}
                    onChange={(e) => setNewFolderName(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") handleSaveFolder(); if (e.key === "Escape") handleDiscardFolder(); }}
                    placeholder="Folder name"
                    style={{
                      flex: 1, padding: "5px 8px", borderRadius: "6px", border: `1px solid ${C.border}`,
                      fontSize: "13px", fontFamily: "var(--font-sans)", outline: "none", color: C.text,
                    }}
                  />
                  <button
                    onClick={handleSaveFolder}
                    style={{
                      display: "flex", alignItems: "center", gap: "3px", padding: "4px 10px", borderRadius: "5px",
                      border: "none", backgroundColor: C.accent, color: "#fff", fontSize: "11px", fontWeight: 500,
                      cursor: "pointer", fontFamily: "var(--font-sans)",
                    }}
                  >
                    ✓ Save
                  </button>
                  <button
                    onClick={handleDiscardFolder}
                    style={{
                      display: "flex", alignItems: "center", gap: "3px", padding: "4px 10px", borderRadius: "5px",
                      border: `1px solid ${C.border}`, backgroundColor: C.bg, color: C.text, fontSize: "11px",
                      fontWeight: 500, cursor: "pointer", fontFamily: "var(--font-sans)",
                    }}
                  >
                    ✕ Discard
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ──── Right: Client Preview ──── */}
        <div
          style={{
            width: inSplit ? "260px" : "380px",
            flexShrink: 0,
            backgroundColor: C.bgAlt,
            borderLeft: `1px solid ${C.border}`,
            padding: inSplit ? "12px" : "16px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h4 style={{ margin: "0 0 12px", fontSize: "13px", fontWeight: 600, color: C.text, fontFamily: "var(--font-sans)" }}>
            Client Preview
          </h4>
          <div style={{ flex: 1 }}>
            <ClientPreview items={items} inSplit={inSplit} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
