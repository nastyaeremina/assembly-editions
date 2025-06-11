'use client';
import React, { useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import { isEmpty, separateSpecialChar } from '../../helpers/helpers';
import { Container } from '../../styles/commonStyles';
import ButtonGroup from '../ButtonGroup/buttonGroup';
import { Body, CardSection, CardSectionHead, Cards, HeaderSection } from './styles';
import AutomationCard from './card';

/**
 * AutomationCardSection Component
 * @param {Object} props - Component props
 * @param {Array} props.data - Array of card data
 * @param {string} props.title - The section title
 * @param {boolean} props.isAppExplore - Flag to determine if it's an app exploration page
 * @param {string} props.description - The section description (markdown format)
 * @param {boolean} [props.isStandardPage=false] - Flag to determine if it's a standard page
 * @param {string} [props.secondaryButtonLink] - URL for the secondary button
 * @param {string} [props.secondaryButtonText] - Text for the secondary button
 * @param {string} [props.primaryButtonLink] - URL for the primary button
 * @param {string} [props.primaryButtonText] - Text for the primary button
 * @returns {JSX.Element} - JSX markup for the AutomationCardSection component
 */
export default function AutomationCardSection({
  data,
  title,
  isAppExplore,
  description,
  isStandardPage = false,
  secondaryButtonLink,
  secondaryButtonText,
  primaryButtonLink,
  primaryButtonText
}) {
  const renderCardView = useMemo(() => {
    if (isEmpty(data)) return null;
    return data?.map((item, index) => {
      return (
        <AutomationCard
          title={item?.header}
          body={item?.body}
          imageurl={item?.image?.url}
          isTwoCard={data?.length !== 1} // Determine if two cards should be displayed
          key={`automationCard_index_${index}`}
          isStandardPage={isStandardPage}
        />
      );
    });
  }, [data, isStandardPage]);

  return (
    <Container>
      <CardSection isAppExplore={isAppExplore} isStandardPage={isStandardPage}>
        <HeaderSection>
          <CardSectionHead>
            <div dangerouslySetInnerHTML={{ __html: separateSpecialChar(title) }} />
          </CardSectionHead>
          <Body>
            <ReactMarkdown>{description}</ReactMarkdown>
          </Body>
          <ButtonGroup
            primaryButtonLink={primaryButtonLink}
            primaryButtonText={primaryButtonText}
            secondaryButtonLink={secondaryButtonLink}
            secondaryButtonText={secondaryButtonText}
            className='button-group'
          />
        </HeaderSection>
        <Cards>{renderCardView}</Cards>
      </CardSection>
    </Container>
  );
}
