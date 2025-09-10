'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  BottomSection,
  LeftImage,
  MainBlock,
  NavigationWrapper,
  SectionWrapper,
  TabSection,
  ContentWrapper
} from './styles';
import { Container } from '../../styles/commonStyles';
import Image from 'next/image';
import { isEmpty } from '../../helpers/helpers';
import { SectionTone } from '../../constants/constant';
import useMobileDevice from '../../hooks/useMobileDevice';
import SectionHeader from '../sectionHeader/sectionHeader';
import QuoteSectionComponent from '../quoteSection/quoteSection';
import StoryModeNavigation from './StoryModeNavigation/storyModeNavigation';

/**
 * StoryMode Component
 * Shows all tab contents stacked vertically with sticky navigation
 * Click tab to scroll to section, scroll to update active tab
 */
export default function StoryMode({ tabsData }) {
  // State for active tab and sticky positioning
  const [activeIndex, setActiveIndex] = useState(0);
  const [stickyTop, setStickyTop] = useState(0);

  // Refs to track each section's position
  const sectionRefs = useRef([]);

  // Check if device is mobile for responsive buttons
  const isMobile = useMobileDevice();

  // Memoized sections to prevent unnecessary re-renders
  const renderedSections = useMemo(
    () =>
      tabsData.map((tabData, sectionIndex) => {
        return (
          // Each section with ref for scroll detection
          <TabSection key={sectionIndex} ref={(el) => (sectionRefs.current[sectionIndex] = el)}>
            {/* Section Title and Description */}
            <SectionHeader
              title={tabData.title}
              description={tabData.description}
              primaryButtonLink={tabData.primaryButtonLink}
              primaryButtonText={tabData.primaryButtonText}
              secondaryButtonLink={tabData.secondaryButtonLink}
              secondaryButtonText={tabData.secondaryButtonText}
              tone={SectionTone.DARK}
            />

            {/* Section Image and Quote */}
            <BottomSection>
              <LeftImage>
                <Image
                  src={tabData.storyModeImage.url}
                  alt={tabData.storyModeImage.alt}
                  width={877}
                  height={827}
                  className='image'
                />
              </LeftImage>

              {/* Testimonial Quote */}
              {!isEmpty(tabData.quoteData) && (
                <QuoteSectionComponent
                  tone={SectionTone.DARK}
                  imageSrc={tabData.quoteData.imageSrc}
                  name={tabData.quoteData.name}
                  companyName={tabData.quoteData.companyName}
                  description={tabData.quoteData.description}
                  linkHref={tabData.quoteData.linkHref}
                />
              )}
            </BottomSection>
          </TabSection>
        );
      }),
    [tabsData, isMobile]
  );

  // Calculate navbar height for sticky positioning
  useEffect(() => {
    const updateHeight = () => {
      // Find navbar and topbar elements
      const navbar = document.querySelector('[data-navbar="true"]');
      const topbar = document.querySelector('[data-topbar="true"]');

      // Calculate total height needed for sticky positioning
      const totalHeight = (navbar?.offsetHeight || 0) + (topbar?.offsetHeight || 0);
      setStickyTop(totalHeight);
    };

    // Initial calculation
    updateHeight();

    // Update on window resize
    window.addEventListener('resize', updateHeight);

    // Cleanup event listener
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Scroll to specific section when tab is clicked
  const scrollToSection = (index) => {
    if (index >= 0 && index < sectionRefs.current.length && sectionRefs.current[index]) {
      const elementTop = sectionRefs.current[index].offsetTop;

      // Scroll to section with proper offset for sticky navigation and smooth behavior
      window.scrollTo({
        top: elementTop - stickyTop - 120
      });
    }
  };

  // Update active tab based on current scroll position
  useEffect(() => {
    let scrollTimeout;
    let rafId = null;

    const handleScroll = () => {
      // Use requestAnimationFrame for smooth updates during fast scrolling
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        updateActiveTab();
      });

      // Clear previous timeout to debounce scroll events
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        updateActiveTab();
      }, 16); // Reduced to ~60fps for smoother updates
    };

    const updateActiveTab = () => {
      // Calculate current scroll position with offset
      const scrollPosition = window.scrollY + stickyTop + 150;

      // Check which section is currently visible
      for (let sectionIndex = 0; sectionIndex < sectionRefs.current.length; sectionIndex++) {
        const currentSection = sectionRefs.current[sectionIndex];
        if (currentSection) {
          const sectionTop = currentSection.offsetTop;
          const sectionBottom = sectionTop + currentSection.offsetHeight;

          // If scroll position is within this section, make it active
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            if (sectionIndex !== activeIndex) {
              setActiveIndex(sectionIndex);
            }
            break;
          }
        }
      }
    };

    // Add scroll event listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup event listener and timeout
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [stickyTop, tabsData, activeIndex]);

  return (
    <MainBlock>
      <Container>
        <ContentWrapper>
          {/* Sticky Navigation - stays at top when scrolling */}
          <NavigationWrapper style={{ top: `${stickyTop}px` }}>
            <StoryModeNavigation
              tabs={tabsData}
              activeIndex={activeIndex}
              setActiveIndex={(index) => {
                setActiveIndex(index);
                scrollToSection(index); // Scroll to section when tab clicked
              }}
            />
          </NavigationWrapper>

          {/* All sections stacked vertically */}
          <SectionWrapper>{renderedSections}</SectionWrapper>
        </ContentWrapper>
      </Container>
    </MainBlock>
  );
}
