'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';
import {
  UniversitySection,
  UniversityHero,
  FeatureWrap,
  FeatureLeft,
  LeftWrap,
  InputWrap,
  Catagoryitem,
  Catagory,
  Input,
  FeatureRight,
  FeatureMenu,
  FeatureCard,
  ExtensionsSection,
  Overlay,
  HoverButton,
  EmptySection
} from '../../../styles/universityStyles';
import { Container } from '../../../styles/commonStyles';
import { isEmpty, stringToSlugyfy } from '../../../helpers/helpers';
import AppError from '../../../components/apperror/error';

export default function UniversityPage({ universityVideosList, allPosts }) {
  const [selected_category, setSelected_categry] = useState(null);
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [isSearch, setIsSearch] = useState(false);

  const handleScroll = useCallback(() => {
    if (!selected_category) return;
    setSelected_categry(null);
  }, [selected_category]);

  const onClickCategories = useCallback((name) => {
    setSelected_categry(name);
    setTimeout(() => {
      setSelected_categry(null);
    }, 1000);
  }, []);

  const renderCategoryView = useMemo(() => {
    if (isEmpty(universityVideosList)) return null;

    return universityVideosList?.map((item, index) => {
      let isActive = stringToSlugyfy(item?.category) === selected_category;
      return (
        <Catagoryitem
          key={`rendercategoryitem_index_${index}`}
          onClick={() => {
            onClickCategories(stringToSlugyfy(item?.category));
          }}
          isActive={isActive}>
          <Link
            href={`#${stringToSlugyfy(item?.category)}`}
            onClick={() => {
              onClickCategories(stringToSlugyfy(item?.category));
            }}>
            {item?.category}
          </Link>
        </Catagoryitem>
      );
    });
  }, [onClickCategories, universityVideosList, selected_category]);

  const renderUniversityVideosView = useCallback((videoList) => {
    if (isEmpty(videoList)) return null;
    return videoList?.map((item, index) => {
      return (
        <Link href={`/university/${item?.slug}`} key={`universityvideos_index_${index}`}>
          <FeatureCard>
            <Image src={item?.thumbnail?.url} alt='video' width={270} height={152} />
            <Overlay className='hovericon'></Overlay>
            <HoverButton className='hoveritem'>
              <Image src='/images/hoveryoutube.svg' alt='main-logo' height={42} width={56} />
            </HoverButton>
          </FeatureCard>
        </Link>
      );
    });
  }, []);

  const renderUniversityVideosListView = useMemo(() => {
    if (isEmpty(universityVideosList)) return null;
    return universityVideosList?.map((item, index) => {
      return (
        <ExtensionsSection
          id={stringToSlugyfy(item?.category)}
          key={`renderuniversityvideoslistiten_index_${index}`}
          isSelected={stringToSlugyfy(item?.category) === selected_category}
          isNotFirst={index !== 0}>
          <h2>{item?.category}</h2>
          <FeatureMenu>{renderUniversityVideosView(item?.list)}</FeatureMenu>
        </ExtensionsSection>
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderUniversityVideosView, universityVideosList, selected_category]);

  const onSubmitSeachQuery = useCallback((e) => {
    e.preventDefault();
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

  const renderResultView = useMemo(() => {
    if (!isEmpty(searchResult)) {
      return (
        <ExtensionsSection key={`serchresult_view`}>
          <h3> {`${searchResult?.length} Result for "${query}"`}</h3>
          <FeatureMenu>{renderUniversityVideosView(searchResult)}</FeatureMenu>
        </ExtensionsSection>
      );
    } else
      return (
        <EmptySection key={`searchEmptyview`}>
          <AppError query={query} />
        </EmptySection>
      );
  }, [query, renderUniversityVideosView, searchResult]);

  return (
    <>
      <UniversitySection>
        <Container>
          <UniversityHero>
            <h1>Copilot University</h1>
            <p>
              Search from our library of lessons covering everything from initial setup and customization to Partner
              Apps and automations.
            </p>
          </UniversityHero>
          <FeatureWrap>
            <FeatureLeft>
              <LeftWrap>
                <InputWrap onSubmit={onSubmitSeachQuery}>
                  <Image src='/images/searchicon.svg' alt='search-icon' width={20} height={20} />
                  <Input placeholder='Find a video...' value={query} onChange={onSeachQueryChange} type='search' />
                </InputWrap>
                {/* <InputWrap>
                    <Image src='/images/searchicon.svg' alt='search-icon' width={20} height={20} />
                    <Input placeholder='Find a video...' />
                  </InputWrap> */}
                {!isEmpty(universityVideosList) && (
                  <Catagory>
                    <h4>Categories</h4>
                    {renderCategoryView}
                  </Catagory>
                )}
              </LeftWrap>
            </FeatureLeft>
            {isSearch ? (
              <FeatureRight>{renderResultView}</FeatureRight>
            ) : (
              <FeatureRight>{renderUniversityVideosListView}</FeatureRight>
            )}
          </FeatureWrap>
        </Container>
      </UniversitySection>
    </>
  );
}
