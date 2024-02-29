import { UPDATES_SEO_ID } from '../constants/constant';
import { getUpdatesPosts } from '../lib/updates-content';
import { getSEOData } from '../helpers/helpers';
import UpdatesPage from '../components/PageComponent/Updates/updatesPage';
import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import CTA from '../components/cta/cta';

async function getContent() {
  const allPosts = await getUpdatesPosts({ page: 1 });
  return allPosts;
}

export async function generateMetadata() {
  const seoData = await getSEOData({ id: UPDATES_SEO_ID });
  seoData.alternates = { canonical: 'https://www.copilot.com/updates' };
  return seoData;
}

export default async function Updates() {
  const allPosts = await getContent();
  return (
    <>
      <Layout>
        <Navbar />
        <UpdatesPage allPosts={allPosts} />
        <CTA />
      </Layout>
    </>
  );
}
