"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { FeatureModal } from "./FeatureModal";

interface HorizontalFeatureCardProps {
  title: string;
  description: string;
  expandedContent: React.ReactNode;
  mediaLabel?: string;
  mediaElement?: React.ReactNode;
  imagePosition?: "left" | "right";
  className?: string;
}

export function HorizontalFeatureCard({
  title,
  description,
  expandedContent,
  mediaLabel,
  mediaElement,
  imagePosition = "left",
  className,
}: HorizontalFeatureCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        onClick={() => setIsModalOpen(true)}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={cn(
          "group relative flex flex-col lg:flex-row rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden cursor-pointer",
          "transition-[border-color,background-color,box-shadow] duration-150 ease-out",
          "hover:border-zinc-700 hover:bg-zinc-900/80 hover:shadow-xl hover:shadow-black/20",
          imagePosition === "right" && "lg:flex-row-reverse",
          className
        )}
        whileHover={{ y: -4 }}
        transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
      >
        {/* Expand button */}
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

        {/* Media - takes up about 55% on desktop */}
        <div className="lg:w-[55%] p-4 lg:p-5">
          {mediaElement ? (
            <div className="h-full">{mediaElement}</div>
          ) : mediaLabel ? (
            <MediaPlaceholder
              label={mediaLabel}
              aspectRatio="16:9"
              className="h-full"
            />
          ) : null}
        </div>

        {/* Content - takes up about 45% on desktop */}
        <div className="flex flex-col justify-center p-4 pt-0 sm:p-6 lg:w-[45%] lg:py-8 lg:px-8">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-zinc-100 pr-10 lg:pr-0">
            {title}
          </h3>
          <p className="mt-2 sm:mt-3 text-sm lg:text-base text-zinc-400 leading-relaxed">
            {description}
          </p>
        </div>
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
