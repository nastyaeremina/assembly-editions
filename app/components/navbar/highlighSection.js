'use client';
import React from 'react';
import { Content, ContentDiv, Description, HighlightSectionDiv, ReadMoreLink, Title } from './styles';
import Image from 'next/image';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import { isEmpty } from '../../helpers/helpers';

function HighlighSection({ title, description, image, href }) {
  if (image && image.startsWith('//')) {
    image = `https:${image}`;
  }
  return (
    <HighlightSectionDiv>
      <ContentDiv>
        <Content>
          <Title>{title}</Title>
          {!isEmpty(description) && <Description>{description}</Description>}
        </Content>
        {!isEmpty(image) && (
          <Image src={image} width={264} height={148} alt='hightLight-image' className='hightLight-image' />
        )}
      </ContentDiv>
      {!isEmpty(href) && (
        <ReadMoreLink href={href}>
          Read <SVGComponent name='blog-card-hover-arrow-icon' width='14' height='14' viewBox='0 0 16 16' />
        </ReadMoreLink>
      )}
    </HighlightSectionDiv>
  );
}

export default HighlighSection;
