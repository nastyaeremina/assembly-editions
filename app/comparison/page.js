import { draftMode } from 'next/headers';
import ComparisonPage from '../components/PageComponent/Comparison/comparisonPage';
import { getSEOData, isEmpty } from '../helpers/helpers';
import Layout from '../components/layout';
import AggregateRating from '../components/aggregateRating';
import NewCTA from '../components/cta/newCTA';
import { COMPARISON_PAGE_ID, CURRENT_SITE_URL } from '../constants/constant';
import { getPageContent } from '../helpers/serverSideHelpers';
import {
  getAllComparisonCategories,
  getAllCompetitor,
  getMasterComparisonDetail
} from './../lib/contentful-comparison';

async function getContent({ searchParams }) {
  const { isEnabled } = await draftMode();

  const {
    content: details,
    abTestContentLabel,
    abTestExperimentName
  } = await getPageContent({
    searchParams,
    cookieKey: 'comparison',
    fallbackContentId: COMPARISON_PAGE_ID,
    getContentFn: getMasterComparisonDetail
  });

  const categories = (await getAllComparisonCategories()) ?? [];

  const featuredCompetitorList = await getAllCompetitor(isEnabled);

  const comparisonListWithCategory = categories.map((category) => ({
    category,
    items: featuredCompetitorList.filter((item) => item.category === category)
  }));

  return { featuredCompetitorList: comparisonListWithCategory, details, abTestContentLabel, abTestExperimentName };
}

export async function generateMetadata({ searchParams }) {
  const { details } = await getContent({ searchParams });
  const seoData = await getSEOData({ data: details?.seoMetadata });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/comparison` };

  return seoData;
}

export default async function Comparison({ searchParams }) {
  const { featuredCompetitorList, details, abTestContentLabel, abTestExperimentName } = await getContent({
    searchParams
  });

  return (
    <>
      <AggregateRating data={details?.seoMetadata} />
      <Layout abTestContentLabel={abTestContentLabel} abTestExperimentName={abTestExperimentName}>
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
