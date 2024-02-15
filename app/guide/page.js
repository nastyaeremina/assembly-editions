import React from 'react';
import GuidePage from '../components/PageComponent/GuideModule/guidePage';
import { getSEOData } from '../helpers/helpers';
import { GUIDE_PAGE_ID } from '../constants/constant';
import { getArticleData, getGuideHomePageContent, getGuidePageContent } from '../lib/contentful-guide';
import GuideMainHome from '../components/GuideHome/guidemainHome';

async function getContent() {
  const detail = (await getGuideHomePageContent({ id: GUIDE_PAGE_ID })) ?? {};
  return { seoMetadata: detail?.seoMetadata, data: detail };
}

export async function generateMetadata() {
  const { seoMetadata } = await getContent();
  const seoData = await getSEOData({ data: seoMetadata });

  return seoData;
}
export default async function Guide() {
  const { data } = await getContent();
  return (
    <>
      <GuideMainHome data={data} />
    </>
  );
}
