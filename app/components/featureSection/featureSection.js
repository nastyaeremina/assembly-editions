import React from 'react';
import { Container } from '../../styles/commonStyles';
import { Functionality } from '../../styles/homepageStyles';
import HomeTabView from '../tab/hometab';
import SectionHeader from '../sectionHeader/sectionHeader';
import { BottomFunction } from '../tabbutton/hometabstyle';

/**
 * FeatureSection Component
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the section
 * @param {string} props.description - The description of the section
 * @param {string} props.primaryButtonText - The text of the primary button
 * @param {string} props.secondaryButtonText - The text of the secondary button
 * @param {string} props.primaryButtonLink - The link of the primary button
 * @param {string} props.secondaryButtonLink - The link of the secondary button
 * @param {Array} props.featuresList - List of features to be displayed in the tab view
 * @param {boolean} [props.isStandardPage=false] - Flag indicating if this is a standard page
 * @returns {JSX.Element} - JSX markup for the FeatureSection component
 */

export default function FeatureSection({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonLink,
  secondaryButtonLink,
  featuresList,
  isStandardPage = false
}) {
  return (
    <Functionality isStandardPage={isStandardPage}>
      <Container>
        <SectionHeader
          title={title}
          description={description}
          primaryButtonLink={primaryButtonLink}
          primaryButtonText={primaryButtonText}
          secondaryButtonLink={secondaryButtonLink}
          secondaryButtonText={secondaryButtonText}
        />
        <BottomFunction>
          <HomeTabView isHome={true} tabData={featuresList} />
        </BottomFunction>
      </Container>
    </Functionality>
  );
}
