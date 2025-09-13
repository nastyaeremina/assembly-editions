import React from 'react';
import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import GuidePage from '../../components/PageComponent/GuideModule/guidePage';
import { getSEOData, isEmpty } from '../../helpers/helpers';
import { getArticleData } from '../../lib/contentful-guide';
import { CURRENT_SITE_URL } from '../../constants/constant';

async function getContent(slug) {
  const { isEnabled } = await draftMode();
  const articleData = (await getArticleData(slug, isEnabled)) ?? {};
  return { articleData };
}

export async function generateMetadata({ params }) {
  const { articleData } = await getContent(params?.slug);
  const seoData = await getSEOData({
    data: {
      seoTitle: `Copilot Guide | ${articleData?.name}`,
      description: articleData?.header,
      canonical: `${CURRENT_SITE_URL}/guide/${articleData?.slug}`
    }
  });
  return seoData;
}
export default async function Guide({ params }) {
  const { articleData } = await getContent(params?.slug);
  if (isEmpty(articleData)) return notFound();
  return (
    <div>
      <GuidePage defaultArticle={articleData} />
    </div>
  );
}
