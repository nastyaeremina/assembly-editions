'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Head from 'next/head';
import { Container } from '../../styles/commonStyles';
import Button from '../button/button';
import { COPILOT_ONBORADING_LINK } from '../../constants/externalLinks';
import {
  FeatureHeroSection,
  HeroBlock,
  BlockLeft,
  BlockRight,
  BlockImage,
  BlockLine,
  BLockImg,
  FeatureImage,
  VideoPlay,
  VideoClose
} from './styles';

export default function FeatureHero({ colorList, title, description, iconUrl, videoId, heroImage }) {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Head>
        <link rel='preload' href={iconUrl} as='image' />
        <link rel='preload' href='/images/heroimage.png' as='image' />
        <link rel='preload' href='/images/videoiconblack.svg' as='image' />
      </Head>

      <FeatureHeroSection backgroundColor={colorList?.bgColor}>
        <Container>
          <HeroBlock>
            <BlockLeft textColor={colorList?.fontColor}>
              <BlockLine lineColor={colorList?.borderColor}>
                <BlockImage lineColor={colorList?.borderColor}>
                  <Image rel='preload' src={iconUrl} alt='main-logo' height={66} width={66} />
                </BlockImage>
              </BlockLine>
              <h1>{title}</h1>
              <p>{description}</p>
              <Button
                bgColor={colorList?.buttonBgColor}
                borderColor={colorList?.buttonBgColor}
                fontColor={colorList?.buttonFontColor}
                href={COPILOT_ONBORADING_LINK}
                text={'Start Trial'}
              />
            </BlockLeft>
            {isOpen ? (
              <VideoPlay>
                <VideoClose onClick={onClick}>close</VideoClose>
                <div className='play'>
                  <iframe
                    className='iframecss'
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title='YouTube video player'
                    frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    autoplay></iframe>
                </div>
              </VideoPlay>
            ) : null}
            <BlockRight>
              <BLockImg lineColor={colorList?.borderColor} onClick={onClick}>
                <FeatureImage
                  rel='preload'
                  src={heroImage}
                  alt='main-logo'
                  height={392}
                  width={570}
                  className='heroimage'
                />
                <Image
                  rel='preload'
                  src='/images/videoiconblack.svg'
                  alt='video-logo'
                  height={76}
                  width={76}
                  className='icon'
                />
              </BLockImg>
            </BlockRight>
          </HeroBlock>
        </Container>
      </FeatureHeroSection>
    </>
  );
}
