import Layout from '/components/layout';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import Navbar from '../../components/navbar/navbar';
import CTA from '../../components/cta/cta';
import Tools from '../../components/tools/tool';
import Content from '../../components/content/content';
import Quote from '../../components/quote/quote';
import Client from '../../components/client/client';
import { Container } from '../../styles/commonStyles';
import {
  FEATURES_FILES_ID,
  HEADER_LIST,
  HOME_MODULE_LIST,
  MODULE_COLOR_LIST,
  MODULE_GRADIENT_IMAGE_LIST,
  MUDULE_LIST,
  NAVBAR_COLOR_LIST
} from '../../constants/constant';
import { useMemo } from 'react';
import { getTabPosts } from '../../lib/contentful-tabs';
import { getFeatureById } from '../../lib/contentful-features';
import { BottomFunction } from '../../components/content/styles';
import TabView from '../../components/tab/tab';
import { isEmpty } from '../../helpers/helpers';
import FeatureHero from '../../components/featurehero/featurehero';
import SEO from '../../components/seo';
import { getSEOdata } from '../../lib/contentful-seo';

const CURRENT_MODULE = MUDULE_LIST.FILES;
export default function MessagingApp({ details, seoData }) {
  const renderHeroSection = useMemo(() => {
    return (
      <>
        <Navbar isModule={true} headerIndex={HEADER_LIST.FILES} />
        <FeatureHero
          colorList={MODULE_COLOR_LIST[HOME_MODULE_LIST['Files']]}
          title={'Files App'}
          description={
            'Make it easy to share files with clients, stay organized folders, and get contracts signed with eSignature requests.'
          }
          iconUrl={'/images/file-icon.svg'}
          videoId={details?.videoId}
        />
      </>
    );
  }, [details?.videoId]);

  return (
    <>
      <SEO id={'4HCfvde1roSplxIYh7Ab3Y'} seoData={seoData} />
      <Layout>
        {renderHeroSection}
        <Content />
        <Container>
          <BottomFunction>
            <TabView
              tabData={details?.clientFeaturesCollection?.items || []}
              bgColor={MODULE_COLOR_LIST[HOME_MODULE_LIST['Files']]?.bgColor}
              textColor={MODULE_COLOR_LIST[HOME_MODULE_LIST['Files']]?.fontColor}
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
        <CTA moduleName={CURRENT_MODULE} colorList={NAVBAR_COLOR_LIST[HEADER_LIST.FILES]} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const details = (await getFeatureById(FEATURES_FILES_ID, preview)) ?? [];
  const seoData = (await getSEOdata('4HCfvde1roSplxIYh7Ab3Y')) ?? [];

  return {
    props: { details, seoData }
  };
}
