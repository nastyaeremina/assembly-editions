import { notFound } from 'next/navigation';
import Layout from '../../components/layout';
import { getUpdateDetail } from '../../lib/updates-content';
import { getSEOData, isEmpty } from '../../helpers/helpers';
import UpdatedetailPage from '../../components/PageComponent/Updates/updateDetailPage';
import { CURRENT_SITE_URL, UPDATES_CTA_ID } from '../../constants/constant';
import { getSectionCTAContent } from '../../lib/contentful-standardPage';

async function getContent({ slug }) {
  const [updateDetails, updatesCTA] = await Promise.all([
    getUpdateDetail(slug),
    getSectionCTAContent(UPDATES_CTA_ID, false)
  ]);
  return {
    updateDetails: updateDetails ?? [],
    updatesCTA
  };
}
export async function generateMetadata({ params }) {
  const { updateDetails } = await getContent({ slug: params?.slug });
  if (isEmpty(updateDetails)) return notFound();

  const seoData = await getSEOData({
    data: {
      seoTitle: updateDetails?.title,
      description: updateDetails?.meta_description,
      canonical: `${CURRENT_SITE_URL}/updates/${updateDetails?.slug}`
    }
  });
  return seoData;
}
export default async function Updatedetail({ params }) {
  const { updateDetails, updatesCTA } = await getContent({ slug: params?.slug });

  if (isEmpty(updateDetails)) return notFound();
  return (
    <>
      <Layout>
        <UpdatedetailPage details={updateDetails} updatesCTA={updatesCTA} />
      </Layout>
    </>
  );
}
