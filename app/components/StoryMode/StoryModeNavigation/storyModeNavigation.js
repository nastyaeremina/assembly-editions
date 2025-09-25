'use client';

import React, { useMemo, useEffect, useState, useRef } from 'react';
import { MainBlock, Tabs, Tab, TabName } from './styles';
import { useIsMobile } from '../../../hooks/useMobileDevice';

export default function StoryModeNavigation({ tabs, activeIndex, setActiveIndex, tone }) {
  const [scrollLeft, setScrollLeft] = useState(0);
  const isMobile = useIsMobile();

  // Ref for tabs container
  const tabsContainerRef = useRef(null);
  // Refs for tab buttons
  const tabRefs = useRef([]);

  // On activeIndex, scroll active tab into view
  useEffect(() => {
    if (tabRefs.current[activeIndex] && tabsContainerRef.current) {
      const activeTab = tabRefs.current[activeIndex];
      const container = tabsContainerRef.current;

      // Calculate the scroll position to center the tab
      const containerRect = container.getBoundingClientRect();
      const tabRect = activeTab.getBoundingClientRect();

      // Calculate the offset to center the tab in the container
      const scrollLeft =
        container.scrollLeft + (tabRect.left - containerRect.left) - (containerRect.width - tabRect.width) / 2;

      // Smooth scroll to the calculated position
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    const container = tabsContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setScrollLeft(container.scrollLeft);
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Build the list of Tab elements
  const tabsList = useMemo(() => {
    return tabs.map((item, index) => {
      if (isMobile && index !== activeIndex) return null;

      return (
        <Tab
          key={index}
          ref={(el) => (tabRefs.current[index] = el)} // assign ref
          onClick={
            () =>
              isMobile
                ? setActiveIndex((activeIndex + 1) % tabs.length) // Mobile: next tab
                : setActiveIndex(index) // Desktop: select clicked tab
          }
          active={index === activeIndex}
          tone={tone}>
          <TabName active={index === activeIndex} tone={tone}>
            {item.title}
          </TabName>
        </Tab>
      );
    });
  }, [tabs, activeIndex, setActiveIndex, isMobile]);

  const progressBar = useMemo(() => {
    if (tabs.length <= 1) return 0;
    return ((activeIndex + 1) / tabs.length) * 100;
  }, [activeIndex, tabs.length]);

  return (
    <MainBlock>
      <Tabs
        ref={tabsContainerRef}
        progress={progressBar}
        tabsCount={tabs.length}
        activeIndex={activeIndex}
        tone={tone}
        scrollLeft={scrollLeft}>
        {tabsList}
      </Tabs>
    </MainBlock>
  );
}
