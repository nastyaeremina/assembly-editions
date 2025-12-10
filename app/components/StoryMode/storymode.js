'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { MainBlock, NavigationWrapper, SectionWrapper, TabSection, ContentWrapper } from './styles';
import { Container } from '../../styles/commonStyles';
import { isEmpty } from '../../helpers/helpers';
import SectionHeader from '../sectionHeader/sectionHeader';
import StoryModeNavigation from './StoryModeNavigation/storyModeNavigation';
import GridItemSection from '../sectionComponent/gridSection/gridItemSection';

/**
 * StoryMode Component
 * Shows all tab contents stacked vertically with sticky navigation
 * Click tab to scroll to section, scroll to update active tab
 */
export default function StoryMode({ tabsData, tone }) {
  if (isEmpty(tabsData)) return null;
  // State for active tab and sticky positioning
  const [activeIndex, setActiveIndex] = useState(0);
  const [stickyTop, setStickyTop] = useState(0);

  // Refs to track each section's position
  const sectionRefs = useRef([]);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Intersection Observer for automatic play/pause
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is in viewport - play it
            videoElement.play().catch((error) => {
              console.log('Autoplay prevented:', error);
            });
          } else {
            // Video is out of viewport - pause it
            videoElement.pause();
          }
        });
      },
      {
        threshold: 0.2, // Play when 20% of video is visible
        rootMargin: '0px 0px -10% 0px' // Start playing slightly before fully visible
      }
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, [activeIndex]);

  const convertToEmbedUrl = (url) => {
    if (!url) return '';

    // Converts to embed format with autoplay, loop, and muted parameters for seamless autoplay
    if (url.includes('youtu.be/')) {
      const videoId = url.match(/youtu\.be\/([^?&]+)/)?.[1];
      if (videoId) {
        const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&mute=1&playlist=${videoId}&controls=0&showinfo=0&rel=0`;
        return embedUrl;
      }
    }

    // Simple replacement to convert to embed format with autoplay parameters
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.match(/v=([^&]+)/)?.[1];
      const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&mute=1&playlist=${videoId}&controls=0&showinfo=0&rel=0`;
      return embedUrl;
    }

    // Return as-is if already in embed format
    if (url.includes('youtube.com/embed/')) {
      return url;
    }

    // Return original URL if no match found
    return url;
  };

  // Memoized sections to prevent unnecessary re-renders
  const renderedSections = useMemo(
    () =>
      tabsData.map((tabData, sectionIndex) => {
        return (
          // Each section with ref for scroll detection
          <TabSection key={sectionIndex} ref={(el) => (sectionRefs.current[sectionIndex] = el)}>
            {/* Section Title and Description */}
            <SectionHeader
              title={tabData.subTitle}
              description={tabData.description}
              primaryButtonLink={tabData.primaryButtonLink}
              primaryButtonText={tabData.primaryButtonText}
              secondaryButtonLink={tabData.secondaryButtonLink}
              secondaryButtonText={tabData.secondaryButtonText}
              tone={tone}
            />

            {/* Section Image and Quote */}
            <GridItemSection
              quoteBlock={tabData.quoteBlock}
              imageUrl={tabData.image}
              mobileImageUrl={tabData.mobileImage}
              videoUrl={tabData.video}
              title={tabData.title}
              tone={tone}
              link={tabData.link}
            />
          </TabSection>
        );
      }),
    [tabsData]
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

  const [isUserSelecting, setIsUserSelecting] = useState(false);

  const scrollToSection = useCallback(
    (index) => {
      setActiveIndex(index); // Immediately show the tab as active
      setIsUserSelecting(true);
      if (index >= 0 && index < sectionRefs.current.length && sectionRefs.current[index]) {
        const elementTop = sectionRefs.current[index].offsetTop;
        window.scrollTo({
          top: elementTop - stickyTop - 120,
          behavior: 'smooth'
        });
      }
      // Clear isUserSelecting after scroll is expected to complete:
      setTimeout(() => setIsUserSelecting(false), 500); // Adjust duration as needed
    },
    [stickyTop]
  );

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
      if (isUserSelecting) return;
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
    <MainBlock tone={tone}>
      <Container>
        <ContentWrapper>
          {/* Sticky Navigation - stays at top when scrolling */}
          <NavigationWrapper style={{ top: `${stickyTop}px` }} tone={tone}>
            <StoryModeNavigation
              tabs={tabsData}
              activeIndex={activeIndex}
              tone={tone}
              setActiveIndex={(index) => scrollToSection(index)}
            />
          </NavigationWrapper>

          {/* All sections stacked vertically */}
          <SectionWrapper>{renderedSections}</SectionWrapper>
        </ContentWrapper>
      </Container>
    </MainBlock>
  );
}
