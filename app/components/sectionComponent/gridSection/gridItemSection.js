import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { isEmpty } from '../../../helpers/helpers';
import QuoteSectionComponent from '../../quoteSection/quoteSection';
import { GridItemSectionWrapper, VideoWrapper } from '../style';

/**
 * GridItemSection component for displaying tab content with videos, images, and quote blocks
 * @param {Array} tabItems - Array of tab items containing video, image, and quote data
 * @param {number} activeIndex - Index of the currently active tab
 * @param {string} tone - Theme tone (light/dark) for styling
 * @param {string} link - Link URL for quote block
 */
function GridItemSection({ tabItems, activeIndex, tone, link }) {
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
  }, [activeIndex]); // Re-run when active tab changes

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

  return (
    <>
      {/* Map through all tab items and render them */}
      {tabItems.map((tabItem, index) => {
        return (
          <GridItemSectionWrapper
            key={index}
            isActive={index === activeIndex}
            data-active={index === activeIndex}
            hasQuoteBlock={!isEmpty(tabItem.quoteBlock)}
            tone={tone}>
            {/* Render video content if video URL exists */}
            {tabItem.video?.videoLink ? (
              <>
                <iframe
                  width='1224'
                  height='707'
                  src={convertToEmbedUrl(tabItem.video.videoLink)}
                  allow='accelerometer; autoplay; loop; clipboard-write; encrypted-media; picture-in-picture; fullscreen'
                  allowFullScreen
                  title={tabItem.title || 'Video'}
                  loading='lazy'
                />
              </>
            ) : tabItem.video?.video?.url ? (
              <>
                <video ref={videoRef} muted loop playsInline preload='metadata'>
                  <source src={tabItem.video?.video?.url} type='video/mp4' />
                </video>
              </>
            ) : (
              /* Fallback to image if no video available */
              !isEmpty(tabItem.image) && (
                <Image src={tabItem.image.url} width={877} height={827} className='image' alt='Section' />
              )
            )}

            {/* Render quote block if available */}
            {!isEmpty(tabItem.quoteBlock) && (
              <QuoteSectionComponent
                tone={tone}
                imageSrc={tabItem.quoteBlock.image?.url}
                name={tabItem.quoteBlock.name}
                role={tabItem.quoteBlock.role}
                description={tabItem.quoteBlock.quoteNew}
                link={link}
              />
            )}
          </GridItemSectionWrapper>
        );
      })}
    </>
  );
}

export default GridItemSection;
