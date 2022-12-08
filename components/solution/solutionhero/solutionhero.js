import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';
import { Container, PrimaryButton, SecondryButton } from '../../../styles/commonStyles';
import { HeroSection, SolutionWrap, LeftWrap, RightWrap, TextSection, BtnWrap, ImageView, MobileImg } from './styles';

export default function SolutionHero({ title, description }) {
  const titleSplitList = title?.split(',')

  const renderHeaderView = useMemo(() => {
    const lastIndex = titleSplitList?.length - 1
    return titleSplitList?.map((item, index) => {
      return <>
        {item}
        {index !== lastIndex && <span>,</span>}
      </>
    })
  }, [titleSplitList])
  return (
    <>
      <HeroSection>
        <Container>
          <SolutionWrap>
            <LeftWrap>
              <TextSection>
                <h2>
                  {renderHeaderView}
                </h2>
                <p>
                  {description}
                </p>
                <BtnWrap>
                  <PrimaryButton>
                    <Link href='https://dashboard.copilot.com/onboarding'>Start Trial</Link>
                  </PrimaryButton>
                </BtnWrap>
              </TextSection>
            </LeftWrap>
            <RightWrap>
              <ImageView>
                <Image src='/images/placeimg.png' alt='main-logo' width={479} height={633} />
                <MobileImg>
                  <Image src='/images/mobilecline.png' alt='main-logo' width={310} height={655} />
                </MobileImg>
              </ImageView>
            </RightWrap>
          </SolutionWrap>
        </Container>
      </HeroSection>
    </>
  );
}
