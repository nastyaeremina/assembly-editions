'use client';
import React, { useMemo } from 'react';
import Image from 'next/image';
import { convertHighlights, isEmpty } from '../../helpers/helpers';
import { Container } from '../../styles/commonStyles';
import { Detail, Last, LastDroplist, LeftCard, Percentage, RightCard, Section, TestimonialCard, Top } from './styles';

/**
 * CustomerTestimonial Component
 * @param {string} props.logo - URL of the customer's logo
 * @param {string} props.body - Main testimonial body text
 * @param {string} props.slug - URL slug for the full case study
 * @param {Array} props.highlightsData - Array of highlights to display data
 * @param {string} props.banner - URL of the banner image
 * @param {boolean} [props.isStandardPage=false] - determine if it's a standard page
 */
export default function CustomerTestimonial({ logo, body, slug, highlightsData, banner, isStandardPage = false }) {
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
    <Container>
      <TestimonialCard isStandardPage={isStandardPage}>
        <LeftCard>
          <Top>
            <Image src={logo} alt='customer' width={218} height={50} className='top-logo' />
            <Detail>{body}</Detail>
            {!isEmpty(highlightsData) && renderHighlightView}
          </Top>
          <LastDroplist>
            <Last className='icon-link'>
              <a href={`/customers/${slug}`} className='learn-link mb0'>
                View full case study
                <svg width='16' height='12' viewBox='0 0 16 12' fill='none' class='HoverArrow'>
                  <path
                    d='M5.7998 1.37109L10.4283 5.99958L5.7998 10.6281'
                    stroke-width='1.92854'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='HoverArrow__tipPath'
                  />
                  <path
                    d='M10.33 5.99951H1.5'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    class='HoverArrow__linePath'
                  />
                </svg>
              </a>
            </Last>
          </LastDroplist>
        </LeftCard>
        <RightCard>
          <Image src={banner} alt='customer' className='right' width={405} height={407} />
        </RightCard>
      </TestimonialCard>
    </Container>
  );
}
