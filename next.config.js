/** @type {import('next').NextConfig} */
const purgecss = require('@fullhuman/postcss-purgecss');
const path = require('path');

async function fetchGraphQL({ query, variables = {} }) {
  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;
  const token = `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`;

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      },
      body: JSON.stringify({ query, variables })
    });

    let json;
    try {
      json = await res.json();
    } catch (parseErr) {
      console.error('Failed to parse Contentful response JSON:', parseErr);
      return null;
    }

    if (!res.ok || json.errors) {
      console.error('Contentful GraphQL error:', JSON.stringify(json.errors || {}, null, 2));
      return null;
    }
    return json.data;
  } catch (err) {
    console.error('Network/unknown error calling Contentful:', err);
    return null;
  }
}

async function fetchAllRedirects() {
  const PAGE_SIZE = 100;

  let skip = 0;
  let total = 0;
  const allItems = [];

  try {
    do {
      const data = await fetchGraphQL({
        query: ` query  {
      redirectCollection(limit: 100, skip: ${skip}) {
        total
        items {
          name
          oldPath
          redirectToPath
          permanent
        }
      }
    }`,
        variables: { limit: PAGE_SIZE, skip }
      });

      if (!data || !data.redirectCollection) {
        console.warn(`No redirectCollection returned for skip=${skip}`);
        break;
      }

      const { items = [], total: t = 0 } = data.redirectCollection;
      total = t || total; // keep last known total
      allItems.push(...items);
      skip += PAGE_SIZE;
    } while (skip < total);
  } catch (err) {
    console.error('Error during redirect fetch loop:', err);
  }

  const bySource = new Map();
  for (const item of allItems) {
    try {
      const oldPath = (item?.oldPath || '').trim();
      const dest = (item?.redirectToPath || '').trim();
      if (!oldPath || !dest) continue;
      if (!oldPath.startsWith('/')) continue;

      bySource.set(oldPath, {
        source: oldPath,
        destination: dest,
        permanent: typeof item?.permanent === 'boolean' ? item.permanent : true,
        ...(dest.startsWith('http://') || dest.startsWith('https://') ? { basePath: false } : {})
      });
    } catch (rowErr) {
      console.error('Error processing redirect row:', rowErr, item);
    }
  }

  const redirects = Array.from(bySource.values());

  redirects.push({
    source: '/features/:path',
    destination: '/apps/directory/:path',
    permanent: true
  });

  return redirects;
}

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  webpack: (config) => {
    config.resolve.alias['next/image'] = path.resolve(__dirname, 'app/components/patchedImage/index.js');
    return config;
  },
  images: {
    domains: ['images.ctfassets.net', 'copilot-blog.ghost.io', 'images.unsplash.com', 'firebasestorage.googleapis.com']
  },
  async redirects() {
    try {
      const redirects = await fetchAllRedirects();

      return Array.isArray(redirects) ? redirects : [];
    } catch (e) {
      console.error('redirects() failed:', e);
      return [];
    }
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/experts/:path*',
          destination: 'https://copilotplatforms.partnerpage.io/experts/:path*'
        }
      ]
    };
  }
};

module.exports = nextConfig;
