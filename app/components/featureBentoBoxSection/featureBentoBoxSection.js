'use client';
import React from 'react';
import { Container } from '../../styles/commonStyles';
import { ButtonGroup, Description, GridSection, HeaderSection, MainSection, Title } from './style';
import ButtonV2Component from '../button/buttonV2/buttonV2';
import { ButtonVariant } from '../../constants/constant';
import { isEmpty } from '../../helpers/helpers';
import FeatureBentoBox from './featureBentoBox';

/**
 * FeatureBentoBoxSection renders a section with a title, description, two buttons, and a dynamic set of features.
 * @param {string} title - The main title of the section.
 * @param {string} description - The description text for the section.
 * @param {string} primaryButtonLink - The URL for the primary button.
 * @param {string} primaryButtonText - The text displayed on the primary button.
 * @param {string} secondaryButtonLink - The URL for the secondary button.
 * @param {string} secondaryButtonText - The text displayed on the secondary button.
 * @param {Array<Object>} features - An array of feature objects, each containing:
 *   @param {string} features.icon - The icon representing the feature.
 *   @param {string} features.title - The title of the feature.
 *   @param {string} features.description - The description of the feature.
 *   @param {string} features.link - The link URL for the feature.
 *   @param {number|string} features.columnSpan - The column span value for grid layout.
 *   @param {string} features.image - The image associated with the feature.
 */

function FeatureBentoBoxSection({
  title,
  description,
  primaryButtonLink,
  primaryButtonText,
  secondaryButtonLink,
  secondaryButtonText,
  features
}) {
  return (
    <Container>
      <MainSection>
        <HeaderSection>
          <Title>{title}</Title>
          {!isEmpty(description) && <Description>{description}</Description>}
          {(!isEmpty(primaryButtonText) || !isEmpty(secondaryButtonText)) && (
            <ButtonGroup>
              {!isEmpty(primaryButtonText) && <ButtonV2Component title={primaryButtonText} link={primaryButtonLink} />}
              {!isEmpty(secondaryButtonText) && (
                <ButtonV2Component
                  title={secondaryButtonText}
                  link={secondaryButtonLink}
                  variant={ButtonVariant.SECONDARY}
                  iconName='blog-card-hover-arrow-icon'
                />
              )}
            </ButtonGroup>
          )}
        </HeaderSection>
        <GridSection>
          {features?.map((feature, index) => (
            <FeatureBentoBox
              key={index}
              title={feature.title}
              description={feature.description}
              href={feature.link}
              icon={feature.icon?.url}
              image={feature.image?.url}
              columnSpan={feature.columnSpan}
            />
          ))}
        </GridSection>
      </MainSection>
    </Container>
  );
}

export default FeatureBentoBoxSection;
