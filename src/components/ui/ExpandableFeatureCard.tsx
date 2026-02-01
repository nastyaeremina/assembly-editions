"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { FeatureModal } from "./FeatureModal";

interface ExpandableFeatureCardProps {
  title: string;
  description: string;
  expandedContent: React.ReactNode;
  mediaLabel?: string;
  mediaElement?: React.ReactNode;
  className?: string;
}

export function ExpandableFeatureCard({
  title,
  description,
  expandedContent,
  mediaLabel,
  mediaElement,
  className,
}: ExpandableFeatureCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        onClick={() => setIsModalOpen(true)}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={cn(
          "group relative flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-6 cursor-pointer",
          "transition-[border-color,background-color,box-shadow] duration-150 ease-out",
          "hover:border-zinc-700 hover:bg-zinc-900/80 hover:shadow-xl hover:shadow-black/20",
          className
        )}
        whileHover={{ y: -4 }}
        transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
      >
        {/* Expand button - Always visible with animation */}
        <motion.button
          onClick={(e) => {
            e.stopPropagation();
            setIsModalOpen(true);
          }}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-zinc-800 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-zinc-200"
          aria-label={`Expand ${title}`}
          animate={{ rotate: isHovered ? 90 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Plus className="h-4 w-4" />
        </motion.button>

        {/* Media */}
        {mediaElement ? (
          <div className="mb-4 sm:mb-5">{mediaElement}</div>
        ) : mediaLabel ? (
          <MediaPlaceholder
            label={mediaLabel}
            aspectRatio="16:9"
            className="mb-4 sm:mb-5"
          />
        ) : null}

        {/* Content */}
        <h3 className="text-base sm:text-lg font-semibold text-zinc-100 pr-10">{title}</h3>
        <p className="mt-2 text-sm text-zinc-400 leading-relaxed line-clamp-3">
          {description}
        </p>
      </motion.div>

      {/* Modal */}
      <FeatureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
      >
        {expandedContent}
      </FeatureModal>
    </>
  );
}
