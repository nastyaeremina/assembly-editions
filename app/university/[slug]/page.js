import { notFound } from 'next/navigation';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import { getAllUniversityVideos, getUniversityVideoDetail } from '../../lib/contentful-universityVideos';
import { getSEOData, isEmpty } from '../../helpers/helpers';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import UniversityDetailPage from '../../components/PageComponent/University/universityDetailPage';

async function getContent({ slug }) {
  let allPosts = [];
  let data = [];
  let page = 0;
  do {
    const skip = page * 100;
    data = (await getAllUniversityVideos(skip)) || [];
    allPosts = allPosts.concat(data);

    if (data?.length !== 100) break;
    // eslint-disable-next-line no-plusplus
    else page++;
  } while (data?.length !== 0);

  const universityVideoDetail = (await getUniversityVideoDetail(slug)) || {};

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
      canonical: 'https://www.copilot.com/university/' + universityVideoDetail?.slug
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
        <Navbar />
        <UniversityDetailPage universityVideoDetail={universityVideoDetail} relatedVideos={relatedVideos} />
      </Layout>
    </>
  );
}
