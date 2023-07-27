import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import { HEADER_LIST, SITEMAP_CONTENT_ID, SITEMAP_SEO_ID } from '../constants/constant';
import { getSEOData } from '../helpers/helpers';
import { getSitemap } from '../lib/contentful-sitemap';
import SiteMapPage from '../components/PageComponent/Sitemap/sitemapPage';

async function getContent() {
  const content = (await getSitemap(SITEMAP_CONTENT_ID)) ?? '';
  return {
    content: content?.content
  };
}

export async function generateMetadata() {
  const seoData = await getSEOData({ id: SITEMAP_SEO_ID });
  seoData.canonical = 'https://www.copilot.com/sitemap';
  return seoData;
}

export default async function Sitemap() {
  const { content } = await getContent();

  return (
    <>
      <Layout>
        <Navbar isEnterPrice={true} headerIndex={HEADER_LIST.ENTERPRICE} />
        <SiteMapPage data={content} />
      </Layout>
    </>
  );
}
