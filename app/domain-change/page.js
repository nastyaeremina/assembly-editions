'use client';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { CURRENT_SITE_URL } from '../constants/constant';
import LocationImage from '../../public/images/location-icon.png';
import Button from '../components/button/button';
import { MainDiv, LocationIcon, Title, Description, LearnMore, ButtonDiv, ContentDiv } from './styles';

export default function DomainChangePage() {
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
    </MainDiv>
  );
}
