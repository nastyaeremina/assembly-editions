import { NextResponse } from 'next/server';
import { COOKIE_NAME } from './lib/constants';
import { getCurrentExperiment } from './lib/optimize';
import { blockedIp } from './lib/rules/ip';

export const config = {
  matcher: ['/']
};
export async function middleware(req) {
  // Return 403 if the IP is blocked
  if (await blockedIp(req)) {
    return new NextResponse(null, { status: 403 });
  }
  let cookie = req.cookies.get(COOKIE_NAME)?.value;

  if (!cookie) {
    let n = Math.random() * 100;
    const experiment = getCurrentExperiment();
    const variant = experiment.variants.find((v, i) => {
      if (v.weight >= n) return true;
      n -= v.weight;
    });

    cookie = `${experiment.id}.${variant.id}`;
  }

  const [, variantId] = cookie.split('.');
  const url = req.nextUrl;

  // `0` is the original version
  if (variantId !== '0') {
    url.pathname = url.pathname.replace('/', `/${cookie}/`);
  }

  const res = NextResponse.rewrite(url);

  // Add the cookie if it's not there
  if (!req.cookies.has(COOKIE_NAME)) {
    const one_year_ms = 24 * 60 * 60 * 1000 * 365;
    res.cookies.set({ name: COOKIE_NAME, value: cookie, expires: new Date(Date.now() + one_year_ms) });
  }

  return res;
}
