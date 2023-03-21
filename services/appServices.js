import { setAppLoading, setCTAContent, setNavbarSolutionList, setTopBarContent } from '../actions/appActions';
import { CTA_CONTENT_ID, TOP_BAR_CONTENT_ID } from '../constants/constant';
import { isEmpty } from '../helpers/helpers';
import { getSitemap } from '../lib/contentful-sitemap';
import { getAllNavbarSolution } from '../lib/contentful-solutions';

export const getTopBarContent = () => async (dispatch) => {
  try {
    dispatch(setAppLoading(true));
    const data = (await getSitemap(TOP_BAR_CONTENT_ID)) ?? '';

    // const topbarData = await fetch(`/api/getCommonContent`, {
    //   method: 'GET',
    //   headers: {
    //     Accept: 'application/json, text/plain, */*',
    //     'Content-Type': 'application/json'
    //   }
    // });
    // const topbarContent = await topbarData.json();
    // const data = topbarContent?.data;

    if (!isEmpty(data?.content)) {
      const contentList = data?.content?.split(/[\[\]\(\)]/);

      const item = {
        title: contentList?.[1],
        url: contentList?.[3]
      };
      dispatch(setTopBarContent(item));
      return item;
    }
    return null;
  } catch (e) {
    console.log('Error : ', e);
    return false;
  } finally {
    dispatch(setAppLoading(false));
  }
};

export const getCTAContent = () => async (dispatch) => {
  try {
    dispatch(setAppLoading(true));
    const data = (await getSitemap(CTA_CONTENT_ID)) ?? {};
    if (!isEmpty(data?.content)) {
      dispatch(setCTAContent(data?.content));
      return data?.content;
    }
    return null;
  } catch (e) {
    console.log('Error : ', e);
    return false;
  } finally {
    dispatch(setAppLoading(false));
  }
};

export const getNavbarSolutionList = () => async (dispatch) => {
  try {
    dispatch(setAppLoading(true));
    const data = (await getAllNavbarSolution()) || [];
    if (!isEmpty(data)) {
      dispatch(setNavbarSolutionList(data));
      return data;
    }
    return null;
  } catch (e) {
    console.log('Error : ', e);
    return false;
  } finally {
    dispatch(setAppLoading(false));
  }
};
