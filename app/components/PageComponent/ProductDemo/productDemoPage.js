'use client';

import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Client from '../../client/client';
import SimpleSection from '../../standardHero/simpleSection/simpleSection';
import { COPILOT_ONBOARDING_LINK } from '../../../constants/externalLinks';
import heroImage from '../../../../public/images/heroimage.png';

export default function ProductDemoPage({ details }) {
  return (
    <>
      <div className='standard-page'>
        <SimpleSection
          title={details?.header}
          description={documentToReactComponents(details?.body?.json)}
          videoUrl={details?.videoUrl}
          primaryButtonLink={COPILOT_ONBOARDING_LINK}
          primaryButtonText='Try for free'
          banner={heroImage.src}
        />
      </div>
      <Client title={null} isProductdemo={true} />
    </>
  );
}
