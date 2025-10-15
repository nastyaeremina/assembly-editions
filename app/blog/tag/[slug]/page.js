import { notFound } from 'next/navigation';
import Layout from '../../../components/layout';
import {
  getAllPublicTitlesAndSlugsRaw,
  getAllTagWithSlug,
  getBlogByTag,
  getTagDetail
} from '../../../lib/blog-content';
import { customSort, getFeaturedBlogAndFilteredPosts, isEmpty } from '../../../helpers/helpers';
import TagPage from '../../../components/PageComponent/Blog/tagPage';
import { BLOG_TAG_SORTED_LIST, CURRENT_SITE_URL, CURRENT_DOMAIN, BLOG_CTA_ID } from '../../../constants/constant';
import { getSectionCTAContent } from '../../../lib/contentful-standardPage';

// Enable static generation with revalidation
export const revalidate = 300; // Revalidate every 5 minutes

// Generate static params for popular tags
export async function generateStaticParams() {
  try {
    const tags = await getAllTagWithSlug();
    const popularTags = tags?.slice(0, 10) || []; // Generate for top 10 tags

    return popularTags.map((tag) => ({
      slug: tag.slug
    }));
    return { popularTagsSlug, allBlogPost };
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

async function getContent({ slug, page = 1, limit = 8 }) {
  try {
    // For first page, get a few extra posts to extract featured blog
    const postsLimit = page === 1 ? limit + 2 : limit;

    // Fetch initial posts with pagination
    const [initialPosts, allBlogPost, tagDetail, tags, tagCTA] = await Promise.all([
      getBlogByTag(slug, { page, limit: postsLimit }),

      getAllPublicTitlesAndSlugsRaw(slug),
      getTagDetail(slug),
      getAllTagWithSlug(),
      getSectionCTAContent(BLOG_CTA_ID, false)
    ]);
    let featuredBlog = null;
    let filteredPosts = initialPosts;

    // For first page, extract featured blog and filter posts
    if (page === 1) {
      const result = getFeaturedBlogAndFilteredPosts(initialPosts);
      featuredBlog = result.featuredBlog;
      filteredPosts = result.filteredPosts?.slice(0, limit) || [];
    }

    const finalTagList = tags?.filter((tag) => tag?.name?.trim()?.[0] !== '#');
    const title = tagDetail?.meta_title ?? `${tagDetail?.name} - Assembly Blog`;
    const og_title = tagDetail?.og_title ?? tagDetail?.meta_title ?? title;
    const og_des = tagDetail?.meta_description ?? tagDetail?.description;
    const og_image = tagDetail?.feature_image;
    const description = tagDetail?.meta_description ?? tagDetail?.description;
    const canonical = `${CURRENT_SITE_URL}/blog/tag/${tagDetail?.slug}`;
    const seoData = {
      title,
      og_title,
      og_des,
      og_image,
      description,
      canonical
    };
    customSort(finalTagList, BLOG_TAG_SORTED_LIST);

    //current  tag detail
    const currentTagDetail = tags.find((tag) => tag?.slug === slug);
    return {
      allPosts: filteredPosts,
      tags: finalTagList,
      seoData,
      featuredBlog,
      currentTagDetail,
      tagCTA,
      allBlogPost
    };
  } catch (error) {
    console.error('Error fetching tag content:', error);
    return {
      allPosts: [],
      tags: [],
      seoData: {
        title: 'Tag Not Found',
        description: 'The requested tag could not be found.',
        canonical: `${CURRENT_SITE_URL}/blog`
      },
      featuredBlog: null,
      currentTagDetail: null,
      tagCTA: null
    };
  }
}

export async function generateMetadata({ params }) {
  try {
    const { seoData } = await getContent({ slug: params?.slug });

    return {
      title: seoData?.title,
      description: seoData?.description,
      canonical: seoData?.canonical ?? null,
      openGraph: {
        type: 'website',
        locale: 'en_IE',
        site_name: CURRENT_DOMAIN,
        title: seoData?.og_title,
        description: seoData?.og_des,
        images: isEmpty(seoData?.og_image)
          ? []
          : [
              {
                url: seoData?.og_image
              }
            ]
      }
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Tag Not Found',
      description: 'The requested tag could not be found.',
      canonical: `${CURRENT_SITE_URL}/blog`
    };
  }
}

export default async function Tag({ params, searchParams }) {
  try {
    const page = parseInt(searchParams?.page) || 1;
    const { allPosts, tags, featuredBlog, currentTagDetail, tagCTA, allBlogPost } = await getContent({
      slug: params?.slug,
      page
    });

    if (isEmpty(allPosts) && page === 1) {
      return notFound();
    }

    return (
      <>
        <Layout>
          <TagPage
            allPosts={allPosts}
            allBlogPost={allBlogPost}
            tags={tags}
            featuredBlog={featuredBlog}
            currentTag={currentTagDetail}
            tagCTA={tagCTA}
          />
        </Layout>
      </>
    );
  } catch (error) {
    console.error('Error rendering tag page:', error);
    return notFound();
  }
}
