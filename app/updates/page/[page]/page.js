import { notFound } from 'next/navigation';
import Layout from '../../../components/layout';
import Navbar from '../../../components/navbar/navbar';
import { UPDATES_SEO_ID } from '../../../constants/constant';
import { getSEOData, isEmpty } from '../../../helpers/helpers';
import { getUpdatesPosts } from '../../../lib/updates-content';
import UpdatesPaginationPage from '../../../components/PageComponent/Updates/updatePaginationPage';
import CTA from '../../../components/cta/cta';

async function getContent({ page }) {
  const allPosts = (await getUpdatesPosts({ page })) ?? [];
  const pagination = allPosts?.meta?.pagination;

  return {
    allPosts,
    pagination
  };
}
export async function generateMetadata({ params }) {
  const seoData = await getSEOData({
    id: UPDATES_SEO_ID
  });
  seoData.alternates = { canonical: 'https://www.copilot.com/updates' };

  return seoData;
}

export default async function Updates({ params }) {
  const { allPosts, pagination } = await getContent({ page: params?.page });
  if (isEmpty(allPosts) || allPosts?.meta?.pagination?.page > allPosts?.meta?.pagination?.pages) return notFound();

  return (
    <>
      <Layout>
        <Navbar />
        <UpdatesPaginationPage allPosts={allPosts} pagination={pagination} />
        <CTA />
      </Layout>
    </>
  );
}
