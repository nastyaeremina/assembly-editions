import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import Layout from '../../components/layout';
import { getSEOData, isEmpty } from '../../helpers/helpers';
import { getJobDetails } from '../../lib/contentful-jobsListing';
import JobDetailPage from '../../components/PageComponent/Jobs/jobDetailPage';
import { CURRENT_SITE_URL } from '../../constants/constant';

async function getContent({ slug }) {
  const { isEnabled } = await draftMode();
  const data = (await getJobDetails(slug, isEnabled)) || {};
  return data;
}
export async function generateMetadata({ params }) {
  const jobDetail = await getContent({ slug: params?.slug });

  const seoData = await getSEOData({
    data: {
      seoTitle: `Copilot Jobs • ${jobDetail?.name}`,
      description: `Join the Copilot team as a ${jobDetail?.name}.`,
      canonical: `${CURRENT_SITE_URL}/jobs/${jobDetail?.slug}`
    }
  });
  return seoData;
}

export default async function JobsDetail({ params }) {
  const jobDetail = await getContent({ slug: params?.slug });
  if (isEmpty(jobDetail)) return notFound();

  return (
    <>
      <Layout>
        <JobDetailPage data={jobDetail} />
      </Layout>
    </>
  );
}
