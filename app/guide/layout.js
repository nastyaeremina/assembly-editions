import React from 'react';
import GuideNavbar from '../components/GuideNavbar/guideNavbar';
import { getAllGuideSectionContent, getGuidePageContent } from '../lib/contentful-guide';
import { GUIDE_PAGE_ID, PER_API_LIMIT_FOR_GUIDE_SECTION } from '../constants/constant';
import { isEmpty, removeEmptyElement } from '../helpers/helpers';

async function getContent() {
  const detail = (await getGuidePageContent({ id: GUIDE_PAGE_ID })) ?? {};

  let allPosts = [];
  let data = [];
  const sectionData = removeEmptyElement(detail?.sectionsCollection?.items);
  const sectionIdList = sectionData?.map((item) => `"${item?.sys?.id}"`) || [];
  for (let i = 0; i < sectionIdList.length; i += PER_API_LIMIT_FOR_GUIDE_SECTION) {
    const batch = sectionIdList.slice(i, i + PER_API_LIMIT_FOR_GUIDE_SECTION);
    data = (await getAllGuideSectionContent({ idList: `id_in: [${batch}]` })) || [];
    allPosts = allPosts.concat(data);
  }

  const orderedData = sectionIdList?.map((sectionId, index) => {
    const matchedData = allPosts?.find((dataItem) => dataItem.sys.id === sectionId.replace(/"/g, ''));
    return matchedData;
  });
  const filterData = orderedData.filter((item) => !isEmpty(item));

  return { seoMetadata: detail?.seoMetadata, data: filterData };
}

export default async function Layout({ children }) {
  const { data } = await getContent();

  return (
    <>
      <div className='guideSection'>
        <GuideNavbar data={data} />
        <div className='guiderightsection'>{children}</div>
      </div>
    </>
  );
}
