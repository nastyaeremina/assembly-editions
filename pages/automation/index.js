import Image from 'next/image';
import SEO from '../../components/seo';
import Navbar from '../../components/navbar/navbar';
import Layout from '../../components/layout';
import {
  AutomationButton,
  AutomationHero,
  Caption,
  CardSec,
  Cards,
  Featured,
  SetupAutomation,
  Title
} from '../../styles/automationStyles';
import { Container } from '../../styles/commonStyles';
import AutomationIMG from '../../public/images/automation.png';
import Button from '../../components/button/button';
import { COPILOT_ONBORADING_LINK } from '../../constants/externalLinks';
import CTA from '../../components/cta/cta';
import Content from '../../components/content/content';
import TabView from '../../components/tab/tab';
import { FEATURES_MESSAG_ID, HOME_MODULE_LIST, MODULE_COLOR_LIST } from '../../constants/constant';
import AutomationCardSection from '../../components/automationcard';
import AutomationCard from '../../components/automationcard/card';
import Card1 from '../../public/images/card1.png';
import File1 from '../../public/images/file1.png';
import File2 from '../../public/images/file2.png';
import ExploreTab from '../../components/solution/clienttab/exploretab';
import { separateSpecialChar } from '../../helpers/helpers';
import ExtentionCard from '../../components/Extentioncard';
import CustomerTestimonial from '../../components/customer/testimonials';
import FAQ from '../../components/faq/faq';
import { TopView } from '../../components/solution/clienttab/styles';
import FeatureSlider from '../../components/FeatureSlider/featureslider';
import { getFeatureById } from '../../lib/contentful-features';
import { getSolutionBySlug } from '../../lib/contentful-solutions';
import { getAllFeaturedCaseStudies } from '../../lib/contentful-testimonial';

export default function Automation({ seoData, details }) {
  console.log('details', details);
  return (
    <>
      <SEO seoData={seoData}></SEO>
      <Layout>
        <Navbar />
        <AutomationHero>
          <Container>
            <Title>Automations</Title>
            <Caption>
              Save time, reduce human error, and streamline operations for your team and your clients with easy-to-use
              automations.
            </Caption>
            <AutomationButton>
              <Button
                bgColor={'#09AA6C'}
                fontColor={'#fff'}
                borderColor={'#09AA6C'}
                text={'Start Trial'}
                href={COPILOT_ONBORADING_LINK}
                hoverColor={'rgba(255, 255, 255,0.8)'}
              />
              <Button
                bgColor={'transparent'}
                fontColor={'#E3FFEE'}
                borderColor={'#E3FFEE'}
                text={'View all Automations'}
                href={''}
                hoverColor={'rgba(255, 255, 255,0.8)'}
              />
            </AutomationButton>
            <Image src={AutomationIMG} alt='automation' width={1224} height={324} className='automation-image' />
          </Container>
        </AutomationHero>
        <Container>
        <SetupAutomation istitle>
            <div
              dangerouslySetInnerHTML={{
                __html: separateSpecialChar('Automate the client onboarding experience.')
              }}
            />
          </SetupAutomation>
          <TabView
            tabData={details?.clientFeaturesCollection?.items || []}
            bgColor={MODULE_COLOR_LIST[HOME_MODULE_LIST['Messaging']]?.bgColor}
            textColor={MODULE_COLOR_LIST[HOME_MODULE_LIST['Messaging']]?.fontColor}
          />
          <AutomationCardSection
            heading={'Let leads convert themselves.'}
            title={'Every service business is a technology company'}
            body={
              'Enable client sign up and place a ‘Sign up’ button on your marketing website. Now let leads and clients seamlessly set up accounts self-serve and then guide them through a customized onboarding experience. '
            }
            imageurl={Card1}
          />
          <AutomationCardSection
            heading={'Sync your 3rd party storage solutions, CRMs, and more.'}
            title={'File storage sync'}
            body={
              'Back up data in an organized way by creating a secure and seamless connection with file storage solutions including Google Drive, Box, Dropbox, and others.'
            }
            title2={'Sales CRM sync'}
            body2={
              'If you’re using a separate sales CRM, set up automations to automatically invite clients to your client portal when a deal is closed, sync custom fields, and more. '
            }
            imageurl={File1}
            imageurl2={File2}
            isTwoCard={true}
            isCard={true}
          />
        </Container>
        <ExploreTab />
        <Container>
          <SetupAutomation>
            <div
              dangerouslySetInnerHTML={{
                __html: separateSpecialChar('Set up automations powered by our API, Zapier, or Make.')
              }}
            />
          </SetupAutomation>
          <CardSec>
            <ExtentionCard
              description={
                'Copilot comes with a comprehensive REST API that lets you interact with entities like clients, companies, forms, files, and more. Use the Copilot API for full control over automations. '
              }
              linkname={'Copilot API'}
            />
            <Cards>
              <ExtentionCard
                isCard={true}
                description={'Use Zapier templates to set up automations.'}
                linkname={'Copilot on Zapier'}
              />
              <ExtentionCard
                isCard={true}
                description={'Use Make scenario templates to set up automations.'}
                linkname={'Copilot on Make'}
              />
            </Cards>
          </CardSec>
          <SetupAutomation>
            <div
              dangerouslySetInnerHTML={{
                __html: separateSpecialChar('Learn from businesses doubling down on automation.')
              }}
            />
          </SetupAutomation>
          <CustomerTestimonial
            body={
              'With Copilot, Provantage Capital was able to grow lol obviously. We did them good. Case study case study lorem ipsum dolor sit amet.'
            }
          />
          <Featured>
            <TopView>
              <h2>
                Explore the most popular automations<span>.</span>
              </h2>
              <p>
                There are unlimited ways to start saving time and money by automating your workflows. Here are some of
                the most popular automations.
              </p>
              <Button
                bgColor={'transparent'}
                fontColor={'#000000'}
                borderColor={'#000000'}
                text={'View all automations'}
                href={'#'}
                hoverColor={'rgba(0, 0, 0, 0.5)'}
                target={'_blank'}
              />
            </TopView>
          </Featured>
        </Container>
        <FeatureSlider data={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
        <FAQ />
        <CTA />
      </Layout>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const featuredetails = (await getFeatureById(FEATURES_MESSAG_ID, preview)) ?? [];
  // const details = (await getMasterComparisonDetail()) ?? [];
  const solutiondetails = (await getSolutionBySlug('accounting-client-portal', preview)) ?? [];
  const casestudiesPosts = (await getAllFeaturedCaseStudies()) ?? [];
  console.log('casestudiesPosts', casestudiesPosts);
  const details = {
    clientFeaturesCollection: featuredetails?.clientFeaturesCollection,
    clientExperienceCollection: solutiondetails?.clientExperienceCollection,
    casestudiesPosts: casestudiesPosts?.[0] || {}
  };
  return {
    props: { details }
  };
}
