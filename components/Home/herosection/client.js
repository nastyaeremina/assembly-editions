import Image from 'next/image';
import React from 'react';
import { Container } from '../../../styles/commonStyles';
import Button from '../../button/button';
import { HeroBtnBlock, HeroHeading, HeroSection, ImageHover, MainImage, Para, ReviewLogo, RightWrap } from '../styles';
import client from '../../../public/images/client.png';

export default function ClientHeroSection({ title, body, image1 }) {
  return (
    <HeroSection>
      <Container>
        <HeroHeading>{title}</HeroHeading>
        <Para>{body}</Para>

        <ReviewLogo>
          <ImageHover href='https://www.g2.com/products/copilotplatforms/reviews' target='_blank'>
            <RightWrap>
              <svg width='112' height='20' viewBox='0 0 112 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M10.5 0L12.7451 6.90983H20.0106L14.1327 11.1803L16.3779 18.0902L10.5 13.8197L4.62215 18.0902L6.86729 11.1803L0.989435 6.90983H8.25486L10.5 0Z'
                  fill='#09AA6C'
                />
                <path
                  d='M33.5 0L35.7451 6.90983H43.0106L37.1327 11.1803L39.3779 18.0902L33.5 13.8197L27.6221 18.0902L29.8673 11.1803L23.9894 6.90983H31.2549L33.5 0Z'
                  fill='#09AA6C'
                />
                <path
                  d='M55.5 0L57.7451 6.90983H65.0106L59.1327 11.1803L61.3779 18.0902L55.5 13.8197L49.6221 18.0902L51.8673 11.1803L45.9894 6.90983H53.2549L55.5 0Z'
                  fill='#09AA6C'
                />
                <path
                  d='M78.5 0L80.7451 6.90983H88.0106L82.1327 11.1803L84.3779 18.0902L78.5 13.8197L72.6221 18.0902L74.8673 11.1803L68.9894 6.90983H76.2549L78.5 0Z'
                  fill='#09AA6C'
                />
                <path
                  d='M101.5 0L103.745 6.90983H111.011L105.133 11.1803L107.378 18.0902L101.5 13.8197L95.6221 18.0902L97.8673 11.1803L91.9894 6.90983H99.2549L101.5 0Z'
                  fill='#09AA6C'
                />
              </svg>
              <p>G2</p>
            </RightWrap>
          </ImageHover>
          <ImageHover href='https://www.capterra.com/p/214210/Portal/' target='_blank'>
            <RightWrap>
              <svg width='112' height='20' viewBox='0 0 112 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M10.5 0L12.7451 6.90983H20.0106L14.1327 11.1803L16.3779 18.0902L10.5 13.8197L4.62215 18.0902L6.86729 11.1803L0.989435 6.90983H8.25486L10.5 0Z'
                  fill='#09AA6C'
                />
                <path
                  d='M33.5 0L35.7451 6.90983H43.0106L37.1327 11.1803L39.3779 18.0902L33.5 13.8197L27.6221 18.0902L29.8673 11.1803L23.9894 6.90983H31.2549L33.5 0Z'
                  fill='#09AA6C'
                />
                <path
                  d='M55.5 0L57.7451 6.90983H65.0106L59.1327 11.1803L61.3779 18.0902L55.5 13.8197L49.6221 18.0902L51.8673 11.1803L45.9894 6.90983H53.2549L55.5 0Z'
                  fill='#09AA6C'
                />
                <path
                  d='M78.5 0L80.7451 6.90983H88.0106L82.1327 11.1803L84.3779 18.0902L78.5 13.8197L72.6221 18.0902L74.8673 11.1803L68.9894 6.90983H76.2549L78.5 0Z'
                  fill='#09AA6C'
                />
                <path
                  d='M101.5 0L103.745 6.90983H111.011L105.133 11.1803L107.378 18.0902L101.5 13.8197L95.6221 18.0902L97.8673 11.1803L91.9894 6.90983H99.2549L101.5 0Z'
                  fill='#09AA6C'
                />
              </svg>
              <p>Capterra</p>
            </RightWrap>
          </ImageHover>
          <ImageHover href='https://www.producthunt.com/products/copilot-5' target='_blank'>
            <RightWrap>
              <svg width='112' height='20' viewBox='0 0 112 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M10.5 0L12.7451 6.90983H20.0106L14.1327 11.1803L16.3779 18.0902L10.5 13.8197L4.62215 18.0902L6.86729 11.1803L0.989435 6.90983H8.25486L10.5 0Z'
                  fill='#09AA6C'
                />
                <path
                  d='M33.5 0L35.7451 6.90983H43.0106L37.1327 11.1803L39.3779 18.0902L33.5 13.8197L27.6221 18.0902L29.8673 11.1803L23.9894 6.90983H31.2549L33.5 0Z'
                  fill='#09AA6C'
                />
                <path
                  d='M55.5 0L57.7451 6.90983H65.0106L59.1327 11.1803L61.3779 18.0902L55.5 13.8197L49.6221 18.0902L51.8673 11.1803L45.9894 6.90983H53.2549L55.5 0Z'
                  fill='#09AA6C'
                />
                <path
                  d='M78.5 0L80.7451 6.90983H88.0106L82.1327 11.1803L84.3779 18.0902L78.5 13.8197L72.6221 18.0902L74.8673 11.1803L68.9894 6.90983H76.2549L78.5 0Z'
                  fill='#09AA6C'
                />
                <path
                  d='M101.5 0L103.745 6.90983H111.011L105.133 11.1803L107.378 18.0902L101.5 13.8197L95.6221 18.0902L97.8673 11.1803L91.9894 6.90983H99.2549L101.5 0Z'
                  fill='#09AA6C'
                />
              </svg>
              <p>ProductHunt</p>
            </RightWrap>
          </ImageHover>
        </ReviewLogo>
        <HeroBtnBlock>
          <Button
            bgColor={'#E3FFEE'}
            fontColor={'#00160E'}
            borderColor={'#E3FFEE'}
            text={'Try for free'}
            href={'/book-demo'}
            hoverColor={'rgba(0, 0, 0, 0.5)'}
          />
        </HeroBtnBlock>
        <MainImage>
          <Image src={image1} alt='internal' className='heromain-image' />
        </MainImage>
      </Container>
    </HeroSection>
  );
}
