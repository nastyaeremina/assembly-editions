import Image from 'next/image';
import React from 'react';
import { Container } from '../../styles/commonStyles';
import { HeroSection, MainImage } from '../Home/styles';
import { HeroTypes } from '../../constants/constant';
import Heading from './heading/heading';
import { isEmpty } from '../../helpers/helpers';

/**
 * HomeHeroSection Component
 * @param {Object} props - Component props
 * @param {string} props.title - The title text
 * @param {string} props.body - The body text
 * @param {string} props.image - The  image URL
 * @param {boolean} [props.isStandardPage=false] - when use Standard page than apply this flag
 * @param {string} props.primaryButtonText - The text for the primary button
 * @param {string} props.primaryButtonLink - The link for the primary button
 * @param {string} props.secondaryButtonText - The text for the secondary button
 * @param {string} props.secondaryButtonLink - The link for the secondary button
 * @param {boolean} isDownload - Indicates whether the secondary button should link to a download.
 */

export default function HomeHeroSection({
  title,
  body,
  image,
  isStandardPage = false,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  isDownload = false,
  variant = HeroTypes.CENTER
}) {
  return (
    <HeroSection isStandardPage={isStandardPage}>
      <Container>
        <Heading
          title={title}
          description={body}
          primaryButtonLink={primaryButtonLink}
          secondaryButtonLink={secondaryButtonLink}
          primaryButtonText={primaryButtonText}
          secondaryButtonText={secondaryButtonText}
          isDownload={isDownload}
          variant={variant}
        />
        {!isEmpty(image) && (
          <MainImage>
            <Image src={image} alt='internal' className='heromain-image' width={1224} height={415} />
          </MainImage>
        )}
      </Container>
    </HeroSection>
  );
}
