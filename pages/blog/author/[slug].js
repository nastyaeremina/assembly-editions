import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';
import { useRouter } from 'next/router';
import Layout from '../../../components/layout';
import BlogNavbar from '../../../components/navbar/blognavbar';
import { Container } from '../../../styles/commonStyles';
import {
  BlogList,
  FirstBlog,
  Last,
  Lastpra,
  LastSection,
  Left,
  Leftside,
  OverLayDiv,
  Par,
  PostDetail,
  Right,
  Rightside,
  Textarea
} from '../../../styles/blogstyles';
import Blogcard from '../../../components/Blogcard';
import { getAllAuthorWithSlug, getBlogByAuthor, getBlogPosts } from '../../../lib/blog-content';
import { isEmpty } from '../../../helpers/helpers';
import SubscribeModel from '../../../components/SubscribeModel';
import { BlogSubscribe, Logo, Premium, Button, Model } from '../../../components/SubscribeModel/style';
// import Button from '../../components/button/button';

export default function Author({ seoData, allPosts }) {
  const renderData = useMemo(() => {
    if (isEmpty(allPosts)) return null;
    return allPosts?.map((item, index) => {
      if (item?.featured) return null;

      const finalTagList = item?.tags?.filter((tag) => tag?.name?.trim()?.[0] !== '#');
      return (
        <Blogcard
          key={`blog_list_index_${index}`}
          name={item?.title}
          date={moment(new Date(item?.published_at)).format('MMM DD, YYYY')} //'Apr 28, 2022'
          read={`${item?.reading_time} min read`}
          desc={item?.excerpt}
          image={item?.feature_image}
          tags={finalTagList}
          slug={item?.slug}
        />
      );
    });
  }, [allPosts]);

  return (
    <>
      <BlogNavbar />
      <Layout>
        <Container>{renderData}</Container>
      </Layout>
    </>
  );
}
export async function getStaticProps({ params, preview = false }) {
  // const seoData = (await getSEOdata(BOOK_DEMO_SEO_ID)) ?? [];
  const seoData = [];
  const allPosts = (await getBlogByAuthor(params?.slug)) ?? [];

  return {
    props: {
      seoData,
      allPosts
    }
  };
}
export async function getStaticPaths() {
  const allPosts = (await getAllAuthorWithSlug()) ?? [];
  return {
    paths: allPosts?.map(({ slug }) => `/blog/author/${slug}`) ?? [],

    fallback: true
  };
}
