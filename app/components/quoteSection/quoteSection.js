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
import { isEmpty } from '../../helpers/helpers';
import ReactMarkdown from 'react-markdown';

/**
 * QuoteSectionComponent for displaying a quote section.
 * @param {Object} props - Component props.
 * @param {SectionTone} [props.tone=SectionTone.LIGHT] - The visual tone of the section, either light or dark.
 * @param {number} props.imageHeight - The height of the image.
 * @param {string} props.name - The name of the person being quoted.
 * @param {string} props.role - The company name of the person being quoted.
 * @param {string} props.description - The quote description.
 * @param {string} props.link - The URL for the "Read More" link.
 */

const QuoteSectionComponent = ({ tone, imageSrc, name, role, description, link }) => {
  return (
    <QuoteSection tone={tone}>
      {!isEmpty(imageSrc) && <Image src={imageSrc} width={313} height={479} className='quote-image' />}
      <QuoteContentDiv>
        <TitleContentSection>
          <NameSection>
            {!isEmpty(name) && <Name tone={tone}>{name}</Name>}
            {!isEmpty(role) && <CompanyName tone={tone}>{role}</CompanyName>}
          </NameSection>
          {!isEmpty(description) && (
            <Description tone={tone}>
              <ReactMarkdown>{description}</ReactMarkdown>
            </Description>
          )}
        </TitleContentSection>
        {!isEmpty(link) && (
          <LinkComponent
            isIcon
            title={'Read More'}
            linkHref={link}
            tone={tone === SectionTone.LIGHT ? LinkTone.WHITE : LinkTone.BLACK}
            size={LinkSize.LARGE}
          />
        )}
      </QuoteContentDiv>
    </QuoteSection>
  );
};

export default QuoteSectionComponent;
