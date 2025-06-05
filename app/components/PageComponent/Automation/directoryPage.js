'use client';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
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
  AppsHeroWrap,
  AppHeader3
} from '../../../styles/appsStyles';
import { Container } from '../../../styles/commonStyles';
import { isEmpty, stringToSlugyfy } from '../../../helpers/helpers';
import AppError from '../../apperror/error';
import { COPILOT_ONBOARDING_LINK } from '../../../constants/externalLinks';
import { CardAuto, Cardbottom, DirectoryButton, DirectoryCard } from '../../../styles/automationStyles';
import { SliderIcon, SliderSub } from '../../FeatureSlider/styles';
import ButtonGroup from '../../ButtonGroup/buttonGroup';

export default function AutomationDirectoryPage({ featuredApps, allCategoryWithPost, allPosts }) {
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
                <Cardbottom>{item?.automationsCategories.join()}</Cardbottom>
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
      let isActive = item?.category === selected_category;
      return (
        <Catagoryitem key={`categorylist_index_${index}`} isActive={isActive}>
          <Link
            href={`#${stringToSlugyfy(item?.category)}`}
            onClick={() => {
              setSelected_category(item?.category);
            }}>
            {item?.category}
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
        <ExtensionsSection id={stringToSlugyfy(item?.category)} key={`allCategoryappsview_index_${index}`}>
          <AppHeader3>{item?.category}</AppHeader3>
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
      <HeroSection>
        <Container>
          <AppsHeroWrap>
            <h1>Automation Directory</h1>
            <p>Choose from many recipes that will help you save time and scale your business</p>
            <ButtonGroup
              primaryButtonLink={COPILOT_ONBOARDING_LINK}
              primaryButtonText={'Start Trial'}
              secondaryButtonLink={'/automations'}
              secondaryButtonText={'Back to overview'}
              className={'button-group'}
            />
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
    </>
  );
}
