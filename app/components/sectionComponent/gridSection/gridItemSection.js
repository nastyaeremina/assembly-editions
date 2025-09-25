import React, { useEffect, useRef } from 'react';
import { isEmpty } from '../../../helpers/helpers';
import QuoteSectionComponent from '../../quoteSection/quoteSection';
import { GridItemSectionWrapper, VideoWrapper } from '../style';
import TabVideoComponent from '../../tabVideoComponent/index';

/**
 * GridItemSection renders individual grid items with content blocks, media, and interactive elements
 * Supports quote blocks, images, videos, and conditional styling based on active state
 * @param {Object} quoteBlock - Quote data object with quote text, author, and role information
 * @param {Object} imageUrl - Image data object with url property for fallback display
 * @param {Object} videoUrl - Video data object containing either videoLink or video.url
 * @param {string} title - Title text for the grid item
 * @param {boolean} isActive - Whether this grid item is currently active/selected
 * @param {number} activeIndex - Current active index for intersection observer and video control
 * @param {string} tone - Tone/style variant for conditional styling
 * @param {Object} link - Link configuration object for navigation
 * @param {boolean} isSectionComponent - Whether this is used as a section component (affects styling/layout)
 */
function GridItemSection({
  quoteBlock,
  imageUrl,
  videoUrl,
  title,
  isActive,
  activeIndex,
  tone,
  link,
  isSectionComponent
}) {
  return (
    <>
      <GridItemSectionWrapper
        isActive={isActive}
        data-active={isActive}
        hasQuoteBlock={!isEmpty(quoteBlock)}
        tone={tone}
        isSectionComponent={isSectionComponent}>
        <TabVideoComponent
          imageUrl={imageUrl}
          videoUrl={videoUrl}
          videoTitle={title}
          activeIndex={activeIndex}
          tone={tone}
        />
        {/* Render quote block if available */}
        {!isEmpty(quoteBlock) && (
          <QuoteSectionComponent
            tone={tone}
            imageSrc={quoteBlock.image?.url}
            name={quoteBlock.name}
            role={quoteBlock.role}
            description={quoteBlock.quoteNew}
            link={link}
          />
        )}
      </GridItemSectionWrapper>
    </>
  );
}

export default GridItemSection;
