import React from 'react';
import Image from 'next/image';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Caption, Founder, FounderPosition, FounderSection, Name, TestimonialCenter } from './styles';

export default function TestimonialCenterBox({ personProfile, personRole, personName, quote, logoUrl }) {
  return (
    <TestimonialCenter>
      <Image src={logoUrl} alt='' width={148} height={52} className='main-logo' />
      <Caption>
        <ReactMarkdown>{quote}</ReactMarkdown>
      </Caption>
      <FounderSection>
        {personProfile && <Image src={personProfile} alt='profile' width={36} height={36} />}
        <Founder>
          <Name>{personName}</Name>
          <FounderPosition>{personRole}</FounderPosition>
        </Founder>
      </FounderSection>
    </TestimonialCenter>
  );
}
