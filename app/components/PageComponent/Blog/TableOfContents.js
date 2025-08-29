'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { isEmpty } from '../../../helpers/helpers';
import { EXTRACT_H2_TAG_FROM_HTML_REGEX } from '../../../constants/constant';
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
 * @returns
 */

export default function TableOfContents({
  htmlData,
  hasTopBar,
  ctaTitle,
  ctaDescription,
  shouldShowBlogCTA,
  sectionTitle
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemBorderRefs = useRef([]);

  // Direct scroll-based border positioning
  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll('h2[id]');
      let newActiveIndex = 0;

      for (let i = 0; i < headings.length; i++) {
        const heading = headings[i];
        const rect = heading.getBoundingClientRect();

        // Check if heading is in view (with offset for header)
        if (rect.top <= (hasTopBar ? 200 : 160)) {
          newActiveIndex = i;
        }
      }

      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasTopBar, activeIndex]);

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
    const newList = htmlData?.match(EXTRACT_H2_TAG_FROM_HTML_REGEX);
    if (isEmpty(newList)) return null;

    return newList?.map((item, index) => {
      const headingList = item?.split('>');
      const id = `${headingList?.[0]?.replace(/['"]+/g, '').replace('<h2 id=', '')}`;
      const isActive = index === activeIndex;

      return (
        !isEmpty(headingList?.[1]) && (
          <li
            key={`tableDataHeading_index_${index}`}
            className={isActive ? 'active' : ''}
            ref={(item) => {
              itemBorderRefs.current[index] = item;
            }}>
            <Link href={`#${id}`} className={isActive ? 'active' : ''}>
              {headingList?.[1]}
            </Link>
          </li>
        )
      );
    });
  };

  return (
    <>
      <Table>
        <TableHeading>{sectionTitle}</TableHeading>
        <TableContentWrapper>
          <TOCDivider />
          <ol>
            <ActiveBorder id='active-border' />
            {renderTableData()}
          </ol>
        </TableContentWrapper>
      </Table>
      {shouldShowBlogCTA && <BlogSidebarCTA headerText={ctaTitle} bodyText={ctaDescription} />}
    </>
  );
}
