'use client';
import React from 'react';
import Image from 'next/image';
import { CardItem, CardTextView, AnimatedIcon } from '../../styles/homepageStyles';

/**
 * Automation card
 * @param {React.ReactNode} children - Children to be rendered as line animation items
 * @param {string} title - Title of the automation card
 * @param {string} tag - Tag of the automation card
 * @param {string} imageSrc - Source of the image
 * @param {string} imageAlt - Alternative text for the image
 * @param {string} animationClass - Class for the animation
 * **/

function AutomationCard({ children, title, tag, imageSrc, imageAlt, animationClass }) {
  return (
    <CardItem>
      <Image src={imageSrc} width={35} height={35} alt={imageAlt} />
      <CardTextView>
        <p>{title}</p>
        <span>{tag}</span>
      </CardTextView>
      <AnimatedIcon className={`default ${animationClass}`} />
      {children}
    </CardItem>
  );
}

export default AutomationCard;
