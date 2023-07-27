// import { ArticleJsonLd } from 'next-seo';
import Layout from '../../components/layout';
import BlogNavbar from '../../components/navbar/blognavbar';
import { getAllTagWithSlug, getBlogDetail } from '../../lib/blog-content';
import { isEmpty } from '../../helpers/helpers';
import BlogdetailPage from '../../components/PageComponent/Blog/blogDetailPage';

async function getContent({ slug }) {
  const blogDetail = (await getBlogDetail(slug)) ?? [];
  const tags = (await getAllTagWithSlug()) ?? [];
  const finalTagList = tags?.filter((tag) => tag?.name?.trim()?.[0] !== '#');
  return {
    blogDetail,
    tags: finalTagList
  };
}

export async function generateMetadata({ params, searchParams }, parent) {
  const { blogDetail } = await getContent({ slug: params?.slug });

  let og_title = blogDetail?.title;
  let og_des = blogDetail?.meta_description;
  let og_image = blogDetail?.feature_image;
  if (!isEmpty(blogDetail?.og_title)) og_title = blogDetail?.og_title;
  else if (!isEmpty(blogDetail?.meta_title)) og_title = blogDetail?.meta_title;

  if (!isEmpty(blogDetail?.og_description)) og_des = blogDetail?.og_description;
  if (!isEmpty(blogDetail?.og_image)) og_image = blogDetail?.og_image;
  return {
    title: blogDetail?.meta_title ?? blogDetail?.title,
    description: blogDetail?.meta_description,
    canonical: `https://www.copilot.com/blog/${blogDetail?.slug}`,
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      site_name: 'copilot.com',
      title: og_title,
      description: og_des,
      images: isEmpty(og_image)
        ? []
        : [
            {
              url: og_image
            }
          ]
    }
  };
}
export default async function Blogdetail({ params }) {
  const { blogDetail, tags } = await getContent({ slug: params?.slug });

  const authorData = () => {
    if (isEmpty(blogDetail?.authors)) return [];
    return blogDetail?.authors?.map((item) => {
      return {
        type: 'Person',
        name: item?.name,
        url: item?.url
      };
    });
  };

  return (
    <>
      {/* <ArticleJsonLd
        type='Article'
        authorName={authorData}
        url={`https://www.copilot.com/blog/${blogDetail?.slug}/`}
        images={[blogDetail?.feature_image]}
        title={blogDetail?.title}
        description={blogDetail?.excerpt}
        publisherName='Copilot'
        publisherLogo='https://www.copilot.com/blog/assets/images/logo-copilot.svg?v=d96fa6b44d'
        datePublished={blogDetail?.created_at}
        dateModified={blogDetail?.updated_at}
      /> */}

      <Layout>
        <BlogNavbar tagData={tags} />
        <BlogdetailPage blogDetail={blogDetail} />
      </Layout>
    </>
  );
}
