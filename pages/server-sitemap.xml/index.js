import { getServerSideSitemapIndex } from 'next-sitemap';
import { getAllPartnerAppsWithSlug } from '../../app/lib/contentful-partnerApps';
import { getAllJobsWithSlug } from '../../app/lib/contentful-jobsListing';
import { getAllSolutionWithSlug } from '../../app/lib/contentful-solutions';
import { getAllUniversityVideoWithSlug } from '../../app/lib/contentful-universityVideos';
import { getAllAuthorWithSlug, getAllBlogWithSlug, getAllTagWithSlug } from '../../app/lib/blog-content';
import { getUpdatesPosts, getUpdatesWithSlug } from '../../app/lib/updates-content';
import { getAllComparisonWithSlug } from '../../app/lib/contentful-comparison';
import { PER_UPDATE_PAGE_POST } from '../../app/constants/constant';
import { getAllAutomationsWithSlug } from '../../app/lib/contentful-automation';
import { getAllGlossaryContent } from '../../app/lib/contentful-glossary';

export async function getServerSideProps(ctx) {
  const appsPost = (await getAllPartnerAppsWithSlug()) ?? []; // appa
  const jobPosts = (await getAllJobsWithSlug()) ?? []; //jobs
  const solutionPosts = await getAllSolutionWithSlug(); //solutions
  const universityPosts = (await getAllUniversityVideoWithSlug()) ?? []; //university
  const blogPost = (await getAllBlogWithSlug()) ?? []; //blog
  const updatesPost = (await getUpdatesWithSlug()) ?? []; //updates
  const authorPost = (await getAllAuthorWithSlug()) ?? []; // blog/author
  const tagPost = (await getAllTagWithSlug()) ?? []; // blog/tag
  const comparisonPost = (await getAllComparisonWithSlug()) ?? []; // /comparison
  const automationsPost = (await getAllAutomationsWithSlug()) ?? []; // automationsPost
  const glossarysPost = (await getAllGlossaryContent()) ?? []; // glossary

  const appsPostsPathList = appsPost?.map((item) => `apps/directory/${item?.slug}`);
  const jobsPostsPathList = jobPosts?.map((item) => `jobs/${item?.slug}`);
  const solutionssPostsPathList = solutionPosts?.map((item) => `solutions/${item?.slug}`);
  const universityPostsPathList = universityPosts?.map((item) => `university/${item?.slug}`);
  const blogPostsPathList = blogPost?.map((item) => `blog/${item?.slug}`);
  const updatesPostsPathList = updatesPost?.map((item) => `updates/${item?.slug}`);
  const authorPostsPathList = authorPost?.map((item) => `blog/author/${item?.slug}`);
  const tagPostsPathList = tagPost?.map((item) => `blog/tag/${item?.slug}`);
  const comparisonPostsPathList = comparisonPost?.map((item) => `comparison/${item?.slug}`);
  const automationsPostsPathList = automationsPost?.map((item) => `automations/directory/${item?.slug}`);
  const glossaryPostsPathList = glossarysPost?.map((item) => `glossary/${item?.slug}`);

  let allUpdateWithPagination = [];
  const totalCount = updatesPost?.meta?.pagination?.total;
  const totalPageCount = Math.ceil(totalCount / PER_UPDATE_PAGE_POST);

  for (let page = 2; page <= totalPageCount; page++) {
    allUpdateWithPagination.push(`updates/page/${page}`);
  }
  const finalList = appsPostsPathList?.concat(
    jobsPostsPathList,
    solutionssPostsPathList,
    universityPostsPathList,
    blogPostsPathList,
    updatesPostsPathList,
    authorPostsPathList,
    tagPostsPathList,
    comparisonPostsPathList,
    allUpdateWithPagination,
    automationsPostsPathList,
    glossaryPostsPathList
  );
  return getServerSideSitemapIndex(
    ctx,
    finalList?.map((item) => `https://www.copilot.com/${item}`)
  );
}

// Default export to prevent next.js errors
export default function SitemapIndex() {}
