import { draftMode } from 'next/headers';
import JobsPage from '../components/PageComponent/Jobs/jobsPage';
import AggregateRating from '../components/aggregateRating';
import { getFAQsData } from '../services/faq';
import Layout from './../components/layout';
import { CURRENT_SITE_URL, JOB_PAGE_ID } from './../constants/constant';
import { extractTableData, getSEOData } from './../helpers/helpers';
import { getPageContent } from './../helpers/serverSideHelpers';
import { NO_OF_JOBS_PER_PAGE } from './../lib/constants';
import { getJobDetail } from './../lib/contentful-jobBlogPosts';
import { getAllJobs } from './../lib/contentful-jobsListing';

async function getContent({ searchParams }) {
  const { isEnabled } = await draftMode();
  const {
    content: details,
    abTestContentLabel,
    abTestExperimentName
  } = await getPageContent({
    searchParams,
    cookieKey: 'jobs',
    fallbackContentId: JOB_PAGE_ID,
    getContentFn: getJobDetail
  });

  //get job images list
  const jobImagesList = details.jobImagesCollection?.items ?? [];
  delete details.jobImagesCollection;
  let allPosts = [];
  let data = [];
  let page = 0;
  do {
    const skip = page * NO_OF_JOBS_PER_PAGE;
    data = (await getAllJobs(skip, isEnabled)) || [];
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

  return { jobList, jobImagesList, details, abTestContentLabel, abTestExperimentName };
}

export async function generateMetadata({ searchParams }) {
  const { details } = await getContent({ searchParams });

  const seoData = await getSEOData({ 
    data: details?.seoMetadata,
    canonical: `${CURRENT_SITE_URL}/jobs`
  });

  return seoData;
}

export default async function Jobs({ searchParams }) {
  const { details, jobList, jobImagesList, abTestContentLabel, abTestExperimentName } = await getContent({
    searchParams
  });
  const faqData = await getFAQsData({ data: details?.faQsCollection?.items });

  const jobBlogPostList = extractTableData(details.jobBlogPost.json);

  return (
    <>
      <AggregateRating data={details?.seoMetadata} />
      <Layout abTestContentLabel={abTestContentLabel} abTestExperimentName={abTestExperimentName}>
        <JobsPage
          jobList={jobList}
          jobImagesList={jobImagesList}
          jobBlogPostList={jobBlogPostList}
          details={details}
          faqData={faqData}
        />
      </Layout>
    </>
  );
}
