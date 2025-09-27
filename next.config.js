/** @type {import('next').NextConfig} */
const purgecss = require('@fullhuman/postcss-purgecss');
const path = require('path');

async function fetchGraphQL({ preview = false, query, type = ['other'] }) {
  try {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: 'POST',
        next: { tags: type },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`
        },
        body: JSON.stringify({ query })
      }
    );
    return response.json();
  } catch (error) {
    console.error('Error fetching from Contentful:', error);
    return { data: { redirectCollection: { items: [] } } };
  }
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
      const query = `query {
      redirectCollection {
      items {
        name
        oldPath
        redirectToPath
        permanent
      }
    }
  }`;

      const postData = (await fetchGraphQL({ preview: false, query })) ?? [];

      if (postData.length === 0) {
        return [];
      }

      const allPost = postData?.data?.redirectCollection?.items;
      const redirectData =
        allPost?.map((item, index) => {
          const oldPath = item?.oldPath?.trim();
          const redirectPath = item?.redirectToPath?.trim();
          if (redirectPath?.includes('https://') || redirectPath?.includes('http://')) {
            return {
              source: oldPath,
              destination: redirectPath,
              permanent: item?.permanent,
              basePath: false
            };
          } else {
            return {
              source: oldPath,
              destination: redirectPath,
              permanent: item?.permanent
            };
          }
        }) ?? [];

      //set redirects for all the /features pages
      redirectData?.push({
        source: '/features/:path',
        destination: `/apps/directory/:path`,
        permanent: true
      });
      return redirectData;
    } catch (error) {
      console.log('error', error);
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
