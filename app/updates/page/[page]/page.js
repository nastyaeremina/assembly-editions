import { notFound } from 'next/navigation';
import Layout from '../../../components/layout';
import { CURRENT_SITE_URL, UPDATES_CTA_ID, UPDATES_SEO_ID } from '../../../constants/constant';
import { getSectionCTAContent } from '../../../lib/contentful-standardPage';
import { getSEOData, isEmpty } from '../../../helpers/helpers';
import { getUpdatesPosts } from '../../../lib/updates-content';
import UpdatesPaginationPage from '../../../components/PageComponent/Updates/updatePaginationPage';
import { getExternalLinks } from '../../../helpers/serverSideHelpers';
import AggregateRating from '../../../components/aggregateRating';

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
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/updates` };

  return seoData;
}

export default async function Updates({ params }) {
  const [{ allPosts, pagination }, externalLinks, updatesCTA] = await Promise.all([
    getContent({ page: params?.page }),
    getExternalLinks({ asMap: true }),
    getSectionCTAContent(UPDATES_CTA_ID, false)
  ]);
  if (isEmpty(allPosts) || allPosts?.meta?.pagination?.page > allPosts?.meta?.pagination?.pages) return notFound();

  return (
    <>
      <AggregateRating id={UPDATES_SEO_ID} />
      <Layout>
        <UpdatesPaginationPage
          allPosts={allPosts}
          pagination={pagination}
          externalLinks={externalLinks}
          updatesCTA={updatesCTA}
        />
      </Layout>
    </>
  );
}
