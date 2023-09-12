import React from 'react';
import GuidePage from '../components/PageComponent/GuideModule/guidePage';
import { getSEOData } from '../helpers/helpers';
import { GUIDE_PAGE_ID } from '../constants/constant';
import { getArticleData, getGuidePageContent } from '../lib/contentful-guide';

async function getContent() {
  const detail = (await getGuidePageContent({ id: GUIDE_PAGE_ID })) ?? {};

  const slug = detail?.sectionsCollection?.items?.[0]?.articlesCollection?.items?.[0]?.slug;
  const articleData = (await getArticleData(slug)) ?? {};
  return { seoMetadata: detail?.seoMetadata, articleData };
}

export async function generateMetadata() {
  const { seoMetadata } = await getContent();
  const seoData = await getSEOData({ data: seoMetadata });

  return seoData;
}
export default async function Guide() {
  const { articleData } = await getContent();
  return <GuidePage defaultArticle={articleData} />;
}
