'use client';
import Image from 'next/image';
import { Container } from '../../../styles/commonStyles';
import { isEmpty, separateSpecialChar } from '../../../helpers/helpers';
import Button from '../../button/button';
import {
  HeroSection,
  SolutionWrap,
  LeftWrap,
  RightWrap,
  TextSection,
  BtnWrap,
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
  primaryButtonText
}) {
  const finalTitle = separateSpecialChar(title);
  const showPrimaryButton = !isEmpty(primaryButtonText) && !isEmpty(primaryButtonLink);
  const showSecondaryButton = !isEmpty(secondaryButtonText) && !isEmpty(secondaryButtonLink);
  return (
    <>
      <HeroSection isStandardPage={isStandardPage}>
        <Container>
          <SolutionWrap>
            <LeftWrap>
              <TextSection>
                <h1>
                  <div dangerouslySetInnerHTML={{ __html: finalTitle }} />
                </h1>
                <p>{description}</p>
                {(showPrimaryButton || showSecondaryButton) && (
                  <BtnWrap>
                    {showPrimaryButton && (
                      <Button text={primaryButtonText} href={primaryButtonLink} className={'button-section'} />
                    )}
                    {showSecondaryButton && (
                      <Button
                        text={secondaryButtonText}
                        href={secondaryButtonLink}
                        className={'button-section'}
                        bgColor={'transparent'}
                        fontColor={'--black'}
                        borderColor={'--black'}
                        hoverColor={'--hover-color'}
                      />
                    )}
                  </BtnWrap>
                )}
              </TextSection>
            </LeftWrap>
            <RightWrap>
              <ImageView>
                <Image src={webImage} alt='main-logo' width={479} height={633} />
                <MobileImg>
                  <Image src={mobileImage} alt='main-logo' width={310} height={655} />
                </MobileImg>
              </ImageView>
              <MobileView>
                <Image src={webImage} alt='main-logo' width={269} height={354} />
                <Mobilenew>
                  <Image src={mobileImage} alt='main-logo' width={174} height={367} />
                </Mobilenew>
              </MobileView>
            </RightWrap>
          </SolutionWrap>
        </Container>
      </HeroSection>
    </>
  );
}
