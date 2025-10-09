import React, { useRef, useEffect, useState } from 'react';
import { ToggleContainer, ToggleOption } from '../../../styles/pricingstyles';
import { TabHighlighter } from '../../sectionComponent/switcherComponent/style';
import { SectionTone } from '../../../constants/constant';

export default function YearlyToggleComponent({ onClick, isYearly, discountTag }) {
  const yearlyRef = useRef(null);
  const monthlyRef = useRef(null);
  const [highlighterProps, setHighlighterProps] = useState({
    highlighterWidth: 0,
    highlighterLeft: 0
  });

  /**
   * Effect to dynamically calculate and update the highlighter position and width
   * - Positions the highlighter behind the active toggle option (Yearly or Monthly)
   * - Recalculates positions when isYearly or discountTag changes
   * - Adds a resize listener to reposition the highlighter on window resize
   * - Uses setTimeout to ensure DOM elements are fully rendered before measurement
   */
  useEffect(() => {
    const updateHighlighterPosition = () => {
      if (yearlyRef.current && monthlyRef.current) {
        const yearlyWidth = yearlyRef.current.offsetWidth;
        const monthlyWidth = monthlyRef.current.offsetWidth;

        // Get the container to calculate relative positions
        const container = yearlyRef.current.parentElement;
        const containerRect = container.getBoundingClientRect();
        const yearlyRect = yearlyRef.current.getBoundingClientRect();
        const monthlyRect = monthlyRef.current.getBoundingClientRect();

        if (isYearly) {
          // When yearly is active, position highlighter at the first option
          const yearlyLeft = yearlyRect.left - containerRect.left;
          setHighlighterProps({
            highlighterWidth: yearlyWidth,
            highlighterLeft: yearlyLeft
          });
        } else {
          // When monthly is active, position highlighter at the second option
          const monthlyLeft = monthlyRect.left - containerRect.left;
          setHighlighterProps({
            highlighterWidth: monthlyWidth,
            highlighterLeft: monthlyLeft
          });
        }
      }
    };

    // Use setTimeout to ensure DOM is fully rendered
    const timeoutId = setTimeout(updateHighlighterPosition, 0);

    // Update on window resize
    window.addEventListener('resize', updateHighlighterPosition);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateHighlighterPosition);
    };
  }, [isYearly, discountTag]);

  return (
    <ToggleContainer>
      <TabHighlighter
        tone={SectionTone.LIGHT}
        highlighterWidth={highlighterProps.highlighterWidth}
        highlighterLeft={highlighterProps.highlighterLeft}
      />
      <ToggleOption ref={yearlyRef} active={isYearly} onClick={onClick}>
        Yearly {discountTag && <span>({discountTag})</span>}
      </ToggleOption>
      <ToggleOption ref={monthlyRef} active={!isYearly} onClick={onClick}>
        Monthly
      </ToggleOption>
    </ToggleContainer>
  );
}
