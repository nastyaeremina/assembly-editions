import BlogPage from '../components/PageComponent/Blog/blogPage';
import Layout from '../components/layout';
import AggregateRating from '../components/aggregateRating';
import { getAllTagWithSlug, getBlogPosts } from './../lib/blog-content';
import { customSort, getFeaturedBlogAndFilteredPosts, getSEOData } from './../helpers/helpers';
import { BLOG_SEO_ID, BLOG_TAG_SORTED_LIST, CURRENT_SITE_URL } from './../constants/constant';
import { getSocialMediaLinks } from '../helpers/serverSideHelpers';

// Force dynamic rendering to prevent static generation issues
export const dynamic = 'force-dynamic';
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

async function getContent() {
  try {
    // Fetch all data concurrently using Promise.all for better performance
    const [allPosts, tagsData, socialMediaLinks] = await Promise.all([
      getBlogPosts(),
      getAllTagWithSlug(),
      getSocialMediaLinks({ linksOnly: true })
    ]);

    // Filter out tags that start with '#' and sort them
    const tags = (tagsData)?.filter((tagsData) => tagsData?.name?.trim()?.[0] !== '#');
    const { featuredBlog, filteredPosts } = getFeaturedBlogAndFilteredPosts(allPosts);

    customSort(tags, BLOG_TAG_SORTED_LIST);

    return { 
      allPosts: filteredPosts || [], 
      tags, 
      socialMediaLinks: socialMediaLinks || [] ,
      featuredBlog 
    };
  } catch (error) {
    console.error('Error fetching blog content:', error);
    
    // Return empty data as fallback in case of error
    return { 
      allPosts: [], 
      tags: [], 
      socialMediaLinks: [] ,
      featuredBlog : null
    };
  }
}

export async function generateMetadata({ params, searchParams }, parent) {
  const seoData = await getSEOData({ id: BLOG_SEO_ID });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/blog` };
  return seoData;
}

export default async function Blog() {
  const { allPosts, tags,socialMediaLinks, featuredBlog } = await getContent();
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
        <BlogPage allPosts={allPosts} tags={tags} socialMediaLinks={socialMediaLinks} featuredBlog={featuredBlog}/>
      </Layout>
    </>
  );
}
