import Layout from '/components/layout';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
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
  Featured,
  FeatureMenu,
  FeatureCard,
  ExtensionsSection,
  SchedulingApps,
  ExtensionCard,
  Overlay,
  HoverButton
} from '../../styles/universityStyles';
import { Container } from '../../styles/commonStyles';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { getAllUniversityVideos } from '../../lib/contentful-universityVideos';
import { isEmpty } from '../../helpers/helpers';
import slugify from 'slugify';
import SEO from '../../components/seo';
import { UNIVERSITY_VIDEO_CATEGORY } from '../../constants/constant';

let selected_category = null;
export default function University({ universityVideosList }) {
  const [selected_category, setSelected_categry] = useState(null);
  // console.log("universityVideosList",universityVideosList);
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
          <h3>{item?.category}</h3>
          <FeatureMenu>{renderUniversityVideosView(item?.list)}</FeatureMenu>
        </ExtensionsSection>
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [renderUniversityVideosView, universityVideosList, selected_category]);

  return (
    <>
      <SEO id={'2hMkBVQBYcMCmHLQyxzo8o'}></SEO>
      <Layout>
        <Navbar />
        <UniversitySection>
          <Container>
            <UniversityHero>
              <h2>Copilot University</h2>
              <p>
                Search from our library of lessons covering everything from initial setup and customization to Partner
                Apps and automations.
              </p>
            </UniversityHero>
            <FeatureWrap>
              <FeatureLeft>
                <LeftWrap>
                  <InputWrap>
                    <Image src='/images/searchicon.svg' alt='search-icon' width={20} height={20} />
                    <Input placeholder='Find a video...' />
                  </InputWrap>
                  {!isEmpty(universityVideosList) && (
                    <Catagory>
                      <h4>Categories</h4>
                      {renderCategoryView}
                    </Catagory>
                  )}
                </LeftWrap>
              </FeatureLeft>
              <FeatureRight>{renderUniversityVideosListView}</FeatureRight>
            </FeatureWrap>
          </Container>
        </UniversitySection>
      </Layout>
    </>
  );
}
export async function getStaticProps({ preview = false }) {
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
    props: { universityVideosList: newArray }
  };
}
