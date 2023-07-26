import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import WeeklyHero from '../components/weeklyhero/weeklyhero';
import { WEEKLY_DEMO_PAGE_ID } from '../constants/constant';
import { getWeeklyDemoContent } from '../lib/contentful-weeklyDemo';
import { getSEOData } from '../helpers/helpers';

async function getContent() {
  const details = (await getWeeklyDemoContent(WEEKLY_DEMO_PAGE_ID)) ?? [];
  return {
    details
  };
}

export async function generateMetadata() {
  const { details: data } = await getContent();
  const seoData = await getSEOData({ data: data.seoMetadata });
  return seoData;
}
export default async function WeeklyDemo({ params }) {
  const { details } = await getContent();

  return (
    <>
      <div style={{ overflow: 'hidden' }}>
        <Layout>
          <Navbar />
          <WeeklyHero data={details} />
        </Layout>
      </div>
    </>
  );
}
