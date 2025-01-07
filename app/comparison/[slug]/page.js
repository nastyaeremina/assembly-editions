import { notFound } from 'next/navigation';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import { getComparisonDetail } from '../../lib/contentful-comparison';
import { getSEOData, isEmpty } from '../../helpers/helpers';
import ComparisonDetailPage from '../../components/PageComponent/Comparison/coparisonDetailPage';
import { getFAQsData } from '../../services/faq';
import AggregateRating from '../../components/aggregateRating';
import NewCTA from '../../components/cta/newCTA';

async function getContent({ slug }) {
  const details = (await getComparisonDetail(slug)) ?? [];
  return details;
}

export async function generateMetadata({ params }) {
  const details = await getContent({ slug: params?.slug });

  const seoData = await getSEOData({ id: details?.seoMetadata?.sys?.id });
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
        <Navbar />
        <ComparisonDetailPage details={details} faqList={faqData} />
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
