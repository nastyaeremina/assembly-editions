import { notFound } from 'next/navigation';
import Layout from '../../../components/layout';
import Navbar from '../../../components/navbar/navbar';
import { getAllPartnerApps, getPartnerAppDetail } from '../../../lib/contentful-partnerApps';
import { getRandomUniqueElements, getSEOData, isEmpty } from '../../../helpers/helpers';
import AppsDetailPage from '../../../components/PageComponent/Apps/appDetailPage';
import CTA from '../../../components/cta/cta';
import { getAppDirectoryContent } from '../page.js';
async function getContent({ slug }) {
  const appDetail = (await getPartnerAppDetail(slug)) ?? {};
  const { clientApps, internalApps } = await getAppDirectoryContent();
  //create new app list that have all apps except current app
  const otherApps = [...clientApps, ...internalApps].filter((item) => item.slug !== slug);
  const relatedApps = getRandomUniqueElements(otherApps, 8);

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
        <AppsDetailPage appDetail={appDetail} relatedAppList={relatedApps} />
        <CTA />
      </Layout>
    </>
  );
}
