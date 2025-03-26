import Layout from './components/layout';
import Navbar from './components/navbar/navbar';
import { CURRENT_SITE_URL, HOME_CLIENT_DARK_ID } from './constants/constant';
import { getHomeContent } from './lib/contentful-home';
import AggregateRating from './components/aggregateRating';

import HomePage from './components/Home/homepage/homepage';
import { createArrayWithFixedLength, getSEOData, removeEmptyElement } from './helpers/helpers';
import NewCTA from './components/cta/newCTA';
import { COPILOT_TWITTER_LINK } from './constants/externalLinks';

async function getContent() {
  return await getHomeContent(HOME_CLIENT_DARK_ID);
}

export async function generateMetadata({ params, searchParams }, parent) {
  const data = await getContent();
  const seoData = await getSEOData({ id: data.seoMetadata.sys.id, data: data.seoMetadata });
  seoData.alternates = { canonical: CURRENT_SITE_URL };

  return seoData;
}

export default async function Home() {
  const content = await getContent();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Copilot',
    url: CURRENT_SITE_URL,
    logo: `${CURRENT_SITE_URL}/_next/static/media/blacklogo.370e156c.svg`,
    sameAs: [
      COPILOT_TWITTER_LINK,
      'https://www.linkedin.com/company/copilotplatforms/',
      'https://www.youtube.com/@copilotplatforms',
      'https://www.facebook.com/copilotplatforms',
      'https://www.instagram.com/copilotplatforms/'
    ]
  };
  const testimonialTableData = createArrayWithFixedLength(
    removeEmptyElement(content?.section7DataCollection?.items),
    18
  );
  return (
    <>
      <AggregateRating id={content?.seoMetadata.sys.id} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Layout>
        <Navbar />
        <HomePage content={content} testimonialTableData={testimonialTableData}></HomePage>
        <NewCTA
          title={content.ctaSection.title}
          description={content.ctaSection.description}
          primaryButtonText={content.ctaSection.primaryButtonText}
          primaryButtonLink={content.ctaSection.primaryButtonLink}
          secondaryButtonText={content.ctaSection.secondaryButtonText}
          secondaryButtonLink={content.ctaSection.secondaryButtonLink}
          banner={content.ctaSection.banner?.url}
        />
      </Layout>
    </>
  );
}
