import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers'
import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import WeeklyHero from '../components/weeklyhero/weeklyhero';
import { CURRENT_SITE_URL, PRODUCT_DEMO_PAGE_ID } from '../constants/constant';
import { getProductDemoContent } from '../lib/contentful-weeklyDemo';
import { getSEOData, isEmpty } from '../helpers/helpers';
import ProductDemoPage from '../components/PageComponent/ProductDemo/productDemoPage';
import { getStandardPageContent } from '../lib/contentful-standardPage';
import StandardPage from '../components/standardPage/standaradPage';
import AggregateRating from '../components/aggregateRating';
import { getABTestInfoFromCookie } from '../helpers/serverSideHelpers';

const PAGE_TYPE = {
  DEFAULT: 0,
  STANDARD_PAGE: 1,
  WEEKLY_DEMO: 2,
  PRODUCT_DEMO: 3
};

/**
 * Fetches content for dynamic pages with A/B testing support.
 * Handles both product demo pages and standard pages with variant content.
 * 
 * @param {Object} params - The route parameters
 * @param {string[]} params.slug - Array of path segments
 * @returns {Object} Object containing:
 *   - data: The page content
 *   - type: The page type (PRODUCT_DEMO or STANDARD_PAGE)
 *   - isABTest: Whether the content is from an A/B test
 *   - abTestContentLabel: The variant name if A/B test is active
 *   - abTestExperimentName: The experiment name if A/B test is active
 */
async function getContent({ slug }) {
  try {
    // Combine slug segments into a single path
    const combinedSlug = slug.join('/');
    const { isEnabled } = await draftMode()

    const {
      contentId,
      abTestContentLabel,
      abTestExperimentName
    } = getABTestInfoFromCookie({
      cookieKey: `${combinedSlug.replace(/\//g, '-')}`    });
  
    // Try to get product demo content first
    // Use variant ID if available, otherwise use default product demo page ID
    const productdetails = await getProductDemoContent(contentId || PRODUCT_DEMO_PAGE_ID);
    
    // Check if this is a product demo page
    // Either the slug matches or we have a variant content ID
    if (!isEmpty(productdetails) && (productdetails.slug === combinedSlug || !isEmpty(contentId))) {
      return {
        data: productdetails,
        type: PAGE_TYPE.PRODUCT_DEMO,
        isABTest: !isEmpty(contentId),
        abTestContentLabel,
        abTestExperimentName
      };
    }
    
    // If not a product demo page, try to get standard page content
    // If we have a variant ID, use it to fetch the variant content
    // Otherwise, fetch content by slug
    const standardPageContent = isEmpty(contentId)|| isEnabled
      ? await getStandardPageContent({ slug: combinedSlug, preview: isEnabled })
      : await getStandardPageContent({ id: contentId, slug: combinedSlug, preview: isEnabled }) ?? {};
    
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

  const seoData = await getSEOData({ data: data?.seoMetadata });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/${combinedSlug}` };

  return seoData;
}
export default async function WeeklyDemo({ params }) {
  const { data, type, isABTest, abTestContentLabel, abTestExperimentName } = await getContent({ slug: params.slug });
  const combinedSlug = params.slug.join('/');

  if (!isABTest &&data?.slug !== combinedSlug) return notFound();

  return (
    <>
      <AggregateRating data={data.seoMetadata} />
      <Layout abTestContentLabel={abTestContentLabel} abTestExperimentName={abTestExperimentName}>
        <Navbar />
        {type === PAGE_TYPE.WEEKLY_DEMO && <WeeklyHero data={data} />}
        {type === PAGE_TYPE.PRODUCT_DEMO && <ProductDemoPage details={data} />}
        {type === PAGE_TYPE.STANDARD_PAGE && (
          <>
            <StandardPage data={data?.contentCollection?.items} />
          </>
        )}
      </Layout>
    </>
  );
}
