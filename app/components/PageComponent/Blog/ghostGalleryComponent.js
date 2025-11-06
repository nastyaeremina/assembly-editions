'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import useMobileDevice from '../../../hooks/useMobileDevice';

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
  const [visibleChipCount, setVisibleChipCount] = useState(null);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const isMobile = useMobileDevice();
  const dropdownRef = useRef(null);

  // Calculate how many chips fit within the caption and show a trailing
  // "+N more" chip when they overflow. Recomputes on initial paint and on
  // container resize to keep the count accurate.
  useEffect(() => {
    // On tablet/mobile we do not truncate – show all chips
    if (isMobile) {
      setVisibleChipCount(chips?.length || 0);
      setShowMoreDropdown(false);
      return;
    }
    if (!chips?.length) {
      setVisibleChipCount(0);
      return;
    }

    const GAP_PX = 8; // keep in sync with inline style gap

    const measureMoreWidth = (n) => {
      const container = captionRef.current;
      if (!container) return 60;
      const el = document.createElement('button');
      el.className = 'kg-chip';
      el.textContent = `+${n} more`;
      container.appendChild(el);
      const w = el.offsetWidth || 60;
      container.removeChild(el);
      return w;
    };

    const compute = () => {
      const container = captionRef.current;
      if (!container) return;
      const containerWidth = container.clientWidth;
      const widths = chipRefs.current.map((el) => (el ? el.offsetWidth : 0));
      let used = 0;
      let visible = 0;
      for (let i = 0; i < widths.length; i++) {
        const chipWidth = widths[i];
        const gap = visible > 0 ? GAP_PX : 0;
        const remainingAfter = chips.length - (i + 1);
        const moreWidth = remainingAfter > 0 ? measureMoreWidth(remainingAfter) : 0;
        const moreGap = remainingAfter > 0 ? GAP_PX : 0;
        if (used + gap + chipWidth + moreGap + moreWidth <= containerWidth) {
          used += gap + chipWidth;
          visible += 1;
        } else {
          break;
        }
      }
      setVisibleChipCount(visible);
    };

    const id = requestAnimationFrame(compute);
    const ro = new ResizeObserver(() => compute());
    if (captionRef.current) ro.observe(captionRef.current);
    window.addEventListener('resize', compute);

    return () => {
      cancelAnimationFrame(id);
      try {
        if (captionRef.current) ro.unobserve(captionRef.current);
        ro.disconnect();
      } catch (_e) {}
      window.removeEventListener('resize', compute);
    };
  }, [chips, isMobile]);

  // Close dropdown on outside click or ESC
  useEffect(() => {
    if (!showMoreDropdown) return;
    const handleClick = (e) => {
      const withinCaption = captionRef.current && captionRef.current.contains(e.target);
      const withinDropdown = dropdownRef.current && dropdownRef.current.contains(e.target);
      if (!withinCaption && !withinDropdown) setShowMoreDropdown(false);
    };
    const handleKey = (e) => {
      if (e.key === 'Escape') setShowMoreDropdown(false);
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [showMoreDropdown]);

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
        <figcaption ref={captionRef}>
          {isMobile || (visibleChipCount ?? chips.length) >= chips.length ? (
            chips.map((label, idx) => (
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
            ))
          ) : (
            <>
              {chips.slice(0, visibleChipCount || 0).map((label, idx) => (
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
              {!isMobile && (
                <div style={{ position: 'relative', display: 'inline-flex' }}>
                  <button
                    className='kg-chip'
                    aria-haspopup='listbox'
                    aria-expanded={showMoreDropdown ? 'true' : 'false'}
                    onClick={(e) => {
                      e.preventDefault();
                      setShowMoreDropdown((s) => !s);
                    }}>
                    {`+${Math.max(0, chips.length - (visibleChipCount || 0))} more`}
                  </button>
                  {showMoreDropdown ? (
                    <div ref={dropdownRef} role='listbox' className='kg-chip-dropdown'>
                      {chips.slice(visibleChipCount || 0).map((label, idx) => {
                        const absoluteIndex = (visibleChipCount || 0) + idx;
                        return (
                          <button
                            key={`${label}-more-${idx}`}
                            role='option'
                            className='kg-chip'
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveIndex(absoluteIndex);
                              setShowMoreDropdown(false);
                            }}>
                            {label}
                          </button>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              )}
            </>
          )}
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
