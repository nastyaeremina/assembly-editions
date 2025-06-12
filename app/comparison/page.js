import ComparisonPage from '../components/PageComponent/Comparison/comparisonPage';
import { getSEOData, isEmpty } from '../helpers/helpers';
import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import AggregateRating from '../components/aggregateRating';
import NewCTA from '../components/cta/newCTA';
import { COMPARISON_PAGE_ID, CURRENT_SITE_URL } from '../constants/constant';
import { getABTestInfoFromCookie } from '../helpers/serverSideHelpers';
import {
  getAllComparisonCategories,
  getAllCompetitor,
  getMasterComparisonDetail
} from './../lib/contentful-comparison';

async function getContent() {
  const {
    contentId,
    abTestContentLabel,
    abTestExperimentName
  } = getABTestInfoFromCookie({
    cookieKey: 'comparison',
    fallbackContentId: COMPARISON_PAGE_ID
  });

  const categories = (await getAllComparisonCategories()) ?? [];

  const featuredCompetitorList = await getAllCompetitor();
  const details = await getMasterComparisonDetail({id: contentId});

  const comparisonListWithCategory = categories.map((category) => ({
    category,
    items: featuredCompetitorList.filter((item) => item.category === category)
  }));

  return { featuredCompetitorList: comparisonListWithCategory, details, abTestContentLabel, abTestExperimentName };
}

export async function generateMetadata({ params, searchParams }, parent) {
  const { details } = await getContent();
  const seoData = await getSEOData({ data: details?.seoMetadata });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/comparison` };

  return seoData;
}

export default async function Comparison() {
  const { featuredCompetitorList, details, abTestContentLabel, abTestExperimentName } = await getContent();

  return (
    <>
      <AggregateRating data={details?.seoMetadata} />
      <Layout abTestContentLabel={abTestContentLabel} abTestExperimentName={abTestExperimentName}>
        <Navbar />
        <ComparisonPage featuredCompetitorList={featuredCompetitorList} details={details} />
        {!isEmpty(details.ctaSection) && (
          <NewCTA
            title={details.ctaSection.title}
            description={details.ctaSection.description}
            primaryButtonText={details.ctaSection.primaryButtonText}
            primaryButtonLink={details.ctaSection.primaryButtonLink}
            secondaryButtonText={details.ctaSection.secondaryButtonText}
            secondaryButtonLink={details.ctaSection.secondaryButtonLink}
            banner={details.ctaSection.banner?.url}
          />
        )}
      </Layout>
    </>
  );
}
