import React, { useState } from 'react';
import Image from 'next/image';
import {
  BLockImg,
  BlockLeft,
  BlockRight,
  FeatureHeroSection,
  FeatureImage,
  HeroBlock,
  VideoClose,
  VideoPlay
} from '../featurehero/styles';
import { Container } from '../../styles/commonStyles';
import Button from '../button/button';
import heroImage from '../../public/images/heroimage.png';
import { COPILOT_ONBORADING_LINK } from '../../constants/externalLinks';

export default function ProductHero({ colorList, title, description, videoUrl }) {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <FeatureHeroSection backgroundColor={colorList?.bgColor}>
      <Container>
        <HeroBlock>
          <BlockLeft textColor={colorList?.fontColor}>
            <h1>{title}</h1>
            <p>{description}</p>
            <Button
              bgColor={colorList?.buttonBgColor}
              borderColor={colorList?.buttonBgColor}
              fontColor={colorList?.buttonFontColor}
              href={COPILOT_ONBORADING_LINK}
              text={'Try for free'}
            />
          </BlockLeft>
          {isOpen ? (
            <VideoPlay>
              <VideoClose onClick={onClick}>close</VideoClose>
              <div className='play'>
                <iframe
                  className='iframecss'
                  src={videoUrl}
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
  );
}
