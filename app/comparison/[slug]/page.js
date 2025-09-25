import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import Layout from '../../components/layout';
import { getComparisonDetail } from '../../lib/contentful-comparison';
import { getSEOData, isEmpty } from '../../helpers/helpers';
import ComparisonDetailPage from '../../components/PageComponent/Comparison/coparisonDetailPage';
import { getFAQsData } from '../../services/faq';
import AggregateRating from '../../components/aggregateRating';
import { CURRENT_SITE_URL } from '../../constants/constant';

async function getContent({ slug }) {
  const { isEnabled } = await draftMode();
  const details = (await getComparisonDetail(slug, isEnabled)) ?? [];
  return details;
}

export async function generateMetadata({ params }) {
  const details = await getContent({ slug: params?.slug });

  const seoData = await getSEOData({ id: details?.seoMetadata?.sys?.id });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/comparison/${params?.slug}` };
  return seoData;
}
export default async function Comparison({ params }) {
  const details = await getContent({ slug: params?.slug });
  if (isEmpty(details)) return notFound();
  const faqData = await getFAQsData({ data: details?.faQsCollection?.items });

  return (
    <>
      <AggregateRating id={details?.seoMetadata?.sys?.id} />
      <Layout>
        <ComparisonDetailPage details={details} faqList={faqData} />
      </Layout>
    </>
  );
}
