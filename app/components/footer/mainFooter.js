import { FOOTER_CONTENT_ID, EXTERNAL_LINK_KEYS, EXTERNAL_LINK_ALIASES } from '../../constants/constant';
import { isEmpty } from '../../helpers/helpers';
import { getSocialMediaLinks } from '../../helpers/serverSideHelpers';
import { getCommonContent } from '../../lib/contentful-common';
import Footer from './footer';

/**
 * Fetches and processes footer content from Contentful.
 * Retrieves footer data and social media links, then parses the footer content
 * into sections for description and footer data list.
 *
 * @returns {Promise<Object>} - Promise that resolves to footer content object
 * @returns {string} returns.footerDescription - The footer description text
 * @returns {Array} returns.footerData - Array of footer data sections
 * @returns {Array} returns.socialMediaLinks - Array of social media link objects
 *
 * @example
 * const { footerDescription, footerData, socialMediaLinks } = await getContent();
 */
export async function getContent() {
  // Fetch footer content from Contentful with preview enabled
  const footerData = (await getCommonContent(FOOTER_CONTENT_ID, true)) ?? [];

  // Fetch social media links from Contentful
  const socialMediaLinks = await getSocialMediaLinks({});

  // Process footer data if it exists
  if (!isEmpty(footerData)) {
    // Split footer data into sections based on numbered markers {0}, {1}, {2}, etc.
    const sections = footerData.split(/\{\d+\}/);

    let description = '';
    let footerDataList = [];

    // Process each section to extract description and footer data
    sections?.forEach((section) => {
      if (isEmpty(section)) return;
      if (section.includes('#Description')) {
        // Extract description from the section marked with #Description
        const lines = section.split('\n').filter((line) => line.trim() !== '');
        if (lines && lines.length > 0) {
          // Remove the #Description label from the first line
          if (lines[0] === '#Description') {
            lines.shift();
          }
        }
        // Join the remaining lines to form the description
        description = lines.join(' ').trim();
      } else if (section.includes('#')) {
        // Add sections that contain other headings to footer data list
        footerDataList.push(section);
      }
    });

    return {
      footerDescription: description,
      footerData: footerDataList,
      socialMediaLinks
    };
  }

  // Return empty data if footer content is not available
  return {
    footerData: [],
    footerDescription: '',
    socialMediaLinks: []
  };
}

/**
 * MainFooter Component
 *
 * Main footer component that fetches footer content and social media links,
 * then renders the Footer component with the processed data.
 *
 * @returns {Promise<JSX.Element>} - Promise that resolves to the rendered footer
 *
 * @example
 * <MainFooter />
 */
export default async function MainFooter() {
  // Fetch footer content including description, footer data, and social media links
  const { footerData, footerDescription, socialMediaLinks } = await getContent();

  // Render the Footer component with all the fetched data
  return <Footer footerData={footerData} description={footerDescription} socialMediaLinks={socialMediaLinks} />;
}
