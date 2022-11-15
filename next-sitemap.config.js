const siteURL = "https://www.copilot.com";

module.exports = {
  siteUrl: siteURL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://www.copilot.com/sitemap.xml",
      "https://www.copilot.com/server-sitemap.xml",
    ],
  },
};
