import { notFound } from 'next/navigation';
import Layout from '../../../components/layout';
import Navbar from '../../../components/navbar/navbar';
import { getAllPartnerApps, getPartnerAppDetail } from '../../../lib/contentful-partnerApps';
import { getSEOData, isEmpty } from '../../../helpers/helpers';
import AppsDetailPage from '../../../components/PageComponent/Apps/appDetailPage';

async function getContent({ slug }) {
  const appDetail = (await getPartnerAppDetail(slug)) ?? {};
  // const allPosts = (await getAllPartnerAppsWithSlug()) ?? [];
  let relatedApps = [];
  if (!isEmpty(appDetail)) {
    const allPosts = (await getAllPartnerApps(appDetail?.appsType)) ?? [];
    const categoryList = appDetail?.partnerAppCategoriesCollection?.items?.map((item) => item?.slug);
    relatedApps = allPosts
      ?.filter(
        (item) =>
          item?.partnerAppCategoriesCollection &&
          item?.partnerAppCategoriesCollection?.items?.some((element) => categoryList.includes(element?.slug)) &&
          item?.slug !== slug
      )
      ?.slice(0, 4);
  }
  return {
    appDetail,
    relatedApps
  };
}

export async function generateMetadata({ params }) {
  const { appDetail } = await getContent({ slug: params.slug });

  const seoData = await getSEOData({
    data: {
      seoTitle: `Embed ${appDetail?.name} in your client portal | Copilot`,
      description: appDetail?.description,
      canonical: 'https://www.copilot.com/apps/directory' + appDetail?.slug
    }
  });
  return seoData;
}

export default async function AppsDetail({ params }) {
  const { appDetail, relatedApps } = await getContent({ slug: params.slug });
  if (isEmpty(appDetail)) return notFound();

  return (
    <>
      <Layout>
        <Navbar />
        <AppsDetailPage appDetail={appDetail} relatedApps={relatedApps} />
      </Layout>
    </>
  );
}
