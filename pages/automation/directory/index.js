import Layout from '/components/layout';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
// import { getAllBlogs } from '../../lib/contentful-blogs';
import Navbar from '../../../components/navbar/navbar';
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
} from '../../../styles/appsStyles';
import { Container, PrimaryButton, SecondryButton } from '../../../styles/commonStyles';
import CTA from '../../../components/cta/cta';
import Image from 'next/image';
import FAQ from '../../../components/faq/faq';
import { getAllParrtnerAppsCategories, getAllPartnerApps } from '../../../lib/contentful-partnerApps';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { isEmpty } from '../../../helpers/helpers';
import { APPS_TYPE, APP_SEO_ID } from '../../../constants/constant';
import Button from '../../../components/button/button';
import SEO from '../../../components/seo';
import AppError from '../../../components/apperror/error';
import { getSEOdata } from '../../../lib/contentful-seo';
import { COPILOT_ONBORADING_LINK, COPILOT_REFERENCE_API_LINK } from '../../../constants/externalLinks';
import { Cardbottom, DirectoryButton, DirectoryCard } from '../../../styles/automationStyles';
import { SliderIcon, SliderInner, SliderSub } from '../../../components/FeatureSlider/styles';
import featurelogo from '../../../public/images/featurelogo.svg';

export default function AutomationDirectory({
  allPosts,
  featuredApps,
  allCategoryWithPost,
  dataIntegrationApps,
  seoData
}) {
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
        <>
          <Link href={`/apps/${item?.slug}`}>
            <DirectoryCard href={`/apps/${item?.slug}`} key={`featuredview_index_${index}`}>
              <SliderSub>
                <h4>Add new Copilot clients to Airtable rows</h4>
                <p>
                  Every time a new client signs in the first time on Copilot add a row with the client’s information in
                  Aritable.
                </p>
              </SliderSub>
              <SliderIcon>
                <Image src={featurelogo} alt='logo' width={40} height={40} />
                <Image src={featurelogo} alt='logo' width={40} height={40} />
              </SliderIcon>
              <Cardbottom>Onboarding</Cardbottom>
            </DirectoryCard>
          </Link>
        </>
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
        <>
          <Link href={`/apps/${item?.slug}`}>
            <DirectoryCard key={`partnerappview_index${index}`}>
              <SliderSub>
                <h4>Add new Copilot clients to Airtable rows</h4>
                <p>
                  Every time a new client signs in the first time on Copilot add a row with the client’s information in
                  Aritable.
                </p>
              </SliderSub>
              <SliderIcon>
                <Image src={featurelogo} alt='logo' width={40} height={40} />
                <Image src={featurelogo} alt='logo' width={40} height={40} />
              </SliderIcon>
            </DirectoryCard>
          </Link>
        </>
      );
    }, []);
  }, []);

  const renderAllCategoryAppsView = useMemo(() => {
    if (isEmpty(allCategoryWithPost)) return null;
    return allCategoryWithPost?.map((item, index) => {
      return (
        <ExtensionsSection id={item?.category?.slug} key={`allCategoryappsview_index_${index}`}>
          <AppHeader3>{item?.category?.name}</AppHeader3>
          <ExtensionCard isAutomationDirectoryCard>{renderPartnerAppsView(item?.list)}</ExtensionCard>
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
      <SEO seoData={seoData}></SEO>
      <Layout>
        <MainBg>
          <Navbar />
          <HeroSection>
            <Container>
              <AppsHeroWrap>
                <h1>Automation Directory</h1>
                <p>Choose from many recipes that will help you save time and scale your business</p>
                <DirectoryButton>
                  <Button text={'Start Trial'} href={COPILOT_ONBORADING_LINK} />
                  <Button
                    bgColor={'transparent'}
                    fontColor={'#000000'}
                    borderColor={'#000000'}
                    text={'Back to overview'}
                    href={'#'}
                    hoverColor={'rgba(0, 0, 0, 0.5)'}
                    target={'_blank'}
                  />
                </DirectoryButton>
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
                      <Input placeholder='Find a recipe' value={query} onChange={onSeachQueryChange} type='search' />
                    </InputWrap>
                    <Catagory>
                      <h4>Categories</h4>
                      <Catagoryitem
                        isActive={selected_category === 'Brief-Section'}
                        onClick={() => {
                          setSelected_category('Brief-Section');
                        }}>
                        <Link href={'#Brief-Section'}>Featured</Link>
                      </Catagoryitem>
                      {renderCategoryList}
                    </Catagory>
                  </LeftWrap>
                </FeatureLeft>
                {isSearch ? (
                  <FeatureRight isSearch={!isEmpty(searchResult)}>{renderResultView}</FeatureRight>
                ) : (
                  <FeatureRight>
                    {!isEmpty(featuredApps) && (
                      <Featured id='Brief-Section'>
                        <AppHeader3>Featured</AppHeader3>
                        <FeatureMenu isAutomationDirectoryCard>{renderFeaturedView}</FeatureMenu>
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
                  </FeatureRight>
                )}
              </FeatureWrap>
            </Container>
          </FeatureSection>
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
  seoData.canonical = 'https://www.copilot.com/apps';
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
