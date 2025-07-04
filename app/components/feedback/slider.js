import React, { useEffect, useRef } from 'react';
import { SliderHeight } from '../../constants/constant';
import { MarqueeContainer, MarqueeContent, MarqueeItem } from './styles';

/**
 * Slider Component
 * @param {Object} props - Component props
 * @param {React.ReactNode} children - Optional additional content to be rendered within the component.
 * @param {'normal' | 'reverse'} direction - Direction for sliding the items (normal or reverse).
 * @param {number} gap - The gap between each child item in the slider.
 * @param {number} responsiveGap - The gap between each child item in the slider when the screen size is responsive, allowing for better spacing on smaller devices.
 * @param {number} speed - The speed of the sliding animation (in seconds).
 * @param {'full' | 'auto'} height - Determines whether the item should have a height of 100% or auto. Use this prop to control the height behavior of the item.
 * @param {boolean} isPause - isPause props use for animation pause on hover.
 */

function Slider({
  children,
  direction = 'normal',
  gap = 20,
  responsiveGap = 20,
  speed = 1,
  height = SliderHeight.FULL,
  isHoverPause = false
}) {
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (typeof window != 'undefined') {
      // Get the current reference to the marquee content
      const marqueeContent = marqueeRef.current;
      // If the marquee content is not available, exit the effect
      if (!marqueeContent) return;

      // Get the number of children (items) displayed in the marquee
      const marqueeElementsDisplayed = marqueeContent.children.length;

      // Set a CSS variable for the number of marquee elements
      marqueeContent.style.setProperty('--marquee-elements', marqueeElementsDisplayed.toString());

      // Get the width and height of the marquee container
      const containerWidth = marqueeContent.offsetWidth;
      const containerHeight = marqueeContent.offsetHeight;

      // Get the first child element to determine its width
      const firstChild = marqueeContent.children[0];
      // Calculate the width of each element; if no child exists, divide the container width by the number of displayed elements
      const elementWidth = firstChild ? firstChild.offsetWidth : containerWidth / marqueeElementsDisplayed;
      const elementHeight = firstChild ? firstChild.offsetHeight : containerHeight / marqueeElementsDisplayed;
      // Set CSS variables for the width and height of each marquee element, including the gap
      if (window.innerWidth > 768) {
        marqueeContent.style.setProperty('--marquee-element-width', `${elementWidth + gap}px`);
        marqueeContent.style.setProperty('--marquee-element-height', `${elementHeight + gap}px`);
      } else {
        marqueeContent.style.setProperty('--marquee-element-width', `${elementWidth + responsiveGap}px`);
        marqueeContent.style.setProperty('--marquee-element-height', `${elementHeight + responsiveGap}px`);
      }

      // Set the animation duration based on the number of displayed elements and the speed
      marqueeContent.style.setProperty('--marquee-animation-duration', `${marqueeElementsDisplayed * speed}s`);

      // Clone each child element and append it to the marquee content for continuous scrolling
      for (let i = 0; i < marqueeElementsDisplayed; i++) {
        const child = marqueeContent.children[i];
        if (child) marqueeContent.appendChild(child.cloneNode(true));
      }

      // Cleanup function to remove cloned children when the component unmounts or dependencies change
      return () => {
        const children = Array.from(marqueeContent.children);
        marqueeContent.style.setProperty('--marquee-element-width', `${elementWidth}px`);
        marqueeContent.style.setProperty('--marquee-element-height', `${elementHeight}px`);
        children.slice(marqueeElementsDisplayed).forEach((child) => child.remove());
      };
    }
  }, [gap, speed]);

  return (
    <MarqueeContainer>
      <MarqueeContent ref={marqueeRef} direction={direction} isHoverPause={isHoverPause}>
        {React.Children.map(children, (child, index) => (
          <MarqueeItem key={index} height={height}>
            {child}
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </MarqueeContainer>
  );
}

export default Slider;
