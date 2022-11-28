/** @type {import('next').NextConfig} */
const purgecss = require("@fullhuman/postcss-purgecss");

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  plugins: [
    purgecss({
      content: ["./**/*.html"],
    }),
  ],
  images: {
    domains: ["images.ctfassets.net"],
  },
};

module.exports = nextConfig;
