import Layout from '../../../components/layout';
import { getAllTagWithSlug, getAuthorDetail, getBlogByAuthor, getPageDetailBySlug } from '../../../lib/blog-content';
import { customSort, isEmpty, parseAuthorBioContent } from '../../../helpers/helpers';
import { getBreadcrumbFromReferer } from '../../../helpers/serverSideHelpers';
import AuthorPage from '../../../components/PageComponent/Blog/authorPage';
import { BLOG_TAG_SORTED_LIST, CURRENT_SITE_URL, CURRENT_DOMAIN, BLOG_CTA_ID } from '../../../constants/constant';
import { headers } from 'next/headers';
import { getSectionCTAContent } from '../../../lib/contentful-standardPage';

async function getContent({ slug }) {
  const [allPosts, authorDetail, tags, blogCTA, aboutPage] = await Promise.all([
    getBlogByAuthor(slug),
    getAuthorDetail(slug),
    getAllTagWithSlug(),
    getSectionCTAContent(BLOG_CTA_ID, false),
    getPageDetailBySlug(slug)
  ]);

  const finalTagList = tags?.filter((tag) => tag?.name?.trim()?.[0] !== '#');
  customSort(finalTagList, BLOG_TAG_SORTED_LIST);

  return {
    allPosts: allPosts ?? [],
    tags: finalTagList,
    authorDetail: authorDetail ?? {},
    blogCTA,
    aboutPage
  };
}

export async function generateMetadata({ params }) {
  const { authorDetail } = await getContent({ slug: params?.slug });
  const title = `${authorDetail?.name} - Assembly Blog`;
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
  const { allPosts, tags, blogCTA, aboutPage } = await getContent({ slug: params?.slug });

  const { description, featuredLinks } = parseAuthorBioContent(aboutPage?.html);

  // Get the referer to determine where user came from
  const headersList = headers();
  const referer = headersList.get('referer') || '';

  // Get breadcrumb information using helper function
  const { breadcrumbText, breadcrumbLink } = getBreadcrumbFromReferer(referer, CURRENT_DOMAIN);

  return (
    <>
      <Layout>
        <AuthorPage allPosts={allPosts} authorCTA={blogCTA} description={description} featuredLinks={featuredLinks} />
      </Layout>
    </>
  );
}
