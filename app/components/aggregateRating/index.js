import React from 'react';
import { getSEOdata } from '../../lib/contentful-seo';
import { isEmpty } from '../../helpers/helpers';

export default async function AggregateRating({ id, data }) {
  let seoData;
  if (!isEmpty(id)) seoData = (await getSEOdata(id)) ?? [];
  else seoData = data;
  if (isEmpty(seoData) || seoData?.isEnableReviewSnippet !== true) return null;
  const jsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Organization',
    name: 'Copilot',
    url: 'https://www.copilot.com',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.9,
      bestRating: '5',
      worstRating: '1',
      ratingCount: 622
    }
  };

  return <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
