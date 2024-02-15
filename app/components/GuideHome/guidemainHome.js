'use client';
import React from 'react';
import GuideCardSection from '../guideArticleCard/guideArticleCardSection';
import GuideHeroComponent from '../Hero/guideHero';
import { isEmpty, removeEmptyElement } from '../../helpers/helpers';
import { MainHomePage } from './guidemainHomeStyles';

export default function GuideMainHome({ data }) {
  const mostPopularArticleData = removeEmptyElement(data?.sectionContent1Collection?.items);
  const appGuideArticleData = removeEmptyElement(data?.sectionContent2Collection?.items);
  const isShowHeroSection = !isEmpty(data?.title) || !isEmpty(data?.description);
  return (
    <>
      <MainHomePage>
        {isShowHeroSection && <GuideHeroComponent title={data?.title} description={data?.description} />}
        {!isEmpty(mostPopularArticleData) && (
          <GuideCardSection
            articleData={mostPopularArticleData}
            title={data?.sectionTitle1}
            description={data?.sectionDescription1}
            isLargeCard={true}
          />
        )}
        {!isEmpty(appGuideArticleData) && (
          <GuideCardSection
            articleData={appGuideArticleData}
            title={data?.sectionTitle2}
            description={data?.sectionDescription2}
          />
        )}
      </MainHomePage>
    </>
  );
}
