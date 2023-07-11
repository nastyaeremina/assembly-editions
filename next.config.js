/** @type {import('next').NextConfig} */
const purgecss = require('@fullhuman/postcss-purgecss');
async function fetchGraphQL({ preview = false, query }) {
  return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN
      }`
    },
    body: JSON.stringify({ query })
  }).then((response) => response.json());
}
const nextConfig = {
  reactStrictMode: true,
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
    const pageDemoData = (await fetchGraphQL({ preview: false, query: pageDemoQuery })) ?? [];

    if (postData.length === 0) {
      return [];
    }

    const allPost = postData?.data?.redirectCollection?.items;
    const redirectData =
      allPost?.map((item, index) => {
        if (item?.redirectToPath.includes('https://') || item?.redirectToPath.includes('http://')) {
          return {
            source: item?.oldPath,
            destination: item?.redirectToPath,
            permanent: item?.permanent,
            basePath: false
          };
        } else {
          return {
            source: item?.oldPath,
            destination: item?.redirectToPath,
            permanent: item?.permanent
          };
        }
      }) ?? [];
    redirectData?.push({
      source: '/weekly-demo',
      destination: `/${pageDemoData?.data?.pageDemo?.slug}`,
      permanent: true
    });
    return redirectData;
  }
};

module.exports = nextConfig;
