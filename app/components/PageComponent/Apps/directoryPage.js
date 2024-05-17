'use client';

import { useCallback, useMemo, useState } from 'react';
import { ExtensionsSection, SearchEmpty } from '../../../styles/appsStyles';
import { isEmpty } from '../../../helpers/helpers';
import AppError from '../../../components/apperror/error';
import { COPILOT_ONBORADING_LINK } from '../../../constants/externalLinks';
import AppsCardSection from '../../appsCards/appsCardSection';
import HeroComponent from '../../Hero/hero';
import SearchInput from './searchInput';

export default function AppDirectoryPage({ clientApps, internalApps, featuredApps }) {
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
        <>
          <AppsCardSection
            isBottom
            heading={`${searchResult?.length} Result for "${query}"`}
            appList={searchResult}
            isSearchbar
            isFeature
          />
        </>
      );
    } else
      return (
        <>
          <SearchEmpty>
            <AppsCardSection isBottom heading={'No Search Results'} isSearchbar isSearchEmpty></AppsCardSection>
            <ExtensionsSection key={`searchEmptyview`}>
              <AppError query={query} />
            </ExtensionsSection>
          </SearchEmpty>
        </>
      );
  }, [query, searchResult]);

  return (
    <>
      <HeroComponent
        data={{
          heroTitle: 'App Store',
          heroDescription:
            'Copilot covers the foundational features every business needs. For everything else, there’s a variety of apps to choose from. ',
          primaryButtonText: 'Start trial',
          primaryButtonLink: { COPILOT_ONBORADING_LINK }
        }}
      />
      <SearchInput value={query} onChangeValue={onSeachQueryChange} onSubmit={onSubmitSeachQuery} />

      {isSearch ? (
        renderResultView
      ) : (
        <>
          <AppsCardSection
            isBottom
            heading='Recommended'
            caption='These are the most popular, mostly highly rated apps. '
            appList={featuredApps}
            isSearchbar={true}
            isFeature
          />
          <AppsCardSection
            is4Card
            heading='Client-facing '
            caption='Client-facing apps are visible to your team and your clients. '
            appList={clientApps}
          />
          <AppsCardSection
            is4Card
            heading='Internal'
            caption='Internal apps are integrations, internal tools, and other apps not visible to clients. '
            appList={internalApps}
          />
        </>
      )}
    </>
  );
}
