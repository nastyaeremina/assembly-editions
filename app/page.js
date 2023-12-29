import Layout from './components/layout';
import Navbar from './components/navbar/navbar';
import CTA from './components/cta/cta';
import { HEADER_LIST, HOME_CLIENT_DARK_ID } from './constants/constant';
import { getHomeContent } from './lib/contentful-home';
import { getAllPartnerAppsWithSlug } from './lib/contentful-partnerApps';

import HomePage from './components/Home/homepage/homepage';
import { getSEOData } from './helpers/helpers';

async function getContent() {
  return await getHomeContent(HOME_CLIENT_DARK_ID);
}

export async function generateMetadata({ params, searchParams }, parent) {
  const data = await getContent();
  const seoData = await getSEOData({ id: data.seoMetadata.sys.id, data: data.seoMetadata });
  return seoData;
}

export default async function Home() {
  const content = await getContent();
  const appsPost = (await getAllPartnerAppsWithSlug()) ?? []; // appa
  const appsPostsPathList = appsPost?.map((item) => `apps/directory/${item?.slug}`);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Copilot',
    url: 'https://www.copilot.com',
    logo: 'https://www.copilot.com/_next/static/media/blacklogo.370e156c.svg',
    sameAs: [
      'https://twitter.com/copilot',
      'https://www.linkedin.com/company/copilotplatforms/',
      'https://www.youtube.com/@copilotplatforms',
      'https://www.facebook.com/copilotplatforms',
      'https://www.instagram.com/copilotplatforms/'
    ]
  };
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Layout>
        <Navbar headerIndex={HEADER_LIST.ENTERPRICE} isModule={false} isEnterPrice={true} />
        <HomePage content={content}></HomePage>
        <CTA />
      </Layout>
    </>
  );
}
