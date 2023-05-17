import React from 'react';
import Image from 'next/image';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import SEO from '../../components/seo';
import FAQ from '../../components/faq/faq';
import { Container } from '../../styles/commonStyles';
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
} from '../../styles/partnershipStyles';
import Button from '../../components/button/button';
import PartnershipCard from '../../components/partnershipcard';
import { PARTNERSHIP_APPLY_LINK } from '../../constants/externalLinks';
import { PARTNERSHIP_FAQ_ID, PARTNERSHIP_ID } from '../../constants/constant';
import { getPartnershipDetail } from '../../lib/contentful-partnership';
import circle from '../../public/images/circle.svg';
import { useMemo } from 'react';

export default function Partnership({ details, seoData }) {
  

  const title=useMemo(()=>{
    const titleSplitList = details?.title?.split(',');
    const seprateWithDotList = titleSplitList?.join(`<span>,</span>`)?.split('.');
    const finalTitle = seprateWithDotList?.join(`<span>.</span>`);
    return finalTitle
  },[details?.title])
  return (
    <>
      <SEO seoData={seoData} />
      <Layout>
        <Navbar />
        <Container>
          <PartnershipHero>
            <Heading>{details?.title &&                   <div dangerouslySetInnerHTML={{ __html: title }} />}</Heading>
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
            <Image src={circle} alt='circle' width={527} height={527} className='circle'/>
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
        <FAQ contentID={PARTNERSHIP_FAQ_ID} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const details = (await getPartnershipDetail({ id: PARTNERSHIP_ID })) ?? [];
  const seoData = [];
  return {
    props: { details, seoData }
  };
}
