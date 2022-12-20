import { getSEOdata } from '../../lib/contentful-seo';
import { NextSeo } from 'next-seo';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { GetServerSidePropsContext } from 'next';

export default function SEO({ id }) {
    const [data, setData] = useState([]);
    const loadData = useCallback(async () => {
      const posts = (await getSEOdata(id)) ?? [];
      setData(posts);
    }, [id]);
  
    useEffect(() => {
      loadData();
    }, [loadData]);

  return (
    <>
    <NextSeo
    title={data?.seoTitle}
    description={data?.description}
    openGraph={{
      type: 'website',
      locale: 'en_IE',
      site_name: 'SiteName',
      images:[
        {
          url: data?.openGraphImage?.url
        }
      ]
      }}
  /></>
  );
}
