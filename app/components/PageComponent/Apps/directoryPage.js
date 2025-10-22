'use client';

import { useCallback, useMemo, useState } from 'react';
import { AppCardMainSection, CardWrapper, EmptyStateSection } from '../../../styles/appsStyles';
import { isEmpty } from '../../../helpers/helpers';
import AppsCardSection from '../../appsCards/appsCardSection';
import StandardHero from '../../standardHero/standardHero';
import { EXTERNAL_LINK_KEYS } from '../../../constants/constant';
import SearchInput from './searchInput';
import { HeroTypes } from '../../../constants/constant';
import NewCTA from '../../cta/newCTA';

import { Container } from '../../../styles/commonStyles';
import SearchEmptyState from '../../SearchEmptyState/searchEmptyState';

export default function AppDirectoryPage({
  clientApps,
  internalApps,
  featuredApps,
  externalLinks = {},
  directoryCTA = null
}) {
  let allPosts = clientApps.concat(internalApps);
  const [query, setQuery] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

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
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
          if (!isSearch) setIsSearch(true);
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

  const renderResultView = useMemo(() => {
    if (!isEmpty(searchResult)) {
      return (
        <AppsCardSection
          isBottom
          heading={`${searchResult?.length} Result for "${query}"`}
          appList={searchResult}
          hasPadding
          hideHeadingOnMobile
        />
      );
    } else
      return (
        <>
          <AppsCardSection isBottom heading={'No search result'} hasPadding hideHeadingOnMobile></AppsCardSection>
          <EmptyStateSection>
            <SearchEmptyState
              icon='search-icon'
              title='No search results'
              description={`We could not find any search results for <b>${query}</b>. Give it another go.`}
            />
          </EmptyStateSection>
        </>
      );
  }, [query, searchResult]);

  return (
    <div className='component-wrapper'>
      <StandardHero
        data={{
          heroTitle: 'App Store',
          primaryButtonText: 'Start Free Trial',
          primaryButtonLink: externalLinks?.[EXTERNAL_LINK_KEYS.OnboardingLink] || '#',
          heroDescription:
            'Assembly covers the foundational features every business needs. For everything else, there’s a variety of apps to choose from.'
        }}
        type={HeroTypes.CENTER}
      />

      <Container>
        <AppCardMainSection isGap={isSearch}>
          <SearchInput
            value={query}
            onChangeValue={onSeachQueryChange}
            onSubmit={onSubmitSeachQuery}
            isTopPosition={true}
          />
          {isSearch ? (
            renderResultView
          ) : (
            <CardWrapper>
              <AppsCardSection
                isBottom
                heading='Recommended'
                caption='These are the most popular, mostly highly rated apps. '
                appList={featuredApps}
                isSearchbar={true}
              />
              <AppsCardSection
                heading='Client-facing '
                caption='Client-facing apps are visible to your team and your clients. '
                appList={clientApps}
              />
              <AppsCardSection
                heading='Internal'
                caption='Internal apps are integrations, internal tools, and other apps not visible to clients. '
                appList={internalApps}
              />
            </CardWrapper>
          )}
        </AppCardMainSection>
      </Container>
      {!isEmpty(directoryCTA) && (
        <NewCTA
          title={directoryCTA.title}
          description={directoryCTA.description}
          primaryButtonLink={directoryCTA.primaryButtonLink}
          primaryButtonText={directoryCTA.primaryButtonText}
          secondaryButtonLink={directoryCTA.secondaryButtonLink}
          secondaryButtonText={directoryCTA.secondaryButtonText}
        />
      )}
    </div>
  );
}
