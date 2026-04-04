import type { MetadataRoute } from 'next';
import { servicesList } from '@/lib/services-data';
import { blogPosts } from '@/lib/blog-data';
import { teamMembers } from '@/lib/team-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lexocrates.com';
  const lastModified = new Date().toISOString();

  const withAlternates = (url: string) => ({
    url,
    lastModified,
    alternates: {
      languages: {
        'en-US': url,
        'en-GB': url,
        'en-CA': url,
      },
    },
  });

  const base: MetadataRoute.Sitemap = [
    { ...withAlternates(`${siteUrl}/`), priority: 1, changeFrequency: 'weekly' },
    { ...withAlternates(`${siteUrl}/contact`), priority: 0.6, changeFrequency: 'monthly' },
    { ...withAlternates(`${siteUrl}/blog`), priority: 0.8, changeFrequency: 'weekly' },
    { ...withAlternates(`${siteUrl}/services`), priority: 0.8, changeFrequency: 'monthly' },
    { ...withAlternates(`${siteUrl}/team`), priority: 0.6, changeFrequency: 'monthly' },
    { ...withAlternates(`${siteUrl}/lawyer`), priority: 0.6, changeFrequency: 'monthly' },
    { ...withAlternates(`${siteUrl}/about`), priority: 0.5, changeFrequency: 'yearly' },
    { ...withAlternates(`${siteUrl}/careers`), priority: 0.4, changeFrequency: 'monthly' },
    { ...withAlternates(`${siteUrl}/privacy-policy`), priority: 0.2, changeFrequency: 'yearly' },
    { ...withAlternates(`${siteUrl}/terms-and-conditions`), priority: 0.2, changeFrequency: 'yearly' },
    { ...withAlternates(`${siteUrl}/cookies-policy`), priority: 0.2, changeFrequency: 'yearly' },
  ];

  const serviceEntries = servicesList.map((service) => ({
    ...withAlternates(`${siteUrl}/services/${service.slug}`),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const blogEntries = blogPosts.map((post) => ({
    ...withAlternates(`${siteUrl}/blog/${post.slug}`),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const teamEntries = teamMembers.map((member) => ({
    ...withAlternates(`${siteUrl}/team/${member.slug}`),
    changeFrequency: 'yearly',
    priority: 0.4,
  }));

  return [...base, ...serviceEntries, ...blogEntries, ...teamEntries];
}
