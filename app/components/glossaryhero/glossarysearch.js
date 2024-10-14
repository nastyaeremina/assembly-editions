import React, { useCallback, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../../styles/commonStyles';
import { isEmpty } from '../../helpers/helpers';
import {
  GlossaryMain,
  GlossarySearchSection,
  Input,
  InputWrap,
  Search,
  SearchDataSection,
  SearchList,
  SearchListData,
  StartAlphabet
} from './styles';

export default function GlossarySearch({ data: glossaryList }) {
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [isSearch, setIsSearch] = useState(false);
  let timeout;

  const renderListview = useMemo(() => {
    let dataList;
    if (isSearch) {
      dataList = searchResult;
    } else {
      dataList = glossaryList;
    }
    if (isEmpty(dataList)) return null;
    return dataList?.map((item, index) => {
      return (
        <>
          <StartAlphabet>{item?.key}</StartAlphabet>
          <SearchListData>
            {item?.list?.map((glossary, glossaryIndex) => (
              <SearchList key={`${glossary?.slug}_index_${glossaryIndex}`}>
                <a href={`/glossary/${glossary?.slug}`}> {glossary?.name}</a>
              </SearchList>
            ))}
          </SearchListData>
        </>
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
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
          searchQuery(value);
        }, 300);
      } else {
        if (isSearch) setIsSearch(false);
        setSearchResult([]);
      }
    },
    [query, setSearchResult, searchQuery, setIsSearch, setQuery]
  );

  const onSubmitSeachQuery = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <>
      <Container>
        <GlossarySearchSection>
          <Search>
            <>
              <InputWrap onSubmit={onSubmitSeachQuery}>
                <Image src='/images/searchicon.svg' alt='search-icon' width={20} height={20} />
                <Input placeholder='Search the glossary...' type='search' value={query} onChange={onSeachQueryChange} />
              </InputWrap>
            </>
          </Search>
          <SearchDataSection>{renderListview}</SearchDataSection>
        </GlossarySearchSection>
      </Container>
    </>
  );
}
