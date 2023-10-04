import React from 'react';
import { notFound } from 'next/navigation';
import GuidePage from '../../components/PageComponent/GuideModule/guidePage';
import { getSEOData, isEmpty } from '../../helpers/helpers';
import { getArticleData } from '../../lib/contentful-guide';

async function getContent(slug) {
  const articleData = (await getArticleData(slug)) ?? {};
  return { articleData };
}

export async function generateMetadata({ params }) {
  const { articleData } = await getContent(params?.slug);
  const seoData = await getSEOData({
    data: {
      seoTitle: `Copilot Guide | ${articleData?.name}`,
      description: articleData?.header,
      canonical: 'https://www.copilot.com/guide/' + articleData?.slug
    }
  });
  return seoData;
}
export default async function Guide({ params }) {
  const { articleData } = await getContent(params?.slug);
  if (isEmpty(articleData)) return notFound();
  return <GuidePage defaultArticle={articleData} />;
}
