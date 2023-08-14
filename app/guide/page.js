import React from 'react';
import GuidePage from '../components/PageComponent/GuideModule/guidePage';
import { getSEOData, isEmpty } from '../helpers/helpers';
import { GUIDE_PAGE_ID, PER_API_LIMIT_FOR_GUIDE_SECTION } from '../constants/constant';
import { getAllGuideSectionContent, getGuidePageContent } from '../lib/contentful-guide';
async function getContent() {
  const detail = (await getGuidePageContent({ id: GUIDE_PAGE_ID })) ?? {};

  let allPosts = [];
  let data = [];
  const sectionIdList = detail?.sectionsCollection?.items.map((item) => `"${item.sys.id}"`) || [];
  for (let i = 0; i < sectionIdList.length; i += PER_API_LIMIT_FOR_GUIDE_SECTION) {
    const batch = sectionIdList.slice(i, i + PER_API_LIMIT_FOR_GUIDE_SECTION);
    data = (await getAllGuideSectionContent(`id_in: [${batch}]`)) || [];
    allPosts = allPosts.concat(data);
  }
  const orderedData = sectionIdList
    ?.map((sectionId) => {
      const matchedData = data?.find((dataItem) => dataItem.sys.id === sectionId.replace(/"/g, ''));
      return matchedData ? { ...matchedData } : null;
    })
    .filter((item) => item !== null);

  return { seoMetadata: detail?.seoMetadata, data: orderedData };
}

export async function generateMetadata() {
  const { seoMetadata } = await getContent();
  const seoData = await getSEOData({ data: seoMetadata });

  return seoData;
}
export default async function Guide() {
  const { data } = await getContent();
  const firstArticle = data?.[0]?.articlesCollection?.items[0];
  return <GuidePage data={data} defaultArticle={firstArticle} />;
}
