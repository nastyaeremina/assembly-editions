import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import { getSEOData } from '../../helpers/helpers';
import { getJobDetails } from '../../lib/contentful-jobsListing';
import JobDetailPage from '../../components/PageComponent/Jobs/jobDetailPage';

async function getContent({ slug }) {
  const data = (await getJobDetails(slug)) || {};
  return data;
}
export async function generateMetadata({ params }) {
  const jobDetail = await getContent({ slug: params?.slug });

  const seoData = await getSEOData({
    data: {
      seoTitle: `Copilot Jobs • ${jobDetail?.name}`,
      description: `Join the Copilot team as a ${jobDetail?.name}.`,
      canonical: 'https://www.copilot.com/jobs/' + jobDetail?.slug
    }
  });
  return seoData;
}

export default async function JobsDetail({ params }) {
  const jobDetail = await getContent({ slug: params?.slug });

  return (
    <>
      <Layout>
        <Navbar />
        <JobDetailPage data={jobDetail} />
      </Layout>
    </>
  );
}
