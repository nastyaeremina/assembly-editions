import '../app/styles/globals.css';

import { NextSeo } from 'next-seo';
import NotFoundPage from '../app/components/404/404-MainPage';
import { getContent } from '../app/components/layout';
import { getSitemap } from '../app/lib/contentful-sitemap';
import { TOP_BAR_CONTENT_ID } from '../app/constants/constant';
import { getAllNavbarSolution } from '../app/lib/contentful-solutions';
import { isEmpty } from '../app/helpers/helpers';

export default function NotFound({ topbarContent, solutionDataList, footerData, data }) {
  console.log('data----', data);

  return (
    <>
      <NextSeo
        title='Create your portal, pick a plan later'
        description='Try Copilot free for 14 days, no credit card required'
      />
      <NotFoundPage
        topbarContent={topbarContent}
        solutionDataList={solutionDataList}
        isAuthenticated={true}
        footerData={footerData}
      />
    </>
  );
}

export const getStaticProps = async (context) => {
  console.log('context', context);
  const data = (await getSitemap(TOP_BAR_CONTENT_ID)) ?? '';
  const solutionDataList = (await getAllNavbarSolution()) ?? [];
  let topbarContent = null;
  if (!isEmpty(data?.content)) {
    const contentList = data?.content?.split(/[\[\]\(\)]/);

    const item = {
      title: contentList?.[1],
      url: contentList?.[3]
    };
    topbarContent = item;
  }
  const { footerData } = await getContent();
  const contextData = isEmpty(context) ?? { title: '' };
  return {
    props: {
      topbarContent,
      solutionDataList,
      footerData,
      data: contextData
    }
  };
};
