import Layout from '../components/layout';
import Navbar from './../components/navbar/navbar';
import UniversityPage from './../components/PageComponent/University/universityPage';
import { getAllUniversityVideos, getUniversityVideoCategory } from './../lib/contentful-universityVideos';
import { customSort, getSEOData } from './../helpers/helpers';

async function getContent() {
  let allPosts = [];
  let data = [];
  let page = 0;
  do {
    const skip = page * 100;
    data = (await getAllUniversityVideos(skip)) || [];
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
  const seoData = await getSEOData({ id: '2hMkBVQBYcMCmHLQyxzo8o' });
  seoData.alternates = { canonical: 'https://www.copilot.com/university' };
  return seoData;
}

export default async function University() {
  const { universityVideosList, allPosts } = await getContent();

  return (
    <>
      <Layout>
        <Navbar />
        <UniversityPage allPosts={allPosts} universityVideosList={universityVideosList} />
      </Layout>
    </>
  );
}
