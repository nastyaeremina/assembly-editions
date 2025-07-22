'use client';
import React, { useMemo } from 'react';
import ExploreTab from '../solution/clienttab/exploretab';
import FeatureSection from '../featureSection/featureSection';
import TabsHorizontal from '../tabsHorizontal/tabsHorizontal';
import TabsVertical from '../tabsVertical/tabsVertical';

export const TAB_SECTION_TYPE = {
  TABS_HORIZONTAL_PILLS: 'Tabs Horizontal Pills',
  TABS_HORIZONTAL_CIRCLES: 'Tabs Horizontal Circles',
  TABS_HORIZONTAL_DETAILS: 'Tabs Horizontal Details',
  TABS_VERTICAL_DETAILS: 'Tabs Vertical Details'
};
/**
 * TabsComponent
 * @param {Object} props - Component props
 * @param {number} props.type - The type of tab component to render
 * @param {Object} props.content - The content data for the component
 * @returns {JSX.Element} - JSX markup for the TabsComponent
 */

export default function TabsComponent({ type, content }) {
  const renderComponent = useMemo(() => {
    switch (type) {
      case TAB_SECTION_TYPE.TABS_HORIZONTAL_PILLS:
        return (
          <FeatureSection
            featuresList={content?.tabsCollection?.items}
            heroSectionData={{
              heroTitle: content?.title,
              heroDescription: content?.description,
              primaryButtonText: content?.primaryButtonText,
              secondaryButtonText: content?.secondaryButtonText,
              primaryButtonLink: content?.primaryButtonLink,
              secondaryButtonLink: content?.secondaryButtonLink
            }}
            isStandardPage={true}
          />
        );

      case TAB_SECTION_TYPE.TABS_HORIZONTAL_CIRCLES:
        return (
          <ExploreTab
            title={content?.title}
            tabItems={content?.tabsCollection?.items}
            description={content?.description}
            primaryButtonText={content?.primaryButtonText}
            secondaryButtonText={content?.secondaryButtonText}
            primaryButtonLink={content?.primaryButtonLink}
            secondaryButtonLink={content?.secondaryButtonLink}
            isStandardPage={true}
          />
        );

      case TAB_SECTION_TYPE.TABS_HORIZONTAL_DETAILS:
        return (
          <TabsHorizontal
            featuresList={content?.tabsCollection?.items}
            heroSectionData={{
              heroTitle: content?.title,
              heroDescription: content?.description,
              primaryButtonText: content?.primaryButtonText,
              secondaryButtonText: content?.secondaryButtonText,
              primaryButtonLink: content?.primaryButtonLink,
              secondaryButtonLink: content?.secondaryButtonLink
            }}
          />
        );

      case TAB_SECTION_TYPE.TABS_VERTICAL_DETAILS:
        return (
          <TabsVertical
            featuresList={content?.tabsCollection?.items}
            heroSectionData={{
              heroTitle: content?.title,
              heroDescription: content?.description,
              primaryButtonText: content?.primaryButtonText,
              secondaryButtonText: content?.secondaryButtonText,
              primaryButtonLink: content?.primaryButtonLink,
              secondaryButtonLink: content?.secondaryButtonLink
            }}
          />
        );

      default: // or some default component or message
        return null;
    }
  }, [
    content?.description,
    content?.primaryButtonLink,
    content?.primaryButtonText,
    content?.secondaryButtonLink,
    content?.secondaryButtonText,
    content?.tabsCollection?.items,
    content?.title,
    type
  ]);

  return <div>{renderComponent}</div>;
}
