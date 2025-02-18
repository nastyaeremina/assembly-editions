import React from 'react';
import GuidePage from '../components/PageComponent/GuideModule/guidePage';
import { getSEOData } from '../helpers/helpers';
import { CURRENT_SITE_URL, GUIDE_PAGE_ID } from '../constants/constant';
import { getArticleData, getGuideHomePageContent, getGuidePageContent } from '../lib/contentful-guide';
import GuideMainHome from '../components/GuideHome/guidemainHome';
import AggregateRating from '../components/aggregateRating';

async function getContent() {
  const detail = (await getGuideHomePageContent({ id: GUIDE_PAGE_ID })) ?? {};
  return { seoMetadata: detail?.seoMetadata, data: detail };
}

export async function generateMetadata() {
  const { seoMetadata } = await getContent();
  const seoData = await getSEOData({ data: seoMetadata });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/guide` };

  return seoData;
}
export default async function Guide() {
  const { data, seoMetadata } = await getContent();
  return (
    <>
      <AggregateRating data={seoMetadata} />
      <GuideMainHome data={data} />
    </>
  );
}
