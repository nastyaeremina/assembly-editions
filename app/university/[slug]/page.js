import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import Layout from '../../components/layout';
import { getAllUniversityVideos, getUniversityVideoDetail } from '../../lib/contentful-universityVideos';
import { getSEOData, isEmpty } from '../../helpers/helpers';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import UniversityDetailPage from '../../components/PageComponent/University/universityDetailPage';
import { CURRENT_SITE_URL } from '../../constants/constant';

async function getContent({ slug }) {
  const { isEnabled } = await draftMode();
  let allPosts = [];
  let data = [];
  let page = 0;
  do {
    const skip = page * 100;
    data = (await getAllUniversityVideos(skip, isEnabled)) || [];
    allPosts = allPosts.concat(data);

    if (data?.length !== 100) break;
    // eslint-disable-next-line no-plusplus
    else page++;
  } while (data?.length !== 0);

  const universityVideoDetail = (await getUniversityVideoDetail(slug, isEnabled)) || {};

  const relatedVideos = allPosts
    ?.filter(
      (item) =>
        item?.videoCategory === universityVideoDetail?.videoCategory && item?.slug !== universityVideoDetail?.slug
    )
    ?.slice(0, 4);
  return { universityVideoDetail, relatedVideos };
}

export async function generateMetadata({ params }) {
  const { universityVideoDetail } = await getContent({ slug: params?.slug });
  const seoData = await getSEOData({
    data: {
      seoTitle: `Copilot Video Tutorial • ${universityVideoDetail?.name}`,
      description: universityVideoDetail?.description,
      canonical: `${CURRENT_SITE_URL}/university/${universityVideoDetail?.slug}`
    }
  });
  return seoData;
}

export default async function UniversityDetail({ params }) {
  const { relatedVideos, universityVideoDetail } = await getContent({ slug: params?.slug });

  if (isEmpty(universityVideoDetail)) return notFound();

  return (
    <>
      <Layout>
        <UniversityDetailPage universityVideoDetail={universityVideoDetail} relatedVideos={relatedVideos} />
      </Layout>
    </>
  );
}
