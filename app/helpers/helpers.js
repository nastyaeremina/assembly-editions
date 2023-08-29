import Cookies from 'js-cookie';
import { MONTH_LIST } from '../constants/constant';
import { COOKIE_NAME } from '../../app/lib/constants';
import { setUserAuth } from '../../app/actions/appActions';
import { getSEOdata } from '../lib/contentful-seo';

export function isEmpty(value) {
  if (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  ) {
    return true;
  } else {
    return false;
  }
}
/**
 * @desc Checks for valid email
 * @param {*} value // Accepts string
 */
export function isEmail(value) {
  // eslint-disable-next-line max-len
  var myRegEx =
    // eslint-disable-next-line max-len
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var isValid = myRegEx.test(value);
  return isValid ? true : false;
}

export const dateToMonthYear = (date) => {
  if (!date) return;
  const newDate = new Date(date);

  var m = newDate.getUTCMonth(); //Month from 0 to 11
  var y = newDate.getUTCFullYear();
  return MONTH_LIST[m] + ', ' + y;
};

export function removeEmptyElement(array) {
  const filtered = array?.filter(function (el) {
    return !isEmpty(el);
  });
  return filtered;
}

export function separateSpecialChar(title) {
  const titleSplitList = title?.split(',');
  const seprateWithDotList = titleSplitList?.join(`<span>,</span>`)?.split('.');
  const finalTitle = seprateWithDotList?.join(`<span>.</span>`);
  return finalTitle;
}
export function convertHighlights(value) {
  const newList = [];
  var result = value?.split(/\[(.*?)\]/);
  result?.forEach((element) => {
    if (!isEmpty(element)) {
      const roundedList = element.split(/\((.*?)\)/) ?? [];
      if (!isEmpty(roundedList)) newList.push({ title: roundedList[1], desc: roundedList[3] });
    }
  });
  return newList;
}

export const convertSitemapDataToKeyValue = (value) => {
  const list = value?.split('\n#');
  list?.shift();
  let sitemapList = [];
  list?.forEach((item) => {
    const newItemList = removeEmptyElement(item?.split('\n'));

    const title = newItemList?.[0];
    newItemList?.shift();
    const mapList = [];
    newItemList?.forEach((element) => {
      const newObject = element?.split(/[\[\]\(\)]/);
      const url = newObject[3]?.split('www.copilot.com')?.[1] || newObject[3];
      mapList?.push({ name: newObject[1], url, isExternal: url === newObject[3] });
    });
    sitemapList?.push({ title, list: mapList });
  });
  return sitemapList;
};

export const joinArrayToString = ({ list, fieldName, seprator }) => {
  const nameList = list?.map((item) => item?.[fieldName]);
  const result = nameList.join(seprator);
  return result;
};

export const createArrayWithFixedLength = (originalArray, desiredLength) => {
  const repeatedArray = [];
  const originalLength = originalArray.length;

  if (originalLength >= desiredLength) return originalArray;
  for (let i = 0; i < desiredLength; i++) {
    const repeatedIndex = i % originalLength;
    repeatedArray.push(originalArray[repeatedIndex]);
  }

  return repeatedArray;
};

export const isUserAtuthenticated = () => (dispatch) => {
  const myCookieValue = Cookies.get(COOKIE_NAME);
  if (!isEmpty(myCookieValue)) {
    const newUser = JSON.parse(myCookieValue) ?? {};
    if (newUser && newUser?.user?.isUnAuth === false) {
      dispatch(setUserAuth(true));
    }
  }
};

export const getSEOData = async ({ id, data }) => {
  let seoData;
  if (!isEmpty(id)) seoData = (await getSEOdata(id)) ?? [];
  else seoData = data;
  return {
    title: seoData?.seoTitle,
    alternates: { canonical: seoData?.canonical },
    description: seoData?.description,
    openGraph: {
      type: 'website',
      locale: 'en_IE',
      site_name: 'copilot.com',
      images: isEmpty(seoData?.openGraphImage)
        ? []
        : [
            {
              url: seoData?.openGraphImage?.url
            }
          ]
    }
  };
};

export function extractYouTubeVideoId(url) {
  const urlObj = new URL(url);
  const path = urlObj.pathname;
  const videoId = path.slice(1); // Remove the leading slash
  return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}
