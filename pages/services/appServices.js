import { setAppLoading, setTopBarContent } from "../../actions/appActions";
import { TOP_BAR_CONTENT_ID } from "../../constants/constant";
import { isEmpty } from "../../helpers/helpers";
import { getSitemap } from "../../lib/contentful-sitemap";

export const getTopBarContent = () => async (dispatch) => {
    try {
      dispatch(setAppLoading(true));
      const data = (await getSitemap(TOP_BAR_CONTENT_ID)) ?? '';
      
      if(!isEmpty(data?.content)){

        const contentList = data?.content?.split(/[\[\]\(\)]/)
        
        const item = {
          title:contentList?.[1],
          url:contentList?.[3]
        }
       dispatch( setTopBarContent(item))
       return item;
      }
      return null
    } catch (e) {
      console.log('Error : ', e);
      return false;
    } finally {
      dispatch(setAppLoading(false));
    }
  };