import Layout from '/components/layout';
import Link from 'next/link';
import Navbar from '../../components/navbar/navbar';
import {
  DetailVideoMain,
  DetailVideoHero,
  Backlink,
  VideoSection,
  VIdeoWrap,
  UniversityVideo,
  FeatureCard,
  Overlay,
  HoverButton,
  YoutubeWrap
} from '../../styles/universityStyles';
import { Container } from '../../styles/commonStyles';
import Image from 'next/image';
import {
  getAllUniversityVideos,
  getAllUniversityVideoWithSlug,
  getUniversityVideoDetail
} from '../../lib/contentful-universityVideos';
import { isEmpty } from '../../helpers/helpers';
import { useMemo } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import SEO from '../../components/seo';

export default function UniversityDetail({ relatedVideos, universityVideoDetail }) {
  const renderRelatedVideosView = useMemo(() => {
    if (isEmpty(relatedVideos)) return null;
    return relatedVideos?.map((item, index) => {
      return (
        <Link href={`/university/${item?.slug}`} key={`relatedvideos_index_${index}`}>
          <FeatureCard>
            <Image src={item?.thumbnail?.url} alt='video' width={270} height={152} layout={'fixed'} />
            <Overlay className='hovericon'></Overlay>
            <HoverButton className='hoveritem'>
              <Image src='/images/hoveryoutube.svg' alt='main-logo' height={42} width={56} />
            </HoverButton>
          </FeatureCard>
        </Link>
      );
    });
  }, [relatedVideos]);

  return (
    <>
      <SEO
        seoData={{
          seoTitle: `Copilot Video Tutorial • ${universityVideoDetail?.name}`,
          description: universityVideoDetail?.description
        }}
      />
      <Layout>
        <Navbar />
        <DetailVideoMain>
          <Container>
            <DetailVideoHero>
              <Link href='/university'>
                <Backlink>
                  {/* <Image src='/images/leftarrow.svg' alt='leftarrow' width={12} height={12} layout={'fixed'} /> */}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.42969 1.37109L3.8012 5.99958L8.42969 10.6281" stroke="#757575" stroke-width="1.92854" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <p>Back to University</p>
                </Backlink>
              </Link>
              <h3>{universityVideoDetail?.name}</h3>
            </DetailVideoHero>
            <VideoSection>
              <YoutubeWrap>
                <LiteYouTubeEmbed
                  id={universityVideoDetail?.videoLink}
                  title='What’s new in Material Design for the web (Chrome Dev Summit 2019)'
                  iframeClass='ytbview'
                  playerClass='icon-player'
                />
              </YoutubeWrap>
              {!isEmpty(universityVideoDetail?.description) && <p>{universityVideoDetail?.description}</p>}
            </VideoSection>
            {!isEmpty(relatedVideos) && (
              <VIdeoWrap>
                <h3>Related videos</h3>
                <UniversityVideo>{renderRelatedVideosView}</UniversityVideo>
              </VIdeoWrap>
            )}
          </Container>
        </DetailVideoMain>
      </Layout>
    </>
  );
}
export async function getStaticProps({ params, preview = false }) {
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

  const universityVideoDetail = (await getUniversityVideoDetail(params?.slug)) || {};

  const relatedVideos = allPosts
    ?.filter(
      (item) =>
        item?.videoCategory === universityVideoDetail?.videoCategory && item?.slug !== universityVideoDetail?.slug
    )
    ?.slice(0, 4);
  return {
    props: { universityVideoDetail, relatedVideos }
  };
}

export async function getStaticPaths() {
  const allPosts = (await getAllUniversityVideoWithSlug()) ?? [];
  return {
    paths: allPosts?.map(({ slug }) => `/university/${slug}`) ?? [],
    fallback: true
  };
}
