import React from 'react';
import { getSEOData, isEmpty } from '../helpers/helpers';
import { CURRENT_SITE_URL, GUIDE_PAGE_ID } from '../constants/constant';
import { getGuideHomePageContent } from '../lib/contentful-guide';
import GuideMainHome from '../components/GuideHome/guidemainHome';
import AggregateRating from '../components/aggregateRating';
import Analytics from '../components/analytics/analytics';
import { getPageContent } from '../helpers/serverSideHelpers';

async function getContent({ searchParams }) {
  const {
    content: detail,
    abTestContentLabel,
    abTestExperimentName
  } = await getPageContent({
    searchParams,
    cookieKey: 'guide',
    fallbackContentId: GUIDE_PAGE_ID,
    getContentFn: getGuideHomePageContent
  });
  return { seoMetadata: detail?.seoMetadata, data: detail, abTestContentLabel, abTestExperimentName };
}

export async function generateMetadata({ searchParams }) {
  const { seoMetadata } = await getContent({ searchParams });
  const seoData = await getSEOData({ 
    data: seoMetadata,
    canonical: `${CURRENT_SITE_URL}/guide`
  });

  return seoData;
}
export default async function Guide({ searchParams }) {
  const { data, seoMetadata, abTestContentLabel, abTestExperimentName } = await getContent({ searchParams });
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
