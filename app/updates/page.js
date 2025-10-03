import { CURRENT_SITE_URL, UPDATES_CTA_ID, UPDATES_SEO_ID } from '../constants/constant';
import { getSectionCTAContent } from '../lib/contentful-standardPage';
import { getUpdatesPosts } from '../lib/updates-content';
import { getSEOData } from '../helpers/helpers';
import UpdatesPage from '../components/PageComponent/Updates/updatesPage';
import { getExternalLinks } from '../helpers/serverSideHelpers';
import Layout from '../components/layout';
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
  const [allPosts, externalLinks, updatesCTA] = await Promise.all([
    getContent(),
    getExternalLinks({ asMap: true }),
    getSectionCTAContent(UPDATES_CTA_ID, false)
  ]);
  return (
    <>
      <AggregateRating id={UPDATES_SEO_ID} />
      <Layout>
        <UpdatesPage allPosts={allPosts} externalLinks={externalLinks} updatesCTA={updatesCTA} />
      </Layout>
    </>
  );
}
