import React from 'react';
import { Container } from '../../styles/commonStyles';
import { Functionality } from '../../styles/homepageStyles';
// import TabView from '../tab/tab';
import HomeTabView from '../tab/hometab';
import SubHeroComponent from '../Hero/subHero';
import { BottomFunction } from '../tabbutton/tabstyled';

export default function FeatureSection({ heroSectionData, featuresList }) {
  return (
    <Functionality>
      <Container>
        <SubHeroComponent data={heroSectionData} />
        <BottomFunction>
          <HomeTabView isHome={true} tabData={featuresList} />
        </BottomFunction>
      </Container>
    </Functionality>
  );
}
