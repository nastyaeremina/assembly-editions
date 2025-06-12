import React from 'react';
import GuidePage from '../components/PageComponent/GuideModule/guidePage';
import { getSEOData, isEmpty } from '../helpers/helpers';
import { CURRENT_SITE_URL, GUIDE_PAGE_ID } from '../constants/constant';
import { getArticleData, getGuideHomePageContent, getGuidePageContent } from '../lib/contentful-guide';
import GuideMainHome from '../components/GuideHome/guidemainHome';
import AggregateRating from '../components/aggregateRating';
import Analytics from '../components/analytics/analytics';
import { getABTestInfoFromCookie } from '../helpers/serverSideHelpers';

async function getContent() {
  const {
    contentId,
    abTestContentLabel,
    abTestExperimentName
  } = getABTestInfoFromCookie({
    cookieKey: 'guide',
    fallbackContentId: GUIDE_PAGE_ID
  });

  const detail = (await getGuideHomePageContent({ id: contentId })) ?? {};
  return { seoMetadata: detail?.seoMetadata, data: detail, abTestContentLabel, abTestExperimentName };
}

export async function generateMetadata() {
  const { seoMetadata } = await getContent();
  const seoData = await getSEOData({ data: seoMetadata });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/guide` };

  return seoData;
}
export default async function Guide() {
  const { data, seoMetadata, abTestContentLabel, abTestExperimentName } = await getContent();
  return (
    <>
      {isEmpty(abTestContentLabel) && !isEmpty(abTestExperimentName) && (
        <Analytics abTestContentLabel={abTestContentLabel} abTestExperimentName={abTestExperimentName} />
      )}
      <AggregateRating data={seoMetadata} />
      <GuideMainHome data={data} />
    </>
  );
}
