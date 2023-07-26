import Layout from './components/layout';
import Navbar from './components/navbar/navbar';
import CTA from './components/cta/cta';
import { HEADER_LIST, HOME_CLIENT_DARK_ID } from './constants/constant';
import { getHomeContent } from './lib/contentful-home';

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
  return (
    <>
      <Layout>
        <Navbar headerIndex={HEADER_LIST.ENTERPRICE} isModule={false} isEnterPrice={true} />
        <HomePage content={content}></HomePage>
        <CTA />
      </Layout>
    </>
  );
}
