'use client';
import { isEmpty } from '../../../helpers/helpers';
import { HelpLeftSub, HelpLink } from '../../../styles/homepageStyles';

/**
 * Renders a support item component with the provided data.
 * @param {Object} data - An object containing the support item data.
 *   @property {string} title - The title of the support item.
 *   @property {string} body - The body content of the support item.
 *   @property {string} linkText - The text for the link within the support item.
 *   @property {string} linkUrl - The URL the link should navigate to.
 * @returns {JSX.Element} - A React component that displays the support item.
 */
export default function SupportItem({ data }) {
  return (
    <>
      <HelpLeftSub>
        {!isEmpty(data?.title) && <h3>{data?.title}</h3>}
        {!isEmpty(data?.body) && <p>{data?.body}</p>}
        {!isEmpty(data?.linkText) && !isEmpty(data?.linkUrl) && (
          <HelpLink className='icon-link'>
            <a href={data?.linkUrl} className='learn-link mb0'>
              {data?.linkText}
              <svg width='16' height='12' viewBox='0 0 16 12' fill='none' class='HoverArrow'>
                <path
                  d='M5.7998 1.37109L10.4283 5.99958L5.7998 10.6281'
                  stroke-width='1.92854'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='HoverArrow__tipPath'
                />
                <path
                  d='M10.33 5.99951H1.5'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='HoverArrow__linePath'
                />
              </svg>
              <svg width='8' height='14' viewBox='0 0 8 14' fill='none' class='mobilearrow'>
                <path
                  d='M2 3L6 7L2 11'
                  stroke='#09AA6C'
                  stroke-width='1.85714'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </a>
          </HelpLink>
        )}
      </HelpLeftSub>
    </>
  );
}
