import Image from 'next/image';
import { Container, PrimaryButton } from '../../styles/commonStyles';
import { MainSection, HeroWrap, HeroLeft, HeroRight } from './styles';

export default function Referral() {
  return (
    <MainSection>
      <Container>
        <HeroWrap>
          <HeroLeft>
            <h2>Marlon has gifted you $100 in credit!</h2>
            <p>
              Start with a 14-day free trial. You will receive your $100 credit once you move over to one of our paid
              subscription plans.
            </p>
            <PrimaryButton>
              <a href='#'>Sign up to claim your gift</a>
            </PrimaryButton>
          </HeroLeft>
          <HeroRight>
            <Image src='/images/referral.svg' alt='line-icon' width={393} height={386} layout={'fixed'} />
          </HeroRight>
        </HeroWrap>
      </Container>
    </MainSection>
  );
}
