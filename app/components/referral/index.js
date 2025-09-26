'use client';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Container, PrimaryButton } from '../../styles/commonStyles';
import { MainSection, HeroWrap, HeroLeft, HeroRight } from './styles';

export default function Referral({ hostName }) {
  const { slug } = useParams() || { slug: undefined };
  const firstName = slug?.split('_')?.[0] || 'Someone';

  return (
    <MainSection>
      <Container>
        <HeroWrap>
          <HeroLeft>
            <h2>{firstName} has invited you to try Assembly</h2>
            <p>
              Assembly is used by 1000s of modern services businesses. Get started below with a 14-day free trial. No
              credit card required.
            </p>
            <PrimaryButton>
              <a
                href={`https://dashboard.${hostName}/onboarding?referred=${slug?.replace(
                  slug?.split('_')?.[0] + '_',
                  ''
                )}`}>
                Get started
              </a>
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
