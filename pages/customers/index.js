import React, { useMemo } from 'react';
import Button from '../../components/button/button';
import CustomerTestimonial from '../../components/customer/testimonials';
import CustomerFeedBack from '../../components/feedback/customerfeedback';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import { Container } from '../../styles/commonStyles';
import { Heading, HeroBtnBlock, HeroHeading, HeroSection, Para, LastSection } from '../../styles/customerstyles';
import logo1 from '../../public/images/logo1.png';
import logo2 from '../../public/images/logo2.png';
import { getSEOdata } from '../../lib/contentful-seo';
import { CUSTOMER_SEO_ID, ENTERPRICE_SEO_ID } from '../../constants/constant';
import { getAllFeaturedCaseStudies, getAllFeaturedTestimonial } from '../../lib/contentful-testimonial';
import { convertHighlights, isEmpty } from '../../helpers/helpers';
import SEO from '../../components/seo';
import { COPILOT_ONBORADING_LINK } from '../../constants/externalLinks';
import FeedbackSlider from '../../components/feedback/feedbackslider';
import BusinessSlider from '../../components/businessSlider/businessslider';
import { Banner } from '../../components/feedback/banner';

export default function Customer({ testimonialPosts, casestudiesPosts, seoData, content }) {
  const casestudiesView = useMemo(() => {
    if (isEmpty(casestudiesPosts)) return null;
    return casestudiesPosts?.map((item, index) => {
      return (
        <CustomerTestimonial
          key={`casestudy_index_${index}`}
          logo={item?.customerLogo?.imageAsset?.url}
          banner={item?.caseStudyImage?.url}
          body={item?.description}
          highlightsData={item?.highlights}
          satisfaction={'+25%'}
          rate={'-10%'}
          retention={'+25%'}
          slug={item?.slug}
        />
      );
    });
  }, [casestudiesPosts]);

  return (
    <>
      <SEO seoData={seoData} />
      <Layout>
        <Navbar />
        <HeroSection>
          <Container>
            <HeroHeading>Meet our customers</HeroHeading>
            <Para mainpagebody>
              Thousands of tech-enabled service companies – modern accounting firms, consulting businesses, marketing
              agencies – and others use Copilot to streamline their business and grow faster.
            </Para>
            <HeroBtnBlock>
              <Button
                bgColor={'#09AA6C'}
                fontColor={'#FFFFFF'}
                borderColor={'#09AA6C'}
                text={'Start trial'}
                href={COPILOT_ONBORADING_LINK}
                hoverColor={'rgba(0, 0, 0, 0.5)'}
              />
            </HeroBtnBlock>
          </Container>
        </HeroSection>
        {/* {!isEmpty(testimonialPosts) && <CustomerFeedBack data={testimonialPosts} />} */}
        {/* {!isEmpty(testimonialPosts) && <FeedbackSlider data={testimonialPosts} />} */}
        {!isEmpty(testimonialPosts) && <Banner speed={25000} data={testimonialPosts} />}

        {/* <BusinessSlider data={testimonialPosts} /> */}

        <Container>
          <Heading>How Copilot helps businesses succeed</Heading>
        </Container>
        {!isEmpty(casestudiesPosts) && <LastSection>{casestudiesView}</LastSection>}
      </Layout>
    </>
  );
}
export async function getStaticProps({ preview = false }) {
  const seoData = (await getSEOdata(CUSTOMER_SEO_ID)) ?? [];
  const testimonialPosts = (await getAllFeaturedTestimonial()) ?? [];
  const casestudiesPosts = (await getAllFeaturedCaseStudies()) ?? [];

  return {
    props: {
      seoData,
      testimonialPosts,
      casestudiesPosts
    }
  };
}
