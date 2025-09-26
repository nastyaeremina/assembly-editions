import BlogPage from '../components/PageComponent/Blog/blogPage';
import Layout from '../components/layout';
import AggregateRating from '../components/aggregateRating';
import { getAllTagWithSlug, getBlogPosts } from './../lib/blog-content';
import { customSort, getFeaturedBlogAndFilteredPosts, getSEOData } from './../helpers/helpers';
import { BLOG_SEO_ID, BLOG_TAG_SORTED_LIST, CURRENT_SITE_URL } from './../constants/constant';
import { getSocialMediaLinks } from '../helpers/serverSideHelpers';

// Enable static generation with revalidation for better performance
export const revalidate = 300; // Revalidate every 5 minutes
/**
 * Fetches blog content including posts, tags, and social media links concurrently.
 * Uses Promise.all for better performance and includes error handling.
 *
 * @returns {Promise<Object>} - Promise that resolves to blog content object
 * @returns {Array} returns.allPosts - Array of blog posts
 * @returns {Array} returns.tags - Array of filtered and sorted tags
 * @returns {Array} returns.socialMediaLinks - Array of social media links
 *
 * @example
 * const { allPosts, tags, socialMediaLinks } = await getContent();
 */

async function getContent(page = 1, limit = 8) {
  try {
    // For first page, get a few extra posts to extract featured blog
    const postsLimit = page === 1 ? limit + 2 : limit;

    const [allPosts, tagsData, socialMediaLinks] = await Promise.all([
      getBlogPosts({ page, limit: postsLimit }), // Now using optimized paginated function
      getAllTagWithSlug(),
      getSocialMediaLinks({ linksOnly: true })
    ]);

    // Filter out tags that start with '#' and sort them
    const tags = tagsData?.filter((tagsData) => tagsData?.name?.trim()?.[0] !== '#');

    // For first page, extract featured blog and filter posts
    if (page === 1) {
      const { featuredBlog, filteredPosts } = getFeaturedBlogAndFilteredPosts(allPosts);
      customSort(tags, BLOG_TAG_SORTED_LIST);

      return {
        allPosts: filteredPosts?.slice(0, limit) || [],
        tags,
        socialMediaLinks: socialMediaLinks || [],
        featuredBlog
      };
    }

    // For subsequent pages, return posts as-is
    customSort(tags, BLOG_TAG_SORTED_LIST);

    return {
      allPosts: allPosts || [],
      tags,
      socialMediaLinks: socialMediaLinks || [],
      featuredBlog: null
    };
  } catch (error) {
    console.error('Error fetching blog content:', error);

    // Return empty data as fallback in case of error
    return {
      allPosts: [],
      tags: [],
      socialMediaLinks: [],
      featuredBlog: null
    };
  }
}

export async function generateMetadata({ params, searchParams }, parent) {
  const seoData = await getSEOData({ id: BLOG_SEO_ID });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/blog` };
  return seoData;
}

export default async function Blog({ searchParams }) {
  const page = parseInt(searchParams?.page) || 1;
  const { allPosts, tags, socialMediaLinks, featuredBlog } = await getContent(page);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Copilot',
    url: CURRENT_SITE_URL,
    logo: `${CURRENT_SITE_URL}/_next/static/media/blacklogo.370e156c.svg`,
    sameAs: socialMediaLinks
  };
  return (
    <>
      <AggregateRating id={BLOG_SEO_ID} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Layout>
        <BlogPage allPosts={allPosts} tags={tags} socialMediaLinks={socialMediaLinks} featuredBlog={featuredBlog} />
      </Layout>
    </>
  );
}
