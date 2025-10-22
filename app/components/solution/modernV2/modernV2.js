'use client';
import { useMemo } from 'react';
import { isEmpty } from '../../../helpers/helpers';
import { Container } from '../../../styles/commonStyles';
import {
  ModernSection,
  ModernWrap,
  BoxWrap,
  BoxView,
  DetailView,
  Title,
  Description,
  TitleWrapper,
  Number
} from './styles';
import SectionHeader from '../../sectionHeader/sectionHeader';

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
      <ModernSection>
        <Container>
          <ModernWrap>
            <SectionHeader
              title={finalTitle}
              description={description}
              primaryButtonText={primaryButtonText}
              primaryButtonLink={primaryButtonLink}
              secondaryButtonText={secondaryButtonText}
              secondaryButtonLink={secondaryButtonLink}
            />
            <BoxWrap>{BoxListView}</BoxWrap>
          </ModernWrap>
        </Container>
      </ModernSection>
    </>
  );
}
