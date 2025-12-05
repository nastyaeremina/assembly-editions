import BlogPage from '../components/PageComponent/Blog/blogPage';
import Layout from '../components/layout';
import AggregateRating from '../components/aggregateRating';
import { getAllPublicTitlesAndSlugsRaw, getAllTagWithSlug, getBlogPosts } from './../lib/blog-content';
import { customSort, getFeaturedBlogAndFilteredPosts, getSEOData } from './../helpers/helpers';
import { BLOG_CTA_ID, BLOG_SEO_ID, BLOG_TAG_SORTED_LIST, CURRENT_SITE_URL } from './../constants/constant';
import { getSectionCTAContent } from '../lib/contentful-standardPage';
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
    // For first page, fetch one extra post to allow de-dup with featured
    const postsLimit = page === 1 ? limit + 1 : limit;

    const [allPosts, tagsData, socialMediaLinks, blogCTA, allBlogPost] = await Promise.all([
      getBlogPosts({ page, limit: postsLimit }),
      getAllTagWithSlug(),
      getSocialMediaLinks({ linksOnly: true }),
      // Fetch CTA Section by id from Contentful
      getSectionCTAContent(BLOG_CTA_ID, false),
      getAllPublicTitlesAndSlugsRaw()
    ]);

    // Filter out tags that start with '#' and sort them
    const tags = tagsData?.filter((tagsData) => tagsData?.name?.trim()?.[0] !== '#');

    // For first page, fetch latest featured and de-duplicate from list
    if (page === 1) {
      // Prefer the latest featured post globally
      const latestFeaturedList = await getBlogPosts({ page: 1, limit: 1, filter: 'visibility:public+featured:true' });
      let featuredBlog = latestFeaturedList?.[0] || null;

      let filteredPosts = allPosts;

      if (featuredBlog) {
        const isFeaturedInList = filteredPosts?.some((p) => p?.id === featuredBlog?.id);
        if (isFeaturedInList) {
          filteredPosts = filteredPosts.filter((p) => p?.id !== featuredBlog?.id).slice(0, limit);
        } else {
          // Not present; keep only first `limit` posts (we fetched limit+1 to compensate)
          filteredPosts = filteredPosts.slice(0, limit);
        }
      } else {
        // Fallback to previous behavior if no featured exists
        const result = getFeaturedBlogAndFilteredPosts(allPosts);
        featuredBlog = result?.featuredBlog || null;
        filteredPosts = result?.filteredPosts?.slice(0, limit) || [];
      }

      customSort(tags, BLOG_TAG_SORTED_LIST);

      return {
        allPosts: filteredPosts || [],
        tags,
        socialMediaLinks: socialMediaLinks || [],
        featuredBlog,
        blogCTA,
        allBlogPost
      };
    }

    // For subsequent pages, return posts as-is
    customSort(tags, BLOG_TAG_SORTED_LIST);

    return {
      allPosts: allPosts || [],
      tags,
      socialMediaLinks: socialMediaLinks || [],
      featuredBlog: null,
      blogCTA,
      allBlogPost: []
    };
  } catch (error) {
    console.error('Error fetching blog content:', error);

    // Return empty data as fallback in case of error
    return {
      allPosts: [],
      tags: [],
      socialMediaLinks: [],
      featuredBlog: null,
      blogCTA: null,
      allBlogPost: []
    };
  }
}

export async function generateMetadata({ params, searchParams }, parent) {
  const seoData = await getSEOData({ 
    id: BLOG_SEO_ID,
    canonical: `${CURRENT_SITE_URL}/blog`
  });
  return seoData;
}

export default async function Blog({ searchParams }) {
  const page = parseInt(searchParams?.page) || 1;
  const { allPosts, tags, socialMediaLinks, featuredBlog, blogCTA, allBlogPost } = await getContent(page);

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
        <BlogPage
          allPosts={allPosts}
          allBlogPost={allBlogPost}
          tags={tags}
          socialMediaLinks={socialMediaLinks}
          featuredBlog={featuredBlog}
          blogCTA={blogCTA}
        />
      </Layout>
    </>
  );
}
