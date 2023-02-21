import Image from 'next/image';
import Link from 'next/link';
import { Container, PrimaryButton } from '../../../styles/commonStyles';
import {
  BtnWrap,
  HeroSection,
  ImageView,
  LeftWrap,
  MobileImg,
  Mobilenew,
  MobileView,
  RightWrap,
  SolutionWrap,
  TextSection
} from '../../solution/solutionhero/styles';
import comparison from '../../../public/images/comparison.png';

export default function ComparisonHero({ title, description, mobileImage, webImage }) {
  return (
    <>
      <HeroSection>
        <Container>
          <SolutionWrap>
            <LeftWrap>
              <TextSection>
                <h1>
                  <div>Copilot vs. Suitedash</div>
                </h1>
                <p>
                  Modern service companies choose Copilot over Suitedash due to lala Your dedicated account manager will
                  be on hand to discuss and advise on the best solutions to help you reach your goals.
                </p>
                <BtnWrap>
                  <PrimaryButton>
                    <Link href='#'>Start trial</Link>
                  </PrimaryButton>
                </BtnWrap>
              </TextSection>
            </LeftWrap>
            <RightWrap>
              <ImageView className='comparison-img'>
                <Image src={comparison} alt='main-logo' width={378} height={328} />
                {/* <MobileImg>
                  <Image src={mobileImage} alt='main-logo' width={310} height={655} />
                </MobileImg> */}
              </ImageView>
              <MobileView className='comparison-img'>
                <Image src={comparison} alt='main-logo' width={327} height={284} />
                {/* <Mobilenew>
                  <Image src={mobileImage} alt='main-logo' width={174} height={367} />
                </Mobilenew> */}
              </MobileView>
            </RightWrap>
          </SolutionWrap>
        </Container>
      </HeroSection>
    </>
  );
}
