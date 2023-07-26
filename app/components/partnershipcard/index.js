import React from 'react';
import Image from 'next/image';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Keycard, Left, LeftBody, LeftHeading, Right } from '../../styles/partnershipStyles';
import Button from '../button/button';
import { PARTNERSHIP_APPLY_LINK } from '../../constants/externalLinks';

export default function PartnershipCard({ heading, body, src, buttonLink }) {
  return (
    <>
      <Keycard>
        <Left>
          <LeftHeading>{heading}</LeftHeading>
          <LeftBody>
            <ReactMarkdown>{body}</ReactMarkdown>
          </LeftBody>
          {buttonLink && (
            <Button
              bgColor={'#09AA6C'}
              fontColor={'#FFFFFF'}
              borderColor={'#09AA6C'}
              text={'Apply now'}
              href={buttonLink}
              hoverColor={'rgba(255, 255, 255,0.8)'}
              className='btn'
            />
          )}
        </Left>
        <Right>
          <Image src={src} alt='partnership' width={260} height={236} />
        </Right>
      </Keycard>
    </>
  );
}
