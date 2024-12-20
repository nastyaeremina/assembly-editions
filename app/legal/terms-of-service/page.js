import { HEADER_LIST, TERMS_OF_SERVICE_ID, TERMS_OF_SERVICE_SEO_ID } from '../../constants/constant';
import { getSitemap } from '../../lib/contentful-sitemap';
import TermsOfServicePage from '../../components/PageComponent/Legal/termOfServicePage';
import { getSEOData } from '../../helpers/helpers';
import Navbar from '../../components/navbar/navbar';
import AggregateRating from '../../components/aggregateRating';

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
      <main>
        <Navbar isEnterPrice={true} headerIndex={HEADER_LIST.ENTERPRICE} />
        <TermsOfServicePage content={content} />
      </main>
    </>
  );
}
