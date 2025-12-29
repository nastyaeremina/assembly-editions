'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { isEmpty } from '../../../helpers/helpers';
import { Table, TableHeading, TableContentWrapper, TOCDivider, ActiveBorder } from '../../../styles/blogstyles';
import BlogSidebarCTA from '../../../components/blogsidebarCTA/index';
import useNavbarHeight from '../../../hooks/useNavbarHeight';

/**
 *
 * @param {htmlData} htmlData - item of jump to section
 * @param {hasTopBar} hasTopBar - check if top bar(announcement bar) is visible
 * @param {ctaTitle} ctaTitle - title of cta(bottom of cta section)
 * @param {ctaDescription} ctaDescription - description of cta(bottom of cta section)
 * @param {shouldShowBlogCTA} shouldShowBlogCTA - check if blog cta should be shown at bottom of jump to section
 * @param {sectionTitle} sectionTitle - title of jump to section
 */

// Regex patterns for different heading levels
const EXTRACT_H2_TAG_FROM_HTML_REGEX = /(?:<h2 id\=\s*)\S.*?(?=\s*<\/h2|$)/gs;
const EXTRACT_H3_TAG_FROM_HTML_REGEX = /(?:<h3 id\=\s*)\S.*?(?=\s*<\/h3|$)/gs;
const EXTRACT_H4_TAG_FROM_HTML_REGEX = /(?:<h4 id\=\s*)\S.*?(?=\s*<\/h4|$)/gs;

export default function TableOfContents({
  htmlData,
  hasTopBar = false,
  ctaTitle,
  ctaDescription,
  shouldShowBlogCTA,
  sectionTitle,
  isFAQs = false,
  faqId = 'faqs',
  faqLabel = 'FAQ',
  isShowH2 = true,
  isShowH3 = false,
  isShowH4 = false,
  externalLinks = {}
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxHeight, setMaxHeight] = useState('0px');
  const itemBorderRefs = useRef([]);
  const listRef = useRef(null); // <ol> reference to enable scrollIntoView on the correct container
  const containerRef = useRef(null);
  const observerRef = useRef(null);
  const { totalHeight } = useNavbarHeight();

  // Extract headings function (returns sorted array)
  const extractAllHeadings = (html) => {
    if (isEmpty(html)) return [];

    const headings = [];

    if (isShowH2) {
      const h2Matches = html.match(EXTRACT_H2_TAG_FROM_HTML_REGEX) || [];
      h2Matches.forEach((match) => {
        const parts = match.split('>');
        const id = (parts[0] || '').replace(/['"]+/g, '').replace('<h2 id=', '').trim();
        const text = parts[1] || '';
        if (!isEmpty(text)) headings.push({ id, text, level: 2, originalMatch: match });
      });
    }

    if (isShowH3) {
      const h3Matches = html.match(EXTRACT_H3_TAG_FROM_HTML_REGEX) || [];
      h3Matches.forEach((match) => {
        const parts = match.split('>');
        const id = (parts[0] || '').replace(/['"]+/g, '').replace('<h3 id=', '').trim();
        const text = parts[1] || '';
        if (!isEmpty(text)) headings.push({ id, text, level: 3, originalMatch: match });
      });
    }

    if (isShowH4) {
      const h4Matches = html.match(EXTRACT_H4_TAG_FROM_HTML_REGEX) || [];
      h4Matches.forEach((match) => {
        const parts = match.split('>');
        const id = (parts[0] || '').replace(/['"]+/g, '').replace('<h4 id=', '').trim();
        const text = parts[1] || '';
        if (!isEmpty(text)) headings.push({ id, text, level: 4, originalMatch: match });
      });
    }

    return headings.sort((a, b) => {
      return html.indexOf(a.originalMatch) - html.indexOf(b.originalMatch);
    });
  };

  // IntersectionObserver + bottom-of-page fallback setup
  useEffect(() => {
    const headings = extractAllHeadings(htmlData);
    const ids = headings.map((h) => h.id);
    if (isFAQs) ids.push(faqId);

    const offset = hasTopBar ? 200 : 160;
    let isInitialized = false;

    const observeSections = () => {
      const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
      if (!sections.length) {
        setTimeout(observeSections, 100);
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          // Skip the first observation to allow initial state to be set
          if (!isInitialized) {
            isInitialized = true;
            return;
          }

          // filter visible entries
          const visible = entries.filter((e) => e.isIntersecting);

          if (visible.length > 0) {
            // pick the one closest to top of viewport
            const closest = visible.reduce((a, b) => {
              return Math.abs(a.boundingClientRect.top - offset) < Math.abs(b.boundingClientRect.top - offset) ? a : b;
            });
            const idx = ids.findIndex((id) => id === closest.target.id);
            if (idx !== -1) setActiveIndex(idx);
          } else {
            // fallback: pick nearest by distance to offset
            let nearestIdx = 0;
            let minDist = Infinity;
            ids.forEach((id, i) => {
              const el = document.getElementById(id);
              if (!el) return;
              const dist = Math.abs(el.getBoundingClientRect().top - offset);
              if (dist < minDist) {
                minDist = dist;
                nearestIdx = i;
              }
            });
            setActiveIndex(nearestIdx);
          }
        },
        {
          root: null,
          rootMargin: `-${offset}px 0px -50% 0px`,
          threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
        }
      );

      sections.forEach((s) => observer.observe(s));
      observerRef.current = observer;
    };

    observeSections();

    return () => {
      if (observerRef.current && observerRef.current.disconnect) observerRef.current.disconnect();
    };
  }, [htmlData, hasTopBar, isFAQs, faqId, isShowH2, isShowH3, isShowH4]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const headings = extractAllHeadings(htmlData);
    const ids = headings.map((h) => h.id);
    if (isFAQs) ids.push(faqId);

    // Initialize with first item active on page load
    setActiveIndex(0);

    const handleScroll = () => {
      const scrollBottom = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      const offset = hasTopBar ? 200 : 160;

      // bottom-of-page: force last
      if (scrollBottom >= pageHeight - 5) {
        setActiveIndex(ids.length - 1);
        return;
      }

      // general case: pick nearest section to the offset
      let nearestIdx = 0;
      let minDist = Infinity;
      ids.forEach((id, i) => {
        const el = document.getElementById(id);
        if (!el) return;
        const dist = Math.abs(el.getBoundingClientRect().top - offset);
        if (dist < minDist) {
          minDist = dist;
          nearestIdx = i;
        }
      });
      setActiveIndex(nearestIdx);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Add a small delay before running handleScroll to ensure DOM is ready
    // and give time for the initial active state to be set
    const timeoutId = setTimeout(() => {
      handleScroll();
    }, 100);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      clearTimeout(timeoutId);
    };
  }, [htmlData, hasTopBar, isFAQs, faqId]);

  // Update active border position immediately when activeIndex changes
  useEffect(() => {
    const el = itemBorderRefs.current[activeIndex];
    const activeBorder = document.getElementById('active-border');
    if (el && activeBorder) {
      // Position relative to the same scrolling container (<ol>)
      activeBorder.style.top = `${el.offsetTop}px`;
      activeBorder.style.height = `${el.offsetHeight}px`;

      // Ensure the active item is visible within the nearest scrollable ancestor
      try {
        el.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      } catch (error) {
        console.error(error);
      }
    }
  }, [activeIndex]);

  // Click handler for anchors (prevents default jump, does smooth scroll & sets active)
  const handleClick = (e, id, index) => {
    if (typeof window === 'undefined') return;
    e.preventDefault();
    const el = document.getElementById(id);
    const offset = hasTopBar ? 200 : 160;
    if (!el) return;
    // pushState to update URL hash without browser automatic jump
    if (window.history && window.history.pushState) {
      window.history.pushState(null, '', `#${id}`);
    } else {
      window.location.hash = `#${id}`;
    }
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top });
    setActiveIndex(index);
  };

  // Calculate and set max height based on viewport, navbar height, and CTA section
  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    const calculateMaxHeight = () => {
      // Get CTA section height if visible
      const ctaSection = document.querySelector('.blog-cta-section');
      const ctaHeight = ctaSection && shouldShowBlogCTA ? ctaSection.offsetHeight : 0;

      // Calculate available height with dynamic gap based on CTA visibility
      const gap = shouldShowBlogCTA ? '56px' : '36px';
      const calculatedHeight = `calc(100dvh - ${totalHeight}px - ${ctaHeight}px - ${gap} - 40px)`;

      setMaxHeight(calculatedHeight);
    };

    // Initial calculation
    calculateMaxHeight();

    // Recalculate on window resize
    window.addEventListener('resize', calculateMaxHeight);
    return () => window.removeEventListener('resize', calculateMaxHeight);
  }, [totalHeight, shouldShowBlogCTA]);

  const renderTableData = () => {
    const headings = extractAllHeadings(htmlData);
    if (isEmpty(headings) && !isFAQs) return null;

    return (
      <>
        {headings.map((heading, index) => {
          const isActive = index === activeIndex;
          return (
            <li
              key={`toc_heading_${index}`}
              className={`${isActive ? 'active' : ''} level-${heading.level}`}
              ref={(el) => {
                itemBorderRefs.current[index] = el;
              }}>
              {/* use anchor + preventDefault to control smooth scroll */}
              <Link
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading.id, index)}
                className={isActive ? 'active' : ''}>
                {heading.text}
              </Link>
            </li>
          );
        })}

        {isFAQs && (
          <li
            key='toc_faq'
            className={`${activeIndex === headings.length ? 'active' : ''} level-2`}
            ref={(el) => {
              itemBorderRefs.current[headings.length] = el;
            }}>
            <Link
              href={`#${faqId}`}
              onClick={(e) => {
                // force FAQ active
                handleClick(e, faqId, headings.length);
              }}
              className={activeIndex === headings.length ? 'active' : ''}>
              {faqLabel}
            </Link>
          </li>
        )}
      </>
    );
  };

  return (
    <>
      {shouldShowBlogCTA && (
        <BlogSidebarCTA headerText={ctaTitle} bodyText={ctaDescription} externalLinks={externalLinks} />
      )}
      <Table ref={containerRef}>
        {!isEmpty(sectionTitle) && <TableHeading>{sectionTitle}</TableHeading>}
        {!isEmpty(htmlData) && (
          <TableContentWrapper style={{ maxHeight: maxHeight }}>
            <TOCDivider />
            <ol ref={listRef}>
              <ActiveBorder id='active-border' />
              {renderTableData()}
            </ol>
          </TableContentWrapper>
        )}
      </Table>
    </>
  );
}
