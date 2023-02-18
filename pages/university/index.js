import Layout from '/components/layout';
import Link from 'next/link';
import Navbar from '../../components/navbar/navbar';
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
  SchedulingApps,
  ExtensionCard,
  Overlay,
  HoverButton,
  EmptySection
} from '../../styles/universityStyles';
import { Container } from '../../styles/commonStyles';
import Image from 'next/image';
import { useCallback, useMemo, useState } from 'react';
import { getAllUniversityVideos } from '../../lib/contentful-universityVideos';
import { isEmpty } from '../../helpers/helpers';
import slugify from 'slugify';
import SEO from '../../components/seo';
import { UNIVERSITY_VIDEO_CATEGORY } from '../../constants/constant';
import AppError from '../../components/apperror/error';
import { getSEOdata } from '../../lib/contentful-seo';

let selected_category = null;
export default function University({ universityVideosList, allPosts, seoData }) {
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
      let isActive = slugify(item?.category) === selected_category;
      return (
        <Catagoryitem
          key={`rendercategoryitem_index_${index}`}
          onClick={() => {
            onClickCategories(slugify(item?.category));
          }}
          isActive={isActive}>
          <Link
            href={`#${slugify(item?.category)}`}
            onClick={() => {
              onClickCategories(slugify(item?.category));
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
          id={slugify(item?.category)}
          key={`renderuniversityvideoslistiten_index_${index}`}
          isSelected={slugify(item?.category) === selected_category}
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
      <SEO seoData={seoData}></SEO>
      <Layout>
        <Navbar />
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
      </Layout>
    </>
  );
}
export async function getStaticProps({ preview = false }) {
  const seoData = (await getSEOdata('2hMkBVQBYcMCmHLQyxzo8o')) ?? [];
  seoData.canonical="https://www.copilot.com/university";

  let allPosts = [];
  let data = [];
  let page = 0;
  do {
    const skip = page * 100;
    data = (await getAllUniversityVideos(skip)) || [];
    allPosts = allPosts.concat(data);

    if (data?.length !== 100) break;
    // eslint-disable-next-line no-plusplus
    else page++;
  } while (data?.length !== 0);

  let newList = [];
  allPosts?.forEach((item) => {
    const index = newList?.findIndex((x) => x?.category === item?.videoCategory);
    if (index !== -1) {
      newList[index]?.list?.push(item);
    } else {
      const newItem = {
        category: item?.videoCategory,
        list: [item]
      };
      newList?.push(newItem);
    }
  });

  const sortedCategory = UNIVERSITY_VIDEO_CATEGORY.reverse();
  const newArray = newList
    ?.sort((a, b) => sortedCategory?.indexOf(a.category) - sortedCategory?.indexOf(b.category))
    ?.reverse();

  return {
    props: { universityVideosList: newArray, allPosts, seoData }
  };
}
