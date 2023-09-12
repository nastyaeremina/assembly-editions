'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '../../../styles/commonStyles';
import {
  Body,
  Card,
  Heading,
  HeroBtn,
  ImageSection,
  Leftline,
  PartnershipHero,
  Rightline,
  Round,
  Section
} from '../../../styles/partnershipStyles';
import Button from '../../button/button';
import PartnershipCard from '../../partnershipcard';
import circle from '../../../../public/images/circle.svg';

export default function PartnershipPage({ details }) {
  const title = () => {
    const titleSplitList = details?.title?.split(',');
    const seprateWithDotList = titleSplitList?.join(`<span>,</span>`)?.split('.');
    const finalTitle = seprateWithDotList?.join(`<span>.</span>`);
    return finalTitle;
  };

  return (
    <>
      <Container>
        <PartnershipHero>
          <Heading>{details?.title && <div dangerouslySetInnerHTML={{ __html: title() }} />}</Heading>
          <Body>{details?.description && details?.description}</Body>
          <HeroBtn>
            <Button
              bgColor={'#09AA6C'}
              fontColor={'#FFFFFF'}
              borderColor={'#09AA6C'}
              text={'Apply now'}
              href={details?.link}
              hoverColor={'rgba(255, 255, 255,0.8)'}
              className='btn'
            />
          </HeroBtn>
        </PartnershipHero>
      </Container>
      <ImageSection>
        <Leftline></Leftline>
        <Round>
          <Image src={circle} alt='circle' width={527} height={527} className='circle' />
        </Round>
        <Section>
          <Card>
            <Image src={details?.image1?.url} alt='partnership' width={255} height={292} className='hero-image' />
          </Card>
          <Card>
            <Image src={details?.image2?.url} alt='partnership' width={255} height={292} className='hero-image' />
          </Card>
        </Section>
        <Rightline></Rightline>
      </ImageSection>
      <Container>
        <PartnershipCard
          heading={details?.section1Header}
          body={details?.section1Description}
          src={details?.section1Image?.url}
          buttonLink={details?.section1Link}
        />
        <PartnershipCard
          heading={details?.section2Header}
          body={details?.section2Description}
          src={details?.section2Image?.url}
          buttonLink={details?.section2Link}
        />
        <PartnershipCard
          heading={details?.section3Header}
          body={details?.section3Description}
          src={details?.section3Image?.url}
          buttonLink={details?.section3Link}
        />
      </Container>
    </>
  );
}
