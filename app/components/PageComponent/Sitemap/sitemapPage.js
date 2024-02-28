'use client';
import Link from 'next/link';
import { useMemo } from 'react';
import { isEmpty } from '../../../helpers/helpers';
import { Container } from '../../../styles/commonStyles';
import { MainSection, PrivacuHero, ContentInfo, InfoWrap, InfoLink } from '../../../styles/resourcesStyles';

export default function SiteMapPage({ data: sitemap }) {
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
