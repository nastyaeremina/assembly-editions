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
            preview ? 'ZgkVOC33Z2rxYcGzUwVEKRr05h59HfY4Yo8Q14Y4oN8' : 'SzwToPTvkUQeo7liE28HvSTV1n-q_2ckxZ4KUpwsdA0'
          }`
        },
        body: JSON.stringify({ query })
      }).then((response) => response.json());
    };

    const postData = (await data()) ?? [];
    const allPost = postData?.data?.redirectCollection?.items;
    return allPost?.map((item, index) => {
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
    });
  }
};

module.exports = nextConfig;
