import { notFound } from 'next/navigation';
import { cookies, draftMode } from 'next/headers';
import Layout from '../../../components/layout';
import Navbar from '../../../components/navbar/navbar';
import { getAllPartnerApps, getPartnerAppDetail } from '../../../lib/contentful-partnerApps';
import { getRandomUniqueElements, getSEOData, isEmpty } from '../../../helpers/helpers';
import AppsDetailPage from '../../../components/PageComponent/Apps/appDetailPage';
import CTA from '../../../components/cta/cta';
import { APPS_TYPE, CURRENT_SITE_URL, STRING_END_OF_APP } from '../../../constants/constant.js';

async function getContent({ slug }) {
  const { isEnabled } = await draftMode()
  const appDetail = (await getPartnerAppDetail(slug, isEnabled)) ?? {};
  const clientApps = (await getAllPartnerApps(APPS_TYPE.CLIENT, isEnabled)) ?? [];
  const internalApps = (await getAllPartnerApps(APPS_TYPE.INTERNAL, isEnabled)) ?? [];

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
      canonical: `${CURRENT_SITE_URL}/apps/directory/${appDetail?.slug}`
    }
  });
  return seoData;
}

export default async function AppsDetail({ params }) {
  const { appDetail, relatedApps } = await getContent({ slug: params.slug });
  if (isEmpty(appDetail)) return notFound();
  const cookie = cookies().get('current-portal-session');
  const isUserAuthenticated = !isEmpty(cookie?.value);
  return (
    <>
      <Layout>
        <Navbar />
        <AppsDetailPage isUserAuthenticated={isUserAuthenticated} appDetail={appDetail} relatedAppList={relatedApps} />
        <CTA />
      </Layout>
    </>
  );
}
