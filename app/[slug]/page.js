import { notFound } from 'next/navigation';
import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import WeeklyHero from '../components/weeklyhero/weeklyhero';
import { PRODUCT_DEMO_PAGE_ID, WEEKLY_DEMO_PAGE_ID } from '../constants/constant';
import { getProductDemoContent, getWeeklyDemoContent } from '../lib/contentful-weeklyDemo';
import { getSEOData } from '../helpers/helpers';
import ProductDemoPage from '../components/PageComponent/ProductDemo/productDemoPage';

async function getContent() {
  const details = (await getWeeklyDemoContent(WEEKLY_DEMO_PAGE_ID)) ?? [];
  const productdetails = await getProductDemoContent(PRODUCT_DEMO_PAGE_ID);

  return {
    details,
    productdetails
  };
}

export async function generateMetadata({ params }) {
  const { details, productdetails } = await getContent();
  let data;
  if (params.slug === details?.slug) data = details;
  else if (params.slug === productdetails?.slug) data = productdetails;

  const seoData = await getSEOData({ data: data?.seoMetadata });
  return seoData;
}
export default async function WeeklyDemo({ params }) {
  const { details, productdetails } = await getContent();

  if (details.slug !== params.slug && productdetails?.slug !== params?.slug) return notFound();

  return (
    <Layout>
      <Navbar />
      {params.slug === details?.slug && <WeeklyHero data={details} />}
      {params.slug === productdetails?.slug && <ProductDemoPage details={productdetails} />}
    </Layout>
  );
}
