
import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'
import { servicesList } from '@/lib/services-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lexocrates.vercel.app'

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/team',
    '/careers',
    '/blog',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/cookies-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic Blog routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Dynamic Service routes
  const serviceRoutes = servicesList.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogRoutes, ...serviceRoutes]
}
