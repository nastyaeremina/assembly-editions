import React from 'react';
import Image from 'next/image';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { BLockImage, BlockCard, BlockDescription, BlockDescriptionTop, LinkDiv } from './styles';

export default function CopilotBlockItem({ title, description, imageUrl, link }) {
  return (
    <>
      <>
        <BlockCard>
          <BLockImage>
            <Image src={imageUrl} alt='slider-image' width={180} height={180} />
          </BLockImage>
          <BlockDescription>
            <BlockDescriptionTop>
              <h2>{title}</h2>
              <p>{description}</p>
            </BlockDescriptionTop>
            <LinkDiv href={link}>
              <p>Learn more</p>
              <SVGComponent name='arrow' width='8' height='13' viewBox='0 0 8 13' />
            </LinkDiv>
          </BlockDescription>
        </BlockCard>
      </>
    </>
  );
}
