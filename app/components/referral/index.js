'use client';
import { useParams } from 'next/navigation';
import { Container } from '../../styles/commonStyles';
import StandardHero from '../standardHero/standardHero';
import { HeroTypes } from '../../constants/constant';

export default function Referral({ hostName }) {
  const { slug } = useParams() || { slug: undefined };
  const firstName = slug?.split('_')?.[0] || 'Someone';

  return (
    <div className='component-wrapper'>
      <StandardHero
        type={HeroTypes.LEFT}
        data={{
          heroTitle: `${firstName} has invited you to try Assembly`,
          heroDescription:
            'Assembly is used by 1000s of modern services businesses. Get started below with a 14-day free trial. No credit card required.',
          primaryButtonLink: `https://dashboard.${hostName}/onboarding?referred=${slug?.replace(
            slug?.split('_')?.[0] + '_',
            ''
          )}`,
          primaryButtonText: 'Get started',
          banner1: {
            url: '/images/referral.svg'
          }
        }}
      />
    </div>
  );
}
