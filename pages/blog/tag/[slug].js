import { useMemo } from 'react';
import moment from 'moment';
import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import BlogNavbar from '../../../components/navbar/blognavbar';
import { Container } from '../../../styles/commonStyles';
import Blogcard from '../../../components/Blogcard';
import { getAllTagWithSlug, getBlogByTag, getTagDetail } from '../../../lib/blog-content';
import { isEmpty } from '../../../helpers/helpers';
import { MainContent } from '../../../styles/blogstyles';

export default function Tag({ allPosts, tags, seoData }) {
  const renderData = useMemo(() => {
    if (isEmpty(allPosts)) return null;
    return allPosts?.map((item, index) => {
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
    return (
      <NextSeo
        title={seoData?.title}
        description={seoData?.description}
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          site_name: 'copilot.com',
          title: seoData?.og_title,
          description: seoData?.og_des,
          images: isEmpty(seoData?.og_image)
            ? []
            : [
                {
                  url: seoData?.og_image
                }
              ]
        }}
      />
    );
  }, [seoData?.description, seoData?.og_des, seoData?.og_image, seoData?.og_title, seoData?.title]);

  return (
    <>
      {renderSeoData}
      <Layout>
        {renderNavbar}
        <MainContent>
          <Container>{renderData}</Container>
        </MainContent>
      </Layout>
    </>
  );
}
export async function getStaticProps({ params, preview = false }) {
  const allPosts = (await getBlogByTag(params?.slug)) ?? [];
  const tagDetail = (await getTagDetail(params?.slug)) ?? {};
  const tags = (await getAllTagWithSlug()) ?? [];
  const finalTagList = tags?.filter((tag) => tag?.name?.trim()?.[0] !== '#');
  const title = tagDetail?.meta_title ?? `${tagDetail?.name} - Copilot Blog`;
  const og_title = tagDetail?.og_title ?? tagDetail?.meta_title ?? title;
  const og_des = tagDetail?.meta_description ?? tagDetail?.description;
  const og_image = tagDetail?.feature_image;
  const description = tagDetail?.meta_description ?? tagDetail?.description;
  const seoData = {
    title,
    og_title,
    og_des,
    og_image,
    description
  };
  return {
    props: {
      allPosts,
      tags: finalTagList,
      seoData
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
