import { useMemo } from 'react';
import moment from 'moment';
import Layout from '../../../components/layout';
import BlogNavbar from '../../../components/navbar/blognavbar';
import { Container } from '../../../styles/commonStyles';
import Blogcard from '../../../components/Blogcard';
import { getAllTagWithSlug, getBlogByTag } from '../../../lib/blog-content';
import { isEmpty } from '../../../helpers/helpers';
// import Button from '../../components/button/button';

export default function Tag({ seoData, allPosts, tags }) {
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

  const renderNavbar = useMemo(() => {
    return <BlogNavbar tagData={tags} />;
  }, [tags]);
  return (
    <>
      {renderNavbar}
      <Layout>
        <Container>{renderData}</Container>
      </Layout>
    </>
  );
}
export async function getStaticProps({ params, preview = false }) {
  // const seoData = (await getSEOdata(BOOK_DEMO_SEO_ID)) ?? [];
  const seoData = [];
  const allPosts = (await getBlogByTag(params?.slug)) ?? [];
  const tags = (await getAllTagWithSlug()) ?? [];
  const finalTagList = tags?.filter((tag) => tag?.name?.trim()?.[0] !== '#');
  return {
    props: {
      seoData,
      allPosts,
      tags: finalTagList
    }
  };
}
export async function getStaticPaths() {
  const allPosts = (await getAllTagWithSlug()) ?? [];
  return {
    paths: allPosts?.map(({ slug }) => `/blog/tag/${slug}`) ?? [],

    fallback: true
  };
}
