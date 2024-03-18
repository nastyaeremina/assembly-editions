import React from 'react';
import Image from 'next/image';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { BLockImage, BlockCard, BlockDescription, BlockDescriptionTop, Last, LastDroplist, LinkDiv } from './styles';
import Link from 'next/link';

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
            <LastDroplist>
              <Link href={link} className='learn-link mb0'>
                Learn more
                <SVGComponent name='animated-link-icon' width='16' height='12' viewBox='0 0 16 12' />
              </Link>
            </LastDroplist>
          </BlockDescription>
        </BlockCard>
      </>
    </>
  );
}
