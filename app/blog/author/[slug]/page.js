import Layout from '../../../components/layout';
import BlogNavbar from '../../../components/navbar/blognavbar';
import { getAllTagWithSlug, getAuthorDetail, getBlogByAuthor } from '../../../lib/blog-content';
import { getSEOData, isEmpty } from '../../../helpers/helpers';
import AuthorPage from '../../../components/PageComponent/Blog/authorPage';

async function getContent({ slug }) {
  const allPosts = (await getBlogByAuthor(slug)) ?? [];
  const authorDetail = (await getAuthorDetail(slug)) ?? {};

  const tags = (await getAllTagWithSlug()) ?? [];
  const finalTagList = tags?.filter((tag) => tag?.name?.trim()?.[0] !== '#');
  return {
    allPosts,
    tags: finalTagList,
    authorDetail
  };
}

export async function generateMetadata({ params }) {
  const { authorDetail } = await getContent({ slug: params?.slug });
  const title = `${authorDetail?.name} - Copilot Blog`;
  const og_title = authorDetail?.og_title ?? authorDetail?.meta_title ?? title;
  const og_des = authorDetail?.meta_description ?? authorDetail?.description;
  const og_image = authorDetail?.feature_image;
  const seoData = await getSEOData({
    data: {
      title: authorDetail?.meta_title ?? title,
      description: authorDetail?.meta_description ?? authorDetail?.description,
      canonical: 'https://www.copilot.com/blog/author/' + authorDetail?.slug,
      openGraph: {
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
      }
    }
  });
  return seoData;
}

export default async function Author({ params }) {
  const { allPosts, tags } = await getContent({ slug: params?.slug });

  return (
    <>
      <Layout>
        <BlogNavbar tagData={tags} />
        <AuthorPage allPosts={allPosts} />
      </Layout>
    </>
  );
}
