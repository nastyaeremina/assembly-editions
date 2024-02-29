import Layout from '../../components/layout';

import { getSEOData, isEmpty } from '../../helpers/helpers';
import { APPS_TYPE, APP_SEO_ID } from '../../constants/constant';
import AppDirectoryPage from '../../components/PageComponent/Apps/directoryPage';
import { getAllParrtnerAppsCategories, getAllPartnerApps } from '../../lib/contentful-partnerApps';
import Navbar from '../../components/navbar/navbar';
import CTA from '../../components/cta/cta';

async function getContent() {
  const allCategory = (await getAllParrtnerAppsCategories()) ?? [];

  //start get static props
  const allClientPosts = (await getAllPartnerApps(APPS_TYPE.CLIENT)) ?? [];
  const allInternalPosts = (await getAllPartnerApps(APPS_TYPE.INTERNAL)) ?? [];
  const featuredApps = allClientPosts?.filter(
    (item) => item?.isFeatured === true && item?.appsType === APPS_TYPE.CLIENT
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  let allCategoryWithPost = [];

  allCategory?.forEach((item) => {
    //for client
    const filterClientList = allClientPosts?.filter((element) =>
      element?.partnerAppCategoriesCollection?.items?.some((category) => category?.slug === item?.slug)
    );
    // for Internal
    const filterInternalList = allInternalPosts?.filter((element) =>
      element?.partnerAppCategoriesCollection?.items?.some((category) => category?.slug === item?.slug)
    );
    const newitem = { category: item };
    if (!isEmpty(filterClientList)) newitem['clientList'] = filterClientList;
    if (!isEmpty(filterInternalList)) newitem['internalList'] = filterInternalList;
    allCategoryWithPost?.push(newitem);
  });
  let allPosts = allClientPosts.concat(allInternalPosts);

  return { allPosts, featuredApps, allCategoryWithPost };
}

export async function generateMetadata({ params, searchParams }, parent) {
  const seoData = await getSEOData({ id: APP_SEO_ID });
  seoData.alternates = { canonical: 'https://www.copilot.com/apps' };
  return seoData;
}

export default async function Apps() {
  const { allCategoryWithPost, allPosts, featuredApps } = await getContent();

  return (
    <>
      <Layout>
        <div style={{ backgroundcolor: '#fffffd' }}>
          <Navbar />
          <AppDirectoryPage allCategoryWithPost={allCategoryWithPost} allPosts={allPosts} featuredApps={featuredApps} />
          <CTA />
        </div>
      </Layout>
    </>
  );
}
