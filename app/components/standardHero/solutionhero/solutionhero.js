'use client';
import Image from 'next/image';
import { Container } from '../../../styles/commonStyles';
import { isEmpty, separateSpecialChar } from '../../../helpers/helpers';
import SocialProofProperty from '../../socialProofProperty/socialProofProperty';
import ButtonGroup from '../../ButtonGroup/buttonGroup';
import {
  HeroSection,
  SolutionWrap,
  LeftWrap,
  RightWrap,
  TextSection,
  ImageView,
  MobileImg,
  MobileView,
  Mobilenew
} from './styles';

/**
 * SolutionHero Component
 * @param {Object} props - Component props
 * @param {string} props.title - The title text
 * @param {string} props.description - The description text
 * @param {string} props.mobileImage - The mobile image URL
 * @param {string} props.webImage - The web image URL
 * @param {boolean} props.isStandardPage - Standard page flag
 * @param {string} props.secondaryButtonLink - The link for the secondary button
 * @param {string} props.secondaryButtonText - The text for the secondary button
 * @param {string} props.primaryButtonLink - The link for the primary button
 * @param {string} props.primaryButtonText - The text for the primary button
 * @returns {JSX.Element} - JSX markup for the SolutionHero component
 */

export default function SolutionHero({
  title,
  description,
  mobileImage,
  webImage,
  isStandardPage,
  secondaryButtonLink,
  secondaryButtonText,
  primaryButtonLink,
  primaryButtonText,
  isShowSocialProof
}) {
  const finalTitle = separateSpecialChar(title);
  return (
    <>
      <HeroSection isStandardPage={isStandardPage}>
        <Container>
          <SolutionWrap>
            <LeftWrap>
              <TextSection className='details-hero'>
                <h1>
                  <div dangerouslySetInnerHTML={{ __html: finalTitle }} />
                </h1>
                <p>{description}</p>
                <ButtonGroup
                  primaryButtonLink={primaryButtonLink}
                  primaryButtonText={primaryButtonText}
                  secondaryButtonLink={secondaryButtonLink}
                  secondaryButtonText={secondaryButtonText}
                  marginTop={32}
                />
                {isShowSocialProof && <SocialProofProperty rateCount='1000+' />}
              </TextSection>
            </LeftWrap>
            <RightWrap emptyMobileImage={isEmpty(mobileImage)}>
              <ImageView emptyMobileImage={isEmpty(mobileImage)}>
                <Image src={webImage} alt='main-logo' width={479} height={633} />
                {mobileImage && (
                  <MobileImg>
                    <Image src={mobileImage} alt='main-logo' width={310} height={655} />
                  </MobileImg>
                )}
              </ImageView>
              <MobileView emptyMobileImage={isEmpty(mobileImage)}>
                <Image src={webImage} alt='main-logo' width={269} height={354} />
                {mobileImage && (
                  <Mobilenew>
                    <Image src={mobileImage} alt='main-logo' width={174} height={367} />
                  </Mobilenew>
                )}
              </MobileView>
            </RightWrap>
          </SolutionWrap>
        </Container>
      </HeroSection>
    </>
  );
}
