'use client';

import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { HOME_MODULE_LIST, MODULE_COLOR_LIST } from '../../../constants/constant';
import OfficeCTA from '../../officeCTA';
import Client from '../../client/client';
import ProductHero from '../../producthero';

export default function ProductDemoPage({ details }) {
  return (
    <>
      <ProductHero
        colorList={MODULE_COLOR_LIST[HOME_MODULE_LIST['Productdemo']]}
        title={details?.header}
        description={documentToReactComponents(details?.body?.json)}
        videoUrl={details?.videoUrl}
      />
      <OfficeCTA />
      <Client title={details?.section3Header} isProductdemo={true} />
    </>
  );
}
