import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Container } from '../../styles/commonStyles';
import { BottomSection, G2Section, HeroSection, MainImage, Review, Stars } from '../Home/styles';
import { HeroTypes } from '../../constants/constant';
import Heading from './heading/heading';
import { isEmpty } from '../../helpers/helpers';
import HighlightSectionComponents from '../casestudies/highlightSection';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { LogoSection } from './solutionhero/styles';

/**
 * HomeHeroSection Component
 * @param {Object} props - Component props
 * @param {string} props.title - The title text
 * @param {string} props.body - The body text
 * @param {string} props.image - The  image URL
 * @param {string} props.logo - The logo image is a customer logo
 * @param {Array} props.highlights - The highlights props is a state section for customer
 * @param {boolean} props.isShowSocialProof - The social proof props is a state section
 * @param {boolean} [props.isStandardPage=false] - when use Standard page than apply this flag
 * @param {string} props.primaryButtonText - The text for the primary button
 * @param {string} props.primaryButtonLink - The link for the primary button
 * @param {string} props.secondaryButtonText - The text for the secondary button
 * @param {string} props.secondaryButtonLink - The link for the secondary button
 * @param {boolean} isDownload - Indicates whether the secondary button should link to a download.
 * @param {Array} props.customerLogoCollection - The customer logo collection
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
  variant = HeroTypes.CENTER,
  isShowSocialProof,
  customerLogoCollection
}) {
  const [visibleLogos, setVisibleLogos] = useState([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!customerLogoCollection || !customerLogoCollection.items) return;

    const container = document.getElementById('logo-section');
    if (!container) return;

    const calculateVisible = () => {
      const isMobile = window.innerWidth <= 767;

      if (isMobile) {
        // Always show exactly 5 logos on mobile
        setVisibleLogos(customerLogoCollection.items.slice(0, 5));
      } else {
        // Desktop logic → hide cutoff
        const containerWidth = container.offsetWidth;
        let totalWidth = 0;
        const visible = [];
        const GAP = 24;

        customerLogoCollection.items.forEach((logo) => {
          const logoWidth = 100; // or measure real one
          if (totalWidth + logoWidth + GAP <= containerWidth) {
            visible.push(logo);
            totalWidth += logoWidth + GAP;
          }
        });

        setVisibleLogos(visible);
      }
    };

    calculateVisible();
    window.addEventListener('resize', calculateVisible);
    return () => window.removeEventListener('resize', calculateVisible);
  }, [customerLogoCollection?.items]);

  return (
    <HeroSection isStandardPage={isStandardPage} variant={variant}>
      <Container>
        {isShowSocialProof && (
          <G2Section variant={variant}>
            <SVGComponent name='g2-icon' width='16' height='16' viewBox='0 0 21 21' />
            <Stars>5 stars </Stars>
            <Review>250+ reviews</Review>
          </G2Section>
        )}
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
        {!isEmpty(customerLogoCollection?.items) && (
          <LogoSection id='logo-section'>
            {visibleLogos.map((logo) => (
              <Image
                key={logo.imageAsset.title}
                src={logo.imageAsset.url}
                width={100}
                height={24}
                alt='customer-logo'
                className='customer-image-logo'
              />
            ))}
          </LogoSection>
        )}
      </Container>
    </HeroSection>
  );
}
