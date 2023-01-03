import Image from 'next/image';
import { Container, PrimaryButton } from '../../styles/commonStyles';
import { MainSection, HeroWrap, HeroLeft, HeroRight } from './styles';

export default function Referral(props) {
  return (
    <MainSection>
      <Container>
        <HeroWrap>
          <HeroLeft>
            <h2>{props.firstName} has invited you to try Copilot</h2>
            <p>
              Copilot is used by 1000s of modern services businesses. Get started below with a 14-day free trial. No credit card required.
            </p>
            <PrimaryButton>
              <a href='#'>Get started</a>
            </PrimaryButton>
          </HeroLeft>
          <HeroRight>
            <Image src='/images/referral.svg' alt='line-icon' width={393} height={386} />
          </HeroRight>
        </HeroWrap>
      </Container>
    </MainSection>
  );
}
