import JobsPage from '../components/PageComponent/Jobs/jobsPage';
import AggregateRating from '../components/aggregateRating';
import { getFAQsData } from '../services/faq';
import FAQ from './../components/faq/faq';
import Layout from './../components/layout';
import Navbar from './../components/navbar/navbar';
import { CURRENT_SITE_URL, JOB_PAGE_ID } from './../constants/constant';
import { extractTableData, getSEOData } from './../helpers/helpers';
import { NO_OF_JOBS_PER_PAGE } from './../lib/constants';
import { getJobDetail } from './../lib/contentful-jobBlogPosts';
import { getAllJobs } from './../lib/contentful-jobsListing';

async function getContent() {
  const details = (await getJobDetail(JOB_PAGE_ID)) ?? {};
  const jobImagesList = details.jobImagesCollection?.items ?? [];
  delete details.jobImagesCollection;
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

  return { jobList, jobImagesList, details };
}

export async function generateMetadata() {
  const { details } = await getContent();

  const seoData = await getSEOData({ data: details?.seoMetadata });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/jobs` };

  return seoData;
}

export default async function Jobs() {
  const { details, jobList, jobImagesList } = await getContent();
  const faqData = await getFAQsData({ data: details?.faQsCollection?.items });

  const jobBlogPostList = extractTableData(details.jobBlogPost.json);

  return (
    <>
      <AggregateRating data={details?.seoMetadata} />
      <Layout>
        <Navbar />
        <JobsPage jobList={jobList} jobImagesList={jobImagesList} jobBlogPostList={jobBlogPostList} details={details} />
        <FAQ faqList={faqData} />
      </Layout>
    </>
  );
}
