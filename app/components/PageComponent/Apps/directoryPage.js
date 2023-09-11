'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  HeroSection,
  FeatureSection,
  FeatureWrap,
  Input,
  Catagory,
  Catagoryitem,
  FeatureLeft,
  LeftWrap,
  InputWrap,
  FeatureRight,
  FeatureMenu,
  FeatureCard,
  CardText,
  CardEnd,
  FeatureImg,
  Featured,
  ExtensionsSection,
  ExtensionCard,
  CardSub,
  CardInfo,
  OtherWrap,
  CardMain,
  MainBg,
  ImgView,
  AppsHeroWrap,
  AppHeader3,
  CustomAppSection
} from '../../../styles/appsStyles';
import { Container } from '../../../styles/commonStyles';
import CTA from '../../../components/cta/cta';
import FAQ from '../../../components/faq/faq';
import { isEmpty } from '../../../helpers/helpers';
import { APPS_TYPE } from '../../../constants/constant';
import Button from '../../../components/button/button';
import AppError from '../../../components/apperror/error';
import { COPILOT_ONBORADING_LINK, CUSTOM_APP_LINK } from '../../../constants/externalLinks';

export default function AppDirectoryPage({ allCategoryWithPost, allPosts, featuredApps }) {
  //start get static props

  const [selected_category, setSelected_category] = useState(0);
  const [query, setQuery] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      let hash = window.location.hash;
      let result = hash.replace(/#/g, '');
      setSelected_category(result);
    }
  }, []);

  const searchQuery = useCallback(
    (value) => {
      const result = allPosts?.filter((item) => item?.name?.toLowerCase().includes(value?.toLowerCase())) || [];
      if (result) setSearchResult(result);
    },
    [allPosts]
  );

  const onSeachQueryChange = useCallback(
    (e) => {
      const value = e.target.value;
      setQuery(value);
      let timeout;

      if (value) {
        if (!isSearch) setIsSearch(true);
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
          searchQuery(value);
        }, 300);
      } else {
        if (isSearch) setIsSearch(false);
        setSearchResult([]);
      }
    },
    [isSearch, searchQuery]
  );

  const onSubmitSeachQuery = useCallback((e) => {
    e.preventDefault();
  }, []);

  const renderFeaturedView = useMemo(() => {
    if (isEmpty(featuredApps)) return null;
    return featuredApps?.map((item, index) => {
      return (
        <CardMain key={`featuresitem_index_${index}`}>
          <FeatureCard key={`featuredview_index_${index}`}>
            <Link href={`/apps/directory/${item?.slug}`}>
              <FeatureImg>
                <Image src={item?.logo?.url} alt='main-logo' width={236} height={56} objectFit='contain' />
              </FeatureImg>
              <CardText>
                <h3>{item?.name}</h3>
                <p>{item?.description}</p>
              </CardText>
              <CardEnd>
                <p>{item?.partnerAppCategoriesCollection?.items[0]?.name}</p>
              </CardEnd>
            </Link>
          </FeatureCard>
        </CardMain>
      );
    });
  }, [featuredApps]);

  const renderCategoryList = useCallback(
    ({ type }) => {
      if (isEmpty(allCategoryWithPost)) return null;
      return allCategoryWithPost?.map((item, index) => {
        let isActive = `${item?.category?.slug}_${type}` === selected_category;
        if (
          (type === APPS_TYPE.CLIENT && isEmpty(item?.clientList)) ||
          (type === APPS_TYPE.INTERNAL && isEmpty(item?.internalList))
        )
          return null;
        return (
          <Catagoryitem key={`categorylist_${type}_index_${index}`} isActive={isActive}>
            <Link
              href={`#${item?.category?.slug}_${type}`}
              onClick={() => {
                setSelected_category(`${item?.category?.slug}_${type}`);
              }}>
              {item?.category?.name}
            </Link>
          </Catagoryitem>
        );
      });
    },
    [allCategoryWithPost, selected_category]
  );

  const renderPartnerAppsView = useCallback((appList) => {
    if (isEmpty(appList)) return null;
    return appList?.map((item, index) => {
      return (
        <CardSub key={`partnerappview_index${item.slug}`}>
          <Link href={`/apps/directory/${item?.slug}`}>
            <CardInfo>
              <ImgView>
                <Image src={item?.icon?.url} alt='red-icon' width={25} height={25} layout={'fixed'} />
              </ImgView>
              <h3>{item?.name}</h3>
            </CardInfo>
            <p>{item?.description}</p>
          </Link>
        </CardSub>
      );
    }, []);
  }, []);

  const renderAllCategoryAppsView = useCallback(
    ({ type }) => {
      if (isEmpty(allCategoryWithPost)) return null;
      return allCategoryWithPost?.map((item, index) => {
        if (
          (type === APPS_TYPE.CLIENT && isEmpty(item?.clientList)) ||
          (type === APPS_TYPE.INTERNAL && isEmpty(item?.internalList))
        )
          return null;
        return (
          <ExtensionsSection id={`${item?.category?.slug}_${type}`} key={`allCategoryappsview_${type}_index_${index}`}>
            <AppHeader3>{item?.category?.name}</AppHeader3>
            {type === APPS_TYPE.CLIENT && <ExtensionCard>{renderPartnerAppsView(item?.clientList)}</ExtensionCard>}{' '}
            {type === APPS_TYPE.INTERNAL && <ExtensionCard>{renderPartnerAppsView(item?.internalList)}</ExtensionCard>}{' '}
          </ExtensionsSection>
        );
      });
    },
    [allCategoryWithPost, renderPartnerAppsView]
  );

  const renderResultView = useMemo(() => {
    if (!isEmpty(searchResult)) {
      return (
        <Featured key={`searchview`}>
          <h2> {`${searchResult?.length} Result for "${query}"`}</h2>
          <FeatureMenu>{renderPartnerAppsView(searchResult)}</FeatureMenu>
        </Featured>
      );
    } else
      return (
        <ExtensionsSection key={`searchEmptyview`}>
          <AppError query={query} />
        </ExtensionsSection>
      );
  }, [query, renderPartnerAppsView, searchResult]);

  return (
    <>
      <HeroSection>
        <Container>
          <AppsHeroWrap>
            <h1>App Directory</h1>
            <p>Try Copilot free for 14 days, no credit card required</p>
            <Button text={'Start Trial'} href={COPILOT_ONBORADING_LINK} />
          </AppsHeroWrap>
        </Container>
      </HeroSection>
      <FeatureSection>
        <Container>
          <FeatureWrap isAutomation>
            <FeatureLeft>
              <LeftWrap>
                <InputWrap onSubmit={onSubmitSeachQuery}>
                  <Image src='/images/searchicon.svg' alt='search-icon' width={20} height={20} />
                  <Input placeholder='Find an app' value={query} onChange={onSeachQueryChange} type='search' />
                </InputWrap>
                <Catagory>
                  <h4>Client Apps</h4>
                  {!isEmpty(featuredApps) && (
                    <Catagoryitem
                      isActive={selected_category === 'Brief-Section'}
                      onClick={() => {
                        setSelected_category('Brief-Section');
                      }}>
                      <Link href={'#Brief-Section'}>Featured</Link>
                    </Catagoryitem>
                  )}
                  {renderCategoryList({ type: APPS_TYPE.CLIENT })}
                </Catagory>
                <OtherWrap>
                  <h4>Internal Apps</h4>
                  {renderCategoryList({ type: APPS_TYPE.INTERNAL })}
                </OtherWrap>
                <CustomAppSection>
                  <h4>Want to create your own custom app?</h4>
                  <Button
                    bgColor={'transparent'}
                    fontColor={'#000000'}
                    borderColor={'#000000'}
                    text={'Custom app documentation'}
                    href={CUSTOM_APP_LINK}
                    hoverColor={'rgba(0, 0, 0, 0.5)'}
                    className={'custom'}
                  />
                </CustomAppSection>
              </LeftWrap>
            </FeatureLeft>
            {isSearch ? (
              <FeatureRight isSearch={!isEmpty(searchResult)}>{renderResultView}</FeatureRight>
            ) : (
              <FeatureRight>
                {!isEmpty(featuredApps) && (
                  <Featured id='Brief-Section'>
                    <AppHeader3>Featured</AppHeader3>
                    <FeatureMenu>{renderFeaturedView}</FeatureMenu>
                  </Featured>
                )}
                {renderAllCategoryAppsView({ type: APPS_TYPE.CLIENT })}
                {renderAllCategoryAppsView({ type: APPS_TYPE.INTERNAL })}
                {/* <ExtensionsLastSection id='custome-apps'>
                      <AppsTitle>
                        <h3>Custom Apps</h3>
                      </AppsTitle>
                      <BuildWrap>
                        <BuildAppsDetail>
                          <h3>Build your own app</h3>
                          <p>
                            A custom app is a web application that can be embedded into your portal and receives
                            information about the current user or company. With this capability, you can render custom
                            content automatically depending on the user that is currently signed in.
                          </p>
                          <Button
                            bgColor={'transparent'}
                            fontColor={'#000000'}
                            borderColor={'#000000'}
                            text={'Read API docs'}
                            href={COPILOT_REFERENCE_API_LINK}
                            hoverColor={'rgba(0, 0, 0, 0.5)'}
                          />
                        </BuildAppsDetail>
                      </BuildWrap>
                    </ExtensionsLastSection> */}
              </FeatureRight>
            )}
          </FeatureWrap>
        </Container>
      </FeatureSection>
      <CTA />
    </>
  );
}
