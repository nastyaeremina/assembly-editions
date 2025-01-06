import { getServerSideSitemapIndex } from 'next-sitemap';
import { getAllPartnerAppsWithSlug } from '../../app/lib/contentful-partnerApps';
import { getAllJobsWithSlug } from '../../app/lib/contentful-jobsListing';
import { getAllUniversityVideoWithSlug } from '../../app/lib/contentful-universityVideos';
import { getAllAuthorWithSlug, getAllBlogWithSlug, getAllTagWithSlug } from '../../app/lib/blog-content';
import { getUpdatesWithSlug } from '../../app/lib/updates-content';
import { getAllComparisonWithSlug } from '../../app/lib/contentful-comparison';
import { PER_UPDATE_PAGE_POST } from '../../app/constants/constant';
import { getAllAutomationsWithSlug } from '../../app/lib/contentful-automation';
import { getAllGlossaryContent } from '../../app/lib/contentful-glossary';
import { getAllGuideArticleSlug } from '../../app/lib/contentful-guide';
import { getAllTemplatesWithSlug } from '../../app/lib/contentful-template';
import { getAllStandardPageWithSlug } from '../../app/lib/contentful-standardPage';

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
  const glossaryPostsPathList = glossarysPost?.map((item) => `glossary/${item?.slug}`);
  const guidePostsPathList = guidesPost?.map((item) => `guide/${item?.slug}`);
  const templatePostsPathList = templatesPost?.map((item) => `templates/${item?.slug}`);
  const standardPagesPathList = standardPagesPost?.map((item) => `${item?.slug}`);

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
    'glossary',
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
    standardPagesPathList
  );
  return getServerSideSitemapIndex(
    ctx,
    finalList?.map((item) => `https://www.copilot.com/${item}`)
  );
}

// Default export to prevent next.js errors
export default function SitemapIndex() {}
