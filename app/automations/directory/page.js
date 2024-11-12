import { getSEOData, isEmpty } from '../../helpers/helpers';
import { AUTOMATION_SEO_ID, PER_API_LIMIT_FOR_AUTOMATION } from '../../constants/constant';
import { getAllAutomationCategories, getAllAutomations } from '../../lib/contentful-automation';
import AutomationDirectoryPage from '../../components/PageComponent/Automation/directoryPage';
import Layout from '../../components/layout';
import CTA from '../../components/cta/cta';
import Navbar from '../../components/navbar/navbar';

async function getContent() {
  let allPosts = [];
  let data = [];
  let page = 0;
  do {
    const skip = page * PER_API_LIMIT_FOR_AUTOMATION;
    data = (await getAllAutomations(skip)) || [];
    allPosts = allPosts.concat(data);

    if (data?.length !== PER_API_LIMIT_FOR_AUTOMATION) break;
    // eslint-disable-next-line no-plusplus
    else page++;
  } while (data?.length !== 0);

  const allCategory = (await getAllAutomationCategories()) ?? [];
  const featuredApps = allPosts?.filter((item) => item?.isFeatures === true);

  let allCategoryWithPost = [];

  allCategory?.forEach((item) => {
    const filterList = allPosts?.filter((element) =>
      element?.automationsCategories?.some((category) => category === item)
    );
    if (!isEmpty(filterList)) allCategoryWithPost?.push({ category: item, list: filterList });
  });

  return { featuredApps, allCategoryWithPost, allPosts };
}

export async function generateMetadata({ params, searchParams }, parent) {
  const seoData = await getSEOData({ id: AUTOMATION_SEO_ID });
  return seoData;
}

export default async function AutomationDirectory() {
  const { featuredApps, allCategoryWithPost, allPosts } = await getContent();

  return (
    <>
      <Layout>
        <div style={{ backgroundColor: 'var(--main-bg-color)' }}>
          <Navbar />
          <AutomationDirectoryPage
            featuredApps={featuredApps}
            allCategoryWithPost={allCategoryWithPost}
            allPosts={allPosts}
          />
          <CTA />
        </div>
      </Layout>
    </>
  );
}
