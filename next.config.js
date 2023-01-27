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
  }
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       has: [
  //         {
  //           type: 'cookie',
  //           key: 'current-portal-session',
  //           value: '(?<sessionid>.*)',
  //         }
  //       ],
  //       destination: 'https://dashboard.copilot.com',
  //       permanent: false,
  //     }
  //   ];
  // },
};

module.exports = nextConfig;
