import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import Layout from './components/layout';
import { getStandardPageContent } from './lib/contentful-standardPage';
import { getSEOData, isEmpty } from './helpers/helpers';
import AggregateRating from './components/aggregateRating';
import StandardPage from './components/standardPage/standaradPage';
import { getABTestInfoFromCookie } from './helpers/serverSideHelpers';
import { CURRENT_SITE_URL } from './constants/constant';

export async function generateMetadata() {
  try {
    const { isEnabled } = await draftMode();
    const { contentId } = getABTestInfoFromCookie({ cookieKey: 'home' });

    const data =
      isEmpty(contentId) || isEnabled
        ? await getStandardPageContent({ slug: '/', preview: isEnabled })
        : (await getStandardPageContent({ id: contentId, slug: '/', preview: isEnabled })) ?? {};

    if (!data?.seoMetadata) return;

    const seoData = await getSEOData({ data: data?.seoMetadata });
    seoData.alternates = { canonical: `${CURRENT_SITE_URL}/` };

    return seoData;
  } catch (error) {
    console.error('Error generating metadata for home page:', error);
    return {
      title: 'Home',
      description: 'Welcome to our website'
    };
  }
}

export default async function HomePage() {
  try {
    const { isEnabled } = await draftMode();
    const { contentId, abTestContentLabel, abTestExperimentName } = getABTestInfoFromCookie({ cookieKey: 'home' });

    const data =
      isEmpty(contentId) || isEnabled
        ? await getStandardPageContent({ slug: '/', preview: isEnabled })
        : (await getStandardPageContent({ id: contentId, slug: '/', preview: isEnabled })) ?? {};

    if (!data) return notFound();

    return (
      <>
        <AggregateRating data={data.seoMetadata} />
        <Layout abTestContentLabel={abTestContentLabel} abTestExperimentName={abTestExperimentName}>
          <StandardPage data={data?.contentCollection?.items} />
        </Layout>
      </>
    );
  } catch (error) {
    console.error('Error rendering home page:', error);
    return notFound();
  }
}
