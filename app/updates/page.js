import { CURRENT_SITE_URL, UPDATES_SEO_ID } from '../constants/constant';
import { getUpdatesPosts } from '../lib/updates-content';
import { getSEOData } from '../helpers/helpers';
import UpdatesPage from '../components/PageComponent/Updates/updatesPage';
import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import CTA from '../components/cta/cta';
import AggregateRating from '../components/aggregateRating';

// Force dynamic rendering to prevent static generation issues
export const dynamic = 'force-dynamic';

async function getContent() {
  const allPosts = await getUpdatesPosts({ page: 1 });
  return allPosts;
}

export async function generateMetadata() {
  const seoData = await getSEOData({ id: UPDATES_SEO_ID });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/updates` };
  return seoData;
}

export default async function Updates() {
  const allPosts = await getContent();
  return (
    <>
      <AggregateRating id={UPDATES_SEO_ID} />
      <Layout>
        <Navbar />
        <UpdatesPage allPosts={allPosts} />
        <CTA />
      </Layout>
    </>
  );
}
