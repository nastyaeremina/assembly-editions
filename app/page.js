import Layout from './components/layout';
import { CURRENT_SITE_URL, HOME_CLIENT_DARK_ID } from './constants/constant';
import { getHomeContent } from './lib/contentful-home';
import AggregateRating from './components/aggregateRating';
import { getPageContent, getSocialMediaLinks, getExternalLinks } from './helpers/serverSideHelpers';
import HomePage from './components/Home/homepage/homepage';
import { createArrayWithFixedLength, getSEOData, isEmpty, removeEmptyElement } from './helpers/helpers';
import NewCTA from './components/cta/newCTA';

/**
 * Fetches home page content and social media links concurrently.
 * Uses Promise.all for better performance and includes error handling.
 * 
 * @param {Object} params - Function parameters
 * @param {Object} params.searchParams - URL search parameters
 * @returns {Promise<Object>} - Promise that resolves to home page content object
 * @returns {Object} returns.content - The home page content
 * @returns {string} returns.abTestContentLabel - AB test content label
 * @returns {string} returns.abTestExperimentName - AB test experiment name
 * @returns {Array} returns.socialMediaLinks - Array of social media links
 * 
 * @example
 * const { content, abTestContentLabel, abTestExperimentName, socialMediaLinks } = await getContent({ searchParams });
 */
async function getContent({ searchParams }) {
  try {
    // Fetch home page content and social media links concurrently
    const [{ content, abTestContentLabel, abTestExperimentName }, socialMediaLinks, externalLinks] = await Promise.all([
      getPageContent({
        searchParams,
        cookieKey: 'home',
        fallbackContentId: HOME_CLIENT_DARK_ID,
        getContentFn: getHomeContent
      }),
      getSocialMediaLinks({ linksOnly: true }),
      getExternalLinks({ asMap: true })
    ]);

    return { 
      content, 
      abTestContentLabel, 
      abTestExperimentName, 
      socialMediaLinks: socialMediaLinks || [],
      externalLinks: externalLinks || {}
    };
  } catch (error) {
    console.error('Error fetching home page content:', error);
    
    // Return empty data as fallback in case of error
    return { 
      content: {}, 
      abTestContentLabel: '', 
      abTestExperimentName: '', 
      socialMediaLinks: [],
      externalLinks: {}
    };
  }
}

export async function generateMetadata({ params, searchParams }, parent) {
  const { content: data } = await getContent({ searchParams });
  if (isEmpty(data.seoMetadata)) {
    return;
  }
  const seoData = await getSEOData({ id: data.seoMetadata.sys.id, data: data.seoMetadata });
  seoData.alternates = { canonical: CURRENT_SITE_URL };

  return seoData;
}

export default async function Home({ searchParams }) {
  const { content, abTestContentLabel, abTestExperimentName ,socialMediaLinks, externalLinks} = await getContent({ searchParams });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Copilot',
    url: CURRENT_SITE_URL,
    logo: `${CURRENT_SITE_URL}/_next/static/media/blacklogo.370e156c.svg`,
    sameAs: socialMediaLinks
  };
  const testimonialTableData = createArrayWithFixedLength(
    removeEmptyElement(content?.section7DataCollection?.items),
    18
  );
  return (
    <>
      {!isEmpty(content?.seoMetadata) && <AggregateRating id={content?.seoMetadata.sys.id} />}
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Layout abTestContentLabel={abTestContentLabel} abTestExperimentName={abTestExperimentName}>
        <HomePage content={content} testimonialTableData={testimonialTableData} externalLinks={externalLinks} />
        {!isEmpty(content?.ctaSection) && (
          <NewCTA
            title={content.ctaSection.title}
            description={content.ctaSection.description}
            primaryButtonText={content.ctaSection.primaryButtonText}
            primaryButtonLink={content.ctaSection.primaryButtonLink}
            secondaryButtonText={content.ctaSection.secondaryButtonText}
            secondaryButtonLink={content.ctaSection.secondaryButtonLink}
            banner={content.ctaSection.banner?.url}
          />
        )}
      </Layout>
    </>
  );
}
