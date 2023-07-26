import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import { COPILOT_ONBORADING_LINK } from '../../../constants/externalLinks';
import { Container, PrimaryButton } from '../../../styles/commonStyles';
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

export default function SolutionHero({ title, description, mobileImage, webImage }) {
  const titleSplitList = title?.split(',');
  const seprateWithDotList = titleSplitList?.join(`<span>,</span>`)?.split('.');
  const finalTitle = seprateWithDotList?.join(`<span>.</span>`);

  return (
    <>
      <HeroSection>
        <Container>
          <SolutionWrap>
            <LeftWrap>
              <TextSection>
                <h1>
                  <div dangerouslySetInnerHTML={{ __html: finalTitle }} />
                </h1>
                <p>{description}</p>
                <BtnWrap>
                  <PrimaryButton>
                    <Link href={COPILOT_ONBORADING_LINK}>Start trial</Link>
                  </PrimaryButton>
                </BtnWrap>
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
