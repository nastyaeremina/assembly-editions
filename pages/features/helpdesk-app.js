import Layout from '/components/layout';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import Navbar from '../../components/navbar/navbar';
import { MessegeItem, KnowHero, KnowledgeHero } from '../../styles/modulesStyles';
import CTA from '../../components/cta/cta';
import Tools from '../../components/tools/tool';
import Content from '../../components/content/content';
import Quote from '../../components/quote/quote';
import Client from '../../components/client/client';
import { Container } from '../../styles/commonStyles';
import {
  FEATURES_HELPDESK_ID,
  FEATURES_HELPDESK_TAB_ID,
  HEADER_LIST,
  HOME_MODULE_LIST,
  MODULE_COLOR_LIST,
  MODULE_GRADIENT_IMAGE_LIST,
  MUDULE_LIST,
  NAVBAR_COLOR_LIST
} from '../../constants/constant';
import { useMemo } from 'react';
import { getTabPosts } from '../../lib/contentful-tabs';
import { BottomFunction } from '../../components/content/styles';
import TabView from '../../components/tab/tab';
import { getFeatureById } from '../../lib/contentful-features';
import { isEmpty } from '../../helpers/helpers';

const CURRENT_MODULE = MUDULE_LIST.HELPDESK;
export default function MessagingApp({ details }) {
  const renderHeroSection = useMemo(() => {
    return (
      <>
        <Navbar isModule={true} headerIndex={HEADER_LIST.HELPDESK} />
        <KnowledgeHero>
          <Container>
            <KnowHero>
              <h2 className='basecolor'>Create a </h2>
              <MessegeItem>
                <span className='orengecolor'>knowledge</span>
                <Image
                  src='/images/know.svg'
                  alt='bill-icon'
                  width={200}
                  height={246}
                  layout={'fixed'}
                  className='knowimage'
                />
              </MessegeItem>
              <h2 className='basecolor'>repository</h2>
            </KnowHero>
          </Container>
        </KnowledgeHero>
      </>
    );
  }, []);

  return (
    <>
      <NextSeo
        title='Copilot - It’s all about connection'
        description='copilot offers client portal software solution to manage sales reporting, management, marketing, improve customer relationships and more. Get the best free CRM system for your business.'
      />
      <Layout>
        {renderHeroSection}
        <Content />
        <Container>
          <BottomFunction>
            <TabView
              tabId={FEATURES_HELPDESK_TAB_ID}
              tabData={details?.clientFeaturesCollection?.items || []}
              bgColor={MODULE_COLOR_LIST[HOME_MODULE_LIST['Helpdesk']]?.bgColor}
              textColor={MODULE_COLOR_LIST[HOME_MODULE_LIST['Helpdesk']]?.fontColor}
            />
            <Image
              src='/images/borderline.svg'
              alt='line-icon'
              width={1}
              height={250}
              layout={'fixed'}
              className='borderline'
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
        <CTA moduleName={CURRENT_MODULE} colorList={NAVBAR_COLOR_LIST[HEADER_LIST.HELPDESK]} />
      </Layout>
    </>
  );
}

export async function getServerSideProps({ preview = false }) {
  const details = (await getFeatureById(FEATURES_HELPDESK_ID, preview)) ?? [];
  return {
    props: { details }
  };
}
