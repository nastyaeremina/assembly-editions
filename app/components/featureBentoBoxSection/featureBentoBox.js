import React from 'react';
import Image from 'next/image';
import { isEmpty } from '../../helpers/helpers';
import {
  CardDescription,
  CardTitle,
  ContentDiv,
  ContentSection,
  FeatureBentoBoxContainer,
  HoverArrowIcon,
  IconWrapper,
  ImageWrapper
} from './style';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import Link from 'next/link';

/**
 * Feature Bento Box renders a single feature card with an icon, title, description, and image.
 * @param {string} icon.url - The URL of the icon image.
 * @param {string} title - The title of the feature.
 * @param {string} description - The description of the feature.
 * @param {string} image.url - The URL of the feature image.
 * @param {number} columnSpan - The number of columns the card should span. Defaults to 1.
 */

function FeatureBentoBox({ icon, title, description, image, columnSpan = 1, href }) {
  const isLink = Boolean(href);

  return (
    <FeatureBentoBoxContainer columnSpan={columnSpan} href={href} as={isLink ? Link : 'div'}>
      <ContentDiv>
        {!isEmpty(icon) && (
          <IconWrapper>
            <Image src={icon} alt={title} width={24} height={24} />
          </IconWrapper>
        )}
        <ContentSection>
          <CardTitle>{title}</CardTitle>
          {!isEmpty(description) && <CardDescription>{description}</CardDescription>}
        </ContentSection>
      </ContentDiv>
      {!isEmpty(image) && (
        <ImageWrapper>
          <Image src={image} alt={title} className='image' width={1224} height={204} />
        </ImageWrapper>
      )}
      <HoverArrowIcon>
        <SVGComponent
          name='blog-card-hover-arrow-icon'
          width='16'
          height='16'
          viewBox='0 0 16 16'
          className='svg-icon'
        />
      </HoverArrowIcon>
    </FeatureBentoBoxContainer>
  );
}

export default FeatureBentoBox;
