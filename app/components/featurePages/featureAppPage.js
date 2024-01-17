'use client';
import { Container } from '../../styles/commonStyles';
import { FEATURE_THEME_LIST } from '../../constants/constant';
import { BottomFunction } from '../content/styles';
import TabView from '../tab/tab';

/**
 * Features Detail page component
 * @param {Object} details - Object containing details about the feature page
 * @returns {JSX.Element} - JSX markup for the FeatureAppPage component
 */
export default function FeatureAppPage({ details }) {
  const colorList = FEATURE_THEME_LIST[details?.theme].colorList;
  return (
    <>
      {/* Display the hero section of the feature page */}

      {/* Display bottom function section with a tab view */}
      <Container>
        <BottomFunction>
          <TabView
            tabData={details?.clientFeaturesCollection?.items || []}
            bgColor={colorList?.bgColor}
            textColor={colorList?.fontColor}
          />
        </BottomFunction>
      </Container>
    </>
  );
}
