import Layout from '../../components/layout';
import { getSEOData } from '../../helpers/helpers';
import { APPS_TYPE, APP_SEO_ID, CURRENT_SITE_URL } from '../../constants/constant';
import AppDirectoryPage from '../../components/PageComponent/Apps/directoryPage';
import { getAllPartnerApps } from '../../lib/contentful-partnerApps';
import CTA from '../../components/cta/cta';
import AggregateRating from '../../components/aggregateRating';
import { getExternalLinks } from '../../helpers/serverSideHelpers';

async function getAppDirectoryContent() {
  const allClientPosts = (await getAllPartnerApps(APPS_TYPE.CLIENT)) ?? [];
  const allInternalPosts = (await getAllPartnerApps(APPS_TYPE.INTERNAL)) ?? [];
  const featuredApps = allClientPosts?.filter((item) => item?.isFeatured === true);

  return { featuredApps, clientApps: allClientPosts, internalApps: allInternalPosts };
}

export async function generateMetadata() {
  const seoData = await getSEOData({ id: APP_SEO_ID });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/apps/directory` };
  return seoData;
}

export default async function Apps() {
  const [{ clientApps, internalApps, featuredApps }, externalLinks] = await Promise.all([
    getAppDirectoryContent(),
    getExternalLinks({ asMap: true })
  ]);

  return (
    <>
      <AggregateRating id={APP_SEO_ID} />
      <Layout>
        <div style={{ backgroundColor: 'var(--main-bg-color)' }}>
          <AppDirectoryPage clientApps={clientApps} internalApps={internalApps} featuredApps={featuredApps} externalLinks={externalLinks} />
          <CTA />
        </div>
      </Layout>
    </>
  );
}
