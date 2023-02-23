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
import { COPILOT_ONBORADING_LINK } from '../../../constants/externalLinks';

export default function ComparisonHero({ title, description, image }) {
  return (
    <>
      <HeroSection>
        <Container>
          <SolutionWrap>
            <LeftWrap>
              <TextSection>
                <h1>
                  <div>{title}</div>
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
              <ImageView className='comparison-img'>
                <Image src={image} alt='main-logo' width={378} height={328} />
                {/* <MobileImg>
                  <Image src={mobileImage} alt='main-logo' width={310} height={655} />
                </MobileImg> */}
              </ImageView>
              <MobileView className='comparison-img'>
                <Image src={image} alt='main-logo' width={327} height={284} />
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
