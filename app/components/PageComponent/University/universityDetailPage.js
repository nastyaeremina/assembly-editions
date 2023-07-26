'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMemo } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
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
} from '../../../styles/universityStyles';
import { Container } from '../../../styles/commonStyles';
import { isEmpty } from '../../../helpers/helpers';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function UniversityDetailPage({ relatedVideos, universityVideoDetail }) {
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
      <DetailVideoMain>
        <Container>
          <DetailVideoHero>
            <Link href='/university'>
              <Backlink>
                {/* <Image src='/images/leftarrow.svg' alt='leftarrow' width={12} height={12} layout={'fixed'} /> */}
                <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M8.42969 1.37109L3.8012 5.99958L8.42969 10.6281'
                    stroke='#757575'
                    stroke-width='1.92854'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
                <p>Back to University</p>
              </Backlink>
            </Link>
            <h1>{universityVideoDetail?.name}</h1>
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
              <h2>Related videos</h2>
              <UniversityVideo>{renderRelatedVideosView}</UniversityVideo>
            </VIdeoWrap>
          )}
        </Container>
      </DetailVideoMain>
    </>
  );
}
