import Image from 'next/image';
import React, { useState } from 'react';
import Head from "next/head";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { Container, PrimaryButton } from '../../styles/commonStyles';
import Button from '../button/button';
import { NAVBAR_COLOR_LIST } from '../../constants/constant';
import { theme } from '../../pages/_app';
import { FeatureHeroSection, HeroBlock, BlockLeft, BlockRight, BlockImage, BlockLine, BLockImg, FeatureImage, VideoPlay, VideoClose } from './styles';

export default function FeatureHero({ colorList, title, description, iconUrl ,videoId}) {
  // const colorList = NAVBAR_COLOR_LIST[currentModule];
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Head>
        <link rel="preload" href={iconUrl} as="image" />
        <link rel="preload" href="/images/heroimage.png" as="image" />
        <link rel="preload" href="/images/videoiconblack.svg" as="image" />
      </Head>

      <FeatureHeroSection backgroundColor={colorList?.bgColor}>
        <Container>
          <HeroBlock>
            <BlockLeft textColor={colorList?.fontColor}>
              <BlockLine lineColor={colorList?.borderColor}>
                <BlockImage lineColor={colorList?.borderColor}>
                  <Image rel="preload" src={iconUrl} alt='main-logo' height={66} width={66} />
                </BlockImage>
              </BlockLine>
              <h2>{title}</h2>
              <p>{description}</p>
              <Button
                bgColor={colorList?.buttonBgColor}
                borderColor={colorList?.buttonBgColor}
                fontColor={colorList?.buttonFontColor}
                href='https://dashboard.copilot.com/onboarding'
                text={'Start Trial'}
              />
            </BlockLeft>
            {isOpen ? <VideoPlay>
              <VideoClose onClick={onClick}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.5518 1.45312L1.46094 20.544M20.5518 20.544L1.46094 1.45312L20.5518 20.544Z" stroke="white" stroke-width="2.72727" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </VideoClose>
              <div className='play'>
                {/* <LiteYouTubeEmbed
                  id={"uirRaVjRsf4"}
                  title='What’s new in Material Design for the web (Chrome Dev Summit 2019)'
                  iframeClass='ytbview'
                  playerClass='icon-player'
                /> */}
                <iframe width="819px" height="461px" src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" autoplay></iframe>
               
              </div>
            </VideoPlay> : null}
            <BlockRight>
              <BLockImg lineColor={colorList?.borderColor} onClick={onClick} >
                <FeatureImage rel="preload" src='/images/heroimage.png' alt='main-logo' height={392} width={570} className='heroimage' />
                <Image rel="preload" src='/images/videoiconblack.svg' alt='video-logo' height={76} width={76} className='icon' />
              </BLockImg>
            </BlockRight>
          </HeroBlock>
        </Container>
      </FeatureHeroSection>
    </>
  );
}
