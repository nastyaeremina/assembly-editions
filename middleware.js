import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getCommonContent } from './app/lib/contentful-common';
import { HOME_VARIANT_CONTENT_ID } from './app/constants/constant';
import { chooseVariant, getPathCookieName, isEmpty, parseVariants } from './app/helpers/helpers';

/**
 * Removes a cookie from the response if it exists
 * @param {NextResponse} response - The response object
 * @param {string} cookieName - The name of the cookie to remove
 * @returns {NextResponse} - The response object with the cookie removed
 */
function removeCookieIfExists(response, cookieName) {
  response.cookies.set({
    name: cookieName,
    value: '',
    path: '/',
    expires: new Date(0) // Expired date
  });
  //set a header to indicate that the cookie has been removed
  response.headers.set(`x-${cookieName}-removed`, true);
  return response;
}

/**
 * Sets the A/B test variant for a given page by reading the common content experiments.
 * If a matching experiment is found for the pathname, selects a variant based on weight,
 * attaches the experiment name, and sets a cookie and custom response header with the variant data.
 *
 * @param {string} pathCookie - The name of the cookie to store variant data (based on pathname).
 * @param {string} pathname - The current page path to match against defined experiments.
 * @param {boolean} isCookieExists - Whether the cookie exists.
 * @returns {NextResponse} - A Next.js response object with variant data set if applicable.
 *
 * Behavior:
 * - Retrieves A/B test definitions via `getCommonContent`.
 * - Parses the experiments using `parseVariants`.
 * - Matches the current path to an experiment and chooses a weighted variant using `chooseVariant`.
 * - Stores the selected variant and its experiment name in both a cookie and a response header.
 * - If no experiment is found, returns a normal response without setting any variant.
 * - If the cookie exists and the experiment is empty, removes the cookie.
 */
async function setVariant(pathCookie, pathname, isCookieExists) {
  const content = await getCommonContent(HOME_VARIANT_CONTENT_ID);
  const redirectResponse = NextResponse.next();

  // If content is empty, remove cookie if exists and return
  if (isEmpty(content)) {
    return isCookieExists ? removeCookieIfExists(redirectResponse, pathCookie) : redirectResponse;
  }

  // Parse the experiments
  const abTestExperiment = parseVariants(content);

  // If experiments are empty, remove cookie if exists and return
  if (isEmpty(abTestExperiment)) {
    return isCookieExists ? removeCookieIfExists(redirectResponse, pathCookie) : redirectResponse;
  }

  // Find the experiment for the current pathname
  const experiment = abTestExperiment.find((exp) => exp.pagePath === pathname);

  // If no matching experiment found, remove cookie if exists and return
  if (isEmpty(experiment)) {
    return isCookieExists ? removeCookieIfExists(redirectResponse, pathCookie) : redirectResponse;
  }

  // If cookie exists and experiment is valid, keep the existing cookie
  if (isCookieExists) {
    return redirectResponse;
  }

  // If we have a valid experiment and no existing cookie, set the variant
  const variant = chooseVariant(experiment.variants);
  const variantData = {
    ...variant,
    experimentName: experiment?.experimentName
  };

  redirectResponse.cookies.set({
    name: pathCookie,
    value: JSON.stringify(variantData),
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24 * 90, // 90 days
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax'
  });

  // Set the variant data in the response header
  redirectResponse.headers.set(`x-${pathCookie}`, JSON.stringify(variantData));
  return redirectResponse;
}

export async function middleware(request) {
  const { pathname, search, hash } = request.nextUrl;
  const hostname = request.headers.get('host');

  // For development testing, you can use this query parameter
  const isTestMode = search.includes('test=old-domain');

  // Check if the request is from the old domain
  const isOldDomain = hostname.includes('copilot.com') || isTestMode;

  // If it's the old domain and not already on the domain-change page
  if (isOldDomain && pathname !== '/domain-change') {
    // Remove the test parameter from search if it exists
    const cleanSearch = search.replace(/[?&]test=old-domain/, '');

    // Handle the case where pathname might contain a hash
    const [cleanPathname, pathHash] = pathname.split('#');

    // Combine the hash from pathname (if exists) with the URL hash
    const combinedHash = pathHash ? `#${pathHash}${hash}` : hash;

    // Create the next URL with the current path, cleaned search params, and hash
    const nextUrl = `${cleanPathname}${cleanSearch}${combinedHash}`;

    return NextResponse.redirect(new URL(`/domain-change?next=${encodeURIComponent(nextUrl)}`, request.url));
  }
  // Check if variant cookie exists
  const cookieStore = await cookies();
  const pathCookie = getPathCookieName(pathname);
  const variantCookie = cookieStore.get(pathCookie);
  const isCookieExists = !isEmpty(variantCookie);
  return setVariant(pathCookie, pathname, isCookieExists);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - android-chrome (android chrome icon)
     * - public/images (images)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|android-chrome|public/images).*)'
  ]
};
