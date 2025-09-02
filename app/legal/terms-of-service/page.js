import { TERMS_OF_SERVICE_ID, TERMS_OF_SERVICE_SEO_ID } from '../../constants/constant';
import { getSitemap } from '../../lib/contentful-sitemap';
import TermsOfServicePage from '../../components/PageComponent/Legal/termOfServicePage';
import { getSEOData } from '../../helpers/helpers';
import AggregateRating from '../../components/aggregateRating';
import Layout from '../../components/layout';

async function getContent() {
  const data = await getSitemap(TERMS_OF_SERVICE_ID);
  return { content: data?.content };
}

export async function generateMetadata() {
  const seoData = await getSEOData({ id: TERMS_OF_SERVICE_SEO_ID });
  return seoData;
}

export default async function TermsOfService() {
  const { content } = await getContent();
  return (
    <>
      <AggregateRating id={TERMS_OF_SERVICE_SEO_ID} />
      <Layout>
        <TermsOfServicePage content={content} />
      </Layout>
    </>
  );
}
