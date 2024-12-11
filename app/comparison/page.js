import ComparisonPage from '../components/PageComponent/Comparison/comparisonPage';
import { getSEOData } from '../helpers/helpers';
import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import {
  getAllComparisonCategories,
  getAllCompetitor,
  getMasterComparisonDetail
} from './../lib/contentful-comparison';
import CTA from '../components/cta/cta';

async function getContent() {
  const categories = (await getAllComparisonCategories()) ?? [];

  const featuredCompetitorList = await getAllCompetitor();
  const details = await getMasterComparisonDetail();

  const comparisonListWithCategory = categories.map((category) => ({
    category,
    items: featuredCompetitorList.filter((item) => item.category === category)
  }));

  return { featuredCompetitorList: comparisonListWithCategory, details };
}

export async function generateMetadata({ params, searchParams }, parent) {
  const { details } = await getContent();
  const seoData = await getSEOData({ data: details?.seoMetadata });
  return seoData;
}

export default async function Comparison() {
  const { featuredCompetitorList, details } = await getContent();

  return (
    <>
      <Layout>
        <Navbar />
        <ComparisonPage featuredCompetitorList={featuredCompetitorList} details={details} />
        <CTA />
      </Layout>
    </>
  );
}
