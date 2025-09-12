import { notFound } from 'next/navigation';
import Layout from '../../components/layout';
import { getUpdateDetail } from '../../lib/updates-content';
import { getSEOData, isEmpty } from '../../helpers/helpers';
import UpdatedetailPage from '../../components/PageComponent/Updates/updateDetailPage';
import { CURRENT_SITE_URL } from '../../constants/constant';

async function getContent({ slug }) {
  const updateDetails = (await getUpdateDetail(slug)) ?? [];
  return {
    updateDetails
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
  const { updateDetails } = await getContent({ slug: params?.slug });

  if (isEmpty(updateDetails)) return notFound();
  return (
    <>
      <Layout>
        <UpdatedetailPage details={updateDetails} />
      </Layout>
    </>
  );
}
