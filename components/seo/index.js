import { NextSeo } from 'next-seo';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import { getSEOdata } from '../../lib/contentful-seo';
import { isEmpty } from '../../helpers/helpers';

export default function SEO({ id,seoData }) {
    const [data, setData] = useState([]);
    const loadData = useCallback(async () => {
      if(isEmpty(seoData)){
        const posts = (await getSEOdata(id)) ?? [];
        setData(posts);
      }else setData(seoData)
    }, [id, seoData]);
  
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
      images: isEmpty(data?.openGraphImage) ? []:[
        {
          url: data?.openGraphImage?.url
        }
      ]
      }}
  /></>
  );
}
