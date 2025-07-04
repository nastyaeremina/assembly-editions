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
import BackComponent from '../../backComponent/backComponent';

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
        <BackComponent backtext={'Back to University'} href={'/university'} isDirectorydetail />
        <Container>
          <DetailVideoHero>
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
