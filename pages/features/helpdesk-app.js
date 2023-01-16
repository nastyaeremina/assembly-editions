import Layout from '/components/layout';
import Navbar from '../../components/navbar/navbar';
import CTA from '../../components/cta/cta';
import Tools from '../../components/tools/tool';
import Content from '../../components/content/content';
import Quote from '../../components/quote/quote';
import Client from '../../components/client/client';
import { Container } from '../../styles/commonStyles';
import {
  FEATURES_HELPDESK_ID,
  HEADER_LIST,
  HOME_MODULE_LIST,
  MODULE_COLOR_LIST,
  MODULE_GRADIENT_IMAGE_LIST,
  MUDULE_LIST,
  NAVBAR_COLOR_LIST
} from '../../constants/constant';
import { useMemo } from 'react';
import { BottomFunction } from '../../components/content/styles';
import TabView from '../../components/tab/tab';
import { getFeatureById } from '../../lib/contentful-features';
import { isEmpty } from '../../helpers/helpers';
import FeatureHero from '../../components/featurehero/featurehero';
import SEO from '../../components/seo';
import { getSEOdata } from '../../lib/contentful-seo';

const CURRENT_MODULE = MUDULE_LIST.HELPDESK;
export default function MessagingApp({ details, seoData }) {
  const renderHeroSection = useMemo(() => {
    return (
      <>
        <Navbar isModule={true} headerIndex={HEADER_LIST.HELPDESK} />
        <FeatureHero
          colorList={MODULE_COLOR_LIST[HOME_MODULE_LIST['Helpdesk']]}
          title={details?.header}
          heroImage={details?.heroImage?.url}
          description={details?.body}
          iconUrl={'/images/helpdesk-icon.svg'}
          videoId={details?.videoId}
        />
      </>
    );
  }, [details?.body, details?.header, details?.heroImage?.url, details?.videoId]);

  return (
    <>
      <SEO seoData={seoData} />
      <Layout>
        {renderHeroSection}
        {details?.section1Header && <Content title={details?.section1Header} description={details?.section1Body} />}
        <Container>
          <BottomFunction>
            <TabView
              tabData={details?.clientFeaturesCollection?.items || []}
              bgColor={MODULE_COLOR_LIST[HOME_MODULE_LIST['Helpdesk']]?.bgColor}
              textColor={MODULE_COLOR_LIST[HOME_MODULE_LIST['Helpdesk']]?.fontColor}
            />
          </BottomFunction>
        </Container>
        {!isEmpty(details?.internalFeaturesCollection?.items) && (
          <Tools data={details?.internalFeaturesCollection?.items} title={details?.section2Header} />
        )}
        {!isEmpty(details?.testimonial) && (
          <Quote gradientImage={MODULE_GRADIENT_IMAGE_LIST[CURRENT_MODULE]} data={details?.testimonial} />
        )}
        <Client currentModule={CURRENT_MODULE} title={details?.section3Header} />
        <CTA moduleName={CURRENT_MODULE} colorList={NAVBAR_COLOR_LIST[HEADER_LIST.HELPDESK]} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const details = (await getFeatureById(FEATURES_HELPDESK_ID, preview)) ?? [];
  const seoData = (await getSEOdata('nauZdYlDqK8LKHYJdkcnt')) ?? [];

  return {
    props: { details, seoData }
  };
}
