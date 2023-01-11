import { NextSeo } from 'next-seo';
import React, { useCallback, useEffect, useState } from 'react';
import { getSEOdata } from '../../lib/contentful-seo';
import { isEmpty } from '../../helpers/helpers';

export default function SEO({ seoData }) {

  return (
    <>
      <NextSeo
        title={seoData?.seoTitle}
        description={seoData?.description}
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          site_name: 'SiteName',
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
