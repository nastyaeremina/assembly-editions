import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import Layout from '../components/layout';
import { CURRENT_SITE_URL } from '../constants/constant';
import { getSEOData, isEmpty } from '../helpers/helpers';
import { getStandardPageContent } from '../lib/contentful-standardPage';
import StandardPage from '../components/standardPage/standaradPage';
import AggregateRating from '../components/aggregateRating';
import { getABTestInfoFromCookie } from '../helpers/serverSideHelpers';
const PAGE_TYPE = {
  DEFAULT: 0,
  STANDARD_PAGE: 1
};

/**
 * Fetches content for dynamic pages with A/B testing support.
 * Handles both product demo pages and standard pages with variant content.
 *
 * @param {Object} params - The route parameters
 * @param {string[]} params.slug - Array of path segments
 * @returns {Object} Object containing:
 *   - data: The page content
 *   - type: The page type (STANDARD_PAGE)
 *   - isABTest: Whether the content is from an A/B test
 *   - abTestContentLabel: The variant name if A/B test is active
 *   - abTestExperimentName: The experiment name if A/B test is active
 */
async function getContent({ slug }) {
  try {
    // Combine slug segments into a single path
    const combinedSlug = slug.join('/');
    const { isEnabled } = await draftMode();

    const { contentId, abTestContentLabel, abTestExperimentName } = getABTestInfoFromCookie({
      cookieKey: `${combinedSlug.replace(/\//g, '-')}`
    });

    // If not a product demo page, try to get standard page content
    // If we have a variant ID, use it to fetch the variant content
    // Otherwise, fetch content by slug
    const standardPageContent =
      isEmpty(contentId) || isEnabled
        ? await getStandardPageContent({ slug: combinedSlug, preview: isEnabled })
        : (await getStandardPageContent({ id: contentId, slug: combinedSlug, preview: isEnabled })) ?? {};

    // If we found standard page content, return it with A/B test information
    if (!isEmpty(standardPageContent)) {
      return {
        type: PAGE_TYPE.STANDARD_PAGE,
        data: standardPageContent,
        isABTest: !isEmpty(contentId),
        abTestContentLabel,
        abTestExperimentName
      };
    }

    // Return empty object if no content found
    return {};
  } catch (error) {
    console.error('Error in getContent:', error);
    return {};
  }
}

export async function generateMetadata({ params }) {
  const { data } = await getContent({ slug: params.slug });
  const combinedSlug = params.slug.join('/');

  const seoData = await getSEOData({ 
    data: data?.seoMetadata,
    canonical: `${CURRENT_SITE_URL}/${combinedSlug}`
  });

  return seoData;
}

export default async function WeeklyDemo({ params }) {
  const { data, type, isABTest, abTestContentLabel, abTestExperimentName } = await getContent({ slug: params.slug });
  const combinedSlug = params.slug.join('/');

  if (!isABTest && data?.slug !== combinedSlug) return notFound();

  return (
    <>
      <AggregateRating data={data.seoMetadata} />
      <Layout abTestContentLabel={abTestContentLabel} abTestExperimentName={abTestExperimentName}>
        {type === PAGE_TYPE.STANDARD_PAGE && (
          <>
            <StandardPage data={data?.contentCollection?.items} />
          </>
        )}
      </Layout>
    </>
  );
}
