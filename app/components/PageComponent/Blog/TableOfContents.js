'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { isEmpty } from '../../../helpers/helpers';
import { Table, TableHeading, TableContentWrapper, TOCDivider, ActiveBorder } from '../../../styles/blogstyles';
import BlogSidebarCTA from '../../../components/blogsidebarCTA/index';

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

export default function TableOfContents({
  htmlData,
  hasTopBar,
  ctaTitle,
  ctaDescription,
  shouldShowBlogCTA,
  sectionTitle,
  isFAQs = false,
  faqId = 'faqs',
  faqLabel = 'FAQ',
  isShowH2 = true,
  isShowH3 = false,
  externalLinks = {}
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemBorderRefs = useRef([]);

  // Extract all headings (H2, H3) and maintain their order
  const extractAllHeadings = (htmlData) => {
    if (isEmpty(htmlData)) return [];

    const headings = [];

    // Extract H2 headings
    if (isShowH2) {
      const h2Matches = htmlData.match(EXTRACT_H2_TAG_FROM_HTML_REGEX) || [];
      h2Matches.forEach((match) => {
        const headingList = match.split('>');
        const id = headingList[0]?.replace(/['"]+/g, '').replace('<h2 id=', '');
        const text = headingList[1];
        if (!isEmpty(text)) {
          headings.push({ id, text, level: 2, originalMatch: match });
        }
      });
    }

    // Extract H3 headings
    if (isShowH3) {
      const h3Matches = htmlData.match(EXTRACT_H3_TAG_FROM_HTML_REGEX) || [];
      h3Matches.forEach((match) => {
        const headingList = match.split('>');
        const id = headingList[0]?.replace(/['"]+/g, '').replace('<h3 id=', '');
        const text = headingList[1];
        if (!isEmpty(text)) {
          headings.push({ id, text, level: 3, originalMatch: match });
        }
      });
    }

    // Sort headings by their position in the HTML document
    return headings.sort((a, b) => {
      const aIndex = htmlData.indexOf(a.originalMatch);
      const bIndex = htmlData.indexOf(b.originalMatch);
      return aIndex - bIndex;
    });
  };

  // Direct scroll-based border positioning
  useEffect(() => {
    const handleScroll = () => {
      const headings = extractAllHeadings(htmlData);
      let newActiveIndex = 0;
      const offset = hasTopBar ? 200 : 160;
      let decided = false;

      for (let i = 0; i < headings.length; i++) {
        const el = document.getElementById(headings[i].id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();

        if (rect.top > offset) {
          newActiveIndex = Math.max(0, i - 1);
          decided = true;
          break;
        }
      }

      if (!decided && headings.length > 0) {
        newActiveIndex = headings.length - 1;
      }

      // If FAQ is enabled, consider it as an extra item at the end
      if (isFAQs) {
        const faqEl = document.getElementById(faqId);
        if (faqEl) {
          const faqRect = faqEl.getBoundingClientRect();
          if (faqRect.top <= offset) {
            newActiveIndex = headings.length; // FAQ item is rendered last
          }
        }
      }

      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasTopBar, activeIndex, isFAQs, faqId, htmlData, isShowH2, isShowH3]);

  // Immediate border positioning when activeIndex changes
  useEffect(() => {
    if (itemBorderRefs.current[activeIndex]) {
      const { offsetTop, offsetHeight } = itemBorderRefs.current[activeIndex];
      const activeBorder = document.getElementById('active-border');
      if (activeBorder) {
        activeBorder.style.top = `${offsetTop}px`;
        activeBorder.style.height = `${offsetHeight}px`;
      }
    }
  }, [activeIndex]);

  const renderTableData = () => {
    if (isEmpty(htmlData)) return null;

    const headings = extractAllHeadings(htmlData);
    if (isEmpty(headings) && !isFAQs) return null;

    return (
      <>
        {headings.map((heading, index) => {
          const isActive = index === activeIndex;
          const indentClass = `level-${heading.level}`;

          return (
            <li
              key={`tableDataHeading_index_${index}`}
              className={`${isActive ? 'active' : ''} ${indentClass}`}
              ref={(item) => {
                itemBorderRefs.current[index] = item;
              }}>
              <Link href={`#${heading.id}`} className={isActive ? 'active' : ''}>
                {heading.text}
              </Link>
            </li>
          );
        })}
        {isFAQs && (
          <li
            key={`tableDataHeading_faq`}
            className={`${activeIndex === headings.length ? 'active' : ''} level-2`}
            ref={(item) => {
              itemBorderRefs.current[headings.length] = item;
            }}>
            <Link href={`#${faqId}`} className={activeIndex === headings.length ? 'active' : ''}>
              {faqLabel}
            </Link>
          </li>
        )}
      </>
    );
  };

  return (
    <>
      <Table>
        {!isEmpty(sectionTitle) && <TableHeading>{sectionTitle}</TableHeading>}
        <TableContentWrapper>
          <TOCDivider />
          <ol>
            <ActiveBorder id='active-border' />
            {renderTableData()}
          </ol>
        </TableContentWrapper>
      </Table>
      {shouldShowBlogCTA && (
        <BlogSidebarCTA headerText={ctaTitle} bodyText={ctaDescription} externalLinks={externalLinks} />
      )}
    </>
  );
}
