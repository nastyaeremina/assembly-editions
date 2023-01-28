import { useMemo } from 'react';
import moment from 'moment';
import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import BlogNavbar from '../../../components/navbar/blognavbar';
import { Container } from '../../../styles/commonStyles';
import Blogcard from '../../../components/Blogcard';
import { getAllTagWithSlug, getBlogByTag, getTagDetail } from '../../../lib/blog-content';
import { isEmpty } from '../../../helpers/helpers';
// import Button from '../../components/button/button';

export default function Tag({ allPosts, tags, tagDetail }) {
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

  const renderSeoData = useMemo(() => {
    const title = `${tagDetail?.name} - Copilot Blog`;
    const og_title = tagDetail?.og_title ?? tagDetail?.meta_title ?? title;
    const og_des = tagDetail?.meta_description ?? tagDetail?.description;
    const og_image = tagDetail?.feature_image;

    return (
      <NextSeo
        title={tagDetail?.meta_title ?? title}
        description={tagDetail?.meta_description ?? tagDetail?.description}
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          site_name: 'copilot.com',
          title: { og_title },
          description: { og_des },
          images: isEmpty(tagDetail?.og_image)
            ? []
            : [
                {
                  url: og_image
                }
              ]
        }}
      />
    );
  }, [
    tagDetail?.description,
    tagDetail?.feature_image,
    tagDetail?.meta_description,
    tagDetail?.meta_title,
    tagDetail?.name,
    tagDetail?.og_image,
    tagDetail?.og_title
  ]);

  return (
    <>
      {renderSeoData}
      {renderNavbar}
      <Layout>
        <Container>{renderData}</Container>
      </Layout>
    </>
  );
}
export async function getStaticProps({ params, preview = false }) {
  const allPosts = (await getBlogByTag(params?.slug)) ?? [];
  const tagDetail = (await getTagDetail(params?.slug)) ?? {};
  const tags = (await getAllTagWithSlug()) ?? [];
  const finalTagList = tags?.filter((tag) => tag?.name?.trim()?.[0] !== '#');
  return {
    props: {
      allPosts,
      tags: finalTagList,
      tagDetail
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
