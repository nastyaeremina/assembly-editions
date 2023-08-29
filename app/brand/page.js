import BrandPage from '../components/PageComponent/Brand/brandPage';
import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import { getSEOData } from '../helpers/helpers';
import { BRAND_SEO_ID } from './../constants/constant';

export async function generateMetadata({ params, searchParams }, parent) {
  const seoData = await getSEOData({ id: BRAND_SEO_ID });
  seoData.alternates = { canonical: 'https://www.copilot.com/brand' };
  return seoData;
}
export default function Brand() {
  return (
    <>
      <Layout>
        <Navbar />
        <BrandPage />
      </Layout>
    </>
  );
}
