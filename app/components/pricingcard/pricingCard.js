import React, { useCallback } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { joinArrayToString } from '../../helpers/helpers';
import AppTooltip from '../appsCards/appTooltip';
import { PlanSection, PriceTag } from './styles';
import { EXTRACT_SQUARE_BRACKET_AND_TAG_TEXT_REGEX } from '../../constants/constant';

export default function PricingCard({ data, isYearly, planIndex }) {
  /**
   * Converts content with markers into specific components.
   * - Renders `AppTooltip` for text inside square brackets [ ... ].
   * - Renders `PriceTag` when `(Tag)` is present.
   * - Leaves plain text untouched.
   *
   * @param {string} value - The content string to process.
   * @returns {JSX.Element} - A JSX element with the converted content.
   */
  const ConvertContentToComponents = (value) => {
    // Split the content by custom markers and process each part
    const parts = value.split(EXTRACT_SQUARE_BRACKET_AND_TAG_TEXT_REGEX).map((part, index) => {
      if (part) {
        const squareBracketMatch = part.match(/^\[(.*?)\]$/); // Match [content] inside brackets
        const tagMatch = part === '(Tag)'; // Match exact string "(Tag)"

        if (squareBracketMatch) {
          // Render AppTooltip for content inside square brackets
          return (
            <AppTooltip
              message={squareBracketMatch[1]} // Content inside brackets
              iconSize='14'
              fill='var(--dark-gray)'
              style={{ top: 23 }}
              key={`tooltip_${data?.name}_${index}`}
              mainDivStyle={{ bottom: -2, marginLeft: 6 }}
              isAutoAdjust
            />
          );
        } else if (tagMatch) {
          // Render PriceTag component for the (Tag) marker
          return (
            <PriceTag key={`tag_${data?.name}_${index}`}>
              {isYearly ? data.annualExtraUserPrice : data.monthlyExtraUserPrice}
            </PriceTag>
          );
        }

        // Render plain text as-is
        return part;
      }
      return null; // Skip empty or undefined parts
    });

    return <>{parts}</>; // Render all processed parts within a fragment
  };

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node) => {
        const isContentNotExist = !node.content || !node.content[0]?.value;
        if (!isContentNotExist) {
          const content = joinArrayToString({ list: node.content, fieldName: 'value', seprator: ' ' });
          return <div className='list-item'>{ConvertContentToComponents(content)}</div>;
        }
        return <p className='empty-p'>{node.content[0]?.value}</p>;
      }
    }
  };
  const renderPlanDetail = () => {
    const renderedComponents = documentToReactComponents(data?.highlights?.json, options);
    const wrappedSections = [];
    let currentSection = [];

    renderedComponents.forEach((component, index) => {
      if (component.type === 'hr') {
        // Push the current section wrapped in <div>, if it exists
        if (currentSection.length > 0) {
          wrappedSections.push(
            <PlanSection
              key={`section_${data?.name}_${index}`}
              className='grid-item'
              isFirst={wrappedSections.length === 0}>
              {currentSection}
            </PlanSection>
          );
          currentSection = []; // Reset for the next section
          currentSection.push(component);
        }
      } else {
        // Add component to the current section
        currentSection.push(component);
      }
    });

    // Wrap any remaining components in a <div>
    if (currentSection.length > 0) {
      wrappedSections.push(
        <PlanSection key={`last_section_${data?.name}`} className='last-section grid-item'>
          {currentSection}
        </PlanSection>
      );
    }

    return wrappedSections;
  };

  return renderPlanDetail();
}
