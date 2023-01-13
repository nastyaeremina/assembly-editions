import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
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

  const renderHeaderView = useMemo(() => {
    const lastIndex = titleSplitList?.length - 1;
    return titleSplitList?.map((item, index) => {
      return (
        <>
          {item}
          {index !== lastIndex && <span>,</span>}
        </>
      );
    });
  }, [titleSplitList]);
  return (
    <>
      <HeroSection>
        <Container>
          <SolutionWrap>
            <LeftWrap>
              <TextSection>
                <h2>{renderHeaderView}</h2>
                <p>{description}</p>
                <BtnWrap>
                  <PrimaryButton>
                    <Link href='https://dashboard.copilot.com/onboarding'>Start Trial</Link>
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
