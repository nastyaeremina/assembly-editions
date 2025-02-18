import BrandPage from '../components/PageComponent/Brand/brandPage';
import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import { getSEOData } from '../helpers/helpers';
import AggregateRating from '../components/aggregateRating';
import { BRAND_SEO_ID, CURRENT_SITE_URL } from './../constants/constant';

export async function generateMetadata({ params, searchParams }, parent) {
  const seoData = await getSEOData({ id: BRAND_SEO_ID });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/brand` };
  return seoData;
}
export default function Brand() {
  return (
    <>
      <AggregateRating id={BRAND_SEO_ID} />
      <Layout>
        <Navbar />
        <BrandPage />
      </Layout>
    </>
  );
}
