import { cookies, draftMode, headers } from 'next/headers';
import { CURRENT_DOMAIN, EXTERNAL_LINKS_CONTENT_ID, EXTERNAL_LINK_ALIASES, EXTERNAL_LINK_KEYS } from '../constants/constant';
import { COOKIE_NAME } from '../lib/constants';
import { isEmpty, parseSocialMediaLinks, parseSocialMediaLinksArray, parseExternalLinks, parseExternalLinksMap } from './helpers';
import { getCommonContent }  from '../lib/contentful-common';

/**
 * Check if a given URL has the same domain as the current domain or matches 'copilot.app' or 'www.copilot.app'.
 * @param {string} url - The URL to be checked.
 * @returns {boolean} - Returns true if the URL has the same domain or matches 'copilot.app' or 'www.copilot.app', otherwise returns false.
 */

export function isSameDomain(url) {
  const currentDomain = headers().get('host');
  const link = new URL(url);
  const isSame = link.hostname === currentDomain || link.hostname.includes(CURRENT_DOMAIN);
  return isSame;
}

/**
 * Retrieves the value of a cookie or header with the given name.
 * @param {string} cookieName - The name of the cookie or header to retrieve.
 * @returns {Object} - The value of the cookie or header.
 */
export function getCookieValue(cookieName) {
  try {
    if(headers().get(`x-${cookieName}-removed`)) return {};

    const abVariant = cookies().get(cookieName)?.value || headers().get(`x-${cookieName}`);
    
    if (!abVariant) {
      return {};
    }

    const parsedValue = JSON.parse(abVariant);
    return parsedValue;
  } catch (error) {
    return {};
  }
}

/**
 * Retrieves AB test information from a cookie.
 * @param {Object} options - The options object containing the cookie key and fallback content ID.
 * @param {string} options.cookieKey - The key of the cookie to retrieve.
 * @param {string} [options.fallbackContentId] - The fallback content ID to use if the cookie value is empty.
 * @returns {Object} - The AB test information.
 */
export function getABTestInfoFromCookie({ cookieKey, fallbackContentId = ''}) {
  const pathCookieName = `${COOKIE_NAME}-${cookieKey}`;
  const cookieValue = getCookieValue(pathCookieName);

  const entryId = !isEmpty(cookieValue?.entryId)
    ? cookieValue.entryId
    : fallbackContentId;

  const abTestContentLabel = !isEmpty(cookieValue?.variantName)
    ? cookieValue.variantName
    : '';

  const abTestExperimentName = !isEmpty(cookieValue?.experimentName)
    ? cookieValue.experimentName
    : '';

  return {
    contentId: entryId,
    abTestContentLabel,
    abTestExperimentName,
  };
}

/**
 * Helper function to handle both draft and production content fetching with AB testing
 * @param {Object} params
 * @param {Object} params.searchParams - URL search parameters
 * @param {string} params.cookieKey - Key for AB test cookie
 * @param {string} params.fallbackContentId - Default content ID if no AB test is active
 * @param {Function} params.getContentFn - Function to fetch content (e.g., getHomeContent)
 * @returns {Promise<{content: any, abTestContentLabel: string, abTestExperimentName: string}>}
 */
export async function getPageContent({ searchParams, cookieKey, fallbackContentId, getContentFn }) {
  // Quick check for draft mode - if disabled, skip all draft-related logic
  const { isEnabled } = await draftMode();
  
  if (!isEnabled) {
    // Production mode - use AB test logic directly
    const abTestInfo = getABTestInfoFromCookie({
      cookieKey,
      fallbackContentId
    });
    
    let content = await getContentFn({ 
      id: abTestInfo.contentId
    });

    // If content is empty, fetch fallback content
    if (isEmpty(content)) {
      content = await getContentFn({ 
        id: fallbackContentId
      });
      abTestInfo.abTestContentLabel = '';
      abTestInfo.abTestExperimentName = '';
    }

    return {
      content,
      abTestContentLabel: abTestInfo.abTestContentLabel,
      abTestExperimentName: abTestInfo.abTestExperimentName
    };
  }

  // Draft mode is enabled - check for preview ID
  const id = searchParams?.id;
  if (id) {
    // Preview specific content
    const content = await getContentFn({ 
      id,
      preview: true
    });

    return {
      content,
      abTestContentLabel: null,
      abTestExperimentName: null
    };
  }

  // Draft mode enabled but no specific ID - use AB test logic
  const abTestInfo = getABTestInfoFromCookie({
    cookieKey,
    fallbackContentId
  });

  const content = await getContentFn({ 
    id: abTestInfo.contentId
  });

  return {
    content,
    abTestContentLabel: abTestInfo.abTestContentLabel,
    abTestExperimentName: abTestInfo.abTestExperimentName
  };
}

/**
 * Fetches and returns social media links in a normalized format.
 * Optionally returns only the link URLs.
 *
 * @param {Object} params
 * @param {boolean} params.linksOnly - Whether to return just the link URLs.
 * @returns {Promise<Array<{ name: string, link: string }> | string[]>}
 */
export async function getSocialMediaLinks({ linksOnly = false } = {}) {
  try {
    const allLinks = await getExternalLinks();

    // Allowed canonical keys for social platforms
    const allowedCanonicals = new Set([
      EXTERNAL_LINK_KEYS.Twitter,
      EXTERNAL_LINK_KEYS.X,
      EXTERNAL_LINK_KEYS.Facebook,
      EXTERNAL_LINK_KEYS.Linkedin,
      EXTERNAL_LINK_KEYS.Youtube,
      EXTERNAL_LINK_KEYS.Instagram,
    ]);

    // Filter and normalize links
    const socialMediaLinks = allLinks
      .filter((linkObj) => {
        const rawKey = (linkObj.name || '').toLowerCase();
        const canonical = EXTERNAL_LINK_ALIASES[rawKey] || linkObj.name;
        return allowedCanonicals.has(canonical);
      })
      .map((linkObj) => {
        const rawKey = (linkObj.name || '').toLowerCase();
        const canonical = EXTERNAL_LINK_ALIASES[rawKey] || linkObj.name;
        return {
          name: canonical,
          link: linkObj.link,
        };
      });

    return linksOnly
      ? socialMediaLinks.map((item) => item.link)
      : socialMediaLinks;
  } catch (error) {
    console.error('Error fetching social media links:', error);
    return [];
  }
}


/**
 * Fetches all external links from Contentful (markdown lines like (Name)[URL]).
 * Returns both list and map forms for flexible usage.
 *
 * @param {Object} options
 * @param {boolean} [options.asMap=false] - If true, returns a key->url map. Otherwise returns an array.
 * @returns {Promise<Array|Object>} - Array of {name, link} when asMap=false, otherwise a map { [name]: url }.
 */
export async function getExternalLinks({ asMap = false } = {}) {
  try {
    const markdownContent = await getCommonContent(EXTERNAL_LINKS_CONTENT_ID);
    if (isEmpty(markdownContent)) {
      return asMap ? {} : [];
    }
    if (asMap) {
      const rawMap = parseExternalLinksMap(markdownContent);
      // Normalize keys via aliases (case-insensitive)
      const normalized = {};
      Object.entries(rawMap).forEach(([key, url]) => {
        const canonical = EXTERNAL_LINK_ALIASES[key.toLowerCase()] || key;
        normalized[canonical] = url;
      });
      return normalized;
    }
    return parseExternalLinks(markdownContent);
  } catch (error) {
    console.error('Error fetching external links:', error);
    return asMap ? {} : [];
  }
}

/**
 * Fetches a single external link by name, case-insensitive.
 * @param {string} name - Key in markdown, e.g., 'OnboardingLink', 'Twitter'.
 * @param {string} [fallback] - Fallback URL if missing.
 * @returns {Promise<string|undefined>} - URL string or fallback/undefined.
 */
export async function getExternalLink(name, fallback) {
  if (isEmpty(name)) return fallback;
  const map = await getExternalLinks({ asMap: true });
  // case-insensitive lookup
  const lower = name.toLowerCase();
  const key = Object.keys(map).find((k) => k.toLowerCase() === lower);
  return key ? map[key] : fallback;
}

 /** Determines breadcrumb text and link based on the referer URL.
 * 
 * @param {string} referer - The referer URL from headers
 * @param {string} currentDomain - The current domain for fallback logic
 * @returns {Object} - Object containing breadcrumbText and breadcrumbLink
 */
export function getBreadcrumbFromReferer(referer, currentDomain) {
  let breadcrumbText = 'Blog Home';
  let breadcrumbLink = '/blog';
  
  if (referer && referer.includes('/blog/')) {
    // Check if it's a blog detail page (has a slug after /blog/)
    const blogPath = referer.split('/blog/')[1];
    if (blogPath && blogPath.split('/').length === 1) {
      // This is a blog detail page like /blog/xyz
      breadcrumbText = 'Article';
      breadcrumbLink = referer; // Link back to the specific blog post
    } else {
      // This is the main blog page or other blog pages
      breadcrumbText = 'Blog Home';
      breadcrumbLink = '/blog';
    }
  } else if (!referer || (currentDomain && referer.includes(currentDomain))) {
    // Default fallback for direct access or internal navigation
    breadcrumbText = 'Blog Home';
    breadcrumbLink = '/blog';
  }
  
  return { breadcrumbText, breadcrumbLink };
}