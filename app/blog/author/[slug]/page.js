import Layout from '../../../components/layout';
import { getAllTagWithSlug, getAuthorDetail, getBlogByAuthor } from '../../../lib/blog-content';
import { customSort, isEmpty } from '../../../helpers/helpers';
import { getBreadcrumbFromReferer } from '../../../helpers/serverSideHelpers';
import AuthorPage from '../../../components/PageComponent/Blog/authorPage';
import { BLOG_TAG_SORTED_LIST, CURRENT_SITE_URL, CURRENT_DOMAIN } from '../../../constants/constant';

async function getContent({ slug }) {
  const allPosts = (await getBlogByAuthor(slug)) ?? [];
  const authorDetail = (await getAuthorDetail(slug)) ?? {};

  const tags = (await getAllTagWithSlug()) ?? [];
  const finalTagList = tags?.filter((tag) => tag?.name?.trim()?.[0] !== '#');
  customSort(finalTagList, BLOG_TAG_SORTED_LIST);

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

  return {
    title: authorDetail?.meta_title ?? title,
    description: authorDetail?.meta_description ?? authorDetail?.description,
    canonical: `${CURRENT_SITE_URL}/blog/author/${authorDetail?.slug}`,
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      site_name: CURRENT_DOMAIN,
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
  };
}

export default async function Author({ params }) {
  const { allPosts, tags } = await getContent({ slug: params?.slug });
  
  // Get the referer to determine where user came from
  const headersList = headers();
  const referer = headersList.get('referer') || '';
  
  // Get breadcrumb information using helper function
  const { breadcrumbText, breadcrumbLink } = getBreadcrumbFromReferer(referer, CURRENT_DOMAIN);

  return (
    <>
      <Layout>
        <AuthorPage allPosts={allPosts} />
      </Layout>
    </>
  );
}
