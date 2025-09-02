import BlogPage from '../components/PageComponent/Blog/blogPage';
import Layout from '../components/layout';
import AggregateRating from '../components/aggregateRating';
import {
  COPILOT_FACEBOOK_LINK,
  COPILOT_INSTAGRAM_LINK,
  COPILOT_LINKEDIN_LINK,
  COPILOT_TWITTER_LINK,
  COPILOT_YOUTUBE_CHANNEL_LINK
} from '../constants/externalLinks';
import { getAllTagWithSlug, getBlogPosts } from './../lib/blog-content';
import { customSort, getFeaturedBlogAndFilteredPosts, getSEOData } from './../helpers/helpers';
import { BLOG_SEO_ID, BLOG_TAG_SORTED_LIST, CURRENT_SITE_URL } from './../constants/constant';

// Force dynamic rendering to prevent static generation issues
export const dynamic = 'force-dynamic';

async function getContent() {
  const allPosts = (await getBlogPosts()) || [];
  const tagsData = (await getAllTagWithSlug()) || [];
  const tags = tagsData?.filter((tagsData) => tagsData?.name?.trim()?.[0] !== '#');

  const { featuredBlog, filteredPosts } = getFeaturedBlogAndFilteredPosts(allPosts);

  customSort(tags, BLOG_TAG_SORTED_LIST);
  return { allPosts: filteredPosts, tags, featuredBlog };
}

export async function generateMetadata({ params, searchParams }, parent) {
  const seoData = await getSEOData({ id: BLOG_SEO_ID });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/blog` };
  return seoData;
}

export default async function Blog() {
  const { allPosts, tags, featuredBlog } = await getContent();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Copilot',
    url: CURRENT_SITE_URL,
    logo: `${CURRENT_SITE_URL}/_next/static/media/blacklogo.370e156c.svg`,
    sameAs: [
      COPILOT_TWITTER_LINK,
      COPILOT_LINKEDIN_LINK,
      COPILOT_YOUTUBE_CHANNEL_LINK,
      COPILOT_FACEBOOK_LINK,
      COPILOT_INSTAGRAM_LINK
    ]
  };
  return (
    <>
      <AggregateRating id={BLOG_SEO_ID} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Layout>
        <BlogPage allPosts={allPosts} tags={tags} featuredBlog={featuredBlog} />
      </Layout>
    </>
  );
}
