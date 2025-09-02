import Layout from './components/layout';
import { CURRENT_SITE_URL, HOME_CLIENT_DARK_ID } from './constants/constant';
import { getHomeContent } from './lib/contentful-home';
import AggregateRating from './components/aggregateRating';
import { getPageContent } from './helpers/serverSideHelpers';
import HomePage from './components/Home/homepage/homepage';
import { createArrayWithFixedLength, getSEOData, isEmpty, removeEmptyElement } from './helpers/helpers';
import NewCTA from './components/cta/newCTA';
import {
  COPILOT_FACEBOOK_LINK,
  COPILOT_INSTAGRAM_LINK,
  COPILOT_LINKEDIN_LINK,
  COPILOT_TWITTER_LINK,
  COPILOT_YOUTUBE_CHANNEL_LINK
} from './constants/externalLinks';

async function getContent({ searchParams }) {
  return getPageContent({
    searchParams,
    cookieKey: 'home',
    fallbackContentId: HOME_CLIENT_DARK_ID,
    getContentFn: getHomeContent
  });
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
  const { content, abTestContentLabel, abTestExperimentName } = await getContent({ searchParams });
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Copilot',
    url: CURRENT_SITE_URL,
    logo: `${CURRENT_SITE_URL}/_next/static/media/blacklogo.370e156c.svg`,
    sameAs: [
      COPILOT_TWITTER_LINK,
      COPILOT_LINKEDIN_LINK,
      COPILOT_YOUTUBE_CHANNEL_LINK,
      COPILOT_FACEBOOK_LINK,
      COPILOT_INSTAGRAM_LINK
    ]
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
        <HomePage content={content} testimonialTableData={testimonialTableData} />
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
