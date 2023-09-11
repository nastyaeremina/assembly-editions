import React from 'react';
import GuidePage from '../../components/PageComponent/GuideModule/guidePage';
import { getSEOData, getsvgCode, isEmpty } from '../../helpers/helpers';
import { GUIDE_PAGE_ID, PER_API_LIMIT_FOR_GUIDE_SECTION } from '../../constants/constant';
import { getAllGuideSectionContent, getArticleData, getGuidePageContent } from '../../lib/contentful-guide';
async function getContent(slug) {
  const detail = (await getGuidePageContent({ id: GUIDE_PAGE_ID })) ?? {};

  const articleData = (await getArticleData(slug)) ?? {};
  return { seoMetadata: detail?.seoMetadata, articleData };
}

export async function generateMetadata() {
  const { seoMetadata } = await getContent();
  const seoData = await getSEOData({ data: seoMetadata });

  return seoData;
}
export default async function Guide({ params }) {
  const { articleData } = await getContent(params?.slug);

  return <GuidePage defaultArticle={articleData} />;
}
