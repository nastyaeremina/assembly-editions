import { notFound } from 'next/navigation';
import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import WeeklyHero from '../components/weeklyhero/weeklyhero';
import { PRODUCT_DEMO_PAGE_ID, WEEKLY_DEMO_PAGE_ID } from '../constants/constant';
import { getProductDemoContent, getWeeklyDemoContent } from '../lib/contentful-weeklyDemo';
import { getSEOData, isEmpty } from '../helpers/helpers';
import ProductDemoPage from '../components/PageComponent/ProductDemo/productDemoPage';
import { getStandardPageContent } from '../lib/contentful-standardPage';
import StandardPage from '../components/standardPage/standaradPage';

const PAGE_TYPE = {
  DEFAULT: 0,
  STANDARD_PAGE: 1,
  WEEKLY_DEMO: 2,
  PRODUCT_DEMO: 3
};
async function getContent({ slug }) {
  const details = (await getWeeklyDemoContent(WEEKLY_DEMO_PAGE_ID)) ?? [];
  if (!isEmpty(details) && details.slug === slug) return { data: details, type: PAGE_TYPE.WEEKLY_DEMO };

  const productdetails = await getProductDemoContent(PRODUCT_DEMO_PAGE_ID);
  if (!isEmpty(productdetails) && productdetails.slug === slug) {
    return { data: productdetails, type: PAGE_TYPE.PRODUCT_DEMO };
  }

  const standardPageContent = (await getStandardPageContent(slug)) ?? {};
  if (!isEmpty(standardPageContent))
    return {
      type: PAGE_TYPE.STANDARD_PAGE,
      data: standardPageContent
    };

  return {};
}

export async function generateMetadata({ params }) {
  const { data } = await getContent({ slug: params.slug });

  const seoData = await getSEOData({ data: data?.seoMetadata });
  return seoData;
}
export default async function WeeklyDemo({ params }) {
  const { data, type } = await getContent({ slug: params.slug });
  if (data?.slug !== params.slug) return notFound();

  return (
    <Layout>
      <Navbar />
      {type === PAGE_TYPE.WEEKLY_DEMO && <WeeklyHero data={data} />}
      {type === PAGE_TYPE.PRODUCT_DEMO && <ProductDemoPage details={data} />}
      {type === PAGE_TYPE.STANDARD_PAGE && <StandardPage data={data?.contentCollection?.items} />}
    </Layout>
  );
}
