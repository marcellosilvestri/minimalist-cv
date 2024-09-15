/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://silvestri.bio",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/icon.png"],
};
