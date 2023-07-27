'use client';
import Link from 'next/link';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { isEmpty, removeEmptyElement } from '../../../helpers/helpers';
import { Container } from '../../../styles/commonStyles';
import { MainSection, PrivacuHero, ContentInfo, InfoWrap, InfoLink } from '../../../styles/resourcesStyles';

export default function SiteMapPage({ data: content }) {
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
    </>
  );
}
