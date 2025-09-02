import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import Layout from '../../../components/layout';
import { getAllAutomations, getAutomationDetail } from '../../../lib/contentful-automation';
import { getSEOData, isEmpty } from '../../../helpers/helpers';
import AutomationDetailPage from '../../../components/PageComponent/Automation/directoryDetailsPage';
import CTA from '../../../components/cta/cta';
import { CURRENT_SITE_URL } from '../../../constants/constant';

async function getContent({ slug }) {
  const { isEnabled } = await draftMode();
  const detail = (await getAutomationDetail(slug, isEnabled)) ?? {};
  let relatedApps = [];
  if (!isEmpty(detail)) {
    let allPosts = [];
    let data = [];
    let page = 0;
    do {
      const skip = page * 100;
      data = (await getAllAutomations(skip, isEnabled)) || [];
      allPosts = allPosts.concat(data);

      if (data?.length !== 100) break;
      // eslint-disable-next-line no-plusplus
      else page++;
    } while (data?.length !== 0);
    const categoryList = detail?.automationsCategories;
    relatedApps = allPosts
      ?.filter(
        (item) =>
          item?.automationsCategories &&
          item?.automationsCategories.some((element) => categoryList.includes(element)) &&
          item?.slug !== slug
      )
      ?.slice(0, 4);
  }
  return { detail, relatedApps };
}

export async function generateMetadata({ params }) {
  const { detail } = await getContent({ slug: params?.slug });
  const seoData = await getSEOData({
    data: {
      seoTitle: detail?.name,
      description: detail?.description,
      canonical: `${CURRENT_SITE_URL}/automations/directory/${detail?.slug}`
    }
  });
  return seoData;
}

export default async function AutomationDetail({ params }) {
  const { detail, relatedApps } = await getContent({ slug: params?.slug });

  if (isEmpty(detail)) return notFound();

  return (
    <>
      <Layout>
        <AutomationDetailPage detail={detail} relatedApps={relatedApps} />
        <CTA />
      </Layout>
    </>
  );
}
