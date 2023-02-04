import { getServerSideSitemapIndex } from 'next-sitemap';
import { GetServerSideProps } from 'next';
import { getAllPartnerAppsWithSlug } from '../../lib/contentful-partnerApps';
import { getAllJobsWithSlug } from '../../lib/contentful-jobsListing';
import { getAllSolutionWithSlug } from '../../lib/contentful-solutions';
import { getAllUniversityVideoWithSlug } from '../../lib/contentful-universityVideos';
import { getAllAuthorWithSlug, getAllBlogWithSlug, getAllTagWithSlug } from '../../lib/blog-content';
import { getUpdatesPosts, getUpdatesWithSlug } from '../../lib/updates-content';

export async function getServerSideProps(ctx) {
  const appsPost = (await getAllPartnerAppsWithSlug()) ?? []; // appa
  const jobPosts = (await getAllJobsWithSlug()) ?? []; //jobs
  const solutionPosts = await getAllSolutionWithSlug(); //solutions
  const universityPosts = (await getAllUniversityVideoWithSlug()) ?? []; //university
  const blogPost = (await getAllBlogWithSlug()) ?? []; //blog
  const updatesPost = (await getUpdatesWithSlug()) ?? []; //updates
  const authorPost = (await getAllAuthorWithSlug()) ?? []; // blog/author
  const tagPost = (await getAllTagWithSlug()) ?? []; // blog/tag

  const appsPostsPathList = appsPost?.map((item) => `apps/${item?.slug}`);
  const jobsPostsPathList = jobPosts?.map((item) => `jobs/${item?.slug}`);
  const solutionssPostsPathList = solutionPosts?.map((item) => `solutions/${item?.slug}`);
  const universityPostsPathList = universityPosts?.map((item) => `university/${item?.slug}`);
  const blogPostsPathList = blogPost?.map((item) => `blog/${item?.slug}`);
  const updatesPostsPathList = updatesPost?.map((item) => `updates/${item?.slug}`);
  const authorPostsPathList = authorPost?.map((item) => `blog/author/${item?.slug}`);
  const tagPostsPathList = tagPost?.map((item) => `blog/tag/${item?.slug}`);

  const finalList = appsPostsPathList?.concat(
    jobsPostsPathList,
    solutionssPostsPathList,
    universityPostsPathList,
    blogPostsPathList,
    updatesPostsPathList,
    authorPostsPathList,
    tagPostsPathList
  );
  return getServerSideSitemapIndex(
    ctx,
    finalList?.map((item) => `https://www.copilot.com/${item}`)
  );
}

// Default export to prevent next.js errors
export default function SitemapIndex() {}
