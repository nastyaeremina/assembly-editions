import React, { useCallback, useEffect, useMemo, useRef, useState, useLayoutEffect } from 'react';
import { Container } from '../../styles/commonStyles';
import { isEmpty } from '../../helpers/helpers';
import useNavbarHeight from '../../hooks/useNavbarHeight';
import {
  GlossarySearchSection,
  Input,
  InputWrap,
  ItemWrapper,
  Search,
  SearchDataSection,
  SearchIcon,
  SearchList,
  SearchListData,
  SectionWrapper,
  StartAlphabet
} from './styles';
import SVGComponent from '../../../public/images/svg/SVGComponent';
import LinkComponent from '../linkComponent/linkComponent';
import { LinkSize, LinkTone } from '../../constants/constant';
import SearchEmptyState from '../SearchEmptyState/searchEmptyState';

export default function GlossarySearch({ data: glossaryList }) {
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const { totalHeight } = useNavbarHeight();
  const timeoutRef = useRef(null);
  const searchBarRef = useRef(null);
  const itemRefs = useRef({}); // Store refs for each result

  const [isStickyActive, setIsStickyActive] = useState(false);

  const handleSearchFocus = useCallback(() => {
    setIsStickyActive(true);

    // Smoothly scroll to the search bar
    searchBarRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }, []);

  const handleSearchBlur = useCallback(() => {
    // Optional: Reset after blur
    setIsStickyActive(false);
  }, []);

  const getTotalOffset = () => {
    const searchBarHeight = searchBarRef.current ? searchBarRef.current.offsetHeight : 0;
    return totalHeight + searchBarHeight + 21;
  };

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    if (!isSearch || isEmpty(searchResult)) return;
    const firstKey = searchResult[0]?.key;
    if (firstKey && itemRefs.current[firstKey]) {
      const elem = itemRefs.current[firstKey];
      const totalOffset = getTotalOffset();
      const elemRect = elem.getBoundingClientRect();
      const scrollTop = window.pageYOffset + elemRect.top - totalOffset;
      window.scrollTo({ top: scrollTop });
    }
  }, [searchResult, isSearch, totalHeight]);

  const renderListview = useMemo(() => {
    let dataList;
    if (isSearch) {
      dataList = searchResult;
    } else {
      dataList = glossaryList;
    }
    if (isEmpty(dataList)) return null;
    return dataList?.map((item) => {
      return (
        <ItemWrapper key={`_key_${item?.key}`} ref={(el) => (itemRefs.current[item.key] = el)}>
          <StartAlphabet>{item?.key}</StartAlphabet>
          <SearchListData>
            {item?.list?.map((glossary, glossaryIndex) => (
              <SearchList key={`${glossary?.slug}_index_${glossaryIndex}`}>
                <LinkComponent
                  linkHref={`/definitions/${glossary?.slug}`}
                  title={glossary?.name}
                  tone={LinkTone.BLUE}
                  size={LinkSize.LARGE}
                />
              </SearchList>
            ))}
          </SearchListData>
        </ItemWrapper>
      );
    });
  }, [glossaryList, isSearch, searchResult]);

  const filterItems = useCallback((arr, value) => {
    return arr.filter((item) => {
      return item?.name?.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
  }, []);

  const searchQuery = useCallback(
    (value) => {
      let result = [];
      glossaryList?.forEach((item) => {
        const list = filterItems(item?.list, value);
        if (list?.length !== 0) result?.push({ ...item, list });
      });
      if (result) setSearchResult(result);
    },
    [filterItems, setSearchResult, glossaryList]
  );

  const onSeachQueryChange = useCallback(
    (e) => {
      const value = e.target.value;
      setQuery(value);
      if (value) {
        if (!isSearch) setIsSearch(true);
        // Run search immediately for snappier feedback
        searchQuery(value);
        setIsSearching(false);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      } else {
        if (isSearch) setIsSearch(false);
        setIsSearching(false);
        setSearchResult([]);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      }
    },
    [query, setSearchResult, searchQuery, setIsSearch, setQuery, isSearch]
  );

  const onSubmitSeachQuery = useCallback((e) => {
    e.preventDefault();
  }, []);

  // search clear function
  const handleSearchClear = useCallback(() => {
    setQuery('');
    setSearchResult([]);
    setIsSearch(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  // for focus and focus visible
  useEffect(() => {
    const onPointerDown = () => {
      document.body.classList.add('using-mouse');
      document.body.classList.remove('using-keyboard');
    };
    const onKeyDown = (e) => {
      if (e.key === 'Tab') {
        document.body.classList.add('using-keyboard');
        document.body.classList.remove('using-mouse');
      }
    };

    window.addEventListener('pointerdown', onPointerDown, true);
    window.addEventListener('keydown', onKeyDown, true);

    return () => {
      window.removeEventListener('pointerdown', onPointerDown, true);
      window.removeEventListener('keydown', onKeyDown, true);
    };
  }, []);

  return (
    <SectionWrapper>
      <Container>
        <GlossarySearchSection>
          <Search topValue={totalHeight} ref={searchBarRef}>
            <>
              <InputWrap onSubmit={onSubmitSeachQuery}>
                <SearchIcon>
                  <SVGComponent name='search-icon' width='20' height='20' viewBox='0 0 20 20' className='search-icon' />
                </SearchIcon>
                <Input
                  placeholder='Search'
                  type='search'
                  value={query}
                  onChange={onSeachQueryChange}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                />
                {query && (
                  <div className='close-icon' onClick={handleSearchClear}>
                    <SVGComponent name='search-close-icon' width='16' height='16' viewBox='0 0 16 16' />
                  </div>
                )}
              </InputWrap>
            </>
          </Search>
          {isSearch && !isSearching && isEmpty(searchResult) ? (
            <SearchEmptyState
              icon='search-icon'
              title='No search results'
              description={`We could not find any search results for <b>${query}</b>. Give it another go.`}
            />
          ) : (
            <SearchDataSection>{renderListview}</SearchDataSection>
          )}
        </GlossarySearchSection>
      </Container>
    </SectionWrapper>
  );
}
