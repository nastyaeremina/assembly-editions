import React from 'react';
import Image from 'next/image';
import {
  QuoteSection,
  QuoteContentDiv,
  TitleContentSection,
  NameSection,
  Name,
  CompanyName,
  Description
} from './style';
import LinkComponent from '../linkComponent/linkComponent';
import { LinkSize, LinkTone, SectionTone } from '../../constants/constant';

/**
 * QuoteSectionComponent for displaying a quote section.
 * @param {Object} props - Component props.
 * @param {SectionTone} [props.tone=SectionTone.LIGHT] - The visual tone of the section, either light or dark.
 * @param {number} props.imageHeight - The height of the image.
 * @param {string} props.name - The name of the person being quoted.
 * @param {string} props.companyName - The company name of the person being quoted.
 * @param {string} props.description - The quote description.
 * @param {string} props.linkHref - The URL for the "Read More" link.
 */

const QuoteSectionComponent = ({ tone, imageSrc, name, companyName, description, linkHref }) => {
  return (
    <QuoteSection tone={tone}>
      <Image src={imageSrc} width={313} height={479} className='quote-image' />
      <QuoteContentDiv>
        <TitleContentSection>
          <NameSection>
            <Name tone={tone}>{name}</Name>
            <CompanyName tone={tone}>{companyName}</CompanyName>
          </NameSection>
          <Description tone={tone}>“{description}”</Description>
        </TitleContentSection>
        <LinkComponent
          isIcon
          title={'Read More'}
          linkHref={linkHref}
          tone={tone === SectionTone.LIGHT ? LinkTone.WHITE : LinkTone.BLACK}
          size={LinkSize.LARGE}
        />
      </QuoteContentDiv>
    </QuoteSection>
  );
};

export default QuoteSectionComponent;
