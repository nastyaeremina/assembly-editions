'use client';
import React, { useMemo, useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { convertHighlights, isEmpty } from '../../helpers/helpers';
import { Detail, LastDroplist, LeftCard, Percentage, RightCard, Section, TestimonialCard, Top } from './styles';
import ReactMarkdown from 'react-markdown';
import LinkComponent from '../linkComponent/linkComponent';
import { LinkSize } from '../../constants/constant';
import { VisitSite } from '../../styles/customerstyles';
import SVGComponent from '../../../public/images/svg/SVGComponent';

/**
 * CustomerTestimonial Component
 * @param {string} props.logo - URL of the customer's logo
 * @param {string} props.body - Main testimonial body text
 * @param {string} props.slug - URL slug for the full case study
 * @param {Array} props.highlightsData - Array of highlights to display data
 * @param {string} props.banner - URL of the banner image
 * @param {boolean} [props.isStandardPage=false] - determine if it's a standard page
 * @param {boolean} [props.isFullWidth=false] - determine if it's the first card
 */
export default function CustomerTestimonial({
  logo,
  body,
  slug,
  highlightsData,
  banner,
  isStandardPage = false,
  isFullWidth = false
}) {
  const renderHighlightView = useMemo(() => {
    const newList = convertHighlights(highlightsData);

    if (isEmpty(newList)) return null;
    return (
      <Percentage>
        {newList?.map((item, index) => {
          return (
            <Section key={`highlight_index_${index}`}>
              <span>{item?.title}</span>
              <p>{item?.desc}</p>
            </Section>
          );
        })}
      </Percentage>
    );
  }, [highlightsData]);

  return (
    <TestimonialCard isStandardPage={isStandardPage} isFullWidth={isFullWidth} href={`/customers/${slug}`}>
      <LeftCard isFullWidth={isFullWidth}>
        <Top>
          <Image src={logo} alt='customer' width={218} height={50} className='top-logo' />
          <Detail isFullWidth={isFullWidth}>
            <ReactMarkdown>{body}</ReactMarkdown>
          </Detail>
          {!isEmpty(highlightsData) && renderHighlightView}
        </Top>
        <VisitSite>
          Read client story
          <SVGComponent name='blog-card-hover-arrow-icon' width='16' height='16' viewBox='0 0 16 16' />
        </VisitSite>
      </LeftCard>
      <RightCard isFullWidth={isFullWidth}>
        <Image src={banner} alt='customer' className='right' width={405} height={407} />
      </RightCard>
    </TestimonialCard>
  );
}
