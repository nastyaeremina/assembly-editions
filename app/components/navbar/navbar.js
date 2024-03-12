import { cookies } from 'next/headers';
import { isEmpty } from '../../helpers/helpers';
import { getSitemap } from '../../lib/contentful-sitemap';
import { SOLUTION_TYPE, TOP_BAR_CONTENT_ID } from '../../constants/constant';
import { getAllNavbarSolution } from '../../lib/contentful-solutions';
import NavbarComponent from './mainNavbar';
import { getNavbarFeature } from '../../lib/contentful-features';

export async function getTopBarContent() {
  const data = (await getSitemap(TOP_BAR_CONTENT_ID)) ?? '';
  const solutionDataList = (await getAllNavbarSolution()) ?? [];
  let topbarContent = null;
  if (!isEmpty(data?.content)) {
    const contentList = data?.content?.split(/[\[\]\(\)]/);

    const item = {
      title: contentList?.[1],
      url: contentList?.[3]
    };
    topbarContent = item;
  }
  const featureData = (await getNavbarFeature()) ?? [];
  return { topbarContent, solutionDataList, featureData };
}

export default async function Navbar({ colorList, isModule, headerIndex, isEnterPrice }) {
  const cookie = cookies().get('current-portal-session');
  const { topbarContent, solutionDataList, featureData } = await getTopBarContent();

  // Filter solutionDataList to get items that  solutionType is industry
  const solutionIndustryList = solutionDataList?.filter((item) => item?.solutionType === SOLUTION_TYPE.INDUSTRY);
  return (
    <>
      <NavbarComponent
        isModule={isModule}
        headerIndex={headerIndex}
        navbarColorList={colorList}
        isEnterPrice={isEnterPrice}
        isAuthenticated={!isEmpty(cookie?.value)}
        topbarContent={topbarContent}
        solutionDataList={solutionIndustryList}
        featureData={featureData}
      />
    </>
  );
}
