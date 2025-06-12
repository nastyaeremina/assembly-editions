import { cookies, headers } from 'next/headers';
import { CURRENT_DOMAIN } from '../constants/constant';
import { COOKIE_NAME } from '../lib/constants';
import { isEmpty } from './helpers';

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