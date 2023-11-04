import { headers } from 'next/headers';

/**
 * Check if a given URL has the same domain as the current domain or matches 'copilot.com' or 'www.copilot.com'.
 * @param {string} url - The URL to be checked.
 * @returns {boolean} - Returns true if the URL has the same domain or matches 'copilot.com' or 'www.copilot.com', otherwise returns false.
 */

export function isSameDomain(url) {
  const currentDomain = headers().get('host');
  const link = new URL(url);
  const isSame =
    link.hostname === currentDomain || link.hostname === 'copilot.com' || link.hostname === 'www.copilot.com';
  return isSame;
}
