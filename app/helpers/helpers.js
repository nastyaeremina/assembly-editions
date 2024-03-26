import Cookies from 'js-cookie';
import { FIELD_SCORE, MONTH_LIST } from '../constants/constant';
import { COOKIE_NAME } from '../../app/lib/constants';
import { setUserAuth } from '../../app/actions/appActions';
import { getSEOdata } from '../lib/contentful-seo';
import slugify from 'slugify';

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
  const filtered =
    array?.filter(function (el) {
      return !isEmpty(el);
    }) || [];
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

export const createArrayWithFixedLength = (originalArray = [], desiredLength) => {
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
        ? ['/images/opengraph_Image.jpeg']
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

export async function getsvgCode(svgUrl) {
  // Fetch the SVG code from the URL.
  if (isEmpty(svgUrl)) return null;
  let code = null;
  await fetch(svgUrl)
    .then((response) => response.text())
    .then((data) => {
      code = data;
    })
    .catch((error) => {
      console.error('Error fetching SVG:', error);
    });
  return code;
}

/**
 * Custom sorting function for an array of objects based on a specified order.
 * @param {Array} array - The array of objects to be sorted.
 * @param {Array} order - The desired order of elements based on the specified field.
 * @param {string} [field='slug'] - The field to be used for comparison; default is 'slug'.
 * @returns {Array} - The sorted array based on the specified order and field.
 */
export const customSort = (array, order, field = 'slug') => {
  return array.sort((a, b) => {
    const indexOfA = order.indexOf(a?.[field]);
    const indexOfB = order.indexOf(b?.[field]);

    if (indexOfA === -1) {
      return 1; // If 'a' is not found in the order, move it to the end.
    }
    if (indexOfB === -1) {
      return -1; // If 'b' is not found in the order, move it to the beginning.
    }

    return indexOfA - indexOfB;
  });
};

/**
 * Extract the tag ID from nested React elements and convert it to a slug.
 * @param {React.ReactNode} children - The React elements containing the text.
 * @returns {string} - The extracted and slugified tag ID.
 */
export function extractTagId(children) {
  let newNode = children;
  while (newNode?.props?.children) {
    newNode = newNode.props.children;
  }
  const tagId = `${stringToSlugyfy(newNode)}`;
  return tagId;
}

/**
 * Check if the given input string can be converted to a number.
 * @param {string} inputString - The input string to be checked.
 * @returns {boolean} - True if the input can be converted to a number, false otherwise.
 */
export function isNumber(inputString) {
  return !isNaN(inputString);
}

export function formatPlanPrice(price) {
  if (isNumber(price)) return `$${price}`;
  return price;
}

/**
 * Convert a string to a slug.
 * @param {string} value - The string to be converted to a slug.
 * @returns {string} - The slugified version of the input string.
 */
export function stringToSlugyfy(value) {
  // Check if the value is empty
  if (isEmpty(value)) return '';

  // Convert the value to a slug with lowercase letters
  return slugify(value, { lower: true });
}

/**
 * Finds the index of the specified string in the paragraph starting from a specific index.
 * If the string is not found, returns Infinity.
 * @param {string} paragraph - The paragraph to search within.
 * @param {string} searchString - The string to search for.
 * @param {number} fromIndex - The index to start the search from. Default is 0.
 * @param {boolean} reverse - If true, searches in reverse direction. Default is false.
 * @returns {number} - The index of the string, or Infinity if not found.
 */
const findStringIndex = (paragraph, char, fromIndex = 0, reverse = false) => {
  let index = -1;
  // Determine the appropriate search method based on the 'reverse' parameter
  if (reverse) {
    // If searching in reverse, use lastIndexOf method
    index = paragraph.lastIndexOf(char, fromIndex);
  } else {
    // Otherwise, use indexOf method
    index = paragraph.indexOf(char, fromIndex);
  }
  // Return the index of the string if found, otherwise return Infinity
  return index !== -1 ? index : Infinity;
};

/**
 * Converts a paragraph to a sentence containing the any search term of searchTermArray with context.
 * @param {string} paragraph - The paragraph to search within.
 * @param {string} searchTermArray - The terms of array to search for within the paragraph.
 * @returns {string} - The sentence containing the search term with context, or an error message if not found.
 */
export const trimParagraphToSentence = (paragraph, searchTermArray) => {
  // Trim unnecessary spaces and line breaks from the paragraph
  const trimmedParagraph = paragraph.trim().replace(/\s+/g, ' ');

  //set default searchindex -1
  let searchTermIndex = -1;

  // Find the index of the search term within the paragraph
  for (let substring of searchTermArray) {
    searchTermIndex = trimmedParagraph.toLowerCase().indexOf(substring);
    if (searchTermIndex !== -1) {
      break; // return -1 if any substring is not found
    }
  }

  // Handle cases where the search term is not found by returning the original paragraph
  if (searchTermIndex === -1) {
    return paragraph;
  }

  // Determine the start and end indices of the sentence containing the search term
  let sentenceStart = Math.max(
    0,
    findStringIndex(trimmedParagraph, '.', searchTermIndex, true) + 1,
    findStringIndex(trimmedParagraph, ',', searchTermIndex, true) + 1,
    findStringIndex(trimmedParagraph, '?', searchTermIndex, true) + 1
  );
  let sentenceEnd = Math.min(
    trimmedParagraph.length,
    findStringIndex(trimmedParagraph, '.', searchTermIndex) + 1,
    findStringIndex(trimmedParagraph, ',', searchTermIndex) + 1,
    findStringIndex(trimmedParagraph, '?', searchTermIndex) + 1
  );

  // Adjust the indices to handle cases where the search term is at the beginning or end of a sentence
  if (sentenceStart > searchTermIndex || sentenceEnd < searchTermIndex) {
    sentenceStart = Math.max(
      findStringIndex(trimmedParagraph, '.', searchTermIndex - 1, true),
      findStringIndex(trimmedParagraph, ',', searchTermIndex - 1, true),
      findStringIndex(trimmedParagraph, '?', searchTermIndex - 1, true)
    );
    sentenceEnd = Math.min(
      trimmedParagraph.length,
      findStringIndex(trimmedParagraph, '.', searchTermIndex) + 1,
      findStringIndex(trimmedParagraph, ',', searchTermIndex) + 1,
      findStringIndex(trimmedParagraph, '?', searchTermIndex) + 1
    );
  }

  // Extract the sentence containing the search term
  const sentence = trimmedParagraph.slice(sentenceStart, sentenceEnd).trim();
  // Return the original paragraph if the sentence cannot be extracted
  if (!sentence) {
    return paragraph;
  }

  // Ensure the sentence starts with a capital letter and ends with proper punctuation
  const firstChar = sentence.charAt(0).toUpperCase();
  const lastChar = sentence.length > 1 ? sentence.charAt(sentence.length - 1) : '';
  const punctuation = lastChar === '.' || lastChar === '?' || lastChar === '!' ? '' : '.';

  // Return the formatted sentence
  return `${firstChar}${sentence.slice(1)}${punctuation}`;
};

/**
 * Function to return unique array based on specified criteria.
 * @param {Array} data - The array to be processed.
 * @param {Array} [consideredFields=[]] - List of fields to consider for uniqueness.
 * @param {Array} [ignoredFields=[]] - List of fields to ignore for uniqueness.
 * @returns {Array} - Unique array based on the specified criteria.
 */

export const getUniqueArray = ({ data, consideredFields = [], ignoredFields = [] }) => {
  // Create a Map to store unique objects based on stringified version of objects
  const uniqueArr = Array.from(new Map(data.map((item) => [JSON.stringify(item), item])).values());

  // Filter the unique array based on specified criteria
  const uniqueArrFiltered = uniqueArr.filter((item, index, self) => {
    if (ignoredFields.length > 0) {
      // If ignoredFields are provided, check all fields except those in ignoredFields for uniqueness
      return (
        index ===
        self.findIndex((t) => Object.keys(t).every((key) => t[key] === item[key] || ignoredFields.includes(key)))
      );
    } else if (consideredFields.length > 0) {
      // If consideredFields are provided, check only those fields for uniqueness
      return index === self.findIndex((t) => consideredFields.every((field) => t[field] === item[field]));
    } else {
      // If neither consideredFields nor ignoredFields are provided, check all fields for uniqueness
      return index === self.findIndex((t) => Object.keys(t).every((key) => t[key] === item[key]));
    }
  });
  return uniqueArrFiltered;
};

/**
 * Constructs a search result item object based on provided parameters.
 * @param {string} value - The value of the search result item.
 * @param {string} slug - The slug of the search result item.
 * @param {string} parentValue - The parent value of the search result item.
 * @param {string} parentType - The parent type of the search result item.
 * @param {string} query - The search query string.
 * @param {RegExp} searchRegex - The regular expression used for searching.
 * @param {string} searchValue - The value used for searching.
 * @returns {object|null} - A search result item object if it matches the criteria, otherwise null.
 */

export const SearachResultItem = ({
  value,
  slug,
  parentValue = '',
  parentType,
  query,
  searchRegex,
  searchValue = ''
}) => {
  const searchText = !isEmpty(searchValue) ? searchValue : value;
  const fieldScore = FIELD_SCORE[parentType] ?? FIELD_SCORE.other;
  if (searchText?.toLowerCase().includes(query))
    return {
      value,
      parentType,
      slug,
      parentValue,
      matchType: 'query',
      score: fieldScore * 10
    };
  else {
    const matches = searchText?.toLowerCase()?.match(searchRegex);
    if (matches && matches.length > 0)
      return {
        value,
        parentType,
        slug,
        parentValue,
        matchType: 'term',
        score: fieldScore * matches.length
      };
  }
  return null;
};

/**
 * Searches a Rich text JSON object for values with parent elements matching the specified criteria.
 * @param {object} json - The JSON object to search.
 * @param {string} query - The search query string.
 * @param {string} slug - The article slug.
 * @param {RegExp} searchRegex - The regular expression used for searching.
 * @returns {array} - An array of search results matching the specified criteria.
 */
export function searchJsonForValueWithParent({ json, query, slug, searchRegex }) {
  let results = [];
  let parentHeading, parentValue;

  // Function to traverse the JSON object and search for values with parents
  function traverse(node, parentType = null) {
    if (node.nodeType === 'heading-2' || node.nodeType === 'heading-3') {
      parentHeading = node.nodeType;
    }
    if (node.nodeType === 'text' && !isEmpty(parentHeading)) {
      parentValue = node.value;
      parentHeading = '';
    }
    if (node.nodeType === 'text' && node.value) {
      // Search for the value and construct search result item
      const searchItem = SearachResultItem({ value: node.value, slug, parentValue, parentType, query, searchRegex });
      if (!isEmpty(searchItem)) results.push(searchItem);
    } else if (node.content && Array.isArray(node.content)) {
      // Traverse child nodes recursively
      node.content.forEach((childNode) => traverse(childNode, node.nodeType));
    }
  }

  traverse(json);
  return results;
}

/**
 * Searches an array of FAQ items for values with parent elements matching the specified criteria.
 * @param {array} array - The array of FAQ items to search.
 * @param {string} query - The search query string.
 * @param {string} slug - The article slug.
 * @param {RegExp} searchRegex - The regular expression used for searching.
 * @returns {array} - An array of search results matching the specified criteria.
 */
export function searchFAQForValueWithParent({ array, query, slug, searchRegex }) {
  let results = [];
  array?.forEach((item) => {
    //search for the faq quetion
    const searchQuetionItem = SearachResultItem({
      value: item?.answer,
      slug,
      parentValue: item?.question,
      parentType: 'faqQuetion',
      query,
      searchRegex,
      searchValue: item?.question
    });
    if (!isEmpty(searchQuetionItem)) results.push(searchQuetionItem);

    //search for the faq answer
    const searchAnswerItem = SearachResultItem({
      value: item?.answer,
      slug,
      parentValue: item?.question,
      parentType: 'faqAnswer',
      query,
      searchRegex
    });
    if (!isEmpty(searchAnswerItem)) results.push(searchAnswerItem);
  });
  return results;
}

// Function to calculate average rate
export function calculateAverageRate(items) {
  // Check if items array is not empty
  if (items?.length === 0) {
    return 0; // Return 0 if array is empty
  }

  // Calculate sum of all rates
  const sum = items.reduce((accumulator, currentItem) => {
    return accumulator + currentItem?.rate;
  }, 0);

  // Calculate average rate
  const average = sum / items?.length;

  return average;
}
