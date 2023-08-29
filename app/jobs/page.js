import JobsPage from '../components/PageComponent/Jobs/jobsPage';
import FAQ from './../components/faq/faq';
import Layout from './../components/layout';
import Navbar from './../components/navbar/navbar';
import { JOB_SEO_ID } from './../constants/constant';
import { getSEOData } from './../helpers/helpers';
import { NO_OF_JOBS_PER_PAGE } from './../lib/constants';
import { getAllJobBlogPosts } from './../lib/contentful-jobBlogPosts';
import { getAllJobImages, getAllJobs } from './../lib/contentful-jobsListing';
import { getSEOdata } from './../lib/contentful-seo';

async function getContent() {
  const jobImagesList = (await getAllJobImages()) ?? [];
  const jobBlogPostList = (await getAllJobBlogPosts()) ?? [];
  let allPosts = [];
  let data = [];
  let page = 0;
  do {
    const skip = page * NO_OF_JOBS_PER_PAGE;
    data = (await getAllJobs(skip)) || [];
    allPosts = allPosts.concat(data);

    if (data?.length !== NO_OF_JOBS_PER_PAGE) break;
    // eslint-disable-next-line no-plusplus
    else page++;
  } while (data?.length !== 0);

  let jobList = [];
  allPosts?.forEach((item) => {
    const index = jobList?.findIndex((x) => x?.department === item?.department);
    if (index !== -1) {
      jobList[index]?.list?.push(item);
    } else {
      const newItem = {
        department: item?.department,
        list: [item]
      };
      jobList?.push(newItem);
    }
  });

  return { jobList, jobImagesList, jobBlogPostList };
}

export async function generateMetadata() {
  const seoData = await getSEOData({ id: JOB_SEO_ID });
  seoData.alternates = { canonical: 'https://www.copilot.com/jobs' };

  return seoData;
}

export default async function Jobs() {
  const { jobList, jobImagesList, jobBlogPostList } = await getContent();
  return (
    <>
      <Layout>
        <Navbar />
        <JobsPage jobList={jobList} jobImagesList={jobImagesList} jobBlogPostList={jobBlogPostList} />
        <FAQ contentID={'724Cny0Z9XBus7znacIxWs'} />
      </Layout>
    </>
  );
}
