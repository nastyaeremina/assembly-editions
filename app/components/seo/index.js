'use client';

import { NextSeo } from 'next-seo';
import React, { useCallback, useEffect, useState } from 'react';
import { isEmpty } from '../../helpers/helpers';

export default function SEO({ seoData }) {
  return (
    <>
      <NextSeo
        title={seoData?.seoTitle}
        canonical={seoData?.canonical}
        description={seoData?.description}
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          site_name: 'copilot.com',
          images: isEmpty(seoData?.openGraphImage)
            ? []
            : [
                {
                  url: seoData?.openGraphImage?.url
                }
              ]
        }}
      />
    </>
  );
}
