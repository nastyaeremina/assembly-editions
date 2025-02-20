import { headers } from 'next/headers';
import { CURRENT_DOMAIN } from '../constants/constant';

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
