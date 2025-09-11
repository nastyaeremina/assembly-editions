'use client';
import React, { useEffect, useState } from 'react';
import { MainDiv } from './styles';
import CarouselCard from './carouselCard';
import { CAROUSEL_SLIDER } from '../../constants/constant';

/**
 * Renders the carousel track and marks cards as partially visible (blurred/disabled)
 * based on what is actually visible in the viewport (screen), not just the container.
 *
 * Props:
 * - xPos: current translateX position (px) for the track
 * - carouselData: array of card data
 */
export default function CarouselBlock({ xPos, carouselData }) {
  // Measured dimensions used for visibility math
  const [cardWidth, setCardWidth] = useState(237);
  const [containerLeft, setContainerLeft] = useState(0); // container's left relative to viewport
  const [viewportWidth, setViewportWidth] = useState(0); // current screen width
  const sliderItemGap = 24;

  /**
   * Measure:
   * - first card width (stable card width across all cards)
   * - container width and left offset (relative to viewport)
   * - viewport width (to compute visibility against screen edges)
   */
  useEffect(() => {
    const measure = () => {
      const mainBlock = document.getElementsByClassName(CAROUSEL_SLIDER)[0];
      if (!mainBlock) return;

      const firstChild = mainBlock.children && mainBlock.children[0];
      if (firstChild) {
        setCardWidth(firstChild.offsetWidth);
      }

      const parent = mainBlock.parentElement || mainBlock;

      const rect = parent.getBoundingClientRect();
      setContainerLeft(rect.left);

      setViewportWidth(window.innerWidth || document.documentElement.clientWidth);
    };

    const raf = requestAnimationFrame(measure);
    window.addEventListener('resize', measure);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', measure);
    };
  }, []);


  return (
    <>
      {/* Track: translate by xPos; cards are laid out in a horizontal row with gaps */}
      <MainDiv style={{ transform: `translateX(${xPos}px)` }} className={CAROUSEL_SLIDER}>
        {carouselData.map((card, index) => {
          // Position of the card relative to the track (in pixels)
          const left = xPos + index * (cardWidth + sliderItemGap);
          const right = left + cardWidth;

          // Convert card position to viewport coordinates
          const vLeft = containerLeft + left;
          const vRight = vLeft + cardWidth;

          // Small tolerance so a card that barely crosses the edge is treated as partial
          const edgeBleed = sliderItemGap + 24;

          // Visibility against the actual screen (viewport)
          const overlapsViewport = vRight > 0 && vLeft < viewportWidth;
          const fullyVisibleViewport = vLeft >= 0 && vRight <= viewportWidth;
          const partialRight = vLeft < viewportWidth + edgeBleed && vRight > viewportWidth;
          const partialLeft = vRight > -edgeBleed && vLeft < 0;

          // A card is partial if it overlaps the viewport but is not fully inside,
          // or if it slightly bleeds beyond either screen edge.
          const isPartial = (overlapsViewport && !fullyVisibleViewport) || partialRight || partialLeft;

          return (
            <CarouselCard
              key={index}
              title={card.title}
              description={card.description}
              carouselImage={card.image?.url}
              linkHref={card.url}
              // This flag drives the blur and disables interaction via styles
              isPartial={isPartial}
            />
          );
        })}
      </MainDiv>
    </>
  );
}
