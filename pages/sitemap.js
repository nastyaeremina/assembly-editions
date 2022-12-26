import { NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Layout from '../components/layout';
import Navbar from '../components/navbar/navbar';
import { HEADER_LIST, SITEMAP_CONTENT_ID } from '../constants/constant';
import { isEmpty, removeEmptyElement } from '../helpers/helpers';
import { getSitemap } from '../lib/contentful-sitemap';
import { Container } from '../styles/commonStyles';
import {
  MainSection,
  PrivacuHero,
  ContentInfo,
  InfoWrap,
  InfoLink,
  PrivacyContactData
} from '../styles/resourcesStyles';

export default function Privacy({ content }) {
  const [sitemap, setSitemap] = useState([])
  const loadData = useCallback(() => {
    if (!isEmpty(content)) {
      const list = content?.split('#')
      list?.shift()
      let sitemapList = []
      list?.forEach(item => {

        const newItemList = removeEmptyElement(item?.split("\n"))
        const title =newItemList?.[0]
        newItemList?.shift()
        const mapList = []
        newItemList?.forEach(element => {
          const newObject = element?.split(/[\[\]\(\)]/)
          const url= newObject[3]?.split('www.copilot.com')?.[1] || ""
          mapList?.push({ name: newObject[1], url})

        })
        sitemapList?.push(  { title , list: mapList})
        setSitemap(sitemapList)
      })
     
    }
  }, [content])

  useEffect(() => {
    loadData()
  }, [loadData])

  const renderSitemapView = useMemo(() => {
    if (isEmpty(sitemap)) return null
    return sitemap?.map((item, index) => {
      return <InfoWrap key={`sitemap_index_${index}`}>
      <h4>{item?.title}</h4>
      {!isEmpty(item?.list) &&  ( <InfoLink>
        {item?.list?.map((listItem,listIndex)=>  <Link href={listItem?.url} key={`sitemap_list_index_${listIndex}`}>{listItem?.name}</Link> )}
      </InfoLink>)}
    </InfoWrap>
    })
  }, [sitemap])

  return (
    <>
      <NextSeo
        title='Create your portal, pick a plan later'
        description='Try Copilot free for 14 days, no credit card required'
      />
      <Layout>
        <Navbar isEnterPrice={true} headerIndex={HEADER_LIST.ENTERPRICE} />
        <MainSection>
          <PrivacuHero>
            <Container>
              <h2>Sitemap</h2>
            </Container>
          </PrivacuHero>
          <ContentInfo>
            <Container>
              {renderSitemapView}
            </Container>
          </ContentInfo>
        </MainSection>
      </Layout>
    </>
  );
}
export async function getStaticProps({ preview = false }) {
  const content = (await getSitemap(SITEMAP_CONTENT_ID)) ?? '';
  return {
    props: {
      content: content?.content
    }
  };
}