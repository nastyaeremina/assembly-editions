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
import AppsSlider from '../../components/appsSlider';
import Appshero from '../../public/images/appshero.png';

export default function Automation({ seoData, details }) {
  console.log('details', details);
  return (
    <>
      <SEO seoData={seoData}></SEO>
      <Layout>
        <Navbar />
        <AutomationHero>
          <Container>
            <Title>Apps</Title>
            <Caption>
              Save time, reduce human error, and streamline operations for your team and your clients with easy-to-use
              automations.
            </Caption>
            <AutomationButton className='appsbutton'>
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
                text={'View all Apps'}
                href={''}
                hoverColor={'rgba(255, 255, 255,0.8)'}
              />
            </AutomationButton>
          </Container>
          <Image src={Appshero} alt='apps' width={1224} height={324} className='apps-image' />
        </AutomationHero>
        <Container>
          <SetupAutomation istitle>
            <div
              dangerouslySetInnerHTML={{
                __html: separateSpecialChar(
                  'Go beyond Copilot features and connect apps you already use like Airtable and Calendly.'
                )
              }}
            />
          </SetupAutomation>
          <TabView
            tabData={details?.clientFeaturesCollection?.items || []}
            bgColor={MODULE_COLOR_LIST[HOME_MODULE_LIST['Messaging']]?.bgColor}
            textColor={MODULE_COLOR_LIST[HOME_MODULE_LIST['Messaging']]?.fontColor}
          />
          <AutomationCardSection
            heading={'Configure which client can see which apps.'}
            data={[
              {
                title: 'Visible to all clients',
                body: 'With one click, enable all of your clients to see the same thing. E.g. connect Calendly this way to let every client see your availability and schedule a call with you.',

                imageurl:
                  'https://firebasestorage.googleapis.com/v0/b/internal-use-ef844.appspot.com/o/coPilot%2FAutomatic%20connection%20image.png?alt=media&token=d9650c57-dc4a-4057-ae46-6770ff243e08'
              },
              {
                title: 'Manually set for each client',
                body: 'Easily connect an app manually for each client, group of clients, or company. E.g. connect an Airtable project status dashboard manually if you want your clients to only see the projects relevant to them.',

                imageurl:
                  'https://firebasestorage.googleapis.com/v0/b/internal-use-ef844.appspot.com/o/coPilot%2FManual%20connection%20image.png?alt=media&token=7e3f3082-fd6e-4943-9e5a-e22c594b765f'
              }
            ]}
          />
        </Container>
        <ExploreTab />
        <Container>
          <SetupAutomation>
            <div
              dangerouslySetInnerHTML={{
                __html: separateSpecialChar('Learn from businesses doubling down on apps.')
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
                Explore the most popular apps<span>.</span>
              </h2>
              <p>
                There are unlimited ways to start saving time and money by automating your workflows. Here are some of
                the most popular.
              </p>
              <Button
                bgColor={'transparent'}
                fontColor={'#000000'}
                borderColor={'#000000'}
                text={'View all apps'}
                href={'#'}
                hoverColor={'rgba(0, 0, 0, 0.5)'}
                target={'_blank'}
              />
            </TopView>
          </Featured>
        </Container>
        <AppsSlider data={[1, 2, 3, 4, 5, 6, 7, 8, 9]} />
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
