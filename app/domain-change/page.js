'use client';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { CURRENT_SITE_URL } from '../constants/constant';
import LocationImage from '../../public/images/location-icon.png';
import Button from '../components/button/button';
import { MainDiv, LocationIcon, Title, Description, LearnMore, ButtonDiv, ContentDiv } from './styles';

export default function DomainChangePage() {
  const searchParams = useSearchParams();
  const next = searchParams.get('next') || '';

  const handleGoToNewDomain = () => {
    // Ensure we have a valid URL
    const targetUrl = next.startsWith('/') ? next : `/${next}`;
    const fullUrl = `${CURRENT_SITE_URL}${targetUrl}`;
    console.log('Redirecting to:', fullUrl);
    window.location.href = fullUrl;
  };

  return (
    <MainDiv>
      <LocationIcon>
        <Image src={LocationImage} alt='Location icon' width={279} height={167} className='location-icon' />
      </LocationIcon>
      <ContentDiv>
        <Title>The Copilot website has a new location</Title>
        <Description>
          Our website is now live at Copilot.<span>app</span> (formerly Copilot.com). The old URL wil be retired soon,
          so please update your bookmarks.
        </Description>
      </ContentDiv>
      <ButtonDiv>
        <Button text='Go to Copilot.app' onClick={handleGoToNewDomain} className='button' />
        <LearnMore
          href='https://www.copilot.app/guide/new-copilot-url?_gl=1*11pl3xc*_gcl_au*MjkyODQ0MzkyLjE3NDA2NzIyNjQ.'
          target='_blank'
          rel='noopener noreferrer'>
          Learn more
        </LearnMore>
      </ButtonDiv>
    </MainDiv>
  );
}
