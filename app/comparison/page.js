import ComparisonPage from '../components/PageComponent/Comparison/comparisonPage';
import { getSEOData } from '../helpers/helpers';
import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import {
  getAllCompetitor,
  getAllCompetitorComparisonDetail,
  getMasterComparisonDetail
} from './../lib/contentful-comparison';
import CTA from '../components/cta/cta';

async function getContent() {
  const featuredCompetitorList = await getAllCompetitor();
  const details = await getMasterComparisonDetail();
  const comparisonList = await getAllCompetitorComparisonDetail();
  return { featuredCompetitorList, details, comparisonList };
}

export async function generateMetadata({ params, searchParams }, parent) {
  const { details } = await getContent();
  const seoData = await getSEOData({ data: details?.seoMetadata });
  return seoData;
}

export default async function Comparison() {
  const { featuredCompetitorList, details, comparisonList } = await getContent();

  return (
    <>
      <Layout>
        <Navbar />
        <ComparisonPage
          featuredCompetitorList={featuredCompetitorList}
          details={details}
          comparisonList={comparisonList}
        />
        <CTA />
      </Layout>
    </>
  );
}
