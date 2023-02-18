import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import SEO from '../components/seo';
import { HEADER_LIST, SITEMAP_CONTENT_ID, SITEMAP_SEO_ID } from '../constants/constant';
import { isEmpty, removeEmptyElement } from '../helpers/helpers';
import { getSEOdata } from '../lib/contentful-seo';
import { getSitemap } from '../lib/contentful-sitemap';
import { Container } from '../styles/commonStyles';
import { MainSection, PrivacuHero, ContentInfo, InfoWrap, InfoLink } from '../styles/resourcesStyles';

export default function Privacy({ content, seoData }) {
  const [sitemap, setSitemap] = useState([]);
  const loadData = useCallback(() => {
    if (!isEmpty(content)) {
      const newContent = '\n' + content;
      const list = newContent?.split('\n#');
      list?.shift();
      let sitemapList = [];
      list?.forEach((item) => {
        const newItemList = removeEmptyElement(item?.split('\n'));

        const title = newItemList?.[0];
        newItemList?.shift();
        const mapList = [];
        newItemList?.forEach((element) => {
          const newObject = element?.split(/[\[\]\(\)]/);
          const url = newObject[3]?.split('www.copilot.com')?.[1] || newObject[3];
          mapList?.push({ name: newObject[1], url, isExternal: url === newObject[3] });
        });
        sitemapList?.push({ title, list: mapList });
        setSitemap(sitemapList);
      });
    }
  }, [content]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const renderSitemapView = useMemo(() => {
    if (isEmpty(sitemap)) return null;
    return sitemap?.map((item, index) => {
      return (
        <InfoWrap key={`sitemap_index_${index}`}>
          <h2>{item?.title}</h2>
          {!isEmpty(item?.list) && (
            <InfoLink>
              {item?.list?.map((listItem, listIndex) => {
                return (
                  <Link
                    href={listItem?.url}
                    key={`sitemap_list_index_${listIndex}`}
                    target={listItem?.isExternal ? '_blank' : '_self'}>
                    {listItem?.name}
                  </Link>
                );
              })}
            </InfoLink>
          )}
        </InfoWrap>
      );
    });
  }, [sitemap]);

  return (
    <>
      <SEO seoData={seoData} />
      <Layout>
        <Navbar isEnterPrice={true} headerIndex={HEADER_LIST.ENTERPRICE} />
        <MainSection>
          <PrivacuHero>
            <Container>
              <h1>Sitemap</h1>
            </Container>
          </PrivacuHero>
          <ContentInfo>
            <Container>{renderSitemapView}</Container>
          </ContentInfo>
        </MainSection>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const content = (await getSitemap(SITEMAP_CONTENT_ID)) ?? '';
  const seoData = (await getSEOdata(SITEMAP_SEO_ID)) ?? [];
  seoData.canonical="https://www.copilot.com/sitemap";
  return {
    props: {
      content: content?.content,
      seoData
    }
  };
}
