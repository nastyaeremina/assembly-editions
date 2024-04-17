'use client';

import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { MODULE_COLOR_LIST } from '../../../constants/constant';
import OfficeCTA from '../../officeCTA';
import Client from '../../client/client';
import ProductHero from '../../producthero';
import { extractYouTubeVideoId } from '../../../helpers/helpers';

export default function ProductDemoPage({ details }) {
  const videoId = extractYouTubeVideoId(details?.videoUrl);
  return (
    <>
      <ProductHero
        colorList={MODULE_COLOR_LIST.Productdemo}
        title={details?.header}
        description={documentToReactComponents(details?.body?.json)}
        videoUrl={videoId}
      />
      <OfficeCTA />
      <Client title={null} isProductdemo={true} />
    </>
  );
}
