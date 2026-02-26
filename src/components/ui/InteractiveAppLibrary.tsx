"use client";

import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
  closestCenter,
  useDroppable,
  defaultDropAnimationSideEffects,
  type DragStartEvent,
  type DragOverEvent,
  type DragMoveEvent,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS, getEventCoordinates } from "@dnd-kit/utilities";

/* ══════════════════════════════════════════════════════════════
   INTERACTIVE APP LIBRARY — PRODUCTION-FAITHFUL DEMO
   Uses same flat-array + path data model and @dnd-kit architecture
   as core. Drag overlay, drop indicators, folder connectors, and
   overflow menus all mirror production behavior.
   ══════════════════════════════════════════════════════════════ */

/* ── Types (matches core ModuleSettingsItem) ── */
interface ModuleSettingsItem {
  id: string;
  label: string;
  icon: string;
  type: "folder" | "app";
  disabled: boolean;
  path?: string;
  iuSidebarHidden?: boolean;
}

type DragItem = { item: ModuleSettingsItem; index: number };
type OverTarget =
  | { type: "item"; item: ModuleSettingsItem; index: number }
  | { type: "emptyFolder"; folderId: string; folderIndex: number };

/* ── Constants ── */
const FOLDER_CONTENT_INDENTATION = 52;
const EMPTY_FOLDER_PREFIX = "empty-folder-";
const isEmptyFolderDropZoneId = (id: string | number) => String(id).startsWith(EMPTY_FOLDER_PREFIX);
const getFolderIdFromDropZoneId = (id: string) => id.replace(EMPTY_FOLDER_PREFIX, "");

/* ── Colors ── */
const C = {
  bg: "#ffffff",
  bgAlt: "#f9fafb",
  border: "#e5e7eb",
  text: "#18181b",
  textSec: "#6b7280",
  textMuted: "#9ca3af",
  textDisabled: "#d1d5db",
  hover: "#f5f5f5",
  accent: "#18181b",
  blue: "#0C41BB",
  navBg: "#fafafa",
  navBorder: "#ebebeb",
  navText: "#374151",
  navTextMuted: "#9ca3af",
  navLabel: "#9ca3af",
  navActive: "#f3f4f6",
  darkBg: "#1a1a1a",
  darkText: "#ffffff",
  darkTextMuted: "rgba(255,255,255,0.45)",
  darkBorder: "rgba(255,255,255,0.08)",
  red: "#ef4444",
  previewBg: "#e0f2f1",
};

/* ══════════════════════════════════════════
   ICONS
   ══════════════════════════════════════════ */
const HomeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.38082 0.240234C9.73629 -0.0800781 10.2754 -0.0800781 10.6308 0.240234L19.6933 8.36523C20.08 8.70898 20.1113 9.30273 19.7636 9.68945C19.416 10.0762 18.8261 10.1074 18.4394 9.75977L18.1269 9.47852V17.498C18.1269 18.877 17.0058 19.998 15.6269 19.998H4.37691C2.99801 19.998 1.87691 18.877 1.87691 17.498V9.47852L1.56441 9.75977C1.1777 10.1035 0.587852 10.0723 0.240196 9.68945C-0.107461 9.30664 -0.0723045 8.71289 0.310508 8.36523L9.38082 0.240234ZM10.0058 2.19727L3.75582 7.80273V17.502C3.75582 17.8457 4.03707 18.127 4.38082 18.127H6.25582V14.0645C6.25582 12.5098 7.51363 11.252 9.06832 11.252H10.9433C12.498 11.252 13.7558 12.5098 13.7558 14.0645V18.127H15.6308C15.9746 18.127 16.2558 17.8457 16.2558 17.502V7.80273L10.0058 2.20117V2.19727ZM8.13082 18.127H11.8808V14.0645C11.8808 13.5449 11.4629 13.127 10.9433 13.127H9.06832C8.54879 13.127 8.13082 13.5449 8.13082 14.0645V18.127Z" fill="currentColor"/></svg>
);
const MessagesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.95703 18.7852L6.48047 19.8281C6.19531 20.0312 5.82031 20.0547 5.50781 19.8945C5.19531 19.7344 5 19.4141 5 19.0625V16.25H3.75C1.67969 16.25 0 14.5703 0 12.5V3.75C0 1.67969 1.67969 0 3.75 0H16.25C18.3203 0 20 1.67969 20 3.75V12.5C20 14.5703 18.3203 16.25 16.25 16.25H11.5469L7.95703 18.7852ZM10.4688 14.7187C10.7852 14.4961 11.1641 14.375 11.5508 14.375H16.25C17.2852 14.375 18.125 13.5352 18.125 12.5V3.75C18.125 2.71484 17.2852 1.875 16.25 1.875H3.75C2.71484 1.875 1.875 2.71484 1.875 3.75V12.5C1.875 13.5352 2.71484 14.375 3.75 14.375H5.9375C6.34375 14.375 6.69141 14.6328 6.82031 14.9961C6.85547 15.0937 6.875 15.1992 6.875 15.3125V17.2539C8.15234 16.3516 9.34766 15.5078 10.4648 14.7187H10.4688Z" fill="currentColor"/></svg>
);
const BillingIcon = () => (
  <svg width="16" height="16" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6667 2.33325C10.85 2.33325 11 2.48325 11 2.66659V3.33325H1V2.66659C1 2.48325 1.15 2.33325 1.33333 2.33325H10.6667ZM11 4.49995V9.33325C11 9.51659 10.85 9.66659 10.6667 9.66659H1.33333C1.15 9.66659 1 9.51659 1 9.33325V4.49995L6 4.49995L11 4.49995ZM1.33333 1.33325C0.597917 1.33325 0 1.93117 0 2.66659V9.33325C0 10.0687 0.597917 10.6666 1.33333 10.6666H10.6667C11.4021 10.6666 12 10.0687 12 9.33325V2.66659C12 1.93117 11.4021 1.33325 10.6667 1.33325H1.33333ZM2.5 7.66659C2.22292 7.66659 2 7.8895 2 8.16659C2 8.44367 2.22292 8.66659 2.5 8.66659H3.5C3.77708 8.66659 4 8.44367 4 8.16659C4 7.8895 3.77708 7.66659 3.5 7.66659H2.5Z" fill="currentColor"/></svg>
);
const FilesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.875 1.875H5.5C5.15625 1.875 4.875 2.15625 4.875 2.5V17.5C4.875 17.8438 5.15625 18.125 5.5 18.125H15.5C15.8438 18.125 16.125 17.8438 16.125 17.5V8.125H12.6875C11.1328 8.125 9.875 6.86719 9.875 5.3125V1.875ZM15.3477 6.25L11.75 2.65234V5.3125C11.75 5.83203 12.168 6.25 12.6875 6.25H15.3477ZM3 2.5C3 1.12109 4.12109 0 5.5 0H10.7148C11.3789 0 12.0156 0.261719 12.4844 0.730469L17.2695 5.51953C17.7383 5.98828 18 6.625 18 7.28906V17.5C18 18.8789 16.8789 20 15.5 20H5.5C4.12109 20 3 18.8789 3 17.5V2.5Z" fill="currentColor"/></svg>
);
const TasksIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.00977 2.81626C6.35742 2.42954 6.32617 1.83969 5.93945 1.49204C5.55273 1.14438 4.96289 1.17563 4.61523 1.56235L2.4668 3.94907L1.60352 3.08579C1.23633 2.72251 0.642578 2.72251 0.275391 3.08579C-0.0917969 3.44907 -0.0917969 4.04673 0.275391 4.41001L1.83789 5.97251C2.02148 6.1561 2.26758 6.25376 2.52539 6.24594C2.7832 6.23813 3.02539 6.12876 3.19727 5.93735L6.00977 2.81235V2.81626ZM6.00977 9.06626C6.35742 8.67954 6.32617 8.08969 5.93945 7.74204C5.55273 7.39438 4.96289 7.42563 4.61523 7.81235L2.4668 10.1991L1.60352 9.33579C1.23633 8.9686 0.642578 8.9686 0.279297 9.33579C-0.0839844 9.70298 -0.0878906 10.2967 0.279297 10.66L1.8418 12.2225C2.02539 12.4061 2.27148 12.5038 2.5293 12.4959C2.78711 12.4881 3.0293 12.3788 3.20117 12.1874L6.01367 9.06235L6.00977 9.06626ZM8.43945 4.68735H19.0645C19.584 4.68735 20.002 4.26938 20.002 3.74985C20.002 3.23032 19.584 2.81235 19.0645 2.81235H8.43945C7.91992 2.81235 7.50195 3.23032 7.50195 3.74985C7.50195 4.26938 7.91992 4.68735 8.43945 4.68735ZM7.50195 9.99985C7.50195 10.5194 7.91992 10.9374 8.43945 10.9374H19.0645C19.584 10.9374 20.002 10.5194 20.002 9.99985C20.002 9.48032 19.584 9.06235 19.0645 9.06235H8.43945C7.91992 9.06235 7.50195 9.48032 7.50195 9.99985ZM6.25195 16.2499C6.25195 16.7694 6.66992 17.1874 7.18945 17.1874H19.0645C19.584 17.1874 20.002 16.7694 20.002 16.2499C20.002 15.7303 19.584 15.3124 19.0645 15.3124H7.18945C6.66992 15.3124 6.25195 15.7303 6.25195 16.2499ZM3.75195 16.2499C3.75195 15.9183 3.62026 15.6004 3.38584 15.366C3.15142 15.1315 2.83347 14.9999 2.50195 14.9999C2.17043 14.9999 1.85249 15.1315 1.61807 15.366C1.38365 15.6004 1.25195 15.9183 1.25195 16.2499C1.25195 16.5814 1.38365 16.8993 1.61807 17.1337C1.85249 17.3682 2.17043 17.4999 2.50195 17.4999C2.83347 17.4999 3.15142 17.3682 3.38584 17.1337C3.62026 16.8993 3.75195 16.5814 3.75195 16.2499Z" fill="currentColor"/></svg>
);
const ReportIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.875 1.875H5.5C5.15625 1.875 4.875 2.15625 4.875 2.5V17.5C4.875 17.8438 5.15625 18.125 5.5 18.125H15.5C15.8438 18.125 16.125 17.8438 16.125 17.5V8.125H12.6875C11.1328 8.125 9.875 6.86719 9.875 5.3125V1.875ZM15.3477 6.25L11.75 2.65234V5.3125C11.75 5.83203 12.168 6.25 12.6875 6.25H15.3477ZM3 2.5C3 1.12109 4.12109 0 5.5 0H10.7148C11.3789 0 12.0156 0.261719 12.4844 0.730469L17.2695 5.51953C17.7383 5.98828 18 6.625 18 7.28906V17.5C18 18.8789 16.8789 20 15.5 20H5.5C4.12109 20 3 18.8789 3 17.5V2.5Z" fill="currentColor"/></svg>
);
const FormsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5625 3.75H8.4375C7.91797 3.75 7.5 3.33203 7.5 2.8125C7.5 2.29297 7.91797 1.875 8.4375 1.875H11.5625C12.082 1.875 12.5 2.29297 12.5 2.8125C12.5 3.33203 12.082 3.75 11.5625 3.75ZM11.5625 5.625C13.0117 5.625 14.2031 4.53125 14.3594 3.125H15C15.3438 3.125 15.625 3.40625 15.625 3.75V17.5C15.625 17.8438 15.3438 18.125 15 18.125H5C4.65625 18.125 4.375 17.8438 4.375 17.5V3.75C4.375 3.40625 4.65625 3.125 5 3.125H5.64063C5.79688 4.53125 6.98828 5.625 8.4375 5.625H11.5625ZM13.9023 1.25C13.3984 0.496094 12.5391 0 11.5625 0H8.4375C7.46094 0 6.60156 0.496094 6.09766 1.25H5C3.62109 1.25 2.5 2.37109 2.5 3.75V17.5C2.5 18.8789 3.62109 20 5 20H15C16.3789 20 17.5 18.8789 17.5 17.5V3.75C17.5 2.37109 16.3789 1.25 15 1.25H13.9023Z" fill="currentColor"/></svg>
);
const HelpdeskIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.0625 4.45312L8.29687 4.13281C6.69922 3.46875 4.98437 3.125 3.25 3.125H1.875V16.875H3.25C5.23437 16.875 7.20313 17.2266 9.0625 17.9062V4.45312ZM10.9375 17.9062C12.7969 17.2266 14.7656 16.875 16.75 16.875H18.125V3.125H16.75C15.0156 3.125 13.3008 3.46875 11.7031 4.13281L10.9375 4.45312V17.9062ZM9.01953 2.40234L10 2.8125L10.9805 2.40234C12.8086 1.64062 14.7695 1.25 16.75 1.25H18.125C19.1602 1.25 20 2.08984 20 3.125V16.875C20 17.9102 19.1602 18.75 18.125 18.75H16.75C14.7695 18.75 12.8086 19.1406 10.9805 19.9023L10.4805 20.1094C10.1719 20.2383 9.82812 20.2383 9.51953 20.1094L9.01953 19.9023C7.19141 19.1406 5.23047 18.75 3.25 18.75H1.875C0.839844 18.75 0 17.9102 0 16.875V3.125C0 2.08984 0.839844 1.25 1.875 1.25H3.25C5.23047 1.25 7.19141 1.64062 9.01953 2.40234Z" fill="currentColor"/></svg>
);
const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.62528 0C6.1745 0 6.61635 0.434101 6.61635 0.973684V2.59649H13.2235V0.973684C13.2235 0.434101 13.6653 0 14.2146 0C14.7638 0 15.2056 0.434101 15.2056 0.973684V2.59649H16.5271C17.9848 2.59649 19.1699 3.76086 19.1699 5.19298V16.8772C19.1699 18.3093 17.9848 19.4737 16.5271 19.4737H3.31278C1.85508 19.4737 0.669922 18.3093 0.669922 16.8772V5.19298C0.669922 3.76086 1.85508 2.59649 3.31278 2.59649H4.63421V0.973684C4.63421 0.434101 5.07606 0 5.62528 0ZM5.62528 4.54386H3.31278C2.94939 4.54386 2.65206 4.83597 2.65206 5.19298V7.14035H17.1878V5.19298C17.1878 4.83597 16.8905 4.54386 16.5271 4.54386H5.62528ZM2.65206 9.08772V16.8772C2.65206 17.2342 2.94939 17.5263 3.31278 17.5263H16.5271C16.8905 17.5263 17.1878 17.2342 17.1878 16.8772V9.08772H2.65206Z" fill="currentColor"/></svg>
);
const ClickupIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.41797 14.887L5.19895 12.799C6.67495 14.689 8.24094 15.562 9.98693 15.562C11.7329 15.562 13.2449 14.698 14.6579 12.817L17.4749 14.86C15.4409 17.569 12.9119 19 9.98693 19C7.06194 19 4.51496 17.578 2.41797 14.887Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M9.95979 5.60798L5.00981 9.84695L2.72383 7.20997L9.96879 1L17.1597 7.20997L14.8648 9.83795L9.96879 5.60798H9.95979Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
);
const FolderIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.51 16.32H17.5C17.84 16.32 18.12 16.04 18.12 15.7V6.32996C18.12 5.98996 17.84 5.70996 17.5 5.70996H11.67C10.99 5.70996 10.34 5.48996 9.8 5.08996L8.3 3.96996C8.19 3.88996 8.06 3.84996 7.93 3.84996H2.51C2.17 3.84996 1.89 4.12996 1.89 4.46996V15.71C1.89 16.05 2.17 16.33 2.51 16.33V16.32ZM17.49 18.19H2.51C1.13 18.19 0 17.07 0 15.7V4.44996C0 3.07996 1.13 1.95996 2.51 1.95996H7.92C8.46 1.95996 8.99 2.13996 9.42 2.45996L10.92 3.57996C11.13 3.73996 11.4 3.82996 11.67 3.82996H17.5C18.88 3.82996 20 4.94996 20 6.32996V15.7C20 17.08 18.88 18.2 17.5 18.2L17.49 18.19Z" fill="currentColor"/></svg>
);
const DashboardIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="5" height="5" rx="1" /><rect x="9" y="2" width="5" height="5" rx="1" /><rect x="2" y="9" width="5" height="5" rx="1" /><rect x="9" y="9" width="5" height="5" rx="1" /></svg>
);
const CRMIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="5" r="3" /><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" /></svg>
);
const BellIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6a4 4 0 018 0c0 4 2 5 2 5H2s2-1 2-5" /><path d="M6.5 13a1.5 1.5 0 003 0" /></svg>
);
const AutomationsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 2L5 9h6l-4 7" /></svg>
);
const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="2.5" /><path d="M13.5 8a5.5 5.5 0 00-.2-1.2l1.5-1.2-1-1.7-1.8.5a5.4 5.4 0 00-1-.6L10.5 2h-2l-.5 1.8a5.4 5.4 0 00-1 .6l-1.8-.5-1 1.7 1.5 1.2a5.5 5.5 0 000 2.4l-1.5 1.2 1 1.7 1.8-.5c.3.2.7.4 1 .6L8.5 14h2l.5-1.8c.4-.2.7-.4 1-.6l1.8.5 1-1.7-1.5-1.2c.1-.4.2-.8.2-1.2z" /></svg>
);
const HelpIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="6" /><path d="M6 6a2 2 0 013.5 1.5c0 1.5-2 1.5-2 3" /><circle cx="8" cy="12.5" r="0.5" fill="currentColor" /></svg>
);
const CustomizeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2 2-8 8H4v-2l8-8z" /></svg>
);
const AppLibraryIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="4" height="4" rx="0.5" /><rect x="10" y="2" width="4" height="4" rx="0.5" /><rect x="2" y="10" width="4" height="4" rx="0.5" /><rect x="10" y="10" width="4" height="4" rx="0.5" /></svg>
);
const DotsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><circle cx="4" cy="8" r="1.2" /><circle cx="8" cy="8" r="1.2" /><circle cx="12" cy="8" r="1.2" /></svg>
);
const PlusIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M6 1.5v9M1.5 6h9" /></svg>
);
const EditIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M10 1.5l2.5 2.5L5 11.5H2.5V9L10 1.5z" /></svg>
);
const TrashIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4h10M5 4V2.5h4V4M4 4v7.5a1 1 0 001 1h4a1 1 0 001-1V4" /></svg>
);
const EyeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0015 3.88962C7.73783 3.88962 5.87693 4.91728 4.45001 6.24005C3.11336 7.48296 2.18985 8.95849 1.71769 10C2.18985 11.0416 3.11336 12.5171 4.45001 13.76C5.87693 15.0828 7.73783 16.1105 10.0015 16.1105C12.2651 16.1105 14.126 15.0828 15.5529 13.76C16.8896 12.5171 17.8131 11.0416 18.2852 10C17.8131 8.95849 16.8896 7.48296 15.5529 6.24005C14.126 4.91728 12.2651 3.88962 10.0015 3.88962ZM3.31473 5.02144C4.94996 3.50078 7.19623 2.22314 10.0015 2.22314C12.8067 2.22314 15.053 3.50078 16.6882 5.02144C18.313 6.53168 19.3997 8.33356 19.917 9.573C20.0316 9.84728 20.0316 10.1528 19.917 10.4271C19.3997 11.6665 18.313 13.4719 16.6882 14.9786C15.053 16.4958 12.8067 17.7769 10.0015 17.7769C7.19623 17.7769 4.94996 16.4993 3.31473 14.9786C1.68991 13.4684 0.60323 11.6665 0.0859277 10.4271C-0.0286426 10.1528 -0.0286426 9.84728 0.0859277 9.573C0.60323 8.33356 1.68991 6.52821 3.31473 5.02144ZM10.0015 12.7775C11.536 12.7775 12.7789 11.5346 12.7789 10C12.7789 8.97238 12.22 8.07317 11.3902 7.59406C11.3416 9.66674 9.66817 11.3402 7.59549 11.3888C8.0746 12.2185 8.9738 12.7775 10.0015 12.7775ZM7.23789 9.7084C7.32469 9.71882 7.41148 9.72229 7.50175 9.72229C8.7273 9.72229 9.72372 8.72588 9.72372 7.50032C9.72372 7.41005 9.71678 7.32326 9.70983 7.23646C8.41137 7.37186 7.37676 8.40647 7.24136 9.70493L7.23789 9.7084ZM8.82104 5.7158C9.196 5.61165 9.59179 5.55957 9.99799 5.55957C10.3035 5.55957 10.6056 5.59082 10.8937 5.64984C10.9041 5.65331 10.9111 5.65331 10.9215 5.65678C12.9317 6.08034 14.4419 7.86834 14.4419 10.0035C14.4419 12.4581 12.4526 14.4474 9.99799 14.4474C7.85935 14.4474 6.07483 12.9372 5.65127 10.927C5.58877 10.6284 5.55405 10.3194 5.55405 10.0035C5.55405 9.62161 5.60266 9.24665 5.69293 8.89252C5.69987 8.86822 5.70334 8.84739 5.71029 8.82656C6.12343 7.31979 7.3108 6.13242 8.81757 5.71927L8.82104 5.7158Z" fill="currentColor"/></svg>
);
const EyeHiddenIcon = () => (
  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.4225 0.244749C1.09616 -0.0815831 0.568478 -0.0815831 0.245617 0.244749C-0.0772436 0.571081 -0.0807152 1.09877 0.242145 1.4251L18.5723 19.7553C18.8986 20.0816 19.4263 20.0816 19.7492 19.7553C20.072 19.4289 20.0755 18.9012 19.7492 18.5784L16.4025 15.2317C16.4963 15.1484 16.59 15.0651 16.6803 14.9818C18.305 13.4716 19.3916 11.6698 19.9089 10.4305C20.0234 10.1562 20.0234 9.85072 19.9089 9.57646C19.3916 8.33709 18.305 6.53185 16.6803 5.02517C15.0451 3.50807 12.799 2.22704 9.99393 2.22704C8.02205 2.22704 6.32789 2.85888 4.92536 3.7615L1.4225 0.244749ZM6.14043 4.96615C7.25482 4.31002 8.54279 3.88648 9.9974 3.88648C12.2609 3.88648 14.1217 4.91408 15.5485 6.23676C16.8851 7.47613 17.8085 8.95504 18.2772 9.99653C17.8051 11.038 16.8816 12.5135 15.5485 13.7563C15.4409 13.8535 15.3333 13.9507 15.2222 14.0479L13.6704 12.4961C14.1564 11.7844 14.4411 10.9235 14.4411 9.99653C14.4411 7.54209 12.4518 5.55286 9.9974 5.55286C9.07047 5.55286 8.20951 5.83753 7.49783 6.32355L6.14043 4.96615ZM12.4588 11.2845L8.70943 7.53515C9.09478 7.3338 9.5322 7.21923 9.9974 7.21923C11.5319 7.21923 12.7747 8.46207 12.7747 9.99653C12.7747 10.4617 12.6601 10.8992 12.4588 11.2845ZM3.58879 7.12203L2.40844 5.94168C1.27669 7.21923 0.499045 8.57316 0.0859226 9.56952C-0.0286409 9.84378 -0.0286409 10.1493 0.0859226 10.4235C0.603194 11.6629 1.68981 13.4681 3.31453 14.9748C4.94966 16.4919 7.1958 17.773 10.0009 17.773C11.2958 17.773 12.4727 17.4987 13.5246 17.0578L12.2262 15.7594C11.5319 15.9816 10.7889 16.1066 9.9974 16.1066C7.7339 16.1066 5.87311 15.079 4.44628 13.7563C3.1097 12.5169 2.18625 11.038 1.71758 9.99653C2.07863 9.19459 2.71047 8.13574 3.59226 7.12203H3.58879Z" fill="currentColor"/></svg>
);
const CancelIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="7" cy="7" r="5.5" /><path d="M5 5l4 4M9 5l-4 4" /></svg>
);

/* ── Icon map ── */
const ICON_MAP: Record<string, React.FC> = {
  home: HomeIcon,
  messages: MessagesIcon,
  billing: BillingIcon,
  files: FilesIcon,
  tasks: TasksIcon,
  report: ReportIcon,
  forms: FormsIcon,
  helpdesk: HelpdeskIcon,
  calendar: CalendarIcon,
  clickup: ClickupIcon,
  folder: FolderIcon,
};
function AppIconEl({ name }: { name: string }) {
  const Icon = ICON_MAP[name] || FolderIcon;
  return <Icon />;
}

/* ══════════════════════════════════════════
   UTILITY FUNCTIONS (ported from core)
   ══════════════════════════════════════════ */
const getIsDragIndented = (activatorEvent: Event | null, deltaX: number, containerRef: React.RefObject<HTMLElement | null>): boolean => {
  const containerLeft = containerRef.current?.getBoundingClientRect().left ?? 0;
  const pe = activatorEvent as PointerEvent;
  if (!pe?.clientX) return false;
  return pe.clientX + deltaX - containerLeft >= FOLDER_CONTENT_INDENTATION + 100;
};
const getIsDraggingUp = (dy: number) => dy < 0;
const getFolderId = (s: ModuleSettingsItem): string | null => {
  if (s.type === "folder") return s.id;
  return s.path ?? null;
};
const isAtFolderBoundary = (arr: ModuleSettingsItem[], oi: number, up: boolean): boolean => {
  const o = arr[oi];
  if (!o) return false;
  if (up) { if (o.path) return false; const p = arr[oi - 1]; return p ? getFolderId(p) !== null : false; }
  const n = arr[oi + 1];
  if (o.type === "folder") return n?.path !== o.id;
  if (!o.path) return false;
  return !n || getFolderId(n) !== o.path;
};
const getFolderIdAtBoundary = (arr: ModuleSettingsItem[], oi: number, up: boolean): string | null => {
  const o = arr[oi];
  if (!o) return null;
  if (up) { const p = arr[oi - 1]; return p ? getFolderId(p) : null; }
  if (o.type === "folder") return o.id;
  return o.path ?? null;
};
const getDestinationFolderId = (arr: ModuleSettingsItem[], ai: number, oi: number, up: boolean, indent: boolean): string | null => {
  const a = arr[ai], o = arr[oi];
  if (!a || !o) return null;
  if (!up && o.type === "folder") return o.id;
  const boundary = isAtFolderBoundary(arr, oi, up);
  if (!boundary && o.path) return o.path;
  if (a.type === "folder") return null;
  if (boundary) return indent ? getFolderIdAtBoundary(arr, oi, up) : null;
  return null;
};
const isEmptyFolder = (arr: ModuleSettingsItem[], fi: number): boolean => {
  const f = arr[fi];
  if (!f || f.type !== "folder") return false;
  let i = fi + 1, c = 0;
  while (i < arr.length && arr[i]?.path === f.id) { if (!arr[i]?.disabled) c++; i++; }
  return c === 0;
};
const getDestFolderForEmpty = (arr: ModuleSettingsItem[], ai: number, fId: string, up: boolean, indent: boolean): string | null => {
  const a = arr[ai];
  if (!a || a.type === "folder") return null;
  if (up || indent) return fId;
  return null;
};
const calcEmptyTarget = (arr: ModuleSettingsItem[], ai: number, fId: string, up: boolean, indent: boolean) => {
  const fi = arr.findIndex(({ id }) => id === fId);
  if (fi === -1) return null;
  return { destFolder: getDestFolderForEmpty(arr, ai, fId, up, indent), targetIdx: ai > fi ? fi + 1 : fi };
};
const deleteFolderUtil = (arr: ModuleSettingsItem[], fi: number): ModuleSettingsItem[] => {
  const f = arr[fi];
  if (!f || f.type !== "folder") return arr;
  const u = [...arr]; u.splice(fi, 1);
  let i = fi;
  while (u[i] && u[i].path === f.id) { u[i] = { ...u[i], path: undefined }; i++; }
  return u;
};
const moveFolderUtil = (arr: ModuleSettingsItem[], fi: number, di: number): ModuleSettingsItem[] => {
  const f = arr[fi];
  if (!f) return arr;
  let last = -1;
  for (let i = arr.length - 1; i >= 0; i--) { if (arr[i].path === f.id) { last = i; break; } }
  if (last === -1) return arrayMove(arr, fi, di);
  const items = arr.slice(fi, last + 1);
  const u = [...arr]; u.splice(fi, last - fi + 1);
  let adj = di;
  if (di > fi) adj = di - (last - fi);
  u.splice(adj, 0, ...items);
  return u;
};

/* ── Snap modifier (from core) ── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const snapCenterLeftToCursor = ({ activatorEvent, draggingNodeRect, transform }: any) => {
  if (draggingNodeRect && activatorEvent) {
    const coords = getEventCoordinates(activatorEvent);
    if (!coords) return transform;
    return { ...transform, x: transform.x + coords.x - draggingNodeRect.left, y: transform.y + coords.y - draggingNodeRect.top - draggingNodeRect.height / 2 };
  }
  return transform;
};

/* ══════════════════════════════════════════
   DEFAULT DATA
   ══════════════════════════════════════════ */
const DEFAULT_SETTINGS: ModuleSettingsItem[] = [
  { id: "home", label: "Home", icon: "home", type: "app", disabled: false },
  { id: "messages", label: "Messages", icon: "messages", type: "app", disabled: false },
  { id: "billing", label: "Billing", icon: "billing", type: "app", disabled: false },
  { id: "files", label: "Files", icon: "files", type: "app", disabled: false },
  { id: "tasks", label: "Tasks", icon: "tasks", type: "app", disabled: false },
  { id: "reports-folder", label: "Reports", icon: "folder", type: "folder", disabled: false },
  { id: "q4-revenue", label: "Q4 Revenue Summary", icon: "report", type: "app", disabled: false, path: "reports-folder" },
  { id: "portfolio", label: "Client Portfolio Analysis", icon: "report", type: "app", disabled: false, path: "reports-folder" },
  { id: "cash-flow", label: "Monthly Cash Flow Report", icon: "report", type: "app", disabled: false, path: "reports-folder" },
];

/* ── Add App Pool ── */
const ADD_APP_POOL = [
  { label: "Forms", icon: "forms" },
  { label: "Helpdesk", icon: "helpdesk" },
  { label: "Calendar", icon: "calendar" },
  { label: "Clickup", icon: "clickup" },
];

/* ══════════════════════════════════════════
   DRAG STATE HOOK (ported from core)
   ══════════════════════════════════════════ */
function useAppListDragState({ moduleSettings, setModuleSettings, containerRef }: {
  moduleSettings: ModuleSettingsItem[];
  setModuleSettings: (s: ModuleSettingsItem[]) => void;
  containerRef: React.RefObject<HTMLElement | null>;
}) {
  const [activeItem, setActiveItem] = useState<DragItem | null>(null);
  const [overTarget, setOverTarget] = useState<OverTarget | null>(null);
  const [isDragIndented, setIsDragIndented] = useState(false);
  const [isDraggingUp, setIsDraggingUp] = useState(false);
  const reset = useCallback(() => { setActiveItem(null); setOverTarget(null); setIsDragIndented(false); setIsDraggingUp(false); }, []);

  const destinationFolderId = useMemo(() => {
    if (!activeItem || !overTarget) return null;
    if (overTarget.type === "emptyFolder") return getDestFolderForEmpty(moduleSettings, activeItem.index, overTarget.folderId, isDraggingUp, isDragIndented);
    return getDestinationFolderId(moduleSettings, activeItem.index, overTarget.index, isDraggingUp, isDragIndented);
  }, [activeItem, isDragIndented, isDraggingUp, moduleSettings, overTarget]);

  const handleDragStart = useCallback(({ active }: DragStartEvent) => {
    const i = moduleSettings.findIndex(({ id }) => id === active.id);
    if (moduleSettings[i]) { setActiveItem({ item: moduleSettings[i], index: i }); if (moduleSettings[i].path) setIsDragIndented(true); }
  }, [moduleSettings]);

  const handleDragOver = useCallback(({ over }: DragOverEvent) => {
    if (!over) { setOverTarget(null); return; }
    if (isEmptyFolderDropZoneId(over.id)) {
      const fid = getFolderIdFromDropZoneId(String(over.id));
      const fi = moduleSettings.findIndex(({ id }) => id === fid);
      if (fi !== -1) setOverTarget({ type: "emptyFolder", folderId: fid, folderIndex: fi });
    } else {
      const i = moduleSettings.findIndex(({ id }) => id === over.id);
      if (moduleSettings[i]) setOverTarget({ type: "item", item: moduleSettings[i], index: i });
    }
  }, [moduleSettings]);

  const handleDragMove = useCallback(({ delta, activatorEvent }: DragMoveEvent) => {
    const ni = getIsDragIndented(activatorEvent, delta.x, containerRef);
    if (ni !== isDragIndented) setIsDragIndented(ni);
    const nu = getIsDraggingUp(delta.y);
    if (nu !== isDraggingUp) setIsDraggingUp(nu);
  }, [isDragIndented, isDraggingUp, containerRef]);

  const handleDragEnd = useCallback(({ active, over, delta, activatorEvent }: DragEndEvent) => {
    if (!over) { reset(); return; }
    const ai = moduleSettings.findIndex(({ id }) => id === active.id);
    const aItem = moduleSettings[ai];
    if (!aItem) { reset(); return; }

    const isOverEmpty = isEmptyFolderDropZoneId(over.id);
    let oi: number, df: string | null;
    if (isOverEmpty) {
      const r = calcEmptyTarget(moduleSettings, ai, getFolderIdFromDropZoneId(String(over.id)), getIsDraggingUp(delta.y), getIsDragIndented(activatorEvent, delta.x, containerRef));
      if (!r) { reset(); return; }
      df = r.destFolder; oi = r.targetIdx;
    } else {
      oi = moduleSettings.findIndex(({ id }) => id === over.id);
      df = getDestinationFolderId(moduleSettings, ai, oi, getIsDraggingUp(delta.y), getIsDragIndented(activatorEvent, delta.x, containerRef));
    }
    if (aItem.type === "folder") {
      if (df) { reset(); return; }
      setModuleSettings(moveFolderUtil(moduleSettings, ai, oi));
    } else {
      const u = arrayMove(moduleSettings, ai, oi);
      if (df) u[oi] = { ...aItem, path: df };
      else if (aItem.path) u[oi] = { ...aItem, path: undefined };
      setModuleSettings(u);
    }
    reset();
  }, [moduleSettings, setModuleSettings, containerRef, reset]);

  return { activeItem, overTarget, dragDirection: isDraggingUp ? ("up" as const) : ("down" as const), destinationFolderId, handleDragStart, handleDragOver, handleDragMove, handleDragEnd };
}

/* ══════════════════════════════════════════
   SUB-COMPONENTS
   ══════════════════════════════════════════ */

/* ── Drop Indicator (blue line) ── */
function DropIndicator({ position, indented }: { position: "top" | "bottom"; indented: boolean }) {
  return (
    <div style={{
      position: "absolute", left: indented ? `${FOLDER_CONTENT_INDENTATION}px` : 0, right: 0,
      height: "2px", backgroundColor: C.blue, zIndex: 20, borderRadius: "1px",
      ...(position === "top" ? { top: 0 } : { bottom: 0 }),
    }} />
  );
}

/* ── Empty Folder Drop Zone ── */
function EmptyFolderDropZoneEl({ folderId, showIndicator, indicatorPos, indicatorIndented }: {
  folderId: string; showIndicator: boolean; indicatorPos: "top" | "bottom"; indicatorIndented: boolean;
}) {
  const { setNodeRef } = useDroppable({ id: `${EMPTY_FOLDER_PREFIX}${folderId}` });
  return (
    <div ref={setNodeRef} style={{ position: "relative" }}>
      {showIndicator && <DropIndicator position={indicatorPos} indented={indicatorIndented} />}
      <div style={{ height: "48px", paddingLeft: "12px", display: "flex", alignItems: "center", marginLeft: `${FOLDER_CONTENT_INDENTATION}px` }}>
        <span style={{ fontSize: "13px", color: C.textDisabled, fontFamily: "var(--font-sans)" }}>No apps inside</span>
      </div>
    </div>
  );
}

/* ── Overflow Menu ── */
function OverflowMenu({ isFolder, iuHidden, onRename, onDelete, onToggle }: {
  isFolder: boolean; iuHidden?: boolean; onRename?: () => void; onDelete?: () => void; onToggle: () => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [open]);

  const Opt = ({ icon, text, destructive, onClick }: { icon: React.ReactNode; text: string; destructive?: boolean; onClick: () => void }) => (
    <button type="button" onClick={onClick} className="menu-opt" style={{ display: "flex", alignItems: "center", gap: "8px", width: "100%", padding: "8px 12px", border: "none", backgroundColor: "transparent", cursor: "pointer", fontSize: "13px", fontFamily: "var(--font-sans)", color: destructive ? C.red : C.text, textAlign: "left" }}>
      <span style={{ display: "flex", alignItems: "center", color: destructive ? C.red : C.textMuted }}>{icon}</span>
      <span>{text}</span>
    </button>
  );

  return (
    <div ref={ref} style={{ position: "relative", zIndex: 30 }}>
      <button type="button" onClick={(e) => { e.stopPropagation(); setOpen(!open); }} className={open ? undefined : "menu-trigger"} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "24px", height: "24px", borderRadius: "4px", border: "none", backgroundColor: open ? "#e5e7eb" : "transparent", cursor: "pointer", color: C.textMuted, padding: 0 }}>
        <DotsIcon />
      </button>
      {open && (
        <div style={{ position: "absolute", top: "100%", right: "-4px", marginTop: "2px", backgroundColor: "#fff", border: `1px solid ${C.border}`, borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", minWidth: "210px", padding: "4px 0", zIndex: 50 }}>
          {isFolder ? (
            <><Opt icon={<EditIcon />} text="Rename folder" onClick={() => { onRename?.(); setOpen(false); }} />
              <Opt icon={<PlusIcon />} text="Add app to folder" onClick={() => setOpen(false)} /></>
          ) : (
            <Opt icon={<EditIcon />} text="Edit app" onClick={() => setOpen(false)} />
          )}
          <Opt icon={iuHidden ? <EyeIcon /> : <EyeHiddenIcon />} text={iuHidden ? "Show in internal sidebar" : "Hide from internal sidebar"} onClick={() => { onToggle(); setOpen(false); }} />
          {isFolder && onDelete && <Opt icon={<TrashIcon />} text="Delete folder" destructive onClick={() => { onDelete(); setOpen(false); }} />}
        </div>
      )}
    </div>
  );
}

/* ── Folder Name Input ── */
function FolderNameInput({ name, onNameChange, onDone }: { name: string; onNameChange: (n: string) => void; onDone: () => void }) {
  const ref = useRef<HTMLInputElement>(null);
  const [v, setV] = useState(name || "");
  useEffect(() => { ref.current?.focus(); ref.current?.select(); }, []);
  const commit = () => { onNameChange(v.trim() || "Folder"); onDone(); };
  return (
    <input ref={ref} type="text" value={v} onChange={(e) => { setV(e.target.value); onNameChange(e.target.value); }}
      onBlur={commit} onKeyDown={(e) => { if (e.key === "Enter" || e.key === "Escape") commit(); }}
      onClick={(e) => e.stopPropagation()}
      style={{ flex: 1, padding: "4px 8px", borderRadius: "4px", border: `1px solid ${C.blue}`, fontSize: "14px", fontFamily: "var(--font-sans)", outline: "none", color: C.text, backgroundColor: "#fff", zIndex: 20, minWidth: 0 }} />
  );
}

/* ── Drag Overlay (ghost item — compact, just shows the name) ── */
function DragOverlayItem({ item, helperText }: { item: ModuleSettingsItem; helperText?: string }) {
  return (
    <div style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "8px 16px",
      backgroundColor: "#fff",
      border: `1px solid ${C.border}`,
      borderRadius: "6px",
      whiteSpace: "nowrap",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    }}>
      {helperText ? (
        <><span style={{ display: "flex", color: C.textMuted }}><CancelIcon /></span><span style={{ fontSize: "14px", color: C.text, fontFamily: "var(--font-sans)" }}>{helperText}</span></>
      ) : (
        <span style={{ fontSize: "14px", color: C.text, fontFamily: "var(--font-sans)" }}>{item.label}</span>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SORTABLE APP LIST ITEM
   Mirrors production architecture: invisible overlay button
   handles drag events, grip handle is visual-only.
   ═══════════════════════════════════════════════════════════ */
function SortableItem({ settings, showIndicator, indicatorPos, indicatorIndented, isLastChild, isEditing, onStartEdit, onRename, onEditDone, onDeleteFolder, onToggle, disabled: ext }: {
  settings: ModuleSettingsItem;
  showIndicator: boolean;
  indicatorPos: "top" | "bottom";
  indicatorIndented: boolean;
  isLastChild: boolean;
  isEditing: boolean;
  onStartEdit: () => void;
  onRename: (n: string) => void;
  onEditDone: () => void;
  onDeleteFolder: () => void;
  onToggle: () => void;
  disabled: boolean;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging, isSorting } = useSortable({ id: settings.id });
  const [isHovered, setIsHovered] = useState(false);
  const isChild = Boolean(settings.path);
  const isF = settings.type === "folder";

  /* isSorting guard: keeps items STABLE during drag (no live reordering visual).
     Items only move to new positions on drop via framer-motion layout animation. */
  const style: React.CSSProperties = {
    transform: isSorting ? undefined : CSS.Transform.toString(transform),
    transition: [transition, "opacity 200ms ease"].filter(Boolean).join(", "),
    opacity: isDragging ? 0.4 : 1,
    position: "relative",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Folder child connector lines — positioned to not overlap icon boxes */}
      {isChild && (
        <div style={{
          position: "absolute", top: 0, left: "28px", width: "10px",
          borderLeft: `1px solid ${C.border}`,
          borderBottom: isLastChild ? `1px solid ${C.border}` : "none",
          borderBottomLeftRadius: isLastChild ? "6px" : 0,
          zIndex: 2,
          ...(isLastChild ? { height: "28px" } : { bottom: 0 }),
        }} />
      )}

      {/* Drop indicator (blue line) */}
      {showIndicator && <DropIndicator position={indicatorPos} indented={indicatorIndented} />}

      {/* Row content area */}
      <div style={{ position: "relative" }}>
        <div
          style={{
            display: "flex", alignItems: "center", height: "56px",
            padding: isChild ? `0 16px 0 ${FOLDER_CONTENT_INDENTATION - 12}px` : "0 16px 0 12px",
            gap: "10px",
            backgroundColor: isHovered && !isDragging ? C.hover : "#fff",
            border: "1px solid transparent", boxSizing: "border-box",
            borderRadius: 0,
            transition: "background-color 100ms ease",
            position: "relative",
          }}
        >
          {/* Icon slot: bordered box for all items */}
          <span style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: isChild ? "32px" : "40px", height: isChild ? "32px" : "40px", borderRadius: isChild ? "8px" : "10px",
            border: `1px solid ${C.border}`, backgroundColor: "#fff",
            color: ext ? C.textDisabled : C.textSec, flexShrink: 0,
          }}>
            <AppIconEl name={settings.icon} />
          </span>

          {/* Label or rename input */}
          {isEditing ? (
            <FolderNameInput name={settings.label} onNameChange={onRename} onDone={onEditDone} />
          ) : (
            <div style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "14px", color: ext ? C.textDisabled : C.text, fontFamily: "var(--font-sans)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {settings.label}
              </span>
              {settings.iuSidebarHidden && (
                <span style={{ display: "flex", alignItems: "center", color: ext ? C.textDisabled : C.textSec, flexShrink: 0 }}>
                  <EyeHiddenIcon />
                </span>
              )}
            </div>
          )}

          {/* Dots icon (visual only) */}
          {!isEditing && (
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "24px", height: "24px", color: C.textMuted, flexShrink: 0 }}>
              <DotsIcon />
            </span>
          )}
        </div>

        {/* ★ Invisible overlay button — handles all drag events ★ */}
        <button
          type="button"
          style={{ position: "absolute", inset: 0, appearance: "none", border: "none", backgroundColor: "transparent", cursor: isF ? "default" : "pointer", zIndex: 10, padding: 0, margin: 0, display: "block", width: "100%" }}
          {...attributes}
          {...listeners}
          disabled={ext}
        />
      </div>
    </div>
  );
}

/* ── Mobile Sortable Item ── */
function MobileSortableItem({ settings, showIndicator, indicatorPos, indicatorIndented, isLastChild, disabled: ext }: {
  settings: ModuleSettingsItem;
  showIndicator: boolean;
  indicatorPos: "top" | "bottom";
  indicatorIndented: boolean;
  isLastChild: boolean;
  disabled: boolean;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging, isSorting } = useSortable({ id: settings.id });
  const isChild = Boolean(settings.path);
  const isF = settings.type === "folder";

  const style: React.CSSProperties = {
    transform: isSorting ? undefined : CSS.Transform.toString(transform),
    transition: [transition, "opacity 200ms ease"].filter(Boolean).join(", "),
    opacity: isDragging ? 0.4 : 1,
    position: "relative",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {showIndicator && <DropIndicator position={indicatorPos} indented={indicatorIndented} />}
      <div style={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            minHeight: "72px",
            padding: isChild ? "0 16px 0 48px" : "0 16px",
            gap: "14px",
            backgroundColor: "#fff",
            borderBottom: `1px solid ${C.border}`,
          }}
        >
          {/* Icon */}
          <span style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "44px", height: "44px", borderRadius: "12px",
            border: `1px solid ${C.border}`, backgroundColor: "#fff",
            color: ext ? C.textDisabled : C.textSec, flexShrink: 0,
          }}>
            <AppIconEl name={settings.icon} />
          </span>

          {/* Label */}
          <span style={{
            flex: 1, fontSize: "15px", fontWeight: 500,
            color: ext ? C.textDisabled : C.text,
            fontFamily: "var(--font-sans)",
            overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
          }}>
            {settings.label}
          </span>

          {/* Visibility label (apps only) */}
          {!isF && (
            <span style={{
              fontSize: "13px", color: C.textMuted,
              fontFamily: "var(--font-sans)",
              whiteSpace: "nowrap", flexShrink: 0,
            }}>
              Visible to all clients
            </span>
          )}

          {/* Dots */}
          <span style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "24px", height: "24px", color: C.textMuted, flexShrink: 0,
          }}>
            <DotsIcon />
          </span>
        </div>

        {/* Invisible overlay for drag */}
        <button
          type="button"
          style={{ position: "absolute", inset: 0, appearance: "none", border: "none", backgroundColor: "transparent", cursor: "pointer", zIndex: 10, padding: 0, margin: 0, display: "block", width: "100%" }}
          {...attributes}
          {...listeners}
          disabled={ext}
        />
      </div>
    </div>
  );
}

/* ── Nav sidebar item ── */
function NavItem({ icon, label, badge, active }: { icon: React.ReactNode; label: string; badge?: number; active?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "5px 12px", borderRadius: "6px", fontSize: "12.5px", fontWeight: active ? 500 : 400, color: active ? C.text : C.navText, backgroundColor: active ? C.navActive : "transparent", cursor: "default", fontFamily: "var(--font-sans)" }}>
      <span style={{ display: "flex", alignItems: "center", color: C.navTextMuted, flexShrink: 0 }}>{icon}</span>
      <span style={{ flex: 1 }}>{label}</span>
      {badge !== undefined && (
        <span style={{ fontSize: "10px", fontWeight: 500, color: C.textMuted, backgroundColor: C.border, borderRadius: "10px", padding: "1px 6px", minWidth: "18px", textAlign: "center" }}>{badge}</span>
      )}
    </div>
  );
}

/* ── Client Preview ── */
function ClientPreview({ items, inSplit = false }: { items: ModuleSettingsItem[]; inSplit?: boolean }) {
  const preview = useMemo(() => {
    const topLevel: { id: string; name: string; icon: string; isFolder?: boolean }[] = [];
    const childrenByFolder = new Map<string, { id: string; name: string; icon: string }[]>();
    for (const s of items) {
      if (s.disabled || s.iuSidebarHidden) continue;
      if (s.type === "folder") { topLevel.push({ id: s.id, name: s.label, icon: "folder", isFolder: true }); }
      else if (s.path) {
        if (!childrenByFolder.has(s.path)) childrenByFolder.set(s.path, []);
        childrenByFolder.get(s.path)!.push({ id: s.id, name: s.label, icon: s.icon });
      } else { topLevel.push({ id: s.id, name: s.label, icon: s.icon }); }
    }
    const flat: { id: string; name: string; icon: string; isFolder?: boolean; isChild?: boolean; isLastChild?: boolean }[] = [];
    for (const t of topLevel) {
      flat.push(t);
      if (t.isFolder) {
        const children = childrenByFolder.get(t.id) ?? [];
        children.forEach((c, ci) => flat.push({ ...c, isChild: true, isLastChild: ci === children.length - 1 }));
      }
    }
    return flat;
  }, [items]);

  return (
    <div style={{ display: "flex", height: "100%", borderRadius: "8px", overflow: "hidden", border: "none" }}>
      {/* Dark sidebar */}
      <div style={{ width: inSplit ? "100%" : "180px", flexShrink: 0, backgroundColor: C.darkBg, padding: "14px 0", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "7px", padding: "0 11px 11px", marginBottom: "5px" }}>
          <div style={{ width: "22px", height: "22px", borderRadius: "5px", backgroundColor: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9.5px", lineHeight: 1, fontWeight: 400, color: C.darkText, fontFamily: "var(--font-sans)" }}>B</div>
          <span style={{ fontSize: "11.5px", fontWeight: 400, color: C.darkText, fontFamily: "var(--font-sans)" }}>BrandMages</span>
        </div>
        <div style={{ flex: 1, padding: "2px 6px" }}>
          <AnimatePresence mode="popLayout">
            {preview.map((it) => (
              <motion.div key={it.id} layout layoutId={`pv-${it.id}`} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 6 }} transition={{ duration: 0.2 }}
                style={{ position: "relative", display: "flex", alignItems: "center", gap: "7px", padding: it.isChild ? "4.5px 8px 4.5px 26px" : "4.5px 8px", borderRadius: it.isChild ? 0 : "5px", marginBottom: it.isChild ? 0 : "1px", cursor: "default", overflow: "visible" }}>
                {it.isChild && (
                  <div style={{
                    position: "absolute", top: 0, left: "16px", width: "6px",
                    borderLeft: "1px solid rgba(255,255,255,0.18)",
                    borderBottom: it.isLastChild ? "1px solid rgba(255,255,255,0.18)" : "none",
                    borderBottomLeftRadius: it.isLastChild ? "4px" : 0,
                    ...(it.isLastChild ? { height: "50%" } : { bottom: 0 }),
                  }} />
                )}
                {!it.isChild && <span style={{ color: C.darkTextMuted, display: "flex", alignItems: "center", transform: "scale(0.85)", transformOrigin: "center" }}><AppIconEl name={it.icon} /></span>}
                <span style={{ fontSize: "11.5px", fontWeight: it.isFolder ? 500 : 400, color: C.darkText, fontFamily: "var(--font-sans)" }}>{it.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      {!inSplit && (
        <div style={{ flex: 1, backgroundColor: C.bg, padding: "24px 20px" }}>
          <h5 style={{ margin: "0 0 16px", fontSize: "15px", fontWeight: 600, color: C.text, fontFamily: "var(--font-sans)" }}>Good morning</h5>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[85, 70, 60, 78, 45].map((w, i) => <div key={i} style={{ height: "8px", width: `${w}%`, borderRadius: "4px", backgroundColor: "#f0f0f0" }} />)}
          </div>
        </div>
      )}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════ */
export function InteractiveAppLibrary({ inSplit = false }: { inSplit?: boolean }) {
  const [moduleSettings, setModuleSettings] = useState<ModuleSettingsItem[]>(DEFAULT_SETTINGS);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newFolderId, setNewFolderId] = useState<string | null>(null);
  const [addAppIndex, setAddAppIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 3 } }));
  const { activeItem, overTarget, dragDirection, destinationFolderId, handleDragStart, handleDragOver, handleDragMove, handleDragEnd } = useAppListDragState({ moduleSettings, setModuleSettings, containerRef });

  const isDraggingIntoFolder = Boolean(destinationFolderId);
  const isDraggingFolderIntoFolder = isDraggingIntoFolder && activeItem?.item.type === "folder";
  const isDraggingFolderIntoSelf = isDraggingFolderIntoFolder && destinationFolderId === activeItem?.item.id;
  const overItem = overTarget?.type === "item" ? overTarget : null;

  // Global grabbing cursor while dragging
  useEffect(() => {
    if (!activeItem) return;
    const s = document.createElement("style");
    s.textContent = "* { cursor: grabbing !important; }";
    document.head.appendChild(s);
    return () => { s.remove(); };
  }, [activeItem]);

  // Last visible child per folder (for connector curved corner)
  const lastChildIds = useMemo(() => {
    const m = new Map<string, string>();
    for (const s of moduleSettings) { if (s.path && !s.disabled) m.set(s.path, s.id); }
    return new Set(m.values());
  }, [moduleSettings]);

  const addFolder = useCallback(() => {
    const id = `folder-${Date.now()}`;
    setModuleSettings((p) => [...p, { id, label: "", icon: "folder", type: "folder", disabled: false }]);
    setNewFolderId(id);
    setEditingId(id);
  }, []);

  const addApp = useCallback(() => {
    if (addAppIndex >= 4) return; // Demo: max 4 apps can be added
    const template = ADD_APP_POOL[addAppIndex % ADD_APP_POOL.length];
    const id = `app-${Date.now()}`;
    setModuleSettings((p) => [...p, { id, label: template.label, icon: template.icon, type: "app", disabled: false }]);
    setAddAppIndex((i) => i + 1);
  }, [addAppIndex]);

  const helperText = isDraggingFolderIntoFolder && !isDraggingFolderIntoSelf ? "You cannot put a folder inside a folder." : undefined;

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: { active: { opacity: "0" } },
    }),
    duration: 220,
    easing: "ease",
  };

  const isDesktop = useMediaQuery("(min-width: 1024px)", true);

  /* ── Mobile: focused app list ── */
  if (!isDesktop) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ borderRadius: "12px", overflow: "hidden", backgroundColor: C.bg, border: `1px solid ${C.border}` }}
      >
        <DndContext sensors={sensors} collisionDetection={closestCenter}
          onDragStart={handleDragStart} onDragOver={handleDragOver} onDragMove={handleDragMove} onDragEnd={handleDragEnd}>
          <SortableContext items={moduleSettings.map(({ id }) => id)} strategy={verticalListSortingStrategy}>
            <div ref={containerRef}>
              {moduleSettings.map((s, idx) => {
                if (s.disabled) return null;
                const showInd = overItem?.item.id === s.id && !isDraggingFolderIntoFolder && !isDraggingFolderIntoSelf;
                return (
                  <motion.div key={s.id} layout="position" transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}>
                    <MobileSortableItem
                      settings={s}
                      showIndicator={showInd}
                      indicatorPos={dragDirection === "up" ? "top" : "bottom"}
                      indicatorIndented={isDraggingIntoFolder}
                      isLastChild={lastChildIds.has(s.id)}
                      disabled={Boolean(activeItem?.item.type === "folder" && getFolderId(s))}
                    />
                    {isEmptyFolder(moduleSettings, idx) && (
                      <EmptyFolderDropZoneEl folderId={s.id}
                        showIndicator={overTarget?.type === "emptyFolder" && activeItem?.item.type !== "folder" && overTarget.folderId === s.id && !isDraggingFolderIntoFolder}
                        indicatorPos={dragDirection === "up" ? "top" : "bottom"}
                        indicatorIndented={isDraggingIntoFolder} />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </SortableContext>
          <DragOverlay modifiers={[snapCenterLeftToCursor]} dropAnimation={dropAnimation}>
            {activeItem && <DragOverlayItem item={activeItem.item} helperText={helperText} />}
          </DragOverlay>
        </DndContext>
      </motion.div>
    );
  }

  /* ── Desktop: full layout (unchanged) ── */
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ borderRadius: "12px", overflow: "hidden", backgroundColor: "#141414", border: "1px solid rgba(255, 255, 255, 0.06)" }}
    >
      {/* ─ CSS for hover effects ─ */}
      <style>{`
        .menu-trigger:hover { background-color: #e5e7eb; }
        .menu-opt:hover { background-color: ${C.hover}; }
      `}</style>

      {/* Browser chrome */}
      <div style={{ position: "relative", display: "flex", alignItems: "center", backgroundColor: "#141414", padding: "12px 16px", borderBottom: "1px solid rgba(255, 255, 255, 0.06)" }}>
        <div style={{ display: "flex", gap: "7px", position: "relative", zIndex: 1 }}>
          {["#ff5f57", "#febc2e", "#28c840"].map((color) => (
            <div key={color} style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: color, opacity: 0.8 }} />
          ))}
        </div>
        <div style={{ position: "absolute", left: 0, right: 0, textAlign: "center", fontFamily: "'SF Mono', 'Fira Code', Menlo, monospace", fontSize: "11px", color: "rgba(255, 255, 255, 0.35)", letterSpacing: "0.01em", pointerEvents: "none" }}>
          dashboard.assembly.com
        </div>
      </div>

      {/* Main layout: left nav + content area */}
      <div style={{ display: "flex", minHeight: inSplit ? "360px" : "460px", backgroundColor: C.bg }}>

        {/* ─── LEFT NAV ─── */}
        {!inSplit && (
          <div style={{ width: "180px", flexShrink: 0, backgroundColor: C.navBg, borderRight: `1px solid ${C.navBorder}`, padding: "12px 0", display: "flex", flexDirection: "column", fontSize: "12.5px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "0 12px 12px" }}>
              <div style={{ width: "26px", height: "26px", borderRadius: "6px", backgroundColor: C.accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700, color: "#fff", fontFamily: "var(--font-sans)" }}>B</div>
              <span style={{ fontSize: "13px", fontWeight: 600, color: C.text, fontFamily: "var(--font-sans)" }}>BrandMages</span>
            </div>
            <div style={{ padding: "0 6px", display: "flex", flexDirection: "column", gap: "1px" }}>
              <NavItem icon={<DashboardIcon />} label="Dashboard" />
              <NavItem icon={<CRMIcon />} label="CRM" />
              <NavItem icon={<BellIcon />} label="Notifications" badge={2} />
              <NavItem icon={<AutomationsIcon />} label="Automations" />
            </div>
            <div style={{ padding: "14px 16px 4px", fontSize: "10px", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: C.navLabel }}>Apps</div>
            <div style={{ padding: "0 6px", display: "flex", flexDirection: "column", gap: "1px" }}>
              <NavItem icon={<HomeIcon />} label="Home" />
              <NavItem icon={<MessagesIcon />} label="Messages" badge={3} />
              <NavItem icon={<BillingIcon />} label="Billing" />
              <NavItem icon={<FilesIcon />} label="Files" />
              <NavItem icon={<TasksIcon />} label="Tasks" />
            </div>
            <div style={{ padding: "14px 16px 4px", fontSize: "10px", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: C.navLabel }}>Preferences</div>
            <div style={{ padding: "0 6px", display: "flex", flexDirection: "column", gap: "1px" }}>
              <NavItem icon={<AppLibraryIcon />} label="App Library" active />
              <NavItem icon={<CustomizeIcon />} label="Customization" />
            </div>
            <div style={{ flex: 1 }} />
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

        {/* ─── CENTER + RIGHT: wrapped in flex-col for shared toolbar ─── */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>

          {/* Toolbar (spans full width of center + right) */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: inSplit ? "12px 12px" : "16px 20px", borderBottom: `1px solid ${C.border}` }}>
            <h4 style={{ margin: 0, fontSize: inSplit ? "13px" : "15px", fontWeight: 600, color: C.text, fontFamily: "var(--font-sans)" }}>App Library</h4>
            <div style={{ display: "flex", gap: "8px" }}>
              <button style={{ display: "flex", alignItems: "center", gap: "5px", padding: "5px 12px", borderRadius: "5px", border: `1px solid #d1d5db`, backgroundColor: "#ffffff", color: C.text, fontSize: "11px", fontWeight: 500, cursor: "default", fontFamily: "var(--font-sans)", pointerEvents: "none" }}>
                Add folder
              </button>
              <button style={{ display: "flex", alignItems: "center", gap: "5px", padding: "5px 12px", borderRadius: "5px", border: `1px solid #d1d5db`, backgroundColor: "#ffffff", color: C.text, fontSize: "11px", fontWeight: 500, cursor: "default", fontFamily: "var(--font-sans)", pointerEvents: "none" }}>
                Add app
              </button>
            </div>
          </div>

          {/* Content area: two columns side by side */}
          <div style={{ display: "flex", flex: 1, minHeight: 0 }}>

            {/* ─── LEFT: APP LIST ─── */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, padding: inSplit ? "0 12px 12px 12px" : "0 20px 20px 20px" }}>
              <div style={{ padding: inSplit ? "14px 0 8px" : "20px 0 10px 0" }}>
                <h5 style={{ margin: 0, fontSize: "18px", fontWeight: 600, color: C.text, fontFamily: "var(--font-sans)" }}>Apps</h5>
              </div>
              <DndContext sensors={sensors} collisionDetection={closestCenter}
                onDragStart={handleDragStart} onDragOver={handleDragOver} onDragMove={handleDragMove} onDragEnd={handleDragEnd}>
                <SortableContext items={moduleSettings.map(({ id }) => id)} strategy={verticalListSortingStrategy}>
                  <div ref={containerRef} style={{ border: `1px solid ${C.border}`, borderRadius: "8px", padding: "8px 0", overflow: "hidden" }}>
                    {moduleSettings.map((s, idx) => {
                      if (s.disabled) return null;
                      const showInd = overItem?.item.id === s.id && !isDraggingFolderIntoFolder && !isDraggingFolderIntoSelf;
                      return (
                        <motion.div key={s.id} layout="position" transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}>
                          <SortableItem
                            settings={s}
                            showIndicator={showInd}
                            indicatorPos={dragDirection === "up" ? "top" : "bottom"}
                            indicatorIndented={isDraggingIntoFolder}
                            isLastChild={lastChildIds.has(s.id)}
                            isEditing={editingId === s.id}
                            onStartEdit={() => setEditingId(s.id)}
                            onRename={(n) => setModuleSettings((p) => p.map((x) => x.id === s.id ? { ...x, label: n } : x))}
                            onEditDone={() => {
                              setEditingId(null);
                              if (newFolderId === s.id) {
                                setNewFolderId(null);
                                setModuleSettings((p) => p.map((x) => x.id === s.id && !x.label.trim() ? { ...x, label: "Folder" } : x));
                              }
                            }}
                            onDeleteFolder={() => setModuleSettings((p) => deleteFolderUtil(p, idx))}
                            onToggle={() => setModuleSettings((p) => p.map((x) => x.id === s.id ? { ...x, iuSidebarHidden: !x.iuSidebarHidden } : x))}
                            disabled={Boolean(activeItem?.item.type === "folder" && getFolderId(s))}
                          />
                          {isEmptyFolder(moduleSettings, idx) && (
                            <EmptyFolderDropZoneEl folderId={s.id}
                              showIndicator={overTarget?.type === "emptyFolder" && activeItem?.item.type !== "folder" && overTarget.folderId === s.id && !isDraggingFolderIntoFolder}
                              indicatorPos={dragDirection === "up" ? "top" : "bottom"}
                              indicatorIndented={isDraggingIntoFolder} />
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </SortableContext>
                <DragOverlay modifiers={[snapCenterLeftToCursor]} dropAnimation={dropAnimation}>
                  {activeItem && <DragOverlayItem item={activeItem.item} helperText={helperText} />}
                </DragOverlay>
              </DndContext>
            </div>

            {/* ─── RIGHT: CLIENT PREVIEW ─── */}
            <div style={{ width: inSplit ? "240px" : "320px", flexShrink: 0, backgroundColor: C.bgAlt, borderLeft: `1px solid ${C.border}`, padding: inSplit ? "0 12px 12px 12px" : "0 20px 20px 20px", display: "flex", flexDirection: "column", borderRadius: "0 0 12px 0" }}>
              <div style={{ padding: inSplit ? "14px 0 8px" : "20px 0 10px 0" }}>
                <h4 style={{ margin: 0, fontSize: "18px", fontWeight: 600, color: C.text, fontFamily: "var(--font-sans)" }}>Client Preview</h4>
              </div>
              <div style={{ flex: 1 }}><ClientPreview items={moduleSettings} inSplit={inSplit} /></div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}
