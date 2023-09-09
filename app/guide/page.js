import React from 'react';
import GuidePage from '../components/PageComponent/GuideModule/guidePage';
import { getSEOData, getsvgCode, isEmpty } from '../helpers/helpers';
import { GUIDE_PAGE_ID, PER_API_LIMIT_FOR_GUIDE_SECTION } from '../constants/constant';
import { getAllGuideSectionContent, getArticleData, getGuidePageContent } from '../lib/contentful-guide';

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
  const orderedData = await Promise.all(
    await sectionIdList?.map(async (sectionId) => {
      const matchedData = data?.find((dataItem) => dataItem.sys.id === sectionId.replace(/"/g, '')) || [];
      let newCollection = [];
      if (!isEmpty(matchedData)) {
        const newData = await Promise.all(
          await matchedData?.articlesCollection?.items?.map(async (item) => {
            const code = await getsvgCode(item?.icon?.url);
            return { ...item, iconCode: code };
          })
        );
        newCollection = {
          total: matchedData?.articlesCollection?.total,
          items: newData
        };
      }
      return matchedData ? { ...matchedData, articlesCollection: newCollection } : null;
    })
  );
  const filterData = orderedData.filter((item) => item !== null);
  const articleSlug = filterData?.[0]?.articlesCollection?.items?.[0]?.slug;
  const articleData = (await getArticleData(articleSlug)) ?? {};
  return { seoMetadata: detail?.seoMetadata, data: filterData, articleData };
}

export async function generateMetadata() {
  const { seoMetadata } = await getContent();
  const seoData = await getSEOData({ data: seoMetadata });

  return seoData;
}
export default async function Guide() {
  const { data, articleData } = await getContent();
  const defaultsection = data?.[0]?.sys?.id ?? '';
  return <GuidePage data={data} defaultArticle={articleData} defaultsection={defaultsection} />;
}
