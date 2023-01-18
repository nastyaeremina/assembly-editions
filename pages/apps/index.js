import Layout from '/components/layout';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { getAllBlogs } from '../../lib/contentful-blogs';
import Navbar from '../../components/navbar/navbar';
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
  SchedulingApps,
  AppsTitle,
  BuildWrap,
  BuildAppsDetail,
  OtherWrap,
  CardMain,
  MainBg,
  ImgView,
  AppsHeroWrap,
  ExtensionsLastSection,
  AppHeader3
} from '../../styles/appsStyles';
import { Container, PrimaryButton, SecondryButton } from '../../styles/commonStyles';
import CTA from '../../components/cta/cta';
import Image from 'next/image';
import FAQ from '../../components/faq/faq';
import { getAllParrtnerAppsCategories, getAllPartnerApps } from '../../lib/contentful-partnerApps';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { isEmpty } from '../../helpers/helpers';
import { APPS_TYPE, APP_SEO_ID } from '../../constants/constant';
import Button from '../../components/button/button';
import SEO from '../../components/seo';
import AppError from '../../components/apperror/error';
import { getSEOdata } from '../../lib/contentful-seo';

export default function Apps({ allPosts, featuredApps, allCategoryWithPost, dataIntegrationApps, seoData }) {
  const [selected_category, setSelected_category] = useState();
  const [query, setQuery] = useState('');
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
            <Link href={`/apps/${item?.slug}`}>
              <FeatureImg>
                <Image src={item?.logo?.url} alt='main-logo' width={236} height={56} objectFit='contain' />
              </FeatureImg>
              <CardText>
                <h4>{item?.name}</h4>
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

  const renderCategoryList = useMemo(() => {
    if (isEmpty(allCategoryWithPost)) return null;
    return allCategoryWithPost?.map((item, index) => {
      let isActive = item?.category?.slug === selected_category;
      return (
        <Catagoryitem key={`categorylist_index_${index}`} isActive={isActive}>
          <Link
            href={`#${item?.category?.slug}`}
            onClick={() => {
              setSelected_category(item?.category?.slug);
            }}>
            {item?.category?.name}
          </Link>
        </Catagoryitem>
      );
    });
  }, [allCategoryWithPost, selected_category]);

  const renderPartnerAppsView = useCallback((appList) => {
    if (isEmpty(appList)) return null;
    return appList?.map((item, index) => {
      return (
        <CardSub key={`partnerappview_index${index}`}>
          <Link href={`/apps/${item?.slug}`}>
            <CardInfo>
              <ImgView>
                <Image src={item?.icon?.url} alt='red-icon' width={25} height={25} layout={'fixed'} />
              </ImgView>
              <h4>{item?.name}</h4>
            </CardInfo>
            <p>{item?.description}</p>
          </Link>
        </CardSub>
      );
    }, []);
  }, []);

  const renderAllCategoryAppsView = useMemo(() => {
    if (isEmpty(allCategoryWithPost)) return null;
    return allCategoryWithPost?.map((item, index) => {
      return (
        <ExtensionsSection id={item?.category?.slug} key={`allCategoryappsview_index_${index}`}>
          <AppHeader3>{item?.category?.name}</AppHeader3>
          <ExtensionCard>{renderPartnerAppsView(item?.list)}</ExtensionCard>
        </ExtensionsSection>
      );
    });
  }, [allCategoryWithPost, renderPartnerAppsView]);

  const renderDataIntegrationApps = useMemo(() => {
    if (isEmpty(dataIntegrationApps)) return null;
    return renderPartnerAppsView(dataIntegrationApps);
  }, [dataIntegrationApps, renderPartnerAppsView]);

  const renderResultView = useMemo(() => {
    if (!isEmpty(searchResult)) {
      return (
        <Featured key={`searchview`}>
          <h3> {`${searchResult?.length} Result for "${query}"`}</h3>
          <FeatureMenu>{renderPartnerAppsView(searchResult)}</FeatureMenu>
        </Featured>
      );
    } else
      return (
        <ExtensionsSection key={`searchEmptyview`} >
          <AppError query={query} />
        </ExtensionsSection>
      );
  }, [query, renderPartnerAppsView, searchResult]);

  return (
    <>
      <SEO seoData={seoData}></SEO>
      <Layout>
        <MainBg>
          <Navbar />
          <HeroSection>
            <Container>
              <AppsHeroWrap>
                <h2>App Directory</h2>
                <p>Try Copilot free for 14 days, no credit card required</p>
                <Button text={'Start Trial'} href={'https://dashboard.copilot.com/onboarding'} />
              </AppsHeroWrap>
            </Container>
          </HeroSection>
          <FeatureSection>
            <Container>
              <FeatureWrap>
                <FeatureLeft>
                  <LeftWrap>
                    <InputWrap onSubmit={onSubmitSeachQuery}>
                      <Image src='/images/searchicon.svg' alt='search-icon' width={20} height={20} />
                      <Input placeholder='Find an app' value={query} onChange={onSeachQueryChange} type='search' />
                    </InputWrap>
                    <Catagory>
                      <h4>Partner Apps</h4>
                      <Catagoryitem
                        isActive={selected_category === 'Brief-Section'}
                        onClick={() => {
                          setSelected_category('Brief-Section');
                        }}>
                        <Link href={'#Brief-Section'}>Featured</Link>
                      </Catagoryitem>
                      {renderCategoryList}
                    </Catagory>
                    <OtherWrap>
                      <h4>Other</h4>
                      <Catagoryitem isActive={selected_category === 'Integrations-Section'}>
                        <Link
                          href={'#Integrations-Section'}
                          onClick={() => {
                            setSelected_category('Integrations-Section');
                          }}>
                          Data Integrations
                        </Link>
                      </Catagoryitem>
                      <Catagoryitem isActive={selected_category === 'custome-apps'}>
                        <Link
                          href={'#custome-apps'}
                          onClick={() => {
                            setSelected_category('custome-apps');
                          }}>
                          Custom Apps
                        </Link>
                      </Catagoryitem>
                    </OtherWrap>
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
                    {renderAllCategoryAppsView}

                    {!isEmpty(dataIntegrationApps) && (
                      <ExtensionsSection id='Integrations-Section'>
                        <AppsTitle>
                          <AppHeader3>Data Integrations</AppHeader3>
                          <p>Integrations</p>
                        </AppsTitle>
                        <ExtensionCard>{renderDataIntegrationApps}</ExtensionCard>
                      </ExtensionsSection>
                    )}
                    <ExtensionsLastSection id='custome-apps'>
                      <AppsTitle>
                        <h3>Custom Apps</h3>
                      </AppsTitle>
                      <BuildWrap>
                        <BuildAppsDetail>
                          <h5>Build your own app</h5>
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
                            href={'https://docs.copilot.com/reference/introduction'}
                            hoverColor={'rgba(0, 0, 0, 0.5)'}
                          />
                        </BuildAppsDetail>
                      </BuildWrap>
                    </ExtensionsLastSection>
                  </FeatureRight>
                )}
              </FeatureWrap>
            </Container>
          </FeatureSection>
          <FAQ contentID={'60k3aY2O1pQfCEbwSKqgsr'} />
          <CTA />
        </MainBg>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPartnerApps(APPS_TYPE.PARTNER_APP, preview)) ?? [];
  const allCategory = (await getAllParrtnerAppsCategories(preview)) ?? [];
  const dataIntegrationApps = (await getAllPartnerApps(APPS_TYPE.DATA_INTEGRATION, preview)) ?? [];
  const seoData = (await getSEOdata(APP_SEO_ID)) ?? [];

  const featuredApps = allPosts?.filter((item) => item?.isFeatured === true && item?.appType === APPS_TYPE.PARTNER_APP);

  let allCategoryWithPost = [];

  allCategory?.forEach((item) => {
    const filterList = allPosts?.filter((element) =>
      element?.partnerAppCategoriesCollection?.items?.some((category) => category?.slug === item?.slug)
    );
    if (!isEmpty(filterList)) allCategoryWithPost?.push({ category: item, list: filterList });
  });

  return {
    props: {
      featuredApps,
      allCategoryWithPost,
      dataIntegrationApps,
      allPosts: allPosts.concat(dataIntegrationApps),
      seoData
    }
  };
}
