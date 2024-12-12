'use client';
import React, { useState, useEffect } from 'react';
import StarList from '../reviewSection/starList';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { SCREEN_SIZE_THRESHOLD } from '../../constants/constant';
import { Logos, PropertyMainDiv } from './styles';

function SocialProofProperty({ rateCount, isBookDemo }) {
  const [isBig, setIsBig] = useState(true);

  useEffect(() => {
    if (window && typeof window !== 'undefined') {
      const updateResponsive = () => {
        setIsBig(window.innerWidth >= SCREEN_SIZE_THRESHOLD);
      };

      window.addEventListener('resize', updateResponsive);

      return () => window.removeEventListener('resize', updateResponsive);
    }
  }, []);

  return (
    <PropertyMainDiv isBookDemo={isBookDemo}>
      <StarList rate={4.5} isBig={isBig} />
      <h6>based on {rateCount} reviews</h6>
      <Logos>
        <SVGComponent name='g2-logo-icon' width='24' height='24' viewBox='0 0 24 25' />
        <SVGComponent name='capterra-logo-icon' width='24' height='24' viewBox='0 0 24 25' />
        <SVGComponent name='product-hunt-logo-icon' width='24' height='24' viewBox='0 0 24 25' />
      </Logos>
    </PropertyMainDiv>
  );
}

export default SocialProofProperty;
