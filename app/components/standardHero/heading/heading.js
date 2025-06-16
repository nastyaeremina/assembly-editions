'use client';
import React, { useMemo } from 'react';
import ButtonGroup from '../../ButtonGroup/buttonGroup';
import SocialProofProperty from '../../socialProofProperty/socialProofProperty';
import { isEmpty } from '../../../helpers/helpers';
import { HeroTypes } from '../../../constants/constant';
import { HeroHeading, LeftHeroSectionMainDiv, Para } from './style';
import { ImageHover, ReviewLogo, RightWrap } from '../../Home/styles';
import SVGComponent from '../../../../public/images/svg/SVGComponent';

/**
 * Heading Component
 * A component that displays a heading section with optional buttons and social proof.
 *
 * @param {Object} props - Component props
 * @param {string} title - The section title, which can include HTML for styling.
 * @param {string} description - The section description, displayed below the title.
 * @param {string} primaryButtonText - The text for the primary button.
 * @param {string} primaryButtonLink - The link for the primary button.
 * @param {string} secondaryButtonText - The text for the secondary button.
 * @param {string} secondaryButtonLink - The link for the secondary button.
 * @param {'center' | 'left'} variant - Determines the alignment of the heading and buttons.
 * @param {React.ReactNode} children - Optional additional content to be rendered within the component.
 * @param {React.ReactNode[]} ratingData - An array of objects representing rating items,
 * each containing a link and a title to be displayed as part of the rating view.
 */

function Heading({
  title,
  description,
  isShowSocialProof = false,
  primaryButtonLink,
  primaryButtonText,
  secondaryButtonLink,
  secondaryButtonText,
  variant = HeroTypes.LEFT,
  children,
  ratingData
}) {
  const renderRatingView = useMemo(() => {
    return ratingData?.map((item, index) => {
      return (
        <>
          <ImageHover href={item?.link} target='_blank' key={index}>
            <RightWrap>
              <SVGComponent name='rating-star' width='112' height='20' viewBox='0 0 112 20' />
              <p>{item.title}</p>
            </RightWrap>
          </ImageHover>
        </>
      );
    });
  }, [ratingData]);

  return (
    <LeftHeroSectionMainDiv variant={variant}>
      {!isEmpty(title) && <HeroHeading dangerouslySetInnerHTML={{ __html: title }} />}
      {!isEmpty(description) && <Para>{description}</Para>}
      {!isEmpty(ratingData) && <ReviewLogo>{renderRatingView}</ReviewLogo>}
      {children}
      <ButtonGroup
        primaryButtonLink={primaryButtonLink}
        primaryButtonText={primaryButtonText}
        secondaryButtonLink={secondaryButtonLink}
        secondaryButtonText={secondaryButtonText}
        className={variant === HeroTypes.CENTER ? 'center-button-group' : 'button-group'}
      />
      {isShowSocialProof && <SocialProofProperty rateCount='1000+' />}
    </LeftHeroSectionMainDiv>
  );
}

export default Heading;
