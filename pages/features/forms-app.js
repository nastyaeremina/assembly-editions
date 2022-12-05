import Layout from '/components/layout';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import Navbar from '../../components/navbar/navbar';
import {
  BillMain,
  BillHeroSub,
  MessegeItem,
  ContractHero,
  KnowHero,
  ContractWrap,
  FileMain,
  HeroSub,
  FileWrap,
  FormMain,
  FormHero,
  FormWrap,
  KnowledgeHero,
  MsgHeroSection
} from '../../styles/modulesStyles';
import CTA from '../../components/cta/cta';
import Tools from '../../components/tools/tool';
import Content from '../../components/content/content';
import Quote from '../../components/quote/quote';
import Client from '../../components/client/client';
import { Container } from '../../styles/commonStyles';
import { HEADER_LIST, MODULE_GRADIENT_IMAGE_LIST, MUDULE_LIST, NAVBAR_COLOR_LIST } from '../../constants/constant';
import { useMemo } from 'react';
import { getTabPosts } from '../../lib/contentful-tabs';

const CURRENT_MODULE = MUDULE_LIST.FORMS;
export default function MessagingApp({ module, moduleDetails }) {
  const renderHeroSection = useMemo(() => {
    return (
      <>
        <Navbar isModule={true} headerIndex={HEADER_LIST.FORMS} />
        <FormMain>
          <Container>
            <FormHero className='gap'>
              <h2 className='formtext'>Streamline</h2>
              <FormWrap>
                <MessegeItem>
                  <span className='formtxt'>form</span>

                  <Image
                    src='/images/formhero.svg'
                    alt='bill-icon'
                    width={232}
                    height={222}
                    layout={'fixed'}
                    className='formimage'
                  />
                </MessegeItem>
                <h2 className='formtext'>intake</h2>
              </FormWrap>
            </FormHero>
          </Container>
        </FormMain>
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
        <Tools />
        <Quote gradientImage={MODULE_GRADIENT_IMAGE_LIST[CURRENT_MODULE]} />
        <Client currentModule={CURRENT_MODULE} />
        <CTA moduleName={CURRENT_MODULE} colorList={NAVBAR_COLOR_LIST[HEADER_LIST.FORMS]} />
      </Layout>
    </>
  );
}

// export async function getServerSideProps({ params, preview = false }) {
//     const allPosts = (await getTabPosts(preview)) ?? [];
//     const moduleDetails = allPosts?.filter((item) => item?.name.toLowerCase() === params?.slug)

//     return {
//         props: { preview, module: params?.slug, moduleDetails },
//     };
// }
