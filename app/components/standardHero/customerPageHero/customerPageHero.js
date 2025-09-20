'use client';
import React from 'react';
import { Container } from '../../../styles/commonStyles';
import { HeroHeading, HeroSection, Para } from '../../../styles/customerstyles';
import Image from 'next/image';
import ButtonV2Component from '../../button/buttonV2/buttonV2';
import { isEmpty } from '../../../helpers/helpers';

/**
 * CustomerPageHero Component
 * @param {Object} props - Component props
 * @param {string} props.image - The URL of the hero image.
 * @param {string} props.title - The main heading title of the hero section.
 * @param {string} props.body - The descriptive body text of the hero section.
 * @param {string} props.primaryButtonLink - The URL for the primary call-to-action button.
 * @param {string} props.primaryButtonText - The text displayed on the primary call-to-action button.
 * @returns {JSX.Element} - JSX markup for the CustomerPageHero component.
 */

function CustomerPageHero({ image, title, body, primaryButtonLink, primaryButtonText }) {
  return (
    <Container>
      <HeroSection>
        <HeroHeading>{title}</HeroHeading>
        {!isEmpty(body) && <Para>{body}</Para>}
        {(!isEmpty(primaryButtonLink) || !isEmpty(primaryButtonText)) && (
          <ButtonV2Component title={primaryButtonText} href={primaryButtonLink} />
        )}
        {!isEmpty(image) && <Image src={image} alt='Hero Image' width={1440} height={500} className='hero-image' />}
      </HeroSection>
    </Container>
  );
}

export default CustomerPageHero;
