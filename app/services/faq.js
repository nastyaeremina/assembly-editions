import { PER_API_LIMIT_FOR_FAQ_SECTION } from '../constants/constant';
import { getFAQData } from '../lib/contentful-faq';

/**
 * Retrieves FAQ data based on a list of data IDs and filters it according to specific criteria.
 * @param {Object} faqData - An object containing an array of FAQ data.
 * @returns {Array} - An array of filtered FAQ data that matches the given criteria.
 */
export async function getFAQsData({ data: faqData }) {
  try {
    let posts = []; // An array to store the final result (FAQ data).
    let allPosts = []; // An array to accumulate all retrieved FAQ data.

    // Extract IDs from 'faqData' and format them as strings enclosed in double quotes.
    const dataIdList = faqData?.map((item) => `"${item.sys.id}"`) || [];

    const batchPromises = []; // An array to hold promises for batch API requests.

    // Split the data IDs into smaller batches to stay within a limit for API requests.
    for (let i = 0; i < dataIdList.length; i += PER_API_LIMIT_FOR_FAQ_SECTION) {
      const batch = dataIdList.slice(i, i + PER_API_LIMIT_FOR_FAQ_SECTION);
      // Create promises for each batch, each containing an API request to fetch FAQ data.
      batchPromises.push(Promise.all(batch.map((id) => getFAQData(`id_in: [${id}]`))));
    }

    // Wait for all batch API requests to complete and accumulate their results.
    const batchResults = await Promise.all(batchPromises);

    // Merge the results of all batch requests into 'allPosts'.
    batchResults.forEach((data) => {
      allPosts = allPosts.concat(...data);
    });

    // Map the original data IDs to their corresponding FAQ data, filtering out any null values.
    posts = dataIdList
      ?.map((dataId) => {
        const matchedData = allPosts?.find((dataItem) => {
          // Remove double quotes from 'dataId' and compare with FAQ data IDs.
          return dataItem?.sys?.id === dataId.replace(/"/g, '');
        });
        return matchedData ? { ...matchedData } : null;
      })
      .filter((item) => item !== null);

    // Return the filtered FAQ data.
    return posts;
  } catch (e) {
    console.log('Error : ', e);
    return false;
  }
}
