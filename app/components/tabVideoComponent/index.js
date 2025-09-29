import React, { useEffect, useRef } from 'react';
import { isEmpty } from '../../helpers/helpers';
import Image from 'next/image';

/**
 * TabVideoComponent renders video content with automatic play/pause functionality
 * @param {Object} imageUrl - Fallback image data with url property
 * @param {Object} videoUrl - Video data object containing either videoLink or video.url
 * @param {string} title - Title for the video element (accessibility)
 * @param {number} activeIndex - Current active tab index for intersection observer
 */
function TabVideoComponent({ imageUrl, videoUrl, title, activeIndex }) {
  // ref variables
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
  return (
    <>
      {videoUrl?.videoLink ? (
        <iframe
          width='1224'
          height='707'
          src={convertToEmbedUrl(videoUrl.videoLink)}
          allow='accelerometer; autoplay; loop; clipboard-write; encrypted-media; picture-in-picture; fullscreen'
          allowFullScreen
          title={title || 'Video'}
          loading='lazy'
        />
      ) : videoUrl?.video?.url ? (
        <video ref={videoRef} muted loop playsInline preload='metadata'>
          <source src={videoUrl?.video?.url} type='video/mp4' />
        </video>
      ) : (
        /* Fallback to image if no video available */
        !isEmpty(imageUrl) && <Image src={imageUrl.url} width={1224} height={827} className='image' alt='Section' />
      )}
    </>
  );
}

export default TabVideoComponent;
