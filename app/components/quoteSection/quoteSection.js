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
import { SectionTone } from '../../constants/constant';
import { isEmpty } from '../../helpers/helpers';
import ReactMarkdown from 'react-markdown';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import Link from 'next/link';

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
  const isLink = Boolean(link);

  return (
    <QuoteSection tone={tone} href={link} as={isLink ? Link : 'div'}>
      {!isEmpty(imageSrc) && <Image src={imageSrc} width={421} height={216} className='quote-image' />}
      <QuoteContentDiv>
        <TitleContentSection>
          <NameSection>
            {!isEmpty(name) && <Name>{name}</Name>}
            {!isEmpty(role) && <CompanyName>{role}</CompanyName>}
          </NameSection>
          {!isEmpty(description) && (
            <Description>
              <ReactMarkdown>{description}</ReactMarkdown>
            </Description>
          )}
        </TitleContentSection>
        <SVGComponent
          name='blog-card-hover-arrow-icon'
          width='16'
          height='16'
          viewBox='0 0 16 16'
          className='svg-icon'
        />
      </QuoteContentDiv>
    </QuoteSection>
  );
};

export default QuoteSectionComponent;
