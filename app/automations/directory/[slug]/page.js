import Layout from '../../../components/layout';
import Navbar from '../../../components/navbar/navbar';
import { getAllAutomations, getAutomationDetail } from '../../../lib/contentful-automation';
import { getSEOData, isEmpty } from '../../../helpers/helpers';
import AutomationDetailPage from '../../../components/PageComponent/Automation/directoryDetailsPage';
import { notFound } from 'next/navigation';

async function getContent({ slug }) {
  const detail = (await getAutomationDetail(slug)) ?? {};
  let relatedApps = [];
  if (!isEmpty(detail)) {
    let allPosts = [];
    let data = [];
    let page = 0;
    do {
      const skip = page * 100;
      data = (await getAllAutomations(skip)) || [];
      allPosts = allPosts.concat(data);

      if (data?.length !== 100) break;
      // eslint-disable-next-line no-plusplus
      else page++;
    } while (data?.length !== 0);
    const categoryList = detail?.automationCategoriesCollection?.items?.map((item) => item?.slug);
    relatedApps = allPosts
      ?.filter(
        (item) =>
          item?.automationCategoriesCollection &&
          item?.automationCategoriesCollection?.items?.some((element) => categoryList.includes(element?.slug)) &&
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
      canonical: 'https://www.copilot.com/automations/directory' + detail?.slug
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
        <Navbar />
        <AutomationDetailPage detail={detail} relatedApps={relatedApps} />
      </Layout>
    </>
  );
}
