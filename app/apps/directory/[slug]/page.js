import { notFound } from 'next/navigation';
import Layout from '../../../components/layout';
import Navbar from '../../../components/navbar/navbar';
import { getAllPartnerApps, getPartnerAppDetail } from '../../../lib/contentful-partnerApps';
import { getRandomUniqueElements, getSEOData, isEmpty } from '../../../helpers/helpers';
import AppsDetailPage from '../../../components/PageComponent/Apps/appDetailPage';
import CTA from '../../../components/cta/cta';
import { getAppDirectoryContent } from '../page.js';
import { APPS_TYPE, STRING_END_OF_APP } from '../../../constants/constant.js';
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
  // Check if the name of the app ends with "app" (ignoring case)
  // Some app names are like "Billing App" or "Messaging App". To avoid repetitive use of the word "app", we handle it as follows:
  const appName = STRING_END_OF_APP.test(appDetail.name) ? appDetail.name : `${appDetail.name} App`;

  const seoTitle =
    appDetail?.appType === APPS_TYPE.EMBED
      ? `Embed ${appDetail.name} in your client portal | Copilot` // SEO title for embedded app
      : `Install ${appName} | Copilot`; // SEO title for Install App
  const seoData = await getSEOData({
    data: {
      seoTitle,
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
