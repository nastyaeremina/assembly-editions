import Layout from '/components/layout';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Navbar from '../../components/navbar/navbar';
import {
  DetailVideoMain,
  DetailVideoHero,
  Backlink,
  VideoSection,
  VideoImage,
  VIdeoWrap,
  UniversityVideo,
  FeatureCard,
  OverLay,
  Overlay,
  HoverButton
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
      <NextSeo
        title='copilot blogs to keep you up with the  Sales Tactics!'
        description='Sale is a prominent part of any business & nothing can be better than getting tried tactics for it. So get all that you want to know about sales from our Blogs.'
      />
      <Layout>
        <Navbar />
        <DetailVideoMain>
          <Container>
            <DetailVideoHero>
              <Link href='/university'>
                <Backlink>
                  <Image src='/images/leftarrow.svg' alt='leftarrow' width={12} height={12} layout={'fixed'} />
                  <p>Back to Univeristy</p>
                </Backlink>
              </Link>
              <h3>{universityVideoDetail?.name}</h3>
            </DetailVideoHero>
            <VideoSection>
              <LiteYouTubeEmbed
                id={universityVideoDetail?.videoLink}
                title='What’s new in Material Design for the web (Chrome Dev Summit 2019)'
              />
              <p>{universityVideoDetail?.description}</p>
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
export async function getServerSideProps({ params, preview = false }) {
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

export async function getServerSidePaths() {
  const allPosts = (await getAllUniversityVideoWithSlug()) ?? [];
  return {
    paths: allPosts?.map((slug) => `${slug}`) ?? [],
    fallback: true
  };
}
