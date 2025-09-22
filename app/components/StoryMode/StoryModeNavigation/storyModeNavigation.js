'use client';

import React, { useMemo, useEffect, useState, useRef, useId } from 'react';
import { MainBlock, Icon, Tabs, Tab, Numbers, TabName } from './styles';
import { useIsMobile } from '../../../hooks/useMobileDevice';
import { SectionTone } from '../../../constants/constant';

const AssemblyIcon = ({ progress, tone }) => {
  const step = progress * 3;

  const bottomFill = Math.min(step, 1);
  const middleFill = Math.max(Math.min(step - 1, 1), 0);
  const topFill = Math.max(Math.min(step - 2, 1), 0);

  const id = useId();

  return (
    <svg
      width='52'
      height='52'
      viewBox='0 0 52 52'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      style={{ borderRadius: 'var(--radius-4)' }}>
      <defs>
        <clipPath id={`${id}-bottom`}>
          <rect
            x='0'
            y={44 - bottomFill * 10}
            width='52'
            height={bottomFill * 10}
            style={{ transition: 'all 0.3s ease-in-out' }}
          />
        </clipPath>
        <clipPath id={`${id}-middle`}>
          <rect
            x='0'
            y={30 - middleFill * 10}
            width='52'
            height={middleFill * 10}
            style={{ transition: 'all 0.3s ease-in-out' }}
          />
        </clipPath>
        <clipPath id={`${id}-top`}>
          <rect
            x='0'
            y={16.4 - topFill * 10}
            width='52'
            height={topFill * 10}
            style={{ transition: 'all 0.3s ease-in-out' }}
          />
        </clipPath>
      </defs>
      <path
        d='M0 4C0 1.79086 1.79086 0 4 0H48C50.2091 0 52 1.79086 52 4V48C52 50.2091 50.2091 52 48 52H4C1.79086 52 0 50.2091 0 48V4Z'
        fill={
          tone === SectionTone.DARK
            ? 'var(--bg-card-dark-hover)'
            : tone === SectionTone.LIGHT
            ? 'var(--title)'
            : 'var(--title)'
        }
      />
      <path
        d='M43.9976 34.0059V40.0976C43.9976 42.2518 42.2516 43.9992 40.0977 43.9992H9.07457C8.11939 43.9992 7.6406 42.8435 8.31619 42.1678L15.5881 34.8963C16.1581 34.3263 16.932 34.0059 17.7384 34.0059H44H43.9976Z'
        fill='var(--text-secondary)'
      />
      <path
        d='M43.9976 34.0059V40.0976C43.9976 42.2518 42.2516 43.9992 40.0977 43.9992H9.07457C8.11939 43.9992 7.6406 42.8435 8.31619 42.1678L15.5881 34.8963C16.1581 34.3263 16.932 34.0059 17.7384 34.0059H44H43.9976Z'
        fill={tone === SectionTone.DARK ? 'var(--off-white-100)' : 'var(--gray-50)'}
        clipPath={`url(#${id}-bottom)`}
      />
      <path
        d='M43.9965 20.2461V26.3367C43.9965 28.4909 42.2506 30.2382 40.0954 30.2382H20.2441L29.346 21.1366C29.916 20.5665 30.6888 20.2461 31.4952 20.2461H43.9977H43.9965Z'
        fill='var(--text-secondary)'
      />
      <path
        d='M43.9965 20.2461V26.3367C43.9965 28.4909 42.2506 30.2382 40.0954 30.2382H20.2441L29.346 21.1366C29.916 20.5665 30.6888 20.2461 31.4952 20.2461H43.9977H43.9965Z'
        fill={tone === SectionTone.DARK ? 'var(--off-white-100)' : 'var(--gray-50)'}
        clipPath={`url(#${id}-middle)`}
      />
      <path
        d='M43.9973 9.07469V12.5778C43.9973 14.732 42.2514 16.4794 40.0962 16.4794H34.0039L42.1662 8.31622C42.8418 7.64056 43.9973 8.1194 43.9973 9.07469Z'
        fill='var(--text-secondary)'
      />
      <path
        d='M43.9973 9.07469V12.5778C43.9973 14.732 42.2514 16.4794 40.0962 16.4794H34.0039L42.1662 8.31622C42.8418 7.64056 43.9973 8.1194 43.9973 9.07469Z'
        fill={tone === SectionTone.DARK ? 'var(--off-white-100)' : 'var(--gray-50)'}
        clipPath={`url(#${id}-top)`}
      />
    </svg>
  );
};

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
          <Numbers>{(index + 1).toString().padStart(2, '0')}</Numbers>
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
      {/* Animated icon with gradient fill */}
      <Icon>
        <AssemblyIcon progress={progressBar / 100} tone={tone} />
      </Icon>

      {/* Tabs container */}
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
