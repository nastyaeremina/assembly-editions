'use client';
import { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { isEmpty } from '../../../helpers/helpers';
import { Container } from '../../../styles/commonStyles';
import ButtonGroup from '../../ButtonGroup/buttonGroup';
import {
  ModernSection,
  ModernWrap,
  HeadView,
  BoxWrap,
  BoxView,
  DetailView,
  Body,
  Title,
  Description,
  TitleWrapper,
  Number
} from './styles';

/**
 * Modern Component
 * @param {Object} props - Component props
 * @param {Object[]} props.data - Array of data objects for rendering boxes
 * @param {string} props.title - The title text
 * @param {boolean} props.isStandardPage - Standard page flag
 * @param {string} props.primaryButtonText - The primary button text
 * @param {string} props.secondaryButtonText - The secondary button text
 * @param {string} props.primaryButtonLink - The primary button link
 * @param {string} props.secondaryButtonLink - The secondary button link
 * @returns {JSX.Element} - JSX markup for the Modern component
 */

export default function ModernV2({
  data,
  title,
  isStandardPage,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink
}) {
  // Function to add leading zero only if digit length is one
  const fixedTwodigit = (num) => {
    const numStr = num.toString();
    return numStr.length === 1 ? `0${numStr}` : numStr;
  };

  // Split the title by commas and dots, then wrap commas and dots in span elements
  const titleSplitList = title?.split(',');
  const seprateWithDotList = titleSplitList?.join(`<span>,</span>`)?.split('.');
  const finalTitle = seprateWithDotList?.join(`<span>.</span>`);

  const BoxListView = useMemo(() => {
    if (isEmpty(data)) return null;
    return data?.map((item, index) => {
      return (
        <BoxView key={`boxview_index_${index}`}>
          <DetailView>
            <TitleWrapper>
              <Number>{fixedTwodigit(index + 1)}</Number>
              <Title>{item?.title}</Title>
            </TitleWrapper>
            <Description>{item?.description}</Description>
          </DetailView>
        </BoxView>
      );
    });
  }, [data]);

  return (
    <>
      <ModernSection isStandardPage={isStandardPage}>
        <Container>
          <ModernWrap>
            <HeadView>
              <h2>
                {/* Render the title with special characters handled */}
                <div dangerouslySetInnerHTML={{ __html: finalTitle }} />
              </h2>
              {!isEmpty(description) && (
                <Body>
                  <ReactMarkdown>{description}</ReactMarkdown>
                </Body>
              )}
              <ButtonGroup
                primaryButtonLink={primaryButtonLink}
                primaryButtonText={primaryButtonText}
                secondaryButtonLink={secondaryButtonLink}
                secondaryButtonText={secondaryButtonText}
                className='button-group'
              />
            </HeadView>
            <BoxWrap>{BoxListView}</BoxWrap>
          </ModernWrap>
        </Container>
      </ModernSection>
    </>
  );
}
