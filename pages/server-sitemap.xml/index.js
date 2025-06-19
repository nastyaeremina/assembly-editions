import { getServerSideSitemapIndex } from 'next-sitemap';
import { getAllPartnerAppsWithSlug } from '../../app/lib/contentful-partnerApps';
import { getAllJobsWithSlug } from '../../app/lib/contentful-jobsListing';
import { getAllUniversityVideoWithSlug } from '../../app/lib/contentful-universityVideos';
import { getAllAuthorWithSlug, getAllBlogWithSlug, getAllTagWithSlug } from '../../app/lib/blog-content';
import { getUpdatesWithSlug } from '../../app/lib/updates-content';
import { getAllComparisonWithSlug } from '../../app/lib/contentful-comparison';
import { CURRENT_SITE_URL, HOME_VARIANT_CONTENT_ID, PER_UPDATE_PAGE_POST } from '../../app/constants/constant';
import { getAllAutomationsWithSlug } from '../../app/lib/contentful-automation';
import { getAllGlossaryContent } from '../../app/lib/contentful-glossary';
import { getAllGuideArticleSlug } from '../../app/lib/contentful-guide';
import { getAllTemplatesWithSlug } from '../../app/lib/contentful-template';
import { getAllStandardPageWithSlug } from '../../app/lib/contentful-standardPage';
import { getCommonContent } from '../../app/lib/contentful-common';
import { getAllVariantEntryIds, parseVariants } from '../../app/helpers/helpers';

export async function getServerSideProps(ctx) {
  const appsPost = (await getAllPartnerAppsWithSlug()) ?? []; // appa
  const jobPosts = (await getAllJobsWithSlug()) ?? []; //jobs
  const universityPosts = (await getAllUniversityVideoWithSlug()) ?? []; //university
  const blogPost = (await getAllBlogWithSlug()) ?? []; //blog
  const updatesPost = (await getUpdatesWithSlug()) ?? []; //updates
  const authorPost = (await getAllAuthorWithSlug()) ?? []; // blog/author
  const tagPost = (await getAllTagWithSlug()) ?? []; // blog/tag
  const comparisonPost = (await getAllComparisonWithSlug()) ?? []; // /comparison
  const automationsPost = (await getAllAutomationsWithSlug()) ?? []; // automationsPost
  const glossarysPost = (await getAllGlossaryContent()) ?? []; // glossary
  const guidesPost = (await getAllGuideArticleSlug()) ?? []; // guide
  const templatesPost = await getAllTemplatesWithSlug(); //templates
  const standardPagesPost = (await getAllStandardPageWithSlug()) || []; //standard pages
 

  const appsPostsPathList = appsPost?.map((item) => `apps/directory/${item?.slug}`);
  const jobsPostsPathList = jobPosts?.map((item) => `jobs/${item?.slug}`);
  const universityPostsPathList = universityPosts?.map((item) => `university/${item?.slug}`);
  const blogPostsPathList = blogPost?.map((item) => `blog/${item?.slug}`);
  const updatesPostsPathList = updatesPost?.map((item) => `updates/${item?.slug}`);
  const authorPostsPathList = authorPost?.map((item) => `blog/author/${item?.slug}`);
  const tagPostsPathList = tagPost?.map((item) => `blog/tag/${item?.slug}`);
  const comparisonPostsPathList = comparisonPost?.map((item) => `comparison/${item?.slug}`);
  const automationsPostsPathList = automationsPost?.map((item) => `automations/directory/${item?.slug}`);
  const glossaryPostsPathList = glossarysPost?.map((item) => `definitions/${item?.slug}`);
  const guidePostsPathList = guidesPost?.map((item) => `guide/${item?.slug}`);
  const templatePostsPathList = templatesPost?.map((item) => `templates/${item?.slug}`);
  let standardPagesPathList = standardPagesPost?.map((item) => `${item?.slug}`);
  
  const abTestContent = await getCommonContent(HOME_VARIANT_CONTENT_ID);
  let allExperimentPaths = [];
  if(abTestContent !== null) {
    const abTestExperiment = parseVariants(abTestContent);
    // Create array of page paths from experiments
    // Note: In A/B testing, multiple variants can have the same page path
    // For example: variant-a and variant-b can both be for "/pricing"
    allExperimentPaths = abTestExperiment.map((item) => item.pagePath.trim('/'));
    
    // Get all variant entry IDs to exclude them from standard pages
    // This prevents duplicate entries in sitemap since A/B test variants
    // should share the same URL/slug as their original page
    const allVariantIds = getAllVariantEntryIds(abTestExperiment);
    
    // Remove variant entries from standard pages list
    // This ensures we don't have duplicate URLs in the sitemap
    // For example: if we have a pricing page and its A/B test variants,
    // we only want the main pricing page URL in the sitemap
    standardPagesPathList = standardPagesPost.filter((item) => !allVariantIds.includes(item.sys.id));
  }
  let allUpdateWithPagination = [];
  const totalCount = updatesPost?.meta?.pagination?.total;
  const totalPageCount = Math.ceil(totalCount / PER_UPDATE_PAGE_POST);

  for (let page = 2; page <= totalPageCount; page++) {
    allUpdateWithPagination.push(`updates/page/${page}`);
  }
  const staticPages = [
    'apps',
    'apps/directory',
    'automations',
    'automations/directory',
    'blog',
    'book-demo',
    'brand',
    'comparison',
    'customers',
    'jobs',
    'pricing',
    'sitemap',
    'university',
    'updates',
    'definitions',
    'guide',
    'templates'
  ];
  const finalList = appsPostsPathList?.concat(
    staticPages,
    jobsPostsPathList,
    universityPostsPathList,
    blogPostsPathList,
    updatesPostsPathList,
    authorPostsPathList,
    tagPostsPathList,
    comparisonPostsPathList,
    allUpdateWithPagination,
    automationsPostsPathList,
    glossaryPostsPathList,
    guidePostsPathList,
    templatePostsPathList,
    standardPagesPathList,
    allExperimentPaths
  );
  // make finallist unique
  const uniqueFinalList = [...new Set(finalList)];
  return getServerSideSitemapIndex(
    ctx,
    uniqueFinalList?.map((item) => `${CURRENT_SITE_URL}/${item}`)
  );
}

// Default export to prevent next.js errors
export default function SitemapIndex() {}
