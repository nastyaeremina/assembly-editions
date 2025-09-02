import { draftMode } from 'next/headers';
import Layout from '../components/layout';
import { CURRENT_SITE_URL, UNIVERSITY_SEO_ID } from '../constants/constant';
import AggregateRating from '../components/aggregateRating';
import UniversityPage from './../components/PageComponent/University/universityPage';
import { getAllUniversityVideos, getUniversityVideoCategory } from './../lib/contentful-universityVideos';
import { customSort, getSEOData } from './../helpers/helpers';

async function getContent() {
  const { isEnabled } = await draftMode();
  let allPosts = [];
  let data = [];
  let page = 0;
  do {
    const skip = page * 100;
    data = (await getAllUniversityVideos(skip, isEnabled)) || [];
    allPosts = allPosts.concat(data);

    if (data?.length !== 100) break;
    // eslint-disable-next-line no-plusplus
    else page++;
  } while (data?.length !== 0);

  let newList = [];
  allPosts?.forEach((item) => {
    const index = newList?.findIndex((x) => x?.category === item?.videoCategory);
    if (index !== -1) {
      newList[index]?.list?.push(item);
    } else {
      const newItem = {
        category: item?.videoCategory,
        list: [item]
      };
      newList?.push(newItem);
    }
  });

  // get all video category
  const sortedCategory = await getUniversityVideoCategory();

  //sorting by video category
  customSort(newList, sortedCategory, 'category');

  return { universityVideosList: newList, allPosts };
}

export async function generateMetadata({ params, searchParams }, parent) {
  const seoData = await getSEOData({ id: UNIVERSITY_SEO_ID });
  seoData.alternates = { canonical: `${CURRENT_SITE_URL}/university` };
  return seoData;
}

export default async function University() {
  const { universityVideosList, allPosts } = await getContent();

  return (
    <>
      <AggregateRating id={UNIVERSITY_SEO_ID} />
      <Layout>
        <UniversityPage allPosts={allPosts} universityVideosList={universityVideosList} />
      </Layout>
    </>
  );
}
