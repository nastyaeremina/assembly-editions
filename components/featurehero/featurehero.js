import Image from 'next/image';
import { Container, PrimaryButton } from '../../styles/commonStyles';
import Button from '../button/button';
import { NAVBAR_COLOR_LIST } from '../../constants/constant';
import { theme } from '../../pages/_app';
import { FeatureHeroSection, HeroBlock, BlockLeft, BlockRight, BlockImage, BlockLine, BLockImg,FeatureImage } from './styles';
import Head from "next/head";

export default function FeatureHero({ colorList, title, description, iconUrl }) {
  // const colorList = NAVBAR_COLOR_LIST[currentModule];
  return (
    <>
    <Head>
      <link rel="preload" href={iconUrl} as="image"/>
      <link rel="preload" href="/images/heroimage.png" as="image"/>
      <link rel="preload" href="/images/videoiconblack.svg" as="image"/>
    </Head>
   
    <FeatureHeroSection backgroundColor={colorList?.bgColor}>
      <Container>
        <HeroBlock>
          <BlockLeft textColor={colorList?.fontColor}>
            <BlockLine lineColor={colorList?.borderColor}>
              <BlockImage lineColor={colorList?.borderColor}>
                <Image  rel="preload" src={iconUrl} alt='main-logo' height={66} width={66} />
              </BlockImage>
            </BlockLine>
            <h2>{title}</h2>
            <p>{description}</p>
            {/* <PrimaryButton>
              <a href='/'>Start Trial</a>
            </PrimaryButton> */}
            <Button
              bgColor={colorList?.buttonBgColor}
              borderColor={colorList?.buttonBgColor}
              fontColor={colorList?.buttonFontColor}
              href='https://dashboard.copilot.com/onboarding'
              text={'Start Trial'}
            />
          </BlockLeft>
          <BlockRight>
            <BLockImg lineColor={colorList?.borderColor} >
              <FeatureImage rel="preload" src='/images/heroimage.png' alt='main-logo' height={392} width={570} className='heroimage' />
              <Image  rel="preload" src='/images/videoiconblack.svg' alt='video-logo' height={76} width={76} className='icon' />
            </BLockImg>
          </BlockRight>
        </HeroBlock>
      </Container>
    </FeatureHeroSection>
    </>
  );
}
