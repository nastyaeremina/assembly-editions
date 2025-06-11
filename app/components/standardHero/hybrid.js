import Image from 'next/image';
import React, { useMemo } from 'react';
import { Container } from '../../styles/commonStyles';
import {
  Hero,
  HeroBtnBlock,
  HeroHeading,
  HeroLine,
  HeroSection,
  ImageHover,
  LeftHeading,
  MainImage,
  Para,
  ReviewLogo,
  RightHeading,
  RightWrap
} from '../Home/styles';
import bgleft from '../../../public/images/bgleft.png';
import bgright from '../../../public/images/bgright.png';
import { isEmpty, transformArray } from '../../helpers/helpers';
import SocialProofProperty from '../socialProofProperty/socialProofProperty';
import ButtonGroup from '../ButtonGroup/buttonGroup';

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
  isShowSocialProof
}) {
  let ratingData = transformArray(ratingList);

  const showPrimaryButton = !isEmpty(primaryButtonText) && !isEmpty(primaryButtonLink);
  const showSecondaryButton = !isEmpty(secondaryButtonText) && !isEmpty(secondaryButtonLink);

  const renderRatingView = useMemo(() => {
    return ratingData?.map((item, index) => {
      return (
        <>
          <ImageHover href={item?.link} target='_blank' isLight={isLight}>
            <RightWrap isLight={isLight}>
              <svg width='112' height='20' viewBox='0 0 112 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M10.5 0L12.7451 6.90983H20.0106L14.1327 11.1803L16.3779 18.0902L10.5 13.8197L4.62215 18.0902L6.86729 11.1803L0.989435 6.90983H8.25486L10.5 0Z'
                  fill='#09AA6C'
                />
                <path
                  d='M33.5 0L35.7451 6.90983H43.0106L37.1327 11.1803L39.3779 18.0902L33.5 13.8197L27.6221 18.0902L29.8673 11.1803L23.9894 6.90983H31.2549L33.5 0Z'
                  fill='#09AA6C'
                />
                <path
                  d='M55.5 0L57.7451 6.90983H65.0106L59.1327 11.1803L61.3779 18.0902L55.5 13.8197L49.6221 18.0902L51.8673 11.1803L45.9894 6.90983H53.2549L55.5 0Z'
                  fill='#09AA6C'
                />
                <path
                  d='M78.5 0L80.7451 6.90983H88.0106L82.1327 11.1803L84.3779 18.0902L78.5 13.8197L72.6221 18.0902L74.8673 11.1803L68.9894 6.90983H76.2549L78.5 0Z'
                  fill='#09AA6C'
                />
                <path
                  d='M101.5 0L103.745 6.90983H111.011L105.133 11.1803L107.378 18.0902L101.5 13.8197L95.6221 18.0902L97.8673 11.1803L91.9894 6.90983H99.2549L101.5 0Z'
                  fill='#09AA6C'
                />
              </svg>
              <p>{item.title}</p>
            </RightWrap>
          </ImageHover>
        </>
      );
    });
  }, [isLight, ratingData]);

  return (
    <HeroSection isLight={isLight} isStandardPage={isStandardPage}>
      <Container>
        <HeroHeading isLight={isLight}>{title}</HeroHeading>
        <Para isLight={isLight}>{body}</Para>
        {!isEmpty(ratingData) && <ReviewLogo>{renderRatingView}</ReviewLogo>}
        {isShowSocialProof && (
          <div className='social-proof'>
            <SocialProofProperty rateCount='1000+' />
          </div>
        )}
        {(showPrimaryButton || showSecondaryButton) && (
          <ButtonGroup
            primaryButtonLink={primaryButtonLink}
            primaryButtonText={primaryButtonText}
            secondaryButtonLink={secondaryButtonLink}
            secondaryButtonText={secondaryButtonText}
            className={'button-group'}
          />
        )}
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
