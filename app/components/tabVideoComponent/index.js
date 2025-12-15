import React, { useCallback, useEffect, useRef } from 'react';
import { isEmpty } from '../../helpers/helpers';
import Image from 'next/image';

/**
 * TabVideoComponent renders video content with automatic play/pause functionality
 * @param {Object} imageUrl - Fallback image data with url property
 * @param {Object} mobileImageUrl - Mobile fallback image data with url property
 * @param {Object} videoUrl - Video data object containing either videoLink or video.url
 * @param {string} title - Title for the video element (accessibility)
 * @param {number} activeIndex - Current active tab index for intersection observer
 */
function TabVideoComponent({ imageUrl, videoUrl, title, activeIndex, mobileImageUrl }) {
  // ref variables
  const videoRef = useRef(null);
  const playKickoffTimeoutRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    // Ensure iOS autoplay prerequisites are present at runtime
    videoElement.muted = true;
    videoElement.setAttribute('muted', '');
    videoElement.setAttribute('playsinline', '');
    videoElement.setAttribute('webkit-playsinline', '');
    videoElement.setAttribute('autoplay', '');

    // Intersection Observer for automatic play/pause
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is in viewport - play it
            const tryPlay = () => {
              videoElement.play().catch(() => {
                // Some iOS versions need a slight delay before play
                if (playKickoffTimeoutRef.current) clearTimeout(playKickoffTimeoutRef.current);
                playKickoffTimeoutRef.current = setTimeout(() => {
                  videoElement.play().catch(() => {});
                }, 120);
              });
            };

            // If metadata already loaded, try immediately; otherwise wait for canplay
            if (videoElement.readyState >= 2) {
              tryPlay();
            } else {
              const onCanPlay = () => {
                tryPlay();
                videoElement.removeEventListener('canplay', onCanPlay);
              };
              videoElement.addEventListener('canplay', onCanPlay, { once: true });
            }
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

    // If already visible on mount, attempt to kick off playback
    const rect = videoElement.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const visibleHeight = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
    const visibilityRatio = rect.height > 0 ? visibleHeight / rect.height : 0;
    if (visibilityRatio >= 0.2) {
      const tryImmediatePlay = () => videoElement.play().catch(() => {});
      if (videoElement.readyState >= 2) {
        tryImmediatePlay();
      } else {
        const onCanPlayImmediate = () => {
          tryImmediatePlay();
          videoElement.removeEventListener('canplay', onCanPlayImmediate);
        };
        videoElement.addEventListener('canplay', onCanPlayImmediate, { once: true });
      }
    }

    // User gesture fallback for stubborn iOS autoplay cases
    const onFirstInteraction = () => {
      videoElement.play().catch(() => {});
    };
    window.addEventListener('touchstart', onFirstInteraction, { once: true, passive: true });
    window.addEventListener('click', onFirstInteraction, { once: true });

    return () => {
      observer.disconnect();
      if (playKickoffTimeoutRef.current) clearTimeout(playKickoffTimeoutRef.current);
      window.removeEventListener('touchstart', onFirstInteraction);
      window.removeEventListener('click', onFirstInteraction);
    };
  }, [activeIndex]);

  const convertToEmbedUrl = useCallback((url) => {
    if (!url) return '';

    // Converts to embed format with autoplay, loop, and muted parameters for seamless autoplay
    if (url.includes('youtu.be/')) {
      const videoId = url.match(/youtu\.be\/([^?&]+)/)?.[1];
      if (videoId) {
        const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&loop=1&mute=1&playlist=${videoId}&controls=0&showinfo=0&rel=0`;
        return embedUrl;
      }
    }

    // Simple replacement to convert to embed format with autoplay parameters
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.match(/v=([^&]+)/)?.[1];
      const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&loop=1&mute=1&playlist=${videoId}&controls=0&showinfo=0&rel=0`;
      return embedUrl;
    }

    // Return as-is if already in embed format
    if (url.includes('youtube.com/embed/')) {
      // ensure autoplay/mute parameters for faster start
      const hasQuery = url.includes('?');
      const autoplayParams = 'autoplay=0&loop=1&mute=1&controls=0&rel=0';
      return hasQuery ? `${url}&${autoplayParams}` : `${url}?${autoplayParams}`;
    }

    // Return original URL if no match found
    return url;
  }, []);

  return (
    <>
      {videoUrl?.videoLink ? (
        <iframe
          width='1224'
          height='707'
          src={convertToEmbedUrl(videoUrl.videoLink)}
          allow='accelerometer; loop; clipboard-write; encrypted-media; picture-in-picture; fullscreen'
          allowFullScreen
          title={title || 'Video'}
          loading='lazy'
          fetchPriority='low'
        />
      ) : videoUrl?.video?.url ? (
        <video ref={videoRef} muted loop playsInline preload='metadata' autoPlay>
          <source src={videoUrl?.video?.url} type='video/mp4' />
        </video>
      ) : (
        <>
          {/* Mobile Image (render only if exists) */}
          {!isEmpty(mobileImageUrl) && (
            <div className='mobile-image-container'>
              <Image
                src={mobileImageUrl.url}
                width={600}
                height={600}
                className='mobile-image'
                alt='Section'
                priority
              />
            </div>
          )}

          {/* Desktop Image (always render) */}
          {!isEmpty(imageUrl) && (
            <div className='desktop-image-container'>
              <Image src={imageUrl.url} width={1224} height={827} className='image' alt='Section' priority />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default TabVideoComponent;
