import React from 'react';
import Image from 'next/image';
import { isEmpty } from '../../helpers/helpers';
import {
  CardDescription,
  CardTitle,
  ContentDiv,
  FeatureBentoBoxContainer,
  HoverArrowIcon,
  IconWrapper,
  ImageWrapper
} from './style';
import SVGComponent from '../../../public/images/svg/SVGComponent';

/**
 * FeatureBentoBox renders a single feature card with an icon, title, description, and image.
 * @param {string} icon.url - The URL of the icon image.
 * @param {string} title - The title of the feature.
 * @param {string} description - The description of the feature.
 * @param {string} image.url - The URL of the feature image.
 * @param {number} columnSpan - The number of columns the card should span. Defaults to 1.
 */

function FeatureBentoBox({ icon, title, description, image, columnSpan = 1, href }) {
  return (
    <FeatureBentoBoxContainer columnSpan={columnSpan} href={href}>
      <ContentDiv>
        {!isEmpty(icon) && (
          <IconWrapper>
            <Image src={icon} alt={title} width={24} height={24} />
          </IconWrapper>
        )}
        <CardTitle>{title}</CardTitle>
        {!isEmpty(description) && <CardDescription>{description}</CardDescription>}
      </ContentDiv>
      {!isEmpty(image) && (
        <ImageWrapper>
          <Image src={image} alt={title} className='image' width={378} height={204} />
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
