'use client';

import { NextSeo } from 'next-seo';
import React, { useCallback, useEffect, useState } from 'react';
import { isEmpty } from '../../helpers/helpers';
import { CURRENT_DOMAIN } from '../../constants/constant';

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
          site_name: CURRENT_DOMAIN,
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
