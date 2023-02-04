import { useMemo } from 'react';
import moment from 'moment';
import { NextSeo } from 'next-seo';
import Layout from '../../../components/layout';
import BlogNavbar from '../../../components/navbar/blognavbar';
import { Container } from '../../../styles/commonStyles';
import Blogcard from '../../../components/Blogcard';
import { getAllAuthorWithSlug, getAllTagWithSlug, getAuthorDetail, getBlogByAuthor } from '../../../lib/blog-content';
import { isEmpty } from '../../../helpers/helpers';
import { MainContent } from '../../../styles/blogstyles';

export default function Author({ allPosts, tags, authorDetail }) {
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
    const title = `${authorDetail?.name} - Copilot Blog`;
    const og_title = authorDetail?.og_title ?? authorDetail?.meta_title ?? title;
    const og_des = authorDetail?.meta_description ?? authorDetail?.description;
    const og_image = authorDetail?.feature_image;

    return (
      <NextSeo
        title={authorDetail?.meta_title ?? title}
        description={authorDetail?.meta_description ?? authorDetail?.description}
        canonical={"https://www.copilot.com/blog/author/"+authorDetail?.slug}
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          site_name: 'copilot.com',
          title: og_title,
          description: og_des,
          images: isEmpty(authorDetail?.og_image)
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
    authorDetail?.description,
    authorDetail?.feature_image,
    authorDetail?.meta_description,
    authorDetail?.meta_title,
    authorDetail?.name,
    authorDetail?.og_image,
    authorDetail?.og_title
  ]);

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
  const allPosts = (await getBlogByAuthor(params?.slug)) ?? [];
  const authorDetail = (await getAuthorDetail(params?.slug)) ?? {};

  const tags = (await getAllTagWithSlug()) ?? [];
  const finalTagList = tags?.filter((tag) => tag?.name?.trim()?.[0] !== '#');
  return {
    props: {
      allPosts,
      tags: finalTagList,
      authorDetail
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
