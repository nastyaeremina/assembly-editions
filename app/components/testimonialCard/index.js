'use client';
import React from 'react';
import { Container } from '../../styles/commonStyles';
import CustomerTestimonial from '../customer/testimonials';

/**
 * TestimonialCard Wrapper
 * Forwards testimonial props and layout container to CustomerTestimonial
 * @param {string} logo - URL of the customer's logo
 * @param {string} body - Main testimonial body text
 * @param {string} slug - URL slug for the full case study
 * @param {Array} highlightsData - Array of highlights to display data
 * @param {string} banner - URL of the banner image
 * @param {boolean} [isStandardPage=false] - determine if it's a standard page
 * @param {boolean} [isFullWidth=false] - determine if it's the first card
 */
export default function TestimonialCard({
  logo,
  body,
  slug,
  highlightsData,
  banner,
  isStandardPage = false,
  isFullWidth = false
}) {
  return (
    <>
      <Container>
        <CustomerTestimonial
          logo={logo}
          banner={banner}
          body={body}
          highlightsData={highlightsData}
          slug={slug}
          isStandardPage={isStandardPage}
          isFullWidth={isFullWidth}
        />
      </Container>
    </>
  );
}
