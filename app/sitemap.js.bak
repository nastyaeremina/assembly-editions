import { getAllPartnerAppsWithSlug } from './lib/contentful-partnerApps';
import { getAllJobsWithSlug } from './lib/contentful-jobsListing';
import { getAllUniversityVideoWithSlug } from './lib/contentful-universityVideos';
import { getAllAuthorWithSlug, getAllBlogWithSlug, getAllTagWithSlug } from './lib/blog-content';
import { getUpdatesWithSlug } from './lib/updates-content';
import { getAllComparisonWithSlug } from './lib/contentful-comparison';
import { CURRENT_SITE_URL, PER_UPDATE_PAGE_POST } from './constants/constant';
import { getAllAutomationsWithSlug } from './lib/contentful-automation';
import { getAllGlossaryContent } from './lib/contentful-glossary';
import { getAllGuideArticleSlug } from './lib/contentful-guide';
import { getAllStandardPageWithSlug } from './lib/contentful-standardPage';
import { getAllAppEmbeds } from './lib/contentful-rewrite';

export default async function sitemap() {
  const appsPost = (await getAllPartnerAppsWithSlug()) ?? []; // appa
  const jobPosts = (await getAllJobsWithSlug()) ?? []; //jobs
  const standardPagesPost = (await getAllStandardPageWithSlug()) || []; //standard pages
  const universityPosts = (await getAllUniversityVideoWithSlug()) ?? []; //university
  const blogPost = (await getAllBlogWithSlug()) ?? []; //blog
  const updatesPost = (await getUpdatesWithSlug()) ?? []; //updates
  const authorPost = (await getAllAuthorWithSlug()) ?? []; // blog/author
  const tagPost = (await getAllTagWithSlug()) ?? []; // blog/tag
  const comparisonPost = (await getAllComparisonWithSlug()) ?? []; // /comparison
  const automationsPost = (await getAllAutomationsWithSlug()) ?? []; // automationsPost
  const glossarysPost = (await getAllGlossaryContent()) ?? []; // glossary
  const guidesPost = (await getAllGuideArticleSlug()) ?? []; // guide
  const appEmbeds = (await getAllAppEmbeds()) ?? []; //app embeds

  const appsPostsPathList = appsPost?.map((item) => `apps/directory/${item?.slug}`);
  const jobsPostsPathList = jobPosts?.map((item) => `jobs/${item?.slug}`);
  const standardPagesPathList = standardPagesPost?.map((item) => `${item?.slug}`).filter((slug) => slug !== 'newhome'); //remove newhome page from sitemap
  const universityPostsPathList = universityPosts?.map((item) => `university/${item?.slug}`);
  const blogPostsPathList = blogPost?.map((item) => `blog/${item?.slug}`);
  const updatesPostsPathList = updatesPost?.map((item) => `updates/${item?.slug}`);
  const authorPostsPathList = authorPost?.map((item) => `blog/author/${item?.slug}`);
  const tagPostsPathList = tagPost?.map((item) => `blog/tag/${item?.slug}`);
  const comparisonPostsPathList = comparisonPost?.map((item) => `comparison/${item?.slug}`);
  const automationsPostsPathList = automationsPost?.map((item) => `automations/directory/${item?.slug}`);
  const glossaryPostsPathList = glossarysPost?.map((item) => `definitions/${item?.slug}`);
  const guidePostsPathList = guidesPost?.map((item) => `guide/${item?.slug}`);

  let allUpdateWithPagination = [];
  const totalCount = updatesPost?.meta?.pagination?.total;
  const totalPageCount = Math.ceil(totalCount / PER_UPDATE_PAGE_POST);

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
    'features/billing-app',
    'features/files-app',
    'features/forms-app',
    'features/helpdesk-app',
    'features/messaging-app',
    'jobs',
    'pricing',
    'sitemap',
    'university',
    'updates',
    'definitions',
    'guide'
  ];

  for (let page = 2; page <= totalPageCount; page++) {
    allUpdateWithPagination.push(`updates/page/${page}`);
  }
  const appEmbedPaths = appEmbeds.filter((item) => item.path).map((item) => item.path.replace(/^\/|\/$/g, ''));

  const finalList = appsPostsPathList
    ?.concat(
      staticPages,
      jobsPostsPathList,
      standardPagesPathList,
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
      appEmbedPaths
    )
    .filter(Boolean);

  return finalList?.map((item) => {
    return {
      url: `${CURRENT_SITE_URL}/${item}`,
      lastModified: new Date()
    };
  });
}
