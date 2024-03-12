/** @type {import('next').NextConfig} */
const purgecss = require('@fullhuman/postcss-purgecss');
async function fetchGraphQL({ preview = false, query, type = ['other'] }) {
  return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
    method: 'POST',
    next: { tags: type },
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`
    },
    body: JSON.stringify({ query })
  }).then((response) => response.json());
}
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  compiler: {
    styledComponents: true
  },
  plugins: [
    purgecss({
      content: ['./**/*.html']
    })
  ],
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
      const pageDemoQuery = ` query {
    pageDemo(id:"6yTkSs6vPA4UtptzHbvw3r"){
      slug
    }
  }`;

      const postData = (await fetchGraphQL({ preview: false, query })) ?? [];
      const pageDemoData = (await fetchGraphQL({ preview: false, query: pageDemoQuery, type: ['weekly-demo'] })) ?? [];

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
      //add weekly-demo url
      redirectData?.push({
        source: '/weekly-demo',
        destination: `/${pageDemoData?.data?.pageDemo?.slug}`,
        permanent: true
      });
      return redirectData;
    } catch (error) {
      console.log('error', error);
      return [];
    }
  },
  async rewrites() {
    return [
      {
        source: '/experts/:path*',
        destination: 'https://copilotplatforms.partnerpage.io/experts/:path*'
      }
    ];
  }
};

module.exports = nextConfig;
