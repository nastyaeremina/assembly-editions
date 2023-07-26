import Layout from '../components/layout';
import Navbar from './../components/navbar/navbar';
import UniversityPage from './../components/PageComponent/University/universityPage';
import { getAllUniversityVideos } from './../lib/contentful-universityVideos';
import { getSEOData, isEmpty } from './../helpers/helpers';
import { UNIVERSITY_VIDEO_CATEGORY } from './../constants/constant';

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

  const sortedCategory = UNIVERSITY_VIDEO_CATEGORY.reverse();
  const universityVideosList = newList
    ?.sort((a, b) => sortedCategory?.indexOf(a.category) - sortedCategory?.indexOf(b.category))
    ?.reverse();
  return { universityVideosList, allPosts };
}

export async function generateMetadata({ params, searchParams }, parent) {
  const seoData = await getSEOData({ id: '2hMkBVQBYcMCmHLQyxzo8o' });
  seoData.canonical = 'https://www.copilot.com/university';
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
