import ComparisonPage from '../components/PageComponent/Comparison/comparisonPage';
import { getSEOData } from '../helpers/helpers';
import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import AggregateRating from '../components/aggregateRating';
import NewCTA from '../components/cta/newCTA';
import {
  getAllComparisonCategories,
  getAllCompetitor,
  getMasterComparisonDetail
} from './../lib/contentful-comparison';

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
      <AggregateRating data={details?.seoMetadata} />
      <Layout>
        <Navbar />
        <ComparisonPage featuredCompetitorList={featuredCompetitorList} details={details} />
        <NewCTA
          title={details.ctaSection.title}
          description={details.ctaSection.description}
          primaryButtonText={details.ctaSection.primaryButtonText}
          primaryButtonLink={details.ctaSection.primaryButtonLink}
          secondaryButtonText={details.ctaSection.secondaryButtonText}
          secondaryButtonLink={details.ctaSection.secondaryButtonLink}
          banner={details.ctaSection.banner?.url}
        />
      </Layout>
    </>
  );
}
