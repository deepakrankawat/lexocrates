import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogDetailHero } from '@/components/sections/blog-detail-hero';
import { BlogDetailContent } from '@/components/sections/blog-detail-content';
import { buildMeta } from '@/lib/seo';
import { getBlogPosts } from '@/lib/erpnext-blogs';

type Params = { slug: string[] };

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lexocrates.com';

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const blogPosts = await getBlogPosts();
  return blogPosts.map((post) => ({ slug: post.slug.split('/') }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug: slugParts } = await params;
  const slug = slugParts.join('/');
  const blogPosts = await getBlogPosts();
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return buildMeta({
    title: post.metaTitle || `${post.title} | Lexocrates Blog`,
    description: post.metaDescription || post.excerpt || post.title,
    canonical: `${siteUrl}/blog/${post.slug}`,
    ogImage: post.metaImage,
  });
}

function toIsoDate(dateString?: string): string {
  if (!dateString) return new Date().toISOString();
  const d = new Date(dateString);
  return Number.isNaN(d.getTime()) ? new Date().toISOString() : d.toISOString();
}

export default async function BlogDetailPage({ params }: { params: Promise<Params> }) {
  const { slug: slugParts } = await params;
  const slug = slugParts.join('/');
  const blogPosts = await getBlogPosts();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const postUrl = `${siteUrl}/blog/${post.slug}`;
  const imageUrl = post.metaImage
    ? (post.metaImage.startsWith('http') ? post.metaImage : `${siteUrl}${post.metaImage.startsWith('/') ? '' : '/'}${post.metaImage}`)
    : `${siteUrl}/images/og-image.jpg`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || post.metaDescription || post.title,
    image: [imageUrl],
    datePublished: toIsoDate(post.publishedOn || post.date),
    dateModified: toIsoDate(post.lastModified || post.publishedOn || post.date),
    author: {
      '@type': 'Person',
      name: post.author || 'Lexocrates Legal Editorial Team',
      url: `${siteUrl}/team`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lexocrates',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo-dark.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${siteUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  return (
    <main className="bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogDetailHero post={post} />
      <BlogDetailContent
        post={post}
        recommendedPosts={blogPosts.filter((item) => item.id !== post.id).slice(0, 3)}
      />
    </main>
  );
}
