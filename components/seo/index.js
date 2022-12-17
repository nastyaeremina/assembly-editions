import { getSEOdata } from '../../lib/contentful-seo';
import { NextSeo } from 'next-seo';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

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
  /></>
  );
}
