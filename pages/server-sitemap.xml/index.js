import { getServerSideSitemapIndex } from 'next-sitemap';
import { GetServerSideProps } from 'next';
import { getAllPartnerAppsWithSlug } from '../../lib/contentful-partnerApps';
import { getAllJobsWithSlug } from '../../lib/contentful-jobsListing';
import { getAllSolutionWithSlug } from '../../lib/contentful-solutions';
import { getAllUniversityVideoWithSlug } from '../../lib/contentful-universityVideos';

export async function getServerSideProps(ctx) {
  const appsPost = (await getAllPartnerAppsWithSlug()) ?? []; // appa
  const jobPosts = (await getAllJobsWithSlug()) ?? []; //jobs
  const solutionPosts = await getAllSolutionWithSlug(); //solutions
  const universityPosts = (await getAllUniversityVideoWithSlug()) ?? []; //university

  const appsPostsPathList = appsPost?.map((item) => `apps/${item?.slug}`);
  const jobsPostsPathList = jobPosts?.map((item) => `jobs/${item?.slug}`);
  const solutionssPostsPathList = solutionPosts?.map((item) => `solutions/${item?.slug}`);
  const universityPostsPathList = universityPosts?.map((item) => `university/${item?.slug}`);

  const finalList = appsPostsPathList?.concat(jobsPostsPathList, solutionssPostsPathList, universityPostsPathList);
  return getServerSideSitemapIndex(
    ctx,
    finalList?.map((item) => `https://www.copilot.com/${item}`)
  );
}

// Default export to prevent next.js errors
export default function SitemapIndex() {}
