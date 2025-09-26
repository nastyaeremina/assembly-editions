const CURRENT_SITE_URL = 'https://assembly.com';

module.exports = {
  siteUrl: CURRENT_SITE_URL,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [`${CURRENT_SITE_URL}/sitemap.xml`, `${CURRENT_SITE_URL}/server-sitemap.xml`]
  }
};
