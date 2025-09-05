'use client';
import React from 'react';
import { Content, ContentDiv, Description, HighlightSectionDiv, Title } from './styles';
import Image from 'next/image';
import { isEmpty } from '../../helpers/helpers';
import LinkComponent from '../linkComponent/linkComponent';
import { LinkTone } from '../../constants/constant';

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
      {!isEmpty(href) && <LinkComponent linkHref={href} title='Read' isIcon tone={LinkTone.GRAY} iconSize={14} />}
    </HighlightSectionDiv>
  );
}

export default HighlighSection;
