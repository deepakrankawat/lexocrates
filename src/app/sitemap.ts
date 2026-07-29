import type { MetadataRoute } from 'next';
import { getBlogPosts } from '@/lib/erpnext-blogs';
import { servicesList } from '@/lib/services-data';
import { teamMembers } from '@/lib/team-data';

const DEFAULT_SITE_URL = 'https://www.lexocrates.com';

type SitemapEntry = MetadataRoute.Sitemap[number];
type ChangeFrequency = NonNullable<SitemapEntry['changeFrequency']>;

type StaticRoute = {
  path: string;
  changeFrequency: ChangeFrequency;
  priority: number;
};

const staticRoutes: StaticRoute[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/about', changeFrequency: 'yearly', priority: 0.8 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/team', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/lawyer', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/careers', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/terms-and-conditions', changeFrequency: 'yearly', priority: 0.2 },
  { path: '/cookies-policy', changeFrequency: 'yearly', priority: 0.2 },
];

function getSiteUrl(): string {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL;
  const url = new URL(configuredUrl);

  if (url.protocol !== 'http:' && url.protocol !== 'https:') {
    throw new Error('NEXT_PUBLIC_SITE_URL must use http:// or https://');
  }

  url.hash = '';
  url.search = '';

  return url.toString().replace(/\/+$/, '');
}

function absoluteUrl(siteUrl: string, path: string): string {
  return new URL(path.replace(/^\/+/, ''), `${siteUrl}/`).toString();
}

function encodeRoutePath(path: string): string {
  return path.split('/').map(encodeURIComponent).join('/');
}

/**
 * Blog dates are stored for display as "May 21, 2026".
 * Appending UTC produces an unambiguous ISO 8601 timestamp for <lastmod>.
 */
function blogDateToIso(date: string): string {
  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return new Date().toISOString();
  }

  return parsedDate.toISOString();
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const blogPosts = await getBlogPosts();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: absoluteUrl(siteUrl, route.path),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const serviceEntries: MetadataRoute.Sitemap = servicesList.map((service) => ({
    url: absoluteUrl(siteUrl, `/services/${encodeURIComponent(service.slug)}`),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: absoluteUrl(siteUrl, `/blog/${encodeRoutePath(post.slug)}`),
    lastModified: blogDateToIso(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const teamEntries: MetadataRoute.Sitemap = teamMembers.map((member) => ({
    url: absoluteUrl(siteUrl, `/team/${encodeURIComponent(member.slug)}`),
    changeFrequency: 'yearly',
    priority: 0.5,
  }));

  return [...staticEntries, ...serviceEntries, ...blogEntries, ...teamEntries];
}
