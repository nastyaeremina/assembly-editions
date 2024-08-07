import React from 'react';
import { Container } from '../../styles/commonStyles';
import { Functionality } from '../../styles/homepageStyles';
import HomeTabView from '../tab/hometab';
import SubHeroComponent from '../Hero/subHero';
import { BottomFunction } from '../tabbutton/hometabstyle';

/**
 * FeatureSection Component
 * @param {Object} props - Component props
 * @param {Object} props.heroSectionData - Data for the hero section
 * @param {Array} props.featuresList - List of features to be displayed in the tab view
 * @param {boolean} [props.isStandardPage=false] - Flag indicating if this is a standard page
 * @returns {JSX.Element} - JSX markup for the FeatureSection component
 */

export default function FeatureSection({ heroSectionData, featuresList, isStandardPage = false }) {
  return (
    <Functionality isStandardPage={isStandardPage}>
      <Container>
        <SubHeroComponent data={heroSectionData} />
        <BottomFunction>
          <HomeTabView isHome={true} tabData={featuresList} />
        </BottomFunction>
      </Container>
    </Functionality>
  );
}
