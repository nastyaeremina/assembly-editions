'use client';
import React, { useEffect, useState } from 'react';
import { MainDiv } from './styles';
import CarouselCard from './carouselCard';
import { CAROUSEL_SLIDER } from '../../constants/constant';

/**
 * Renders the carousel track and marks cards as partially visible (blurred/disabled)
 * based on what is actually visible in the viewport (screen), not just the container.
 *
 * Props:
 * - xPos: current translateX position (px) for the track
 * - carouselData: array of card data
 */
export default function CarouselBlock({ xPos, carouselData }) {
  return (
    <>
      {/* Track: translate by xPos; cards are laid out in a horizontal row with gaps */}
      <MainDiv style={{ transform: `translateX(${xPos}px)` }} className={CAROUSEL_SLIDER}>
        {carouselData.map((card, index) => {
          return (
            <CarouselCard
              key={index}
              title={card.title}
              description={card.description}
              carouselImage={card.image?.url}
              linkHref={card.url}
            />
          );
        })}
      </MainDiv>
    </>
  );
}
