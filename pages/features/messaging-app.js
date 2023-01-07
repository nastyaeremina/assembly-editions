import Layout from '/components/layout';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import Navbar from '../../components/navbar/navbar';
import { HeroSub, MsgHeroSection, BorderLine } from '../../styles/modulesStyles';
import CTA from '../../components/cta/cta';
import Tools from '../../components/tools/tool';
import Content from '../../components/content/content';
import Quote from '../../components/quote/quote';
import Client from '../../components/client/client';
import { Container } from '../../styles/commonStyles';
import {
  FEATURES_MESSAG_ID,
  FEATURES_MESSAG_TAB_ID,
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

const CURRENT_MODULE = MUDULE_LIST.MESSAGING;
export default function MessagingApp({ details }) {
  const renderHeroSection = useMemo(() => {
    return (
      <>
        <Navbar isModule={true} headerIndex={HEADER_LIST.MESSAGING} />

        <FeatureHero
          colorList={MODULE_COLOR_LIST[HOME_MODULE_LIST['Messaging']]}
          title={'Messaging App'}
          description={
            'Make client communication secure and seamless, and never miss a message with comprehensive email notifications.'
          }
          iconUrl={'/images/module-icon.svg'}
          videoId={details?.videoId}
        />
      </>
    );
  }, []);

  return (
    <>
      <SEO id={'3oNabM5iJI6OdftOBOzWTh'} />
      <Layout>
        {renderHeroSection}

        <Content />
        <Container>
          <BottomFunction>
            <TabView
              tabId={FEATURES_MESSAG_TAB_ID}
              tabData={details?.clientFeaturesCollection?.items || []}
              bgColor={MODULE_COLOR_LIST[HOME_MODULE_LIST['Messaging']]?.bgColor}
              textColor={MODULE_COLOR_LIST[HOME_MODULE_LIST['Messaging']]?.fontColor}
            />
          </BottomFunction>
        </Container>

        {!isEmpty(details?.internalFeaturesCollection?.items) && (
          <Tools data={details?.internalFeaturesCollection?.items} />
        )}
        {!isEmpty(details?.testimonial) && (
          <Quote gradientImage={MODULE_GRADIENT_IMAGE_LIST[CURRENT_MODULE]} data={details?.testimonial} />
        )}
        <Client currentModule={CURRENT_MODULE} />
        <CTA moduleName={CURRENT_MODULE} colorList={NAVBAR_COLOR_LIST[HEADER_LIST.MESSAGING]} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const details = (await getFeatureById(FEATURES_MESSAG_ID, preview)) ?? [];
  return {
    props: { details }
  };
}
