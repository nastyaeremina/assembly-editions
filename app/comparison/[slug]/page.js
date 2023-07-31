import { notFound } from 'next/navigation';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import { getComparisonDetail } from '../../lib/contentful-comparison';
import { getSEOData, isEmpty } from '../../helpers/helpers';
import ComparisonDetailPage from '../../components/PageComponent/Comparison/coparisonDetailPage';

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

  return (
    <>
      <Layout>
        <Navbar />
        <ComparisonDetailPage details={details} />
      </Layout>
    </>
  );
}
