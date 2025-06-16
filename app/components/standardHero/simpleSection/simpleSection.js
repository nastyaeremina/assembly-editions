'use client';
import React, { useState } from 'react';
import { Container } from '../../../styles/commonStyles';
import { extractYouTubeVideoId, isEmpty } from '../../../helpers/helpers';
import Heading from '../heading/heading';
import { BlockImg, BlockRight, FeatureImage, HeroBlock, SimpleMainSection, VideoClose, VideoPlay } from './styles';

/**
 * SimpleSection Component
 * @param {Object} props - Component props
 * @param {string} props.title - The section title
 * @param {string} props.description - The section description
 * @param {string} props.primaryButtonText - The text for the primary button
 * @param {string} props.primaryButtonLink - The link for the primary button
 * @param {string} props.secondaryButtonText - The text for the secondary button
 * @param {string} props.secondaryButtonLink - The link for the secondary button
 * @param {boolean} props.isHeading1 - Flag to determine heading style
 * @param {string} props.banner - URL for the banner image
 * @param {string} props.videoUrl - URL for the video
 */

export default function SimpleSection({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  isHeading1,
  banner,
  videoUrl
}) {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const shouldShowVideo = !isEmpty(videoUrl) && !isEmpty(banner);
  const videoId = !isEmpty(videoUrl) && extractYouTubeVideoId(videoUrl);

  return (
    <SimpleMainSection>
      <Container>
        <HeroBlock>
          <Heading
            title={title}
            description={description}
            primaryButtonLink={primaryButtonLink}
            primaryButtonText={primaryButtonText}
            secondaryButtonLink={secondaryButtonLink}
            secondaryButtonText={secondaryButtonText}
          />
          {/* when video open tha show this section */}
          {isOpen ? (
            <VideoPlay>
              <VideoClose onClick={onClick}>close</VideoClose>
              <div className='play'>
                <iframe
                  className='iframecss'
                  src={videoId}
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  autoplay></iframe>
              </div>
            </VideoPlay>
          ) : null}
          <BlockRight>
            {!isEmpty(banner) && (
              <BlockImg onClick={() => shouldShowVideo && onClick()}>
                <FeatureImage
                  src={banner}
                  alt='template-image'
                  height={400}
                  width={612}
                  layout='responsive'
                  className='heroimage'
                />
                {/* video play icon  */}
                {shouldShowVideo && (
                  <img
                    rel='preload'
                    src='/images/videoiconblack.svg'
                    alt='video-logo'
                    height={76}
                    width={76}
                    className='icon'
                  />
                )}
              </BlockImg>
            )}
          </BlockRight>
        </HeroBlock>
      </Container>
    </SimpleMainSection>
  );
}
