import { NextResponse } from 'next/server';

export function middleware(request) {
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


    // Redirect to the domain-change page with the next parameter
    return NextResponse.redirect(new URL(`/domain-change?next=${encodeURIComponent(nextUrl)}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
};
