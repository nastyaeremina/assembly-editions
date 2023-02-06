/** @type {import('next').NextConfig} */
const purgecss = require('@fullhuman/postcss-purgecss');
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
    domains: ['images.ctfassets.net', 'copilot-blog.ghost.io', 'images.unsplash.com']
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
    const data = async function fetchGraphQL(preview = false) {
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
    };
    const postData = (await data()) ?? [];
    console.log(postData);
    if (postData.length === 0) {
      return [];
    }
    const allPost = postData?.data?.redirectCollection?.items;
    return (
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
      }) ?? []
    );
  }
};

module.exports = nextConfig;
