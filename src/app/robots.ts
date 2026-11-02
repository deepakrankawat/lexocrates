import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lexocrates.com').replace(/\/+$/, '');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/private'],
      },
      // Allow AI Search indexing and citation bots for Generative Engine Optimization (GEO)
      {
        userAgent: ['OAI-SearchBot', 'PerplexityBot', 'Claude-SearchBot', 'Google-Extended', 'Applebot-Extended'],
        allow: '/',
      },
      // Restrict bulk foundation model training crawlers if desired
      {
        userAgent: ['GPTBot', 'CCBot'],
        disallow: '/',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}

