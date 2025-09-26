'use client';
import { useEffect, useMemo, useRef, useState } from 'react';

export default function GhostGalleryComponent({ htmlString }) {
  const { images, chips } = useMemo(() => {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlString, 'text/html');
      const imgEls = Array.from(doc.querySelectorAll('.kg-gallery-image img'));
      const chipEls = Array.from(doc.querySelectorAll('figcaption .kg-chip'));
      const imgs = imgEls.map((img) => ({
        src: img.getAttribute('src') || '',
        alt: img.getAttribute('alt') || '',
        width: img.getAttribute('width'),
        height: img.getAttribute('height'),
        srcSet: img.getAttribute('srcset') || img.getAttribute('srcSet') || '',
        sizes: img.getAttribute('sizes') || ''
      }));
      const chps = chipEls.map((c) => c.textContent?.trim()).filter(Boolean);
      return { images: imgs, chips: chps };
    } catch (_e) {
      return { images: [], chips: [] };
    }
  }, [htmlString]);

  const [activeIndex, setActiveIndex] = useState(0);
  const chipRefs = useRef([]);
  const captionRef = useRef(null);
  const [loadedSet, setLoadedSet] = useState(new Set());

  useEffect(() => {
    const el = chipRefs.current?.[activeIndex];
    const container = captionRef.current;
    if (!el || !container) return;

    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const offsetLeftWithin = elRect.left - containerRect.left;
    const targetLeft = container.scrollLeft + offsetLeftWithin - (container.clientWidth - el.clientWidth) / 2;
    container.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
  }, [activeIndex, chips]);

  if (!images.length) {
    return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
  }

  const safeIndex = Math.min(activeIndex, images.length - 1);

  const activeWidth = Number(images[safeIndex]?.width) || null;
  const activeHeight = Number(images[safeIndex]?.height) || null;
  const activePaddingTop = activeWidth && activeHeight ? `${(activeHeight / activeWidth) * 100}%` : '56.25%';

  return (
    <figure className='kg-card kg-gallery-card kg-card-hascaption'>
      {chips.length ? (
        <figcaption
          ref={captionRef}
          style={{ display: 'flex', gap: '12px', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
          {chips.map((label, idx) => (
            <button
              key={`${label}-${idx}`}
              className={`kg-chip${idx === safeIndex ? ' active' : ''}`}
              ref={(el) => {
                chipRefs.current[idx] = el;
              }}
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(idx);
              }}>
              {label}
            </button>
          ))}
          <p />
        </figcaption>
      ) : null}
      <div className='kg-gallery-container'>
        <div className='kg-gallery-row'>
          <div className='kg-gallery-image' style={{ position: 'relative', width: '100%' }}>
            {/* Reserve height to prevent layout shift using aspect ratio of first image */}
            <div
              aria-hidden='true'
              style={{
                width: '100%',
                paddingTop: activePaddingTop
              }}
            />
            {images.map((img, idx) => {
              const isActive = idx === safeIndex;
              return (
                <img
                  key={img.src}
                  data-active={isActive}
                  src={img.src}
                  alt={img.alt}
                  width={img.width || undefined}
                  height={img.height || undefined}
                  srcSet={img.srcSet || undefined}
                  sizes={img.sizes || undefined}
                  loading='lazy'
                  onLoad={() => {
                    if (!loadedSet.has(img.src)) {
                      setLoadedSet((prev) => new Set(prev).add(img.src));
                    }
                  }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    opacity: isActive ? 1 : 0,
                    transition: 'opacity 300ms ease-in-out',
                    pointerEvents: isActive ? 'auto' : 'none'
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </figure>
  );
}
