'use client';
import React from 'react';
import { Content, ContentDiv, Description, HighlightSectionDiv, Title, VisitSite } from './styles';
import Image from 'next/image';
import { isEmpty } from '../../helpers/helpers';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import Link from 'next/link';

function HighlighSection({ title, description, image, href }) {
  if (image && image.startsWith('//')) {
    image = `https:${image}`;
  }
  return (
    !isEmpty(href) && (
      <HighlightSectionDiv>
        <Link href={href} tabIndex={-1}>
          <ContentDiv>
            <Content>
              <Title>{title}</Title>
              {!isEmpty(description) && <Description>{description}</Description>}
            </Content>
            {!isEmpty(image) && (
              <Image src={image} width={264} height={148} alt='hightLight-image' className='hightLight-image' />
            )}
          </ContentDiv>
          <VisitSite>
            Read
            <SVGComponent
              name='hover-arrow-icon'
              width='16'
              height='14'
              viewBox='0 0 16 16'
              className='hover-arrow-icon'
            />
          </VisitSite>
        </Link>
      </HighlightSectionDiv>
    )
  );
}

export default HighlighSection;
