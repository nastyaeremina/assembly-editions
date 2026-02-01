"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function FeatureModal({
  isOpen,
  onClose,
  title,
  children,
  className,
}: FeatureModalProps) {
  // Handle escape key
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleEscape]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop - Linear style with slower fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          {/* Modal - Linear style spring animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
              mass: 1,
            }}
            className={cn(
              "fixed inset-x-0 bottom-0 z-[101] sm:inset-auto sm:left-1/2 sm:top-1/2 sm:w-full sm:max-w-5xl sm:-translate-x-1/2 sm:-translate-y-1/2 sm:px-4",
              className
            )}
          >
            <motion.div
              className="relative rounded-t-2xl sm:rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black/50 max-h-[90vh] sm:max-h-none flex flex-col"
              layoutId="modal-content"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-zinc-800 px-4 sm:px-6 py-4 shrink-0">
                <h2 className="text-lg sm:text-xl font-semibold text-zinc-100 pr-4">{title}</h2>
                <motion.button
                  onClick={onClose}
                  className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-zinc-800 hover:text-zinc-200 shrink-0"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Content */}
              <div className="max-h-[calc(90vh-60px)] sm:max-h-[80vh] overflow-y-auto px-4 sm:px-6 py-4 sm:py-6">
                {children}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
