/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://lexocrates.vercel.app',
  generateRobotsTxt: true, // Auto-generate robots.txt
  sitemapSize: 5000,
  generateIndexSitemap: false,
  exclude: ['/private', '/api/*'], // Block internal API and private pages
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private', '/api/*'],
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/'], // Optional: Block AI scrappers if privacy matters
      }
    ],
  },
}
