import Image from 'next/image';
import React from 'react';
import { Container } from '../../styles/commonStyles';
import { BottomSection, HeroSection, MainImage } from '../Home/styles';
import { HeroTypes } from '../../constants/constant';
import Heading from './heading/heading';
import { isEmpty } from '../../helpers/helpers';
import HighlightSectionComponents from '../casestudies/highlightSection';

/**
 * HomeHeroSection Component
 * @param {Object} props - Component props
 * @param {string} props.title - The title text
 * @param {string} props.body - The body text
 * @param {string} props.image - The  image URL
 * @param {string} props.logo - The logo image is a customer logo
 * @param {Array} props.highlights - The highlights props is a state section for customer
 * @param {boolean} [props.isStandardPage=false] - when use Standard page than apply this flag
 * @param {string} props.primaryButtonText - The text for the primary button
 * @param {string} props.primaryButtonLink - The link for the primary button
 * @param {string} props.secondaryButtonText - The text for the secondary button
 * @param {string} props.secondaryButtonLink - The link for the secondary button
 * @param {boolean} isDownload - Indicates whether the secondary button should link to a download.
 */

export default function HomeHeroSection({
  title,
  logo,
  highlights,
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
    <HeroSection isStandardPage={isStandardPage} variant={variant}>
      <Container>
        {!isEmpty(logo) && <Image src={logo} width={127} height={40} alt='Logo Image' className='logo-image' />}
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
        <BottomSection>
          {!isEmpty(highlights) && <HighlightSectionComponents data={highlights} variant={variant} />}
          {!isEmpty(image) && (
            <MainImage>
              <Image src={image} alt='internal' className='heromain-image' width={1224} height={415} />
            </MainImage>
          )}
        </BottomSection>
      </Container>
    </HeroSection>
  );
}
