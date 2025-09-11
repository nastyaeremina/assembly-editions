'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BackArrow, Card, Description, Details, Label, Overlay } from './styles';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { isEmpty } from '../../helpers/helpers';

/**
 * @param {string} title - The title of the carousel card
 * @param {string} description - The description of the carousel card
 * @param {string} carouselImage - The image of the carousel card
 * @param {string} linkHref - The link of the carousel card
 * @returns {JSX.Element} - The JSX element of the carousel card
 */
function CarouselCard({ title, description, carouselImage, linkHref, isPartial }) {
  const isLink = Boolean(linkHref);
  if(isEmpty(carouselImage)) return null;

  return (
    <Card href={linkHref} className={isPartial ? 'is-partial' : ''} as={isLink ? Link : 'div'}>
      <Image src={carouselImage} alt={'carousel-1'} width={237} height={342} className='image' />
      {(!isEmpty(title) || !isEmpty(description) || !isEmpty(linkHref)) && (
      <Overlay>
        <Details>
        {!isEmpty(title) && <Label>{title}</Label>}
          {!isEmpty(description) && <Description>{description}</Description>}
        </Details>
        <BackArrow>
          {!isEmpty(linkHref) && <SVGComponent
            name='blog-card-hover-arrow-icon'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            className='back-arrow'
          />}
        </BackArrow>
      </Overlay>)}
    </Card>
  );
}

export default CarouselCard;
