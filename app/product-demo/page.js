import ProductDemoPage from '../components/PageComponent/ProductDemo/productDemoPage';
import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import { getSEOData } from '../helpers/helpers';
import { PRODUCT_DEMO_PAGE_ID } from './../constants/constant';
import { getProductDemoContent } from './../lib/contentful-weeklyDemo';

async function getContent() {
  const details = await getProductDemoContent(PRODUCT_DEMO_PAGE_ID);
  return details;
}

export async function generateMetadata() {
  const details = await getContent();
  const seoData = await getSEOData({ data: details?.seoMetadata });
  return seoData;
}

export default async function ProductDemo() {
  const details = await getContent();
  return (
    <>
      <Layout>
        <Navbar />
        <ProductDemoPage details={details} />
      </Layout>
    </>
  );
}
