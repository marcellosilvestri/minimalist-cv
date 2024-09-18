/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://silvestri.bio",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/icon.png"],
  transform: async (config, path) => {
    if (path === "/") {
      return {
        loc: path,
        priority: 1,
      };
    }
    return {
      loc: path,
      priority: 0.7,
    };
  },
};
