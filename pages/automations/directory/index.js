import Layout from '/components/layout';
import Link from 'next/link';
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
  Featured,
  ExtensionsSection,
  ExtensionCard,
  MainBg,
  AppsHeroWrap,
  AppHeader3
} from '../../../styles/appsStyles';
import { Container } from '../../../styles/commonStyles';
import CTA from '../../../components/cta/cta';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { isEmpty, joinArrayToString } from '../../../helpers/helpers';
import { AUTOMATION_SEO_ID, PER_API_LIMIT_FOR_AUTOMATION } from '../../../constants/constant';
import Button from '../../../components/button/button';
import SEO from '../../../components/seo';
import AppError from '../../../components/apperror/error';
import { getSEOdata } from '../../../lib/contentful-seo';
import { COPILOT_ONBORADING_LINK } from '../../../constants/externalLinks';
import { CardAuto, Cardbottom, DirectoryButton, DirectoryCard } from '../../../styles/automationStyles';
import { SliderIcon, SliderSub } from '../../../components/FeatureSlider/styles';
import { getAllAutomationCategories, getAllAutomations } from '../../../lib/contentful-automation';

export default function AutomationDirectory({ featuredApps, allCategoryWithPost, allPosts, seoData }) {
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
          <Link href={`/automations/directory/${item?.slug}`}>
            <CardAuto>
              <DirectoryCard
                href={`/automations/directory/${item?.slug}`}
                key={`featuredview_index_${index}`}
                className='directorycard'>
                <SliderSub>
                  <h4>{item?.name}</h4>
                  <p>{item?.description}</p>
                </SliderSub>
                <SliderIcon>
                  {item?.productLogosCollection?.items?.map((logo, index) => {
                    return (
                      <Image
                        key={`automation_logo_${index}`}
                        src={logo?.url}
                        alt='logo'
                        width={40}
                        height={40}
                        className='logo'
                      />
                    );
                  })}
                </SliderIcon>
                <Cardbottom>
                  {joinArrayToString({
                    list: item?.automationCategoriesCollection?.items,
                    fieldName: 'name',
                    seprator: ', '
                  })}
                </Cardbottom>
              </DirectoryCard>
            </CardAuto>
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
          <Link href={`/automations/directory/${item?.slug}`}>
            <CardAuto>
              <DirectoryCard key={`partnerappview_index${index}`} className='directorycard'>
                <SliderSub>
                  <h4>{item?.name}</h4>
                  <p>{item?.description}</p>
                </SliderSub>
                <SliderIcon>
                  {item?.productLogosCollection?.items?.map((logo, index) => {
                    return (
                      <Image
                        key={`automation_logo_${index}`}
                        src={logo?.url}
                        alt='logo'
                        width={40}
                        height={40}
                        className='logo'
                      />
                    );
                  })}
                </SliderIcon>
              </DirectoryCard>
            </CardAuto>
          </Link>
        </>
      );
    });
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

  const renderResultView = useMemo(() => {
    if (!isEmpty(searchResult)) {
      return (
        <Featured key={`searchview`}>
          <h2> {`${searchResult?.length} Result for "${query}"`}</h2>
          <FeatureMenu isAutomationDirectoryCard>{renderPartnerAppsView(searchResult)}</FeatureMenu>
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
                    href={'/automations'}
                    hoverColor={'rgba(0, 0, 0, 0.5)'}
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
                      {!isEmpty(featuredApps) && (
                        <Catagoryitem
                          isActive={selected_category === 'featured'}
                          onClick={() => {
                            setSelected_category('featured');
                          }}>
                          <Link href={'#featured'}>Featured</Link>
                        </Catagoryitem>
                      )}
                      {renderCategoryList}
                    </Catagory>
                  </LeftWrap>
                </FeatureLeft>
                {isSearch ? (
                  <FeatureRight isSearch={!isEmpty(searchResult)}>{renderResultView}</FeatureRight>
                ) : (
                  <FeatureRight>
                    {!isEmpty(featuredApps) && (
                      <Featured id='featured'>
                        <AppHeader3>Featured</AppHeader3>
                        <FeatureMenu isAutomationDirectoryCard>{renderFeaturedView}</FeatureMenu>
                      </Featured>
                    )}
                    {renderAllCategoryAppsView}
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
  let allPosts = [];
  let data = [];
  let page = 0;
  do {
    const skip = page * PER_API_LIMIT_FOR_AUTOMATION;
    data = (await getAllAutomations(skip)) || [];
    allPosts = allPosts.concat(data);

    if (data?.length !== PER_API_LIMIT_FOR_AUTOMATION) break;
    // eslint-disable-next-line no-plusplus
    else page++;
  } while (data?.length !== 0);

  const allCategory = (await getAllAutomationCategories(preview)) ?? [];
  const seoData = (await getSEOdata(AUTOMATION_SEO_ID)) ?? [];
  const featuredApps = allPosts?.filter((item) => item?.isFeatures === true);

  let allCategoryWithPost = [];

  allCategory?.forEach((item) => {
    const filterList = allPosts?.filter((element) =>
      element?.automationCategoriesCollection?.items?.some((category) => category?.slug === item?.slug)
    );
    if (!isEmpty(filterList)) allCategoryWithPost?.push({ category: item, list: filterList });
  });

  return {
    props: {
      featuredApps,
      allCategoryWithPost,
      allPosts,
      seoData
    }
  };
}
