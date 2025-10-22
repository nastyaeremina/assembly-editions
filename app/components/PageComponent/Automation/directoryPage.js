'use client';
import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';
import Link from 'next/link';
import {
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
  AppHeader3,
  ResponsiveInputWrap,
  ResponsiveInput,
  SearchIcon
} from '../../../styles/appsStyles';
import { Container } from '../../../styles/commonStyles';
import { isEmpty, stringToSlugyfy } from '../../../helpers/helpers';
import AppError from '../../apperror/error';
import { EXTERNAL_LINK_KEYS } from '../../../constants/constant';
import { CardAuto, Cardbottom, DirectoryCard, RightWrapper } from '../../../styles/automationStyles';
import { SliderIcon, SliderSub } from '../../FeatureSlider/styles';
import StandardHero from '../../standardHero/standardHero';
import { HeroTypes } from '../../../constants/constant';
import useActiveHeading from '../../../hooks/useActiveHeading';
import SVGComponent from '../../../../public/images/svg/SVGComponent';

export default function AutomationDirectoryPage({ featuredApps, allCategoryWithPost, allPosts, externalLinks = {} }) {
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const activeId = useActiveHeading({ selector: 'h2' });

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
      const id = stringToSlugyfy(item?.category);
      const isActive = activeId === id;
      return (
        <Catagoryitem key={`categorylist_index_${index}`} isActive={isActive}>
          <Link href={`#${id}`} className=''>
            {item?.category}
          </Link>
        </Catagoryitem>
      );
    });
  }, [activeId, allCategoryWithPost]);

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
        <ExtensionsSection key={`allCategoryappsview_index_${index}`} data-section-index={index + 1}>
          <AppHeader3 id={stringToSlugyfy(item?.category)}>{item?.category}</AppHeader3>
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
      <div className='component-wrapper'>
        <StandardHero
          type={HeroTypes.CENTER}
          data={{
            heroTitle: 'Automation Directory',
            heroDescription: 'Choose from many recipes that will help you save time and scale your business',
            primaryButtonText: 'Start Trial',
            primaryButtonLink: externalLinks?.[EXTERNAL_LINK_KEYS.OnboardingLink] || '#',
            secondaryButtonLink: '/automations',
            secondaryButtonText: 'Back to overview'
          }}
        />
      </div>
      <Container>
        <FeatureWrap isAutomation>
          <FeatureLeft>
            <LeftWrap>
              <InputWrap onSubmit={onSubmitSeachQuery}>
                <SearchIcon>
                  <SVGComponent name='search-icon' width='20' height='20' viewBox='0 0 20 20' className='search-icon' />
                </SearchIcon>
                <Input placeholder='Find a recipe' value={query} onChange={onSeachQueryChange} type='search' />
              </InputWrap>
              <Catagory>
                <h4>Categories</h4>
                {!isEmpty(featuredApps) && (
                  <Catagoryitem isActive={activeId === 'feature'}>
                    <Link href={`#featured`}>Featured</Link>
                  </Catagoryitem>
                )}
                {renderCategoryList}
              </Catagory>
            </LeftWrap>
          </FeatureLeft>
          {isSearch ? (
            <RightWrapper>
              <ResponsiveInputWrap onSubmit={onSubmitSeachQuery}>
                <Image src='/images/searchicon.svg' alt='search-icon' width={20} height={20} />
                <ResponsiveInput
                  placeholder='Find a recipe'
                  value={query}
                  onChange={onSeachQueryChange}
                  type='search'
                />
              </ResponsiveInputWrap>
              <FeatureRight isSearch={!isEmpty(searchResult)}>{renderResultView}</FeatureRight>
            </RightWrapper>
          ) : (
            <RightWrapper>
              <ResponsiveInputWrap onSubmit={onSubmitSeachQuery}>
                <Image src='/images/searchicon.svg' alt='search-icon' width={20} height={20} />
                <ResponsiveInput
                  placeholder='Find a recipe'
                  value={query}
                  onChange={onSeachQueryChange}
                  type='search'
                />
              </ResponsiveInputWrap>
              <FeatureRight id={'automation-content-section'}>
                {!isEmpty(featuredApps) && (
                  <Featured data-section-index={0}>
                    <AppHeader3 id='featured' className='first-h2'>
                      Featured
                    </AppHeader3>
                    <FeatureMenu isAutomationDirectoryCard>{renderFeaturedView}</FeatureMenu>
                  </Featured>
                )}
                {renderAllCategoryAppsView}
              </FeatureRight>
            </RightWrapper>
          )}
        </FeatureWrap>
      </Container>
    </>
  );
}
