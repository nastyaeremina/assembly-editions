import Image from 'next/image';
import React, { useMemo } from 'react';
import { Container } from '../../styles/commonStyles';
import { Hero, HeroLine, HeroSection, LeftHeading, MainImage, RightHeading } from '../Home/styles';
import bgleft from '../../../public/images/bgleft.png';
import bgright from '../../../public/images/bgright.png';
import { isEmpty, transformArray } from '../../helpers/helpers';
import SocialProofProperty from '../socialProofProperty/socialProofProperty';
import { HeroTypes } from '../../constants/constant';
import Heading from './heading/heading';

/**
 * HomeHeroSection Component
 * @param {Object} props - Component props
 * @param {string} props.title - The title text
 * @param {string} props.body - The body text
 * @param {string} props.image1 - The first image URL
 * @param {string} props.image2 - The second image URL
 * @param {string} props.leftImageTitle - The title for the left image
 * @param {string} props.rightImageTitle - The title for the right image
 * @param {Array} props.ratingList - The list of ratings
 * @param {boolean} [props.isLight=false] - Light theme flag
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
  image1,
  image2,
  leftImageTitle,
  rightImageTitle,
  ratingList,
  isLight = false,
  isStandardPage = false,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  isShowSocialProof,
  isDownload = false
}) {
  let ratingData = transformArray(ratingList);

  return (
    <HeroSection isLight={isLight} isStandardPage={isStandardPage}>
      <Container>
        <Heading
          title={title}
          description={body}
          primaryButtonLink={primaryButtonLink}
          secondaryButtonLink={secondaryButtonLink}
          primaryButtonText={primaryButtonText}
          secondaryButtonText={secondaryButtonText}
          ratingData={ratingData}
          isDownload={isDownload}
          variant={HeroTypes.CENTER}>
          {isShowSocialProof && (
            <div className='social-proof'>
              <SocialProofProperty rateCount='1000+' />
            </div>
          )}
        </Heading>
        {isEmpty(image2) ? (
          <>
            {!isEmpty(image1) && (
              <MainImage isLight={isLight}>
                <Image src={image1} alt='internal' className='heromain-image' width={1172} height={415} />
              </MainImage>
            )}
          </>
        ) : (
          <Hero>
            <LeftHeading>{leftImageTitle}</LeftHeading>
            <RightHeading>{rightImageTitle}</RightHeading>

            <HeroLine>
              <svg
                className='first-line'
                width='1150'
                height='1'
                viewBox='0 0 1150 1'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <line x1='-24' y1='0.5' x2='1150' y2='0.499909' stroke='#E3FFEE' />
              </svg>
              <svg
                className='second-line'
                width='300'
                height='1'
                viewBox='0 0 300 1'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <line x1='-24' y1='0.5' x2='300' y2='0.499909' stroke='#E3FFEE' />
              </svg>
              <svg
                className='third-line'
                width='300'
                height='1'
                viewBox='0 0 300 1'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <line x1='-24' y1='0.5' x2='300' y2='0.499909' stroke='#E3FFEE' />
              </svg>
              <svg
                className='last-line'
                width='1000'
                height='1'
                viewBox='0 0 1000 1'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <line x1='-24' y1='0.5' x2='1000' y2='0.499909' stroke='#E3FFEE' />
              </svg>
            </HeroLine>
            <Image src={bgleft} alt='bgleft' className='bgleft' />
            <Image src={image1} alt='hybridleft' className='hybridleft' width={768} height={415} />
            <Image src={bgright} alt='bgright' className='bgright' />
            <Image src={image2} alt='hybridright' className='hybridright' width={300} height={415} />
          </Hero>
        )}
      </Container>
    </HeroSection>
  );
}
