import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import SEO from '../../components/seo';
import Layout from '../../components/layout';
import Navbar from '../../components/navbar/navbar';
import { HOME_MODULE_LIST, MODULE_COLOR_LIST, PRODUCT_DEMO_PAGE_ID } from '../../constants/constant';
import OfficeCTA from '../../components/officeCTA';
import Client from '../../components/client/client';
import { getProductDemoContent } from '../../lib/contentful-weeklyDemo';
import ProductHero from '../../components/producthero';

export default function ProductDemo({ details }) {
  return (
    <>
      <SEO seoData={details?.seoMetadata} />
      <Layout>
        <Navbar />
        <ProductHero
          colorList={MODULE_COLOR_LIST[HOME_MODULE_LIST['Productdemo']]}
          title={details?.header}
          description={documentToReactComponents(details?.body?.json)}
          videoUrl={details?.videoUrl}
        />
        <OfficeCTA />
        <Client title={details?.section3Header} isProductdemo={true} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const details = (await getProductDemoContent(PRODUCT_DEMO_PAGE_ID, preview)) ?? [];
  return {
    props: { details }
  };
}
